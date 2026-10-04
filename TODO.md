# TODO

> Non rimandare a domani ciò che puoi fare oggi.

Elenco delle attività rimaste per completare il sito.

## Da completare

- [ ] **Modulo contatti** — sostituire il modulo finto con un servizio reale (es. Formspree) e
      collegare l'invio; aggiungere informativa privacy conforme al GDPR.
- [ ] **FAQ** — inserire le tariffe (campo `missing`).
- [ ] **FAQ** — inserire l'indirizzo dello studio (campo `missing`).
- [ ] **Contatti** — verificare che telefono/WhatsApp ed email siano aggiornati in tutti i punti.

## Verifiche prima della pubblicazione

- [ ] Controllare il rendering a 375px e ≥960px.
- [ ] Verificare accessibilità: skip link, `:focus-visible`, `prefers-reduced-motion`, attributi `aria-*`.
- [ ] Verificare che `support.js` resti accanto all'HTML.

## SEO

- [ ] **Google Search Console** — collegare subito il sito, inviare la sitemap XML e verificare ogni
      pagina importante con "Controllo URL"; dopo modifiche rilevanti, richiedere una nuova scansione
      (l'indicizzazione può richiedere alcuni giorni).
- [ ] **Sitemap XML** — creare una sitemap pulita con solo URL reali, canonici, pubblici e
      indicizzabili (es. `/`, `/chi-sono`, `/psicologa-roma`, `/psicoterapia-roma`, `/ansia`,
      `/attacchi-di-panico`, `/contatti`).
- [ ] **robots.txt e noindex** — verificare che nessuna pagina importante contenga `noindex` o sia
      bloccata erroneamente (errore molto comune che impedisce l'indicizzazione).
- [ ] **Una pagina per intento di ricerca** — creare pagine distinte per ogni servizio realmente
      offerto (es. "Psicologa a Roma", "Psicoterapia per ansia a Roma", "Attacchi di panico",
      "Terapia di coppia"), ciascuna con contenuto originale e utile, evitando una homepage che parla
      di tutto.
- [ ] **Title, H1 e URL puliti** — usare title descrittivi (es. `Psicologa a Roma | Nome Cognome`),
      H1 coerenti (es. "Psicologa e Psicoterapeuta a Roma") e URL leggibili (`/psicologa-roma`),
      senza keyword stuffing.
- [ ] **Link interni strategici** — collegare tra loro le pagine importanti (es. dalla pagina
      sull'ansia a "psicoterapia a Roma", "attacchi di panico" e "contatti"); evitare pagine isolate
      raggiungibili solo dalla sitemap.
- [ ] **Canonical e contenuti duplicati** — evitare duplicati e indicare l'URL principale con
      `rel="canonical"` quando la stessa pagina esiste sotto URL diversi.
- [ ] **Dati strutturati Schema.org** — inserire `Person` e/o `LocalBusiness` (o schema più specifico
      compatibile con l'attività) per aiutare Google a comprendere il contenuto.
- [ ] **Performance e mobile-first** — ottimizzare le immagini (WebP/AVIF), usare lazy loading,
      ridurre il JavaScript inutile e controllare le Core Web Vitals.
- [ ] **SEO locale** — creare e completare Google Business Profile; mantenere coerenti nome, telefono,
      indirizzo e informazioni professionali; aggiungere una pagina dedicata alla zona servita con
      contenuti realmente locali (es. "Psicologa a Roma EUR", "Psicoterapeuta Roma Sud") solo se
      corrispondono all'attività.
- [ ] **Credibilità (E-E-A-T, salute)** — mostrare chiaramente chi scrive i contenuti: nome e cognome,
      qualifiche, iscrizione all'Ordine, pagina "Chi sono", contatti, fonti per gli articoli e date di
      aggiornamento.

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
