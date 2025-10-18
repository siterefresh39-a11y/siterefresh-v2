import BackButton from '@/components/BackButton';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <BackButton />
          
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
            
            <p className="text-muted-foreground mb-8">
              <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Titolare del Trattamento</h2>
              <p className="text-foreground/80">
                SiteRefresh è il Titolare del trattamento dei dati personali raccolti attraverso questo sito web. 
                Per qualsiasi informazione relativa al trattamento dei dati personali, è possibile contattarci tramite 
                i recapiti indicati nella sezione Contatti del sito.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Dati Raccolti e Finalità del Trattamento</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">2.1 Dati forniti volontariamente dall'utente</h3>
              <p className="text-foreground/80">
                Quando utilizzi il nostro form di contatto, raccogliamo i seguenti dati:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li><strong>Nome e Cognome</strong>: per identificarti e personalizzare la comunicazione</li>
                <li><strong>Email</strong>: per rispondere alle tue richieste</li>
                <li><strong>Numero di Telefono</strong>: per contattarti in caso di necessità (facoltativo)</li>
                <li><strong>Azienda</strong>: per comprendere il contesto della richiesta (facoltativo)</li>
                <li><strong>Messaggio</strong>: per conoscere le tue esigenze specifiche</li>
                <li><strong>Informazioni sui servizi</strong>: tipo di servizio richiesto, piano di interesse, obiettivi, budget e tempistiche</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">2.2 Finalità del trattamento</h3>
              <p className="text-foreground/80">I dati personali raccolti vengono utilizzati esclusivamente per:</p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li>Rispondere alle richieste di informazioni e preventivi</li>
                <li>Fornire assistenza e supporto tecnico</li>
                <li>Gestire la relazione commerciale con i clienti</li>
                <li>Inviare comunicazioni relative ai servizi richiesti</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">2.3 Dati di navigazione</h3>
              <p className="text-foreground/80">
                I sistemi informatici e le procedure software utilizzate per il funzionamento di questo sito acquisiscono, 
                nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei 
                protocolli di comunicazione di Internet. Questi dati (come indirizzi IP, URI, timestamp) non sono raccolti 
                per essere associati a interessati identificati, ma potrebbero permettere l'identificazione degli utenti 
                solo tramite elaborazioni ed associazioni con dati detenuti da terzi.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Base Giuridica del Trattamento</h2>
              <p className="text-foreground/80">
                Il trattamento dei dati personali è basato sul <strong>consenso esplicito</strong> dell'interessato, 
                fornito al momento dell'invio del form di contatto. L'invio del form costituisce consenso al trattamento 
                dei dati per le finalità indicate. Inoltre, il trattamento è necessario per dare esecuzione a misure 
                precontrattuali adottate su richiesta dell'interessato (art. 6, par. 1, lett. b del GDPR).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Modalità del Trattamento</h2>
              <p className="text-foreground/80">
                I dati personali sono trattati con strumenti automatizzati per il tempo strettamente necessario 
                a conseguire gli scopi per cui sono stati raccolti. Il trattamento avviene mediante:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li>Servizi di invio email (EmailJS)</li>
                <li>Sistemi di archiviazione sicura</li>
                <li>Software di gestione clienti</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                Specifiche misure di sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti 
                ed accessi non autorizzati.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Comunicazione e Diffusione dei Dati</h2>
              <p className="text-foreground/80">
                I dati personali non saranno diffusi e potranno essere comunicati esclusivamente a:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li>Soggetti che agiscono tipicamente in qualità di responsabili del trattamento (fornitori di servizi tecnici, hosting provider)</li>
                <li>Soggetti, enti o autorità a cui sia obbligatorio comunicare i dati personali in forza di disposizioni di legge</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                I dati non verranno trasferiti a paesi terzi al di fuori dell'Unione Europea senza adeguate garanzie.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Periodo di Conservazione</h2>
              <p className="text-foreground/80">
                I dati personali saranno conservati per il tempo strettamente necessario al conseguimento delle finalità 
                per cui sono stati raccolti. In particolare:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li>Le richieste di contatto saranno conservate per un periodo massimo di <strong>24 mesi</strong> dalla ricezione</li>
                <li>I dati relativi a clienti attivi saranno conservati per la durata del rapporto commerciale e per i successivi 10 anni per adempimenti fiscali e contabili</li>
                <li>Trascorsi i termini di conservazione, i dati saranno cancellati o resi anonimi in modo irreversibile</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Diritti dell'Interessato</h2>
              <p className="text-foreground/80 mb-4">
                In conformità agli articoli 15-22 del GDPR, l'interessato ha il diritto di:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li><strong>Accesso (art. 15)</strong>: ottenere conferma che sia in corso un trattamento di dati personali e accedere a tali dati</li>
                <li><strong>Rettifica (art. 16)</strong>: ottenere la rettifica dei dati personali inesatti</li>
                <li><strong>Cancellazione (art. 17)</strong>: ottenere la cancellazione dei dati personali (diritto all'oblio)</li>
                <li><strong>Limitazione (art. 18)</strong>: ottenere la limitazione del trattamento</li>
                <li><strong>Portabilità (art. 20)</strong>: ricevere i dati in formato strutturato e di uso comune</li>
                <li><strong>Opposizione (art. 21)</strong>: opporsi al trattamento dei dati personali</li>
                <li><strong>Revoca del consenso</strong>: revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                Per esercitare questi diritti, è possibile contattarci tramite i recapiti indicati nella sezione Contatti. 
                L'interessato ha inoltre il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Cookie e Tecnologie Simili</h2>
              <p className="text-foreground/80">
                Questo sito web utilizza esclusivamente cookie tecnici necessari al funzionamento del sito e per la navigazione. 
                Non utilizziamo cookie di profilazione o di terze parti per finalità di marketing. I cookie tecnici sono 
                indispensabili per la fruizione dei servizi richiesti dall'utente.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Minori</h2>
              <p className="text-foreground/80">
                I servizi offerti attraverso questo sito non sono destinati a minori di 18 anni. Non raccogliamo 
                consapevolmente informazioni personali da minori. Se veniamo a conoscenza di aver raccolto dati personali 
                da un minore senza il consenso dei genitori o tutori, adotteremo misure immediate per eliminare tali informazioni.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Modifiche alla Privacy Policy</h2>
              <p className="text-foreground/80">
                Questa Privacy Policy può essere aggiornata periodicamente. Eventuali modifiche sostanziali saranno 
                comunicate attraverso il sito web. Si consiglia di consultare regolarmente questa pagina per verificare 
                eventuali aggiornamenti. La data dell'ultimo aggiornamento è indicata in cima alla pagina.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Sicurezza dei Dati</h2>
              <p className="text-foreground/80">
                Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi 
                non autorizzati, alterazioni, divulgazioni o distruzioni. Tuttavia, nessun metodo di trasmissione su Internet 
                o di archiviazione elettronica è sicuro al 100%. Non possiamo garantire la sicurezza assoluta dei dati trasmessi 
                attraverso il sito.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contatti</h2>
              <p className="text-foreground/80">
                Per qualsiasi domanda relativa a questa Privacy Policy o per esercitare i diritti previsti dal GDPR, 
                è possibile contattarci attraverso:
              </p>
              <ul className="list-none pl-0 text-foreground/80 space-y-2 mt-4">
                <li><strong>Email</strong>: info@siterefresh.it</li>
                <li><strong>WhatsApp</strong>: +39 351 808 5597</li>
                <li><strong>Form di contatto</strong>: disponibile nella sezione Contatti del sito</li>
              </ul>
            </section>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 
                (Codice in materia di protezione dei dati personali) come modificato dal D.Lgs. 101/2018.
              </p>
            </div>
          </article>
        </div>
      </div>
  );
};

export default PrivacyPolicy;
