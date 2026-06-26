import { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { AnimatedHeading } from '../../ui/AnimatedHeading';
import { Button } from '../../ui/Button';
import { SvgIcon } from '../../ui/SvgIcon';
import { useTilt } from '../../../hooks/useTilt';
import { useNumberCounter } from '../../../hooks/useNumberCounter';
import { cn } from '../../../utils/cn';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const card1Ref = useTilt<HTMLDivElement>({ maxRotation: 4 });
  const card2Ref = useTilt<HTMLDivElement>({ maxRotation: 4 });

  const price = isAnnual ? 1960 : 2450;
  const { count: priceCount, ref: priceRef } = useNumberCounter(price, { duration: 600 });

  return (
    <section className="py-32 px-container-padding max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <AnimatedHeading className="font-headline-lg text-headline-lg mb-4 text-arctic-powder tracking-tighter">Simple Scale.</AnimatedHeading>
        <div className="flex justify-center items-center gap-4">
          <span className={cn(
            "transition-all duration-normal",
            !isAnnual ? "text-mystic-mint font-bold opacity-100" : "text-mystic-mint/50 font-medium"
          )}>
            Monthly
          </span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 bg-nocturnal-expedition rounded-full p-1 relative flex items-center border border-mystic-mint/20 hover:border-deep-saffron/50 transition-colors cursor-pointer"
            aria-label="Toggle annual billing"
          >
            <div className={cn(
              "w-4 h-4 bg-deep-saffron rounded-full transition-transform duration-normal ease-in-out",
              isAnnual ? "translate-x-6" : "translate-x-0"
            )}></div>
          </button>
          <span className={cn(
            "transition-all duration-normal",
            isAnnual ? "text-arctic-powder font-bold" : "text-arctic-powder/50 font-medium"
          )}>
            Annually <span className="text-deep-saffron text-xs ml-1 font-code-md">-20%</span>
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Pro Tier */}
        <GlassCard 
          ref={card1Ref}
          className="p-12 relative overflow-hidden border border-deep-saffron/30 glass-highlight hover:shadow-elevation-high transition-shadow group"
        >
          <div className="absolute top-0 right-0 bg-deep-saffron/10 px-6 py-2 rounded-bl-xl font-code-md text-[10px] text-deep-saffron uppercase tracking-widest border-b border-l border-deep-saffron/20 z-10">Most Selected</div>
          <div className="mb-10 relative z-10">
            <p className="font-code-md text-deep-saffron mb-2 tracking-widest">AETHERIS PRO</p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-display-lg text-arctic-powder tracking-tighter flex items-center">
                $
                <span ref={priceRef as any} className="font-mono">{priceCount.toLocaleString()}</span>
              </span>
              <span className="text-mystic-mint opacity-70">/month</span>
            </div>
          </div>
          <ul className="space-y-6 mb-12 relative z-10">
            <li className="flex items-center gap-3 text-mystic-mint">
              <SvgIcon name="chevron-right" className="text-deep-saffron text-sm" /> 100 Million Token Processing
            </li>
            <li className="flex items-center gap-3 text-mystic-mint">
              <SvgIcon name="chevron-right" className="text-deep-saffron text-sm" /> Advanced Semantic Modeling
            </li>
            <li className="flex items-center gap-3 text-mystic-mint">
              <SvgIcon name="chevron-right" className="text-deep-saffron text-sm" /> 24/7 Priority Engineer Support
            </li>
          </ul>
          <Button className="w-full py-4 rounded-xl border border-deep-saffron/40 text-deep-saffron font-bold hover:bg-deep-saffron/10 transition-all hover:scale-102 active:scale-98 duration-fast relative z-10 cursor-pointer">Select Pro</Button>
        </GlassCard>

        {/* Custom Tier */}
        <GlassCard 
          ref={card2Ref}
          className="p-12 flex flex-col justify-between border border-mystic-mint/10 glass-highlight hover:shadow-elevation-high transition-shadow group"
        >
          <div>
            <div className="mb-10">
              <p className="font-code-md text-mystic-mint mb-2 tracking-widest uppercase">Enterprise</p>
              <h3 className="text-6xl font-display-lg text-arctic-powder tracking-tighter">Custom</h3>
            </div>
            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-3 text-mystic-mint">
                <SvgIcon name="chevron-right" className="text-mystic-mint text-sm opacity-50" /> Unlimited Infrastructure
              </li>
              <li className="flex items-center gap-3 text-mystic-mint">
                <SvgIcon name="chevron-right" className="text-mystic-mint text-sm opacity-50" /> On-Premise Deployment
              </li>
              <li className="flex items-center gap-3 text-mystic-mint">
                <SvgIcon name="chevron-right" className="text-mystic-mint text-sm opacity-50" /> White-Glove Orchestration
              </li>
            </ul>
          </div>
          <Button className="w-full py-4 rounded-xl bg-arctic-powder text-oceanic-noir font-bold hover:opacity-90 transition-all hover:scale-102 active:scale-98 duration-fast cursor-pointer">Contact Sales</Button>
        </GlassCard>
      </div>
    </section>
  );
}
