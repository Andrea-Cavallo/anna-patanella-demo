# Changelog

Tutte le modifiche rilevanti al progetto sono documentate in questo file.

Il formato segue [Keep a Changelog](https://keepachangelog.com/it/1.1.0/) e il progetto aderisce a
[Semantic Versioning](https://semver.org/lang/it/).

## [Non pubblicato]

### Aggiunto

- Sito one-page completo in italiano (`Anna Patanella - Sito.dc.html`).
- Sezioni: hero, percorsi, chi sono, primo colloquio con FAQ, contatti con modulo e footer.
- Menu mobile e header sticky.
- Foto hero (`assets/anna-patanella.jpg`).
- Documentazione di progetto (README, LICENSE, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT, TODO).
- `.gitignore` per escludere file generati e contenuti caricati.
- Animazioni leggere (disattivate con `prefers-reduced-motion`): sfondo salvia che "respira", contorno
  organico animato della foto, comparsa progressiva allo scroll, schede con alone e lieve inclinazione,
  curve fluide attorno alla sezione verde scura, pulsanti magnetici.

### Cambiato

- Nuovo design completo, definito con la skill ui-ux-pro-max (`design-system/anna-patanella/MASTER.md`):
  font Lora + Nunito Sans, colori come token CSS, accento argilla, icone SVG al posto dei simboli unicode,
  striscia di credenziali sotto l'hero, contatti come schede tappabili, sezione "Chi sono" tra due curve.
- Modulo: validazione al blur, messaggi d'errore più chiari, pulsante disattivato con stato visibile.
- Movimento più sobrio: comparse brevi (520ms, stagger 50ms), aloni dell'hero compatibili con iOS.

### Da completare

- Modulo contatti: attualmente simulato, serve un backend/servizio (es. Formspree) e informativa privacy reale.
- FAQ: inserire tariffe e indirizzo dello studio.

## [1.0.0]

- Prima versione del sito.
