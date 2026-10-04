# Sicurezza

## Segnalare una vulnerabilità

Se trovi una vulnerabilità di sicurezza in questo progetto, non aprirla come issue pubblica.
Segnalala in via riservata scrivendo a: **annapatanellapsicologa@gmail.com**

Includi nella segnalazione:

- una descrizione del problema;
- i passi per riprodurlo;
- la versione/commit interessato;
- l'eventuale impatto stimato.

## Ambito

Questo progetto è un sito **statico**: non esegue codice server-side. I rischi principali riguardano:

- l'esposizione di dati personali nei contenuti o nelle immagini;
- il modulo contatti, che al momento è **simulato** e non invia dati a nessun servizio;
- dipendenze di terze parti (font, runtime) servite tramite CDN.

## Buone pratiche

- Non committare mai dati personali, chiavi o token nel repository.
- Prima di andare in produzione, sostituire il modulo finto con un servizio reale e aggiungere una
  informativa privacy conforme al GDPR.
