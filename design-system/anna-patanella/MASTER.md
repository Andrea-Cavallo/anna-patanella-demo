# Design system: Anna Patanella

Fonte unica delle decisioni visive. Creato con la skill `ui-ux-pro-max` (`.claude/skills/ui-ux-pro-max`).
Le pagine future possono avere override in `pages/<pagina>.md`.

## Come è stato scelto

| Ricerca della skill | Risultato | Decisione |
|---|---|---|
| `--design-system` "psychotherapist private practice calm trustworthy healthcare" | Neumorphism, ciano `#0891B2`, Atkinson Hyperlegible | Scartato: palette da app sanitaria, non adatta a uno studio di psicoterapia. Tenuto: niente neon, niente gradienti viola, movimento non invadente. |
| `--domain product` "mental health therapist counseling" | Neumorphism + Accessible & Ethical; Soft UI Evolution | **Soft UI Evolution**: ombre morbide multilivello, contrasto misurato, focus visibile. |
| `--domain style` "soft ui evolution" | Ombre più chiare del neumorfismo, animazioni 200-300ms | Applicato a schede, pulsanti, modulo. |
| `--domain typography` | "Wellness Calm" (Lora + Raleway), "Soft Rounded" (… + Nunito Sans) | **Lora** per i titoli, **Nunito Sans** per il testo (Raleway è meno leggibile nei paragrafi lunghi). |
| `--domain color` | Solo palette generiche (ciano, lavanda, terracotta) | Nessuna adatta: tenuti avorio e verde del brand, aggiunto un accento **argilla** (ispirato a "warm terracotta + fresh green"). |
| `--domain landing` "storytelling trust personal service" | Trust & Authority: Hero > Prove > Soluzione > CTA | Struttura della pagina. Niente testimonianze: per una psicoterapeuta non sono opportune. |

## Token

| Ruolo | Token | Valore | Contrasto |
|---|---|---|---|
| Fondo | `--bg` | `#FAF7F1` | |
| Superficie | `--surface` | `#FFFFFF` | |
| Sabbia | `--sand` | `#F3EDE2` | |
| Bordo / forte | `--line` / `--line-strong` | `#E6DDCC` / `#D6CAB4` | |
| Testo | `--ink` | `#22211C` | 15.1:1 su `--bg` |
| Testo secondario | `--muted` | `#5E594F` | 6.5:1 su `--bg`, 6.0:1 su `--sand` |
| Primario | `--primary` / hover | `#2F5446` / `#24443A` | 7.9:1 su `--bg`, bianco sopra 8.5:1 |
| Primario tenue | `--primary-soft` | `#E3ECE4` | |
| Accento | `--clay` / tenue | `#9C4F35` / `#F2E3D8` | 5.0:1 su `--sand` |
| Verde scuro | `--deep` | `#1F3A31` | `--on-deep` 10.7:1, `--on-deep-muted` 8.3:1 |
| Footer | `--night` | `#22211C` | `--on-night-muted` 6.0:1 |
| Errore | `--error` | `#9A3B26` | 6.9:1 su bianco |

Ombre: `--shadow-1` (riposo), `--shadow-2` (sollevato). Raggi: 12px (campi), 16-20px (icone, schede piccole),
24-28px (schede), 999px (pulsanti). Spaziature fluide: `--gutter`, `--section-y`.

## Tipografia

- Titoli: Lora 500, `letter-spacing:-0.02em`, accento in corsivo 400 colore `--primary`.
- H1 `clamp(42px,5.4vw,72px)`, H2 `clamp(32px,4.4vw,52px)`, H3 24-34px.
- Testo: Nunito Sans 400, 17px, interlinea 1.7. Etichette 600-700.
- Occhielli: 14px, maiuscolo, `letter-spacing:0.12em`, colore `--clay`.

## Movimento

- Solo `transform` e `opacity`. Tutto spento con `prefers-reduced-motion`.
- Comparsa allo scroll: 520ms, 16px, stagger 50ms (skill: 30-50ms per elemento).
- Hover: 200-300ms. Pulsanti magnetici al massimo 6px, freccia 10px. Inclinazione schede al massimo 2.5°.
- Ritratto: contorno organico (`apMorph`, 16-19s). Aloni dell'hero (`apBreathe`, 16-21s), contenuti nell'hero.

## Checklist prima della consegna (dalla skill)

- [x] Nessuna emoji o freccia unicode come icona: sprite SVG Lucide.
- [x] `cursor:pointer` sugli elementi cliccabili, `not-allowed` sul pulsante disattivato.
- [x] Hover con transizioni morbide (150-300ms).
- [x] Contrasto testo ≥4.5:1 (tabella sopra).
- [x] Focus visibile da tastiera (`:focus-visible`).
- [x] `prefers-reduced-motion` rispettato.
- [x] Responsive verificato a 375, 768, 1440px, senza scroll orizzontale.
