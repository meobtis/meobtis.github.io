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
	// Aśvaghoṣa's Saundarananda: two GRETIL editions and DSBC's two (IAST and Devanāgarī).
	['gretil:sa_azvaghoSa-saundarAnanda', 'gretil:sa_azvaghoSa-saundarAnanda-edmatsunami', 'dsbc:224', 'dsbc:476'],
	// Dharmakīrti's Sambandhaparīkṣā: GRETIL's edition (spelled Subandhaparīkṣā) and DSBC's two.
	['gretil:sa_dharmakIrti-subandhaparIkSA-1-25', 'dsbc:919', 'dsbc:918'],
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
	'gretil:sa_dramatic-fragments-buddhist': 'literature/nataka',
	'schoyen:sarvadharmapravrttinirdesa': 'sutra/mahayana-sutra',
	// Early discourses with Pāli or Āgama parallels that DSBC files under Mahāyāna sūtras (or the fallback rule did).
	'gretil:sa_mahAvadAnasUtra': 'sutra/agama', // Mahāvadānasūtra
	'gretil:sa_mahAparinirvANasUtra': 'sutra/agama', // Mahāparinirvāṇasūtra
	'gretil:sa_nagaropamasUtra': 'sutra/agama', // Nagaropamasūtra
	'gretil:sa_dhvajAgrasUtra': 'sutra/agama', // Dhvajāgrasūtra
	'gretil:sa_candrasUtra': 'sutra/agama', // Candrasūtra
	'gretil:sa_pratItyasamutpAdavibhaGgasUtra': 'sutra/agama', // Pratītyasamutpādavibhaṅgasūtra
	'dsbc:38': 'sutra/agama', // Catuṣpariṣat sūtram
	'gretil:sa_satyasUtra': 'sutra/agama', // Satyasūtra
	'gretil:sa_svAgatasUtra': 'sutra/agama', // Svāgatasūtra
	'gretil:sa_dazabalasUtra-1-4': 'sutra/agama', // Daśabalasūtra
	'gretil:sa_devatAsUtra-and-alpadevatAsUtra': 'sutra/agama', // Devatāsūtra and Alpadevatāsūtra
	'gretil:sa_anityatAsUtra': 'sutra/agama', // Anityatāsūtra
	// BDRC e-texts whose titles do not match the GRETIL, DSBC or SARIT ones.
	'bdrc:P6054AA51': 'sutra/mahayana-sutra', // 1 nidānaparivartaḥ
	'bdrc:I1187C7C4': 'sastra/madhyamaka-yogacara', // 7E92
	'bdrc:P1B296122': 'sastra/abhidharma', // Abhidharmadipa and its commentary called Vibhasapr
	'bdrc:P4FFB3922': 'sastra/prajnaparamita-sastra', // Abhisamayalankarantah patinam
	'bdrc:PBB70028E': 'sastra/madhyamaka-yogacara', // Ādikarmapradīpa Bodhicaryāvatāraṭīkā
	'bdrc:P1D3F6BAE': 'sutra/mahayana-sutra', // Akṣayamatinirdeśa
	'bdrc:PC5447014': 'sutra/dharani', // Arya Amoghpash hrdaya nama Mahayana Sutra
	'bdrc:P6CD3C484': 'sastra/pramana', // Antarvyāpti
	'bdrc:P9BCBBC8A': 'sastra/abhidharma', // Asaṅga: Abhidharmasamuccaya
	'bdrc:P9D68CCE0': 'sastra/prajnaparamita-sastra', // Asaṅga: Triśatikāyāḥ Prajñāpāramitāyāḥ Kārikāsapta
	'bdrc:P135698C4': 'sastra/yogacara', // Asaṅga/Maitreya: Mahāyānasūtrālaṃkāra
	'bdrc:P05A24182': 'sastra/yogacara', // Asaṅga/Maitreya: Ratnagotravibhāga
	'bdrc:P061CA6F6': 'literature/kavya', // Aśvaghoṣa: Buddhacarita
	'bdrc:P6CE67BA2': 'literature/kavya', // Aśvaghoṣa: Saundarananda
	'bdrc:P3A11A079': 'sastra/madhyamaka-yogacara', // Atisha-virachita Ekadasagrantha
	'bdrc:P0BA8D19A': 'sutra/mahayana-sutra', // BA: Daśabhūmikasūtra
	'bdrc:P27DAA76A': 'sutra/mahayana-sutra', // BA: Gaṇḍavyūhasūtra
	'bdrc:P09079547': 'stotra/stotra-buddha', // Bauddha Stotra Saṃgraha
	'bdrc:PDF214891': 'sutra/mahayana-sutra', // Bhaiṣajyagurupūrvapraṇidhānasūtra
	'bdrc:PFBFA78E3': 'sastra/madhyamaka', // Bhavasaṅkrānti Śāstra
	'bdrc:P0066CC81': 'sastra/madhyamaka-yogacara', // Bodhicaryāvatāra of Śāntideva with the Commentary 
	'bdrc:P22BCE688': 'sastra/madhyamaka-yogacara', // Bodhipathpradipa of Atisha
	'bdrc:P69A95876': 'sutra/mahayana-sutra', // Bodhisatvacaryānirdeśa
	'bdrc:PC9404848': 'sutra/mahayana-sutra', // Bodhisatvapiṭaka
	'bdrc:P7114A91B': 'sastra/madhyamaka', // Candrakīrti: Madhyamakāvatāra
	'bdrc:PF011F48D': 'tantra/giti', // Caryāgitikoṣaḥ upodghātaḥ
	'bdrc:PF7FB411F': 'sciences/silpa', // Citralakṣaṇam: an old text of Indian Art
	'bdrc:P508E53E5': 'sastra/madhyamaka', // Cittavisuddhiprakarna of Aryadeva
	'bdrc:PE8547E02': 'sastra/pramana', // Dharmottarapradīpa subcommentary on Dharmottara’s 
	'bdrc:P4118BA5B': 'sutra/mahayana-sutra', // Gaganagañjaparipṛcchā
	'bdrc:P8CC4E1E4': 'sutra/mahayana-sutra', // Gaṅgottaraparipṛcchā
	'bdrc:PD87EB27B': 'sastra/pramana', // Hetubindu of Dharmakirti
	'bdrc:P3B3631B7': 'sastra/pramana', // Hetubinduṭīkāloka (subcommentary on Arcaṭa’s Hetub
	'bdrc:P599CC5E1': 'sastra/pramana', // Jñānaśrimitra’s Anupalabdhirahasya and Sarvaśabdāb
	'bdrc:P432B9EE8': 'sutra/mahayana-sutra', // Khaḍgaviṣāṇasūtra
	'bdrc:P5F707700': 'sciences/vyakarana', // Laghukaumudī
	'bdrc:P6CE36569': 'sutra/mahayana-sutra', // Laṅkāvatārasūtra
	'bdrc:P040BF068': 'sutra/avadana', // Le Mahâvastu
	'bdrc:P06445FF2': 'sastra/madhyamaka', // Madhyamakaśāstra of Nāgārjuna
	'bdrc:P0B31B28B': 'sastra/madhyamaka', // Madhyamakaśāstravṛtti
	'bdrc:PE55079DD': 'sastra/yogacara', // Madhyanatavibhagashastram
	'bdrc:PB4A49AD3': 'sastra/yogacara', // Madhyāntavibhāgakārikābhāṣya a commentary on the M
	'bdrc:PEAEA1373': 'tantra/tantras', // Mahāmāyātantram with Guṇāvatī
	'bdrc:P53B02084': 'sciences/vyakarana', // Mahāvyutpatti with sGra sbyor bam po gñis pa
	'bdrc:PADF677B3': 'sastra/yogacara', // Mahayana sutralankara of Asanga with its Svavrtti
	'bdrc:P004BD2EB': 'sutra/mahayana-sutra', // Mahāyāna-sūtra-saṃgrahaḥ
	'bdrc:P705A4FCF': 'sutra/mahayana-sutra', // Mañjuśrīvikrīḍitasūtra
	'bdrc:P8BBAF02D': 'stotra/stotra-buddha', // Mātṛceṭa: Śatapañcāśatka
	'bdrc:P7ADD2815': 'stotra/stotra-buddha', // Mātṛceṭa: Varṇārhavarṇastotra
	'bdrc:P07DCCE3D': 'vinaya/vinayavastu', // MSV 1,01: Pravrajyāvastu
	'bdrc:P7AD3904D': 'vinaya/vinayavastu', // MSV 1,02: Poṣadhavastu
	'bdrc:P557F46A8': 'vinaya/vinayavastu', // MSV 1,03: Pravāraṇāvastu
	'bdrc:PCAFBA14D': 'vinaya/vinayavastu', // MSV 1,04: Varṣāvastu
	'bdrc:P1BBB8BE4': 'vinaya/vinayavastu', // MSV 1,05: Carmavastu
	'bdrc:P79A1EA21': 'vinaya/vinayavastu', // MSV 1,07: Cīvaravastu
	'bdrc:PBFE6909C': 'vinaya/vinayavastu', // MSV 1,08: Kaṭhinavastu
	'bdrc:P8943C89F': 'vinaya/vinayavastu', // MSV 1,09: Kośāmbakavastu
	'bdrc:P16826675': 'vinaya/vinayavastu', // MSV 1,11: Pāṇḍulohitakavastu
	'bdrc:P5BE616F9': 'vinaya/vinayavastu', // MSV 1,14: Poṣadhasthāpanavastu
	'bdrc:P81B615D1': 'vinaya/vinayavastu', // MSV 1,15: Śayanāsanavastu
	'bdrc:P339173BD': 'vinaya/vinayavastu', // MSV 1,16: Adhikaraṇavastu
	'bdrc:P0111781C': 'vinaya/vinayavastu', // MSV 1,17: Saṃghabhedavastu
	'bdrc:P649939EE': 'vinaya/pratimoksa', // MSV 2,0: Prātimokṣasūtra
	'bdrc:PCAE050CC': 'vinaya/vinaya-other', // MSV 2,01: Vinayavibhaṅga
	'bdrc:PA0CB5F15': 'vinaya/pratimoksa', // MSV 3,0: Bhikṣuṇīprātimokṣa
	'bdrc:PD73539D4': 'vinaya/vinaya-other', // MSV 3,01: Bhikṣuṇīvibhaṅga
	'bdrc:PA0E646F6': 'vinaya/vinaya-other', // MSV 4,00: Kṣudrakavastu
	'bdrc:PA98FCA1A': 'vinaya/vinaya-other', // MSV 5,00: Uttaragrantha
	'bdrc:PC8DEAD65': 'vinaya/vinaya-other', // MSV 6,01: Upāliparipṛcchā
	'bdrc:P785EFEE8': 'vinaya/vinaya-other', // MSV 6,02: Vinītakā
	'bdrc:P740FDF74': 'vinaya/vinaya-other', // MSV 6,03: Ekottara
	'bdrc:PCF523200': 'vinaya/vinaya-other', // MSV 6,04: Pañcaka
	'bdrc:P64DDF66D': 'vinaya/vinaya-other', // MSV 6,05: Ṣoḍaśaka
	'bdrc:PAAE0ECE5': 'vinaya/vinaya-other', // MSV 6,06: Nidāna
	'bdrc:PED4AE681': 'vinaya/vinaya-other', // MSV 6,07: Muktaka
	'bdrc:P4366D8A0': 'vinaya/vinaya-other', // MSV 6,09: Māṇavikā
	'bdrc:P1D643E51': 'vinaya/vinaya-other', // MSV 6,10: Mātṛkā
	'bdrc:P61D24912': 'vinaya/vinaya-other', // MSV 7,00: Conclusion
	'bdrc:P5D55E3DF': 'sastra/madhyamaka', // Nāgārjuna: Mūlamadhyamakakārikā
	'bdrc:P9ACDB0AF': 'sastra/madhyamaka', // Nāgārjuna: Ratnāvalī
	'bdrc:P5BD5FA4B': 'sastra/madhyamaka', // Nāgārjuna: Vigrahavyāvartanīvṛtti
	'bdrc:P43C52BF5': 'sutra/mahayana-sutra', // Nārāyaṇaparipṛcchā sutra
	'bdrc:P6DCC6AB4': 'sutra/dharani', // Nirvikalpapraveśadhāraṇī
	'bdrc:PE6C8C44B': 'sastra/pramana', // Nyāyabinduprakaraṇa with Vinītadeva’s Nyāyabinduvi
	'bdrc:P54E04B19': 'vinaya/vinaya-other', // Pārājikā
	'bdrc:P471849F4': 'tantra/tantra-commentary', // Piṇḍīkramaḥ Pañcakrama
	'bdrc:PADCF4F6D': 'vinaya/pratimoksa', // Pratimoksa sutra of Mahasanghikas
	'bdrc:PA10ED161': 'sastra/madhyamaka', // Pratityasamutpada hrdaya and Dharmadhatugarbhaviva
	'bdrc:PC216F458': 'sastra/madhyamaka', // Pratityasamutpadahrdaya and aryadharmadhatugarbhav
	'bdrc:P1FCBCCCD': 'sutra/mahayana-sutra', // Pratyutpannabuddhasamādhisūtra
	'bdrc:P00AD0826': 'sastra/pramana', // Pre-Dinnaga Budhist texts on Logic
	'bdrc:PF3E6088F': 'sutra/mahayana-sutra', // Āryaśālistamba sutra kātikā
	'bdrc:I4663C136': 'tantra/tantras', // Samantabhadra Guro Mukhāgamanāma
	'bdrc:P7170188A': 'sastra/pramana', // Sambandhaparīkṣā of Dharmakirti
	'bdrc:P19D13FC9': 'sastra/sastra-other', // Sāṃkhyakārikā
	'bdrc:P01118D5D': 'sastra/sastra-other', // Sāṃkhyakārikā with Māṭhara’s commentary Māṭharavṛt
	'bdrc:P6B2D23FA': 'sastra/pramana', // Santānāntarasiddhi kārikā ṭīkā
	'bdrc:P244D5F57': 'sastra/madhyamaka-yogacara', // Śāntideva: Bodhicaryāvatāra
	'bdrc:P7725102B': 'sastra/prajnaparamita-sastra', // Saratama: A Panjika on the Astasahasrika Prajnapar
	'bdrc:P9010C003': 'sastra/madhyamaka', // Satyadvayavataradigrantha catustayam
	'bdrc:P646E08BB': 'literature/kavya', // Śikhisamuccayaḥ
	'bdrc:P9D034ADB': 'sastra/pramana', // Six Buddhist Nyaya tracts in Sanskrit
	'bdrc:P5F7784F7': 'sastra/yogacara', // Śrāvakabhūmiḥ of Acarya Asanga
	'bdrc:P5B449444': 'tantra/tantras', // Śrīherukābhidhānaṃ Cakrasaṃvaratantram with the Vi
	'bdrc:PDC5A0726': 'sastra/pramana', // Śrīmokṣākaraguptaviracitā tarkabhāṣāṭīkā
	'bdrc:P171894EE': 'sutra/mahayana-sutra', // Tathāgatagarbhasūtra
	'bdrc:PBEC98756': 'tantra/tantras', // The Buddhakapālatantra Chapters 9 to
	'bdrc:P4214711B': 'tantra/tantras', // The Caṇḍamahāroṣaṇa tantra: Chapters I-VIII
	'bdrc:PF033A063': 'tantra/tantra-commentary', // The Laghutantraṭīkā by Vajrapāṇi
	'bdrc:PCC9BCCA4': 'tantra/tantras', // The Sarvadurgatipariśodhana tantra : elimination o
	'bdrc:P0CE28C52': 'sastra/pramana', // Udayananirākaraṇam of Rantnakirti
	'bdrc:P946F5AA5': 'sastra/pramana', // Vādanyāya of Dharmakirti
	'bdrc:P59CC15AD': 'sastra/abhidharma', // Vasubandhu: Abhidharmakośabhāṣya
	'bdrc:P5BE54056': 'sastra/yogacara', // Vasubandhu: Triṃśikāvijñapti
	'bdrc:P946E4CC8': 'sastra/yogacara', // Vijnaptimatrasiddhi-prakaranam-dvayam
	'bdrc:P7D46A341': 'sutra/mahayana-sutra', // Vimalakīrtinirdeśa: A Sanskrit Edition Based upon 
	'bdrc:PC822182E': 'stotra/stotra-buddha', // Vṛttamālāstuti of Jñānaśrīmitra with Śākyarakṣita’
	'bdrc:PA12F91D6': 'sastra/madhyamaka', // Yuktiṣaṣṭikakārikā Sanskrit reconstruction
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
	'gretil:sa_azvaghoSa-saundarAnanda': 'Saundarananda',
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
