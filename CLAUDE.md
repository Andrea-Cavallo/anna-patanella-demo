# Sito Anna Patanella — Psicologa e psicoterapeuta (Roma e online)

Sito one-page, in italiano. Nessun build, nessun package manager. Git per il versionamento.

## File

- `Anna Patanella - Sito.dc.html` — **l'unico file da modificare.** Markup + stile + logica.
- `support.js` — runtime `dc-runtime` generato. **Non modificare** (header: "GENERATED … do not edit").
- `assets/anna-patanella.jpg` — foto hero (900×1125, 4:5) + `anna-patanella-450.webp` / `-900.webp` per `srcset`.
- `index.html` — redirect alla pagina (per GitHub Pages); `.nojekyll` evita il processing Jekyll.
- `robots.txt`, `sitemap.xml` — SEO, dominio `https://annapatanellapsicologa.it/`. In produzione l'HTML va servito
  come `index.html` alla radice (canonical e sitemap puntano a `/`).
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
`#contatti` con `#modulo` · footer. Header sticky (min 80px) → ogni sezione e `#modulo` hanno `scroll-margin-top:96px`.
Breakpoint unico: `wide = innerWidth >= 960` (menu mobile `#menu-mobile` sotto).

## Design

- Font: **Newsreader** (titoli, peso 300) + **Hanken Grotesk** (testo 17px/1.65), da Google Fonts.
- Palette (avorio + verde): fondo `#FAF7F1`, testo `#24231E`, verde `#315D50` / hover `#426B5B` / scuro `#203F36`,
  superfici sabbia `#F5F0E7` `#F3EDE2` `#EFE8DC`, bordi `#E6DDCC` `#D6CAB4`, secondario `#5A625B` `#6B665A`,
  footer `#24231E`, errore `#9A3B26`. Niente livelli enormi/fixed animati: su iOS Safari diventano neri.
- Pulsanti a pillola (`border-radius:999px`) con freccia → ruotata e riempimento animato (`hover(k)`).
- Animazioni: keyframes globali `apBreathe` (sfondo fisso), `apMorph` (contorno foto). Effetti JS agganciati
  ad attributi (funzioni sopra `Component`, avviate da `startMotionEffects()`): `data-reveal="n"` comparsa
  allo scroll (n = ritardo a gradini), `data-glow` alone + inclinazione (`--gx --gy --go --rx --ry --ty`),
  `data-magnet` pulsante magnetico (`--mx --my --ax --ay --fx`), `data-curve` curva tra sezioni (`--cs`).
  Gli effetti scrivono solo custom properties: non usare `transform` negli `style-hover` di questi elementi.
- Target touch ≥44px: per link testuali usa `display:inline-flex;align-items:center;min-height:44px;margin:-11px 0`
  (area più grande, layout invariato).
- SEO statica nel `<head>` reale (fuori da `<x-dc>`): canonical, Open Graph, JSON-LD `Person` + `MedicalBusiness`.
  Se cambi contatti/dati, aggiorna anche il JSON-LD.
- Mantieni: `lang="it"`, `prefers-reduced-motion`, skip link "Vai al contenuto", `:focus-visible`, `aria-*` su menu/FAQ/modulo.
- Tono dei testi: caldo, sobrio, seconda persona singolare ("tu").

## Contatti (usati in più punti — aggiornali tutti)

Tel/WhatsApp `+39 392 503 5002` (`tel:+393925035002`, `wa.me/393925035002`) ·
email `annapatanellapsicologa@gmail.com` · Albo Lazio n. 22416 · P. IVA 16124471000.
Compaiono in: header/hero CTA, `#contatti`, footer, JSON-LD nel `<head>`.

## Da completare

Lista completa con checkbox in `TODO.md` — spunta le voci man mano che le chiudi.

- **Modulo contatti finto:** `submit` valida e poi simula l'invio con `setTimeout` (esito da prop
  `formOutcome`). Per andare live serve un backend/servizio (es. Formspree) + informativa privacy reale.
- FAQ con campo `missing`: mancano **tariffe** e **indirizzo dello studio**.

## Skill UI/UX

`.claude/skills/ui-ux-pro-max/` (da nextlevelbuilder/ui-ux-pro-max-skill, MIT, senza test). Usala per ogni modifica
visiva o di interazione. Lo `SKILL.md` cita `${CLAUDE_PLUGIN_ROOT}`: qui lancia invece
`python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <ux|style|color|typography|…>`
dalla radice del repo. Stack del sito: HTML statico con stile inline (nessun framework CSS).

## Anteprima

Servire la cartella (`python -m http.server`) e aprire l'HTML; serve `support.js` accanto. Verificare a 375px e ≥960px
(Chrome su Windows non scende sotto ~580px: testare 375 dentro un `<iframe>` largo 375).
