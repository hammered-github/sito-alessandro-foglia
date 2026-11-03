# sito-alessandro-foglia

Sito vetrina di **AF Termoimpianti srl di Foglia Alessandro**: impianti termoidraulici civili e industriali, Milano.

Sito statico a pagina singola (HTML + CSS + JS, nessuna build). Per vederlo basta aprire `index.html` nel browser. Si può pubblicare su qualsiasi hosting statico (Netlify, Vercel, GitHub Pages).

## Struttura

- `index.html`: contenuti (Servizi, Lavori, Azienda, Contatti)
- `styles.css`: stile
- `script.js`: menu mobile, ingrandimento delle foto della galleria, anno nel footer
- `assets/img/`: foto dei lavori (versioni `.webp` e `.jpg`) e logo

## Aggiungere una foto alla galleria

1. Salvare la foto in `assets/img/` (lato lungo di circa 1200 px, formato `.jpg`).
2. In `index.html`, sezione `#lavori`, copiare uno degli elementi `<li>` e cambiare il nome del file, il testo `alt` e la didascalia.

## Da completare

- [ ] P.IVA nel footer (obbligatoria per una società)
- [ ] Email e WhatsApp (facoltativi)
- [ ] Dominio, `og:image` con URL assoluto e informativa privacy/cookie (la mappa di Google Maps imposta cookie di terze parti)
