// Loads Sanskrit-to-English translations from src/content/translations/ (<slug>.md and <slug>.interlinear.md),
// pairing each with its catalogue work/edition and rendering both plain and interlinear HTML.
import { getCollection, type CollectionEntry } from 'astro:content';
import { basename } from 'node:path';
import { Marked } from 'marked';
import markedFootnote from 'marked-footnote';
import { catalog, type Edition, type Work } from './catalog';

export type TranslationEntry = CollectionEntry<'translations'>;

export interface TranslationItem {
	slug: string;
	title: string;
	en: TranslationEntry;
	interlinear?: TranslationEntry;
	work?: Work;
	edition?: Edition;
}

const workByRef = new Map<string, { work: Work; edition: Edition }>();
for (const work of catalog.works) {
	for (const edition of work.editions) {
		workByRef.set(edition.ref, { work, edition });
	}
}

function editionRefOf(data: Record<string, unknown>): string | undefined {
	if (data.book_id != null && data.book_id !== '') return `dsbc:${data.book_id}`;
	if (typeof data.gretil_id === 'string' && data.gretil_id) return `gretil:${data.gretil_id}`;
	return undefined;
}

let cache: Map<string, TranslationItem> | undefined;

/** Map of slug -> TranslationItem from src/content/translations/. */
export async function translationsBySlug(): Promise<Map<string, TranslationItem>> {
	if (cache) return cache;
	const entries = await getCollection('translations');
	const enMap = new Map<string, TranslationEntry>();
	const ilMap = new Map<string, TranslationEntry>();

	for (const entry of entries) {
		const fileName = basename(entry.filePath ?? `${entry.id}.md`);
		if (fileName.endsWith('.interlinear.md')) {
			ilMap.set(fileName.slice(0, -'.interlinear.md'.length), entry);
		} else {
			enMap.set(fileName.slice(0, -'.md'.length), entry);
		}
	}

	const map = new Map<string, TranslationItem>();
	for (const [slug, en] of enMap) {
		const interlinear = ilMap.get(slug);
		const data = en.data as Record<string, unknown>;
		const ref = editionRefOf(data);
		const match = ref ? workByRef.get(ref) : undefined;
		map.set(slug, {
			slug,
			title: match?.work.title ?? String(data.title),
			en,
			interlinear,
			work: match?.work,
			edition: match?.edition,
		});
	}

	cache = map;
	return cache;
}

export async function getTranslation(slug: string): Promise<TranslationItem> {
	const item = (await translationsBySlug()).get(slug);
	if (!item) throw new Error(`Unknown translation "${slug}" in src/content/translations/`);
	return item;
}

const marked = new Marked({
	gfm: true,
	walkTokens(token) {
		if (token.type === 'heading') token.depth = Math.min(token.depth + 1, 6);
	},
}).use(markedFootnote({ description: 'Notes', headingClass: 'notes-heading', prefixId: 'note-' }));

/** Strip the leading "# Title" line (already shown in the page header) and render Markdown to HTML. */
export async function renderTranslationHtml(markdown: string): Promise<string> {
	const body = markdown.replace(/^\s*#\s+[^\n]*\n+/, '');
	return (await marked.parse(body)).replace(/(data-note-backref[^>]*>)↩/g, '$1↑');
}

/**
 * Render an interlinear Markdown body into structured blocks so Sanskrit, grammatical symbols,
 * word-by-word glosses, and the running English translation can be styled and tagged cleanly.
 */
export async function renderInterlinearHtml(markdown: string): Promise<string> {
	const body = markdown.replace(/^\s*#\s+[^\n]*\n+/, '');
	const blocks = body
		.split(/\r?\n\s*\r?\n/)
		.map((b) => b.trim())
		.filter(Boolean);

	const parts: string[] = [];
	for (const block of blocks) {
		const headingMatch = block.match(/^(#{1,6})\s+(.+)$/);
		if (headingMatch && !block.includes('\n')) {
			const depth = Math.min(headingMatch[1].length + 1, 6);
			parts.push(`<h${depth}>${await marked.parseInline(headingMatch[2])}</h${depth}>`);
			continue;
		}

		const lines = block.split(/\r?\n/).map((l) => l.replace(/\s+$/, ''));
		const isSegment = /^\d+\.\d+\b/.test(lines[0]);

		if (!isSegment) {
			const htmlLines = await Promise.all(lines.map((l) => marked.parseInline(l)));
			parts.push(`<p class="il-prose">${htmlLines.join('<br>')}</p>`);
			continue;
		}

		const saHtml = await marked.parseInline(lines[0]);
		const morphLine = lines[1];
		const glossLine = lines[2];
		const enLines = lines.slice(3);

		const blockHtml: string[] = [`<div class="il-block">`];
		blockHtml.push(`<p class="il-sa" lang="sa-Latn">${saHtml}</p>`);
		if (morphLine) {
			blockHtml.push(`<p class="il-morph">${escapeHtml(morphLine)}</p>`);
		}
		if (glossLine) {
			blockHtml.push(`<p class="il-gloss">${escapeHtml(glossLine)}</p>`);
		}
		if (enLines.length > 0) {
			const renderedEn = await Promise.all(enLines.map((l) => marked.parseInline(l)));
			blockHtml.push(`<p class="il-en">${renderedEn.join('<br>')}</p>`);
		}
		blockHtml.push(`</div>`);
		parts.push(blockHtml.join('\n'));
	}

	return parts.join('\n');
}

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}
