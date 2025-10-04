import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/use-in-view';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Palette,
  Smartphone,
  Search,
  Shield,
  Zap,
  Users,
  Clock,
  FileText,
  Eye,
  RefreshCw,
  Rocket
} from 'lucide-react';

const CreazioneSitiWeb = () => {
  const features = [
    'Design unico e professionale (niente template preconfezionati)',
    'Ottimizzato per ogni dispositivo (PC, tablet e smartphone)',
    'Dominio e hosting inclusi se non hai già il tuo',
    'Sicurezza SSL/HTTPS per trasmettere fiducia ai clienti',
    'Integrazione social e contatti immediati (email, WhatsApp, telefono)',
    'Supporto iniziale per guidarti nei primi passi online'
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Conoscenza delle tue esigenze',
      description: 'Ti contattiamo per capire i tuoi obiettivi e ciò che desideri dal tuo sito: stile, funzionalità e target.',
      icon: Users
    },
    {
      step: '2',
      title: 'Preventivo personalizzato',
      description: 'Prepariamo un\'offerta chiara e su misura, senza sorprese o costi nascosti.',
      icon: FileText
    },
    {
      step: '3',
      title: 'Acconto iniziale',
      description: 'Confermato il preventivo, si procede al pagamento della prima parte per avviare il progetto.',
      icon: CheckCircle
    },
    {
      step: '4',
      title: 'Anteprima del sito',
      description: 'Entro i tempi stabiliti ti presentiamo una prima versione del sito da visionare e valutare.',
      icon: Eye
    },
    {
      step: '5',
      title: 'Revisioni finali',
      description: 'Apportiamo insieme eventuali modifiche o aggiustamenti per rendere il risultato perfetto.',
      icon: RefreshCw
    },
    {
      step: '6',
      title: 'Consegna e pubblicazione',
      description: 'Dopo il saldo finale, il sito viene messo online e ti spieghiamo come gestirlo in autonomia.',
      icon: Rocket
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: 'Da €1.200',
      description: 'Perfetto per PMI che iniziano online',
      features: [
        'Fino a 5 pagine',
        'Design responsive',
        'Ottimizzazione SEO base',
        'Modulo contatti',
        'Integrazione Google Analytics',
        '3 revisioni incluse'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: 'Da €2.500',
      description: 'La scelta ideale per aziende in crescita',
      features: [
        'Fino a 10 pagine',
        'Design premium personalizzato',
        'SEO avanzato',
        'CMS per gestione contenuti',
        'E-commerce base (fino a 50 prodotti)',
        'Integrazione social media',
        'Blog integrato',
        '5 revisioni incluse'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 'Da €4.500',
      description: 'Soluzioni complete per grandi progetti',
      features: [
        'Pagine illimitate',
        'Design completamente personalizzato',
        'SEO enterprise',
        'CMS avanzato',
        'E-commerce completo',
        'Integrazione sistemi esterni',
        'Area riservata clienti',
        'Supporto prioritario',
        'Revisioni illimitate'
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Globe className="h-12 w-12 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Creazione Siti Web
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Trasformiamo la tua visione in un sito web professionale che genera risultati concreti per il tuo business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/contatti">Richiedi Preventivo</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/portfolio">Vedi Esempi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cosa Include Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cosa Include il Servizio
              </h2>
              <p className="text-lg text-muted-foreground">
                Ogni sito web che realizziamo include tutte le funzionalità essenziali per il successo online della tua azienda.
              </p>
            </div>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Design unico e responsive</strong> - Creiamo siti su misura, non template standard. Ogni progetto è personalizzato sull'identità della tua azienda e ottimizzato per funzionare perfettamente su desktop, tablet e smartphone.
              </p>
              
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Dominio e hosting inclusi</strong> - Se non hai già un tuo dominio, ci occupiamo noi di registrarlo e configurare l'hosting: tutto è compreso nel prezzo finale, senza pensieri aggiuntivi.
              </p>
              
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Performance elevate e sicurezza SSL/HTTPS</strong> - Il tuo sito sarà veloce, affidabile e sicuro: tempi di caricamento ridotti e certificato SSL per trasmettere fiducia ai tuoi clienti.
              </p>
              
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Integrazione social e contatti immediati</strong> - Colleghiamo i tuoi profili social e aggiungiamo canali di contatto diretti (email, telefono, WhatsApp), così i clienti possono raggiungerti facilmente.
              </p>

              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Supporto iniziale incluso</strong> - Nei primi mesi ti guidiamo passo dopo passo: ti aiutiamo a gestire il sito e a fare eventuali piccole modifiche, così sei subito operativo online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo di Lavoro Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Il Nostro Processo
              </h2>
              <p className="text-lg text-muted-foreground">
                Un approccio strutturato e collaudato per garantire il successo del tuo progetto.
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => {
                const TimelineStep = () => {
                  const { ref, isInView } = useInView();
                  
                  return (
                    <div 
                      ref={ref}
                      key={step.step}
                      className={`timeline-step timeline-step-animated ${isInView ? 'in-view' : ''}`}
                      data-step={step.step}
                      style={{ 
                        transitionDelay: isInView ? `${index * 0.15}s` : '0s'
                      }}
                    >
                      <Card className="card-hover ml-8">
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
                    </div>
                  );
                };
                
                return <TimelineStep key={step.step} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Le Nostre Soluzioni Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Le Nostre Soluzioni
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tre livelli di servizio pensati per accompagnarti nella creazione del tuo sito web,
                dal primo passo online fino a una presenza digitale completa e professionale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  nome: "Starter",
                  descrizione: "💡 Landing page per farsi conoscere e attrarre nuovi clienti",
                  include: [
                    "Landing page responsive e veloce",
                    "Design personalizzato su misura",
                    "Ottimizzazione SEO di base",
                    "Hosting incluso per il primo anno",
                    "Certificato SSL gratuito",
                    "Modulo richiesta preventivo e contatti",
                    "Pulsante WhatsApp integrato"
                  ],
                  tempoConsegna: "⏱️ 10–20 giorni lavorativi",
                  pagamento: "30% all'avvio, saldo alla conferma dell'anteprima"
                },
                {
                  nome: "Growth", 
                  descrizione: "🚀 Sito strutturato per valorizzare la tua attività e i tuoi progetti",
                  include: [
                    "Sito web completo e organizzato in più pagine",
                    "Sezione dedicata ai tuoi progetti o lavori",
                    "Integrazione con i tuoi social",
                    "Modulo richiesta preventivo con servizio mail dedicato",
                    "Pulsante WhatsApp e pagina contatti",
                    "Immagini personalizzate",
                    "Animazioni dinamiche e fluide"
                  ],
                  tempoConsegna: "⏱️ 15–30 giorni lavorativi",
                  pagamento: "30% all'avvio, saldo alla conferma dell'anteprima",
                  recommended: true
                },
                {
                  nome: "Scale",
                  descrizione: "🏆 Sito web definito in ogni dettaglio, per un'immagine professionale impeccabile",
                  include: [
                    "Sito web completo in ogni sua parte",
                    "Home page, servizi, progetti e contatti",
                    "Modulo preventivo e pulsante WhatsApp",
                    "Animazioni avanzate e microinterazioni",
                    "Immagini personalizzate e create con AI",
                    "Struttura ottimizzata per performance e SEO",
                    "Possibilità di funzionalità extra su richiesta"
                  ],
                  tempoConsegna: "⏱️ 25–40 giorni lavorativi",
                  pagamento: "30% all'avvio, saldo alla conferma dell'anteprima"
                }
              ].map((fascia, index) => (
                <Card key={fascia.nome} className={`card-hover ${fascia.recommended ? 'border-primary shadow-lg ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{fascia.nome}</CardTitle>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">{fascia.tempoConsegna}</p>
                      <p className="font-medium text-foreground">{fascia.descrizione}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {fascia.include.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
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
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Esempi Indicativi - Blocco Opzionale */}
      <section className="py-16 bg-muted/30 border-y-2 border-dashed border-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-sm font-medium">
                ESEMPI NON VINCOLANTI
              </Badge>
              <h3 className="text-2xl font-bold mb-4">Preventivi Tipici Indicativi</h3>
              <p className="text-muted-foreground">
                <strong>Attenzione:</strong> Questi sono <u>esempi puramente indicativi e NON vincolanti</u>. 
                Ogni preventivo viene calcolato sui requisiti specifici del progetto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">Landing Page</CardTitle>
                  <div className="text-2xl font-bold text-primary">€300 - €450</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente tipo:</strong> Professionista, servizio locale
                  </p>
                  <p className="text-sm mb-3">
                    Pagina singola ottimizzata per conversioni con modulo contatti e integrazione analytics.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">Sito Aziendale</CardTitle>
                  <div className="text-2xl font-bold text-primary">€500 - €750</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente tipo:</strong> PMI
                  </p>
                  <p className="text-sm mb-3">
                    Sito multipage con CMS, blog integrato e area download per cataloghi.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">Sito Aziendale Definitivo</CardTitle>
                  <div className="text-2xl font-bold text-primary">€850 - €1.200</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente tipo:</strong> Azienda di servizi
                  </p>
                  <p className="text-sm mb-3">
                    Sito web completo e strutturato con sezioni dedicate a servizi, portfolio, team e contatti. Include form di preventivo personalizzato e area riservata clienti.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Perché Sceglierci Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Perché Scegliere SiteRefresh
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="card-hover text-center">
                <CardContent className="p-6">
                  <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Mobile-First</h3>
                  <p className="text-sm text-muted-foreground">Design ottimizzato per dispositivi mobili</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover text-center">
                <CardContent className="p-6">
                  <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">SEO Ready</h3>
                  <p className="text-sm text-muted-foreground">Ottimizzazione SEO integrata</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover text-center">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Sicurezza</h3>
                  <p className="text-sm text-muted-foreground">Protocolli di sicurezza avanzati</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover text-center">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Performance</h3>
                  <p className="text-sm text-muted-foreground">Velocità di caricamento ottimale</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Garanzie e Supporto Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Le Nostre Garanzie
              </h2>
              <p className="text-lg text-muted-foreground">
                Lavoriamo con fiducia e trasparenza, garantendo risultati concreti.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Soddisfatti o Rifacciamo</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Se il risultato finale non rispecchia quanto concordato, rifacciamo il lavoro senza costi aggiuntivi.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Tempi Garantiti</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Consegniamo il tuo sito nei tempi concordati o ricevi un sconto del 10% sul totale.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Supporto 12 Mesi</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Un anno di supporto tecnico gratuito per piccole modifiche e assistenza.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Performance Garantite</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Il tuo sito avrà un punteggio Google PageSpeed di almeno 90/100 o miglioriamo gratis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Domande Frequenti
              </h2>
              <p className="text-lg text-muted-foreground">
                Le risposte alle domande più comuni sulla creazione di siti web.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Quanto tempo serve per creare un sito web?</h3>
                  <p className="text-muted-foreground">
                    I tempi variano in base alla complessità: un sito vetrina richiede 2-3 settimane, 
                    mentre progetti più complessi possono richiedere 4-8 settimane. Ti forniremo una timeline dettagliata dopo l'analisi iniziale.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Posso gestire i contenuti autonomamente?</h3>
                  <p className="text-muted-foreground">
                    Sì! Tutti i nostri siti includono un CMS intuitivo che ti permette di aggiornare testi, immagini e pagine 
                    senza conoscenze tecniche. Inoltre, ti formiamo gratuitamente sull'utilizzo.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Il sito sarà ottimizzato per i motori di ricerca?</h3>
                  <p className="text-muted-foreground">
                    Assolutamente! Ogni sito include ottimizzazione SEO on-page: struttura del codice, meta tag, 
                    velocità di caricamento e contenuti ottimizzati per migliorare il posizionamento su Google.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Cosa include il supporto post-lancio?</h3>
                  <p className="text-muted-foreground">
                    Offriamo 12 mesi di supporto gratuito per piccole modifiche, aggiornamenti di sicurezza, 
                    backup automatici e assistenza tecnica. Per modifiche importanti, forniamo preventivi dedicati.
                  </p>
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
              Pronto a Creare il Tuo Sito Web?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Unisciti alle centinaia di aziende che hanno trasformato la loro presenza online con noi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/contatti">Richiedi Preventivo</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/portfolio">Vedi Altri Progetti</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreazioneSitiWeb;