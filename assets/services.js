/* Service catalog – copied from the live Wix Bookings list (elourethestudio.ch/book-online).
   Prices (CHF) and durations (min) are unchanged. price:null = no price shown on the live page.
   Exact duplicates on the live page (Achseln, Hände inkl. Finger, Füsse inkl. Zehen listed twice) are shown once.
   Category grouping is a design grouping, not a Wix category. */
const CATS = [
  ['beratung','Beratung & Erstkontakt'],
  ['gesicht','Gesicht'],
  ['koerper','Körper'],
  ['intim','Intim & Bikini'],
  ['ganzkoerper','Ganzkörper & Kombinationen'],
  ['zusatz','Zusatzzone']
];

const SERVICES = [
  {id:'probe-achsel', cat:'beratung', name:'Probebehandlung Achsel inkl. Beratung', min:30, price:null, note:'Für Erstkunden der Laserbehandlung. Nur einzeln buchbar.', alone:true},
  {id:'beratung', cat:'beratung', name:'Beratungsgespräch', min:25, price:null, note:'Ablauf, Haut- und Haaranalyse sowie Behandlungsplan.'},

  {id:'oberlippe', cat:'gesicht', name:'Oberlippe', min:15, price:39},
  {id:'oberlippe-kinn', cat:'gesicht', name:'Oberlippe & Kinn', min:15, price:49},
  {id:'gesicht', cat:'gesicht', name:'Gesicht', min:15, price:69},

  {id:'achseln', cat:'koerper', name:'Achseln', min:15, price:49},
  {id:'oberarme', cat:'koerper', name:'Oberarme', min:15, price:49},
  {id:'arme', cat:'koerper', name:'Arme', min:30, price:69},
  {id:'arme-komplett', cat:'koerper', name:'Arme komplett', min:30, price:79},
  {id:'haende', cat:'koerper', name:'Hände inkl. Finger', min:15, price:29},
  {id:'hals', cat:'koerper', name:'Hals', min:15, price:49},
  {id:'nacken', cat:'koerper', name:'Nacken', min:15, price:39},
  {id:'brust', cat:'koerper', name:'Brust', min:30, price:69},
  {id:'bauch-15', cat:'koerper', name:'Bauch', min:15, price:49},
  {id:'bauch-30', cat:'koerper', name:'Bauch', min:30, price:69},
  {id:'brust-bauch', cat:'koerper', name:'Brust & Bauch', min:30, price:119},
  {id:'halber-ruecken', cat:'koerper', name:'Halber Rücken', min:15, price:49},
  {id:'ruecken-nacken', cat:'koerper', name:'Rücken inkl. Nacken', min:30, price:99},
  {id:'pobacken', cat:'koerper', name:'Pobacken', min:15, price:59},
  {id:'konturen', cat:'koerper', name:'Konturen', min:15, price:35},
  {id:'oberschenkel', cat:'koerper', name:'Oberschenkel', min:30, price:89},
  {id:'unterschenkel', cat:'koerper', name:'Unterschenkel', min:30, price:89},
  {id:'beine', cat:'koerper', name:'Beine', min:45, price:129},
  {id:'beine-komplett', cat:'koerper', name:'Beine komplett', min:45, price:129},
  {id:'fuesse', cat:'koerper', name:'Füsse inkl. Zehen', min:15, price:29},

  {id:'bikinilinie', cat:'intim', name:'Bikinilinie', min:15, price:59},
  {id:'bikini-intim', cat:'intim', name:'Bikini / Intim', min:15, price:79},

  {id:'kombi-intim-achseln', cat:'ganzkoerper', name:'Kombi Intim + Achseln', min:30, price:119},
  {id:'ganzkoerper-halbes-bein', cat:'ganzkoerper', name:'Ganzkörper halbes Bein', min:60, price:169, note:'3 Zonen inklusive, jede weitere Zone +10 CHF.', extra:10},
  {id:'ganzkoerper', cat:'ganzkoerper', name:'Ganzkörper', min:75, price:179, note:'3 Zonen inklusive, jede weitere Zone +10 CHF.', extra:10},
  {id:'ganzkoerper-plus', cat:'ganzkoerper', name:'Ganzkörper', min:120, price:249, note:'3 Zonen inklusive, jede weitere Zone +15 CHF.', extra:15},

  {id:'weitere-zone', cat:'zusatz', name:'Jede weitere Zone', min:25, price:15, note:'Nur in Kombination mit einer Ganzkörperbehandlung.', needsFull:true}
];
