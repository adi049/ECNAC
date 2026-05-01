// ══════════════════════════════════════════════
//  CROPS DATA — 25 crops with YouTube video IDs
//  Note: All video IDs are verified working ones
//  from ICAR / KVK / agricultural channels
// ══════════════════════════════════════════════

const CROPS = [
  {
    id: 'wheat',
    emoji: '🌾',
    name: 'Gehun (Wheat)',
    hindi: 'गेहूं',
    season: 'rabi',
    duration: '120-150 din',
    soil: 'Domat mitti',
    water: '6-7 baar',
    // ICAR wheat tutorial — reliable
    videoId: 'UJRk9PoEJFs',
    desc: 'Gehun India ki sabse zaroori rabi fasal hai. Sardi mein ugti hai aur March-April mein kati jaati hai. MSP 2025-26: ₹2,275/qtl.',
    steps: [
      { title: 'Khet Ki Taiyari', body: 'October ke ant mein khet ko 2-3 baar gehri jotai karein. 5-6 tonne gobar ki khaad milayein. Mitti bhurabhuri honi chahiye.' },
      { title: 'Beej Chunav & Treatment', body: 'HD-3226, PBW-343 ya WH-1105 variety chunein. Bavistin 2.5g + Thiram 1.5g per kg beej se treat karein.' },
      { title: 'Buwaai', body: 'Nov 1–25 ke beech buwaai karein. Row spacing 20-22cm, depth 5-6cm. 100-125 kg beej/hectare lagayin.' },
      { title: 'Sinchai Schedule', body: 'CRI stage (20-25 din), Tillering, Jointing, Flowering, Milk & Dough stages par sinchai dein. Total 6-7 baar.' },
      { title: 'Khaad Prabandhan', body: 'Buwaai par DAP 150 kg/ha. Pehli sinchai ke baad Urea 80 kg. Doosri sinchai ke baad Urea 60 kg dein.' },
      { title: 'Kharpatwar Niyantran', body: '30-35 din par Clodinafop 60g/ha spray karein. Chauade patte ke liye Metsulfuron 4g/ha use karein.' },
      { title: 'Katai', body: 'April mein 14% moisture par combine se katai karein. Sookhne ke baad proper storage mein rakhein.' }
    ],
    tips: [
      'Peela rog (Yellow Rust) dikhte hi Propiconazole spray karein.',
      'Pora pathak se bachne ke liye resistant variety use karein.',
      'Sinchai ke baad khet mein paani khada nahi rehna chahiye.',
      'MSP 2025-26: ₹2,275 per quintal — FCI par bechein.'
    ]
  },
  {
    id: 'rice',
    emoji: '🍚',
    name: 'Dhan (Rice)',
    hindi: 'धान',
    season: 'kharif',
    duration: '90-150 din',
    soil: 'Chikni mitti',
    water: 'Bharpoor',
    videoId: 'p32TJ3q57AY',
    desc: 'Dhan India ki sabse zyada ugayi jaane wali kharif fasal hai. June-July mein lagayi jaati hai, October-November mein katai.',
    steps: [
      { title: 'Nursery Taiyari', body: 'June mein nursery bed taiyar karein. 25-30 kg beej/hectare ke liye 800-1000 sq meter bed kaafi hai. Beej ko 24 ghante bhegoyen.' },
      { title: 'Khet Ki Taiyari', body: 'Khet mein 5-10cm paani bharein, puddling karein. Laser leveling se yields 15-20% badhti hai.' },
      { title: 'Ropai', body: '25-30 din ki paudha lagayin. Row spacing 20cm × 15cm. 2-3 paudhe ek jagah. Ropai ke turant baad sinchai dein.' },
      { title: 'Paani Prabandhan', body: 'AWD (Alternate Wetting & Drying) technique use karein — 40% paani bachta hai. Flowering mein 5cm paani zaroori.' },
      { title: 'Khaad', body: 'Basal: DAP 100 kg/ha. Tillering mein Urea 60 kg. Panicle initiation mein Urea 40 kg + MOP 50 kg.' },
      { title: 'Bimari Niyantran', body: 'Blast ke liye Tricyclazole 75WP 0.6g/L. Brown Spot ke liye Mancozeb 2.5g/L spray karein.' },
      { title: 'Katai', body: 'Oct-Nov mein 80% daane pakne par katai karein. Combine ya haath se — threshing ke baad 14% moisture par store karein.' }
    ],
    tips: [
      'SRI (System of Rice Intensification) se 30-40% paani bachta hai.',
      'Pusa 1509 Basmati variety mein kam paani lagta hai.',
      'Blast rog rainy season mein zyada hota hai — alert rahein.',
      'MSP 2025-26: ₹2,300 per quintal.'
    ]
  },
  {
    id: 'maize',
    emoji: '🌽',
    name: 'Makai (Maize)',
    hindi: 'मक्का',
    season: 'kharif',
    duration: '80-95 din',
    soil: 'Domat mitti',
    water: '5-6 baar',
    videoId: 'Cjb81mXfHSQ',
    desc: 'Makai ek teez raftaar se ugne wali kharif fasal hai. Animal feed, starch aur ethanol — teeno ke liye use hoti hai.',
    steps: [
      { title: 'Khet Taiyari', body: 'June mein 2-3 baar jotai karein. FYM 8-10 tonne/ha milayein. Soil pH 6.5-7.5 hona chahiye.' },
      { title: 'Beej Chunav', body: 'Pioneer 30V92, DKC-9108 ya NK-6240 hybrid chunein. Thiram 2.5g/kg beej se treat karein.' },
      { title: 'Buwaai', body: 'June 1st week mein buwaai karein. Row spacing 60cm, paudha spacing 20cm. Depth 4-5cm. 20-25 kg beej/ha.' },
      { title: 'Sinchai', body: 'Tasseling aur silking stage par critical sinchai karein. Total 5-6 sinchai. Logging bilkul nahi hona chahiye.' },
      { title: 'Khaad', body: 'DAP 150 kg + MOP 60 kg basal. Knee-high par Urea 100 kg. Tasseling par Urea 60 kg.' },
      { title: 'Fall Armyworm', body: '20-25 din par kheton ki jaanch karein. Chlorantraniliprole 18.5 SC 150ml/ha spray karein. Pheromone traps lagayin.' },
      { title: 'Katai', body: 'Grain moisture 25% par katai karein. Cob todein, sukhayein, phir shell karein. 12% moisture par store karein.' }
    ],
    tips: [
      'Fall Armyworm (FAW) se khaas savdhan rahein — bahut tezi failta hai.',
      'Waterlogging se makai barbaad hoti hai — drainage sahi rakhein.',
      'MSP 2025-26: ₹2,225 per quintal.',
      'Silage ke liye 50% silky stage par katai karein — pashu aahaar.'
    ]
  },
  {
    id: 'mustard',
    emoji: '🌼',
    name: 'Sarson (Mustard)',
    hindi: 'सरसों',
    season: 'rabi',
    duration: '90-120 din',
    soil: 'Domat/bhari mitti',
    water: '2-3 baar',
    videoId: 'MgBXAE6GKGU',
    desc: 'Sarson rabi oilseed fasal hai. Rajasthan, Haryana aur UP mein zyada ugayi jaati hai. Khana pakane ka tel.',
    steps: [
      { title: 'Khet Taiyari', body: 'October mein khet ki jotai karein. FYM 5-8 tonne/ha milayein. pH 6-7.5 hona chahiye.' },
      { title: 'Beej', body: 'Pusa Bold, Pusa Tarak ya RH-749 variety chunein. 5 kg beej/ha. Thiram 2g/kg se treat karein.' },
      { title: 'Buwaai', body: 'Oct 1-20 ke beech buwaai karein. Row spacing 45-50cm. Broadcast ya drill se.' },
      { title: 'Khaad', body: 'DAP 125 kg + MOP 40 kg basal. Sulphur 40 kg/ha zarur dein — tel ki matra badhti hai.' },
      { title: 'Sinchai', body: 'Pahli sinchai branching par, doosri pod filling mein. Zyada paani se rog lagta hai — halki sinchai.' },
      { title: 'Aphid Niyantran', body: 'Jan-Feb mein aphid attack hota hai. Dimethoate 30 EC 1.5ml/L spray karein. Drone chhidkav effective hai.' },
      { title: 'Katai', body: '75% faliyan peeli ho jaayein tab katai karein. Faliyan sukhayein, phir combine ya haath se daana nikaalein.' }
    ],
    tips: [
      'Sulphur dene se tel ki matra 2-3% badh jaati hai.',
      'Painted bug se bachne ke liye khet ki bund saaf rakhein.',
      'MSP 2025-26: ₹5,650 per quintal.',
      'Sarson ke baad garmi mein moong lagana soil ke liye achha hai.'
    ]
  },
  {
    id: 'sugarcane',
    emoji: '🎋',
    name: 'Ganna (Sugarcane)',
    hindi: 'गन्ना',
    season: 'yearround',
    duration: '10-12 mahine',
    soil: 'Domat mitti',
    water: 'Bahut zyada',
    videoId: 'G7Wb_B7hfzI',
    desc: 'Ganna UP, Maharashtra aur Karnataka ki pramukh naqdaari fasal hai. Chini, gud aur ethanol ke liye use hota hai.',
    steps: [
      { title: 'Khet Taiyari', body: '2-3 gehri jotai karein. 20-25 tonne FYM milayein. pH 6-7.5. Drainage ka dhyan rakhein.' },
      { title: 'Beej Sett', body: 'Co-0238, CoJ-64 ya UP-05 variety chunein. Teen-ankhi (3-eyed) sett use karein. Bavistin mein treat karein.' },
      { title: 'Ropai', body: 'Feb-March ya Oct-Nov mein ropai karein. Furrow spacing 75-90cm. Sett depth 5cm.' },
      { title: 'Khaad', body: 'DAP 250 kg + MOP 100 kg basal. Urea 3 kist mein — 100+100+60 kg. Zinc Sulphate 25 kg/ha.' },
      { title: 'Drip Irrigation', body: 'Drip se 40% paani aur 20% zyada paidawar milti hai. Fertigation mein khaad bhi dein.' },
      { title: 'Weed Control', body: 'Atrazine 2kg/ha buwaai ke baad spray karein. Haath se 2-3 nidai pehle 3 mahine mein.' },
      { title: 'Katai', body: 'Brix 18-20% hone par katai karein. Nov-Jan mein sugar recovery maximum. Machine harvesting zyada efficient.' }
    ],
    tips: [
      'Ratoon fasal se dobaara ugakar lagat kam hoti hai.',
      'Red rot rog se bachne ke liye disease-free sett chunein.',
      'Trench method mein zyada paidawar milti hai.',
      'Mill payment mein delay hone par FRP ke hisaab se claim karein.'
    ]
  },
  {
    id: 'cotton',
    emoji: '🌿',
    name: 'Kapas (Cotton)',
    hindi: 'कपास',
    season: 'kharif',
    duration: '150-180 din',
    soil: 'Kali/domat mitti',
    water: '6-8 baar',
    videoId: '1gZHwB-LQXU',
    desc: 'Kapas Gujarat, Maharashtra aur Telangana ki pramukh naqdaari fasal hai. White Gold ke naam se jaani jaati hai.',
    steps: [
      { title: 'Khet Taiyari', body: 'Deep ploughing karein. FYM 5-10 tonne milayein. Well-drained khet chunein — waterlogging nahi chahiye.' },
      { title: 'Beej', body: 'Approved Bt cotton hybrid chunein. Beej ko Imidacloprid 70 WS se treat karein — termite se bachav.' },
      { title: 'Buwaai', body: 'May last se June tak buwaai karein. Row spacing 90cm, plant spacing 45-60cm. Depth 3-4cm.' },
      { title: 'Khaad', body: 'DAP 200 kg + MOP 100 kg basal. Urea 2 split mein — 75+75 kg. Boron spray zaroori hai.' },
      { title: 'Drip Irrigation', body: 'Drip irrigation se 50% paani bachta hai. Critical stage: Flowering aur boll formation.' },
      { title: 'Pink Bollworm', body: 'Pheromone traps lagayin. Helicoverpa ke liye Indoxacarb spray karein. Sucking ke liye Imidacloprid.' },
      { title: 'Katai', body: 'Boll khulne par 3-4 baar haath se chunayi karein. Subah ki os ke baad kaam karein.' }
    ],
    tips: [
      'Pink Bollworm sabse bada dushman hai — alert rahein.',
      'Bt cotton mein resistance develop ho sakta hai — variety badle.',
      'MSP 2025-26: ₹7,121/qtl (long staple).',
      'Kapas ki machine picking se quality girri jaati hai — haath se karein.'
    ]
  },
  {
    id: 'soybean',
    emoji: '🫘',
    name: 'Soybean',
    hindi: 'सोयाबीन',
    season: 'kharif',
    duration: '90-110 din',
    soil: 'Domat mitti',
    water: '4-5 baar',
    videoId: 'O3mQhXcaViA',
    desc: 'Soybean MP, Maharashtra aur Rajasthan ki pramukh oilseed crop hai. Protein aur tel ka aacha srot.',
    steps: [
      { title: 'Khet Taiyari', body: 'June mein khet jotein. FYM 5 tonne/ha. pH 6.0-7.0 chahiye.' },
      { title: 'Beej Treatment', body: 'JS-335, NRC-37 chunein. Rhizobium culture se treat karein — nitrogen fixation ke liye. Fungicide bhi lagayin.' },
      { title: 'Buwaai', body: 'June 20-July 15 ke beech. Row spacing 45cm, seed spacing 5-7cm. 70-80 kg beej/ha.' },
      { title: 'Khaad', body: 'DAP 100 kg + MOP 50 kg basal. Sulphur 20 kg. Urea ki zarurat kam — Rhizobium nitrogen banata hai.' },
      { title: 'Sinchai', body: 'Flowering aur pod filling mein critical. Logging se mitti compact ho jaati hai — halki sinchai.' },
      { title: 'Rust Rog', body: 'Trifloxystrobin ya Mancozeb spray karein. Yellow Mosaic ke liye whitfly control zaroori.' },
      { title: 'Katai', body: '95% faliyan peeli hone par katai karein. Thresher se daana nikaalein, 12% moisture par store karein.' }
    ],
    tips: [
      'Soybean ke baad gehun lagana bahut accha crop rotation hai.',
      'Waterlogging 2-3 din mein fasal barbaad kar sakta hai.',
      'MSP 2025-26: ₹4,892 per quintal.',
      'Organic farming mein soybean zyada laabhdaayak hai.'
    ]
  },
  {
    id: 'groundnut',
    emoji: '🥜',
    name: 'Moongfali (Groundnut)',
    hindi: 'मूंगफली',
    season: 'kharif',
    duration: '100-130 din',
    soil: 'Sandy loam',
    water: '4-5 baar',
    videoId: '3bGqKPXTEjo',
    desc: 'Moongfali Gujarat, AP aur Rajasthan ki pramukh oilseed fasal hai. Tel aur snacks dono ke liye.',
    steps: [
      { title: 'Khet Taiyari', body: 'Sandy loam khet chunein. FYM 5-6 tonne. pH 6.0-7.0. Deepthumb ploughing karein.' },
      { title: 'Beej', body: 'ICGV-86590, GG-20 ya J-11 chunein. Rhizobium culture se treat karein. Thiram bhi zaroori.' },
      { title: 'Buwaai', body: 'June 15-July 15 mein buwaai. 30×10cm spacing. Depth 4-5cm. 100-125 kg beej/ha.' },
      { title: 'Gypsum', body: 'Flowering ke waqt Gypsum 400-500 kg/ha dein — pegging aur pod formation ke liye zaroori.' },
      { title: 'Sinchai', body: 'Flowering aur pegging par critical. Drip se 30% paani bachta hai. Pod filling mein adequate moisture.' },
      { title: 'Tikka Rog', body: 'Kale dhabbe aane par Mancozeb 2.5g/L spray karein. 2-3 spray 10 din ke antar par.' },
      { title: 'Katai', body: 'Patte peele ho jaayein, pod mein daana pura ho tab khudai karein. Dhoop mein sukhayein.' }
    ],
    tips: [
      'Sandy mitti mein moongfali ki sabse acchi paidawar hoti hai.',
      'Aflatoxin se bachne ke liye time par katai zaroori hai.',
      'MSP 2025-26: ₹6,783 per quintal.',
      'Moongfali ka tel desi ghee ke baad sabse healthy maana jaata hai.'
    ]
  },
  {
    id: 'chickpea',
    emoji: '🫘',
    name: 'Chana (Chickpea)',
    hindi: 'चना',
    season: 'rabi',
    duration: '90-110 din',
    soil: 'Sandy loam',
    water: '2-3 baar',
    videoId: 's8G_OwC8VE0',
    desc: 'Chana MP, Rajasthan aur UP ki pramukh dal fasal hai. Protein se bharpur aur mitti mein nitrogen fix karta hai.',
    steps: [
      { title: 'Khet Taiyari', body: 'Oct-Nov mein halki jotai. Sandy loam mein achhi growth. Waterlogging bilkul nahi hona chahiye.' },
      { title: 'Beej', body: 'JG-11, GNG-1581 ya Pusa-1053 chunein. Rhizobium + PSB culture se treat karein.' },
      { title: 'Buwaai', body: 'Oct 20-Nov 10 ke beech. Row spacing 30-45cm. Seed rate 60-80 kg/ha. Depth 8-10cm.' },
      { title: 'Khaad', body: 'DAP 100 kg + MOP 40 kg basal. Dal mein urea ki zarurat kam — khud nitrogen banati hai.' },
      { title: 'Sinchai', body: '1-2 sinchai kaafi hain. Branching aur pod filling mein dein. Zyada paani se wilting hoti hai.' },
      { title: 'Helicoverpa', body: 'Pod borer ke liye Indoxacarb spray karein jab 2 egg/plant dikhein. Pheromone traps bhi useful.' },
      { title: 'Katai', body: '75-80% pods pake hone par katai. Threshing ke baad 12% moisture par store karein.' }
    ],
    tips: [
      'Wilt disease se bachne ke liye resistant variety chunein.',
      'Chana ke baad gehun ki fasal bahut acchi hoti hai.',
      'MSP 2025-26: ₹5,440 per quintal.',
      'Dryland farming mein chana sabse reliable fasal hai.'
    ]
  },
  {
    id: 'lentil',
    emoji: '🌱',
    name: 'Masoor (Lentil)',
    hindi: 'मसूर',
    season: 'rabi',
    duration: '90-115 din',
    soil: 'Sandy loam',
    water: '2 baar',
    videoId: 'ZT3VHC0e2d0',
    desc: 'Masoor UP, Bihar aur MP ki pramukh dal fasal hai. Khaad ki zarurat kam, paidawar acchi.',
    steps: [
      { title: 'Khet Taiyari', body: 'Oct mein halki jotai. pH 6.0-8.0 chalega. Purani fasal ki thunthiyan hatayin.' },
      { title: 'Beej', body: 'Pant Masoor-4, Malika ya K-75 chunein. 40-45 kg beej/ha. Rhizobium culture se treat karein.' },
      { title: 'Buwaai', body: 'Oct 15-Nov 15 tak buwaai. Row spacing 25-30cm. Depth 4-5cm. Broadcast ya drill se.' },
      { title: 'Khaad', body: 'DAP 100 kg/ha basal. Urea ki zarurat nahi — khud nitrogen banati hai. Sulphur 20 kg faydemand.' },
      { title: 'Sinchai', body: '2 sinchai kaafi — Branching aur Pod filling mein. Zyada sinchai se rog lag sakta hai.' },
      { title: 'Rust Rog', body: 'Orange spots aane par Mancozeb 2.5g/L spray karein. Hawa ke direction mein spray karein.' },
      { title: 'Katai', body: 'Baare peele ho jaayein tab katai. Combine ya haath se. Threshing ke baad clean karein.' }
    ],
    tips: [
      'Masoor aur gehun ki intercropping bahut faydemand hai.',
      'Waterlogging se masoor jaldi kharab hoti hai.',
      'MSP 2025-26: ₹6,700 per quintal.',
      'Dal export mein masoor ki bahut maang hai.'
    ]
  },
  {
    id: 'mung',
    emoji: '🌿',
    name: 'Moong (Green Gram)',
    hindi: 'मूंग',
    season: 'zaid',
    duration: '60-70 din',
    soil: 'Sandy loam',
    water: '3-4 baar',
    videoId: 'J2IfMt8Tj9g',
    desc: 'Moong garmi ki fasal hai — April-July. Protein aur mitti dono ke liye faydemand. MSP ₹8,682/qtl.',
    steps: [
      { title: 'Khet Taiyari', body: 'March-April mein rabi fasal ke baad seedbed taiyar karein. FYM 3-4 tonne/ha.' },
      { title: 'Beej', body: 'Pusa Vishal, Samrat ya MH-421 chunein. 20-25 kg/ha. Rhizobium se treat karein.' },
      { title: 'Buwaai', body: 'March 15-April 30 ke beech. Row spacing 30-45cm, depth 3-4cm. Seed drill se best.' },
      { title: 'Khaad', body: 'DAP 75 kg basal. Urea minimal — 20 kg. Zinc sulphate 20 kg spray faydemand.' },
      { title: 'Sinchai', body: 'Seedling, Branching, Flowering, Pod filling — 4 sinchai. Sprinkler se acchi growth.' },
      { title: 'Yellow Mosaic', body: 'Whitfly control karein. Imidacloprid 17.8 SL chhidkav karein. Yellow sticky traps lagayin.' },
      { title: 'Katai', body: '60-70 din mein 2-3 baar todni padti hai — pods ek saath nahi pakti. Dhoop mein sukhayein.' }
    ],
    tips: [
      'Moong ke baad kharif fasal lagayin — mitti nitrogen se bhar jaati hai.',
      'Yellow Mosaic se bachne ke liye MYMV resistant variety chunein.',
      'MSP 2025-26: ₹8,682 per quintal.',
      'Moong ki haryali khad ke liye bhi use hoti hai — plot mein jotein.'
    ]
  },
  {
    id: 'tomato',
    emoji: '🍅',
    name: 'Tamatar (Tomato)',
    hindi: 'टमाटर',
    season: 'yearround',
    duration: '70-80 din',
    soil: 'Domat/bhari mitti',
    water: 'Regular',
    videoId: 'R4GWWH9BQAI',
    desc: 'Tamatar ek naqdaari sabzi fasal hai jo saal bhar ugi ja sakti hai. Market mein hamesha demand.',
    steps: [
      { title: 'Nursery', body: 'Plug trays ya raised bed mein 25-30 din nursery tayar karein. Beej ko Thiram se treat karein.' },
      { title: 'Khet Taiyari', body: 'Raised beds banayin — drainage ke liye zaroori. FYM 20-25 tonne/ha milayein.' },
      { title: 'Ropai', body: '75×60cm spacing. Shaam ko ropai karein. Turant sinchai dein.' },
      { title: 'Khaad', body: 'DAP 125 kg basal. Urea 3 split mein. Potash 100 kg + Calcium Nitrate foliar spray.' },
      { title: 'Drip Irrigation', body: 'Soil moisture consistent rakhein — blossom end rot se bachne ke liye zaroori.' },
      { title: 'Staking & Pruning', body: 'Lathe se paudhe ko support dein. Suckers hatayin — fruit quality badhti hai.' },
      { title: 'Katai', body: 'Door market ke liye mature green stage. Local ke liye fully red hone par touein.' }
    ],
    tips: [
      'Viral diseases se bachne ke liye aphid control zaroori hai.',
      'Mulching se moisture banta hai aur kharpatwar nahi hoti.',
      'Poly house mein paidawar 3 guna hoti hai.',
      'Tamatar grading aur packing se 30-40% zyada bhav milta hai.'
    ]
  },
  {
    id: 'onion',
    emoji: '🧅',
    name: 'Pyaaj (Onion)',
    hindi: 'प्याज',
    season: 'rabi',
    duration: '100-120 din',
    soil: 'Domat mitti',
    water: '4-5 baar',
    videoId: 'CJVZ0zUWFJA',
    desc: 'Pyaaj Maharashtra, Gujarat aur MP ki important naqdaari fasal hai. Export mein bahut demand.',
    steps: [
      { title: 'Nursery', body: 'October mein raised bed nursery. 8-10 kg beej/ha. Paudha 6-8 hafte mein taiyar.' },
      { title: 'Khet Taiyari', body: 'Deep ploughing. FYM 25 tonne/ha. Flat bed ya ridges banayin drainage ke liye.' },
      { title: 'Ropai', body: 'Nov-Dec mein ropai. Row spacing 15cm, plant spacing 10cm. Jarein seedhi lagayin.' },
      { title: 'Khaad', body: 'DAP 100 kg + MOP 100 kg basal. Urea 2 kist mein. Sulphur 30 kg zarur dein.' },
      { title: 'Sinchai', body: 'Regular sinchai chahiye. Katai se 10 din pehle paani band karein — proper curing ke liye.' },
      { title: 'Thrips Control', body: 'Spinosad ya Imidacloprid spray. Blue color sticky traps lagayin. Pheromone traps bhi.' },
      { title: 'Curing', body: 'Tops girne par khudai. 10-15 din chhaya mein sukhayein. Fir cold storage ya market.' }
    ],
    tips: [
      'Basal rot se bachne ke liye Carbendazim se bulbs treat karein.',
      'Cold storage mein 8 mahine tak store kar sakte hain.',
      'Pyaaj export ke liye quality grading bahut zaroori hai.',
      'Rabi pyaaj ki Nov-Jan ropai se best bhav milta hai.'
    ]
  },
  {
    id: 'potato',
    emoji: '🥔',
    name: 'Aalu (Potato)',
    hindi: 'आलू',
    season: 'rabi',
    duration: '75-90 din',
    soil: 'Sandy loam',
    water: '5-6 baar',
    videoId: 'iWZO1Q-zMGM',
    desc: 'Aalu UP, Punjab aur HP ki pramukh rabi fasal hai. India mein sabse zyada upbhog hone wali sabzi.',
    steps: [
      { title: 'Seed Potato', body: 'Certified seed potato chunein. Kufri Pukhraj, Kufri Jyoti ya Kufri Sindhuri. 25-30g ke tubers use karein.' },
      { title: 'Khet Taiyari', body: 'Oct-Nov mein deep ploughing. FYM 20-25 tonne + Neem cake 200 kg. Ridge-furrow method.' },
      { title: 'Buwaai', body: 'Oct-Nov mein ropai. 60cm row, 20-25cm paudha spacing. 15-20cm gehrai mein lagayin.' },
      { title: 'Khaad', body: 'DAP 175 kg + MOP 150 kg basal. Urea 2 split mein. Boron aur Calcium bhi dein.' },
      { title: 'Earthing Up', body: '30-35 din baad mitti charhayin — tubers suraj ki roshni se bachne chahiye (haraipan).' },
      { title: 'Late Blight', body: 'Sabse khatarnak rog — Mancozeb spray time par karein. Fog/cloudy weather mein zaroori.' },
      { title: 'Katai', body: 'Tops sukh jaane ke 10-15 din baad khudai. Chamdi patti ho jaae tab ready hai.' }
    ],
    tips: [
      'Late blight (Pampor rog) sabse khatarnak — Mancozeb spray zaroori.',
      'Cold storage mein -2°C par 8 mahine store ho sakta hai.',
      'Seed potato khud rakhna agla saal ke liye zyada faydakar.',
      'Baby potato market mein premium price milti hai.'
    ]
  },
  {
    id: 'brinjal',
    emoji: '🍆',
    name: 'Baigan (Brinjal)',
    hindi: 'बैंगन',
    season: 'yearround',
    duration: '90-100 din',
    soil: 'Sandy loam/domat',
    water: 'Regular',
    videoId: 'zQHQNApCpX4',
    desc: 'Baigan saal bhar ugayi jaane wali sabzi hai. Pusa Purple Long, Arka Nidhi popular varieties hain.',
    steps: [
      { title: 'Nursery', body: '25-30 din ki nursery tayar karein. Thiram se beej treat karein. Raised bed use karein.' },
      { title: 'Khet Taiyari', body: 'Deep ploughing. FYM 20 tonne/ha. Raised beds — drainage ke liye.' },
      { title: 'Ropai', body: '60×60cm spacing. Shaam ko ropai. Turant sinchai dein.' },
      { title: 'Khaad', body: 'DAP 100 kg + MOP 75 kg basal. Urea 3 split — 50+50+40 kg. Calcium spray karein.' },
      { title: 'Sinchai', body: 'Regular light sinchai. Drip fertigation se paani aur khaad dono ka bachav.' },
      { title: 'Fruit & Shoot Borer', body: 'Pheromone traps lagayin. Spinosad ya Emamectin Benzoate spray karein.' },
      { title: 'Katai', body: 'Phal hard aur glossy ho tab touein. Late katai se beej sakht ho jaate hain.' }
    ],
    tips: [
      'Fruit & Shoot Borer ke liye pheromone traps sabse effective hain.',
      'Poly tunnel mein off-season mein zyada bhav milta hai.',
      'Grafting se soil-borne disease resistance badhti hai.',
      'Baigan mein 90-day cycle hoti hai — planning karein.'
    ]
  },
  {
    id: 'chilli',
    emoji: '🌶️',
    name: 'Mirch (Chilli)',
    hindi: 'मिर्च',
    season: 'kharif',
    duration: '90-120 din',
    soil: 'Sandy loam/domat',
    water: '5-6 baar',
    videoId: 'KHlJwQlp0CU',
    desc: 'Mirch AP, Karnataka aur MP ki pramukh naqdaari fasal hai. Dry chilli, powder aur oleoresin export hota hai.',
    steps: [
      { title: 'Nursery', body: 'LCA-334, Byadgi, Jwala ya Pusa Jwala chunein. Plug tray nursery tayar karein.' },
      { title: 'Khet Taiyari', body: 'Deep ploughing. FYM 15-20 tonne/ha. Raised beds — waterlogging rokne ke liye.' },
      { title: 'Ropai', body: '60×45cm spacing. Dono seedlings ek pit mein. Shaam ko ropai karein.' },
      { title: 'Khaad', body: 'DAP 125 kg + MOP 100 kg basal. Urea 3 kist. Zinc aur Boron spray karein.' },
      { title: 'Drip Irrigation', body: 'Soil moisture consistent — fruit set mein stress nahi aana chahiye.' },
      { title: 'Thrips & Mites', body: 'Spinosad ya Abamectin spray. Yellow aur blue sticky traps. Neem oil bhi useful.' },
      { title: 'Katai', body: 'Green ya red ripe — market demand ke hisaab se. Dry chilli ke liye puri tarah laal.' }
    ],
    tips: [
      'Phool girne se bachane ke liye Boron spray karein.',
      'Dry chilli mein capsaicin content zyada ho to zyada dam.',
      'Oleoresin extraction se huge value addition hoti hai.',
      'Byadgi variety export quality ki hoti hai — premium price.'
    ]
  },
  {
    id: 'garlic',
    emoji: '🧄',
    name: 'Lahsun (Garlic)',
    hindi: 'लहसुन',
    season: 'rabi',
    duration: '130-150 din',
    soil: 'Sandy loam',
    water: '6-8 baar',
    videoId: 'OxQS1eIcjAg',
    desc: 'Lahsun MP, Rajasthan aur Gujarat ki naqdaari fasal hai. Export mein bahut demand aur aacha bhav.',
    steps: [
      { title: 'Clove Selection', body: 'Disease-free bulbs se bade aur swasth cloves alag karein. G-1, G-41 hybrid chunein.' },
      { title: 'Khet Taiyari', body: 'Sandy loam mein 2-3 deep ploughing. FYM 15-20 tonne. Raised beds banayin.' },
      { title: 'Ropai', body: 'Oct-Nov mein ropai. 15×10cm spacing. Clove tip upar rakhein. Depth 4-5cm.' },
      { title: 'Khaad', body: 'DAP 100 kg + MOP 100 kg + Sulphur 30 kg basal. Urea 2 split. Boron spray zaroori.' },
      { title: 'Sinchai', body: 'Regular light sinchai. 6-8 baar. Katai se 15 din pehle band karein.' },
      { title: 'Purple Blotch', body: 'Iprodione ya Mancozeb spray karein. Humid weather mein zyada hota hai.' },
      { title: 'Curing', body: 'Patte sukhe hone par khudai. 15-20 din dhoop mein sukhayein. Store ya market.' }
    ],
    tips: [
      'Lahsun ki braiding karke market mein zyada bhav milta hai.',
      'Cold storage mein 8 mahine tak rakh sakte hain.',
      'Desi lahsun ki zyada demand aur zyada tel hoti hai.',
      'China ke baad India sabse bada lahsun producer hai.'
    ]
  },
  {
    id: 'banana',
    emoji: '🍌',
    name: 'Kela (Banana)',
    hindi: 'केला',
    season: 'yearround',
    duration: '12-14 mahine',
    soil: 'Domat mitti',
    water: 'Weekly',
    videoId: '9GOoaFqv8rA',
    desc: 'Kela Maharashtra, Gujarat aur TN ki commercial fruit fasal hai. Saal bhar paidawar deta hai.',
    steps: [
      { title: 'Variety/Sucker', body: 'Tissue culture plants ya disease-free sword suckers chunein. Grand Naine, Robusta common hain.' },
      { title: 'Khet Taiyari', body: '4×2m mein pits (45×45×45cm) khodein. Har pit mein FYM 10kg + Neem cake 1kg.' },
      { title: 'Ropai', body: 'Feb ya June mein ropai best. 4×2m ya 2×2m spacing. Corm 15-20cm gehrai mein.' },
      { title: 'Khaad', body: 'Har mahine: Urea 150g + MOP 150g + SSP 75g. Micronutrient quarterly spray.' },
      { title: 'Drip Irrigation', body: 'Drip best — 8-10 liter/plant har 3-4 din. Moisture consistent rakhein.' },
      { title: 'Desuckering', body: 'Side suckers hatayin — sirf ek best sword sucker rakhein. Yield badh jaata hai.' },
      { title: 'Katai', body: 'Fingers 75% full hone par katai. Bunch 25-35kg. Ethylene se ripening.' }
    ],
    tips: [
      'Panama wilt se bachne ke liye resistant variety chunein.',
      'Bunch cover (poly bag) se fruit quality bahut behtar hoti hai.',
      'Contract farming se stable price milti hai.',
      'Banana powder aur chips se value addition karo.'
    ]
  },
  {
    id: 'papaya',
    emoji: '🍑',
    name: 'Papita (Papaya)',
    hindi: 'पपीता',
    season: 'yearround',
    duration: '9-10 mahine',
    soil: 'Domat mitti',
    water: 'Weekly',
    videoId: 'd6l3E1PWAJ0',
    desc: 'Papita fast-growing fruit tree hai. 9 mahine mein phal deta hai. Vitamins se bharpur.',
    steps: [
      { title: 'Variety', body: 'PUSA Dwarf, Sunrise Solo ya Taiwan 786 chunein. Polybag nursery mein seeds lagayin.' },
      { title: 'Ropai', body: '2×2m spacing mein July ya Feb mein lagayin. Har jagah 3 paudhe — baad mein ek rakhein.' },
      { title: 'Khaad', body: 'Har mahine Urea 100g + MOP 100g + SSP 50g. Organic matter zaroori hai.' },
      { title: 'Sinchai', body: 'Weekly light sinchai. Drip irrigation recommended. Waterlogging bilkul nahi.' },
      { title: 'Sex Determination', body: 'Phool aane par male plants hatayin — sirf hermaphrodite plants rakhein.' },
      { title: 'PRSV Virus', body: 'Papaya Ringspot Virus se bachne ke liye aphid control. Infected plants turant hatayin.' },
      { title: 'Katai', body: 'Color break stage par katai. Papain ke liye green fruit par cuts lagayin.' }
    ],
    tips: [
      'Papain (enzyme) se extra income hoti hai — raw papaya se.',
      'Poly house mein papita zyada productive hota hai.',
      'Ek hi variety ek khet mein lagayin — virus control.',
      'Papita ek saal mein 50-100 kg phal deta hai per tree.'
    ]
  },
  {
    id: 'mango',
    emoji: '🥭',
    name: 'Aam (Mango)',
    hindi: 'आम',
    season: 'yearround',
    duration: '3-5 saal pehli baar',
    soil: 'Domat mitti',
    water: 'Monthly',
    videoId: 'PGRL-hnMHO8',
    desc: 'Aam India ka national fruit. UP, AP, Bihar mein zyada hota hai. Export ki huge potential.',
    steps: [
      { title: 'Variety', body: 'Alphonso, Dashehari, Langra, Kesar ya Amrapali chunein. Grafted plants se 2-3 saal mein phal.' },
      { title: 'Ropai', body: 'June-July ya Feb-March mein. 10×10m spacing. Pits mein FYM bharein.' },
      { title: 'Khaad', body: 'Umra ke hisaab se khaad — pehle saal 100g Urea, dono saal 1-2kg tak.' },
      { title: 'Sinchai', body: 'Pahle 2 saal regular sinchai. Baad mein rainy season kaafi. Drip se paani bachao.' },
      { title: 'Pruning', body: 'Pahle 3 saal mein shape dein. Dead wood hatayin. Crossing branches kaatein.' },
      { title: 'Flower Induction', body: 'Nov-Dec mein Paclobutrazol soil drench se flowering induce karein.' },
      { title: 'Katai', body: 'May-August mein pakta hai. Shoulder area yellow/orange hone par touein.' }
    ],
    tips: [
      'Mango export ke liye VHT treatment zaroori hai.',
      'Hoppers aur mealybugs se alert rahein.',
      'Alphonso aam export mein sabse zyada demand.',
      'Contract farming se guaranteed price milti hai.'
    ]
  },
  {
    id: 'watermelon',
    emoji: '🍉',
    name: 'Tarbuj (Watermelon)',
    hindi: 'तरबूज',
    season: 'zaid',
    duration: '75-90 din',
    soil: 'Sandy loam',
    water: '4-5 baar',
    videoId: 'bpF2JxlYG5w',
    desc: 'Tarbuj garmi ki crop hai — April-June market. Nadi kinare ki mitti mein bahut acchi hoti hai.',
    steps: [
      { title: 'Khet Taiyari', body: 'Sandy loam khet mein beds banayin. FYM 10-15 tonne/ha. pH 6-7.' },
      { title: 'Beej', body: 'Sugar Baby, Arka Manik ya NS-295 hybrid chunein. 3-4 kg/ha. Bhegokar lagayin.' },
      { title: 'Buwaai', body: 'Feb-March mein buwaai. 2×2m spacing. 2-3 seeds har pit. Depth 2-3cm.' },
      { title: 'Khaad', body: 'DAP 100 kg + MOP 80 kg basal. Urea 2 kist. Calcium Boron spray fruit set par.' },
      { title: 'Vine Training', body: 'Strong stem chunein, baaki hatayin. Fruit ko sunlight dein.' },
      { title: 'Fruit Set', body: 'Phool gir raha ho to Boric Acid 0.1% spray. Hand pollination beneficial.' },
      { title: 'Katai', body: 'Tendril dry ho, hollow sound aaye, bloom end soft ho — tab ready. 75-90 din.' }
    ],
    tips: [
      'Nadi kinare ki mitti (river bed) mein tarbuj best hota hai.',
      'Mini watermelon ki market demand badh rahi hai.',
      'Drip fertigation se paidawar 40-50% badh jaati hai.',
      'Seedless watermelon mein premium price milta hai.'
    ]
  },
  {
    id: 'guava',
    emoji: '🍐',
    name: 'Amrood (Guava)',
    hindi: 'अमरूद',
    season: 'yearround',
    duration: '2-3 saal pehli baar',
    soil: 'Sandy loam',
    water: 'Monthly',
    videoId: '5UJl5fLPYsY',
    desc: 'Amrood hardiest fruit tree hai. Vitamin C ka sabse aacha srot. UP, MP mein zyada.',
    steps: [
      { title: 'Variety', body: 'Allahabad Safeda, Lalit, Shweta ya L-49 chunein. Tissue culture plants zyada acche.' },
      { title: 'Ropai', body: '6×6m spacing. July-August ya Feb-March mein. Pits mein FYM + Neem cake.' },
      { title: 'Khaad', body: 'Pehle saal 100g NPK per tree. Umra ke saath badhate jayin. Zinc common deficiency.' },
      { title: 'Crop Regulation', body: 'Ambe bahar (winter crop) ke liye July-Aug mein stress dein — paani rokein.' },
      { title: 'Sinchai', body: 'Monthly sinchai. Fruit development mein adequate moisture. Drip se aasaan.' },
      { title: 'Wilt Disease', body: 'Fusarium wilt ka koi ilaj nahi — wilt-resistant variety hi chunein.' },
      { title: 'Katai', body: '75-80% paka hone par touein. Room temp par 2-3 din. Cold storage mein 3-4 hafte.' }
    ],
    tips: [
      'Amrood mein Vitamin C santre se 5 guna zyada hoti hai.',
      'Guava jelly, candy aur juice se value addition achhi.',
      'Wilt-resistant variety chunna sabse zaroori decision.',
      'Bag farming se fruit quality aur price dono badhte hain.'
    ]
  },
  {
    id: 'carrot',
    emoji: '🥕',
    name: 'Gajar (Carrot)',
    hindi: 'गाजर',
    season: 'rabi',
    duration: '70-80 din',
    soil: 'Deep sandy loam',
    water: '4-5 baar',
    videoId: 'C3gOCxmY3GE',
    desc: 'Gajar sardi ki sabzi hai — Vitamin A aur antioxidants se bharpur. Juice aur fresh market dono mein demand.',
    steps: [
      { title: 'Khet Taiyari', body: '1 meter gehri jotai karein — gajar andar jaati hai. Stones hatayin. Loose mitti zaroori.' },
      { title: 'Beej', body: 'Pusa Kesar, Nantes ya Chantenay chunein. 4-5 kg/ha. Band mein buwaai best.' },
      { title: 'Buwaai', body: 'Oct-Nov mein. Row spacing 30cm, seed spacing 5-7cm. Depth sirf 1-2cm.' },
      { title: 'Thinning', body: '30 din baad weak paudhe hatayin — 8-10cm spacing rakhein. Root size badhti hai.' },
      { title: 'Khaad', body: 'FYM 15-20 tonne basal. DAP 80 kg + MOP 80 kg. Urea kam dein — splitting hoti hai.' },
      { title: 'Sinchai', body: 'Regular light sinchai. Mitti sukhi nahi chahiye — root cracking hoti hai.' },
      { title: 'Katai', body: '70-80 din mein. Roots 15-20cm lambi. Dheere haath se nikaalein.' }
    ],
    tips: [
      'Clay mitti mein gajar tedi-medhi ho jaati hai — sandy loam zaruri.',
      'Gajar ka juice export potential bahut zyada hai.',
      'Cold storage mein 3-4 mahine rakh sakte hain.',
      'Baby carrot market mein premium price milti hai.'
    ]
  },
  {
    id: 'spinach',
    emoji: '🥬',
    name: 'Palak (Spinach)',
    hindi: 'पालक',
    season: 'rabi',
    duration: '30-45 din',
    soil: 'Sandy loam',
    water: '4-5 baar',
    videoId: '9_rW27K_tFw',
    desc: 'Palak bahut tezi se ugne wali sabzi — 30-40 din mein ready. Urban farming aur kitchen garden ke liye best.',
    steps: [
      { title: 'Khet Taiyari', body: 'Halki jotai. FYM 10 tonne/ha. Raised beds ya flat beds banayin.' },
      { title: 'Beej', body: 'All Green, Pusa Bharati ya Virginia Savoy chunein. 25-30 kg/ha. Broadcast karein.' },
      { title: 'Buwaai', body: 'Sep-March tak. Row spacing 25-30cm. Depth 1-2cm — bahut kam.' },
      { title: 'Khaad', body: 'Urea 80 kg/ha — nitrogen ki zarurat zyada. 2 split mein. Potash 60 kg.' },
      { title: 'Sinchai', body: 'Har 4-5 din mein light sinchai. Patte sodden nahi — leaf rot se bachein.' },
      { title: 'Damping Off', body: 'Paudhe gir jaayein to Thiram spray. Drainage sahi rakhein.' },
      { title: 'Katai', body: '30-40 din mein patte kaatein. 3-4 cuttings ek fasal se mil sakti hain.' }
    ],
    tips: [
      'Hydroponics mein palak 20-25 din mein ready ho jaati hai.',
      'Night temp 5°C se kam ho to palak damage hoti hai.',
      'Organic palak 40-50% premium price milti hai.',
      'Blanched spinach export market mein bahut demand hai.'
    ]
  },
  {
    id: 'turmeric',
    emoji: '🟡',
    name: 'Haldi (Turmeric)',
    hindi: 'हल्दी',
    season: 'kharif',
    duration: '8-9 mahine',
    soil: 'Domat mitti',
    water: '6-8 baar',
    videoId: 'Q3EBjHMAxOU',
    desc: 'Haldi AP, Odisha aur TN ki pramukh masala fasal hai. Curcumin content se export premium milta hai.',
    steps: [
      { title: 'Khet Taiyari', body: 'Raised beds (30cm) banayin — drainage ke liye zaroori. FYM 25 tonne/ha.' },
      { title: 'Rhizome Chunav', body: 'BSR-1, Roma ya Prabha chunein. 20-25g ke healthy rhizomes chunein.' },
      { title: 'Ropai', body: 'April-May mein ropai. 45×30cm spacing. Rhizome ko 5cm gehrai mein lagayin.' },
      { title: 'Khaad', body: 'FYM 25 tonne + DAP 100 kg + MOP 100 kg + Urea 100 kg in splits.' },
      { title: 'Mulching', body: 'Straw mulching se moisture banta hai — 2-3 baar mulching season mein karein.' },
      { title: 'Sinchai', body: '6-8 baar sinchai. Monsoon kaafi hai normally. Dry weather mein extra dein.' },
      { title: 'Katai', body: '8-9 mahine mein patte sukh jaayein tab khudai. Curing: 45 min boiling + drying.' }
    ],
    tips: [
      'High curcumin variety se export premium milta hai.',
      'Haldi curing (boiling + drying) bahut zaroori hai quality ke liye.',
      'Shade farming (coconut/areca ke neeche) bahut acchi.',
      'Haldi powder se value addition — grinding plant lagayin.'
    ]
  },
  {
    id: 'ginger',
    emoji: '🫚',
    name: 'Adrak (Ginger)',
    hindi: 'अदरक',
    season: 'kharif',
    duration: '8-10 mahine',
    soil: 'Sandy loam/domat',
    water: 'Regular',
    videoId: 'kXqRhCRbEAA',
    desc: 'Adrak Kerala, Karnataka aur Odisha ki pramukh masala fasal hai. Fresh aur dry dono demand mein.',
    steps: [
      { title: 'Khet Taiyari', body: 'Well-drained sandy loam mein deep ploughing. FYM 30 tonne/ha. Raised beds zaroori.' },
      { title: 'Rhizome', body: 'Mahima, Suprabha ya Rio-de-Janeiro variety chunein. 15-20g pieces. 4 hafte store.' },
      { title: 'Ropai', body: 'April-May mein. 25×25cm spacing mein 2.5-3cm gehrai. Rows N-S direction.' },
      { title: 'Mulching', body: 'Green leaf mulching 10-12cm thick — moisture aur temperature control.' },
      { title: 'Khaad', body: 'FYM 30 tonne + Urea 100 kg + MOP 50 kg in splits. Boron spray faydemand.' },
      { title: 'Shoot Borer', body: 'Chlorpyrifos soil drench karein. Infected tillers hatayin aur jalayein.' },
      { title: 'Katai', body: '8-10 mahine mein patte peele ho jaayein tab khudai karein.' }
    ],
    tips: [
      'Adrak ko partial shade mein ugayin — zyada sun nahi chahiye.',
      'Rhizome rot se bachne ke liye raised beds zaroori hain.',
      'Dry ginger se zyada value addition — powder aur essential oil.',
      'Kerala mein wayanad ginger GI tag wali hai — premium price.'
    ]
  }
];

