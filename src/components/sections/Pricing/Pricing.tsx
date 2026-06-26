import { GlassCard } from '../../ui/GlassCard';
import { AnimatedHeading } from '../../ui/AnimatedHeading';
import { Button } from '../../ui/Button';
import { SvgIcon } from '../../ui/SvgIcon';

export function Pricing() {
  return (
    <section className="py-32 px-container-padding max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <AnimatedHeading className="font-headline-lg text-headline-lg mb-4 text-arctic-powder tracking-tighter">Simple Scale.</AnimatedHeading>
        <div className="flex justify-center items-center gap-4">
          <span className="text-mystic-mint font-medium opacity-70">Monthly</span>
          <button className="w-12 h-6 bg-nocturnal-expedition rounded-full p-1 relative flex items-center border border-mystic-mint/20 hover:border-deep-saffron/50 transition-colors">
            <div className="absolute right-1 w-4 h-4 bg-deep-saffron rounded-full"></div>
          </button>
          <span className="text-arctic-powder font-bold">Annually <span className="text-deep-saffron text-xs ml-1 font-code-md">-20%</span></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Pro Tier */}
        <GlassCard className="p-12 relative overflow-hidden border border-deep-saffron/30 hover:-translate-y-1 transition-transform">
          <div className="absolute top-0 right-0 bg-deep-saffron/10 px-6 py-2 rounded-bl-xl font-code-md text-[10px] text-deep-saffron uppercase tracking-widest border-b border-l border-deep-saffron/20">Most Selected</div>
          <div className="mb-10">
            <p className="font-code-md text-deep-saffron mb-2 tracking-widest">AETHERIS PRO</p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-display-lg text-arctic-powder tracking-tighter">$2,450</span>
              <span className="text-mystic-mint opacity-70">/month</span>
            </div>
          </div>
          <ul className="space-y-6 mb-12">
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
          <Button className="w-full py-4 rounded-xl border border-deep-saffron/40 text-deep-saffron font-bold hover:bg-deep-saffron/10 transition-colors">Select Pro</Button>
        </GlassCard>

        {/* Custom Tier */}
        <GlassCard className="p-12 flex flex-col justify-between hover:-translate-y-1 transition-transform border-mystic-mint/10">
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
          <Button className="w-full py-4 rounded-xl bg-arctic-powder text-oceanic-noir font-bold hover:opacity-90 transition-opacity">Contact Sales</Button>
        </GlassCard>
      </div>
    </section>
  );
}
