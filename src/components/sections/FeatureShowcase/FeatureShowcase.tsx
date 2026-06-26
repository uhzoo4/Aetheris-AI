import { GlassCard } from '../../ui/GlassCard';
import { AnimatedHeading } from '../../ui/AnimatedHeading';
import { SvgIcon } from '../../ui/SvgIcon';

export function FeatureShowcase() {
  return (
    <section className="py-32 px-container-padding max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="font-code-md text-code-md text-deep-saffron mb-4 block tracking-widest">CORE CAPABILITIES</span>
        <AnimatedHeading className="font-headline-lg text-headline-lg max-w-xl text-arctic-powder tracking-tighter">
          Architected for clarity, engineered for the infinite.
        </AnimatedHeading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-gutter h-auto md:h-[800px]">
        {/* Large Card */}
        <GlassCard className="md:col-span-8 md:row-span-1 p-10 flex flex-col justify-between overflow-hidden relative group hover:-translate-y-1">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-lg bg-nocturnal-expedition flex items-center justify-center mb-6 precision-border">
              <SvgIcon name="chart-pie" className="text-deep-saffron text-2xl" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-arctic-powder">Autonomous Data Synthesis</h3>
            <p className="text-mystic-mint max-w-md opacity-80 leading-relaxed">Process petabytes of unstructured data with recursive semantic models that evolve as your business scales.</p>
          </div>
          <div className="mt-8 flex gap-2 relative z-10">
            <span className="bg-deep-saffron/10 text-deep-saffron px-3 py-1 rounded font-code-md text-[10px] uppercase tracking-wider border border-deep-saffron/20">Llama-3 Optimized</span>
            <span className="bg-forsythia/10 text-forsythia px-3 py-1 rounded font-code-md text-[10px] uppercase tracking-wider border border-forsythia/20">Zero-Latency</span>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-20 group-hover:opacity-40 transition-opacity"></div>
        </GlassCard>

        {/* Vertical Card */}
        <GlassCard className="md:col-span-4 md:row-span-2 p-10 flex flex-col justify-end bg-gradient-to-t from-oceanic-noir/80 to-transparent relative group hover:-translate-y-1">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 grayscale group-hover:grayscale-0 transition-all duration-slow mix-blend-overlay" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAy4GkwkSDCgpWYYH8CikxWkcKE-F1vPO1duyATYgVlfrFM6BOmpj3GeQlM4HuAW3Jkwz1XsHZ7ciVG1AhsGeTUqjZpUW50IWxHbE-XVoJQXCfdaLFU2v7YJ1bXGuObsz-olGSDc7hLA2PdXqfjFvL9xP1qr7SBg8FNNrFPtOYLUb7TwNJxZrbf9ol3coNRUdBnC-QF-VrSxJa3bPR3SxxKA07xIui07kO0p6qLSmnk2OvlmhMUiE3V3j4YY7Zr9sQI68dCEeSXZ_3K')" }}
          ></div>
          <div className="relative z-10">
            <div className="font-code-md text-deep-saffron mb-2 tracking-widest uppercase">Infrastructure</div>
            <h3 className="font-headline-md text-headline-md mb-4 leading-snug text-arctic-powder">Distributed Ledger Integrity</h3>
            <p className="text-mystic-mint opacity-80 mb-6 leading-relaxed">Every transformation is cryptographically signed and logged for total regulatory auditability.</p>
            <button className="flex items-center gap-2 text-deep-saffron hover:gap-4 transition-all">
              Explore Security <SvgIcon name="chevron-right" className="text-lg" />
            </button>
          </div>
        </GlassCard>

        {/* Small Card 1 */}
        <GlassCard className="md:col-span-4 md:row-span-1 p-10 flex flex-col justify-between border-l-4 border-l-forsythia/50 hover:-translate-y-1">
          <div>
            <SvgIcon name="arrow-path" className="text-forsythia mb-6 text-3xl" />
            <h3 className="font-headline-md text-headline-md mb-2 text-arctic-powder">Predictive Drift</h3>
            <p className="text-sm text-mystic-mint opacity-70 leading-relaxed">Detect data anomalies before they impact your pipeline output with 99.9% precision.</p>
          </div>
          <div className="h-1 w-full bg-nocturnal-expedition rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-forsythia w-2/3 shadow-[0_0_10px_rgba(255,200,1,0.5)]"></div>
          </div>
        </GlassCard>

        {/* Small Card 2 */}
        <GlassCard className="md:col-span-4 md:row-span-1 p-10 flex flex-col justify-between border-l-4 border-l-mystic-mint/30 hover:-translate-y-1">
          <div>
            <SvgIcon name="cog-8-tooth" className="text-mystic-mint mb-6 text-3xl" />
            <h3 className="font-headline-md text-headline-md mb-2 text-arctic-powder">Omni-Integration</h3>
            <p className="text-sm text-mystic-mint opacity-70 leading-relaxed">Seamlessly connect to over 400+ enterprise data sources through our low-latency SDK.</p>
          </div>
          <div className="flex -space-x-3">
            {["AWS", "GCP", "SAP"].map((tech) => (
              <div key={tech} className="w-10 h-10 rounded-full bg-nocturnal-expedition border border-mystic-mint/20 flex items-center justify-center font-code-md text-xs text-arctic-powder">
                {tech}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
