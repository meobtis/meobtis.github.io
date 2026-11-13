// Optional reading orders for a category (src/data/orders.json): a curated sequence of works in groups,
// shown on its own page beside the default A–Z list. Works are named by any edition reference, so
// this file stays valid when titles change. Unplaced works follow, A–Z, under "Other works".
import data from '../data/orders.json';
import { catalog, type Work } from './catalog';

interface OrderFile {
	[category: string]: {
		orders: {
			id: string;
			label: string;
			note: string;
			groups: { heading: string; note?: string; works: { ref: string; label?: string }[] }[];
		}[];
	};
}

export interface OrderGroup {
	heading: string;
	note?: string;
	works: Work[];
	/** Short badge per work, e.g. its position in the collection ("DĀ (Skt) 4"). */
	badges: Map<Work, string>;
}

export interface Order {
	id: string;
	label: string;
	note: string;
	groups: OrderGroup[];
}

const workByRef = new Map<string, Work>();
for (const w of catalog.works) for (const e of w.editions) workByRef.set(e.ref, w);

/** Orders defined for a category ("group/category"), with works resolved; fails the build on a bad reference. */
export function ordersOf(categoryKey: string, works: Work[]): Order[] {
	const defined = (data as OrderFile)[categoryKey]?.orders ?? [];
	return defined.map((o) => {
		const placed = new Set<Work>();
		const groups: OrderGroup[] = o.groups.map((g) => {
			const badges = new Map<Work, string>();
			const list = g.works.map(({ ref, label }) => {
				const w = workByRef.get(ref);
				if (!w) throw new Error(`orders.json: unknown edition "${ref}" in ${categoryKey}/${o.id}`);
				if (w.category !== categoryKey)
					throw new Error(`orders.json: "${w.title}" (${ref}) is in ${w.category}, not ${categoryKey}`);
				if (placed.has(w)) throw new Error(`orders.json: "${w.title}" listed twice in ${categoryKey}/${o.id}`);
				placed.add(w);
				if (label) badges.set(w, label);
				return w;
			});
			return { heading: g.heading, note: g.note, works: list, badges };
		});
		const rest = works.filter((w) => !placed.has(w));
		if (rest.length) groups.push({ heading: 'Other works', works: rest, badges: new Map() });
		return { id: o.id, label: o.label, note: o.note, groups };
	});
}
