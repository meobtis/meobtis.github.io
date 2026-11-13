---
name: augment-text
description: Research a Buddhist Sanskrit text in the MEOBTIS index on the web and write its introduction — its best-known English title and a few paragraphs describing the work and the history of each digital edition, citing sources as APA 7 Markdown footnotes — as a sidecar file in src/content/introductions/, which the site shows above the text. Use when asked to augment, introduce, describe or research a text (by title, edition ref like dsbc:22, or reader URL), or to add introductions for the next N texts in a category.
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

Gather: the **best-known English title** of the work (the name used in English-language
scholarship and translations, e.g. "The Heart Sūtra", "The Lotus Sūtra", "The Root Verses on
the Middle Way"), what the text is (genre, length, structure), its contents and themes, author or
attribution, date and place (with the evidence and the uncertainty), school or tradition,
translations into Tibetan and Chinese (with catalogue numbers where reliable), manuscript
discoveries, its importance or reception, and the printed editions — especially those named
in step 2.

For **every source you will cite**, record what an APA 7 reference needs: author(s) or
organisation, year (or "n.d."), title, container (journal with volume, issue and pages;
book publisher; website name), and DOI or URL. Look these up on the source's own page
(journal issue page, publisher record, DOI landing page); do not guess volume, pages or
years. A web page without a date gets "(n.d.)" and a "Retrieved Month D, YYYY, from URL"
clause.

## 4. Write the introduction

Create `src/content/introductions/<suggestedFile>` from [template.md](template.md).

- **`refs`**: every edition ref of the work from step 1.
- **`englishTitle`**: the best-known English translation of the title, as found in step 3
  (e.g. `The Heart Sūtra`), in title case with IAST diacritics where they occur. Use the
  name most English-language scholarship and translations use; if there are two common
  names, choose the more widespread and mention the other in the body. Omit the field only
  if the work has no established English title.
- **`summary`**: one sentence (max. 300 characters) saying what the text is. It is shown
  under the title in lists and used as the page's meta description.
- **Body**: 3–5 paragraphs (about 250–450 words) describing the work: what it is, its
  contents and teaching, date/authorship/tradition, translations and manuscripts,
  significance. Use `###` headings only if it is long; no `#` or `##`, because the page
  supplies those. Cite sources with footnotes, and end the body with the references (see
  **Citations** below).
- **`editions`**: one entry per edition ref that you can say something factual about — what
  printed edition the digital text is based on (editor, series, place, year), who input and
  revised it and when, and anything notable (e.g. a Gilgit manuscript, a reconstruction, a
  partial text). 1–3 sentences each, from step 2 plus research. Leave out an edition rather
  than guess. Cite with the same footnote markers as the body (e.g. the GRETIL or DSBC
  record of that edition); every reference must still be defined at the end of the body.
- **`updated`**: today's date (YYYY-MM-DD).

### Citations: APA 7 references as Markdown footnotes

Cite with a footnote marker right after the claim's punctuation, with a short memorable key
(author + year, or source + id): `… in 1992.[^nattier1992]`. Reuse the same key every time
you cite the same source; the site numbers footnotes in reading order. Define each
reference **once**, on a single line, at the very end of the body, as a full **APA 7**
reference list entry:

```markdown
[^nattier1992]: Nattier, J. (1992). The Heart Sūtra: A Chinese apocryphal text? *Journal of the International Association of Buddhist Studies, 15*(2), 153–223. https://journals.ub.uni-heidelberg.de/index.php/jiabs/article/view/8800
[^conze1948]: Conze, E. (1948). Text, sources, and bibliography of the *Prajñāpāramitā-hṛdaya*. *Journal of the Royal Asiatic Society, 80*(1–2), 33–51. https://doi.org/10.1017/S0035869X00101686
[^84000toh21]: Dharmachakra Translation Committee (Trans.). (n.d.). *The heart of the perfection of wisdom, the blessed mother* (Toh 21). 84000: Translating the Words of the Buddha. Retrieved November 13, 2026, from https://84000.co/translation/toh21
[^vaidya1961]: Vaidya, P. L. (Ed.). (1961). *Mahāyāna-sūtra-saṃgrahaḥ* (Pt. 1; Buddhist Sanskrit Texts 17). Mithila Institute.
```

APA 7 essentials: authors as "Surname, I. I.", up to 20 authors, "&" before the last;
"(Ed.)"/"(Trans.)" for editors and translators; year in parentheses, or "(n.d.)"; titles of
articles and web pages in sentence case, not italicised; titles of books, reports and whole
websites' works in *italic* sentence case; journal names and volume numbers in *italic* title
case, issue in parentheses, then page range; publisher for books (no location); a DOI as
`https://doi.org/…` when there is one, otherwise the URL; no full stop after a DOI or URL.
Keep Sanskrit titles in IAST with diacritics. For a source's catalogue or edition record
(GRETIL TEI header, DSBC book page), cite the organisation as author:

```markdown
[^gretil-hrdaya]: Göttingen State and University Library. (n.d.). *Prajñāpāramitāhṛdayasūtra, saṃkṣiptamātṛkā* [TEI XML]. GRETIL. Retrieved November 13, 2026, from https://gretil.sub.uni-goettingen.de/gretil/corpustei/sa_prajJApAramitAhRdayasUtrasaMkSiptamAtRkA.xml
[^dsbc70]: University of the West. (n.d.). *Prajñāpāramitāhṛdayasūtram [saṃkṣiptamātṛkā]*. Digital Sanskrit Buddhist Canon. Retrieved November 13, 2026, from https://www.dsbcproject.org/canon-text/book/70
```

Every reference must be cited at least once, and every marker must have a reference; the
checker and the build fail otherwise. Cite where a claim is made, not in a block at the end
of a paragraph. A printed book you know only from a source's metadata (such as Vaidya's
edition above) may be cited without a URL, but cite the record that names it as well.

The site shows every introduction with a note that it is based on internet research and may
be inaccurate (see the About page). That is not a licence for guesswork: the rules below
still apply in full.

### Rules

- **No invention.** Every specific claim (dates, names, numbers, catalogue references,
  manuscript finds) must carry a footnote to a source you actually read. If sources disagree, say so; if
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

`check` validates refs (all must exist and belong to one work), required fields, length,
footnotes (every marker defined, every reference cited) and the APA 7 shape of each
reference (a date in parentheses, ending with a DOI or URL); it warns if `englishTitle` is
missing. `pnpm build` validates the schema and fails on bad refs or footnotes. Fix any
errors. Then preview a reader page of the work (`pnpm dev`, open `/read/<source>/<id>/`)
and confirm the English title, Introduction, edition history and numbered References
render.

Finish by telling the user which file you wrote, the English title and summary, how many
references you cited, and anything you were unsure about or left out, so they can check it.
