import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, Zap, Smartphone, Users, Target, TrendingUp } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mov';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Il <span className="bg-gradient-to-r from-white to-primary-lighter bg-clip-text text-transparent">Futuro</span> dei
              <br />
              Siti Web per PMI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Creiamo esperienze digitali innovative che trasformano le PMI in leader del loro settore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-hero text-lg px-8 py-4" asChild>
                <Link to="/servizi">
                  Inizia Ora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-primary bg-white/90 hover:bg-white hover:text-primary text-lg px-8 py-4" asChild>
                <Link to="/portfolio">Vedi Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Chi Siamo
            </h2>
            <p className="text-lg text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Siamo un team di sviluppatori e designer appassionati, specializzati nella creazione di soluzioni digitali 
              innovative per piccole e medie imprese. La nostra missione è rendere la tecnologia accessibile e trasformativa 
              per ogni business, indipendentemente dalle dimensioni.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Card className="card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Team Esperto</h3>
                  <p className="text-muted-foreground">
                    Anni di esperienza nello sviluppo web e design UI/UX
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Focus PMI</h3>
                  <p className="text-muted-foreground">
                    Comprendiamo le esigenze specifiche delle piccole e medie imprese
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Risultati Misurabili</h3>
                  <p className="text-muted-foreground">
                    Ogni progetto è orientato al ROI e al successo del cliente
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cosa Facciamo Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cosa Facciamo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Offriamo soluzioni complete per la trasformazione digitale della tua azienda, 
                dal design alla tecnologia più avanzata.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/servizi/creazione-siti-web" className="block">
                <Card className="card-hover cursor-pointer">
                  <CardContent className="p-6">
                    <Globe className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Creazione Siti Web</h3>
                    <p className="text-muted-foreground mb-4">
                      Siti web moderni, responsive e ottimizzati per le performance e la conversione.
                    </p>
                    <span className="text-primary font-medium link-underline">
                      Scopri di più
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/servizi/restyling-upgrade" className="block">
                <Card className="card-hover cursor-pointer">
                  <CardContent className="p-6">
                    <Zap className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Restyling & Upgrade</h3>
                    <p className="text-muted-foreground mb-4">
                      Rinnoviamo siti esistenti con design moderni e tecnologie all'avanguardia.
                    </p>
                    <span className="text-primary font-medium link-underline">
                      Scopri di più
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/servizi/ottimizzazione-seo" className="block">
                <Card className="card-hover cursor-pointer">
                  <CardContent className="p-6">
                    <Smartphone className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Ottimizzazione SEO</h3>
                    <p className="text-muted-foreground mb-4">
                      Miglioriamo la visibilità online con strategie SEO avanzate e content optimization.
                    </p>
                    <span className="text-primary font-medium link-underline">
                      Scopri di più
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="btn-hero" asChild>
                <Link to="/servizi">
                  Vedi Tutti i Servizi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto a Trasformare la Tua Presenza Online?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Richiedi una consulenza gratuita e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi digitali.
            </p>
            <Button size="lg" variant="outline" className="text-primary border-primary bg-white/90 hover:bg-white hover:text-primary text-lg px-8 py-4" asChild>
              <Link to="/contatti">Consulenza Gratuita</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;