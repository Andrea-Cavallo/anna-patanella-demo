# Sito Anna Patanella — Psicologa e psicoterapeuta (Roma e online)

Sito one-page, in italiano. Nessun build, nessun package manager. Git per il versionamento.

## File

- `Anna Patanella - Sito.dc.html` — **l'unico file da modificare.** Markup + stile + logica.
- `support.js` — runtime `dc-runtime` generato. **Non modificare** (header: "GENERATED … do not edit").
- `assets/anna-patanella.jpg` — foto hero (900×1125, 4:5).
- `uploads/` — materiale caricato, non referenziato dalla pagina.
- `.thumbnail` — anteprima generata, ignorare.

## Formato `.dc.html` (dc-runtime)

- Tutto il contenuto sta dentro `<x-dc>`; `<helmet>` contiene title, meta, font, `<style>` globale.
- Template con binding `{{ expr }}` presi da `renderVals()` della classe `Component extends DCLogic`
  nello `<script type="text/x-dc" data-dc-script>` in fondo al file.
- Direttive: `<sc-if value="{{ x }}">`, `<sc-for>`, attributi `style-hover="…"` / `style-focus="…"`
  per gli stati (al posto di CSS con pseudo-classi). `hint-placeholder-val` = valore usato in anteprima.
- Eventi in camelCase React (`onClick`, `onSubmit`, `onMouseEnter`).
- Props editabili dichiarate in `data-props` (JSON con entità `&quot;`), es. `formOutcome`.
- Stile **inline** su ogni elemento: segui il pattern esistente, non introdurre classi/fogli esterni.

## Struttura pagina (ancore)

`#inizio` hero · `#percorsi` · `#anna` (sfondo verde scuro) · `#primo-colloquio` (+ FAQ) ·
`#contatti` con `#modulo` · footer. Header sticky 72px → ogni sezione ha `scroll-margin-top:72px`.
Breakpoint unico: `wide = innerWidth >= 960` (menu mobile `#menu-mobile` sotto).

## Design

- Font: **Newsreader** (titoli, peso 300) + **Hanken Grotesk** (testo 17px/1.65), da Google Fonts.
- Palette: fondo `#FAF7F1`, testo `#24231E`, verde `#3E4C3A` / scuro `#2F3A2C`, sabbia `#EFE8DC` `#E9E0D0`,
  bordi `#D6CAB4` `#EAE2D4`, secondario `#6B665A`, errore `#B4533C`.
- Pulsanti a pillola (`border-radius:999px`) con freccia → ruotata e riempimento animato (`hover(k)`).
- Mantieni: `prefers-reduced-motion`, skip link "Vai al contenuto", `:focus-visible`, `aria-*` su menu/FAQ/modulo.
- Tono dei testi: caldo, sobrio, seconda persona singolare ("tu").

## Contatti (usati in più punti — aggiornali tutti)

Tel/WhatsApp `+39 392 503 5002` (`tel:+393925035002`, `wa.me/393925035002`) ·
email `annapatanellapsicologa@gmail.com`.

## Da completare

Lista completa con checkbox in `TODO.md` — spunta le voci man mano che le chiudi.

- **Modulo contatti finto:** `submit` valida e poi simula l'invio con `setTimeout` (esito da prop
  `formOutcome`). Per andare live serve un backend/servizio (es. Formspree) + informativa privacy reale.
- FAQ con campo `missing`: mancano **tariffe** e **indirizzo dello studio**.

## Anteprima

Aprire l'HTML nel browser (serve `support.js` accanto). Verificare a 375px e ≥960px.
