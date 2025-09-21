import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MessageCircle, MapPin, Phone, Send, Clock } from 'lucide-react';

const Contatti = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    azienda: '',
    messaggio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulazione invio form
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Messaggio Inviato!",
      description: "Ti risponderemo entro 24 ore. Grazie per averci contattato!",
    });

    setFormData({ nome: '', email: '', azienda: '', messaggio: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contattaci
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Hai un progetto in mente? Parliamone insieme e trasformiamo la tua visione in realtà.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">Richiedi un Preventivo Gratuito</CardTitle>
                  <p className="text-muted-foreground">
                    Compila il form e ti ricontatteremo entro 24 ore con una proposta personalizzata.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          placeholder="Il tuo nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          className="focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="la-tua-email@esempio.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="azienda">Azienda</Label>
                      <Input
                        id="azienda"
                        name="azienda"
                        type="text"
                        placeholder="Nome della tua azienda (opzionale)"
                        value={formData.azienda}
                        onChange={handleChange}
                        className="focus:ring-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="messaggio">Descrizione Progetto *</Label>
                      <Textarea
                        id="messaggio"
                        name="messaggio"
                        placeholder="Descrivi il tuo progetto, obiettivi e requisiti specifici..."
                        value={formData.messaggio}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="focus:ring-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-hero text-lg py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Invia Richiesta
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contacts */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Contatti Diretti</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="mailto:info@siterefresh.it"
                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 bg-primary-lighter rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">info@siterefresh.it</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/393001234567?text=Ciao,%20sono%20interessato%20ai%20vostri%20servizi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 bg-primary-lighter rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <MessageCircle className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">+39 300 123 4567</div>
                    </div>
                  </a>

                  <a
                    href="tel:+393001234567"
                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 bg-primary-lighter rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Telefono</div>
                      <div className="text-sm text-muted-foreground">+39 300 123 4567</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Office Info */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Studio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-lighter rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Indirizzo</div>
                      <div className="text-sm text-muted-foreground">
                        Via Roma 123<br />
                        20121 Milano, Italia
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-lighter rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Orari</div>
                      <div className="text-sm text-muted-foreground">
                        Lun - Ven: 9:00 - 18:00<br />
                        Sab - Dom: Su appuntamento
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="shadow-card bg-gradient-card">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Risposta Garantita</h3>
                    <p className="text-muted-foreground text-sm">
                      Ti rispondiamo entro <strong>72 ore</strong> con una proposta personalizzata per il tuo progetto.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hai Domande?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Consulta le nostre FAQ per trovare risposta alle domande più comuni sui nostri servizi.
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="/faq">Vedi le FAQ</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contatti;