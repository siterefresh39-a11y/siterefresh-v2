# SiteRefresh · sito web

Sito statico (HTML, CSS e JavaScript). Non serve nessuna installazione e nessuna build: basta caricare i file.

```
index.html            struttura e testi
style.css             grafica e layout (telefono e computer)
main.js               animazioni, menu, demo, modulo contatti
404.html              pagina "non trovata" in stile 2009
privacy.html          informativa privacy (completa, da riempire solo i 4 dati del titolare)
og-image.png          anteprima quando il link viene condiviso
favicon.svg, apple-touch-icon.png   icone
robots.txt, sitemap.xml             per Google
CNAME, .nojekyll      per GitHub Pages (non cancellarli)
img/                  illustrazioni degli esempi (pane, progetti, galleria)
fonts/                font ospitati nel sito, con le licenze
vendor/               librerie delle animazioni (GSAP, ScrollTrigger, Lenis)
```

Font e librerie sono dentro il sito: nessuna richiesta a Google Fonts o a CDN esterni, quindi nessun dato dei visitatori passa a terzi per caricarli.

## Prima di pubblicare

1. **Contatti**: il modulo invia le richieste a uno script Google (file `Codice.gs`, consegnato a parte) che le inoltra alle vostre email. Le email stanno solo nello script, non nel codice del sito. Le istruzioni per attivarlo sono nel manuale, sezione "Collega il modulo alle vostre email". Poi incollate l'indirizzo dello script (finisce con `/exec`) in `formEndpoint`, in cima a `main.js`.
   - `email` e `whatsapp` in `main.js` sono facoltativi e pubblici: lasciateli vuoti per tenere i contatti nascosti.
   - Non caricate `Codice.gs` su GitHub.
2. **Progetti**: le tre card della sezione Progetti (Trattoria da Nino, Studio Ferri, Palestra Kore) sono esempi inventati, segnati come "Progetto di esempio". Sostituiscile con i vostri lavori veri quando li avete.
3. **FAQ e testi**: rileggi le risposte delle FAQ e i servizi, e correggi quello che non corrisponde a come lavorate.
4. **Prezzi**: il sito dice che costate circa la metà di un freelancer. È un confronto pubblicitario: assicuratevi che sia vero per i vostri prezzi reali e di poterlo dimostrare (in Italia la pubblicità comparativa deve essere verificabile). Il testo è in `index.html`, sezione Prezzi, nella FAQ e in alcuni bottoni.
5. **Privacy**: `privacy.html` è già scritta (nessun cookie, nessuna statistica) e collegata al modulo e al footer. Nella sezione "Chi è il titolare" compilate le 4 voci evidenziate in giallo (nome o ragione sociale, indirizzo, partita IVA se c'è, email di contatto) e togliete l'evidenziazione. Se in futuro aggiungete statistiche, mappe, video incorporati, chat o un banner di terzi, la pagina va aggiornata prima di attivarli e potrebbe servire un banner cookie.

## Pubblicare con GitHub Pages

1. Crea un nuovo repository su GitHub e carica questi file nella cartella principale.
2. Vai su **Settings → Pages**, scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`, e salva.
3. Dopo un minuto il sito è online su `https://<tuo-utente>.github.io/<nome-repo>/`.
4. Per usare `www.siterefresh.it`: sempre in **Settings → Pages** scrivi il dominio in **Custom domain**, poi nel pannello del tuo registrar crea un record CNAME `www` che punta a `<tuo-utente>.github.io`. Attiva **Enforce HTTPS** quando diventa disponibile.

In alternativa puoi collegare il repository a Netlify o Vercel: anche lì non serve nessun comando di build e la cartella da pubblicare è quella principale.

**Attenzione**: se il sito attuale è un progetto Lovable collegato a un repository GitHub, non sovrascrivere quel repository. Usane uno nuovo, così non rompi il progetto Lovable.

## Extra

- **Da dove parti**: sezione dopo i nastri con i due casi, "Non hai ancora un sito: lo creiamo da zero" (in evidenza, il lavoro principale) e "Hai un sito vecchio: lo rifacciamo da capo" (il Refresh).

- **Viaggio nel tempo automatico**: parte da solo una volta per visitatore (resta segnato nel browser). Quando il visitatore si ferma sul Museo (poco più di un secondo: chi ci passa sopra di corsa, ad esempio cliccando "Contatti" nel menu, non viene disturbato) compare in basso un piccolo avviso con un conto alla rovescia di 3 secondi (si può saltare con la X o Esc). Se intanto scorre via, l'avviso sparisce e ricompare quando torna. Poi il sito passa allo stile 2009 con un effetto glitch e torna da solo al 2026 dopo circa una schermata e mezza di scroll, con la schermata "Questo è un Refresh". Non parte se il menu è aperto, se si sta scrivendo nel modulo o per chi ha scelto di ridurre il movimento. Per rivederlo durante i test: aprire il sito in una finestra in incognito.
- **Scheda Refresh (Servizi)**: mini film di 12 secondi. Un sito "del 2009" (scritta che scorre, contatore visite, foto che non si carica) viene scansionato e diventa il sito nuovo; un cursore prenota il ritiro, arriva la conferma e il tempo di caricamento passa da 6,8 a 0,9 secondi (valori dimostrativi).
- **Funzioni**: quattro demo che funzionano davvero nella pagina. Calendario (servizio, collaboratore, giorni con orari liberi, dati, promemoria WhatsApp e agenda del titolare), preventivo (stima che si aggiorna, foto, zona servita, orario di richiamata ed email ricevuta), galleria (filtri, foto a tutto schermo con confronto prima/dopo da trascinare e "Voglio un lavoro così"), elenco servizi (ricerca, sconto pacchetto, giorno, targa, auto sostitutiva e ordine di lavoro). Ogni demo finisce con il riquadro "Lato titolare" e la notifica "Così arriva a te". Quando la sezione è a schermo un cursore automatico le usa da solo in loop; al primo tocco o clic vero del visitatore si ferma e lascia fare a lui. Sono dimostrazioni: non inviano né salvano nulla. Attività, nomi e prezzi sono inventati.
- **Siti vivi**: a tutta larghezza. Un sito vero (Forno Bianchi, lo stesso della scheda Refresh) si inclina e viene "sbucciato" strato per strato: a ogni passo gli strati sopra si alzano e scoprono quello di cui si parla, mentre il contatore 01/07 ne spiega lo scopo (codice, sfondo e colori, struttura, immagini, testi, bottoni e moduli, animazioni). Gli elementi principali si staccano un po' di più dal proprio strato, poi l'insieme ruota, si ricompone e arriva accanto la versione per telefono. Tutto guidato dallo scroll; con "riduci movimento" resta aperto e fermo.
- **Modalità 2009**: il bottone "Guarda questo sito nel 2009" (sezione Museo) e il link "Modalità 2009" nel footer trasformano tutto il sito in stile anni 2000, con scia di stelline dietro al mouse. "Riportami al 2026" torna normale.

## Come funzionano le animazioni

- **Computer (da 900 px di larghezza)**: la sezione Servizi scorre in orizzontale, il prima/dopo del Refresh si trasforma con lo scroll, le card dei Progetti si impilano.
- **Telefono**: i Servizi sono card impilate, il prima/dopo si trascina col dito, i Progetti scorrono di lato e c'è un bottone fisso in basso per la consulenza.
- Chi ha attivato "riduci movimento" nel sistema vede il sito completo e senza animazioni.
- Se le librerie non si caricano, il sito resta completo e leggibile, solo statico.
