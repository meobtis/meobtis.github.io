// Source adapters. Each source is a GitHub repository in the meobtis organisation containing
// Markdown files with YAML front matter. A repository is complete (every text of its source); the adapter
// decides which texts MEOBTIS indexes, e.g. SARIT's texts that are not Buddhist are left out here. To add a source, add an entry to SOURCES with a
// `load(dir)` function that returns edition records:
//
//   {
//     source: 'gretil',            // SOURCES[].id
//     sourceId: 'sa_…',            // stable ID of the text within the source
//     title: 'Abhidharmakośa',     // as given by the source (IAST or Devanāgarī)
//     author?: 'Vasubandhu',
//     script: 'iast' | 'deva',
//     path: 'texts/…/x.md',        // path of the Markdown file within the repository
//     originalUrl: 'https://…',    // the text on the original website
//     note?: 'alternative version',// distinguishes several editions from one source
//     dsbcCategory?: ['sūtrapiṭaka', 'avadāna'],
//   }
//
// Each source also gives its attribution: `publisher`, `credit` (one sentence shown with every
// edition) and its terms of use (`terms`, `termsUrl`).

import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse as parseYaml } from 'yaml';
import { devaToIast } from './text.mjs';

/** Clone (or update) a source repository into the cache directory and return its path. */
export function checkout(repo, cacheDir) {
	const dir = join(cacheDir, repo.split('/')[1]);
	const url = `https://github.com/${repo}.git`;
	if (existsSync(join(dir, '.git'))) {
		execFileSync('git', ['-C', dir, 'fetch', '--depth', '1', 'origin'], { stdio: 'inherit' });
		execFileSync('git', ['-C', dir, 'reset', '--hard', 'FETCH_HEAD'], { stdio: 'inherit' });
	} else {
		execFileSync('git', ['clone', '--depth', '1', url, dir], { stdio: 'inherit' });
	}
	return dir;
}

/** All Markdown files under `dir/texts`, except catalogue files, with parsed front matter. */
function readTexts(dir) {
	const out = [];
	const walk = (d) => {
		for (const entry of readdirSync(d, { withFileTypes: true })) {
			const p = join(d, entry.name);
			if (entry.isDirectory()) walk(p);
			else if (entry.name.endsWith('.md') && entry.name !== 'CATALOG.md') {
				const m = readFileSync(p, 'utf8').match(/^---\n([\s\S]*?)\n---/);
				if (m) out.push({ path: relative(dir, p).split('\\').join('/'), data: parseYaml(m[1]) });
			}
		}
	};
	walk(join(dir, 'texts'));
	return out.sort((a, b) => a.path.localeCompare(b.path));
}

/**
 * Buddhist SARIT texts that MEOBTIS does not index (a decision of this website, not of the repository):
 * - asvaghosa-buddhacarita: coded for linguistic analysis, with markers inside the words (`X(C … C)`, `*`, `+`), so
 *   not readable as it stands; DSBC has two readable editions of the text.
 */
const SARIT_EXCLUDED = new Set(['asvaghosa-buddhacarita']);

/**
 * Some IAST editions are machine transliterations of a Devanāgarī edition from the same source (made with
 * Aksharamukha). They say so in their front matter (`transliterated_from`); `original` is the id of that edition.
 */
function transliteration(data, source, original) {
	return data.transliterated_from ? { transliterated: true, transliteratedFrom: `${source}:${original}` } : {};
}

/**
 * GRETIL titles often carry edition notes and descriptions, e.g.
 * "Prajñāpāramitāhṛdayasūtra, saṃkṣiptamātṛkā", "Vasudhārādhāraṇī-Gilgit",
 * "Jñānālokālaṃkārasūtra = JĀA", "Śarīrārthagāthā a chapter of his Yogācārabhūmi".
 * Split them into the work's title and an edition note.
 */
function splitGretilTitle(raw) {
	let title = raw
		.replace(/\s*\((?:[^)]*)\)\s*/g, (m) => (/[?_]/.test(m) ? '' : m)) // "auto(?)-commentary" artefacts
		.replace(/\s+=\s+\S+$/, '')
		.replace(/\s+(a|his) (commentary|chapter)\b.*$|\s+subcommentary on\b.*$/, '')
		.trim();
	const notes = [];
	let m;
	// ", saṃkṣiptamātṛkā" / ", 1-8, 11-12" — but not ", Sumāgadhāvadāna" (a capitalised title).
	if ((m = title.match(/^(.+?),\s*([^A-ZĀĪŪṚŚṢṆṬḌ].*?)[,\s]*$/u))) [title, notes[0]] = [m[1], m[2]];
	if ((m = title.match(/^(.+?)\s+(\d+(?:\s*[-–]\s*\d+)?)$/))) [title, notes[1]] = [m[1], m[2]];
	else if ((m = title.match(/^(.+?)-(fragments?|gilgit|\d+)$/i))) [title, notes[1]] = [m[1], m[2]];
	else if ((m = title.match(/^(.+?)\s+(Sanskrit reconstruction|part [ivx]+)$/i))) [title, notes[1]] = [m[1], m[2]];
	let note = notes
		.filter(Boolean)
		.map((n) => (/^\d/.test(n) && n.length > 12 ? 'selected chapters' : n.replace(/-/g, '–')))
		.reverse()
		.join(', ');
	return { title: title.trim(), note: note || undefined };
}

