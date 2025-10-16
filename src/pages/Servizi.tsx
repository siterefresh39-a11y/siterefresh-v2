import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/use-in-view';
import { 
  Globe, 
  Zap, 
  Search, 
  Bot, 
  ArrowRight, 
  CheckCircle,
  Clock,
  MessageSquare,
  Palette,
  Rocket,
  Users,
  FileText,
  Eye,
  RefreshCw
} from 'lucide-react';
import BackButton from '@/components/BackButton';

const Servizi = () => {
  const services = [
    {
      icon: Globe,
      title: 'Creazione Siti Web',
      description: 'Siti web moderni, responsive e performanti realizzati con le tecnologie più avanzate.',
      features: ['Design responsive', 'Performance ottimali', 'SEO-friendly', 'CMS integrato'],
      available: true,
      route: '/servizi/creazione-siti-web'
    },
    {
      icon: Zap,
      title: 'Restyling Siti Esistenti',
      description: 'Trasformiamo il tuo sito obsoleto in una moderna piattaforma digitale.',
      features: ['Nuovo design', 'Migliori performance', 'Mobile optimization', 'Sicurezza avanzata'],
      available: true,
      route: '/servizi/restyling-upgrade'
    },
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Integrazione di intelligenza artificiale per automatizzare processi e migliorare l\'esperienza utente.',
      features: ['Chatbot intelligenti', 'Automazione processi', 'Analisi predittive', 'Supporto 24/7'],
      available: false,
      comingSoon: true
    }
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

  return (
    <div className="min-h-screen pt-16">
      <BackButton />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            I Nostri Servizi
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Soluzioni complete per la tua presenza digitale. Dalla creazione alla crescita online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const CardComponent = service.available && service.route ? 
                ({ children }: { children: React.ReactNode }) => (
                  <Link to={service.route!} className="block">
                    {children}
                  </Link>
                ) : 
                ({ children }: { children: React.ReactNode }) => <>{children}</>;

              return (
                <CardComponent key={service.title}>
                  <Card 
                    className={`card-hover relative ${!service.available ? 'opacity-90' : 'hover:shadow-lg transition-all duration-300'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {service.comingSoon && (
                      <Badge className="absolute top-4 right-4 bg-accent text-white">
                        Coming Soon
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-3 rounded-lg ${service.available ? 'bg-primary' : 'bg-muted'}`}>
                          <service.icon className={`h-6 w-6 ${service.available ? 'text-white' : 'text-muted-foreground'}`} />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {service.available ? (
                        <Button className="w-full btn-hero" asChild>
                          <Link to={service.route!}>
                            Scopri di Più
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full" disabled>
                          <Clock className="mr-2 h-4 w-4" />
                          Presto Disponibile
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </CardComponent>
              );
            })}
          </div>
        </div>
      </section>

      {/* Come Funziona Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Come Funziona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Il nostro processo è semplice, trasparente e orientato ai risultati. 
              Ecco come lavoriamo insieme per il successo del tuo progetto.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
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
                      <Card className="card-hover ml-16 md:ml-8">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Iniziamo il Tuo Progetto
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contattaci per una consulenza gratuita e scopri quale soluzione è perfetta per la tua azienda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/contatti">Consulenza Gratuita</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/portfolio">Vedi i Nostri Lavori</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servizi;