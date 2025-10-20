import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { Mail, MessageCircle, MapPin, Phone, Send, Clock, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import BackButton from '@/components/BackButton';
import emailjs from '@emailjs/browser';

// Schema di validazione con zod
const contactSchema = z.object({
  nome: z.string().trim().min(2, "Nome deve essere di almeno 2 caratteri").max(100, "Nome troppo lungo"),
  cognome: z.string().trim().min(2, "Cognome deve essere di almeno 2 caratteri").max(100, "Cognome troppo lungo"),
  email: z.string().trim().email("Email non valida").max(255, "Email troppo lunga"),
  telefono: z.string().trim().min(10, "Telefono deve essere di almeno 10 caratteri").max(15, "Telefono troppo lungo"),
  azienda: z.string().trim().max(200, "Nome azienda troppo lungo").optional(),
  tipoServizio: z.string().refine(val => val === "creazione" || val === "restyling", "Seleziona il tipo di servizio"),
  piano: z.string().min(1, "Seleziona un piano"),
  descrizione: z.string().trim().max(1500, "Descrizione troppo lunga").optional(),
  obiettivi: z.array(z.string()).min(1, "Seleziona almeno un obiettivo"),
  sitoEsistente: z.string().trim().optional(),
  consenso: z.boolean().refine(val => val === true, "Devi accettare il trattamento dati")
});
type FormData = z.infer<typeof contactSchema>;

// Dati statici spostati fuori dal componente per evitare ri-creazione
const PIANI = {
  creazione: [{
    value: 'starter',
    label: 'Starter',
    description: 'Sito fino a 5 pagine, ideale per professionisti'
  }, {
    value: 'growth',
    label: 'Growth',
    description: 'Sito completo con CMS e funzionalità avanzate',
    recommended: true
  }, {
    value: 'scale',
    label: 'Scale',
    description: 'Soluzione enterprise con e-commerce e integrazioni'
  }],
  restyling: [{
    value: 'refresh',
    label: 'Refresh',
    description: 'Aggiornamento design e ottimizzazioni base'
  }, {
    value: 'transform',
    label: 'Transform',
    description: 'Restyling completo con nuove funzionalità',
    recommended: true
  }, {
    value: 'revolution',
    label: 'Revolution',
    description: 'Ricostruzione totale con architettura moderna'
  }]
};

const OBIETTIVI = ['Aumentare la visibilità online', 'Generare più contatti e lead', 'Migliorare l\'immagine aziendale', 'Ottimizzare le performance'];

const Contatti = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState<Partial<FormData>>({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    azienda: '',
    tipoServizio: '',
    piano: '',
    descrizione: '',
    obiettivi: [],
    sitoEsistente: '',
    consenso: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    try {
      // Validazione con zod
      const validatedData = contactSchema.parse(formData);

      // Inizializza EmailJS
      emailjs.init('IBTPm3OkxIMEmGuoV');

      // Prepara i dati per EmailJS
      const templateParams = {
        nome: validatedData.nome,
        cognome: validatedData.cognome,
        email: validatedData.email,
        telefono: validatedData.telefono,
        azienda: validatedData.azienda || 'Non specificata',
        tipoServizio: validatedData.tipoServizio === 'creazione' ? 'Creazione Nuovo Sito' : 'Restyling Sito Esistente',
        piano: validatedData.piano,
        descrizione: validatedData.descrizione || 'Nessuna descrizione fornita - ti contattiamo per approfondire',
        obiettivi: validatedData.obiettivi.join(', '),
        sitoEsistente: validatedData.sitoEsistente || 'Nessun sito esistente',
      };

      // Invia email tramite EmailJS
      await emailjs.send(
        'service_skj8npu',
        'template_kcv18qn',
        templateParams
      );

      // Analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'preventivo_form_submit', {
          event_category: 'form',
          event_label: `${validatedData.tipoServizio}_${validatedData.piano}`,
          value: 1
        });
      }
      
      toast({
        title: "Richiesta Inviata con Successo!",
        description: "Riceverai la tua proposta personalizzata entro 72 ore. Ti contatteremo presto!"
      });

      // Reset form
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        azienda: '',
        tipoServizio: '',
        piano: '',
        descrizione: '',
        obiettivi: [],
        sitoEsistente: '',
        consenso: false
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap: Record<string, string> = {};
        error.issues.forEach(err => {
          if (err.path[0]) {
            errorMap[err.path[0] as string] = err.message;
          }
        });
        setErrors(errorMap);
        toast({
          title: "Errori nel Form",
          description: "Correggi gli errori evidenziati e riprova.",
          variant: "destructive"
        });
      } else {
        console.error('Errore invio EmailJS:', error);
        toast({
          title: "Errore nell'invio",
          description: "Si è verificato un errore. Riprova o contattaci direttamente.",
          variant: "destructive"
        });
      }
    }
    setIsSubmitting(false);
  };
  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };
  const handleObiettiviChange = (obiettivo: string, checked: boolean) => {
    const currentObiettivi = formData.obiettivi || [];
    if (checked) {
      handleInputChange('obiettivi', [...currentObiettivi, obiettivo]);
    } else {
      handleInputChange('obiettivi', currentObiettivi.filter(o => o !== obiettivo));
    }
  };
  
  const getCurrentPiani = useMemo(() => {
    return formData.tipoServizio ? PIANI[formData.tipoServizio] : [];
  }, [formData.tipoServizio]);
  return <div className="min-h-screen pt-16">
      <BackButton />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Richiedi il Tuo Preventivo Personalizzato
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Compila il form dettagliato per ricevere una proposta su misura per il tuo progetto. 
            <strong> Risposta garantita entro 72 ore.</strong>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Consulenza gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Risposta in 72h</span>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-3xl mb-2 flex items-center gap-2">
                    <Send className="h-8 w-8 text-primary" />
                    Richiesta Preventivo
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Più informazioni ci fornisci, più precisa sarà la nostra proposta per il tuo progetto.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Dati Personali */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold border-b pb-2">📋 Dati di Contatto</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nome">Nome *</Label>
                          <Input id="nome" type="text" placeholder="Il tuo nome" value={formData.nome} onChange={e => handleInputChange('nome', e.target.value)} className={errors.nome ? 'border-destructive' : 'focus:ring-primary'} aria-describedby={errors.nome ? 'nome-error' : undefined} />
                          {errors.nome && <p id="nome-error" className="text-sm text-destructive">{errors.nome}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cognome">Cognome *</Label>
                          <Input id="cognome" type="text" placeholder="Il tuo cognome" value={formData.cognome} onChange={e => handleInputChange('cognome', e.target.value)} className={errors.cognome ? 'border-destructive' : 'focus:ring-primary'} aria-describedby={errors.cognome ? 'cognome-error' : undefined} />
                          {errors.cognome && <p id="cognome-error" className="text-sm text-destructive">{errors.cognome}</p>}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" placeholder="tua@email.com" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} className={errors.email ? 'border-destructive' : 'focus:ring-primary'} aria-describedby={errors.email ? 'email-error' : undefined} />
                          {errors.email && <p id="email-error" className="text-sm text-destructive">{errors.email}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefono">Telefono *</Label>
                          <Input id="telefono" type="tel" placeholder="+39 123 456 7890" value={formData.telefono} onChange={e => handleInputChange('telefono', e.target.value)} className={errors.telefono ? 'border-destructive' : 'focus:ring-primary'} aria-describedby={errors.telefono ? 'telefono-error' : undefined} />
                          {errors.telefono && <p id="telefono-error" className="text-sm text-destructive">{errors.telefono}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="azienda">Azienda</Label>
                        <Input id="azienda" type="text" placeholder="Nome della tua azienda (opzionale)" value={formData.azienda} onChange={e => handleInputChange('azienda', e.target.value)} className="focus:ring-primary" />
                      </div>
                    </div>

                    {/* Tipo Servizio */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold border-b pb-2">🎯 Tipo di Servizio</h3>
                      <Label>Di cosa hai bisogno? *</Label>
                      <RadioGroup value={formData.tipoServizio} onValueChange={(value: string) => {
                      handleInputChange('tipoServizio', value);
                      handleInputChange('piano', ''); // Reset piano quando cambia servizio
                    }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-secondary cursor-pointer">
                            <RadioGroupItem value="creazione" id="creazione" />
                            <Label htmlFor="creazione" className="cursor-pointer flex-1">
                              <div className="flex items-center gap-3">
                                <Globe className="h-5 w-5 text-primary" />
                                <div>
                                  <div className="font-medium">Creazione Nuovo Sito</div>
                                  <div className="text-sm text-muted-foreground">Parto da zero</div>
                                </div>
                              </div>
                            </Label>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-secondary cursor-pointer">
                            <RadioGroupItem value="restyling" id="restyling" />
                            <Label htmlFor="restyling" className="cursor-pointer flex-1">
                              <div className="flex items-center gap-3">
                                <Zap className="h-5 w-5 text-primary" />
                                <div>
                                  <div className="font-medium">Restyling Sito Esistente</div>
                                  <div className="text-sm text-muted-foreground">Ho già un sito da rinnovare</div>
                                </div>
                              </div>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                      {errors.tipoServizio && <p className="text-sm text-destructive">{errors.tipoServizio}</p>}
                    </div>

                    {/* Piano */}
                    {formData.tipoServizio && <div className="space-y-4">
                        <h3 className="text-xl font-semibold border-b pb-2">📦 Piano Desiderato</h3>
                        <Label>Quale piano ti interessa? *</Label>
                        <RadioGroup value={formData.piano} onValueChange={value => handleInputChange('piano', value)} className="space-y-3">
                          {getCurrentPiani.map(piano => <div key={piano.value} className="relative">
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-secondary cursor-pointer">
                                <RadioGroupItem value={piano.value} id={piano.value} />
                                <Label htmlFor={piano.value} className="cursor-pointer flex-1">
                                  <div className="flex justify-between items-center">
                                    <div>
                                      <div className="font-medium flex items-center gap-2">
                                        {piano.label}
                                        {piano.recommended && <Badge className="text-xs">Consigliato</Badge>}
                                      </div>
                                      <div className="text-sm text-muted-foreground">{piano.description}</div>
                                    </div>
                                  </div>
                                </Label>
                              </div>
                            </div>)}
                        </RadioGroup>
                        {errors.piano && <p className="text-sm text-destructive">{errors.piano}</p>}
                      </div>}

                    {/* Sito Esistente (solo per restyling) */}
                    {formData.tipoServizio === 'restyling' && <div className="space-y-2">
                        <Label htmlFor="sitoEsistente">URL Sito Attuale</Label>
                        <Input id="sitoEsistente" type="url" placeholder="https://tuosito.it" value={formData.sitoEsistente} onChange={e => handleInputChange('sitoEsistente', e.target.value)} className="focus:ring-primary" />
                        <p className="text-sm text-muted-foreground">
                          Ci aiuta a valutare la situazione attuale
                        </p>
                      </div>}


                    {/* Obiettivi */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold border-b pb-2">🎯 Obiettivi del Progetto</h3>
                      <Label>Cosa vuoi ottenere con il tuo sito? (Seleziona tutti quelli che ti interessano) *</Label>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                         {OBIETTIVI.map(obiettivo => <div key={obiettivo} className="flex items-center space-x-2">
                             <Checkbox id={obiettivo} checked={formData.obiettivi?.includes(obiettivo) || false} onCheckedChange={checked => handleObiettiviChange(obiettivo, checked as boolean)} />
                             <Label htmlFor={obiettivo} className="text-sm cursor-pointer">
                               {obiettivo}
                             </Label>
                           </div>)}
                       </div>
                      {errors.obiettivi && <p className="text-sm text-destructive">{errors.obiettivi}</p>}
                    </div>

                    {/* Descrizione */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold border-b pb-2">📝 Descrizione del Progetto</h3>
                      <Label htmlFor="descrizione">Raccontaci di più sul tuo progetto (facoltativo)</Label>
                      <Textarea id="descrizione" placeholder="Descrivi il tuo business, target, funzionalità desiderate, esempi di siti... Ti contattiamo comunque per approfondire!" value={formData.descrizione} onChange={e => handleInputChange('descrizione', e.target.value)} rows={6} className={`resize-none ${errors.descrizione ? 'border-destructive' : 'focus:ring-primary'}`} aria-describedby={errors.descrizione ? 'descrizione-error' : undefined} />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Facoltativo - Ti contattiamo per approfondire</span>
                        <span>{formData.descrizione?.length || 0}/1500</span>
                      </div>
                      {errors.descrizione && <p id="descrizione-error" className="text-sm text-destructive">{errors.descrizione}</p>}
                    </div>

                    {/* Consenso */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-4 border rounded-lg bg-muted/30">
                        <Checkbox id="consenso" checked={formData.consenso || false} onCheckedChange={checked => handleInputChange('consenso', checked as boolean)} className={errors.consenso ? 'border-destructive' : ''} />
                        <Label htmlFor="consenso" className="text-sm cursor-pointer leading-relaxed">
                          Acconsento al trattamento dei miei dati personali secondo la{' '}
                          <a href="/privacy" className="text-primary underline" target="_blank">Privacy Policy</a>{' '}
                          per ricevere la proposta commerciale e comunicazioni relative ai servizi richiesti. *
                        </Label>
                      </div>
                      {errors.consenso && <p className="text-sm text-destructive">{errors.consenso}</p>}
                    </div>
                    
                    <Button type="submit" className="w-full btn-hero text-lg py-4" disabled={isSubmitting} size="lg">
                      {isSubmitting ? <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Invio in corso...
                        </> : <>
                          <Send className="mr-3 h-5 w-5" />
                          Invia Richiesta Preventivo
                          <ArrowRight className="ml-3 h-5 w-5" />
                        </>}
                    </Button>

                    
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Garanzie */}
              <Card className="shadow-card bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    Le Nostre Garanzie
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Risposta in 72h</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Consulenza gratuita</strong> senza impegno</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span><strong>Preventivo dettagliato</strong> e trasparente</span>
                  </div>
                  
                </CardContent>
              </Card>

              {/* Contatti Diretti */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Contatti Diretti</CardTitle>
                  <p className="text-sm text-muted-foreground">Preferisci parlare direttamente con noi?</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href="mailto:info@siterefresh.it" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors group">
                    <div className="p-2 bg-primary-lighter rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail className="h-4 w-4 text-primary group-hover:text-white" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">info@siterefresh.it</div>
                    </div>
                  </a>

                  <a href={`https://wa.me/393001234567?text=${encodeURIComponent('Ciao, vorrei ricevere informazioni sui vostri servizi di creazione siti web.')}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors group">
                    <div className="p-2 bg-primary-lighter rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <MessageCircle className="h-4 w-4 text-primary group-hover:text-white" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-muted-foreground">+39 300 123 4567</div>
                    </div>
                  </a>

                  <a href="tel:+393001234567" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors group">
                    <div className="p-2 bg-primary-lighter rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="h-4 w-4 text-primary group-hover:text-white" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Telefono</div>
                      <div className="text-muted-foreground">+39 300 123 4567</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Processo */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Come Funziona</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <div>
                        <div className="font-medium">Invii la richiesta</div>
                        <div className="text-muted-foreground">Compili il form dettagliato</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <div>
                        <div className="font-medium">Ti contattiamo</div>
                        <div className="text-muted-foreground">Per approfondire il progetto</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <div>
                        <div className="font-medium">Analizziamo il progetto</div>
                        <div className="text-muted-foreground">Studiamo le tue esigenze</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <div>
                        <div className="font-medium">Proposta dettagliata</div>
                        <div className="text-muted-foreground">Entro 72 ore</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contatti;