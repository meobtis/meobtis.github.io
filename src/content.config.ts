import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

/** Parallels may link only to the Pāli on tipitaka2500.github.io or the Chinese on CBETA. */
const PARALLEL_HOSTS = ['tipitaka2500.github.io', 'cbetaonline.dila.edu.tw'];

/** An edition reference as used in src/data/catalog.json: "<source>:<sourceId>", e.g. "gretil:sa_…", "dsbc:22". */
const editionRef = z.string().regex(/^[a-z]+:[^\s]+$/, 'Expected "<source>:<sourceId>", e.g. "dsbc:22"');

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),

	/**
	 * Introductions: researched descriptions of a work and the history of its editions.
	 * One Markdown file per work, kept here so the source texts stay untouched. The body is
	 * the description of the work, citing its sources as Markdown footnotes ([^key]) whose
	 * definitions at the end of the body are references in APA 7 format. Front matter holds
	 * the English title, a one-line summary and per-edition history (which may cite the same
	 * footnotes). Written with the `augment-text` skill; citations are checked in
	 * src/lib/introductions.ts.
	 */
	introductions: defineCollection({
		loader: glob({ base: './src/content/introductions', pattern: '**/*.md' }),
		schema: z.object({
			/** Title of the work, for people reading the file; the catalogue's title is shown on the site. */
			title: z.string(),
			/** The best-known English translation of the title, e.g. "The Heart Sūtra". */
			englishTitle: z.string().optional(),
			/** Editions this introduction covers. All must belong to the same work in the catalogue. */
			refs: z.array(editionRef).min(1),
			/** One sentence shown under the title in text lists and used as the page description. */
			summary: z.string().min(20).max(300),
			/** History of particular editions: what each digital text is based on and how it came about.
			 *  May cite the body's footnotes, e.g. "… (Darbhanga, 1961).[^vaidya1961]" */
			editions: z
				.array(z.object({ ref: editionRef, history: z.string().min(20) }))
				.default([]),
			/** Pāli and Chinese parallels (e.g. "DN 14", "DA 1 (T 1)"), each linking to the text itself. */
			parallels: z
				.array(
					z.object({
						tradition: z.enum(['pali', 'chinese']),
						/** Conventional reference, e.g. "DN 14" or "SĀ 287 (T 99)". */
						ref: z.string().min(2),
						/** Title in the original language, e.g. "Mahāpadānasutta" or 大本經. */
						title: z.string().optional(),
						url: z.url().refine((u) => PARALLEL_HOSTS.includes(new URL(u).hostname), {
							message: `Link parallels to ${PARALLEL_HOSTS.join(' or ')}`,
						}),
					}),
				)
				.default([]),
			/** Date the introduction was written or last revised. */
			updated: z.coerce.date(),
		}),
	}),
};
