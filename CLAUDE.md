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

`#inizio` hero · striscia "In breve" (credenziali) · `#percorsi` · `#anna` "Chi sono" (verde scuro tra due curve) · `#primo-colloquio` (+ FAQ) ·
`#contatti` (sabbia) con `#modulo` · footer. Header sticky (min 80px) → ogni sezione e `#modulo` hanno `scroll-margin-top:96px`.
Breakpoint unico: `wide = innerWidth >= 960` (menu mobile `#menu-mobile` sotto).

## Design

Fonte unica delle decisioni: `design-system/anna-patanella/MASTER.md` (creato con la skill ui-ux-pro-max).

- Font: **Lora** (titoli, peso 500, corsivo 400 per gli accenti) + **Nunito Sans** (testo 17px/1.7), da Google Fonts.
- Colori **solo come token** CSS definiti su `:root` nel `<style>` globale (`var(--primary)`, `var(--sand)`…):
  non scrivere hex nuovi negli stili inline. Avorio `--bg #FAF7F1`, sabbia `--sand #F3EDE2`, verde `--primary #2F5446`,
  verde scuro `--deep #1F3A31`, accento argilla `--clay #9C4F35`, testo `--ink #22211C` / `--muted #5E594F`.
  Tutte le coppie testo/fondo sono ≥4.5:1. Ombre `--shadow-1` / `--shadow-2`, easing `--ease-out` / `--ease-fill`.
- Icone: sprite SVG (`<symbol id="i-…">`, tracciati Lucide) in cima a `<x-dc>`; si usano con
  `<svg …><use href="#i-nome"></use></svg>`. Mai emoji o frecce unicode come icone. Non mettere `{{ }}` dentro
  l'attributo `d` di un `<path>`: il browser legge il template grezzo e registra errori in console.
- Contenuti ripetuti (prove, percorsi, seduta, passaggi, contatti, FAQ) sono array nello script
  (`PROOFS`, `PATHS`, `SESSION`, `STEPS`, `CONTACTS`, `FAQS`) resi con `<sc-for>`: modifica i testi lì.
- Pulsanti a pillola (`border-radius:999px`) con freccia SVG ruotata e riempimento animato (`hover(k)`).
  Un solo CTA primario per schermata; su mobile i CTA dell'hero vanno a tutta larghezza.
- Animazioni: keyframes globali `apBreathe` (due aloni dentro l'hero, `overflow:hidden`), `apMorph` (contorno foto).
  Effetti JS agganciati ad attributi (funzioni sopra `Component`, avviate da `startMotionEffects()`, token in `MOTION`):
  `data-reveal="n"` comparsa allo scroll, `data-glow` alone + inclinazione (`--gx --gy --go --rx --ry --ty`),
  `data-magnet` pulsante magnetico (`--mx --my --ax --ay --fx`), `data-curve` curva tra sezioni (`--cs`).
  Gli effetti scrivono solo custom properties: non usare `transform` negli `style-hover` di questi elementi.
  Niente livelli enormi `position:fixed` animati: su iOS Safari diventano neri.
- Modulo: validazione al blur (solo campi compilati) e all'invio, messaggi sotto il campo con `aria-describedby`;
  invio disattivato finché `SUBMIT_ENABLED` è `false`.
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