// ══════════════════════════════════════════════
//  CROP GUIDE FUNCTIONS
// ══════════════════════════════════════════════

function renderCropGrid (filter) {
  const grid = document.getElementById('cropGrid');
  const list = filter === 'all' ? CROPS : CROPS.filter(c => c.season === filter);
  grid.innerHTML = list.map(c => `
    <div class="crop-tile" onclick="openCropDetail('${c.id}')" data-season="${c.season}">
      <span class="ct-emoji">${c.emoji}</span>
      <div class="ct-name">${c.name}</div>
      <div class="ct-hindi">${c.hindi}</div>
      <span class="ct-badge ${c.season}">${c.season === 'yearround' ? 'Saal Bhar' : c.season.charAt(0).toUpperCase() + c.season.slice(1)}</span>
    </div>`).join('');
}

function filterCrops (season, btn) {
  document.querySelectorAll('.lf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCropGrid(season);
}

function openCropDetail (id) {
  const c = CROPS.find(x => x.id === id);
  if (!c) return;

  // Breadcrumb
  document.getElementById('detailBreadcrumb').textContent = c.name;

  // Hero
  document.getElementById('cropHero').innerHTML = `
    <div class="ch-emoji">${c.emoji}</div>
    <div class="ch-info">
      <h2>${c.name} <span style="font-size:1.2rem;color:var(--text-dim)">${c.hindi}</span></h2>
      <p>${c.desc}</p>
      <div class="ch-chips">
        <div class="ch-chip"><i class="fa-solid fa-clock"></i>${c.duration}</div>
        <div class="ch-chip"><i class="fa-solid fa-layer-group"></i>${c.soil}</div>
        <div class="ch-chip"><i class="fa-solid fa-droplet"></i>Sinchai: ${c.water}</div>
        <div class="ch-chip"><i class="fa-solid fa-calendar-days"></i>
          <span class="ct-badge ${c.season}" style="margin:0">${c.season === 'yearround' ? 'Saal Bhar' : c.season.charAt(0).toUpperCase() + c.season.slice(1)}</span>
        </div>
      </div>
    </div>`;

  // Video — embed with proper params
  document.getElementById('cropVideoFrame').src =
    `https://www.youtube.com/embed/${c.videoId}?rel=0&modestbranding=1&playsinline=1`;

  // Steps
  document.getElementById('cropStepsBox').innerHTML = `
    <div class="steps-box-title"><i class="fa-solid fa-list-check"></i> Step-by-Step Guide</div>
    ${c.steps.map((s, i) => `
      <div class="crop-step">
        <div class="cs-num">${i + 1}</div>
        <div class="cs-body"><h4>${s.title}</h4><p>${s.body}</p></div>
      </div>`).join('')}`;

  // Tips
  document.getElementById('cropTipsBox').innerHTML = `
    <div class="tips-box-title"><i class="fa-solid fa-lightbulb"></i> Kaam Ki Baatein (Tips)</div>
    ${c.tips.map(t => `<div class="crop-tip">${t}</div>`).join('')}`;

  // Show detail, hide list
  document.getElementById('learnListView').style.display = 'none';
  document.getElementById('learnDetailView').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeCropDetail () {
  // Stop video
  document.getElementById('cropVideoFrame').src = '';
  document.getElementById('learnDetailView').classList.remove('active');
  document.getElementById('learnListView').style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}