import { SvgIcon } from '../../ui/SvgIcon';
import { Button } from '../../ui/Button';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useMagnetic } from '../../../hooks/useMagnetic';
import { cn } from '../../../utils/cn';

export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const primaryBtnRef = useMagnetic<HTMLButtonElement>({ strength: 0.15 });
  const secondaryBtnRef = useMagnetic<HTMLButtonElement>({ strength: 0.1 });

  return (
    <section className="relative min-h-[921px] flex flex-col items-center justify-center text-center px-container-padding py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] ambient-glow rounded-full animate-drift"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] ambient-glow-secondary rounded-full opacity-10 animate-drift-reverse"></div>
      </div>
      
      <div 
        ref={ref as any} 
        className="relative z-10 max-w-4xl"
      >
        <div className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-forsythia/20 bg-forsythia/5 mb-8 transition-all duration-cinematic",
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <span className="font-code-md text-code-md text-forsythia uppercase tracking-widest">Version 4.0 Launch</span>
          <div className="w-1 h-1 rounded-full bg-forsythia animate-pulse"></div>
        </div>

        <h1 className="font-display-lg text-6xl md:text-8xl leading-tight mb-8 tracking-tighter text-arctic-powder">
          <span className="reveal-line-wrapper">
            <span className={cn("reveal-line-content", isIntersecting && "active")} style={{ transitionDelay: '150ms' }}>
              Precision Automation
            </span>
          </span>
          <span className="reveal-line-wrapper">
            <span className={cn("reveal-line-content text-deep-saffron italic", isIntersecting && "active")} style={{ transitionDelay: '300ms' }}>
              for High-Stakes Data.
            </span>
          </span>
        </h1>

        <p className={cn(
          "font-body-lg text-body-lg text-mystic-mint max-w-2xl mx-auto mb-12 opacity-80 leading-relaxed transition-all duration-cinematic",
          isIntersecting ? "opacity-80 translate-y-0" : "opacity-0 translate-y-6"
        )} style={{ transitionDelay: '450ms' }}>
          Aetheris orchestrates complex enterprise workflows with absolute integrity. Quiet, intelligent, and engineered for those who demand technical excellence.
        </p>

        <div className={cn(
          "flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-cinematic",
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )} style={{ transitionDelay: '600ms' }}>
          <Button 
            ref={primaryBtnRef} 
            className="bg-deep-saffron text-oceanic-noir px-10 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-transform flex items-center gap-2 shadow-elevation-mid hover:shadow-glow-primary duration-fast"
          >
            Start Exploration
            <SvgIcon name="arrow-trending-up" className="text-xl" />
          </Button>
          <Button 
            ref={secondaryBtnRef}
            className="px-10 py-4 rounded-xl font-medium border border-mystic-mint/30 text-arctic-powder hover:bg-nocturnal-expedition/50 hover:border-mystic-mint transition-colors duration-normal"
          >
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
