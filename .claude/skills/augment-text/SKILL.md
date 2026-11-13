---
name: augment-text
description: Research a Buddhist Sanskrit text in the MEOBTIS index on the web and write its introduction — a few paragraphs describing the work and the history of each digital edition — as a sidecar file in src/content/introductions/, which the site shows above the text. Use when asked to augment, introduce, describe or research a text (by title, edition ref like dsbc:22, or reader URL), or to add introductions for the next N texts in a category.
---

# Augment a text with a researched introduction

MEOBTIS keeps the converted Markdown texts **pure**: they live untouched in the source
repositories (`meobtis/gretil`, `meobtis/dsbc`, …). Researched information lives in **this**
repository as one sidecar Markdown file per *work* in `src/content/introductions/`. The site
validates it against `src/content.config.ts` and shows it on the work's reader pages
(and its summary in the text lists).

Never edit the source repositories or the texts, and never write introductions anywhere else.

## 1. Identify the work

Run from the repository root:

```bash
node scripts/introductions.mjs find "<title or part of it>"
```

This prints matching works with their **edition refs** (e.g. `gretil:sa_…`, `dsbc:22`),
labels, Markdown URLs, original URLs, and the suggested file name. Diacritics are ignored.
If the user gave a reader URL `/read/<source>/<id>/`, the ref is `<source>:<id>`.
For a batch, use `node scripts/introductions.mjs missing <group/category> --limit N`.

If `introduction` is not `null`, the work already has one: update that file instead of
creating another (one work, one file).

## 2. Read what the editions say about themselves

Fetch each edition's Markdown URL and read only its YAML front matter (stop at the closing
`---`; the texts can be several MB):

- GRETIL: `author`, `source_edition` (the printed edition), `contributors` (who keyed,
  revised and encoded it), `licence`.
- DSBC: `bibliography` (title, editor, publisher, place, year), `technical_details`
  (input personnel and date, proof-reader, supplier, sponsor).

These are the facts for each edition's history. Also look at the first lines of the text
to confirm which work it is.

## 3. Research the work on the web

Run several searches in one turn, e.g. `"<title>" sūtra`, `"<title>" Sanskrit manuscript`,
`"<title>" edition <editor from front matter>`, the English title, and the
Tibetan/Chinese title if known. Prefer, in this order:

1. Scholarly reference works and project introductions: Brill's Encyclopedia of Buddhism,
   the Princeton Dictionary of Buddhism, 84000 (introductions to translations), SuttaCentral
   (Āgama parallels), the Stanford Encyclopedia of Philosophy, the GRETIL and DSBC pages
   themselves, publisher or library catalogue records for the printed edition.
2. Academic articles, theses and book chapters (abstracts and previews are fine).
3. Wikipedia and other tertiary sources, **only as leads**: verify a claim elsewhere before
   using it, and cite the source you verified it in.

Gather: what the text is (genre, length, structure), its contents and themes, author or
attribution, date and place (with the evidence and the uncertainty), school or tradition,
translations into Tibetan and Chinese (with catalogue numbers where reliable), manuscript
discoveries, its importance or reception, and the printed editions — especially those named
in step 2.

## 4. Write the introduction

Create `src/content/introductions/<suggestedFile>` from [template.md](template.md).

- **`refs`**: every edition ref of the work from step 1.
- **`summary`**: one sentence (max. 300 characters) saying what the text is. It is shown
  under the title in lists and used as the page's meta description.
- **Body**: 3–5 paragraphs (about 250–450 words) describing the work: what it is, its
  contents and teaching, date/authorship/tradition, translations and manuscripts,
  significance. Use `###` headings only if it is long; no `#` or `##`, because the page
  supplies those.
- **`editions`**: one entry per edition ref that you can say something factual about — what
  printed edition the digital text is based on (editor, series, place, year), who input and
  revised it and when, and anything notable (e.g. a Gilgit manuscript, a reconstruction, a
  partial text). 1–3 sentences each, from step 2 plus research. Leave out an edition rather
  than guess.
- **`sources`**: every work you relied on, with a title and URL; add a `note` where helpful
  (e.g. "edition details", "dating"). Include the GRETIL/DSBC pages you read.
- **`updated`**: today's date (YYYY-MM-DD).

The site shows every introduction with a note that it is based on internet research and may
be inaccurate (see the About page). That is not a licence for guesswork: the rules below
still apply in full.

### Rules

- **No invention.** Every specific claim (dates, names, numbers, catalogue references,
  manuscript finds) must come from a source in `sources`. If sources disagree, say so; if
  something is unknown, say it is unknown or leave it out.
- **Hedge appropriately**: "is traditionally attributed to", "probably composed", "scholars
  date it to …". Do not present a tradition as historical fact.
- **Your own words.** Paraphrase; quote at most a short phrase, in quotation marks, with its
  source. Never copy paragraphs from sources.
- **Style**: plain, neutral, encyclopaedic English with British spelling (as on the rest of
  the site). Sanskrit in IAST with diacritics, italicised for titles (`*Prajñāpāramitā*`).
  Write "the Heart Sūtra (*Prajñāpāramitāhṛdaya*)" on first mention where an English name
  is common.
- Describe the work, not the website; don't mention MEOBTIS or AI in the text.

## 5. Check and preview

```bash
node scripts/introductions.mjs check
pnpm build
```

`check` validates refs (all must exist and belong to one work), required fields and
length; `pnpm build` validates the schema and fails on bad refs. Fix any errors. Then
preview a reader page of the work (`pnpm dev`, open `/read/<source>/<id>/`) and confirm the
Introduction section, edition history and sources render.

Finish by telling the user which file you wrote, the summary, how many sources you used,
and anything you were unsure about or left out, so they can check it.
