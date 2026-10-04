# TODO

> Non rimandare a domani ciò che puoi fare oggi.

Elenco delle attività rimaste per completare il sito.

## Da completare

- [ ] **Modulo contatti** — sostituire il modulo finto con un servizio reale (es. Formspree) e
      collegare l'invio; aggiungere informativa privacy conforme al GDPR.
- [ ] **FAQ** — inserire le tariffe (campo `missing`).
- [ ] **FAQ** — inserire l'indirizzo dello studio (campo `missing`).
- [x] **Contatti** — verificare che telefono/WhatsApp ed email siano aggiornati in tutti i punti.
      _Verificato 04/10: tel, WhatsApp, email coerenti in hero, contatti, footer e JSON-LD._

## Verifiche prima della pubblicazione

- [x] Controllare il rendering a 375px e ≥960px.
      _Verificato a 375, 640, 960, 1280, 1440: nessun overflow, menu desktop da 960._
- [x] Verificare accessibilità: skip link, `:focus-visible`, `prefers-reduced-motion`, attributi `aria-*`.
      _OK skip link, focus-visible, reduced-motion, aria; aggiunto `lang="it"`._
- [x] Verificare che `support.js` resti accanto all'HTML.
      _Caricato con path relativo `./support.js`: in deploy va nella stessa cartella._

## Mobile-first & Responsive

L'obiettivo: **bellissimo da vedere sul telefono**, super responsive e fluido. Prima il mobile, poi il
desktop.

- [x] **Approccio mobile-first** — progettare e verificare prima a 375px, poi scalare verso il desktop;
      il mobile non deve essere un "restringimento" della versione desktop.
- [x] **Fluidità (no layout rigido)** — niente larghezze fisse in px: usare `%`, `max-width`, `min()`,
      `clamp()` e unità fluide così ogni sezione si adatta senza punti di rottura bruschi.
- [x] **Tipografia fluida** — dimensioni dei titoli e del testo con `clamp()` (es. `font-size:
      clamp(2rem, 5vw, 3.5rem)`) perché la gerarchia resti bella a ogni larghezza.
- [x] **Spaziature fluide** — padding/margini con `clamp()` o `rem`, mai valori rigidi che "scoppiano"
      su schermi piccoli.
- [x] **Nessuno scroll orizzontale** — verificare che a 375px non compaia mai la barra orizzontale
      (`overflow-x` indesiderato, elementi più larghi del viewport).
      _Verificato da 375 a 1440px._
- [x] **Testo leggibile senza zoom** — corpo ≥16px su mobile (evita lo zoom automatico di iOS sui
      campi del modulo); niente `user-scalable=no` (non bloccare il pinch-to-zoom).
      _Input a 17px, nessun `user-scalable=no`._
- [x] **Target touch comodi** — ogni elemento toccabile (link, pulsanti, voci del menu, FAQ) ≥44×44px
      e con spazio sufficiente tra loro.
      _Logo, link delle card, contatti e footer portati a ≥44px; restano più bassi solo i link dentro il testo (eccezione WCAG 2.5.8)._
- [x] **CTA e contatti a portata di pollice** — i pulsanti principali (telefono, WhatsApp, modulo)
      grandi, a tutta larghezza quando serve e raggiungibili senza sforzo.
      _CTA dell'hero a tutta larghezza su mobile (60px), contatti come schede tappabili da 64px._
- [x] **Header sticky non invasivo** — su mobile il menu non copre i titoli; verificare
      `scroll-margin-top` su tutte le ancore e che il menu mobile sia fluido e accessibile.
      _`scroll-margin-top:96px` su tutte le sezioni e su `#modulo`._
- [x] **Immagini responsive** — `max-width:100%`, `height:auto`, `aspect-ratio` per evitare salti di
      layout (CLS); dove possibile `srcset`/`sizes` e formati WebP/AVIF.
      _`aspect-ratio`, `width/height`, `srcset` WebP 450/900w (fallback JPG), preload con `imagesrcset`._
- [x] **Modulo ottimizzato mobile** — campi a tutta larghezza, `font-size` ≥16px sugli input, layout
      in colonna, messaggi di errore visibili vicino al campo.
      _Input 52px a 17px, errori sotto il campo con `aria-describedby`, validazione al blur._
- [x] **Animazioni fluide e leggere** — transizioni morbide, rispettando `prefers-reduced-motion`;
      niente micro-jank o scatti durante lo scroll.
      _Solo `transform`/`opacity`, eventi throttled con `requestAnimationFrame`, effetti mouse solo con puntatore `mouse`; tutto spento con reduced motion._
