import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

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
			/** Date the introduction was written or last revised. */
			updated: z.coerce.date(),
		}),
	}),
};
