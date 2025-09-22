import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Target,
  BarChart3,
  FileText,
  Link as LinkIcon,
  Eye,
  Globe
} from 'lucide-react';

const OttimizzazioneSEO = () => {
  const seoServices = [
    'Analisi SEO completa del sito',
    'Ricerca e ottimizzazione parole chiave',
    'Ottimizzazione contenuti esistenti',
    'Creazione contenuti SEO-friendly',
    'Link building di qualità',
    'SEO tecnico (velocità, struttura)',
    'Ottimizzazione local SEO',
    'Monitoraggio posizionamento',
    'Report mensili dettagliati',
    'Consulenza strategica continua'
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Audit SEO Completo',
      description: 'Analizziamo il tuo sito per identificare problemi tecnici e opportunità di miglioramento.',
      icon: Search
    },
    {
      step: '2',
      title: 'Strategia Keywords',
      description: 'Ricerchiamo le parole chiave più efficaci per il tuo business e il tuo mercato.',
      icon: Target
    },
    {
      step: '3',
      title: 'Ottimizzazione On-Page',
      description: 'Ottimizziamo contenuti, meta tag, struttura e aspetti tecnici del sito.',
      icon: FileText
    },
    {
      step: '4',
      title: 'Link Building & Monitoring',
      description: 'Costruiamo autorità del dominio e monitoriamo costantemente i risultati.',
      icon: LinkIcon
    }
  ];

  const packages = [
    {
      name: 'SEO Starter',
      price: 'Da €400/mese',
      description: 'Ottimizzazione base per iniziare',
      features: [
        'Audit SEO iniziale',
        'Ottimizzazione 5 pagine',
        'Ricerca 20 parole chiave',
        'SEO tecnico base',
        'Report mensile',
        '2 contenuti SEO/mese'
      ],
      recommended: false
    },
    {
      name: 'SEO Professional',
      price: 'Da €800/mese',
      description: 'Strategia SEO completa',
      features: [
        'Audit SEO approfondito',
        'Ottimizzazione illimitata pagine',
        'Ricerca 50+ parole chiave',
        'Link building (5 link/mese)',
        'SEO local completo',
        'Content marketing',
        '4 contenuti SEO/mese',
        'Report bisettimanali'
      ],
      recommended: true
    },
    {
      name: 'SEO Enterprise',
      price: 'Da €1.500/mese',
      description: 'Dominio del mercato online',
      features: [
        'Strategia SEO enterprise',
        'Competitor analysis continua',
        'Link building aggressivo',
        'Ottimizzazione e-commerce',
        'SEO multilingua',
        'Content strategy completa',
        '8+ contenuti SEO/mese',
        'Report settimanali',
        'Consulenza dedicata'
      ],
      recommended: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Più Traffico Organico',
      description: 'Aumenta la visibilità nei motori di ricerca'
    },
    {
      icon: Target,
      title: 'Clienti Qualificati',
      description: 'Attrai visitatori realmente interessati'
    },
    {
      icon: BarChart3,
      title: 'ROI Misurabile',
      description: 'Risultati trackabili e misurabili'
    },
    {
      icon: Eye,
      title: 'Brand Awareness',
      description: 'Maggiore visibilità del tuo brand'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Search className="h-12 w-12 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Ottimizzazione SEO
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Porta il tuo sito in prima pagina su Google e aumenta la visibilità online del tuo business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/contatti">Audit SEO Gratuito</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/portfolio">Vedi Risultati</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Inclusi Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Servizi SEO Inclusi
              </h2>
              <p className="text-lg text-muted-foreground">
                Una strategia SEO completa che copre tutti gli aspetti dell'ottimizzazione per i motori di ricerca.
              </p>
            </div>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {seoServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefici Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Perché Investire in SEO?
              </h2>
              <p className="text-lg text-muted-foreground">
                Il SEO è un investimento a lungo termine che genera risultati duraturi e misurabili.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Il Nostro Processo SEO
              </h2>
              <p className="text-lg text-muted-foreground">
                Una metodologia comprovata per ottenere risultati SEO duraturi e scalabili.
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div 
                  key={step.step}
                  className="timeline-step animate-fade-in-up"
                  data-step={step.step}
                  style={{ animationDelay: `${index * 0.2}s` }}
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pacchetti Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pacchetti SEO
              </h2>
              <p className="text-lg text-muted-foreground">
                Scegli il piano SEO più adatto alle esigenze del tuo business.
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
                      Più Efficace
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

      {/* Risultati Aspettati Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Risultati che Puoi Aspettarti
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3-6</div>
                  <div className="text-sm text-muted-foreground">Mesi per vedere</div>
                  <div className="font-semibold">Primi Risultati</div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50%+</div>
                  <div className="text-sm text-muted-foreground">Aumento medio</div>
                  <div className="font-semibold">Traffico Organico</div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Visibilità</div>
                  <div className="font-semibold">Su Google</div>
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
              Inizia la Tua Scalata su Google
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Non aspettare che i tuoi competitor ti superino. Inizia subito la tua strategia SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/contatti">Audit SEO Gratuito</Link>
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

export default OttimizzazioneSEO;