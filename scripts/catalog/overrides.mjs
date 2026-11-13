// Manual corrections applied by build.mjs. Editions are referred to as "<source>:<sourceId>",
// e.g. "gretil:sa_zAntideva-bodhicaryAvatAra" or "dsbc:22" (the DSBC book ID).
// Run `pnpm catalog --report` to see how works were merged and which could not be classified.

/** Groups of editions that are the same work but whose titles do not match automatically. */
export const MERGE = [
	['gretil:sa_amoghapAzahRdayasUtra-mz', 'dsbc:9', 'dsbc:384'],
	['gretil:sa_vajracchedikA-prajJApAramitA', 'dsbc:76', 'dsbc:403'],
	['gretil:sa_prajJAkaramati-bodhicaryAvatArapaJjikA', 'dsbc:259'],
	['gretil:sa_sukhAvatIvyUhasaMkSiptamAtRkA', 'gretil:sa_smaller-sukhAvatIvyUha'],
	['dsbc:915', 'dsbc:914'],
	['gretil:sa_vimalamitra-abhidharmadIpa-comm', 'dsbc:95', 'dsbc:462'],
	['dsbc:792', 'dsbc:793', 'dsbc:794', 'dsbc:795'], // Amoghapāśakalparāja, parts VI and VII
	['dsbc:749', 'dsbc:750'], // Bauddha pāribhāṣikāḥ śabdāḥ
	['dsbc:191', 'dsbc:710'], // Bhadracarīpraṇidhāna
	['gretil:sa_buddhabalAdhAnaprAtihAryavikurvANanirdezasUtra', 'dsbc:63', 'dsbc:394'],
	['gretil:sa_Aryadeva-catuHzatikA', 'dsbc:237', 'dsbc:529'],
	['dsbc:152', 'dsbc:717'], // Hārītīstotra
	['dsbc:953', 'dsbc:954'], // Hevajrasādhanopāyikā
	['dsbc:102', 'dsbc:467'], // Jñānaprasthāna
	['gretil:sa_kAraNDavyUha', 'dsbc:423'],
	['gretil:sa_ratnakIrti-kSaNabhaGgasiddhi-vyatirekAtmikA', 'dsbc:293'],
	['dsbc:131', 'dsbc:616'], // Rakṣākarastava
	['dsbc:751', 'dsbc:752'], // Samāhitā bhūmi
	['dsbc:876', 'dsbc:877'], // Bauddhatantrokta siddhauṣadhisaṅgraha
	['gretil:sa_viMzatikAkArikA', 'dsbc:577'],
	['gretil:sa_yazomitra-sphuTArthA-abhidharmakozavyAkhyA', 'dsbc:870'],
	['dsbc:332', 'dsbc:573'], // Mahāyānasūtrālaṃkāra, kārikās
	['gretil:sa_nAgArjuna-mUlamadhyamakakArikA', 'dsbc:931'], // Mūlamadhyamakakārikā (prajñā nāma)
	// SARIT editions whose titles differ from the same work in GRETIL or DSBC:
	['gretil:sa_paNDitAzoka-sAmAnyadUSaNadikprasAritA', 'sarit:samanyadusana'],
	['dsbc:282', 'sarit:vadanyayatika'], // Vādanyāyaṭīkā (Vipañcitārthā)
	['gretil:sa_ratnakIrti-nibandhAvalI', 'dsbc:300', 'sarit:ratnakirti-nibandhavali'],
	['gretil:sa_Aryadeva-caryAmelAvaNapradIpa', 'sarit:caryamelapakapradipa'], // GRETIL's title is a misspelling
];

/** Edition notes shown in link labels where one source has several editions of a work. */
export const EDITION_NOTES = {
	'dsbc:792': 'Part VI',
	'dsbc:793': 'Part VI',
	'dsbc:794': 'Part VII',
	'dsbc:795': 'Part VII',
};

/** Editions that must not be merged automatically with others of the same title. */
export const SPLIT = new Set([
	'dsbc:259', // Bodhicaryāvatāraḥ (pañjikā) is Prajñākaramati's commentary, not the root text
]);

