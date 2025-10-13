import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackButton from '@/components/BackButton';
import edilfastHero from '@/assets/edilfast-hero.jpeg';
import edilfastProjects from '@/assets/edilfast-projects.jpeg';
import edilfastServices from '@/assets/edilfast-services.jpeg';
import fornovivoHero from '@/assets/fornovivo-hero.jpeg';
import fornovivoMenu from '@/assets/fornovivo-menu.jpeg';
import fornovivoContact from '@/assets/fornovivo-contact.jpeg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from 'react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'EDILFAST - Ristrutturazioni Premium',
      description: 'Sito web elegante per azienda di ristrutturazioni edili con portfolio interattivo, slider prima/dopo e gestione progetti personalizzati.',
      images: [edilfastHero, edilfastProjects, edilfastServices],
      category: 'Edilizia',
      year: '2024',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      link: '#'
    },
    {
      id: 2,
      title: 'Forno Vivo - Pizzeria Napoletana',
      description: 'Sito web elegante per pizzeria napoletana con menu digitale interattivo, sistema di prenotazioni WhatsApp e mappa integrata.',
      images: [fornovivoHero, fornovivoMenu, fornovivoContact],
      category: 'Ristorazione',
      year: '2024',
      technologies: ['React', 'TypeScript', 'Google Maps API', 'WhatsApp Integration'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <BackButton />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Il Nostro Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Progetti realizzati con passione e competenza per clienti di diversi settori.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="card-hover group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  {project.images.length > 1 ? (
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="relative group/image">
                              <img
                                src={image}
                                alt={`${project.title} - Immagine ${imgIndex + 1}`}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <button
                                onClick={() => setSelectedImage(image)}
                                className="absolute top-2 right-2 p-2 bg-white/90 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-white"
                              >
                                <Maximize2 className="w-4 h-4 text-foreground" />
                              </button>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  ) : (
                    <div className="relative group/image">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <button
                        onClick={() => setSelectedImage(project.images[0])}
                        className="absolute top-2 right-2 p-2 bg-white/90 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-white"
                      >
                        <Maximize2 className="w-4 h-4 text-foreground" />
                      </button>
                    </div>
                  )}
                  
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          <img
            src={selectedImage || ''}
            alt="Immagine ingrandita"
            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
          />
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Il Tuo Progetto Sarà il Prossimo
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Sei pronto a trasformare la tua idea in realtà? Contattaci per una consulenza gratuita.
            </p>
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/contatti">Inizia il Tuo Progetto</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;