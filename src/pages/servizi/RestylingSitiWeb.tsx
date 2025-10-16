import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/use-in-view';
import { Zap, ArrowRight, CheckCircle, RefreshCw, TrendingUp, Shield, Smartphone, Users, Clock, Search, FileText, Eye, Rocket } from 'lucide-react';
import BackButton from '@/components/BackButton';
const RestylingSitiWeb = () => {
  const problems = ['Design obsoleto che danneggia la credibilità', 'Sito non ottimizzato per mobile', 'Velocità di caricamento lenta', 'Posizionamento SEO scarso', 'Difficoltà nella gestione contenuti', 'Vulnerabilità di sicurezza', 'Scarsa conversione visitatori'];
  const solutions = ['Design moderno e professionale', 'Responsive design per tutti i dispositivi', 'Miglioriamo il posizionamento SEO', 'Sicurezza avanzata e backup automatici', 'UX ottimizzata per aumentare le conversioni'];
  const processSteps = [{
    step: '1',
    title: 'Conoscenza delle tue esigenze',
    description: 'Ti contattiamo per capire i tuoi obiettivi e ciò che desideri dal tuo sito: stile, funzionalità e target.',
    icon: Users
  }, {
    step: '2',
    title: 'Preventivo personalizzato',
    description: 'Prepariamo un\'offerta chiara e su misura, senza sorprese o costi nascosti.',
    icon: FileText
  }, {
    step: '3',
    title: 'Acconto iniziale',
    description: 'Confermato il preventivo, si procede al pagamento della prima parte per avviare il progetto.',
    icon: CheckCircle
  }, {
    step: '4',
    title: 'Anteprima del sito',
    description: 'Entro i tempi stabiliti ti presentiamo una prima versione del sito da visionare e valutare.',
    icon: Eye
  }, {
    step: '5',
    title: 'Revisioni finali',
    description: 'Apportiamo insieme eventuali modifiche o aggiustamenti per rendere il risultato perfetto.',
    icon: RefreshCw
  }, {
    step: '6',
    title: 'Consegna e pubblicazione',
    description: 'Dopo il saldo finale, il sito viene messo online e ti spieghiamo come gestirlo in autonomia.',
    icon: Rocket
  }];
  const packages = [{
    name: 'Refresh',
    price: 'Da €800',
    description: 'Aggiornamento estetico e funzionale',
    features: ['Nuovo design moderno', 'Ottimizzazione mobile', 'Miglioramento velocità', 'Aggiornamento contenuti', 'SEO base', '2 revisioni incluse'],
    recommended: false
  }, {
    name: 'Transform',
    price: 'Da €1.800',
    description: 'Trasformazione completa del sito',
    features: ['Redesign completo', 'Nuove funzionalità', 'CMS moderno', 'Ottimizzazione SEO avanzata', 'Integrazione social', 'Analytics avanzato', 'Sicurezza potenziata', '4 revisioni incluse'],
    recommended: true
  }, {
    name: 'Revolution',
    price: 'Da €3.200',
    description: 'Rivoluzione totale della presenza online',
    features: ['Ricostruzione completa', 'Architettura moderna', 'E-commerce integrato', 'Area clienti personalizzata', 'Automazione marketing', 'Supporto multilingua', 'Training completo team', 'Revisioni illimitate'],
    recommended: false
  }];
  return <div className="min-h-screen pt-16">
      <BackButton />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Zap className="h-12 w-12 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Restyling Siti Web
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Trasformiamo il tuo sito obsoleto in una moderna piattaforma digitale che genera risultati concreti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/contatti">Analisi Gratuita</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/portfolio">Vedi Trasformazioni</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Prima/Dopo Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Risolviamo i Problemi del Tuo Sito
              </h2>
              <p className="text-lg text-muted-foreground">
                Identifichiamo e risolviamo tutti gli aspetti che limitano il successo del tuo sito web.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Problemi */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl text-destructive">❌ Prima del Restyling</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {problems.map((problem, index) => <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{problem}</span>
                    </div>)}
                </CardContent>
              </Card>

              {/* Soluzioni */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">✅ Dopo il Restyling</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {solutions.map((solution, index) => <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{solution}</span>
                    </div>)}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Il Nostro Processo di Restyling
              </h2>
              <p className="text-lg text-muted-foreground">
                Un approccio metodico che garantisce risultati eccellenti mantenendo tutto ciò che già funziona.
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => {
              const TimelineStep = () => {
                const {
                  ref,
                  isInView
                } = useInView();
                return <div ref={ref} key={step.step} className={`timeline-step timeline-step-animated ${isInView ? 'in-view' : ''}`} data-step={step.step} style={{
                  transitionDelay: isInView ? `${index * 0.15}s` : '0s'
                }}>
                      <Card className="card-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary-lighter rounded-lg">
                              <step.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                              <p className="text-muted-foreground">{step.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>;
              };
              return <TimelineStep key={step.step} />;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Le Nostre Soluzioni Restyling */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Le Nostre Soluzioni di Restyling
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Valutiamo attentamente il tuo sito esistente e ci ispiriamo alla sua struttura per crearne uno più performante, moderno e funzionale. Se hai già un dominio registrato, il costo del restyling sarà inferiore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              nome: "Starter",
              descrizione: "💡 Landing page per farsi conoscere e attrarre nuovi clienti",
              include: ["Landing page responsive e veloce", "Design personalizzato su misura", "Ottimizzazione SEO di base", "Hosting incluso per il primo anno", "Certificato SSL gratuito", "Modulo richiesta preventivo e contatti", "Pulsante WhatsApp integrato"],
              tempoConsegna: "⏱️ 10–20 giorni lavorativi",
              pagamento: "30% all'avvio, saldo alla conferma dell'anteprima"
            }, {
              nome: "Growth",
              descrizione: "🚀 Sito strutturato per valorizzare la tua attività e i tuoi progetti",
              include: ["Sito web completo e organizzato in più pagine", "Sezione dedicata ai tuoi progetti o lavori", "Integrazione con i tuoi social", "Modulo richiesta preventivo con servizio mail dedicato", "Pulsante WhatsApp e pagina contatti", "Immagini personalizzate", "Animazioni dinamiche e fluide"],
              tempoConsegna: "⏱️ 15–30 giorni lavorativi",
              pagamento: "30% all'avvio, saldo alla conferma dell'anteprima",
              recommended: true
            }, {
              nome: "Scale",
              descrizione: "🏆 Sito web definito in ogni dettaglio, per un'immagine professionale impeccabile",
              include: ["Sito web completo in ogni sua parte", "Home page, servizi, progetti e contatti", "Modulo preventivo e pulsante WhatsApp", "Animazioni avanzate e microinterazioni", "Immagini personalizzate e create con AI", "Struttura ottimizzata per performance e SEO", "Possibilità di funzionalità extra su richiesta"],
              tempoConsegna: "⏱️ 25–40 giorni lavorativi",
              pagamento: "30% all'avvio, saldo alla conferma dell'anteprima"
            }].map((fascia, index) => <Card key={fascia.nome} className={`card-hover ${fascia.recommended ? 'border-primary shadow-lg ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{fascia.nome}</CardTitle>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">{fascia.tempoConsegna}</p>
                      <p className="font-medium text-foreground">{fascia.descrizione}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {fascia.include.map((item, idx) => <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>)}
                    </ul>
                    <div className="border-t pt-4">
                      <p className="text-xs text-muted-foreground mb-4">
                        <strong>Pagamento:</strong> {fascia.pagamento}
                      </p>
                      <Button className="w-full" variant={fascia.recommended ? "default" : "outline"} asChild>
                        <Link to="/contatti">
                          Richiedi Preventivo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Esempi Restyling - Blocco Opzionale */}
      <section className="py-16 bg-muted/30 border-y-2 border-dashed border-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-sm font-medium">
                ESEMPI RESTYLING NON VINCOLANTI
              </Badge>
              <h3 className="text-2xl font-bold mb-4">Investimenti Tipici per Restyling</h3>
              <p className="text-muted-foreground">
                <strong>Attenzione:</strong> Questi sono <u>esempi puramente indicativi e NON vincolanti</u>. 
                Il preventivo finale dipende dalla complessità del sito esistente e dalle nuove funzionalità richieste.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">Restyling Semplice</CardTitle>
                  <div className="text-2xl font-bold text-primary">€300 - €400</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente tipo:</strong> Sito vetrina con poche pagine
                  </p>
                  <p className="text-sm mb-3 text-foreground">
                    Sito web essenziale di una pagina per presentare la tua attività in modo chiaro e professionale.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Aggiornamento design, ottimizzazione mobile e miglioramento performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">Restyling Completo</CardTitle>
                  <div className="text-2xl font-bold text-primary">€450 - €700</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente tipo:</strong> Sito aziendale multi-page
                  </p>
                  <p className="text-sm mb-3 text-foreground">
                    Sito web multi-pagina completo per aziende che vogliono una presenza online strutturata.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Redesign totale, ottimizzazione SEO e nuove funzionalità.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">Sito Aziendale Definitivo</CardTitle>
                  <div className="text-2xl font-bold text-primary">€750 - €1.000</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente tipo:</strong> Azienda di servizi
                  </p>
                  <p className="text-sm mb-3 text-foreground">Sito web completo e strutturato con sezioni dedicate a servizi, portfolio, team e contatti. Include form di preventivo personalizzato.</p>
                  <p className="text-sm text-muted-foreground">
                    Sito web completo con sezioni dedicate, form preventivo personalizzato e area riservata clienti.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefici Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Perché Fare un Restyling?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="card-hover text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Migliori Conversioni</h3>
                  <p className="text-sm text-muted-foreground">Aumenta le vendite e i contatti</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Credibilità</h3>
                  <p className="text-sm text-muted-foreground">Immagine professionale e moderna</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover text-center">
                <CardContent className="p-6">
                  <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Mobile Ready</h3>
                  <p className="text-sm text-muted-foreground">Ottimizzato per tutti i dispositivi</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Tempi Ridotti</h3>
                  <p className="text-sm text-muted-foreground">Più veloce di un sito da zero</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              È il Momento di Rinnovare il Tuo Sito
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Non perdere più clienti a causa di un sito obsoleto. I tuoi concorrenti si stanno già muovendo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/contatti">Richiedi Preventivo</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/portfolio">Vedi Trasformazioni</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default RestylingSitiWeb;