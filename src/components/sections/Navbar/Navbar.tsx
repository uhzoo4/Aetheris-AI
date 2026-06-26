import { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { cn } from '../../../utils/cn';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-sticky backdrop-blur-xl border-b border-mystic-mint/10 shadow-sm transition-all duration-normal ease-in-out",
      isScrolled ? "h-16 bg-nocturnal-expedition/95" : "h-20 bg-nocturnal-expedition/30"
    )}>
      <div className="flex justify-between items-center px-container-padding h-full max-w-7xl mx-auto">
        <div className="font-display-lg text-display-lg tracking-tighter text-arctic-powder">Aetheris</div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-colors duration-normal font-body-md text-body-md" href="#">Platform</a>
          <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-colors duration-normal font-body-md text-body-md" href="#">Solutions</a>
          <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-colors duration-normal font-body-md text-body-md" href="#">Resources</a>
          <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-colors duration-normal font-body-md text-body-md" href="#">Pricing</a>
        </div>
        <div className="flex items-center gap-6">
          <Button className="text-mystic-mint font-medium hover:text-deep-saffron transition-colors duration-normal font-body-md text-body-md">Login</Button>
          <Button className="bg-deep-saffron text-oceanic-noir px-6 py-2.5 rounded-full font-bold hover:brightness-110 transition-all">Request Access</Button>
        </div>
      </div>
    </nav>
  );
}
