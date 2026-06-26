import { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { cn } from '../../../utils/cn';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
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
  }, [lastScrollY]);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-sticky backdrop-blur-xl border-b border-mystic-mint/10 shadow-sm transition-all duration-normal ease-in-out",
      isScrolled ? "h-16 bg-nocturnal-expedition/95" : "h-20 bg-nocturnal-expedition/30",
      visible ? "translate-y-0" : "-translate-y-full"
    )}>
      <div className="flex justify-between items-center px-container-padding h-full max-w-7xl mx-auto">
        <div className="font-display-lg text-display-lg tracking-tighter text-arctic-powder hover:text-deep-saffron transition-colors duration-normal">
          Aetheris
        </div>
        <div className="group hidden md:flex gap-8 items-center">
          <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-all duration-normal font-body-md text-body-md group-hover:opacity-40 hover:!opacity-100" href="#">Platform</a>
          <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-all duration-normal font-body-md text-body-md group-hover:opacity-40 hover:!opacity-100" href="#">Solutions</a>
          <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-all duration-normal font-body-md text-body-md group-hover:opacity-40 hover:!opacity-100" href="#">Resources</a>
          <a className="text-mystic-mint font-medium hover:text-deep-saffron transition-all duration-normal font-body-md text-body-md group-hover:opacity-40 hover:!opacity-100" href="#">Pricing</a>
        </div>
        <div className="flex items-center gap-6">
          <Button className="text-mystic-mint font-medium hover:text-deep-saffron transition-colors duration-normal font-body-md text-body-md">Login</Button>
          <Button className="bg-deep-saffron text-oceanic-noir px-6 py-2.5 rounded-full font-bold hover:brightness-110 transition-all hover:scale-105 active:scale-95 duration-fast">Request Access</Button>
        </div>
      </div>
    </nav>
  );
}
