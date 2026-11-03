# La Dea Ranch — sito web

Sito per **La Dea Ranch**, centro ippico e azienda agricola a Val della Torre (TO), Piemonte.
Lo sviluppa Nicolò Giacometto per la titolare (socia della sorella di Nicolò). Instagram di riferimento: https://www.instagram.com/p/DfEygN5EQ8j/

Nicolò parla italiano, registro informale: rispondi in italiano, in modo breve e diretto.

## Stato attuale

Esiste solo lo **scheletro**: una single page React con sezioni (Hero, Chi siamo, Centro ippico, Azienda agricola, Galleria, Contatti) e testi segnaposto. Il build funziona (`npm run build`).

## Contenuti: non inventare

Le ricerche web non hanno trovato fonti dirette sull'attività (sito/profilo ufficiale non indicizzato, Instagram blocca gli accessi automatici).

- Fatti confermati: nome, tipo di attività (centro ippico + azienda agricola), località (Val della Torre, TO).
- **Non inventare** servizi, prezzi, orari, storia, contatti, numeri o recensioni. Ciò che manca è marcato `TODO` in `src/content.js`.
- Altri maneggi della zona (es. Ranch O.K. Corral) sono attività diverse: non usarli come fonte.
- Prima della pubblicazione i `TODO` vanno compilati con informazioni vere dalla titolare. Se ti serve un dato mancante, chiedilo a Nicolò.

## Stack

- React 18 + Vite 5, JavaScript (niente TypeScript), CSS semplice in `src/index.css` (variabili CSS, nessun framework UI)
- Single page con navigazione per ancore, nessun router per ora
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
  index.css         stile globale e palette provvisoria
  components/       Header, Hero, About, CardSection, Gallery, Contact, Footer
public/images/      foto vere (da aggiungere)
```

## Requisito futuro: richieste e prenotazioni

Il sito oggi è una vetrina statica, ma **dovrà ricevere richieste di contatto e prenotazioni** (lezioni, passeggiate, prove, eventuali visite o ordini in azienda agricola: da confermare con la titolare).

- **Non scegliere il backend senza chiedere a Nicolò.** Opzioni da valutare insieme: Netlify Forms/Functions, Supabase, Firebase, o un servizio esterno (Calendly/Cal.com) incorporato.
- Tenere separati dati/invio e UI: quando serve, creare `src/services/` (es. `contact.js`, `bookings.js`) con funzioni che oggi possono essere finte e domani chiamano il backend vero.
- Le attività prenotabili (nome, durata, posti, prezzo, giorni/orari) vanno modellate come dati, non scritte nei componenti.
- Quando nascerà una pagina `/prenota`, valutare React Router; per ora basta la single page.
- Da pianificare: notifiche alla titolare (email e/o WhatsApp), conferma al cliente, disponibilità e annullamenti, antispam (honeypot/captcha).
- **GDPR**: raccogliere nome, email e telefono richiede informativa privacy, consenso esplicito nel form e cookie policy se ci sono strumenti di tracciamento. Non salvare più dati del necessario.
- Form mobile-friendly, con errori chiari in italiano e stati di caricamento/successo.

## Convenzioni

- Testi in **italiano**, tono caldo, semplice, concreto (niente marketing gonfiato).
- Contenuti in `src/content.js`, componenti generici.
- Mobile first: i visitatori arriveranno soprattutto da Instagram/telefono.
- Accessibilità di base: alt sulle immagini, contrasto sufficiente, navigazione da tastiera.
- Immagini: foto vere del ranch, prese dalla titolare o dai loro profili (Instagram, Google), ottimizzate (WebP/JPG, max ~1600px) in `public/images/`. Decisione di Nicolò. Niente foto stock spacciate per foto del ranch.
- Palette provvisoria in `src/index.css`: da rivedere con logo e colori reali.
- Codice semplice, commenti solo dove servono, nessuna dipendenza nuova senza motivo.

## Git

- Repo: `git@github.com:nicologiacometto11/la-dea-ranch.git` (privato), branch `main`, remote `origin` via SSH.
- Nicolò usa **Fork** per commit e push. Non fare `push` né operazioni distruttive (reset --hard, force push) senza chiedere.
- Commit piccoli, messaggi in italiano, all'imperativo (es. "Aggiungi form di contatto").

## Deploy (GitHub Pages)

- `.github/workflows/deploy.yml`: a ogni push su `main` (o a mano da Actions) fa `npm ci`, `npm run build` e pubblica `dist/` su Pages.
- `vite.config.js` ha `base: '/la-dea-ranch/'`. Con un dominio personalizzato va messo `'/'`.
- Per le immagini usare `import.meta.env.BASE_URL` (es. `` `${import.meta.env.BASE_URL}images/foto.webp` ``), non `/images/...`, altrimenti su Pages non si caricano.
- Da fare a mano una tantum: repo GitHub → Settings → Pages → Source = "GitHub Actions".
- Nessun router: se arriverà `/prenota` va gestito il refresh su Pages (HashRouter o 404.html di fallback).

## Manutenzione (DA FARE quando si aggiunge Supabase)

Backend scelto: **Supabase**, ma non è ancora integrato (deciso con Nicolò: prima il sito, il DB dopo). Quando si farà, replicare questa configurazione già usata in un altro progetto:

1. **Variabili nel build**: in `deploy.yml` passare a `npm run build` `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` dai secret del repo (Settings → Secrets and variables → Actions). `.env` è già in `.gitignore`: non deve mai finire su git.
2. **Ping a Supabase** (il piano gratuito mette in pausa il progetto dopo 7 giorni senza richieste):
   - `supabase/keepalive.sql`: funzione `public.ping()` che restituisce 1 (`create or replace`, `language sql stable security definer set search_path = public`), con `revoke all ... from public` e `grant execute ... to anon, authenticated`. Da eseguire a mano nell'SQL editor.
   - `.github/workflows/keepalive.yml`: cron `17 6 * * 1,4` (lunedì e giovedì) + `workflow_dispatch`. POST a `$URL/rest/v1/rpc/ping` con header `apikey` e `Content-Type: application/json`, body `{}`. Se manca un secret o la risposta non è 200 il job fallisce (così GitHub manda la mail).
3. **Tenere vivo il repo** (GitHub disattiva i workflow programmati dopo 60 giorni senza attività):
   - `.github/workflows/attivita-mensile.yml`: cron `23 5 1 * *` + `workflow_dispatch`, `permissions: contents: write`. Scrive la data in `.github/ultimo-controllo.txt`, commit come `github-actions[bot]` e push, solo se il file è cambiato.
   - Quel commit rifarebbe partire il deploy: aggiungere `paths-ignore: ['.github/ultimo-controllo.txt']` al trigger push di `deploy.yml`.
4. Dopo il primo push, controllare in Actions che deploy e ping vadano a buon fine (ping lanciabile a mano con "Run workflow").

## Prossimi passi (in ordine)

1. `npm install` e `npm run dev` per verificare che il sito parta.
2. Raccogliere dalla titolare: logo, foto, servizi, orari, contatti, link al profilo Instagram, Google Maps.
3. Compilare i `TODO` in `src/content.js` e rivedere la palette.
4. Form di contatto o pulsante WhatsApp: primo passo verso le prenotazioni.
5. SEO locale: meta description, Open Graph, dati strutturati `LocalBusiness`, scheda Google Business.
6. Sistema di prenotazione: prima definire con la titolare cosa si prenota e come gestisce le disponibilità, poi scegliere la tecnologia.
7. Deploy (Netlify o simile) e dominio.
