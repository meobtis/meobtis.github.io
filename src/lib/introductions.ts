// Joins introductions (src/content/introductions) to works in the catalogue by edition reference.
import { getCollection, type CollectionEntry } from 'astro:content';
import { catalog, type Work } from './catalog';

export type Introduction = CollectionEntry<'introductions'>;

const workByRef = new Map<string, Work>();
for (const w of catalog.works) for (const e of w.editions) workByRef.set(e.ref, w);

let cache: Map<Work, Introduction> | undefined;

/**
 * Map of work → introduction. Fails the build if an introduction names an edition that is
 * not in the catalogue, covers editions of more than one work, or duplicates another.
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
