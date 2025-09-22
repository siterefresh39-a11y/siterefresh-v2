import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnHero, setIsOnHero] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsOnHero(false);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        setIsOnHero(heroRect.bottom > 100);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contatti', path: '/contatti' },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-2 left-4 right-4 z-50 backdrop-blur-xl border rounded-2xl shadow-lg transition-all duration-300 ${
      isOnHero 
        ? 'bg-white/80 border-white/30 shadow-black/10' 
        : 'bg-white/10 border-white/20 shadow-black/5'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="SiteRefresh Logo" 
              className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SiteRefresh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-2 px-1 text-sm font-medium transition-colors duration-200 link-underline ${
                  isActiveLink(item.path)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default" className="btn-hero" asChild>
              <Link to="/contatti">Preventivo Gratuito</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-fade-in-up backdrop-blur-xl bg-white/5 rounded-b-2xl -mx-6 px-6 mt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`py-2 px-4 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActiveLink(item.path)
                      ? 'text-primary bg-primary-lighter'
                      : 'text-foreground hover:text-primary hover:bg-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button variant="default" className="btn-hero w-full" asChild>
                  <Link to="/contatti" onClick={() => setIsMenuOpen(false)}>
                    Preventivo Gratuito
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;