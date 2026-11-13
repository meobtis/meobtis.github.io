// MEOBTIS taxonomy: group → category (one page each) → optional section (heading within a page).
// Groups and categories are listed in display order.

export const TAXONOMY = [
	{
		id: 'sutra',
		label: 'Sūtra',
		description: 'Discourses attributed to the Buddha (Sūtrapiṭaka).',
		categories: [
			{ id: 'agama', label: 'Āgama', description: 'Early discourses from the Āgama collections.' },
			{ id: 'mahayana-sutra', label: 'Mahāyāna sūtras', description: 'Mahāyāna sūtras other than the Prajñāpāramitā.' },
			{ id: 'prajnaparamita', label: 'Prajñāpāramitā', description: 'The Perfection of Wisdom sūtras.' },
			{ id: 'dharani', label: 'Dhāraṇī', description: 'Dhāraṇī and protective (rakṣā) texts.' },
			{ id: 'avadana', label: 'Avadāna', description: 'Edifying narratives of deeds and their fruits, including later Nepalese avadānas and vrata stories.' },
			{ id: 'jataka', label: 'Jātaka', description: 'Stories of the Buddha’s previous lives.' },
			{ id: 'buddha-life', label: 'Life of the Buddha', description: 'Biographies of the Buddha in sūtra form.' },
		],
	},
	{
		id: 'vinaya',
		label: 'Vinaya',
		description: 'Monastic discipline (Vinayapiṭaka).',
		categories: [
			{ id: 'pratimoksa', label: 'Prātimokṣa and karmavācanā', description: 'Codes of monastic rules and the formulas for monastic procedures.' },
			{ id: 'vinayavastu', label: 'Vinayavastu', description: 'Sections (vastu) of the Mūlasarvāstivāda Vinaya.' },
			{ id: 'vinaya-other', label: 'Other Vinaya texts', description: 'Other Vinaya texts, manuals and Nepalese pārājikā texts.' },
		],
	},
	{
		id: 'sastra',
		label: 'Śāstra',
		description: 'Treatises and commentaries (Śāstrapiṭaka).',
		categories: [
			{ id: 'abhidharma', label: 'Abhidharma', description: 'Abhidharma treatises, including the Abhidharmakośa and its commentaries.' },
			{ id: 'madhyamaka', label: 'Madhyamaka', description: 'Works of the Middle Way school.' },
			{ id: 'yogacara', label: 'Yogācāra', description: 'Works of the Yogācāra (Vijñānavāda) school.' },
			{ id: 'madhyamaka-yogacara', label: 'Madhyamaka–Yogācāra', description: 'Works synthesising Madhyamaka and Yogācāra, and treatises on the bodhisattva path.' },
			{ id: 'pramana', label: 'Pramāṇa', description: 'Epistemology and logic (pramāṇa, hetuvidyā).' },
			{ id: 'prajnaparamita-sastra', label: 'Prajñāpāramitā commentaries', description: 'Commentaries on the Perfection of Wisdom, including the Abhisamayālaṅkāra literature.' },
			{ id: 'lekha', label: 'Lekha', description: 'Epistles and letters of advice.' },
			{ id: 'sastra-other', label: 'Other treatises', description: 'Treatises that do not fit the categories above.' },
		],
	},
	{
		id: 'tantra',
		label: 'Tantra',
		description: 'Tantras, their commentaries and tantric practice texts (Vajrayāna).',
		categories: [
			{ id: 'tantras', label: 'Tantras', description: 'The tantras themselves, grouped by class.' },
			{ id: 'tantra-commentary', label: 'Tantra commentaries', description: 'Commentaries (ṭīkā, pañjikā) and treatises on the tantras, grouped by class.' },
			{ id: 'sadhana', label: 'Sādhana and ritual', description: 'Sādhanas, maṇḍala and initiation manuals, and ritual handbooks.' },
			{ id: 'giti', label: 'Songs of realisation', description: 'Dohā and gīti songs.' },
		],
	},
	{
		id: 'stotra',
		label: 'Stotra',
		description: 'Hymns and praises.',
		categories: [
			{ id: 'stotra-buddha', label: 'Hymns to the Buddha', description: 'Hymns to Śākyamuni and the buddhas, the Three Jewels and sacred places.' },
			{ id: 'stotra-bodhisattva', label: 'Hymns to bodhisattvas', description: 'Hymns to Avalokiteśvara, Mañjuśrī and other bodhisattvas.' },
			{ id: 'stotra-deity', label: 'Hymns to goddesses and deities', description: 'Hymns to Tārā, Prajñāpāramitā, Vajrayoginī and other deities.' },
		],
	},
	{
		id: 'literature',
		label: 'Literature',
		description: 'Poetry, drama and gnomic verse.',
		categories: [
			{ id: 'kavya', label: 'Kāvya', description: 'Ornate poetry.' },
			{ id: 'nataka', label: 'Nāṭaka', description: 'Drama.' },
			{ id: 'niti', label: 'Nīti and subhāṣita', description: 'Gnomic and didactic verse.' },
		],
	},
	{
		id: 'sciences',
		label: 'Sciences',
		description: 'Grammar, poetics, astronomy, medicine and the arts.',
		categories: [
			{ id: 'vyakarana', label: 'Vyākaraṇa', description: 'Grammar.' },
			{ id: 'alamkara', label: 'Alaṃkāra and chandas', description: 'Poetics and metrics.' },
			{ id: 'jyotisa', label: 'Jyotiṣa', description: 'Astronomy and astrology.' },
			{ id: 'cikitsa', label: 'Cikitsā', description: 'Medicine.' },
			{ id: 'silpa', label: 'Śilpa', description: 'Arts, crafts and iconometry.' },
		],
	},
	{
		id: 'other',
		label: 'Other',
		description: 'Modern compositions and miscellaneous works.',
		categories: [
			{ id: 'modern', label: 'Modern works', description: 'Modern Sanskrit compositions on Buddhism.' },
			{ id: 'miscellaneous', label: 'Miscellaneous', description: 'Works not classified elsewhere.' },
		],
	},
];

