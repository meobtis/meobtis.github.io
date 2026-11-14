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
	// BDRC e-texts whose text is the same as an edition in another source (matched by content):
	['dsbc:552', 'bdrc:I1187C7C4'], // 7E92
	['dsbc:767', 'bdrc:P04938C38'], // Pārājikā
	['dsbc:773', 'bdrc:P15E29212'], // Pārājikā
	['dsbc:769', 'bdrc:P20EBE0E3'], // Pārājikā
	['dsbc:753', 'bdrc:P2278AE7F'], // The Sarvadurgatipariśodhana tantra : eliminat
	['dsbc:859', 'bdrc:P2540A219'], // South Asian classical studies No.
	['dsbc:724', 'bdrc:P29D8E3BB'], // The Gilgit Manuscript of the Sayanasanavastu 
	['dsbc:871', 'bdrc:P2B1B4ABF'], // The Laghutantraṭīkā by Vajrapāṇi
	['dsbc:763', 'bdrc:P2C6C60E2'], // The Caṇḍamahāroṣaṇa tantra: Chapters I-VIII
	['dsbc:750', 'bdrc:P34DB0416'], // Dhīh Journal
	['dsbc:733', 'bdrc:P48254083'], // Jñānaśrimitra’s Anupalabdhirahasya and Sarvaś
	['dsbc:801', 'bdrc:P4BD475FE'], // The Buddhakapālatantra Chapters 9 to
	['dsbc:734', 'bdrc:P4BD8ADCB'], // Jñānaśrimitra’s Anupalabdhirahasya and Sarvaś
	['dsbc:851', 'bdrc:P4CCCCB2A'], // Aririab
	['dsbc:740', 'bdrc:P572281BB'], // Dhīh Journal
	['dsbc:872', 'bdrc:P5B6DDC1F'], // Sphuṭārthā abhidharmakośavyākhyā
	['dsbc:882', 'bdrc:P5F707700'], // Laghukaumudī
	['dsbc:875', 'bdrc:P6A52575C'], // Buddhist Studies Review
	['dsbc:736', 'bdrc:P78597666'], // Dhīh Journal
	['dsbc:746', 'bdrc:P828DE96D'], // Dhīh Journal
	['dsbc:884', 'bdrc:P853E7A5C'], // Le Mahâvastu
	['dsbc:765', 'bdrc:P8E0CC4AD'], // Pārājikā
	['dsbc:884', 'bdrc:P920D209A'], // Svastyayanagāthā
	['dsbc:748', 'bdrc:P9990394E'], // Śikhisamuccayaḥ
	['dsbc:727', 'bdrc:PA0DB1B77'], // The Gilgit Manuscript of the Sayanasanavastu 
	['dsbc:552', 'bdrc:PA6676F62'], // Bodhicaryāvatāra of Śāntideva with the Commen
	['dsbc:729', 'bdrc:PC2B1A4D2'], // Essays on the History of Buddhism
	['dsbc:744', 'bdrc:PC2BD44F9'], // Dhīh Journal
	['dsbc:771', 'bdrc:PCA14CD9F'], // Sanskrit Manuscripts in China
	['dsbc:831', 'bdrc:PCEEE0E4E'], // Vṛttamālāstuti of Jñānaśrīmitra with Śākyarak
	['dsbc:880', 'bdrc:PD034A09E'], // Proceedings and Transactions of the Fifth Ind
	['dsbc:777', 'bdrc:PD039A665'], // Pārājikā
	['dsbc:738', 'bdrc:PDCF68FA8'], // Dhīh Journal
	['dsbc:886', 'bdrc:PF6C8885B'], // Le Mahâvastu
	['dsbc:46', 'bdrc:P004BD2EB'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:259', 'bdrc:P0066CC81'], // Bodhicaryāvatāra of Śāntideva with the Commen
	['dsbc:305', 'bdrc:P00AD0826'], // Pre-Dinnaga Budhist texts on Logic
	['dsbc:885', 'bdrc:P040BF068'], // Le Mahâvastu
	['dsbc:96', 'bdrc:P046BC64C'], // Abhidharmakośabhāṣya
	['dsbc:222', 'bdrc:P061CA6F6'], // Aśvaghoṣa: Buddhacarita
	['dsbc:233', 'bdrc:P06445FF2'], // Madhyamakaśāstra of Nāgārjuna
	['dsbc:255', 'bdrc:P0653D4E8'], // The Tibet Journal
	['dsbc:203', 'bdrc:P09079547'], // Bauddha Stotra Saṃgraha
	['dsbc:349', 'bdrc:P0AD0B42F'], // Dhīh Journal
	['dsbc:247', 'bdrc:P0B31B28B'], // Madhyamakaśāstravṛtti
	['dsbc:306', 'bdrc:P0CE28C52'], // Udayananirākaraṇam of Rantnakirti
	['dsbc:333', 'bdrc:P135698C4'], // Asaṅga/Maitreya: Mahāyānasūtrālaṃkāra
	['gretil:sa_pANDulohitakavastu', 'bdrc:P16826675'], // MSV 1,11: Pāṇḍulohitakavastu
	['dsbc:110', 'bdrc:P1745E595'], // Bauddha Stotra Saṃgraha
	['dsbc:194', 'bdrc:P1A3DB710'], // Bauddha Stotra Saṃgraha
	['dsbc:95', 'bdrc:P1B296122'], // Abhidharmadipa and its commentary called Vibh
	['dsbc:57', 'bdrc:P1B2A721C'], // Gilgit Manuscripts
	['dsbc:114', 'bdrc:P1B957B9E'], // Bauddha Stotra Saṃgraha
	['gretil:sa_carmavastu', 'bdrc:P1BBB8BE4'], // MSV 1,05: Carmavastu
	['dsbc:27', 'bdrc:P221EF8EE'], // Buddhist Himalaya Vol.1, No.2.
	['dsbc:260', 'bdrc:P22BCE688'], // Bodhipathpradipa of Atisha
	['dsbc:770', 'bdrc:P23336A07'], // Sanskrit Manuscripts in China
	['dsbc:860', 'bdrc:P235363F4'], // Two Vajrayāna Works
	['dsbc:737', 'bdrc:P23D2E732'], // Dhīh Journal
	['dsbc:258', 'bdrc:P244D5F57'], // Śāntideva: Bodhicaryāvatāra
	['dsbc:24', 'bdrc:P24B2B44D'], // Manuscripts Remains of Buddhist literature fo
	['dsbc:142', 'bdrc:P27584B63'], // Bauddha Stotra Saṃgraha
	['dsbc:40', 'bdrc:P27DAA76A'], // BA: Gaṇḍavyūhasūtra
	['dsbc:39', 'bdrc:P2D4FBF9D'], // BA: Daśabhūmikasūtra
	['dsbc:117', 'bdrc:P2DE1D2CF'], // Bauddha Stotra Saṃgraha
	['dsbc:242', 'bdrc:P2E32E332'], // Madhyamakaśāstra of Nāgārjuna
	['dsbc:201', 'bdrc:P2EB6F83F'], // Bauddha Stotra Saṃgraha
	['dsbc:75', 'bdrc:P313A41B3'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:212', 'bdrc:P333EE6AA'], // Bauddha Stotra Saṃgraha
	['dsbc:87', 'bdrc:P33932363'], // Two Buddhist texts in Sanskrit
	['dsbc:264', 'bdrc:P3A11A079'], // Atisha-virachita Ekadasagrantha
	['gretil:sa_durvekamizra-hetubinduTIkAloka', 'bdrc:P3B3631B7'], // Hetubinduṭīkāloka (subcommentary on Arcaṭa’s 
	['dsbc:136', 'bdrc:P3C9BB41E'], // Bauddha Stotra Saṃgraha
	['dsbc:726', 'bdrc:P3D84FAAC'], // The Gilgit Manuscript of the Sayanasanavastu 
	['dsbc:852', 'bdrc:P4085FE01'], // Journal of Indian Philosophy
	['dsbc:258', 'bdrc:P414BEB44'], // Bodhicaryāvatāra of Śāntideva with the Commen
	['dsbc:762', 'bdrc:P4214711B'], // The Caṇḍamahāroṣaṇa tantra: Chapters I-VIII
	['dsbc:73', 'bdrc:P43822424'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:335', 'bdrc:P4393139B'], // Ratnagotravibhāga
	['dsbc:306', 'bdrc:P439CE0DC'], // Vādarahasya also known as Udayananirākaraṇa
	['dsbc:18', 'bdrc:P43C52BF5'], // Nārāyaṇaparipṛcchā sutra
	['dsbc:254', 'bdrc:P4464A6F8'], // Madhyamakaśāstra of Nāgārjuna
	['dsbc:261', 'bdrc:P4486C68C'], // Atisha-virachita Ekadasagrantha
	['dsbc:91', 'bdrc:P466DD49E'], // Gilgit Manuscripts
	['dsbc:355', 'bdrc:P471849F4'], // Piṇḍīkramaḥ Pañcakrama
	['dsbc:872-iast', 'bdrc:P47223F7F'], // Sphuṭārthā abhidharmakośavyākhyā
	['dsbc:728', 'bdrc:P48836D23'], // Essays on the History of Buddhism
	['dsbc:356', 'bdrc:P4A366CDD'], // Piṇḍīkramaḥ Pañcakrama
	['dsbc:232', 'bdrc:P4C667BBD'], // Bibliotheca Buddhica
	['dsbc:153', 'bdrc:P4ECA41D8'], // Bauddha Stotra Saṃgraha
	['dsbc:217', 'bdrc:P4F212C76'], // Bauddha Stotra Saṃgraha
	['dsbc:743', 'bdrc:P4F57CD1E'], // Dhīh Journal
	['dsbc:200', 'bdrc:P4F817591'], // Bauddha Stotra Saṃgraha
	['dsbc:74', 'bdrc:P4F9408FE'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:277', 'bdrc:P4FFB3922'], // Abhisamayalankarantah patinam
	['dsbc:354', 'bdrc:P508E53E5'], // Cittavisuddhiprakarna of Aryadeva
	['dsbc:850', 'bdrc:P51539269'], // Aririab
	['dsbc:725', 'bdrc:P52D417C7'], // The Gilgit Manuscript of the Sayanasanavastu 
	['dsbc:25', 'bdrc:P5335EF9C'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:764', 'bdrc:P54E04B19'], // Pārājikā
	['dsbc:62', 'bdrc:P55C7DD5F'], // Bodhisattvaprātimokṣasūtra
	['dsbc:63', 'bdrc:P58C3319C'], // Gilgit Manuscripts
	['dsbc:731', 'bdrc:P599CC5E1'], // Jñānaśrimitra’s Anupalabdhirahasya and Sarvaś
	['dsbc:214', 'bdrc:P59B63B7F'], // Bauddha Stotra Saṃgraha
	['gretil:sa_vasubandhu-abhidharmakozabhASya', 'bdrc:P59CC15AD'], // Vasubandhu: Abhidharmakośabhāṣya
	['dsbc:81', 'bdrc:P5B449444'], // Śrīherukābhidhānaṃ Cakrasaṃvaratantram with t
	['dsbc:40', 'bdrc:P5B59B54A'], // Bauddha Stotra Saṃgraha
	['dsbc:337', 'bdrc:P5BE54056'], // Vasubandhu: Triṃśikāvijñapti
	['gretil:sa_poSadhasthApanavastu', 'bdrc:P5BE616F9'], // MSV 1,14: Poṣadhasthāpanavastu
	['dsbc:739', 'bdrc:P5C4B2B54'], // Dhīh Journal
	['dsbc:247', 'bdrc:P5D55E3DF'], // Nāgārjuna: Mūlamadhyamakakārikā
	['dsbc:26', 'bdrc:P5D79AAAA'], // Gilgit Manuscripts
	['dsbc:13', 'bdrc:P5F4187BA'], // Bulletin of the Research Institute of Bukkyo 
	['dsbc:336', 'bdrc:P5F7784F7'], // Śrāvakabhūmiḥ of Acarya Asanga
	['dsbc:54', 'bdrc:P6054AA51'], // 1 nidānaparivartaḥ
	['dsbc:15', 'bdrc:P6157506C'], // Gilgit Manuscripts
	['dsbc:152', 'bdrc:P624FCD40'], // Bauddha Stotra Saṃgraha
	['dsbc:211', 'bdrc:P62C5C44A'], // Bauddha Stotra Saṃgraha
	['dsbc:189', 'bdrc:P6352295A'], // Bauddha Stotra Saṃgraha
	['dsbc:747', 'bdrc:P646E08BB'], // Śikhisamuccayaḥ
	['dsbc:105', 'bdrc:P655F0010'], // Dhīh Journal
	['dsbc:768', 'bdrc:P66117260'], // Pārājikā
	['dsbc:43', 'bdrc:P663F02E5'], // Mahakarunapundarika Sutra
	['dsbc:67', 'bdrc:P669EA080'], // Buddhist Himalaya
	['dsbc:303', 'bdrc:P6B2D23FA'], // Santānāntarasiddhi kārikā ṭīkā
	['dsbc:268', 'bdrc:P6C5E0731'], // Śikṣāsamuccaya
	['dsbc:65', 'bdrc:P6C666651'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:776', 'bdrc:P6C779CF6'], // Pārājikā
	['dsbc:741', 'bdrc:P6CD3C484'], // Antarvyāpti
	['dsbc:133', 'bdrc:P6CDA9446'], // Bauddha Stotra Saṃgraha
	['dsbc:13', 'bdrc:P6DCC6AB4'], // Nirvikalpapraveśadhāraṇī
	['dsbc:242', 'bdrc:P743000B8'], // Nāgārjuna: Mūlamadhyamakakārikā
	['dsbc:766', 'bdrc:P747F20FD'], // Pārājikā
	['dsbc:281', 'bdrc:P7725102B'], // Saratama: A Panjika on the Astasahasrika Praj
	['gretil:sa_azvaghoSa-saundarAnanda-edmatsunami', 'bdrc:P7D24DF3D'], // Aśvaghoṣa: Saundarananda
	['dsbc:61', 'bdrc:P7D46A341'], // Vimalakīrtinirdeśa: A Sanskrit Edition Based 
	['dsbc:218', 'bdrc:P7FB88E57'], // Bauddha Stotra Saṃgraha
	['dsbc:103', 'bdrc:P80CDD444'], // Bauddhālaṅkāra-Śāstram
	['dsbc:40', 'bdrc:P818FF122'], // BA: Gaṇḍavyūhasūtra
	['dsbc:184', 'bdrc:P83B64254'], // Bauddha Stotra Saṃgraha
	['dsbc:307', 'bdrc:P84D363D6'], // Pre-Dinnaga Budhist texts on Logic
	['dsbc:149', 'bdrc:P888FF653'], // Bauddha Stotra Saṃgraha
	['dsbc:91', 'bdrc:P8894696E'], // MSV 1,07: Cīvaravastu
	['dsbc:53', 'bdrc:P8B6CC2EF'], // Laṅkāvatārasūtra
	['dsbc:858', 'bdrc:P8CF98C65'], // South Asian classical studies No.
	['dsbc:36', 'bdrc:P8D2703DA'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:251', 'bdrc:P9010C003'], // Satyadvayavataradigrantha catustayam
	['dsbc:101', 'bdrc:P90D2383B'], // Atisha-virachita Ekadasagrantha
	['dsbc:11', 'bdrc:P921E7742'], // Gilgit Manuscripts
	['dsbc:168', 'bdrc:P93533EDF'], // Bauddha Stotra Saṃgraha
	['dsbc:16', 'bdrc:P94323521'], // Gilgit Manuscripts
	['dsbc:339', 'bdrc:P946E4CC8'], // Vijnaptimatrasiddhi-prakaranam-dvayam
	['dsbc:308', 'bdrc:P946F5AA5'], // Vādanyāya of Dharmakirti
	['dsbc:71', 'bdrc:P9495C957'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:772', 'bdrc:P94B6BE96'], // Pārājikā
	['dsbc:144', 'bdrc:P978A26FD'], // Bauddha Stotra Saṃgraha
	['dsbc:745', 'bdrc:P9840D8D8'], // Dhīh Journal
	['dsbc:51', 'bdrc:P9876C343'], // Mahāyāna-sūtra-saṃgrahaḥ
	['gretil:sa_prAtimokSasUtra-of-the-mUlasarvAstivAdins', 'bdrc:P9A49B482'], // MSV 2,0: Prātimokṣasūtra
	['dsbc:286', 'bdrc:P9D034ADB'], // Six Buddhist Nyaya tracts in Sanskrit
	['dsbc:34', 'bdrc:P9FF05422'], // Buddhist Himalaya
	['gretil:sa_poSadhavastu', 'bdrc:P9FF403FA'], // MSV 1,02: Poṣadhavastu
	['dsbc:50', 'bdrc:PA081D191'], // Journal of the Royal Asiatic Society
	['dsbc:100', 'bdrc:PA10ED161'], // Pratityasamutpada hrdaya and Dharmadhatugarbh
	['gretil:sa_nAgArjuna-yuktiSaSTikakArikA', 'bdrc:PA12F91D6'], // Yuktiṣaṣṭikakārikā Sanskrit reconstruction
	['dsbc:154', 'bdrc:PA43F7113'], // Bauddha Stotra Saṃgraha
	['dsbc:150', 'bdrc:PA4E64485'], // Bauddha Stotra Saṃgraha
	['dsbc:735', 'bdrc:PA5BDA4CE'], // Dhīh Journal
	['dsbc:124', 'bdrc:PA87EDA48'], // Bauddha Stotra Saṃgraha
	['dsbc:292', 'bdrc:PA88CBBEA'], // Six Buddhist Nyaya tracts in Sanskrit
	['dsbc:330', 'bdrc:PA8A7DE7A'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:20', 'bdrc:PA8ABFAA0'], // Dhih Journal Vol.33
	['dsbc:230', 'bdrc:PACCFC1EF'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:90', 'bdrc:PADCF4F6D'], // Pratimoksa sutra of Mahasanghikas
	['dsbc:332', 'bdrc:PADF677B3'], // Mahayana sutralankara of Asanga with its Svav
	['dsbc:159', 'bdrc:PAE4D8494'], // Bauddha Stotra Saṃgraha
	['dsbc:59', 'bdrc:PAF111408'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:233', 'bdrc:PB1AED6A1'], // Nāgārjuna: Ratnāvalī
	['dsbc:23', 'bdrc:PB2AAF555'], // Gilgit Manuscripts
	['dsbc:17', 'bdrc:PB40BA377'], // Gilgit Manuscripts
	['dsbc:188', 'bdrc:PB44D1DA1'], // Bauddha Stotra Saṃgraha
	['dsbc:167', 'bdrc:PB44EE59C'], // Bauddha Stotra Saṃgraha
	['gretil:sa_vasubandhu-madhyAntavibhAgakArikAbhASya', 'bdrc:PB4A49AD3'], // Madhyāntavibhāgakārikābhāṣya a commentary on 
	['dsbc:293', 'bdrc:PB4FBD6C9'], // Nyāyabindu prakaraṇakārikā
	['dsbc:263', 'bdrc:PB519CD94'], // Minor Buddhist Texts
	['dsbc:80', 'bdrc:PB51AF9A6'], // Śrīherukābhidhānaṃ Cakrasaṃvaratantram with t
	['dsbc:749', 'bdrc:PB52CB2CB'], // Dhīh Journal
	['dsbc:143', 'bdrc:PB5BF2B4F'], // Bauddha Stotra Saṃgraha
	['dsbc:32', 'bdrc:PB6D7DB90'], // Jñānālokālaṃkārasūtra
	['dsbc:284', 'bdrc:PB7271BD1'], // Ālambanaparīkṣā with Ālambanaparīkṣāvṛtti
	['dsbc:173', 'bdrc:PB7EBD2BC'], // Bauddha Stotra Saṃgraha
	['dsbc:782', 'bdrc:PBB70028E'], // Ādikarmapradīpa Bodhicaryāvatāraṭīkā
	['dsbc:300', 'bdrc:PBBA685D6'], // Kṣaṇabhaṅgasiddhi vyatirekātmikā
	['dsbc:337', 'bdrc:PBD202F4D'], // Seven Works of Vasubandhu
	['dsbc:797', 'bdrc:PBEC98756'], // The Buddhakapālatantra Chapters 9 to
	['dsbc:301', 'bdrc:PC029348E'], // Six Buddhist Nyaya tracts in Sanskrit
	['dsbc:58', 'bdrc:PC13CD916'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:249', 'bdrc:PC216F458'], // Pratityasamutpadahrdaya and aryadharmadhatuga
	['dsbc:139', 'bdrc:PC330BBB7'], // Bauddha Stotra Saṃgraha
	['dsbc:9', 'bdrc:PC5447014'], // Arya Amoghpash hrdaya nama Mahayana Sutra
	['dsbc:277', 'bdrc:PC5DEE364'], // Abhisamayālaṃkāravivaraṇa
	['dsbc:250', 'bdrc:PC7061990'], // Atisha-virachita Ekadasagrantha
	['dsbc:830', 'bdrc:PC822182E'], // Vṛttamālāstuti of Jñānaśrīmitra with Śākyarak
	['dsbc:55', 'bdrc:PC9BF44FB'], // Mahāyāna-sūtra-saṃgrahaḥ
	['gretil:sa_varSAvastu', 'bdrc:PCAFBA14D'], // MSV 1,04: Varṣāvastu
	['dsbc:730', 'bdrc:PCC9BCCA4'], // The Sarvadurgatipariśodhana tantra : eliminat
	['dsbc:69', 'bdrc:PD362233D'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:127', 'bdrc:PD3853117'], // Bauddha Stotra Saṃgraha
	['dsbc:145', 'bdrc:PD4D5BEED'], // Bauddha Stotra Saṃgraha
	['dsbc:42', 'bdrc:PD52692C3'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:115', 'bdrc:PD57C715C'], // Bauddha Stotra Saṃgraha
	['dsbc:169', 'bdrc:PD5CC0CEE'], // Bauddha Stotra Saṃgraha
	['dsbc:72', 'bdrc:PD64F151D'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:883', 'bdrc:PD75D724D'], // Le Mahâvastu
	['dsbc:288', 'bdrc:PD87EB27B'], // Hetubindu of Dharmakirti
	['dsbc:132', 'bdrc:PDB53E8BB'], // Bauddha Stotra Saṃgraha
	['dsbc:323', 'bdrc:PDC5A0726'], // Śrīmokṣākaraguptaviracitā tarkabhāṣāṭīkā
	['dsbc:192', 'bdrc:PDC5A256D'], // Bauddha Stotra Saṃgraha
	['dsbc:173', 'bdrc:PDD211C38'], // Mātṛceṭa: Śatapañcāśatka
	['dsbc:253', 'bdrc:PDD469540'], // Atisha-virachita Ekadasagrantha
	['dsbc:221', 'bdrc:PDF994FFF'], // Bauddhalaghugrangtha-sangraha
	['dsbc:335', 'bdrc:PE018D10C'], // Asaṅga/Maitreya: Ratnagotravibhāga
	['dsbc:216', 'bdrc:PE1CC7030'], // Bauddha Stotra Saṃgraha
	['dsbc:879', 'bdrc:PE363468A'], // Proceedings and Transactions of the Fifth Ind
	['dsbc:331', 'bdrc:PE55079DD'], // Madhyanatavibhagashastram
	['dsbc:304', 'bdrc:PE57C5CC9'], // Santānāntarasiddhi kārikā ṭīkā
	['gretil:sa_dharmakIrti-nyAyabinduprakaraNa-comm', 'bdrc:PE6C8C44B'], // Nyāyabinduprakaraṇa with Vinītadeva’s Nyāyabi
	['gretil:sa_durvekamizra-dharmottarapradIpa', 'bdrc:PE8547E02'], // Dharmottarapradīpa subcommentary on Dharmotta
	['dsbc:347', 'bdrc:PEAEA1373'], // Mahāmāyātantram with Guṇāvatī
	['dsbc:317', 'bdrc:PEF2AD849'], // Dhīh Journal
	['dsbc:155', 'bdrc:PEF5454B3'], // Bauddha Stotra Saṃgraha
	['dsbc:113', 'bdrc:PEF90D5CA'], // Bauddha Stotra Saṃgraha
	['dsbc:353', 'bdrc:PF011F48D'], // Caryāgitikoṣaḥ upodghātaḥ
	['dsbc:866', 'bdrc:PF033A063'], // The Laghutantraṭīkā by Vajrapāṇi
	['gretil:sa_asaGga-trizatikAyAH-prajJApAramitAyAH-kArikAsaptatiH', 'bdrc:PF12AFCAA'], // Asaṅga: Triśatikāyāḥ Prajñāpāramitāyāḥ Kārikā
	['dsbc:174', 'bdrc:PF1983FD9'], // Bauddha Stotra Saṃgraha
	['gretil:sa_pravrajyAvastu', 'bdrc:PF1C00644'], // MSV 1,01: Pravrajyāvastu
	['gretil:sa_pravAraNAvastu', 'bdrc:PF314F7D4'], // MSV 1,03: Pravāraṇāvastu
	['dsbc:6', 'bdrc:PF37F967F'], // The Maṇicūḍa Study
	['dsbc:321', 'bdrc:PF3E6088F'], // Āryaśālistamba sutra kātikā
	['dsbc:39', 'bdrc:PF580D20D'], // BA: Daśabhūmikasūtra
	['dsbc:175', 'bdrc:PF64EB86F'], // Bauddha Stotra Saṃgraha
	['dsbc:314', 'bdrc:PF7FB411F'], // Citralakṣaṇam: an old text of Indian Art
	['dsbc:29', 'bdrc:PF9B3FB11'], // Mahāyāna-sūtra-saṃgrahaḥ
	['dsbc:883', 'bdrc:PFADDF0DE'], // Svastyayanagāthā
	['dsbc:326', 'bdrc:PFBFA78E3'], // Bhavasaṅkrānti Śāstra
	['dsbc:732', 'bdrc:PFF8C7BE6'], // Jñānaśrimitra’s Anupalabdhirahasya and Sarvaś
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
	// BDRC Sanskrit texts with no match in the other sources.
	'bdrc:P2FFF2552': 'sutra/mahayana-sutra', // Akṣayamatinirdeśa
	'bdrc:PE2D2586F': 'sutra/mahayana-sutra', // Bhaiṣajyagurupūrvapraṇidhānasūtra
	'bdrc:PFCF2244E': 'sutra/mahayana-sutra', // Bodhisatvapiṭaka
	'bdrc:PA7F751C2': 'sastra/abhidharma', // Abhidharmasamuccaya
	'bdrc:PA7706902': 'sciences/vyakarana', // Mahāvyutpatti
	'bdrc:P80484769': 'vinaya/vinaya-other', // MSV 6,09: Māṇavikā
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
