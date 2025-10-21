import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import logo from '@/assets/logo.png';
const Footer = () => {
  return <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="SiteRefresh Logo" className="h-10 w-10" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SiteRefresh
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Creiamo siti web moderni e ottimizzati per PMI. Design innovativo e soluzioni tech all'avanguardia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Link Utili</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/servizi" className="text-muted-foreground hover:text-primary transition-colors link-underline">
                Servizi
              </Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors link-underline">
                Portfolio
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors link-underline">
                FAQ
              </Link>
              <Link to="/contatti" className="text-muted-foreground hover:text-primary transition-colors link-underline">
                Contatti
              </Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors link-underline">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contattaci</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:siterefresh39@gmail.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>siterefresh39@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 SiteRefresh. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;