// Text helpers: Devanāgarī → IAST transliteration and title normalisation for matching.

const VOWELS = {
	'अ': 'a', 'आ': 'ā', 'इ': 'i', 'ई': 'ī', 'उ': 'u', 'ऊ': 'ū', 'ऋ': 'ṛ', 'ॠ': 'ṝ',
	'ऌ': 'ḷ', 'ॡ': 'ḹ', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au', 'ऑ': 'o',
};
const MATRAS = {
	'ा': 'ā', 'ि': 'i', 'ी': 'ī', 'ु': 'u', 'ू': 'ū', 'ृ': 'ṛ', 'ॄ': 'ṝ', 'ॢ': 'ḷ',
	'ॣ': 'ḹ', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au', 'ॉ': 'o',
};
const CONSONANTS = {
	'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ṅ',
	'च': 'c', 'छ': 'ch', 'ज': 'j', 'झ': 'jh', 'ञ': 'ñ',
	'ट': 'ṭ', 'ठ': 'ṭh', 'ड': 'ḍ', 'ढ': 'ḍh', 'ण': 'ṇ',
	'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
	'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm',
	'य': 'y', 'र': 'r', 'ल': 'l', 'ळ': 'ḷ', 'व': 'v',
	'श': 'ś', 'ष': 'ṣ', 'स': 's', 'ह': 'h',
};
const OTHER = {
	'ं': 'ṃ', 'ः': 'ḥ', 'ँ': 'm̐', 'ऽ': "'", '।': '|', '॥': '||', 'ॐ': 'oṃ',
	'०': '0', '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9',
};
const VIRAMA = '्';
const NUKTA = '़';

/** Transliterate Devanāgarī to IAST. Non-Devanāgarī characters pass through unchanged. */
export function devaToIast(input) {
	const s = input.normalize('NFC');
	let out = '';
	for (let i = 0; i < s.length; i++) {
		const ch = s[i];
		if (ch in CONSONANTS) {
			out += CONSONANTS[ch];
			let next = s[i + 1];
			if (next === NUKTA) next = s[++i + 1];
			if (next === VIRAMA) i++;
			else if (next in MATRAS) {
				out += MATRAS[next];
				i++;
			} else out += 'a';
		} else if (ch in VOWELS) out += VOWELS[ch];
		else if (ch in MATRAS) out += MATRAS[ch];
		else if (ch in OTHER) out += OTHER[ch];
		else if (ch === VIRAMA || ch === NUKTA) continue;
		else out += ch;
	}
	return out;
}

export const hasDevanagari = (s) => /[ऀ-ॿ]/.test(s);

/** IAST with only lower-case first letter changed to upper case. */
export const capitalise = (s) => (s ? s[0].toLocaleUpperCase() + s.slice(1) : s);

/**
 * Normalise a Sanskrit title (IAST or Devanāgarī) to a loose ASCII key for matching
 * the same work across sources, e.g. "Āryaśālistambakasūtram" → "salistambakasutra".
 */
export function titleKey(title) {
	let s = hasDevanagari(title) ? devaToIast(title) : title;
	s = s
		.normalize('NFC')
		.toLowerCase()
		// Nasal variants (ṃ ṁ ṅ ñ ṇ, m̐) all collapse to "m"/"n" before diacritics are stripped.
		.replace(/[ṃṁ]|m̐/g, 'm')
		.replace(/[ṅñṇ]/g, 'n')
		.replace(/\(.*?\)|\[.*?\]/g, ' ') // parenthetical notes
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.replace(/[^a-z\s-]/g, ' ')
		.replace(/[-\s]+/g, ' ')
		.trim();
	const words = s
		.split(' ')
		.filter((w) => w && !['nama', 'namah', 'arya', 'sri'].includes(w))
		// Case endings on each word: "gaṇḍavyūhaḥ sūtram" → "gaṇḍavyūha sūtra".
		.map((w) => (w.length > 5 ? w.replace(/(ah|am)$/, 'a').replace(/(ih|im)$/, 'i').replace(/(uh|um)$/, 'u') : w));
	s = words.join('').replace(/(.{6,})nama$/, '$1');
	s = s.replace(/^(arya|sri)(?=[a-z]{6,})/, '');
	// Sandhi/case endings: sūtram, stotram, stavaḥ, saṃgrahaḥ … → stem.
	s = s.replace(/(am|ah|h|m)$/, (m) => (m === 'am' || m === 'ah' ? 'a' : ''));
	// "anusvāra + consonant" vs homorganic nasal: saṅgraha / saṃgraha / samgraha.
	s = s.replace(/n(?=[kg])|m(?=[kg])/g, 'm').replace(/nc|mc/g, 'mc').replace(/m(?=[td])/g, 'n');
	// "X nāma mahāyānasūtram" and "X" name the same work.
	// … and "X sūtra" and "X" (e.g. "Advayaśatikā prajñāpāramitā [sūtra]").
	return s.replace(/(.{6,})mahayanasutra$/, '$1').replace(/(.{8,})sutra$/, '$1');
}
