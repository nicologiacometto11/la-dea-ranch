// Tutti i testi e i dati del sito stanno qui.
// I valori marcati TODO sono segnaposto: vanno confermati con la titolare prima della pubblicazione.

export const site = {
  name: 'La Dea Ranch',
  tagline: 'Centro ippico e azienda agricola',
  location: 'Val della Torre (TO), Piemonte',
  // TODO: indirizzo completo, telefono, email, orari, P.IVA
  address: 'TODO: via e numero civico, 10040 Val della Torre (TO)',
  phone: 'TODO',
  email: 'TODO',
  instagram: 'https://www.instagram.com/p/DfEygN5EQ8j/', // TODO: sostituire con il link al profilo
  mapsUrl: '', // TODO: link Google Maps
}

export const nav = [
  { id: 'chi-siamo', label: 'Chi siamo' },
  { id: 'centro-ippico', label: 'Centro ippico' },
  { id: 'azienda-agricola', label: 'Azienda agricola' },
  { id: 'galleria', label: 'Galleria' },
  { id: 'contatti', label: 'Contatti' },
]

export const hero = {
  title: 'La Dea Ranch',
  subtitle: 'Cavalli e campagna a Val della Torre',
  cta: { label: 'Contattaci', href: '#contatti' },
}

export const about = {
  title: 'Chi siamo',
  // TODO: storia, persone, valori — da farsi raccontare
  text: 'La Dea Ranch è un centro ippico e un’azienda agricola a Val della Torre, in provincia di Torino.',
}

// TODO: confermare quali servizi esistono davvero (lezioni, pensione cavalli, passeggiate, pony, ecc.)
export const horseCenter = {
  title: 'Centro ippico',
  intro: 'TODO',
  services: [
    { title: 'Servizio 1', text: 'TODO' },
    { title: 'Servizio 2', text: 'TODO' },
    { title: 'Servizio 3', text: 'TODO' },
  ],
}

// TODO: confermare prodotti/attività agricole (vendita diretta, mercati, ecc.)
export const farm = {
  title: 'Azienda agricola',
  intro: 'TODO',
  products: [
    { title: 'Prodotto 1', text: 'TODO' },
    { title: 'Prodotto 2', text: 'TODO' },
  ],
}

// TODO: foto vere in public/images/
export const gallery = []