/** Category (and optional section) for an edition's work: "group/category" or { category, section }. */
export const CATEGORY_OVERRIDES = {
	'gretil:sa_buddhist-yoga-manual': 'sastra/sastra-other',
	'gretil:sa_dharmaskandha': 'sastra/abhidharma',
	'gretil:sa_kumAralAta-kalpanAmaNDitikA': 'sutra/avadana',
	'gretil:sa_vAgIzvarakIrti-mRtyuvaJcanopadeza': 'tantra/sadhana',
	'gretil:sa_kambalapAda-navazlokI': 'sastra/prajnaparamita-sastra',
	'gretil:sa_kamalazIla-vajracchedikATIkA': 'sastra/prajnaparamita-sastra',
	'gretil:sa_zrIghanAcArasaMgraha': 'vinaya/vinaya-other',
	'gretil:sa_jayarakSita-sphuTArthA-zrIghanAcArasaMgrahaTIkA': 'vinaya/vinaya-other',
	'gretil:sa_vinayasUtra': 'vinaya/vinaya-other',
	'gretil:sa_stUpalakSaNakArikAvivecana': 'sciences/silpa',
	'gretil:sa_subhASitaratnakaraNDakathA': 'literature/niti',
	'gretil:sa_mahAmaNivipulavimAnavizvasupratiSThitaguhyaparamarahasyakalparAjadhAraNI': 'sutra/dharani',
	'gretil:sa_maJjuzrInAmasaMgIti': 'tantra/tantras',
	'gretil:sa_nAgArjuna-zAlistambakamahAyAnasUtraTIkA': 'sastra/madhyamaka',
	'dsbc:323': 'sastra/pramana', // Tarkabhāṣāṭīkā
	'dsbc:747': 'literature/kavya', // Śvānastavakāvyam
	'dsbc:832': 'other/modern', // Vajrayāna darśana mīmāṃsā
	'gretil:sa_dignAga-yogAvatAra': 'sastra/yogacara',
};

/** Display title for an edition's work. */
export const TITLE_OVERRIDES = {
	'gretil:sa_mahAvastu-avAdana': 'Mahāvastu Avadāna',
	'gretil:sa_candrakIrti-prasannapada': 'Prasannapadā',
	'gretil:sa_dharmakIrti-pramANavArttisvavRtti': 'Pramāṇavārttikasvavṛtti',
	'gretil:sa_dharmakIrti-subandhaparIkSA-1-25': 'Sambandhaparīkṣā',
	'gretil:sa_vajracchedikA-prajJApAramitA': 'Vajracchedikā Prajñāpāramitā',
	'gretil:sa_sukhAvatIvyUhasaMkSiptamAtRkA': 'Sukhāvatīvyūha',
	'dsbc:915': 'Niṣpannakrama of the Vajrācāryanayottama',
	'dsbc:896': 'Pratītyasamutpādastutisubhāṣitahṛdaya',
	'gretil:sa_vimalamitra-abhidharmadIpa-comm': 'Abhidharmadīpa with Vibhāṣāprabhāvṛtti',
	'dsbc:792': 'Amoghapāśakalparāja',
	'dsbc:749': 'Bauddhapāribhāṣikaśabdāḥ',
	'dsbc:191': 'Bhadracarīpraṇidhāna',
	'dsbc:152': 'Hārītīstotra',
	'dsbc:953': 'Hevajrasādhanopāyikā',
	'dsbc:102': 'Jñānaprasthāna',
	'dsbc:131': 'Rakṣākarastava',
	'dsbc:751': 'Samāhitā Bhūmi',
	'dsbc:876': 'Bauddhatantrokta Siddhauṣadhisaṅgraha',
	'sarit:caryamelapakapradipa': 'Caryāmelāpakapradīpa',
	'sarit:vadanyayatika': 'Vādanyāyaṭīkā',
	'sarit:ratnakirti-nibandhavali': 'Ratnakīrtinibandhāvali',
	'sarit:samanyadusana': 'Sāmānyadūṣaṇadikprasāritā',
};

// Three different works called Jātakamālā (Āryaśūra's is the one DSBC also has).
SPLIT.add('gretil:sa_gopadatta-jAtakamAlA');
SPLIT.add('gretil:sa_haribhaTTa-jAtakamAlA1-8--11-12--19-20--22--24--26--32--35');

// DSBC has eight different hymns titled Śākyasiṃhastotram, told apart by who composed them.
for (const [iast, deva, note] of [
	[179, 700, 'brahmaṇā kṛtam'],
	[180, 697, "chando'mṛtoddhṛtam"],
	[181, 698, 'durgatipariśodhanoddhṛtam'],
	[182, 699, 'navagrahakṛtam'],
	[183, 703, 'śaṅkarakṛtam'],
	[184, 704, 'surapatikṛtam'],
	[185, 702, 'viṣṇukṛtam'],
	[186, 701, 'yaśodharākṛtam'],
]) {
	SPLIT.add(`dsbc:${iast}`);
	SPLIT.add(`dsbc:${deva}`);
	MERGE.push([`dsbc:${iast}`, `dsbc:${deva}`]);
	TITLE_OVERRIDES[`dsbc:${iast}`] = `Śākyasiṃhastotra (${note})`;
}
