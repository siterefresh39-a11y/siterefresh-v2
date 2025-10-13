import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle } from 'lucide-react';
import BackButton from '@/components/BackButton';

const FAQ = () => {
  const faqData = [
    {
      question: "Quanto tempo richiede la realizzazione di un sito web?",
      answer: "I tempi dipendono dalla complessità del progetto. Per un sito web standard, generalmente richiediamo 2-4 settimane, mentre per progetti più complessi come e-commerce o portali aziendali possono essere necessarie 6-8 settimane. Ti forniremo sempre una timeline dettagliata durante la consulenza iniziale."
    },
    {
      question: "Il sito sarà ottimizzato per i dispositivi mobili?",
      answer: "Assolutamente sì! Tutti i nostri siti sono sviluppati con approccio mobile-first, garantendo un'esperienza ottimale su smartphone, tablet e desktop. Testiamo accuratamente su tutti i dispositivi più utilizzati per assicurare perfetta compatibilità e performance."
    },
    {
      question: "Fornite servizi di manutenzione e aggiornamento?",
      answer: "Sì, offriamo pacchetti di manutenzione che includono aggiornamenti di sicurezza, backup automatici, monitoraggio delle performance e supporto tecnico. Puoi scegliere tra diversi livelli di servizio in base alle tue esigenze specifiche."
    },
    {
      question: "Posso gestire i contenuti del sito autonomamente?",
      answer: "Certamente! Integriamo sistemi di gestione contenuti (CMS) user-friendly che ti permettono di aggiornare testi, immagini e pagine in modo semplice e intuitivo. Ti forniremo anche una formazione completa per utilizzare al meglio il sistema."
    },
    {
      question: "Il sito sarà ottimizzato per i motori di ricerca (SEO)?",
      answer: "Sì, tutti i nostri siti sono sviluppati seguendo le best practice SEO: struttura HTML semantica, velocità di caricamento ottimizzata, meta tag appropriati, contenuti strutturati e compatibilità mobile. Offriamo anche servizi SEO avanzati per massimizzare la visibilità online."
    },
    {
      question: "Cosa include il servizio di restyling?",
      answer: "Il restyling include: analisi del sito esistente, nuovo design moderno e responsive, ottimizzazione delle performance, aggiornamento delle tecnologie, miglioramento dell'esperienza utente e migrazione sicura dei contenuti esistenti. Manteniamo sempre il posizionamento SEO acquisito."
    },
    {
      question: "Offrite supporto dopo il lancio del sito?",
      answer: "Sì, offriamo 30 giorni di supporto gratuito post-lancio per eventuali bug o piccole modifiche. Successivamente, puoi scegliere tra pacchetti di supporto mensili o interventi puntuali. Siamo sempre disponibili per assistenza tecnica e consulenza."
    },
    {
      question: "Cosa sono gli AI Agents e quando saranno disponibili?",
      answer: "Gli AI Agents sono sistemi di intelligenza artificiale che automatizzano processi aziendali come assistenza clienti, lead qualification e supporto 24/7. Stiamo finalizzando questa tecnologia innovativa e sarà disponibile nel primo trimestre 2025. Contattaci per essere tra i primi a testare questa soluzione rivoluzionaria."
    },
    {
      question: "Lavorate con aziende di tutte le dimensioni?",
      answer: "Siamo specializzati nel supportare piccole e medie imprese (PMI), ma lavoriamo con aziende di ogni dimensione. La nostra esperienza ci permette di adattare soluzioni scalabili e personalizzate per startup, aziende familiari e corporate consolidate."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <BackButton />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full">
              <HelpCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Domande Frequenti
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Trova rapidamente le risposte alle domande più comuni sui nostri servizi e processi di lavoro.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 py-2 shadow-card hover:shadow-hero transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Non Hai Trovato la Risposta?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Il nostro team è qui per aiutarti. Contattaci direttamente per ricevere assistenza personalizzata e risposte dettagliate alle tue domande specifiche.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="btn-hero" asChild>
                <Link to="/contatti">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contattaci
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Altre Risorse Utili
            </h2>
            <p className="text-lg text-muted-foreground">
              Esplora le nostre altre sezioni per saperne di più sui nostri servizi e progetti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg border border-border hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-primary-lighter rounded-lg flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Servizi Dettagliati</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Scopri tutti i nostri servizi e come possono aiutare la tua azienda.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/servizi">Vedi Servizi</Link>
              </Button>
            </div>

            <div className="text-center p-6 rounded-lg border border-border hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-primary-lighter rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Portfolio Progetti</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Guarda i progetti che abbiamo realizzato per i nostri clienti.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/portfolio">Vedi Portfolio</Link>
              </Button>
            </div>

            <div className="text-center p-6 rounded-lg border border-border hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-primary-lighter rounded-lg flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Consulenza Gratuita</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Prenota una consulenza per discutere del tuo progetto specifico.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/contatti">Prenota Consulenza</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;