export const CATEGORY_IDS = new Set(TAXONOMY.flatMap((g) => g.categories.map((c) => `${g.id}/${c.id}`)));

/** ASCII key for a DSBC category name: "yoginītantraṭīkā" / "yoginītantraṭikā" → "yoginitantratika". */
const fold = (s) =>
	s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '');

const TANTRA_CLASSES = {
	kriyatantra: 'Kriyā tantra',
	kriyatantratika: 'Kriyā tantra',
	yogatantra: 'Yoga tantra',
	yogottaratantra: 'Yogottara tantra',
	yogottaratantratika: 'Yogottara tantra',
	mahayogatantratika: 'Mahāyoga tantra',
	yoginitantra: 'Yoginī tantra',
	yoginitantratika: 'Yoginī tantra',
	anuttarayogatantra: 'Anuttarayoga tantra',
	advayatantratika: 'Advaya tantra',
	sahajayana: 'Sahajayāna',
	tantradarsana: 'Tantric thought',
};

const BUDDHA_HYMNS = ['sakyamuni', 'bhagavatstutih', 'saptabuddha', 'pancabuddha', 'adibuddha', 'sarvatathagata', 'triratna', 'svayambhu', 'caityabhattaraka', 'vajrasana', 'dharmadhatu', 'madhyamaka', 'pandita'];
const BODHISATTVA_HYMNS = ['avalokitesvara', 'manjusri', 'vagisvara', 'vajrapani', 'akasagarbha', 'astamahabodhisattva', 'bodhisattvacarya'];

/** Section heading for a DSBC stotra sub-category, e.g. "avalokiteśvara" → "Avalokiteśvara". */
const stotraSection = (s) => s[0].toUpperCase() + s.slice(1).replace(/ṁ/g, 'ṃ');

