import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/components/ui/use-toast';
import { useInView } from '@/hooks/use-in-view';
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  Zap, 
  Globe, 
  HeadphonesIcon,
  ArrowRight,
  Upload,
  Star,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

// Meta e SEO per la pagina
export const prezziPageMeta = {
  title: "Preventivo Sito Web Personalizzato | Prezzi Competitivi per PMI",
  description: "Scopri i nostri prezzi per siti web su misura. Preventivo personalizzato gratuito in 48h. Soluzioni professionali per PMI e artigiani italiani.",
  slug: "prezzi-siti-web"
};

const Prezzi = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    azienda: '',
    descrizione: '',
    obiettivo: '',
    urgenza: '',
    budget: '',
    consenso: false
  });

  // Hero variants per A/B testing
  const heroVariants = [
    {
      id: 'variant_a',
      headline: "Siti Web Professionali Senza Sorprese",
      subheadline: "Preventivo personalizzato in 48 ore. Hosting incluso, assistenza garantita, risultati misurabili.",
      ctaPrimary: "Ricevi Preventivo Gratuito",
      ctaSecondary: "Scopri Come Lavoriamo"
    },
    {
      id: 'variant_b', 
      headline: "Il Tuo Sito Web su Misura",
      subheadline: "Progettiamo soluzioni digitali che fanno crescere il tuo business. Stima personalizzata senza impegno.",
      ctaPrimary: "Ottieni Stima Gratuita",
      ctaSecondary: "Vedi Portfolio"
    },
    {
      id: 'variant_c',
      headline: "Siti Web che Convertono Davvero",
      subheadline: "Design moderno, performance eccellenti, supporto continuo. La tua presenza digitale inizia qui.",
      ctaPrimary: "Inizia Ora",
      ctaSecondary: "Confronta Preventivi"
    },
    {
      id: 'variant_d',
      headline: "Cresci Online con Fiducia",
      subheadline: "Soluzioni web complete per PMI italiane. Nessun costo nascosto, massima trasparenza sui tempi e risultati.",
      ctaPrimary: "Preventivo 48h",
      ctaSecondary: "Case Study"
    }
  ];

  // Usa la prima variante come default
  const currentHero = heroVariants[0];

  const fasce = [
    {
      nome: "Starter",
      include: [
        "Sito web responsive fino a 5 pagine",
        "Design personalizzato su misura",
        "Ottimizzazione SEO di base",
        "Hosting incluso per il primo anno",
        "Certificato SSL gratuito",
        "Assistenza email per 3 mesi"
      ],
      tempoConsegna: "10-15 giorni lavorativi",
      clienteIdeale: "Professionisti, artigiani, piccole attività locali",
      pagamento: "Pagamento mensile senza anticipo o soluzione unica"
    },
    {
      nome: "Growth", 
      include: [
        "Sito web fino a 15 pagine + blog",
        "Sistema di gestione contenuti (CMS)",
        "E-commerce base (fino a 50 prodotti)",
        "Integrazione social e newsletter",
        "Analytics e monitoraggio performance", 
        "Assistenza prioritaria per 6 mesi"
      ],
      tempoConsegna: "15-25 giorni lavorativi",
      clienteIdeale: "PMI in crescita, negozi online, aziende di servizi",
      pagamento: "Rateizzazione personalizzata o abbonamento mensile"
    },
    {
      nome: "Scale",
      include: [
        "Sito web completo + e-commerce avanzato",
        "Automazioni marketing e CRM",
        "Integrazioni ERP e gestionali",
        "Performance ottimizzate e CDN",
        "Backup automatici e sicurezza avanzata",
        "Assistenza dedicata 12 mesi"
      ],
      tempoConsegna: "25-40 giorni lavorativi", 
      clienteIdeale: "Aziende strutturate, e-commerce consolidati, franchise",
      pagamento: "Piani di pagamento flessibili su misura"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Brief & Analisi",
      description: "Analizziamo i tuoi obiettivi, il target e la concorrenza per definire la strategia migliore."
    },
    {
      step: "2", 
      title: "Proposta Dettagliata",
      description: "Ti inviamo una proposta completa con tempi, costi e specifiche tecniche in massimo 48 ore."
    },
    {
      step: "3",
      title: "Design & UX",
      description: "Creiamo wireframe e mockup personalizzati, ottimizzati per la conversione e l'usabilità."
    },
    {
      step: "4",
      title: "Sviluppo",
      description: "Realizziamo il sito con tecnologie moderne, test approfonditi e ottimizzazioni performance."
    },
    {
      step: "5",
      title: "Lancio & Supporto", 
      description: "Configuriamo tutto per il go-live e ti forniamo assistenza continua per crescere online."
    }
  ];

  const faq = [
    {
      domanda: "Perché non pubblicate i prezzi fissi?",
      risposta: "Ogni progetto è unico e personalizzato sulle esigenze specifiche del cliente. I prezzi fissi non permetterebbero di offrire il miglior rapporto qualità-prezzo. Preferiamo analizzare le tue necessità e fornirti una stima accurata e trasparente."
    },
    {
      domanda: "Quanto tempo ci vuole per ricevere un preventivo?",
      risposta: "Ci impegniamo a inviarti una proposta dettagliata entro 48 ore dalla ricezione della tua richiesta. Per progetti urgenti, possiamo fornire una stima preliminare entro 24 ore."
    },
    {
      domanda: "Cosa include il servizio di assistenza?",
      risposta: "L'assistenza include supporto tecnico via email, aggiornamenti di sicurezza, backup automatici, monitoraggio uptime e piccole modifiche ai contenuti. I tempi di risposta sono garantiti entro 24 ore lavorative."
    },
    {
      domanda: "Posso pagare a rate o con un abbonamento mensile?",
      risposta: "Sì, offriamo diverse modalità di pagamento flessibili: pagamento rateale senza interessi, abbonamento mensile senza anticipo, o soluzione unica con sconto. La modalità dipende dal progetto e dalle tue preferenze."
    },
    {
      domanda: "Cosa succede se non sono soddisfatto del risultato?",
      risposta: "Offriamo la garanzia 'Soddisfatti o rifacciamo'. Se il progetto non rispetta le specifiche concordate, lo rivediamo gratuitamente fino alla tua completa soddisfazione. La tua fiducia è la nostra priorità."
    },
    {
      domanda: "Il sito sarà ottimizzato per mobile e motori di ricerca?",
      risposta: "Assolutamente sì. Tutti i nostri siti sono responsive (ottimizzati per mobile) e includono ottimizzazione SEO di base: meta tag, struttura dati, velocità di caricamento e best practices per il posizionamento su Google."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consenso) {
      toast({
        title: "Consenso richiesto",
        description: "Devi accettare il trattamento dei dati personali per continuare.",
        variant: "destructive"
      });
      return;
    }

    // Simulazione invio form
    try {
      // Analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'pricing_form_submit', {
          event_category: 'form',
          event_label: 'pricing_contact',
          value: 1
        });
      }

      // Simulazione API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Richiesta inviata!",
        description: "Riceverai la tua stima personalizzata entro 48 ore.",
      });

      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        azienda: '',
        descrizione: '',
        obiettivo: '',
        urgenza: '',
        budget: '',
        consenso: false
      });

    } catch (error) {
      toast({
        title: "Errore nell'invio",
        description: "Si è verificato un errore. Riprova o contattaci direttamente.",
        variant: "destructive"
      });
    }
  };

  const ProcessTimeline = () => {
    return (
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
                        <span className="text-lg font-bold text-primary">{step.step}</span>
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
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Schema JSON-LD per FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage", 
            "mainEntity": faq.map(item => ({
              "@type": "Question",
              "name": item.domanda,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.risposta
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {currentHero.headline}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {currentHero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="btn-hero" onClick={() => {
              document.getElementById('form-contatto')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {currentHero.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
              <Link to="/portfolio">{currentHero.ctaSecondary}</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Hosting incluso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>GDPR compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <HeadphonesIcon className="h-4 w-4" />
              <span>Assistenza garantita</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Sezione Prezzi */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Investimenti Trasparenti, Risultati Garantiti
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Non pubblichiamo prezzi fissi perché ogni progetto è unico e merita una soluzione personalizzata. 
              Analizziamo le tue esigenze specifiche e ti forniamo una <strong>stima dettagliata non vincolante entro 48 ore</strong>. 
              Massima trasparenza sui costi, tempi e deliverable inclusi.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Design su misura</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Hosting e manutenzione</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>SEO on-page iniziale</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Supporto continuativo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasce di Servizio */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Le Nostre Soluzioni
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tre livelli di servizio progettati per accompagnare la crescita del tuo business, 
              dal lancio online alla scalabilità aziendale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {fasce.map((fascia, index) => (
              <Card key={fascia.nome} className={`card-hover ${index === 1 ? 'border-primary shadow-lg' : ''}`}>
                {index === 1 && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    Più Richiesto
                  </Badge>
                )}
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
                    <Button className="w-full" variant={index === 1 ? "default" : "outline"} onClick={() => {
                      document.getElementById('form-contatto')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Richiedi Preventivo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blocco Opzionale - Esempi Indicativi */}
      <section className="py-16 bg-muted/30 border-y-2 border-dashed border-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-sm font-medium">
                BLOCCO OPZIONALE — ESEMPI NON VINCOLANTI
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
                  <div className="text-2xl font-bold text-primary">€800 - €1.200</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente:</strong> Professionista/artigiano
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Soluzione:</strong> Pagina singola ottimizzata per conversioni
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Risultato:</strong> Presenza online professionale + lead generation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">Sito Informativo</CardTitle>
                  <div className="text-2xl font-bold text-primary">€1.500 - €2.800</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente:</strong> PMI con servizi multipli
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Soluzione:</strong> 8-12 pagine + blog + CMS
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Risultato:</strong> Autorevolezza online + acquisizione clienti
                  </p>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">E-commerce Medio</CardTitle>
                  <div className="text-2xl font-bold text-primary">€3.000 - €6.000</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Cliente:</strong> Azienda con catalogo prodotti
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Soluzione:</strong> Shop online completo + gestionale
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Risultato:</strong> Vendite online automatizzate
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground font-medium">
                💡 <strong>Nota importante:</strong> I costi reali dipendono da complessità, integrazioni, 
                personalizzazioni e tempi di consegna richiesti. Contattaci per una stima accurata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Come Lavoriamo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Come Lavoriamo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un processo rodato in 5 step per garantirti risultati eccellenti, 
              tempi rispettati e massima trasparenza.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ProcessTimeline />
          </div>

          <div className="max-w-2xl mx-auto mt-16 text-center">
            <div className="bg-primary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Garanzia "Soddisfatti o Rifacciamo"
              </h3>
              <p className="text-muted-foreground mb-4">
                Se il progetto non rispetta le specifiche concordate, lo rivediamo gratuitamente 
                fino alla tua completa soddisfazione.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Supporto: risposta entro 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Uptime garantito 99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form di Contatto */}
      <section id="form-contatto" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hai 60 Secondi? Ricevi una Stima Non Vincolante in 48h
              </h2>
              <p className="text-lg text-muted-foreground">
                Compila il form qui sotto e riceverai una proposta dettagliata e personalizzata. 
                Nessun impegno, solo informazioni utili per il tuo progetto.
              </p>
            </div>

            <Card className="card-hover">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="required">Nome *</Label>
                      <Input
                        id="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        aria-describedby="nome-help"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="azienda">Azienda</Label>
                      <Input
                        id="azienda"
                        type="text"
                        value={formData.azienda}
                        onChange={(e) => setFormData({...formData, azienda: e.target.value})}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="required">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Telefono</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descrizione" className="required">Descrivi il tuo progetto *</Label>
                    <Textarea
                      id="descrizione"
                      required
                      rows={4}
                      value={formData.descrizione}
                      onChange={(e) => setFormData({...formData, descrizione: e.target.value})}
                      placeholder="Raccontaci cosa vuoi realizzare, quali sono i tuoi obiettivi e se hai particolari esigenze..."
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Obiettivo principale *</Label>
                      <RadioGroup
                        value={formData.obiettivo}
                        onValueChange={(value) => setFormData({...formData, obiettivo: value})}
                        required
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="presenza" id="presenza" />
                          <Label htmlFor="presenza" className="text-sm">Presenza online professionale</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="vendita" id="vendita" />
                          <Label htmlFor="vendita" className="text-sm">Vendita prodotti/servizi</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="lead" id="lead" />
                          <Label htmlFor="lead" className="text-sm">Generazione contatti</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="restyling" id="restyling" />
                          <Label htmlFor="restyling" className="text-sm">Restyling sito esistente</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium">Urgenza *</Label>
                      <RadioGroup
                        value={formData.urgenza}
                        onValueChange={(value) => setFormData({...formData, urgenza: value})}
                        required
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bassa" id="bassa" />
                          <Label htmlFor="bassa" className="text-sm">Normale (30-45 giorni)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="media" id="media" />
                          <Label htmlFor="media" className="text-sm">Media (15-30 giorni)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="alta" id="alta" />
                          <Label htmlFor="alta" className="text-sm">Alta (entro 15 giorni)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Fascia di budget</Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona una fascia (opzionale)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economica">Economica (sotto €2.000)</SelectItem>
                        <SelectItem value="intermedia">Intermedia (€2.000 - €5.000)</SelectItem>
                        <SelectItem value="investimento">Investimento significativo (oltre €5.000)</SelectItem>
                        <SelectItem value="da-valutare">Da valutare insieme</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4 border rounded-lg p-4 bg-muted/30">
                    <div className="flex items-center gap-2">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <Label className="text-sm font-medium">Upload file (opzionale)</Label>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Hai ricevuto altri preventivi? Caricali qui per un confronto trasparente.
                    </p>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      multiple
                      className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-primary file:text-white hover:file:bg-primary/80"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consenso"
                      checked={formData.consenso}
                      onCheckedChange={(checked) => setFormData({...formData, consenso: !!checked})}
                      required
                      aria-describedby="consenso-help"
                    />
                    <div className="space-y-1">
                      <Label htmlFor="consenso" className="text-sm leading-relaxed cursor-pointer">
                        Accetto il trattamento dei miei dati personali per ricevere informazioni commerciali 
                        come da <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>. *
                      </Label>
                      <p id="consenso-help" className="text-xs text-muted-foreground">
                        I tuoi dati saranno trattati esclusivamente per fornirti il preventivo richiesto 
                        e non saranno ceduti a terzi.
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-hero" size="lg">
                    <Zap className="mr-2 h-4 w-4" />
                    Ricevi Preventivo in 48h
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    📞 Per progetti urgenti chiamaci al <strong>[NUMERO_TEL]</strong> per una consulenza immediata.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Domande Frequenti
              </h2>
              <p className="text-lg text-muted-foreground">
                Le risposte alle domande più comuni sui nostri servizi e processi.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.domanda}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.risposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Caso Studio: Impresa Edile
              </h2>
              <p className="text-lg text-muted-foreground">
                Come abbiamo aiutato un'impresa di ristrutturazioni a triplicare i contatti qualificati.
              </p>
            </div>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Cliente
                      </h3>
                      <p className="text-muted-foreground">
                        Impresa edile specializzata in ristrutturazioni, 15 dipendenti, 
                        operativa in Lombardia da 25 anni.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Obiettivo</h3>
                      <p className="text-muted-foreground">
                        Passare dal passaparola tradizionale a una strategia digitale 
                        per acquisire clienti qualificati con progetti di valore.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Soluzione</h3>
                      <p className="text-muted-foreground">
                        Landing page ottimizzata con portfolio lavori, form di preventivo 
                        guidato e sistema di automazione email per nurturing.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Risultati in 6 mesi
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                          <span>Contatti qualificati mensili</span>
                          <span className="text-primary font-bold">+320%</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                          <span>Valore medio progetti</span>
                          <span className="text-primary font-bold">+45%</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                          <span>ROI investimento digitale</span>
                          <span className="text-primary font-bold">580%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Investimento</h3>
                      <p className="text-muted-foreground">
                        <strong>€890 progetto iniziale</strong> + €49/mese hosting e manutenzione. 
                        ROI recuperato in meno di 60 giorni.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-center">
                    <strong>💡 Testimonianza:</strong> <em>"In 6 mesi abbiamo ottenuto più clienti di qualità 
                    che negli ultimi 2 anni. Il sito lavora per noi 24/7."</em> - Marco R., Titolare
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto a Far Crescere il Tuo Business Online?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Unisciti a oltre 150 aziende che hanno scelto la nostra esperienza per 
              il loro successo digitale. Il tuo preventivo personalizzato ti aspetta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" onClick={() => {
                document.getElementById('form-contatto')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Ricevi Preventivo Gratuito
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white" asChild>
                <Link to="/contatti">Prenota Call 15 Minuti</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// JSON-LD Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization", 
  "name": "[NOME_AZIENDA]",
  "url": "[SITO_WEB_URL]",
  "logo": "[LOGO_URL]",
  "description": "Agenzia specializzata nella creazione di siti web professionali per PMI e artigiani italiani",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IT"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[NUMERO_TEL]",
    "contactType": "customer service",
    "email": "[EMAIL]"
  },
  "sameAs": [
    "[FACEBOOK_URL]",
    "[LINKEDIN_URL]" 
  ]
};

// Email Templates
export const emailTemplates = {
  autoresponder: {
    subject: "✅ Richiesta ricevuta - Il tuo preventivo arriva in 48h",
    body: `Ciao [NOME],

grazie per aver richiesto il preventivo per il tuo progetto web!

🎯 **Cosa succede ora:**
• Analizziamo la tua richiesta nel dettaglio
• Prepariamo una proposta personalizzata 
• Ti invieremo tutto entro 48 ore

💡 **Nel frattempo:**
• Raccogli materiali utili (logo, testi, foto)
• Pensa agli obiettivi specifici che vuoi raggiungere
• Guarda il nostro portfolio su [SITO_WEB]/portfolio

Per progetti urgenti, chiamaci al [NUMERO_TEL].

A presto,
Il Team [NOME_AZIENDA]

P.S. Controlla la cartella spam se non ricevi nostre comunicazioni.`
  },
  
  followUp: {
    subject: "🚀 La tua proposta personalizzata è pronta",
    body: `Ciao [NOME],

come promesso, ecco la proposta dettagliata per il tuo progetto.

📎 **Allegato:** Preventivo-[NOME]-[DATA].pdf

**Highlights della proposta:**
• Soluzione su misura per i tuoi obiettivi
• Timeline precisa di sviluppo
• Investimento trasparente e rateizzabile
• Garanzie incluse

🎯 **Prossimo step:** 
Prenota una call gratuita di 15 minuti per approfondire: [LINK_CALENDARIO]

Hai domande? Rispondi a questa email o chiamami al [NUMERO_TEL].

Cordiali saluti,
[NOME_CONSULENTE]
[NOME_AZIENDA]`
  }
};

// Script telefonico
export const scriptTelefonico = `
**SCRIPT QUALIFICAZIONE (60 secondi)**

"Ciao [NOME], sono [TUO_NOME] di [AZIENDA]. Hai richiesto un preventivo per il tuo sito web, giusto?

Perfetto! Ho analizzato la tua richiesta. Per darti la proposta più precisa, posso farti 3 domande rapide?

1. Qual è l'obiettivo principale: presenza online, vendite o acquisire contatti?
2. Hai un sito esistente da rifare o parti da zero?
3. Entro quando vorresti essere online?

Ottimo! Ti preparo 2 alternative con investimenti diversi e te le invio entro domani. Ti va bene?

Per progetti urgenti possiamo accelerare i tempi. Preferisci ricevere tutto via email o organizziamo una call di 15 minuti per spiegarti tutto nei dettagli?"
`;

// Checklist lancio
export const checklistLancio = [
  "✅ Test form di contatto (invio + ricezione email)",
  "✅ Verifica responsive design su mobile/tablet", 
  "✅ Test velocità pagina (Lighthouse score > 90)",
  "✅ Controllo SEO: meta tag, heading structure, alt text",
  "✅ Verifica link interni ed esterni",
  "✅ Test checkbox consenso GDPR obbligatorio",
  "✅ Configurazione Google Analytics / tracking events",
  "✅ JSON-LD schema presente e validato",
  "✅ Controllo accessibilità (contrasto, aria-labels)",
  "✅ Test CTA e microcopy su tutti i dispositivi",
  "✅ Verifica integrazione con sistema CRM/email",
  "✅ Backup e monitoring uptime configurati"
];

export default Prezzi;