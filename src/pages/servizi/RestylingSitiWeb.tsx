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

      {/* Pacchetti Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pacchetti Restyling
              </h2>
              <p className="text-lg text-muted-foreground">
                Scegli il livello di trasformazione più adatto al tuo progetto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card 
                  key={pkg.name} 
                  className={`card-hover relative ${pkg.recommended ? 'ring-2 ring-primary' : ''}`}
                >
                  {pkg.recommended && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                      Più Scelto
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${pkg.recommended ? 'btn-hero' : ''}`} 
                      variant={pkg.recommended ? 'default' : 'outline'}
                      asChild
                    >
                      <Link to="/contatti">
                        Scegli {pkg.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
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
              Non perdere più clienti a causa di un sito obsoleto. Contattaci per un'analisi gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/contatti">Analisi Gratuita</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/servizi">Altri Servizi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestylingSitiWeb;