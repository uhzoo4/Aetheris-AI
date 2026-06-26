import { GlassCard } from '../../ui/GlassCard';
import { AnimatedHeading } from '../../ui/AnimatedHeading';
import { Button } from '../../ui/Button';
import { Icon } from '../../ui/Icon';

export function Pricing() {
  return (
    <section className="py-32 px-container-padding max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <AnimatedHeading className="font-headline-lg text-headline-lg mb-4">Simple Scale.</AnimatedHeading>
        <div className="flex justify-center items-center gap-4">
          <span className="text-on-surface-variant font-medium opacity-50">Monthly</span>
          <button className="w-12 h-6 bg-surface-container-highest rounded-full p-1 relative flex items-center">
            <div className="absolute right-1 w-4 h-4 bg-primary rounded-full"></div>
          </button>
          <span className="text-on-surface font-bold">Annually <span className="text-primary text-xs ml-1">-20%</span></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Pro Tier */}
        <GlassCard className="p-12 relative overflow-hidden border border-primary/20">
          <div className="absolute top-0 right-0 bg-primary/10 px-6 py-2 rounded-bl-xl font-code-md text-[10px] text-primary uppercase tracking-widest border-b border-l border-primary/20">Most Selected</div>
          <div className="mb-10">
            <p className="font-code-md text-primary mb-2">AETHERIS PRO</p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-display-lg">$2,450</span>
              <span className="text-on-surface-variant opacity-50">/month</span>
            </div>
          </div>
          <ul className="space-y-6 mb-12">
            <li className="flex items-center gap-3 text-on-surface-variant">
              <Icon name="check_circle" className="text-primary text-sm" /> 100 Million Token Processing
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <Icon name="check_circle" className="text-primary text-sm" /> Advanced Semantic Modeling
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <Icon name="check_circle" className="text-primary text-sm" /> 24/7 Priority Engineer Support
            </li>
          </ul>
          <Button className="w-full py-4 rounded-xl border border-primary/40 text-primary font-bold hover:bg-primary/10 transition-colors">Select Pro</Button>
        </GlassCard>

        {/* Custom Tier */}
        <GlassCard className="p-12 flex flex-col justify-between">
          <div>
            <div className="mb-10">
              <p className="font-code-md text-on-surface-variant mb-2">ENTERPRISE</p>
              <h3 className="text-6xl font-display-lg">Custom</h3>
            </div>
            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Icon name="check_circle" className="text-on-surface-variant text-sm opacity-50" /> Unlimited Infrastructure
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Icon name="check_circle" className="text-on-surface-variant text-sm opacity-50" /> On-Premise Deployment
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Icon name="check_circle" className="text-on-surface-variant text-sm opacity-50" /> White-Glove Orchestration
              </li>
            </ul>
          </div>
          <Button className="w-full py-4 rounded-xl bg-on-surface text-surface font-bold hover:opacity-90 transition-opacity">Contact Sales</Button>
        </GlassCard>
      </div>
    </section>
  );
}
