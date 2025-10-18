import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Settings, Lightbulb } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mov';
import heroImage from '@/assets/hero-image.jpg';
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video src={heroVideo} autoPlay muted loop playsInline preload="metadata" poster={heroImage} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Il <span className="bg-gradient-to-r from-white to-primary-lighter bg-clip-text text-transparent">Futuro</span> dei
              <br />
              Siti Web per PMI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">Aiutiamo le PMI a farsi trovare online con esperienze digitali su misura.</p>
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
            <p className="text-lg text-muted-foreground mb-12 animate-fade-in-up" style={{
            animationDelay: '0.1s'
          }}>Siamo due ragazzi universitari con la passione per il digitale: uniamo competenze di programmazione e intelligenza artificiale per creare siti web personalizzati, veloci e accessibili.
La nostra missione è aiutare le PMI a portare la loro attività online senza costi esagerati, offrendo soluzioni moderne e su misura che fanno davvero la differenza.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Card className="card-hover animate-fade-in-up" style={{
              animationDelay: '0.2s'
            }}>
                <CardContent className="p-6 text-center">
                  <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Massima Personalizzazione</h3>
                  <p className="text-muted-foreground">
                    Ogni sito è progettato sulle esigenze del cliente, non un template standard.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover animate-fade-in-up" style={{
              animationDelay: '0.3s'
            }}>
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Velocità e Semplicità</h3>
                  <p className="text-muted-foreground">
                    Realizziamo e consegniamo in tempi rapidi, rendendo il processo facile e senza stress.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover animate-fade-in-up" style={{
              animationDelay: '0.4s'
            }}>
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Supporto Creativo</h3>
                  <p className="text-muted-foreground">
                    Se non sai cosa inserire nel tuo sito, ti guidiamo noi con idee, testi e struttura adatte alla tua attività.
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
    </div>;
};
export default Home;