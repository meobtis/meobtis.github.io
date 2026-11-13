#!/usr/bin/env node
// Helper for introductions (src/content/introductions), used by the augment-text skill.
//
//   node scripts/introductions.mjs <command> …   (or `pnpm intros <command> …`)
//
//   pnpm intros find <title>                  works matching a title (diacritics ignored), with
//                                             their edition refs, Markdown URLs and suggested file name
//   pnpm intros missing [category] [--limit N] works without an introduction, e.g. "sutra/prajnaparamita"
//   pnpm intros check                         validate all introductions against the catalogue
//   pnpm intros status                        coverage by category

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';

const root = fileURLToPath(new URL('..', import.meta.url));
const dir = join(root, 'src/content/introductions');
const catalog = JSON.parse(readFileSync(join(root, 'src/data/catalog.json'), 'utf8'));

const fold = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
/** File name for a work's introduction: its title, folded to ASCII. */
const fileName = (title) => `${fold(title).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.md`;

const workByRef = new Map(catalog.works.flatMap((w) => w.editions.map((e) => [e.ref, w])));

function loadIntroductions() {
	if (!existsSync(dir)) return [];
	return readdirSync(dir)
		.filter((f) => f.endsWith('.md'))
		.map((file) => {
			const text = readFileSync(join(dir, file), 'utf8');
			const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
			return { file, data: m ? parseYaml(m[1]) : null, body: m ? text.slice(m[0].length).trim() : '' };
		});
}

/** Validate introductions; returns { errors, covered: Map<work, file> }. */
const DEFINITION = /^\[\^([^\]\s]+)\]:[ \t]+(.+)$/gm;
const MARKER = /\[\^([^\]\s]+)\](?!:)/g;
const warnings = [];

function check() {
	const errors = [];
	const covered = new Map();
	for (const { file, data, body } of loadIntroductions()) {
		const err = (msg) => errors.push(`${file}: ${msg}`);
		const warn = (msg) => warnings.push(`${file}: ${msg}`);
		if (!data) {
			err('missing YAML front matter');
			continue;
		}
		for (const key of ['title', 'refs', 'summary', 'updated'])
			if (data[key] == null) err(`missing "${key}"`);
		if (!data.englishTitle) warn(`no "englishTitle" (add the best-known English title, if there is one)`);
		if (data.sources) err('"sources" is no longer used: cite with Markdown footnotes in APA 7 format');

		// Citations: Markdown footnotes whose definitions (APA 7 references) end the body.
		const definitions = new Map([...body.matchAll(DEFINITION)].map((m) => [m[1], m[2].trim()]));
		const text = body.replace(DEFINITION, '').trim();
		const cited = new Set([...text.matchAll(MARKER)].map((m) => m[1]));
		for (const e of data.editions ?? []) for (const m of String(e.history).matchAll(MARKER)) cited.add(m[1]);
		if (text.split(/\s+/).length < 80) err('the description (body) should be at least a few paragraphs');
		if ([...text.matchAll(MARKER)].length === 0) err('the description cites no sources: add footnotes like [^nattier1992]');
		if (definitions.size === 0) err('no references: define footnotes at the end of the body, e.g. [^nattier1992]: Nattier, J. (1992). …');
		for (const k of cited) if (!definitions.has(k)) err(`footnote [^${k}] is cited but has no reference`);
		for (const [k, ref] of definitions) {
			if (!cited.has(k)) err(`reference [^${k}] is never cited`);
			// APA 7 shape: "Author. (Year). Title. …" with a date in parentheses and a DOI or URL.
			if (!/\((\d{4}[a-z]?|n\.d\.)(, [^)]+)?\)\./.test(ref)) err(`reference [^${k}] has no APA 7 date such as "(1992)." or "(n.d.).": ${ref.slice(0, 60)}…`);
			if (!/https?:\/\/\S+$/.test(ref)) warn(`reference [^${k}] does not end with a DOI or URL: ${ref.slice(0, 60)}…`);
		}
		const refs = [...(data.refs ?? []), ...(data.editions ?? []).map((e) => e.ref)];
		const works = new Set();
		for (const ref of refs) {
			const w = workByRef.get(ref);
			if (!w) err(`unknown edition "${ref}"`);
			else works.add(w);
		}
		if (works.size > 1) err(`refs belong to different works: ${[...works].map((w) => w.title).join(', ')}`);
		const work = [...works][0];
		if (work) {
			if (covered.has(work)) err(`"${work.title}" already has an introduction (${covered.get(work)})`);
			else covered.set(work, file);
		}
	}
	return { errors, covered };
}

const describe = (w, covered) => ({
	title: w.title,
	titleDeva: w.titleDeva,
	author: w.author,
	category: w.category,
	introduction: covered.get(w) ?? null,
	suggestedFile: `src/content/introductions/${fileName(w.title)}`,
	editions: w.editions.map((e) => ({ ref: e.ref, label: e.label, title: e.title, markdown: e.rawUrl, original: e.originalUrl })),
});

const [cmd = 'status', ...rest] = process.argv.slice(2);
const limitAt = rest.indexOf('--limit');
const limit = limitAt >= 0 ? Number(rest[limitAt + 1]) : Infinity;
const args = limitAt >= 0 ? rest.filter((_, i) => i !== limitAt && i !== limitAt + 1) : rest;
const { errors, covered } = check();

switch (cmd) {
	case 'find': {
		const q = fold(args.join(' '));
		const hits = catalog.works.filter((w) => fold(w.title).includes(q) || (w.titleDeva && w.titleDeva.includes(args.join(' '))));
		console.log(JSON.stringify(hits.slice(0, limit === Infinity ? 10 : limit).map((w) => describe(w, covered)), null, 2));
		break;
	}
	case 'missing': {
		const missing = catalog.works.filter((w) => !covered.has(w) && (!args[0] || w.category.startsWith(args[0])));
		console.log(JSON.stringify(missing.slice(0, limit).map((w) => describe(w, covered)), null, 2));
		console.error(`${missing.length} works without an introduction${args[0] ? ` in ${args[0]}` : ''}.`);
		break;
	}
	case 'check':
		break;
	case 'status': {
		const total = catalog.works.length;
		console.log(`Introductions: ${covered.size} of ${total} works`);
		for (const g of catalog.groups)
			for (const c of g.categories.filter((c) => c.count))
				console.log(
					`  ${`${g.id}/${c.id}`.padEnd(32)} ${String(catalog.works.filter((w) => w.category === `${g.id}/${c.id}` && covered.has(w)).length).padStart(3)} / ${c.count}`,
				);
		break;
	}
	default:
		console.error(`Unknown command "${cmd}". Use find, missing, check or status.`);
		process.exit(2);
}

if (warnings.length) {
	console.error(`\n${warnings.length} warning(s):`);
	warnings.forEach((w) => console.error(`  ! ${w}`));
}
if (errors.length) {
	console.error(`\n${errors.length} problem(s) in src/content/introductions:`);
	errors.forEach((e) => console.error(`  ✗ ${e}`));
	process.exit(1);
} else if (cmd === 'check') console.log(`✓ ${covered.size} introduction(s) valid.`);
