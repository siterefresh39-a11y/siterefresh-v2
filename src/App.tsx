import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Servizi from "./pages/Servizi";
import Portfolio from "./pages/Portfolio";
import Contatti from "./pages/Contatti";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import CreazioneSitiWeb from "./pages/servizi/CreazioneSitiWeb";
import RestylingSitiWeb from "./pages/servizi/RestylingSitiWeb";
import OttimizzazioneSEO from "./pages/servizi/OttimizzazioneSEO";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="servizi" element={<Servizi />} />
            <Route path="servizi/creazione-siti-web" element={<CreazioneSitiWeb />} />
            <Route path="servizi/restyling-upgrade" element={<RestylingSitiWeb />} />
            <Route path="servizi/ottimizzazione-seo" element={<OttimizzazioneSEO />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contatti" element={<Contatti />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
