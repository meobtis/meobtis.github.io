#!/usr/bin/env node
// Build src/data/catalog.json: a single index of Buddhist Sanskrit texts merged from all
// source repositories in SOURCES, organised by the MEOBTIS taxonomy.
//
//   pnpm catalog            # fetch sources into .cache/sources and rebuild the catalog
//   pnpm catalog --offline  # rebuild from the existing .cache/sources checkouts
//   pnpm catalog --report   # also print merge and classification details

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { classifyGretil } from './classify.mjs';
import { CATEGORY_OVERRIDES, EDITION_NOTES, MERGE, SPLIT, TITLE_OVERRIDES } from './overrides.mjs';
import { SOURCES, checkout } from './sources.mjs';
import { CATEGORY_IDS, TAXONOMY, classifyVinaya, isVinayaPitaka, mapDsbcCategory, mapSaritCategory } from './taxonomy.mjs';
import { capitalise, devaToIast, titleKey } from './text.mjs';

const root = fileURLToPath(new URL('../..', import.meta.url));
const args = new Set(process.argv.slice(2));
const cacheDir = join(root, '.cache/sources');
mkdirSync(cacheDir, { recursive: true });

// 1. Load edition records from every source.
const editions = [];
const sourceInfo = [];
for (const source of SOURCES) {
	const dir = args.has('--offline') ? join(cacheDir, source.repo.split('/')[1]) : checkout(source.repo, cacheDir);
	const records = source.load(dir);
	const refs = new Set();
	for (const r of records) {
		// A source may repeat an ID across files; keep references unique ("…#2").
		r.ref = `${r.source}:${r.sourceId}`;
		for (let n = 2; refs.has(r.ref); n++) r.ref = `${r.source}:${r.sourceId}#${n}`;
		refs.add(r.ref);
		const encodedPath = r.path.split('/').map(encodeURIComponent).join('/');
		r.url = `https://github.com/${source.repo}/blob/main/${encodedPath}`;
		r.rawUrl = `https://raw.githubusercontent.com/${source.repo}/main/${encodedPath}`;
		// Reader page on this site: /read/<source>/<sourceId>/ (a repeated ID gets "-2", "-3", …).
		r.slug = r.ref.replace(':', '/').replace('#', '-');
		editions.push(r);
	}
	const { load, ...info } = source;
	sourceInfo.push({ ...info, url: `https://github.com/${source.repo}`, editions: records.length });
	console.log(`${source.label}: ${records.length} editions` + (source.skipped ? ` (${source.skipped} texts in the repository are not indexed: not Buddhist, or excluded)` : ''));
}

// 2. Group editions into works by normalised title, then apply manual merges and splits.
const parent = new Map(editions.map((e) => [e.ref, e.ref]));
const find = (x) => (parent.get(x) === x ? x : (parent.set(x, find(parent.get(x))), parent.get(x)));
const union = (a, b) => parent.set(find(a), find(b));
const byRef = new Map(editions.map((e) => [e.ref, e]));

const firstByKey = new Map();
for (const e of editions) {
	if (SPLIT.has(e.ref)) continue;
	e.key = titleKey(e.title);
	if (firstByKey.has(e.key)) union(e.ref, firstByKey.get(e.key));
	else firstByKey.set(e.key, e.ref);
}
for (const group of MERGE) {
	for (const ref of group) if (!byRef.has(ref)) console.warn(`overrides: unknown edition ${ref} in MERGE`);
	group.slice(1).forEach((ref) => byRef.has(ref) && union(ref, group[0]));
}
const groups = new Map();
for (const e of editions) {
	const g = find(e.ref);
	if (!groups.has(g)) groups.set(g, []);
	groups.get(g).push(e);
}

// 3. Build works: choose a display title, author and category.
const SOURCE_ORDER = Object.fromEntries(SOURCES.map((s, i) => [s.id, i]));
const editionOrder = (a, b) =>
	SOURCE_ORDER[a.source] - SOURCE_ORDER[b.source] ||
	(a.script === b.script ? 0 : a.script === 'iast' ? -1 : 1) ||
	(a.transliterated ? 1 : 0) - (b.transliterated ? 1 : 0) ||
	(a.note ? 1 : 0) - (b.note ? 1 : 0) ||
	a.sourceId.localeCompare(b.sourceId);

/** Bracketed notes in a title, e.g. "Mahāvastu Avadāna (Vol 2)" → "Vol 2". */
const titleNote = (t) => t.match(/[([]([^)\]]+)[)\]]/)?.[1].trim();
const stripNotes = (t) =>
	t
		.replace(/\s*[([][^)\]]*[)\]]/g, '')
		.replace(/\s+\d+(-\d+)?$/, '') // "Madhyamakāvatāra 1-5"
		.trim();