const SUTRA_PITAKA = {
	agama: 'sutra/agama',
	caturagama: 'sutra/agama',
	nirdesa: 'sutra/mahayana-sutra',
	mahayanasutra: 'sutra/mahayana-sutra',
	prajnaparamita: 'sutra/prajnaparamita',
	dharani: 'sutra/dharani',
	avadana: 'sutra/avadana',
	jataka: 'sutra/jataka',
	pramana: 'sastra/pramana',
};

const SASTRA_PITAKA = {
	abhidharma: 'sastra/abhidharma',
	kosa: 'sastra/abhidharma',
	sautrantika: 'sastra/abhidharma',
	madhyamaka: 'sastra/madhyamaka',
	yogacara: 'sastra/yogacara',
	madhyamakayogacara: 'sastra/madhyamaka-yogacara',
	pramana: 'sastra/pramana',
	hetuvidya: 'sastra/pramana',
	prajnaparamita: 'sastra/prajnaparamita-sastra',
	lekha: 'sastra/lekha',
	vinaya: 'vinaya/vinaya-other',
	vividha: 'other/miscellaneous',
	darsana: 'tantra/sadhana',
	svestadevata: 'tantra/sadhana',
	yogottaratantra: 'tantra/tantras',
	advayatantratika: 'tantra/tantra-commentary',
	mahayogatantratika: 'tantra/tantra-commentary',
	yogottaratantratika: 'tantra/tantra-commentary',
	yoginitantratika: 'tantra/tantra-commentary',
	dharmadhatudarsanagitih: 'tantra/giti',
	kavya: 'literature/kavya',
	nataka: 'literature/nataka',
	niti: 'literature/niti',
	vyakarana: 'sciences/vyakarana',
	alamkara: 'sciences/alamkara',
	alankara: 'sciences/alamkara',
	jyotihsastra: 'sciences/jyotisa',
	cikitsavidya: 'sciences/cikitsa',
	silpasastra: 'sciences/silpa',
	adhunatana: 'other/modern',
};

/**
 * Map a DSBC category path (romanised, e.g. ["sūtrapiṭaka", "tantra", "yoga tantra"])
 * to { category, section? } in the MEOBTIS taxonomy. Returns null for the Vinayapiṭaka
 * (classified per text by classifyVinaya) and for unknown categories.
 */
export function mapDsbcCategory(parts) {
	const [pitaka, cat = '', sub = ''] = parts.map(fold);
	if (pitaka === 'sutrapitaka') {
		if (cat === 'tantra') return { category: 'tantra/tantras', section: TANTRA_CLASSES[fold(sub)] ?? 'Other tantras' };
		return SUTRA_PITAKA[cat] ? { category: SUTRA_PITAKA[cat] } : null;
	}
	if (pitaka === 'sastrapitaka') {
		if (cat === 'stotra') {
			const section = sub ? stotraSection(parts[2].normalize('NFC')) : undefined;
			if (BUDDHA_HYMNS.includes(sub)) return { category: 'stotra/stotra-buddha', section };
			if (BODHISATTVA_HYMNS.includes(sub)) return { category: 'stotra/stotra-bodhisattva', section };
			return { category: 'stotra/stotra-deity', section };
		}
		const category = SASTRA_PITAKA[cat];
		if (!category) return null;
		return TANTRA_CLASSES[cat] ? { category, section: TANTRA_CLASSES[cat] } : { category };
	}
	return null;
}

export const isVinayaPitaka = (parts) => fold(parts[0] ?? '') === 'vinayapitaka';

/** Vinaya sub-category from a title. */
export function classifyVinaya(title) {
	const t = title.toLowerCase();
	if (/vastu/.test(t)) return { category: 'vinaya/vinayavastu' };
	if (/prātimokṣa|pratimoksa|karmavāc|karmavāk|upasampad|poṣadha|posadha|pravāraṇā/.test(t))
		return { category: 'vinaya/pratimoksa' };
	return { category: 'vinaya/vinaya-other' };
}
