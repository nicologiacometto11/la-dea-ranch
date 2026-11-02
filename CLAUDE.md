# La Dea Ranch — sito web

Sito vetrina per **La Dea Ranch**, centro ippico e azienda agricola a Val della Torre (TO), Piemonte.
Il progetto è di Nicolò Giacometto; la titolare dell'attività è socia della sorella di Nicolò.
Instagram di riferimento: https://www.instagram.com/p/DfEygN5EQ8j/

## Stato dei contenuti (importante)

Le ricerche web **non hanno trovato fonti dirette** sull'attività (il sito/profilo ufficiale non è risultato indicizzato e Instagram blocca gli accessi automatici). Quindi:

- Gli unici fatti confermati sono: nome, tipo di attività (centro ippico + azienda agricola), località (Val della Torre, TO).
- **Non inventare** servizi, prezzi, orari, storia, contatti, numeri o recensioni. Tutto ciò che manca è marcato `TODO` in `src/content.js`.
- Altri maneggi della zona (es. Ranch O.K. Corral) sono attività diverse: non usarli come fonte.
- Prima di pubblicare, i `TODO` vanno compilati con informazioni vere fornite dalla titolare.

## Stack

- React 18 + Vite 5, JavaScript (no TypeScript), CSS semplice in `src/index.css` (variabili CSS, nessun framework UI)
- Single page con navigazione per ancore; nessun router per ora
- Font: Lora (titoli) e Inter (testo) da Google Fonts

## Comandi

```bash
npm install
npm run dev       # sviluppo
npm run build     # build di produzione in dist/
npm run preview   # anteprima della build
```

## Struttura

```
index.html
src/
  main.jsx          entry point
  App.jsx           composizione delle sezioni
  content.js        TUTTI i testi e i dati del sito (modificare qui, non nei componenti)
  index.css         stile globale e palette
  components/       Header, Hero, About, CardSection, Gallery, Contact, Footer
public/images/      foto vere (da aggiungere)
```

## Requisito futuro: richieste e prenotazioni

Il sito oggi è una vetrina statica, ma **in futuro dovrà ricevere richieste di contatto e prenotazioni** (es. lezioni, passeggiate, prove, eventuali ordini/visite in azienda agricola: da confermare con la titolare). Quando si lavora sul codice:

- **Non scegliere ancora il backend** senza chiedere a Nicolò. Opzioni da valutare insieme: Netlify Forms/Functions, Supabase, Firebase, o un servizio di prenotazioni esterno (es. Calendly/Cal.com) incorporato.
- Tenere la parte "dati e invio" separata dalla UI: quando serve, creare `src/services/` (es. `bookings.js`, `contact.js`) con funzioni che oggi possono essere finte e domani chiamano il backend vero.
- Le **attività prenotabili** (nome, durata, posti, prezzo, giorni/orari) vanno modellate come dati in `src/content.js` o in un file dedicato, non scritte a mano nei componenti.
- Prevedere un eventuale router (es. React Router) quando nascerà una pagina `/prenota`; per ora basta la single page.
- Da pianificare insieme: notifiche alla titolare (email e/o WhatsApp), conferma al cliente, gestione disponibilità/annullamenti, protezione antispam (honeypot/captcha).
- **Privacy/GDPR**: raccogliere nome, email e telefono richiede informativa privacy, consenso esplicito nel form e cookie policy se si usano strumenti di tracciamento. Non salvare più dati del necessario.
- Ogni form deve funzionare bene da mobile, con messaggi di errore chiari in italiano e stati di caricamento/successo.

## Convenzioni

- Lingua del sito e dei testi: **italiano**. Tono caldo, semplice, concreto (no marketing gonfiato).
- I contenuti stanno in `src/content.js`; i componenti restano generici.
- Mobile first: la maggior parte dei visitatori arriverà da Instagram/telefono.
- Accessibilità di base: testi alternativi sulle immagini, contrasto sufficiente, navigazione da tastiera.
- Immagini: usare solo foto fornite dalla titolare, ottimizzate (WebP/JPG, larghezza max ~1600px) in `public/images/`. Niente foto stock che fingano di essere del ranch.
- Palette in `src/index.css` provvisoria: va rivista con logo e colori reali del ranch.
- Codice semplice e commentato solo dove serve; niente dipendenze nuove senza motivo.

## Possibili prossimi passi

1. Raccogliere dalla titolare: logo, foto, servizi, orari, contatti, link al profilo Instagram, eventuale pagina Facebook/Google Maps.
2. Compilare i `TODO` in `src/content.js`.
3. Aggiungere sezione prezzi/orari e mappa embed se confermati.
4. SEO locale: meta description, Open Graph, dati strutturati `LocalBusiness`, scheda Google Business.
5. Form contatti o pulsante WhatsApp (decidere con la titolare): è il primo passo verso le prenotazioni.
6. Deploy (Netlify o simile) e dominio.
7. Sistema di prenotazione (vedi "Requisito futuro"): prima definire con la titolare cosa si prenota e come gestisce le disponibilità, poi scegliere la tecnologia.
