import { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { cn } from '../../../utils/cn';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return; // Prevent hiding when mobile drawer is active
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Hide navbar if scrolling down, show if scrolling up
      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  const openModal = (title: string, message: string) => {
    window.dispatchEvent(new CustomEvent('open-aetheris-modal', { detail: { title, message } }));
  };

  return (
    <header role="banner" className="w-full">
      <nav 
        aria-label="Main Navigation"
        className={cn(
          "fixed top-0 w-full z-sticky backdrop-blur-xl border-b border-mystic-mint/10 shadow-sm transition-all duration-normal ease-in-out",
          isScrolled || isMobileMenuOpen ? "h-16 bg-nocturnal-expedition/95" : "h-20 bg-nocturnal-expedition/30",
          visible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex justify-between items-center px-container-padding h-full max-w-7xl mx-auto">
          <a 
            href="#" 
            aria-label="Aetheris Homepage"
            className="font-display-lg text-display-lg tracking-tighter text-arctic-powder hover:text-deep-saffron transition-colors duration-normal focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none z-[60]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Aetheris
          </a>
          
          {/* Desktop Navigation links */}
          <div className="group hidden md:flex gap-8 items-center">
            <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-all duration-normal font-body-md text-body-md group-hover:opacity-40 hover:!opacity-100 focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none" href="#features">Platform</a>
            <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-all duration-normal font-body-md text-body-md group-hover:opacity-40 hover:!opacity-100 focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none" href="#features">Solutions</a>
            <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-all duration-normal font-body-md text-body-md group-hover:opacity-40 hover:!opacity-100 focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none" href="#testimonials">Resources</a>
            <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-all duration-normal font-body-md text-body-md group-hover:opacity-40 hover:!opacity-100 focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none" href="#pricing">Pricing</a>
          </div>
          
          {/* Desktop Auth buttons */}
          <div className="hidden md:flex items-center gap-6">
            <Button 
              onClick={() => openModal('Client Portal Access', 'Authenticating secure session... Client portal is currently in sandbox verification mode.')}
              className="text-mystic-mint font-medium hover:text-deep-saffron transition-colors duration-normal font-body-md text-body-md focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none cursor-pointer"
            >
              Login
            </Button>
            <Button 
              onClick={() => openModal('Access Request Queue', 'Request logged. Our orchestration team will verify your credentials shortly.')}
              className="bg-deep-saffron text-oceanic-noir px-6 py-2.5 rounded-full font-bold hover:brightness-110 transition-all hover:scale-105 active:scale-95 duration-fast focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none cursor-pointer" 
              aria-label="Request platform access"
            >
              Request Access
            </Button>
          </div>

          {/* Hamburger Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden flex-col gap-1.5 p-2 focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none cursor-pointer z-[60]"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className={cn("w-6 h-0.5 bg-mystic-mint transition-all duration-normal", isMobileMenuOpen && "rotate-45 translate-y-2 bg-deep-saffron")}></div>
            <div className={cn("w-6 h-0.5 bg-mystic-mint transition-all duration-normal", isMobileMenuOpen && "opacity-0")}></div>
            <div className={cn("w-6 h-0.5 bg-mystic-mint transition-all duration-normal", isMobileMenuOpen && "-rotate-45 -translate-y-2 bg-deep-saffron")}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div 
        className={cn(
          "fixed top-0 left-0 w-screen h-screen bg-[#0a0e1a]/95 backdrop-blur-xl z-50 flex flex-col justify-center items-center gap-8 transition-transform duration-normal ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <a 
          onClick={() => setIsMobileMenuOpen(false)}
          href="#features" 
          className="text-mystic-mint font-medium hover:text-deep-saffron transition-all font-body-lg text-2xl focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none"
        >
          Platform
        </a>
        <a 
          onClick={() => setIsMobileMenuOpen(false)}
          href="#features" 
          className="text-mystic-mint font-medium hover:text-deep-saffron transition-all font-body-lg text-2xl focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none"
        >
          Solutions
        </a>
        <a 
          onClick={() => setIsMobileMenuOpen(false)}
          href="#testimonials" 
          className="text-mystic-mint font-medium hover:text-deep-saffron transition-all font-body-lg text-2xl focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none"
        >
          Resources
        </a>
        <a 
          onClick={() => setIsMobileMenuOpen(false)}
          href="#pricing" 
          className="text-mystic-mint font-medium hover:text-deep-saffron transition-all font-body-lg text-2xl focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none"
        >
          Pricing
        </a>
        <div className="flex flex-col gap-4 w-full px-12 mt-6">
          <Button 
            onClick={() => { setIsMobileMenuOpen(false); openModal('Client Portal Access', 'Authenticating secure session... Client portal is currently in sandbox verification mode.'); }}
            className="text-mystic-mint font-medium hover:text-deep-saffron transition-colors font-body-md text-lg border border-mystic-mint/20 py-3 rounded-xl focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none cursor-pointer"
          >
            Login
          </Button>
          <Button 
            onClick={() => { setIsMobileMenuOpen(false); openModal('Access Request Queue', 'Request logged. Our orchestration team will verify your credentials shortly.'); }}
            className="bg-deep-saffron text-oceanic-noir py-3.5 rounded-xl font-bold hover:brightness-110 active:scale-95 duration-fast focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none text-lg cursor-pointer"
          >
            Request Access
          </Button>
        </div>
      </div>
    </header>
  );
}
