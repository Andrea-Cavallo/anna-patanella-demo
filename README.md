# Sito Anna Patanella — Psicologa e psicoterapeuta (Roma e online)

Sito one-page, in italiano, per Anna Patanella, psicologa e psicoterapeuta.
Argomenti trattati: ansia e stress, difficoltà relazionali, cambiamenti e lutto — Psicoterapia Funzionale.

Non ci sono build, package manager o dipendenze da installare: è un singolo file HTML servito da un
runtime generato.

## Requisiti

- Un browser moderno (Chrome, Firefox, Safari, Edge).
- Nessun server: basta aprire il file HTML in locale.

## Avvio rapido

Apri `Anna Patanella - Sito.dc.html` nel browser (il file `support.js` deve restare accanto, nella
stessa cartella). In alternativa servi la cartella con un server statico:

```bash
npx serve .
```

## Struttura del progetto

| File / cartella | Descrizione |
| --- | --- |
| `Anna Patanella - Sito.dc.html` | **L'unico file da modificare.** Markup + stile + logica. |
| `support.js` | Runtime `dc-runtime` generato. **Non modificare.** |
| `assets/anna-patanella.jpg` | Foto hero (900×1125, 4:5). |
| `uploads/` | Materiale caricato, non referenziato dalla pagina (ignorato da git). |
| `.thumbnail` | Anteprima generata dal tool, ignorata. |

## Formato `.dc.html`

Il contenuto vive dentro `<x-dc>`: il `<helmet>` raccoglie title, meta, font e `<style>` globale.
Template con binding `{{ expr }}`, direttive `sc-if` / `sc-for`, stati `style-hover` / `style-focus`
ed eventi camelCase React (`onClick`, `onSubmit`, …). Le props editabili sono dichiarate in
`data-props` (JSON). Lo stile è **inline** su ogni elemento: segui il pattern esistente.

Per i dettagli tecnici consulta `CLAUDE.md`.

## Contatti

| Canale | Valore |
| --- | --- |
| Telefono / WhatsApp | [`+39 392 503 5002`](tel:+393925035002) — [`wa.me/393925035002`](https://wa.me/393925035002) |
| Email | [`annapatanellapsicologa@gmail.com`](mailto:annapatanellapsicologa@gmail.com) |

## Anteprima

Verificare a **375px** e **≥960px** (breakpoint unico del progetto).

## Stato del progetto

Vedi `TODO.md` per l'elenco delle attività rimaste (modulo contatti finto, FAQ con tariffe e indirizzo
dello studio, informativa privacy).

## Licenza

Tutti i diritti riservati — vedi `LICENSE`.
