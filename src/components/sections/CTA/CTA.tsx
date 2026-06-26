import { AnimatedHeading } from '../../ui/AnimatedHeading';
import { Button } from '../../ui/Button';

export function CTA() {
  return (
    <section className="py-32 px-container-padding">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative p-16 md:p-24 bg-surface-container-high flex flex-col items-center text-center">
        <div className="relative z-10 max-w-2xl">
          <AnimatedHeading className="font-display-lg text-5xl md:text-6xl mb-8 tracking-tighter">
            Ready to redefine your <br/>data architecture?
          </AnimatedHeading>
          <p className="font-body-lg text-body-lg text-on-surface-variant opacity-80 mb-12">Join the elite enterprises moving beyond basic automation into the era of technical precision.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">Get Started Now</Button>
            <Button className="border border-outline-variant text-on-surface px-10 py-4 rounded-full font-medium hover:bg-surface-variant transition-colors">Request a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
