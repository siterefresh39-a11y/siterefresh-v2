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
  Users
} from 'lucide-react';

const CreazioneSitiWeb = () => {
  const features = [
    'Design moderno e professionale',
    'Responsive design per tutti i dispositivi',
    'Ottimizzazione SEO integrata',
    'Performance elevate (Google PageSpeed 90+)',
    'CMS intuitivo per la gestione contenuti',
    'Sicurezza avanzata SSL/HTTPS',
    'Integrazione social media',
    'Analytics e monitoraggio',
    'Backup automatici',
    'Supporto tecnico 24/7'
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Analisi e Strategia',
      description: 'Studiamo il tuo business, target e obiettivi per definire la strategia digitale ottimale.',
      icon: Users
    },
    {
      step: '2',
      title: 'Design & UX',
      description: 'Creiamo wireframe e mockup del tuo sito, focalizzandoci su usabilità e conversioni.',
      icon: Palette
    },
    {
      step: '3',
      title: 'Sviluppo Tecnico',
      description: 'Sviluppiamo il sito con le tecnologie più moderne, garantendo performance eccellenti.',
      icon: Globe
    },
    {
      step: '4',
      title: 'Test & Launch',
      description: 'Testiamo ogni funzionalità e ottimizziamo prima del lancio ufficiale.',
      icon: Zap
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
                <strong className="text-foreground">Il design moderno e responsive</strong> garantisce che il tuo sito funzioni perfettamente su qualsiasi dispositivo, 
                dal desktop allo smartphone, offrendo un'esperienza ottimale a tutti i visitatori e migliorando il posizionamento sui motori di ricerca.
              </p>
              
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">L'ottimizzazione SEO integrata</strong> include la strutturazione del codice, meta tag ottimizzati, 
                velocità di caricamento elevate e contenuti ottimizzati per aiutare il tuo sito a posizionarsi meglio su Google e generare più visite organiche.
              </p>
              
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Il sistema di gestione contenuti (CMS)</strong> ti permette di aggiornare facilmente testi, immagini e pagine 
                senza conoscenze tecniche, mantenendo il tuo sito sempre aggiornato e pertinente per i tuoi clienti.
              </p>
              
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">La sicurezza SSL/HTTPS e i backup automatici</strong> proteggono il tuo sito da minacce informatiche 
                e perdite di dati, garantendo la fiducia dei visitatori e la continuità del tuo business online.
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

      {/* Pacchetti Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pacchetti e Prezzi
              </h2>
              <p className="text-lg text-muted-foreground">
                Scegli il pacchetto più adatto alle esigenze della tua azienda.
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
                      Consigliato
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto a Creare il Tuo Sito Web?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contattaci per una consulenza gratuita e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/contatti">Consulenza Gratuita</Link>
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

export default CreazioneSitiWeb;