const unclassified = [];
const works = [];
for (const eds of groups.values()) {
	eds.sort(editionOrder);
	const iast = eds.find((e) => e.script === 'iast');
	const deva = eds.find((e) => e.script === 'deva');
	const override = (table) => eds.map((e) => table[e.ref]).find(Boolean);

	// Display title: the first IAST title with diacritics (GRETIL's stem forms read best),
	// without editorial notes in brackets.
	const ascii = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
	const best =
		iast && eds.find((e) => e.script === 'iast' && e.title !== iast.title && ascii(e.title) === ascii(iast.title))
			? eds.find((e) => e.script === 'iast' && e.title !== iast.title && ascii(e.title) === ascii(iast.title))
			: iast;
	const title =
		override(TITLE_OVERRIDES) ??
		capitalise(best ? stripNotes(best.title) : devaToIast(stripNotes(deva.title))).replace(/\s+/g, ' ');
	const author = eds.find((e) => e.author)?.author;

	// Category: manual override › DSBC (IAST, then Devanāgarī) › SARIT › GRETIL rules › DSBC "vividha".
	let placement = override(CATEGORY_OVERRIDES);
	let fallback = null;
	for (const e of eds) {
		if (placement || !e.dsbcCategory) continue;
		const p = isVinayaPitaka(e.dsbcCategory)
			? classifyVinaya(iast?.title ?? devaToIast(e.title))
			: mapDsbcCategory(e.dsbcCategory);
		if (p?.category === 'other/miscellaneous') fallback ??= p;
		else if (p) placement = p;
	}
	for (const e of eds) if (!placement && e.saritCategory) placement = mapSaritCategory(e.saritCategory);
	for (const e of eds) if (!placement && e.source === 'gretil') placement = classifyGretil(e);
	placement ??= fallback;
	if (typeof placement === 'string') placement = { category: placement };
	if (!placement) {
		unclassified.push(title);
		placement = { category: 'other/miscellaneous' };
	}
	if (!CATEGORY_IDS.has(placement.category)) throw new Error(`Unknown category ${placement.category} for ${title}`);

	// Link labels name the source and script ("GRETIL", "DSBC", "DSBC देवनागरी"). Where one
	// source has several editions of a work, they are told apart by a note or a number.
	const counts = {};
	const editionsOut = eds.map((e) => {
		const source = SOURCES.find((s) => s.id === e.source);
		const base = e.transliterated ? `${source.label} (transliterated)` : source.label + (e.script === 'deva' ? ' देवनागरी' : '');
		counts[base] = (counts[base] ?? 0) + 1;
		return {
			ref: e.ref,
			source: e.source,
			sourceId: e.sourceId,
			label: base,
			script: e.script,
			title: e.title,
			note: EDITION_NOTES[e.ref] ?? e.note ?? titleNote(e.title),
			n: counts[base],
			...(e.transliterated && { transliterated: true, transliteratedFrom: e.transliteratedFrom }),
			slug: e.slug,
			url: e.url,
			rawUrl: e.rawUrl,
			originalUrl: e.originalUrl,
		};
	});
	for (const e of editionsOut) {
		if (counts[e.label] > 1) e.label = e.note ? `${e.label} (${e.note})` : e.n > 1 ? `${e.label} ${e.n}` : e.label;
		delete e.note;
		delete e.n;
	}

	works.push({
		title,
		...(deva && { titleDeva: stripNotes(deva.title) }),
		...(author && { author }),
		category: placement.category,
		...(placement.section && { section: placement.section }),
		editions: editionsOut,
	});
}

const collator = new Intl.Collator('en', { sensitivity: 'base' });
const sortKey = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/^(ārya|arya)\s*/i, '');
works.sort((a, b) => collator.compare(sortKey(a.title), sortKey(b.title)));

// 4. Write the catalogue.
const count = (pred) => works.filter(pred).length;
const catalog = {
	generated: new Date().toISOString(),
	sources: sourceInfo.map((s) => ({ ...s, works: count((w) => w.editions.some((e) => e.source === s.id)) })),
	groups: TAXONOMY.map((g) => ({
		...g,
		count: count((w) => w.category.startsWith(`${g.id}/`)),
		categories: g.categories.map((c) => ({ ...c, count: count((w) => w.category === `${g.id}/${c.id}`) })),
	})),
	works,
};
const out = join(root, 'src/data/catalog.json');
mkdirSync(join(root, 'src/data'), { recursive: true });
writeFileSync(out, JSON.stringify(catalog, null, '\t') + '\n');

console.log(`\n${works.length} works from ${editions.length} editions → src/data/catalog.json`);
console.log(`  in more than one source: ${count((w) => new Set(w.editions.map((e) => e.source)).size > 1)}`);
for (const g of catalog.groups) console.log(`  ${g.label}: ${g.count}`);
if (unclassified.length) {
	console.warn(`\n${unclassified.length} works could not be classified (filed under Other › Miscellaneous):`);
	if (args.has('--report')) unclassified.forEach((t) => console.warn(`  - ${t}`));
}
if (args.has('--report')) {
	console.log('\nMerged across sources:');
	for (const w of works.filter((w) => new Set(w.editions.map((e) => e.source)).size > 1))
		console.log(`  ${w.title}  ⟵  ${w.editions.map((e) => `${e.label}: ${e.title}`).join(' | ')}`);
}
