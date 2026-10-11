# Librerie, componenti e licenze

Cataloghi consultati l'11 ottobre 2026 prima della composizione. Non sono cinque pacchetti npm da installare insieme: distribuiscono anche sorgenti e componenti a pagamento.

| Catalogo                                                              | Decisione                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Skecher UI](https://skecher-ui.com/docs)                             | Valutati Streaming Text e Scroll Reveal Text. Evitato scroll bloccato e motion del testo essenziale. Sorgente non incluso: la licenza del repository consultato non era esplicita.                                                                              |
| [Space UI](https://www.spaceui.one/components/bouncy-accordion)       | Bouncy Accordion documentato MIT; endpoint ufficiale del sorgente restituiva HTTP 522. Nessun componente copiato dichiarato come installato. Le FAQ usano direttamente Base UI secondo l'anatomia pubblica dell'Accordion Space UI, con CSS originale del sito. |
| [Componentry](https://componentry.dev/docs/components/annotated-text) | Annotated Text realmente integrato nella hero: SVG generato, nessun canvas/WebGL, riduzione movimento e comparsa una sola volta.                                                                                                                                |
| [Arc UI](https://uiarc.dev/)                                          | Valutata la navigazione: per quattro ancore non serve aggiungere dock o tabs. Nessun componente Pro utilizzato.                                                                                                                                                 |
| [Planes](https://useplanes.com/)                                      | Valutati Photo Stack e gallery; non utili con un unico ritratto e nessun portfolio. Nessun componente a pagamento copiato.                                                                                                                                      |

## Componentry Annotated Text

Sorgente ufficiale: https://componentry.dev/r/annotated-text.json
Repository: https://github.com/harshjdhv/componentry
File locale: `src/components/annotated-text.tsx`.
Licenza MIT integrale: `src/components/COMPONENTRY-LICENSE.txt`.

Adattamenti: helper cn locale per concatenare le classi; CSS del sito per wrapper/SVG della variante underline, senza introdurre Tailwind. Il titolo resta testo semantico leggibile; il segno è aria-hidden. Rispetto nativo di prefers-reduced-motion e cleanup di animazioni/IntersectionObserver conservati.

## Dipendenze effettive

React/React DOM, Motion, Base UI e Lucide: MIT (vedere LICENSE delle dipendenze in node_modules). Vite: MIT. Newsreader e DM Sans: distribuiti tramite Google Fonts, SIL Open Font License. Nessuna licenza Pro acquistata o presunta.
