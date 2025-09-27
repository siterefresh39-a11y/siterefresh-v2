import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/use-in-view';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle,
  RefreshCw,
  TrendingUp,
  Shield,
  Smartphone,
  Users,
  Clock,
  Search
} from 'lucide-react';

const RestylingSitiWeb = () => {
  const problems = [
    'Design obsoleto che danneggia la credibilità',
    'Sito non ottimizzato per mobile',
    'Velocità di caricamento lenta',
    'Posizionamento SEO scarso',
    'Difficoltà nella gestione contenuti',
    'Vulnerabilità di sicurezza',
    'Scarsa conversione visitatori'
  ];

  const solutions = [
    'Design moderno e professionale',
    'Responsive design per tutti i dispositivi',
    'Ottimizzazione performance (90+ PageSpeed)',
    'Miglioriamo il posizionamento SEO',
    'CMS intuitivo per aggiornamenti facili',
    'Sicurezza avanzata e backup automatici',
    'UX ottimizzata per aumentare le conversioni'
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Analisi Sito Esistente',
      description: 'Analizziamo il tuo sito attuale identificando problemi e opportunità di miglioramento.',
      icon: Search
    },
    {
      step: '2',
      title: 'Strategia di Restyling',
      description: 'Definiamo una strategia personalizzata mantenendo ciò che funziona e migliorando il resto.',
      icon: TrendingUp
    },
    {
      step: '3',
      title: 'Redesign & Sviluppo',
      description: 'Creiamo il nuovo design e sviluppiamo le nuove funzionalità mantenendo i tuoi contenuti.',
      icon: RefreshCw
    },
    {
      step: '4',
      title: 'Migrazione & Test',
      description: 'Migriamo tutto in sicurezza e testiamo ogni funzionalità prima del lancio.',
      icon: Shield
    }
  ];

  const packages = [
    {
      name: 'Refresh',
      price: 'Da €800',
      description: 'Aggiornamento estetico e funzionale',
      features: [
        'Nuovo design moderno',
        'Ottimizzazione mobile',
        'Miglioramento velocità',
        'Aggiornamento contenuti',
        'SEO base',
        '2 revisioni incluse'
      ],
      recommended: false
    },
    {
      name: 'Transform',
      price: 'Da €1.800',
      description: 'Trasformazione completa del sito',
      features: [
        'Redesign completo',
        'Nuove funzionalità',
        'CMS moderno',
        'Ottimizzazione SEO avanzata',
        'Integrazione social',
        'Analytics avanzato',
        'Sicurezza potenziata',
        '4 revisioni incluse'
      ],
      recommended: true
    },
    {
      name: 'Revolution',
      price: 'Da €3.200',
      description: 'Rivoluzione totale della presenza online',
      features: [
        'Ricostruzione completa',
        'Architettura moderna',
        'E-commerce integrato',
        'Area clienti personalizzata',
        'Automazione marketing',
        'Supporto multilingua',
        'Training completo team',
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
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{problem}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Soluzioni */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">✅ Dopo il Restyling</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{solution}</span>
                    </div>
                  ))}
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

      {/* Le Nostre Soluzioni Restyling */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Le Nostre Soluzioni di Restyling
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tre livelli di trasformazione progettati per rinnovare la tua presenza online, 
                dall'aggiornamento estetico alla rivoluzione digitale completa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  nome: "Refresh",
                  include: [
                    "Nuovo design moderno e responsive",
                    "Ottimizzazione velocità di caricamento",
                    "Miglioramento UX e navigazione",
                    "Aggiornamento contenuti esistenti",
                    "SEO on-page ottimizzato",
                    "Test compatibilità browser"
                  ],
                  tempoConsegna: "7-14 giorni lavorativi",
                  clienteIdeale: "Siti con buona struttura ma design datato",
                  pagamento: "Pagamento in 2 rate o soluzione unica"
                },
                {
                  nome: "Transform", 
                  include: [
                    "Redesign completo dell'interfaccia",
                    "Nuove funzionalità e sezioni",
                    "CMS moderno per gestione contenuti",
                    "Ottimizzazione SEO avanzata",
                    "Integrazione social media",
                    "Analytics e monitoraggio avanzato",
                    "Migrazione sicura dei contenuti"
                  ],
                  tempoConsegna: "15-25 giorni lavorativi",
                  clienteIdeale: "Siti che necessitano rinnovamento completo",
                  pagamento: "Rateizzazione flessibile disponibile",
                  recommended: true
                },
                {
                  nome: "Revolution",
                  include: [
                    "Ricostruzione completa da zero",
                    "Architettura moderna e scalabile",
                    "E-commerce o portale avanzato",
                    "Automazioni e integrazioni personalizzate",
                    "Area clienti e dashboard",
                    "Supporto multilingua",
                    "Training completo del team",
                    "Assistenza prioritaria 12 mesi"
                  ],
                  tempoConsegna: "25-40 giorni lavorativi", 
                  clienteIdeale: "Aziende che vogliono una trasformazione digitale completa",
                  pagamento: "Piani di pagamento personalizzati"
                }
              ].map((fascia, index) => (
                <Card key={fascia.nome} className={`card-hover ${fascia.recommended ? 'border-primary shadow-lg ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{fascia.nome}</CardTitle>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{fascia.tempoConsegna}</span>
                      </div>
                      <p className="font-medium">{fascia.clienteIdeale}</p>
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
                          Richiedi Analisi
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
                  <div className="text-2xl font-bold text-primary">€600 - €1.000</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente tipo:</strong> Sito vetrina con poche pagine
                  </p>
                  <p className="text-sm mb-3">
                    Aggiornamento design, ottimizzazione mobile e miglioramento performance.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Risultato atteso:</strong> Aspetto moderno e professionale
                  </p>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">Restyling Completo</CardTitle>
                  <div className="text-2xl font-bold text-primary">€1.200 - €2.800</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente tipo:</strong> Sito aziendale multi-page
                  </p>
                  <p className="text-sm mb-3">
                    Redesign totale, nuovo CMS, ottimizzazione SEO e nuove funzionalità.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Risultato atteso:</strong> +300% performance e usabilità
                  </p>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">Trasformazione Digitale</CardTitle>
                  <div className="text-2xl font-bold text-primary">€2.800 - €6.000</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente tipo:</strong> E-commerce o portale complesso
                  </p>
                  <p className="text-sm mb-3">
                    Ricostruzione completa con nuove tecnologie, automazioni e integrazioni.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Risultato atteso:</strong> Piattaforma digitale all'avanguardia
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

      {/* Case Study Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Caso di Successo
              </h2>
              <p className="text-lg text-muted-foreground">
                Scopri come abbiamo trasformato il business di un nostro cliente.
              </p>
            </div>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Ristrutturazioni Edili Milano
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Un'azienda di ristrutturazioni con un sito obsoleto del 2015 
                      che non generava contatti e perdeva clienti verso la concorrenza.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-destructive mb-2">❌ Situazione Iniziale:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Design obsoleto e non responsive</li>
                          <li>• 2-3 contatti al mese dal sito</li>
                          <li>• Posizione Google: pagina 3-4</li>
                          <li>• Tempo di caricamento: 8+ secondi</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">✅ Dopo il Restyling:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Design moderno e mobile-friendly</li>
                          <li>• 15-20 contatti qualificati al mese</li>
                          <li>• Posizione Google: prima pagina</li>
                          <li>• Tempo di caricamento: 2 secondi</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-primary-lighter p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4">Risultati in 6 Mesi</h4>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">+650%</div>
                          <div className="text-sm text-muted-foreground">Contatti</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">+400%</div>
                          <div className="text-sm text-muted-foreground">Traffico Organico</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">92/100</div>
                          <div className="text-sm text-muted-foreground">PageSpeed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">€890</div>
                          <div className="text-sm text-muted-foreground">Investimento</div>
                        </div>
                      </div>

                      <blockquote className="text-sm italic">
                        "In 6 mesi abbiamo recuperato l'investimento e ora il sito 
                        è la nostra principale fonte di nuovi clienti."
                        <cite className="block mt-2 font-semibold">- Marco T., Titolare</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Domande Frequenti sul Restyling
              </h2>
              <p className="text-lg text-muted-foreground">
                Tutto quello che devi sapere per decidere se è il momento di rinnovare il tuo sito.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Quando è necessario fare un restyling del sito?</h3>
                  <p className="text-muted-foreground">
                    È tempo di un restyling se il tuo sito ha più di 3-4 anni, non è ottimizzato per mobile, 
                    ha un design obsoleto o non genera i risultati attesi. Un sito moderno è essenziale per rimanere competitivi.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Perderò il posizionamento Google durante il restyling?</h3>
                  <p className="text-muted-foreground">
                    No, anzi! Seguiamo tutte le best practice SEO per mantenere e migliorare il tuo posizionamento. 
                    Implementiamo redirect appropriati e ottimizziamo la struttura per ottenere risultati migliori.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Quanto costa rispetto a un sito da zero?</h3>
                  <p className="text-muted-foreground">
                    Il restyling costa generalmente il 30-50% in meno di un sito completamente nuovo, 
                    poiché partiamo da contenuti e struttura esistenti. Inoltre, i tempi di realizzazione sono più rapidi.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Posso mantenere alcuni elementi del sito attuale?</h3>
                  <p className="text-muted-foreground">
                    Certamente! Durante l'analisi identificheremo gli elementi che funzionano bene 
                    e li integreremo nel nuovo design, ottimizzando solo ciò che necessita miglioramenti.
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
    </div>
  );
};

export default RestylingSitiWeb;