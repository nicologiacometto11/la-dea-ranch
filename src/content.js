// Tutti i testi e i dati del sito stanno qui.
// I valori marcati TODO sono segnaposto: vanno confermati con la titolare prima della pubblicazione.

const img = (nome) => `${import.meta.env.BASE_URL}images/${nome}`

export const site = {
  name: 'La Dea Ranch',
  tagline: 'Centro ippico e azienda agricola',
  location: 'Val della Torre (TO), Piemonte',
  address: 'Via San Gillio, 31',
  city: '10040 Val della Torre (TO)',
  // Numero dalla locandina del Winter Camp (referente: Tabata), confermato valido per tutto
  phone: '346 3629775',
  phoneHref: 'tel:+393463629775',
  // TODO: orari di apertura, P.IVA
  email: 'az.agr.ladea@gmail.com',
  instagram: 'https://www.instagram.com/ladearanch/',
  facebook: 'https://www.facebook.com/p/La-Dea-Ranch-61590458589500/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+San+Gillio+31+10040+Val+della+Torre+TO',
}

export const photos = {
  pascolo: { src: img('pascolo.webp'), alt: 'Cavalli al pascolo nel prato del ranch' },
  pony: { src: img('pony-amiche.webp'), alt: 'Due ragazze in sella a due pony, mano nella mano, in un prato' },
  lezione: { src: img('lezione.webp'), alt: 'Lezione di pony games in campo, con le montagne sullo sfondo' },
}

export const logo = { src: img('logo.webp'), alt: 'Logo La Dea Ranch' }

export const nav = [
  { id: 'chi-siamo', label: 'Chi siamo' },
  { id: 'centro-ippico', label: 'Centro ippico' },
  { id: 'azienda-agricola', label: 'Azienda agricola' },
  { id: 'winter-camp', label: 'Winter Camp' },
  { id: 'contatti', label: 'Contatti' },
]

export const hero = {
  image: photos.pascolo,
  eyebrow: 'Val della Torre · Piemonte',
  title: 'La Dea Ranch',
  subtitle: 'Equitazione, pony e passeggiate nella natura. Per grandi e piccoli.',
  ctas: [
    { label: 'Scopri le attività', href: '#centro-ippico', primary: true },
    { label: 'Chiamaci', href: site.phoneHref },
  ],
  highlights: ['Adulti e bambini', 'Pony games', 'Passeggiate a cavallo', 'Campi stagionali'],
}

export const about = {
  title: 'Chi siamo',
  lead: 'Un centro ippico e un’azienda agricola a Val della Torre, dove i cavalli sono al centro di tutto.',
  // TODO: storia, persone, valori: da farsi raccontare dalla titolare
  image: photos.pony,
  text: 'Da noi si impara a montare, si gioca con i pony, si cammina nella natura e si cresce insieme ai cavalli, che si tratti di una prima lezione o di un campo per bambini.',
}

export const horseCenter = {
  title: 'Centro ippico',
  intro: 'Lezioni, giochi e passeggiate: ce n’è per ogni età e per ogni livello.',
  image: photos.lezione,
  services: [
    { title: 'Lezioni di equitazione', text: 'Per adulti e bambini.' },
    { title: 'Pony games e scuola pony', text: 'Per i più piccoli, tra gioco e prime esperienze in sella.' },
    { title: 'Passeggiate a cavallo', text: 'Nella natura intorno al ranch.' },
  ],
}

// TODO: pensione e allevamento messi su indicazione di Nicolò ("boh si"): farli confermare dalla titolare.
// Il fieno non è stato inserito (non confermato).
export const farm = {
  title: 'Azienda agricola',
  intro: 'La Dea Ranch è anche azienda agricola: il nostro lavoro ruota attorno al cavallo e alla vita all’aria aperta.',
  products: [
    { title: 'Allevamento', text: 'Nascita, crescita e cura quotidiana di cavalli e pony.' },
    { title: 'Pensione cavalli', text: 'Accoglienza e cura per i cavalli dei proprietari.' },
    { title: 'Addestramento e rieducazione', text: 'Lavoro con i cavalli, dal giovane da addestrare a quello da recuperare.' },
    { title: 'Campi e laboratori', text: 'Giornate stagionali per bambini, con attività con i pony e laboratori.' },
  ],
}

// Dati dalla locandina Winter Camp 2026/27. Da aggiornare ogni stagione.
export const winterCamp = {
  title: 'Winter Camp 2026/27',
  intro: 'Giornate di pony, laboratori natalizi e compiti, all’aria aperta e al caldo di un ranch.',
  days: [
    'Mer 23 dicembre', 'Gio 24 dicembre', 'Lun 28 dicembre', 'Mar 29 dicembre',
    'Mer 30 dicembre', 'Gio 31 dicembre', 'Lun 4 gennaio', 'Mar 5 gennaio',
  ],
  hours: '8.30/9.00 – 16.30/17.00',
  activities: ['Attività con i pony', 'Laboratori natalizi', 'Aiuto compiti'],
  note: 'Portare il pranzo al sacco.',
  info: 'Per informazioni: Tabata',
  flyer: { src: img('winter-camp-2026-27.webp'), alt: 'Locandina del Winter Camp 2026/27 de La Dea Ranch' },
}

// Galleria non mostrata: servono altre foto per riempirla (le 3 già usate stanno in hero, chi siamo e centro ippico)
export const gallery = []
