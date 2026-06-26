import { AnimatedHeading } from '../../ui/AnimatedHeading';
import { Button } from '../../ui/Button';
import { useMagnetic } from '../../../hooks/useMagnetic';

export function CTA() {
  const primaryRef = useMagnetic<HTMLButtonElement>({ strength: 0.15 });
  const secondaryRef = useMagnetic<HTMLButtonElement>({ strength: 0.1 });

  return (
    <section className="py-32 px-container-padding">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative p-16 md:p-24 bg-nocturnal-expedition flex flex-col items-center text-center border border-mystic-mint/10 shadow-[0_20px_50px_-20px_rgba(17,76,90,0.5)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] ambient-glow rounded-full animate-pulse-glow"></div>
        </div>
        <div className="relative z-10 max-w-2xl">
          <AnimatedHeading className="font-display-lg text-5xl md:text-6xl mb-8 tracking-tighter text-arctic-powder">
            Ready to redefine your <br/>data architecture?
          </AnimatedHeading>
          <p className="font-body-lg text-body-lg text-mystic-mint opacity-80 mb-12 leading-relaxed">Join the elite enterprises moving beyond basic automation into the era of technical precision.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              ref={primaryRef} 
              className="bg-deep-saffron text-oceanic-noir px-10 py-4 rounded-full font-bold text-lg hover:shadow-glow-primary active:scale-95 duration-fast cursor-pointer"
            >
              Get Started Now
            </Button>
            <Button 
              ref={secondaryRef} 
              className="border border-mystic-mint/30 text-arctic-powder px-10 py-4 rounded-full font-medium hover:bg-oceanic-noir/50 hover:border-mystic-mint transition-colors duration-normal cursor-pointer"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
