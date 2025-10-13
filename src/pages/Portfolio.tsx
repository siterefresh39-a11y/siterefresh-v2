import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Tag, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackButton from '@/components/BackButton';
import edilfastHero from '@/assets/edilfast-hero.jpeg';
import edilfastProjects from '@/assets/edilfast-projects.jpeg';
import edilfastServices from '@/assets/edilfast-services.jpeg';
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
      title: 'E-commerce Moda Sostenibile',
      description: 'Piattaforma e-commerce completa con sistema di pagamento integrato e gestione inventario.',
      images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center'],
      category: 'E-commerce',
      year: '2024',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      link: '#'
    },
    {
      id: 3,
      title: 'Agenzia Immobiliare Digitale',
      description: 'Sito web moderno con ricerca avanzata proprietà e tour virtuali 360°.',
      images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop&crop=center'],
      category: 'Immobiliare',
      year: '2024',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 4,
      title: 'Studio Medico Specialistico',
      description: 'Piattaforma per prenotazioni online con calendario integrato e gestione pazienti.',
      images: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop&crop=center'],
      category: 'Sanità',
      year: '2023',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 5,
      title: 'Ristorante Gourmet',
      description: 'Sito web elegante con menu digitale, prenotazioni online e delivery integrato.',
      images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop&crop=center'],
      category: 'Ristorazione',
      year: '2023',
      technologies: ['WordPress', 'WooCommerce', 'Custom PHP'],
      link: '#'
    },
    {
      id: 6,
      title: 'Startup Fintech',
      description: 'Landing page ad alta conversione per servizi finanziari innovativi.',
      images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center'],
      category: 'Fintech',
      year: '2024',
      technologies: ['React', 'Framer Motion', 'Chart.js'],
      link: '#'
    },
    {
      id: 7,
      title: 'Consulenza Aziendale',
      description: 'Sito corporate professionale con blog e area clienti riservata.',
      images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center'],
      category: 'Corporate',
      year: '2023',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      link: '#'
    }
  ];

  const categories = ['Tutti', 'Edilizia', 'E-commerce', 'Corporate', 'Sanità', 'Ristorazione', 'Fintech', 'Immobiliare'];

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

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
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
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Tag className="w-3 h-3 mr-1" />
                    <span>Tecnologie:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Progetti Completati</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Clienti Soddisfatti</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Anni di Esperienza</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Supporto Tecnico</div>
            </div>
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
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contatti">Inizia il Tuo Progetto</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;