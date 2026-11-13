// Rule-based classification for GRETIL texts, which GRETIL itself files only under
// "Buddhist Religious Literature" or "Buddhist Philosophy". Texts that DSBC also has take
// DSBC's category instead; texts these rules miss are listed in overrides.mjs.

import { classifyVinaya } from './taxonomy.mjs';

const has = (s, re) => re.test(s);

export function classifyGretil({ title, author = '', catalogTitle = '', gretilSection }) {
	const t = `${title} ${catalogTitle}`.toLowerCase().normalize('NFC');
	const a = author.toLowerCase();

	// Hymns
	if (has(t, /stotra|stava|stuti|stutiḥ|stotr|daṇḍaka|aṣṭaka\b|śataka|śatka|pañcāśik|gāthā/) && !has(t, /śarīrārthagāthā|śatagāthā|gurupañcāśik|catuḥśatak|avadāna|sūtra/)) {
		if (has(t, /avalokit|lokeśvar|mañjuśr|mañjughoṣ|vāgīśvar|bodhisattv/)) return 'stotra/stotra-bodhisattva';
		if (has(t, /tār[āa]|prajñāpāramit|vajrayogin|heruka|saṃvara|nairātm|vasudhār|hārīt|mahākāla|kurukull|uṣṇīṣa|devī/)) return 'stotra/stotra-deity';
		return 'stotra/stotra-buddha';
	}

	// Vinaya
	if (has(t, /vinaya|prātimokṣ|karmavāc|karmavāk|abhisamācārik|-vastu|vastu\b|vastu \[|upasampad|poṣadh|pravāraṇ/) && !has(t, /bodhisattvaprātimokṣ/))
		return classifyVinaya(title + ' ' + catalogTitle);

	// Tantra
	if (has(t, /ṭīkā|pañjikā|vṛtti|ṭippaṇ|vivṛti|vyākhyā|commentary|comm\. on/) && has(t, /tantra|hevajra|saṃvara|guhyasamāja|kālacakra|sekoddeś|nāmasaṃgīti/))
		return 'tantra/tantra-commentary';
	if (has(t, /sādhana|maṇḍala|yogāval|vajrāval|kriyāsaṃgrah|kriyāsamuccay|abhiṣek|homa|pūjāvidhi|vidhi\b|vidhiḥ|kalpa\b|pratiṣṭh|kramaḥ|krama\b|pañcakrama|piṇḍīkrama|advayasiddhi|jñānasiddhi|prajñopāyaviniścaya|sekoddeś|caryāmelā|cittaviśuddhi|guhyasiddhi|tattvajñānasaṃsiddhi|ādikarm/)) return 'tantra/sadhana';
	if (has(t, /tantra\b|tantram|tantraḥ|tantrarāja|catuṣpīṭha|hevajra|guhyasamāja|cakrasaṃvar|kālacakra|abhidhānottara|mahākālatantra|vajraḍāka/)) return 'tantra/tantras';
	if (has(t, /dohā|dohakoṣa|caryāgīti|gīti/)) return 'tantra/giti';

	// Sūtra literature
	if (has(t, /āgama|saṃyukta|dharmapada|udānavarga|nidāna|karmavibhaṅga/)) return 'sutra/agama';
	if (has(t, /pratisarā|pramardanī|mantrānusāriṇī|śītavatī|sitātapatr|pañcarakṣ/)) return 'sutra/dharani';
	if (has(t, /prajñāpāramitā/) && !has(t, /piṇḍārtha|kārikā|ālaṃkāra|ālaṅkāra|ālokā|vṛtti|ṭīkā|vivaraṇ|pañjikā|samāsa|saptati|upadeś|śāstra/))
		return 'sutra/prajnaparamita';
	if (has(t, /abhisamayālaṃk|abhisamayālaṅk|prajñāpāramit/)) return 'sastra/prajnaparamita-sastra';
	if (has(t, /dhāraṇī|dharani|rakṣā|mahāmāyūrī|pratisarā|uṣṇīṣavijay|hṛdaya\b|hṛdayaṃ|hṛdayasūtra|hrdayasutra/) && !has(t, /pratītyasamutpādahṛdaya|upāyahṛdaya/)) return 'sutra/dharani';
	if (has(t, /jātaka/)) return 'sutra/jataka';
	if (has(t, /vadān|vratakath|vrata|kathā\b|māl[āa]\b|ratnamālā|mahāvastu/) && !has(t, /nispannayog|niṣpannayog|niṣpaṇṇayog/)) return 'sutra/avadana';
	if (has(t, /lalitavistara|buddhacarit|siddhārthacarit/)) return has(t, /buddhacarit|siddhārthacarit/) ? 'literature/kavya' : 'sutra/buddha-life';

	// Śāstra by author or subject
	if (/dharmakīrti|dignāga|diṅnāga|dharmottara|arcaṭa|durveka|ratnakīrti|jitāri|jñānaśrīmitra|mokṣākaragupta|prajñākaragupta|śaṅkaranandana|paṇḍitāśoka|vidyākaraśānti|śākyabuddhi|vinītadeva|ratnākaraśānti|karṇakagomin|manorathanandin|devendrabuddhi|haribhadrasūri/.test(a) ||
		has(t, /pramāṇ|nyāya|hetu|tarka|apoha|kṣaṇabhaṅga|vyāpti|sambandhaparīkṣ|santānāntara|saṃtānāntara|avayavinirākaraṇ|sāmānyadūṣaṇ|vādanyāya|vādarahasya|udayananirākaraṇ/))
		return 'sastra/pramana';
	if (has(t, /abhidharm|dharmaskandha|kośa|satyasiddhi|pañcaskandha|dharmasaṃgraha|dharmasaṅgraha|arthaviniścaya/)) return 'sastra/abhidharma';
	if (/vasubandhu|asaṅga|asanga|sthiramati|maitreyanātha|maitreya/.test(a) || has(t, /yogācār|vijñapti|triṃśikā|viṃśatikā|viṃśikā|trisvabhāva|madhyāntavibhāg|sūtrālaṃkār|sūtrālaṅkār|bodhisattvabhūmi|śrāvakabhūmi|ālambanaparīkṣ|ratnagotravibhāg|dharmadhātugarbha/))
		return 'sastra/yogacara';
	if (/śāntarakṣita|kamalaśīla|atiśa|dīpaṅkaraśrījñāna|dīpaṃkaraśrījñāna/.test(a) || has(t, /tattvasaṃgrah|bhāvanākram|madhyamakāloka|madhyamakālaṃkār|bodhipathapradīp|dīpaṅkar|dipankar|atiśa/))
		return 'sastra/madhyamaka-yogacara';
	if (/nāgārjuna|āryadeva|candrakīrti|śāntideva|bhāviveka|prajñākaramati/.test(a) || has(t, /madhyamak|śūnyatā|vigrahavyāvart|yuktiṣaṣṭik|ratnāvalī|bodhicaryāvatār|śikṣāsamuccay|catuḥśatak|prasannapad|bodhicittavivaraṇ|pratītyasamutpādahṛday|mahāyānaviṃśik|bhavasaṃkrānti|bhavasaṅkrānti|śālistamb/))
		return 'sastra/madhyamaka';
	if (has(t, /lekha|suhṛllekh/)) return 'sastra/lekha';

	// Remaining sūtras
	if (has(t, /sūtra|sutra|parivarta|nirdeśa|vyākaraṇa|paripṛcchā|paryāya|vyūha|samādhirāj|laṅkāvatār|lankavatar|suvarṇaprabhās|saddharmapuṇḍarīk/)) {
		if (gretilSection === 'Buddhist Philosophy') return null;
		return 'sutra/mahayana-sutra';
	}
	return null;
}
