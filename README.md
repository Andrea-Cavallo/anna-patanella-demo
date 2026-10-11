# Anna Patanella — sito React

Ricostruzione locale in React 19 e Vite 8, con Motion, Base UI e Lucide. Design editoriale avorio/verde, fotografia WebP responsive, navigazione mobile e FAQ accessibili.

## Avvio

```sh
npm install
npm run dev
```

Aprire l'indirizzo mostrato da Vite. Per la produzione:

```sh
npm run build
npm run preview
```

Pubblicare il contenuto di `dist/`, non i sorgenti. La build copia anche robots.txt, sitemap.xml e la fotografia usata nei metadati social. Il dominio canonical è quello già presente nel sito: verificare la configurazione effettiva quando si pubblica.

## File

- `src/main.jsx`: contenuti, navigazione, FAQ, contatti.
- `src/styles.css`: design condiviso, responsive, focus e reduced motion.
- `src/components/annotated-text.tsx`: componente Componentry MIT adattato al CSS locale.
- `vite.config.js`: build statica e copia dei file SEO.
- `THIRD_PARTY_NOTICES.md`: fonti, licenze e valutazione dei cinque cataloghi.
- `VERIFICATION.md`: verifiche e limiti della consegna.

La versione precedente in `Anna Patanella - Sito.dc.html` e `support.js` è conservata. Le modifiche già presenti in quel file e in TODO.md non sono state sovrascritte.

## Contatti e dati

Telefono/WhatsApp: +39 392 503 5002. Email: annapatanellapsicologa@gmail.com. Albo Psicologi Lazio n. 22416. P. IVA 16124471000. Dati ripresi dal sito precedente.

Non è presente un modulo che simula l'invio: i canali di contatto sono telefono, email e WhatsApp. Tariffe e indirizzo esatto non sono stati inventati. Il link privacy preesistente è conservato, ma l'informativa richiede verifica prima della pubblicazione. I font Google sono caricati da Google Fonts; se si desidera eliminare questa richiesta esterna, vanno distribuiti localmente.
