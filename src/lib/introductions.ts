// Joins introductions (src/content/introductions) to works in the catalogue by edition reference,
// and prepares their Markdown for display.
//
// Citations are Markdown footnotes: the text cites with markers like [^nattier1992], and the
// references are defined, in APA 7 format, at the end of the body:
//
//   [^nattier1992]: Nattier, J. (1992). The Heart Sūtra: A Chinese apocryphal text? …
//
// Edition histories (front matter) may cite the same references with the same markers.
import { getCollection, type CollectionEntry } from 'astro:content';
import { catalog, type Work } from './catalog';

export type Introduction = CollectionEntry<'introductions'>;

const workByRef = new Map<string, Work>();
for (const w of catalog.works) for (const e of w.editions) workByRef.set(e.ref, w);

const DEFINITION = /^\[\^([^\]\s]+)\]:[ \t]+(.+)$/gm;
const MARKER = /\[\^([^\]\s]+)\](?!:)/g;

/** Split a body into its text and its reference definitions (key → APA 7 reference). */
export function splitReferences(body: string): { text: string; references: Map<string, string> } {
	const references = new Map<string, string>();
	for (const [, key, ref] of body.matchAll(DEFINITION)) references.set(key, ref.trim());
	return { text: body.replace(DEFINITION, '').trim(), references };
}

const markersIn = (s: string) => new Set([...s.matchAll(MARKER)].map((m) => m[1]));

/** Check that every citation has a reference and every reference is cited; returns problems. */
export function citationProblems(intro: Pick<Introduction, 'body' | 'data'>): string[] {
	const { text, references } = splitReferences(intro.body ?? '');
	const problems: string[] = [];
	const cited = markersIn(text);
	for (const e of intro.data.editions) for (const k of markersIn(e.history)) cited.add(k);
	if (references.size === 0) problems.push('no references: cite sources as Markdown footnotes ([^key]) in APA 7 format');
	for (const k of cited) if (!references.has(k)) problems.push(`footnote [^${k}] is cited but has no reference`);
	for (const k of references.keys()) if (!cited.has(k)) problems.push(`reference [^${k}] is never cited`);
	return problems;
}

let cache: Map<Work, Introduction> | undefined;

/**
 * Map of work → introduction. Fails the build if an introduction names an edition that is
 * not in the catalogue, covers editions of more than one work, duplicates another, or has
 * footnotes without references (or references never cited).
 */
export async function introductions(): Promise<Map<Work, Introduction>> {
	if (cache) return cache;
	const map = new Map<Work, Introduction>();
	for (const entry of await getCollection('introductions')) {
		const file = `src/content/introductions/${entry.id}.md`;
		const works = new Set<Work>();
		for (const ref of [...entry.data.refs, ...entry.data.editions.map((e) => e.ref)]) {
			const work = workByRef.get(ref);
			if (!work) throw new Error(`${file}: unknown edition "${ref}" (not in src/data/catalog.json)`);
			works.add(work);
		}
		if (works.size > 1)
			throw new Error(`${file}: refs belong to different works: ${[...works].map((w) => w.title).join(', ')}`);
		const problems = citationProblems(entry);
		if (problems.length) throw new Error(`${file}: ${problems.join('; ')}`);
		const work = [...works][0];
		const existing = map.get(work);
		if (existing) throw new Error(`${file}: "${work.title}" already has an introduction (${existing.id}.md)`);
		map.set(work, entry);
	}
	cache = map;
	return map;
}

/** History paragraph for one edition, if the introduction has one. */
export const editionHistory = (intro: Introduction | undefined, ref: string) =>
	intro?.data.editions.find((e) => e.ref === ref)?.history;

/**
 * Markdown for the introduction as shown with one edition: the description, then that
 * edition's history, then only the references cited in those two parts (so footnotes are
 * numbered in reading order and no uncited reference is listed).
 */
export function composeIntroduction(intro: Introduction, editionRef: string, editionLabel: string): string {
	const { text, references } = splitReferences(intro.body ?? '');
	const history = editionHistory(intro, editionRef);
	const md = history ? `${text}\n\n### About this edition: ${editionLabel}\n\n${history}` : text;
	const used = [...markersIn(md)].filter((k) => references.has(k));
	return `${md}\n\n${used.map((k) => `[^${k}]: ${references.get(k)}`).join('\n')}\n`;
}

/** All references of an introduction, in the order they are defined (for structured data). */
export const referencesOf = (intro: Introduction) => [...splitReferences(intro.body ?? '').references.values()];