- [x] **Breakpoint intermedi** — oggi c'è un solo breakpoint a 960px: valutare un punto intermedio
      (es. ~640px) per tablet e telefoni grandi.
      _Valutato: a 640px il layout fluido regge, per ora non serve un secondo breakpoint._
- [ ] **Test su device reali** — provare su iPhone e Android a 360/375/390/414px, tablet 768px e
      desktop ≥960px; usare DevTools e Lighthouse (mobile).

## SEO

- [ ] **Google Search Console** — collegare subito il sito, inviare la sitemap XML e verificare ogni
      pagina importante con "Controllo URL"; dopo modifiche rilevanti, richiedere una nuova scansione
      (l'indicizzazione può richiedere alcuni giorni).
- [x] **Sitemap XML** — creare una sitemap pulita con solo URL reali, canonici, pubblici e
      indicizzabili (es. `/`, `/chi-sono`, `/psicologa-roma`, `/psicoterapia-roma`, `/ansia`,
      `/attacchi-di-panico`, `/contatti`).
      _Creata `sitemap.xml` con la sola `/` (sito one-page); da ampliare se si creano altre pagine._
- [x] **robots.txt e noindex** — verificare che nessuna pagina importante contenga `noindex` o sia
      bloccata erroneamente (errore molto comune che impedisce l'indicizzazione).
      _Creato `robots.txt` (Allow + Sitemap); nessun `noindex` nella pagina._
- [ ] **Una pagina per intento di ricerca** — creare pagine distinte per ogni servizio realmente
      offerto (es. "Psicologa a Roma", "Psicoterapia per ansia a Roma", "Attacchi di panico",
      "Terapia di coppia"), ciascuna con contenuto originale e utile, evitando una homepage che parla
      di tutto.
- [ ] **Title, H1 e URL puliti** — usare title descrittivi (es. `Psicologa a Roma | Nome Cognome`),
      H1 coerenti (es. "Psicologa e Psicoterapeuta a Roma") e URL leggibili (`/psicologa-roma`),
      senza keyword stuffing.
      _Title OK. L'H1 è "Uno spazio per te.": valutare di inserirvi "Psicologa e psicoterapeuta a Roma"._
- [ ] **Link interni strategici** — collegare tra loro le pagine importanti (es. dalla pagina
      sull'ansia a "psicoterapia a Roma", "attacchi di panico" e "contatti"); evitare pagine isolate
      raggiungibili solo dalla sitemap.
- [x] **Canonical e contenuti duplicati** — evitare duplicati e indicare l'URL principale con
      `rel="canonical"` quando la stessa pagina esiste sotto URL diversi.
      _Canonical `https://annapatanellapsicologa.it/`: in produzione servire l'HTML come `index.html`._
- [x] **Dati strutturati Schema.org** — inserire `Person` e/o `LocalBusiness` (o schema più specifico
      compatibile con l'attività) per aiutare Google a comprendere il contenuto.
      _JSON-LD `Person` + `MedicalBusiness` nel `<head>` (aggiungere `streetAddress` quando c'è l'indirizzo)._
- [ ] **Performance e mobile-first** — ottimizzare le immagini (WebP/AVIF), usare lazy loading,
      ridurre il JavaScript inutile e controllare le Core Web Vitals.
- [ ] **SEO locale** — creare e completare Google Business Profile; mantenere coerenti nome, telefono,
      indirizzo e informazioni professionali; aggiungere una pagina dedicata alla zona servita con
      contenuti realmente locali (es. "Psicologa a Roma EUR", "Psicoterapeuta Roma Sud") solo se
      corrispondono all'attività.
- [x] **Credibilità (E-E-A-T, salute)** — mostrare chiaramente chi scrive i contenuti: nome e cognome,
      qualifiche, iscrizione all'Ordine, pagina "Chi sono", contatti, fonti per gli articoli e date di
      aggiornamento.
      _Nome, qualifica, Albo Lazio n. 22416, P. IVA e contatti sono in pagina; fonti e date da aggiungere quando ci saranno articoli._

## Struttura SEO proposta

```text
/
├── chi-sono
├── psicologa-roma
├── psicoterapia
│   ├── ansia
│   ├── attacchi-di-panico
│   ├── autostima
│   └── relazioni
├── consulenza-online
├── articoli
└── contatti
```
