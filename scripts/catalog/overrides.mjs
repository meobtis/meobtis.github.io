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
	// Nāgārjuna and Madhyamaka: editions filed under variant titles of the same work
	['gretil:sa_nAgArjuna-mUlamadhyamakakArikA', 'gretil:sa_nAgArjuna-madhyamakazAstra', 'dsbc:242', 'dsbc:534', 'bdrc:P964F06E4', 'bdrc:P2E32E332', 'bdrc:P5D55E3DF', 'bdrc:P743000B8', 'iriab:mulamadhyamakakarika-tibet-manuscripts-part-x'], // Mūlamadhyamakakārikā (Madhyamakaśāstra)
	['gretil:sa_nAgArjuna-ratnAvalI', 'bdrc:P06445FF2'], // Ratnāvalī (Vaidya's Madhyamakaśāstra volume)
	['gretil:sa_nAgArjuna-vigrahavyAvartanI', 'gretil:sa_nAgArjuna-vigrahavyAvartanIkArikA', 'bdrc:P98A58F6F', 'bdrc:P4464A6F8', 'bdrc:P5BD5FA4B'], // Vigrahavyāvartanī (kārikā and vṛtti)
	['gretil:sa_nAgArjuna-yuktiSaSTikakArikA', 'dsbc:255', 'dsbc:540', 'bdrc:P0653D4E8'], // Yuktiṣaṣṭikākārikā
	['iriab:catuhstotravivarana-fols-1v-5v', 'iriab:catuhstotravivarana-part-xxvi'], // Catuḥstotravivaraṇa
	// Editions of the same text packaged differently (with commentary, kārikā only, fragments, manuscripts)
	['gretil:sa_vimalamitra-abhidharmadIpa', 'gretil:sa_vimalamitra-abhidharmadIpa-1-383', 'dsbc:94', 'dsbc:461', 'bdrc:P0EB5A807', 'bdrc:PB14494EF', 'gretil:sa_vimalamitra-abhidharmadIpa-comm', 'dsbc:95', 'dsbc:462', 'bdrc:P1B296122', 'bdrc:P2C4DE236'], // Abhidharmadīpa
	['gretil:sa_vasubandhu-abhidharmakoza', 'bdrc:P954ECCAF', 'gretil:sa_vasubandhu-abhidharmakozabhASya', 'bdrc:P59CC15AD', 'bdrc:P046BC64C', 'bdrc:P46FA5001', 'dsbc:96', 'dsbc:460'], // Abhidharmakośa
	['gretil:sa_zAntideva-bodhicaryAvatAra', 'gretil:sa_zAntideva-bodhicaryAvatAra-alt', 'dsbc:258', 'dsbc:552', 'bdrc:P244D5F57', 'bdrc:PB997E889', 'bdrc:PF0E2ADC8', 'bdrc:I1187C7C4-iast', 'bdrc:I1187C7C4', 'bdrc:P0066CC81', 'bdrc:P414BEB44', 'bdrc:PA6676F62-iast', 'bdrc:PA6676F62'], // Bodhicaryāvatāra
	['gretil:sa_asaGga-mahAyAnasUtrAlaMkAra', 'gretil:sa_asaGga-mahAyAnasUtrAlaMkAra-alt', 'dsbc:332', 'dsbc:333', 'dsbc:572', 'dsbc:573', 'bdrc:P135698C4', 'bdrc:P9808EA80', 'bdrc:PA55D5512', 'bdrc:PADF677B3', 'gretil:sa_asaGga-mahAyAnasUtrAlaMkAra-comm'], // Mahāyānasūtrālaṃkāra
	['gretil:sa_vasubandhu-triMzikAvijJaptikArikA', 'dsbc:337', 'dsbc:563', 'bdrc:P5BE54056', 'bdrc:P3AA43AE4', 'bdrc:PBD202F4D', 'gretil:sa_vasubandhu-triMzikAvijJaptikArikA-comm', 'bdrc:P90C4A964'], // Triṃśikāvijñaptikārikā
	['gretil:sa_dharmakIrti-nyAyabindu', 'bdrc:PBC16A862', 'dsbc:294', 'dsbc:513', 'bdrc:PB4FBD6C9', 'bdrc:PE645854C', 'gretil:sa_dharmakIrti-nyAyabinduprakaraNa-comm', 'bdrc:PE6C8C44B'], // Nyāyabindu
	['bdrc:P19D13FC9', 'bdrc:P01118D5D'], // Sāṃkhyakārikā
	['gretil:sa_AlambanaparIkSA', 'dsbc:283', 'dsbc:501', 'gretil:sa_AlambanaparIkSA-comm', 'bdrc:PB7271BD1', 'dsbc:284', 'dsbc:502', 'bdrc:P6706F664'], // Ālambanaparīkṣā
	['dsbc:238', 'dsbc:546', 'gretil:sa_hastavAlaprakaraNavRtti', 'dsbc:239', 'dsbc:547'], // Hastavālaprakaraṇa
	['gretil:sa_pramANavArttika', 'dsbc:298', 'dsbc:514', 'bdrc:P18524656', 'bdrc:PB59065EA', 'gretil:sa_dharmakIrti-pramANavArttikakArikA', 'bdrc:P4C58E54A'], // Pramāṇavārttika
	['gretil:sa_madhyamakAvatAra-1-5', 'dsbc:243', 'dsbc:852', 'dsbc:537', 'dsbc:853', 'bdrc:P4085FE01', 'bdrc:P78188E74', 'bdrc:PCF2F5F50', 'bdrc:P7DB27B29-iast', 'bdrc:P7DB27B29', 'dsbc:887', 'dsbc:888'], // Madhyamakāvatāra
	['iriab:karmavibhanga-cambridge-excerpts', 'iriab:karmavibhanga-ms-b-notebook-ix', 'iriab:karmavibhanga-ms-b-first-folios-ix', 'iriab:karmavibhanga-schoyen-fragments', 'iriab:karmavibhanga-ms-e-part-ix', 'iriab:karmavibhanga-ms-e-part-x'], // Karmavibhaṅga
	['gretil:sa_mahAkarmavibhaGga', 'iriab:mahakarmavibhanga-part-vi', 'iriab:mahakarmavibhanga-part-II', 'iriab:mahakarmavibhanga-part-III', 'iriab:mahakarmavibhanga-part-IV', 'iriab:mahakarmavibhanga-part-V'], // Mahākarmavibhaṅga
	['gretil:sa_saddharmapuNDarIkasUtra', 'dsbc:54', 'dsbc:441', 'iriab:gilgit-saddharmapundarika-or11878bg', 'iriab:saddharmapundarika-mannerheim-fragment', 'iriab:saddharmapundarikasutra-sackler-fragment-1', 'bdrc:P85CAE8AD', 'bdrc:P6054AA51', 'iriab:karashima-trilingual-lotus-sutra-part-vii', 'iriab:karashima-trilingual-lotus-sutra-part-viii', 'iriab:karashima-trilingual-lotus-sutra-part-ix', 'iriab:saddharmapundarika-petrovsky-si-p-68', 'iriab:saddharmapundarika-petrovsky-si-p-67-2', 'iriab:saddharmapundarika-british-library-fragments-wille', 'iriab:karashima-trilingual-lotus-sutra-part-vi'], // Saddharmapuṇḍarīkasūtra
	['gretil:sa_saMghATasUtra', 'gretil:sa_saMghATasUtra-alt', 'dsbc:31', 'dsbc:418', 'bdrc:PCFF0E4D8', 'iriab:samghatasutra-group-c', 'iriab:samghatasutra-group-f'], // Saṃghāṭasūtra
	['gretil:sa_aSTasAhasrikA-prajJApAramitA', 'dsbc:68', 'dsbc:397', 'bdrc:P7EA81115', 'bdrc:P329666C5', 'iriab:astasahasrika-missing-portion'], // Aṣṭasāhasrikā prajñāpāramitā
	['gretil:sa_paJcaviMzatisAhasrikA-prajJApAramitA', 'gretil:sa_paJcaviMzatisAhasrikA-prajJApAramitA1', 'gretil:sa_paJcaviMzatisAhasrikA-prajJApAramitA1-8', 'iriab:mannerheim-pancavimsatisahasrika-pancaparamitanirdesa-fragments'], // Pañcaviṃśatisāhasrikā Prajñāpāramitā
	['gretil:sa_ratnaguNasaMcayagAthA', 'dsbc:72', 'dsbc:402', 'bdrc:PB2B2CB2B', 'iriab:prajnaparamitaratnagunasamcayagatha-turfan-blockprint'], // Ratnaguṇasaṃcayagāthā
	['gretil:sa_avadAnazataka', 'dsbc:361-iast', 'dsbc:361', 'iriab:avadanasataka-supriya-gilgit-fe3281'], // Avadānaśataka
	['gretil:sa_sumAgadhAvadAna', 'iriab:sumagadhavadana-gilgit-xx', 'iriab:sumagadha-avadana-gilgit-ms-a'], // Sumāgadhāvadāna
	['gretil:sa_ahoratravratakathA', 'gretil:sa_ahoratravratakathA-prose'], // Ahoratravratakathā
	['gretil:sa_haribhaTTa-jAtakamAlA1-8--11-12--19-20--22--24--26--32--35', 'iriab:jatakamala-haribhatta-gilgit-fragment'], // Jātakamālā (Haribhaṭṭa)
	['iriab:sarvarthasiddhajataka', 'iriab:sakyasimhajataka-straube-xxi'], // Sarvārthasiddhajātaka
	['gretil:sa_kSaNabhaGgasiddhi', 'dsbc:292', 'dsbc:505', 'bdrc:PE9E096E9', 'gretil:sa_ratnakIrti-kSaNabhaGgasiddhi-vyatirekAtmikA', 'gretil:sa_ratnakIrti-kSaNabhaGgasiddhi-vyatirekAtmikA-alt', 'dsbc:293', 'dsbc:506', 'bdrc:PBB50F23D', 'bdrc:PBBA685D6'], // Kṣaṇabhaṅgasiddhi
	['gretil:sa_dharmakIrti-subandhaparIkSA-1-25', 'dsbc:919', 'dsbc:918', 'bdrc:P7170188A'], // Sambandhaparīkṣā
	['gretil:sa_sitAtapatrA', 'dsbc:20', 'dsbc:391', 'bdrc:PA8ABFAA0'], // Sitātapatrā
	['gretil:sa_prAtimokSasUtra-of-the-mahAsAMghikas', 'iriab:pratimoksasutra-mahasamghika-fragments-part-xi', 'iriab:pratimoksasutra-mahasamghika-fragments-part-xvi', 'dsbc:90', 'dsbc:453', 'bdrc:PADCF4F6D', 'gretil:sa_prAtimokSasUtra-of-the-lokottaravAdimahAsaGghika'], // Prātimokṣasūtra of the Mahāsāṃghikas
	['dsbc:232', 'dsbc:481', 'bdrc:P4C667BBD', 'bdrc:PA7706902'], // Mahāvyutpatti
	['gretil:sa_tarkarahasya', 'sarit:tarkarahasya', 'bdrc:P0ECE60D7', 'gretil:sa_pratyakSalakSaNa-of-the-tarkarahasya', 'bdrc:PA99912AF'], // Tarkarahasya
	['gretil:sa_suvikrAntavikrAmiparipRcchA', 'dsbc:74', 'dsbc:405'], // Suvikrāntavikrāmiparipṛcchā
	['gretil:sa_abhisamayAlaMkAra', 'bdrc:P2EE03CD4', 'gretil:sa_maitreyanAtha-abhisamayAlaMkaranAmaprajJApAramitopadezazAstra'], // Abhisamayālaṃkāra
	// Duplicates found by comparing titles across the whole catalogue
	['gretil:sa_asaGga-abhidharmasamuccaya', 'bdrc:PA7F751C2'], // Abhidharmasamuccaya
	['gretil:sa_aparimitAyuHsUtra', 'dsbc:24', 'dsbc:409', 'bdrc:P24B2B44D'], // Aparimitāyuḥsūtra
	['dsbc:796', 'dsbc:147', 'dsbc:649'], // Dharmadhātustava (Dharmadhātunāmastava)
	['dsbc:32', 'dsbc:419', 'dsbc:873', 'dsbc:878'], // Sarvabuddhaviṣayāvatārajñānālokālaṃkāra
	['gretil:sa_zrImahAdevIvyAkaraNa', 'dsbc:11', 'dsbc:383'], // Mahādevīvyākaraṇa
	['gretil:sa_grahamAtRkAdhAraNI', 'dsbc:862', 'dsbc:863'], // Grahamātṛkādhāraṇī
	['gretil:sa_mahApratisarAvidyAdhAraNI', 'gretil:sa_mahApratisarAmahAvidyArAjJI', 'dsbc:381', 'dsbc:381-iast', 'iriab:mahapratisara-vidyarajni-gilgit-fe3119'], // Mahāpratisarā
	['gretil:sa_mahAsaMnipAtaratnaketudhAraNIsUtra', 'gretil:sa_mahAsaMnipAtaratnaketudhAraNIsUtra1-610-11', 'dsbc:17', 'dsbc:388'], // Ratnaketudhāraṇī
	['gretil:sa_pramANavArttika', 'dsbc:298', 'dsbc:514', 'bdrc:P18524656'], // Pramāṇavārttika
	['gretil:sa_pratItyasamutpAdamahAyAnasUtra', 'dsbc:28', 'dsbc:414'], // Pratītyasamutpādamahāyānasūtra
	['gretil:sa_vajravidAraNAdhAraNI', 'gretil:sa_vajravidAraNIdhAraNI', 'dsbc:12', 'dsbc:382'], // Vajravidāraṇā
	['gretil:sa_vimalakIrtinirdeza', 'dsbc:35', 'dsbc:417'], // Vimalakīrtinirdeśa
	['gretil:sa_namaskAraikaviMzatistotra', 'dsbc:113', 'dsbc:631', 'bdrc:P2D54C212'], // Tārānamaskāraikaviṃśatistotra
	['gretil:sa_prAtimokSasUtra-of-the-mahAsAMghikas', 'iriab:pratimoksasutra-mahasamghika-fragments-part-xi'], // Mahāsāṃghika Prātimokṣasūtra
	['gretil:sa_madhyamakAvatAra-1-5', 'dsbc:852', 'dsbc:853', 'bdrc:P7DB27B29', 'bdrc:P7DB27B29-iast', 'bdrc:P4085FE01'], // Madhyamakāvatāra (kārikā)
	// SARIT editions whose titles differ from the same work in GRETIL or DSBC:
	['gretil:sa_paNDitAzoka-sAmAnyadUSaNadikprasAritA', 'sarit:samanyadusana'],
	['dsbc:282', 'sarit:vadanyayatika'], // Vādanyāyaṭīkā (Vipañcitārthā)
	['gretil:sa_ratnakIrti-nibandhAvalI', 'dsbc:300', 'sarit:ratnakirti-nibandhavali'],
	['gretil:sa_Aryadeva-caryAmelAvaNapradIpa', 'sarit:caryamelapakapradipa'], // GRETIL's title is a misspelling
	// Aśvaghoṣa's Saundarananda: two GRETIL editions and DSBC's two (IAST and Devanāgarī).
	['gretil:sa_azvaghoSa-saundarAnanda', 'gretil:sa_azvaghoSa-saundarAnanda-edmatsunami', 'dsbc:224', 'dsbc:476'],
	// Dharmakīrti's Sambandhaparīkṣā: GRETIL's edition (spelled Subandhaparīkṣā) and DSBC's two.
	['gretil:sa_dharmakIrti-subandhaparIkSA-1-25', 'dsbc:919', 'dsbc:918'],
	// BDRC e-texts whose text matches an edition in another source (by content; only where one source work is matched):
	['dsbc:552', 'bdrc:I1187C7C4'],
	['dsbc:753', 'bdrc:P2278AE7F', 'bdrc:PCC9BCCA4'],
	['dsbc:859', 'bdrc:P2540A219', 'bdrc:P8CF98C65'],
	['dsbc:871', 'bdrc:P2B1B4ABF', 'bdrc:PF033A063'],
	['dsbc:763', 'bdrc:P2C6C60E2', 'bdrc:P4214711B'],
	['dsbc:801', 'bdrc:P4BD475FE', 'bdrc:PBEC98756'],
	['dsbc:851', 'bdrc:P4CCCCB2A', 'bdrc:P51539269'],
	['dsbc:882', 'bdrc:P5F707700'],
	['dsbc:875', 'bdrc:P6A52575C'],
	['dsbc:884', 'bdrc:P853E7A5C', 'bdrc:PF6C8885B', 'bdrc:P040BF068', 'bdrc:PD75D724D'],
	['dsbc:748', 'bdrc:P9990394E', 'bdrc:P646E08BB'],
	['dsbc:729', 'bdrc:PC2B1A4D2', 'bdrc:P48836D23'],
	['dsbc:771', 'bdrc:PCA14CD9F', 'bdrc:P23336A07'],
	['dsbc:831', 'bdrc:PCEEE0E4E', 'bdrc:PC822182E'],
	['dsbc:880', 'bdrc:PD034A09E', 'bdrc:PE363468A'],
	['dsbc:222', 'bdrc:P061CA6F6'],
	['dsbc:255', 'bdrc:P0653D4E8'],
	['dsbc:247', 'bdrc:P0B31B28B'],
	['dsbc:306', 'bdrc:P0CE28C52'],
	['dsbc:333', 'bdrc:P135698C4'],
	['gretil:sa_pANDulohitakavastu', 'bdrc:P16826675'],
	['dsbc:95', 'bdrc:P1B296122'],
	['gretil:sa_carmavastu', 'bdrc:P1BBB8BE4'],
	['dsbc:27', 'bdrc:P221EF8EE'],
	['dsbc:260', 'bdrc:P22BCE688'],
	['dsbc:860', 'bdrc:P235363F4'],
	['dsbc:258', 'bdrc:P244D5F57'],
	['dsbc:24', 'bdrc:P24B2B44D'],
	['dsbc:40', 'bdrc:P27DAA76A', 'bdrc:P818FF122'],
	['dsbc:39', 'bdrc:P2D4FBF9D', 'bdrc:PF580D20D'],
	['dsbc:87', 'bdrc:P33932363'],
	['gretil:sa_durvekamizra-hetubinduTIkAloka', 'bdrc:P3B3631B7'],
	['dsbc:852', 'bdrc:P4085FE01'],
	['dsbc:18', 'bdrc:P43C52BF5'],
	['dsbc:232', 'bdrc:P4C667BBD'],
	['dsbc:277', 'bdrc:P4FFB3922'],
	['dsbc:354', 'bdrc:P508E53E5'],
	['gretil:sa_vasubandhu-abhidharmakozabhASya', 'bdrc:P59CC15AD'],
	['dsbc:81', 'bdrc:P5B449444', 'bdrc:PB51AF9A6'],
	['dsbc:337', 'bdrc:P5BE54056'],
	['gretil:sa_poSadhasthApanavastu', 'bdrc:P5BE616F9'],
	['dsbc:13', 'bdrc:P5F4187BA'],
	['dsbc:336', 'bdrc:P5F7784F7'],
	['dsbc:54', 'bdrc:P6054AA51'],
	['dsbc:43', 'bdrc:P663F02E5'],
	['dsbc:741', 'bdrc:P6CD3C484'],
	['dsbc:13', 'bdrc:P6DCC6AB4'],
	['dsbc:281', 'bdrc:P7725102B'],
	['gretil:sa_azvaghoSa-saundarAnanda-edmatsunami', 'bdrc:P7D24DF3D'],
	['dsbc:61', 'bdrc:P7D46A341'],
	['dsbc:103', 'bdrc:P80CDD444'],
	['dsbc:91', 'bdrc:P8894696E'],
	['dsbc:53', 'bdrc:P8B6CC2EF'],
	['dsbc:251', 'bdrc:P9010C003'],
	['dsbc:339', 'bdrc:P946E4CC8'],
	['dsbc:308', 'bdrc:P946F5AA5'],
	['gretil:sa_prAtimokSasUtra-of-the-mUlasarvAstivAdins', 'bdrc:P9A49B482'],
	['gretil:sa_poSadhavastu', 'bdrc:P9FF403FA'],
	['dsbc:50', 'bdrc:PA081D191'],
	['dsbc:100', 'bdrc:PA10ED161'],
	['gretil:sa_nAgArjuna-yuktiSaSTikakArikA', 'bdrc:PA12F91D6'],
	['dsbc:20', 'bdrc:PA8ABFAA0'],
	['dsbc:90', 'bdrc:PADCF4F6D'],
	['dsbc:332', 'bdrc:PADF677B3'],
	['dsbc:233', 'bdrc:PB1AED6A1'],
	['gretil:sa_vasubandhu-madhyAntavibhAgakArikAbhASya', 'bdrc:PB4A49AD3'],
	['dsbc:263', 'bdrc:PB519CD94'],
	['dsbc:782', 'bdrc:PBB70028E', 'bdrc:PABFB6474'],
	['dsbc:337', 'bdrc:PBD202F4D'],
	['dsbc:249', 'bdrc:PC216F458'],
	['dsbc:9', 'bdrc:PC5447014'],
	['gretil:sa_varSAvastu', 'bdrc:PCAFBA14D'],
	['dsbc:288', 'bdrc:PD87EB27B'],
	['dsbc:323', 'bdrc:PDC5A0726'],
	['dsbc:173', 'bdrc:PDD211C38'],
	['dsbc:221', 'bdrc:PDF994FFF'],
	['dsbc:335', 'bdrc:PE018D10C'],
	['dsbc:331', 'bdrc:PE55079DD'],
	['gretil:sa_dharmakIrti-nyAyabinduprakaraNa-comm', 'bdrc:PE6C8C44B'],
	['gretil:sa_durvekamizra-dharmottarapradIpa', 'bdrc:PE8547E02'],
	['dsbc:347', 'bdrc:PEAEA1373'],
	['dsbc:353', 'bdrc:PF011F48D'],
	['gretil:sa_asaGga-trizatikAyAH-prajJApAramitAyAH-kArikAsaptatiH', 'bdrc:PF12AFCAA'],
	['gretil:sa_pravrajyAvastu', 'bdrc:PF1C00644'],
	['gretil:sa_pravAraNAvastu', 'bdrc:PF314F7D4'],
	['dsbc:6', 'bdrc:PF37F967F'],
	['dsbc:321', 'bdrc:PF3E6088F'],
	['dsbc:314', 'bdrc:PF7FB411F'],
	['dsbc:326', 'bdrc:PFBFA78E3'],
	// Wikisource Newar manuscript of the prose Kāraṇḍavyūha ("Karanya Biu Paath").
	['gretil:sa_kAraNDavyUha', 'wikisource:an-94-karanya-biu-paath'],
	// Wikisource Newar manuscripts of works already in GRETIL:
	['gretil:sa_tArAbhaTTArikAnAmASTottarazatakastotra', 'wikisource:an-87-21-tara-sotra', 'wikisource:an-87-21-tara-sotra-iast'],
	['gretil:sa_maJjuzrInAmasaMgIti', 'wikisource:an-92-namsangati', 'wikisource:an-92-namsangati-iast'],
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
	// Parts of Vaidya's Madhyamakaśāstra volume (Ratnāvalī, Mūlamadhyamakakārikā, Vigrahavyāvartanī) that BDRC titles alike:
	'bdrc:P06445FF2',
	'bdrc:P2E32E332',
	'bdrc:P4464A6F8',
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
	// BDRC Sanskrit texts with no match in the other sources.
	'bdrc:P2FFF2552': 'sutra/mahayana-sutra', // Akṣayamatinirdeśa
	'bdrc:PE2D2586F': 'sutra/mahayana-sutra', // Bhaiṣajyagurupūrvapraṇidhānasūtra
	'bdrc:PFCF2244E': 'sutra/mahayana-sutra', // Bodhisatvapiṭaka
	'bdrc:PA7F751C2': 'sastra/abhidharma', // Abhidharmasamuccaya
	'bdrc:PA7706902': 'sciences/vyakarana', // Mahāvyutpatti
	'bdrc:P80484769': 'vinaya/vinaya-other', // MSV 6,09: Māṇavikā
	// ARIRIAB and StPSF editions.
	'iriab:sambadhavakasasutra-schoyen-fragment': 'sutra/agama', // *Saṃbādhāvakāśasūtra, fragment MS 2380/1/1 +
	'iriab:abhidharmasamuccayavyakhya-fols-2v4-8v4': 'sastra/abhidharma', // Abhidharmasamuccayavyākhyā
	'iriab:astasahasrika-missing-portion': 'sutra/prajnaparamita', // Aṣṭasāhasrikā Prajñāpāramitā, the “missing” p
	'iriab:merv-avadana-anthology': 'sutra/avadana', // Avadāna Anthology from Merv
	'iriab:avadanasataka-supriya-gilgit-fe3281': 'sutra/avadana', // Avadānaśataka § 72 Supriyā
	'iriab:bhadrakalpikasutra-or8212-1695': 'sutra/mahayana-sutra', // Bhadrakalpikasūtra
	'iriab:buddhapalita-vrtti-tibet-manuscripts-part-x': 'sastra/madhyamaka', // Buddhapālita-mūlamadhyamaka-vṛtti, Sanskrit m
	'iriab:catuhstotravivarana-fols-1v-5v': 'sastra/madhyamaka', // Catuḥstotravivaraṇa
	'iriab:catuhstotravivarana-part-xxvi': 'sastra/madhyamaka', // Catuḥstotravivaraṇa: commentary on Lokātītast
	'iriab:prajnaparamita-gilgit-colophon': 'sutra/prajnaparamita', // Colophon of the ’Larger Prajñāpāramitā’
	'iriab:sakya-vappata-dhruvabhata-inscription': 'sastra/lekha', // Dedicatory inscription of the Buddha image do
	'iriab:viryasanti-sakyamuni-inscription': 'sastra/lekha', // Dedicatory inscription of the Śākyamuni statu
	'iriab:gilgit-bronze-inscriptions-hinuber-xii': 'sastra/lekha', // Gilgit bronze inscriptions and further Palola
	'iriab:jatakamala-haribhatta-gilgit-fragment': 'sutra/jataka', // Haribhaṭṭa’s Jātakamālā: fragment among the G
	'iriab:hastini-mahavastu': 'sutra/avadana', // Hastinī-jātaka and Hastinī-parikalpa
	'iriab:hemis-avalokitesvara-ye-dharma-inscription': 'sastra/lekha', // Hemis Avalokiteśvara inscription
	'iriab:falk-gupta-style-bronze-inscription': 'sastra/lekha', // Inscription on a standing bronze Buddha in Gu
	'iriab:pekapharna-bronze-inscription': 'sastra/lekha', // Inscription on the bronze of Pekapharṇa
	'iriab:incense-burner-maclean-saladitya-inscription': 'sastra/lekha', // Inscription on the incense burner from the Ma
	'iriab:dhyani-buddhas-yasodeva-inscriptions': 'sastra/lekha', // Inscriptions on the five Dhyāni-Buddhas donat
	'iriab:gilgit-bronze-inscriptions-x': 'sastra/lekha', // Inscriptions on three new bronzes from Gilgit
	'iriab:karmavibhanga-cambridge-excerpts': 'sutra/agama', // Karmavibhaṅga
	'iriab:karmavibhanga-ms-b-first-folios-ix': 'sutra/agama', // Karmavibhaṅga, first three folios of Manuscri
	'iriab:karmavibhanga-ms-b-notebook-ix': 'sutra/agama', // Karmavibhaṅga, Hemraj Sharman’s notebook tran
	'iriab:karmavibhanga-schoyen-fragments': 'sutra/agama', // Karmavibhaṅga: Sanskrit fragments in the Schø
	'iriab:karmavibhanga-ms-e-part-ix': 'sutra/agama', // Karmavibhaṅgasūtra, Manuscript E
	'iriab:mannerheim-kasyapaparivarta-pancaparamitanirdesa-fragments': 'sutra/mahayana-sutra', // Kāśyapaparivarta and Pañcapāramitānirdeśasūtr
	'iriab:mahadandanamadharani-sackler-fragment-2': 'sutra/dharani', // Āryamahādaṇḍanāmadhāraṇī
	'iriab:mahakarmavibhanga-part-vi': 'sutra/agama', // Mahākarmavibhaṅga / Karmavibhaṅgasūtra, MS an
	'iriab:mahakarmavibhanga-part-II': 'sutra/agama', // Mahākarmavibhaṅga and Karmavibhaṅgasūtra
	'iriab:mahaparinirvana-mahasutra-petrovsky': 'sutra/mahayana-sutra', // Mahāparinirvāṇa-mahāsūtra
	'iriab:mahapratisara-vidyarajni-gilgit-fe3119': 'sutra/dharani', // Mahāpratisarāvidyārājñī
	'iriab:mangalahamsika-donation-inscriptions': 'sastra/lekha', // Maṅgalahaṃsikā donation colophon and bronze i
	'iriab:buddhapalita-mulamadhyamakavrtti-part-xi': 'sastra/madhyamaka', // Mūlamadhyamakakārikā and Buddhapālita’s comme
	'iriab:mulamadhyamakakarika-tibet-manuscripts-part-x': 'sastra/madhyamaka', // Mūlamadhyamakakārikā, Sanskrit manuscript fro
	'iriab:padumavatiye-jataka': 'sutra/avadana', // Padumāvatīye jātakaṃ
	'iriab:padumavatiye-parikalpa': 'sutra/avadana', // Padumāvatīye parikalpaḥ
	'iriab:pancavanijasata-mahavastu-prose': 'sutra/avadana', // Pañca vāṇijaśatā, prose version
	'iriab:pancavanijasata-mahavastu-verse': 'sutra/avadana', // Pañca vāṇijaśatā, verse version
	'iriab:mannerheim-pancavimsatisahasrika-pancaparamitanirdesa-fragments': 'sutra/prajnaparamita', // Pañcaviṃśatisāhasrikā Prajñāpāramitā, Mannerh
	'iriab:sirika-pedestal-inscription-mathura': 'sastra/lekha', // Pedestal inscription of Śirika and the Saheth
	'iriab:phanigiri-rudrapurusadatta-inscription': 'sastra/lekha', // Phanigiri octagonal-pillar inscription of Rud
	'iriab:prajnaparamitaratnagunasamcayagatha-turfan-blockprint': 'sutra/prajnaparamita', // Prajñāpāramitāratnaguṇasaṃcayagāthā XIV 4–8, 
	'iriab:ratnagunasamcayagathavyakhya-fragment': 'sutra/prajnaparamita', // Prajñāpāramitāratnaguṇasaṃcayagāthāvyākhyā
	'iriab:pratimoksasutra-mahasamghika-fragments-part-xi': 'vinaya/pratimoksa', // Prātimokṣasūtra of the Mahāsāṃghika-vādins
	'iriab:ratnaketuparivarta-saerji-part-xiii': 'sutra/mahayana-sutra', // Ratnaketuparivarta, more fragments: fragments
	'iriab:ratnaketuparivarta-saerji-part-xiv': 'sutra/mahayana-sutra', // Ratnaketuparivarta, more fragments: fragments
	'iriab:ratnaketuparivarta-saerji-part-xi': 'sutra/mahayana-sutra', // Ratnaketuparivarta, new fragment, folio with 
	'iriab:sabhika-vastu-mahavastu': 'sutra/avadana', // Sabhika-vastu
	'iriab:karashima-trilingual-lotus-sutra-part-viii': 'sutra/mahayana-sutra', // Saddharmapuṇḍarīkasūtra, ch. XIII §§ 19–25: S
	'iriab:karashima-trilingual-lotus-sutra-part-ix': 'sutra/mahayana-sutra', // Saddharmapuṇḍarīkasūtra, ch. XIV § 1: Sanskri
	'iriab:saddharmapundarika-petrovsky-si-p-68': 'sutra/mahayana-sutra', // Saddharmapuṇḍarīkasūtra, chapter II, verses 3
	'iriab:saddharmapundarika-petrovsky-si-p-67-2': 'sutra/mahayana-sutra', // Saddharmapuṇḍarīkasūtra, fragments SI P/67
	'iriab:saddharmapundarika-british-library-fragments-wille': 'sutra/mahayana-sutra', // Saddharmapuṇḍarīkasūtra, recently identified 
	'iriab:karashima-trilingual-lotus-sutra-part-vii': 'sutra/mahayana-sutra', // Saddharmapuṇḍarīkasūtra, XIII §§ 13–18
	'iriab:karashima-trilingual-lotus-sutra-part-vi': 'sutra/mahayana-sutra', // Saddharmapuṇḍarīkasūtra: chapter XIII Sukhavi
	'iriab:sakyasimhajataka-straube-xxi': 'sutra/jataka', // Śākyasiṃhajātaka / Sarvārthasiddhajātaka, sta
	'iriab:samghatasutra-group-c': 'sutra/mahayana-sutra', // Saṃghāṭasūtra, Gilgit vulgate: manuscript C w
	'iriab:samghatasutra-group-f': 'sutra/mahayana-sutra', // Saṃghāṭasūtra: manuscript F with manuscripts 
	'iriab:samskrtasamskrtaviniscaya-cambridge-fragment': 'sastra/yogacara', // Saṃskṛtāsaṃskṛtaviniścaya
	'iriab:otani-sanskrit-fragments-karashima': 'sutra/dharani', // Sanskrit fragments of the Suvarṇaprabhāsottam
	'iriab:usnisavijayadharani-yuan-enlarged': 'sutra/dharani', // Āryasarvadurgatipariśodhanoṣṇīṣavijayadhāraṇī
	'iriab:sarvarthasiddhajataka': 'sutra/jataka', // Sarvārthasiddhajātaka
	'iriab:subandhu-second-copperplate-grant': 'sastra/lekha', // Second Copper-Plate Grant of King Subandhu
	'iriab:st-petersburg-sanskrit-fragments-karashima-vorobyova': 'sutra/mahayana-sutra', // Some Buddhist Sanskrit fragments from the St.
	'iriab:sudhanakumara-avadana-gilgit-fe3300': 'sutra/avadana', // Sudhanakumāra-avadāna
	'iriab:sumagadha-avadana-gilgit-ms-a': 'sutra/avadana', // Sumāgadhāvadāna, Manuscript A
	'iriab:sutrasamuccaya': 'sastra/madhyamaka', // Sūtrasamuccaya
	'iriab:synonym-lexicon-amarakosa-like-schoyen': 'sciences/vyakarana', // Synonym lexicon similar to the Amarakośa
	'iriab:three-brief-dated-inscriptions-hinuber': 'sastra/lekha', // Three brief dated inscriptions
	'iriab:trisvabhava': 'sastra/yogacara', // Trisvabhāvaḥ
	'iriab:usnisavijaya-dharani-nepal': 'sutra/dharani', // Uṣṇīṣavijayā Dhāraṇī
	'iriab:yuktisastikavrtti-folio-xvi': 'sastra/madhyamaka', // Yuktiṣaṣṭikāvṛtti
	// Wikisource Nepal Bhasa manuscripts.
	'wikisource:an-87-21-tara-sotra': 'stotra/stotra-deity', // 21 Tara Sotra
	'wikisource:an-90-ashtami-bartha-katha': 'sutra/avadana', // Ashtami Bartha Katha
	'wikisource:an-95-bali-raja-sambodan-katha': 'sutra/avadana', // Bali Raja Sambodan Katha
	'wikisource:an-101-basundhara-katha': 'sutra/avadana', // Basundhara Katha
	'wikisource:an-99-bichitra-karni-awadan': 'sutra/avadana', // Bichitra Karni Awadan
	'wikisource:an-96-debya-awadan': 'sutra/avadana', // Debya Awadan
	'wikisource:an-98-kapisa-awadan': 'sutra/avadana', // Kapisa Awadan
	'wikisource:an-88-carya-git': 'tantra/giti', // Caryāgīti
	'wikisource:an-102-gunakarunamaya-biu': 'tantra/sadhana', // Gunakarunamaya Biu
	'wikisource:an-93-mahayan-sutra': 'sutra/avadana', // Mahayan Sutra = Adbhutakuladīpadharmarājakathā
	'wikisource:an-92-namsangati': 'tantra/tantras', // Namasangati
	'wikisource:an-89-pancharakshya-path': 'sutra/dharani', // Pancharakshya Path
	'wikisource:an-97-uposadh-badhan': 'vinaya/vinaya-other', // Uposadh Badhan
};

/** Display title for an edition's work. */
export const TITLE_OVERRIDES = {
	'gretil:sa_vimalamitra-abhidharmadIpa': 'Abhidharmadīpa',
	'gretil:sa_vasubandhu-abhidharmakozabhASya': 'Abhidharmakośa',
	'gretil:sa_hastavAlaprakaraNavRtti': 'Hastavālaprakaraṇa',
	'gretil:sa_dharmakIrti-pramANavArttikakArikA': 'Pramāṇavārttika',
	'gretil:sa_prAtimokSasUtra-of-the-lokottaravAdimahAsaGghika': 'Prātimokṣasūtra of the Mahāsāṃghikas',
	'gretil:sa_pratyakSalakSaNa-of-the-tarkarahasya': 'Tarkarahasya',
	'iriab:sakyasimhajataka-straube-xxi': 'Sarvārthasiddhajātaka',
	'bdrc:P01118D5D': 'Sāṃkhyakārikā',
	'gretil:sa_gopadatta-jAtakamAlA': 'Jātakamālā (Gopadatta)',
	'gretil:sa_haribhaTTa-jAtakamAlA1-8--11-12--19-20--22--24--26--32--35': 'Jātakamālā (Haribhaṭṭa)',
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
