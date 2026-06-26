import { SvgIcon } from '../../ui/SvgIcon';
import { Button } from '../../ui/Button';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { cn } from '../../../utils/cn';

export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section className="relative min-h-[921px] flex flex-col items-center justify-center text-center px-container-padding py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] ambient-glow rounded-full"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] ambient-glow-secondary rounded-full opacity-10"></div>
      </div>
      <div 
        ref={ref as any} 
        className={cn(
          "relative z-10 max-w-4xl transition-all duration-cinematic",
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-forsythia/20 bg-forsythia/5 mb-8">
          <span className="font-code-md text-code-md text-forsythia uppercase tracking-widest">Version 4.0 Launch</span>
          <div className="w-1 h-1 rounded-full bg-forsythia animate-pulse"></div>
        </div>
        <h1 className="font-display-lg text-6xl md:text-8xl leading-tight mb-8 tracking-tighter text-arctic-powder">
          Precision Automation <br/>
          <span className="text-deep-saffron italic">for High-Stakes Data.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-mystic-mint max-w-2xl mx-auto mb-12 opacity-80 leading-relaxed">
          Aetheris orchestrates complex enterprise workflows with absolute integrity. Quiet, intelligent, and engineered for those who demand technical excellence.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button className="bg-deep-saffron text-oceanic-noir px-10 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-transform flex items-center gap-2">
            Start Exploration
            <SvgIcon name="arrow-trending-up" className="text-xl" />
          </Button>
          <Button className="px-10 py-4 rounded-xl font-medium border border-mystic-mint/30 text-arctic-powder hover:bg-nocturnal-expedition/50 transition-colors">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