export const SOURCES = [
	{
		id: 'gretil',
		label: 'GRETIL',
		name: 'Göttingen Register of Electronic Texts in Indian Languages',
		homepage: 'https://gretil.sub.uni-goettingen.de/gretil.html',
		repo: 'meobtis/gretil',
		// Attribution shown with every edition, in the footer and on the About and Sources pages.
		publisher: 'Göttingen State and University Library',
		credit:
			'Text from GRETIL, the Göttingen Register of Electronic Texts in Indian Languages, ' +
			'maintained by the Göttingen State and University Library (SUB Göttingen), ' +
			'and its contributors named in the edition details.',
		terms: 'Licence as stated in each text; most are licensed CC BY-NC-SA 4.0.',
		termsUrl: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
		load(dir) {
			const manifest = JSON.parse(readFileSync(join(dir, 'data/manifest.json'), 'utf8'));
			const byId = new Map(manifest.map((e) => [e.id, e]));
			// The repository has every Sanskrit text of GRETIL; MEOBTIS indexes the Buddhist ones (`buddhist: true`,
			// GRETIL's sections Religious Literature / Buddhist and Philosophy / Buddhist).
			const all = readTexts(dir);
			const indexed = all.filter(({ data }) => data.buddhist !== false);
			this.skipped = all.length - indexed.length;
			return indexed.map(({ path, data }) => {
				const entry = byId.get(data.gretil_id);
				const catalogTitle = entry?.catalog_title ?? '';
				// Bracketed notes in GRETIL's catalogue distinguish versions, e.g. "[alternative version]".
				const catalogNote = catalogTitle
					.match(/\[([^\]]+)\]/g)
					?.map((n) => n.slice(1, -1))
					.find((n) => /version|ed\.|only|extracted|fragment/i.test(n));
				const { title, note } = splitGretilTitle(String(data.title));
				return {
					source: 'gretil',
					sourceId: data.gretil_id,
					title,
					note: note ?? catalogNote,
					author: data.author ? String(data.author).trim() : undefined,
					script: 'iast',
					path,
					originalUrl: data.source_url,
					catalogTitle,
					gretilSection: data.category,
				};
			});
		},
	},
	{
		id: 'dsbc',
		label: 'DSBC',
		name: 'Digital Sanskrit Buddhist Canon',
		homepage: 'https://www.dsbcproject.org',
		repo: 'meobtis/dsbc',
		publisher: 'University of the West',
		credit:
			'Text from the Digital Sanskrit Buddhist Canon (DSBC), a project of the University of the West ' +
			'with the Nagarjuna Institute, Kathmandu, and the input and proof-reading staff named in the edition details.',
		terms: 'For non-commercial educational and research use, under the DSBC usage policy.',
		termsUrl: 'https://www.dsbcproject.org/pages/usage-policy',
		load(dir) {
			// Books are also exported one file per chapter (front matter has `chapter`); index whole books only.
			return readTexts(dir)
				.filter(({ data }) => data.chapter === undefined)
				.map(({ path, data }) => {
					const script = data.script === 'devanagari' ? 'deva' : 'iast';
					const parts = String(data.category).split('/');
					return {
						source: 'dsbc',
						sourceId: String(data.book_id),
						title: String(data.title).trim(),
						script,
						path,
						originalUrl: data.source_url,
						dsbcCategory: script === 'deva' ? parts.map(devaToIast) : parts,
						...transliteration(data, 'dsbc', data.transliterated_from_book_id),
					};
				});
		},
	},
	{
		id: 'sarit',
		label: 'SARIT',
		name: 'Search and Retrieval of Indic Texts',
		homepage: 'https://sarit.indology.info',
		repo: 'meobtis/sarit',
		publisher: 'the SARIT project',
		credit:
			'Text from SARIT (Search and Retrieval of Indic Texts), a library of TEI-encoded Indic texts developed with ' +
			'funding from the German Research Foundation (DFG) and the US National Endowment for the Humanities (NEH), ' +
			'with the editors and the data-entry and encoding contributors named in the edition details.',
		terms: 'Licence as stated in each text: CC BY-SA 4.0 or 3.0 (attribution and share-alike). Changes made in converting it are listed in the edition details.',
		termsUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
		load(dir) {
			// The repository has every SARIT text; MEOBTIS indexes the Buddhist ones (`buddhist: true`).
			const all = readTexts(dir);
			const indexed = all.filter(({ data }) => data.buddhist !== false && !SARIT_EXCLUDED.has(String(data.sarit_id).replace(/-iast$/, '')));
			this.skipped = all.filter(({ data }) => !('transliterated_from' in data)).length - indexed.filter(({ data }) => !('transliterated_from' in data)).length;
			return indexed.map(({ path, data }) => ({
				source: 'sarit',
				sourceId: String(data.sarit_id),
				title: String(data.title).trim(),
				author: data.author ? String(data.author).trim() : undefined,
				script: data.script === 'devanagari' ? 'deva' : 'iast',
				path,
				originalUrl: data.source_url,
				saritCategory: data.category,
				...transliteration(data, 'sarit', String(data.sarit_id).replace(/-iast$/, '')),
			}));
		},
	},
];
