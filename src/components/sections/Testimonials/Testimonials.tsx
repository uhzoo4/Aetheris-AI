import { Container } from '../../ui/Container';
import { GlassCard } from '../../ui/GlassCard';
import { AnimatedHeading } from '../../ui/AnimatedHeading';
import { useTilt } from '../../../hooks/useTilt';

const testimonials = [
  {
    quote: "Aetheris transformed our legacy data processing from a week-long manual slog into a 20-minute autonomous stream. The technical overhead is practically zero.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiZ1eMU3sPTXfAtd2b0yleUaTd44U9q9_UrVBs5CM2CoF7RIBHnFQwds20f70nJe9xdmxBEI7DFJIExQnXW1YDPXeYaeRrlWqpMb8fv6TNdFaPN7hp0puRIuMPZOMSrB--1wnwdQb2HzMwn3oYLw9d37zWaujQlCQCwXLMM7IH94GbbpyI2NjFXvTCEGpl-c7QFCJo7tO6Dp0rxGhfnUMgwp7R9ZiwqE-xFWdUjdi-zdPURtmupHplEJAho5iQq6A4LwlNOTJ2MVLW",
    name: "Elena Vance",
    role: "Director of AI @ Vanguard",
    alt: "A professional headshot of a senior software engineer in their late 30s, looking thoughtful, set against a dark, moody studio background with a slight warm rim light, matching the nocturnal luxury aesthetic."
  },
  {
    quote: "The precision and audibility features are unmatched. In a highly regulated environment, Aetheris isn't just a tool; it's a compliance bedrock.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT9xhScIhTM7Dv4c_OiCTESqRPE5aTBX18WZaFjwURZZCWe5PEbSt_zgMilrgqjBW_bDpKtQESOCKqtIHZ8_zjNEbVMpbuAZvluKZtAXGpx7-L1-yw2Esj7qRcaNtE6-NB2COEffNS0QHIdwnUp-fttagCp26dSWgm-ZGBlafsx4v2krcKx7MyyD90lldkiTnfSMuSeWYmRFZeZuWr-UpVq0pPoJxr1uFmFkABbhz1zxF2nERQSM83Jhn7VmKXXdpHdQh6iot7slWe",
    name: "Marcus Thorne",
    role: "CISO @ Orbit Logistics",
    alt: "A portrait of a cybersecurity executive with a confident, calm expression, illuminated by soft atmospheric lighting that emphasizes deep purples and shadows, consistent with an enterprise tech brand."
  },
  {
    quote: "The UI is a breath of fresh air. It feels more like an editorial workspace than a data tool. It actually reduces cognitive load for my team.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWjooVB4HroJ5iR8onSpLrzTG3PC-2iN9pYYPZQuifyjIdiGj1Z8KMDLmkAKl_HV7rlqCCxQEPDoWFc3ILzCNNF-GLMrpTnUE6YO-aJNonbCAnaQ1igTvc6mF_CkW23cYW044katSA5TS_UpEs3truUQYLhgi2S1jtaKeFOiXoiJcxDvFn4U7qVOxiL-c1EmQP2nijgpIolDm2cwV4ynL-X-cB7q8IedRsR_lUPAVC6ffShGZoj6l6VAIJHPsdZfKjsJh_Q99bAHJ2",
    name: "Julian Chen",
    role: "Lead Designer @ Spectra",
    alt: "A minimalist portrait of a lead product designer with short dark hair, wearing a high-neck sweater, photographed in low light with a soft orange glow on one side to represent the brand's saffron accent."
  }
];

export function Testimonials() {
  const card1Ref = useTilt<HTMLDivElement>({ maxRotation: 4 });
  const card2Ref = useTilt<HTMLDivElement>({ maxRotation: 4 });
  const card3Ref = useTilt<HTMLDivElement>({ maxRotation: 4 });

  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section id="testimonials" className="py-32 bg-nocturnal-expedition/10">
      <Container>
        <div className="text-center mb-20">
          <AnimatedHeading className="font-headline-lg text-headline-lg mb-6 text-arctic-powder tracking-tighter">Designed for Experts.</AnimatedHeading>
          <p className="text-mystic-mint opacity-80 max-w-xl mx-auto leading-relaxed">Hear from the engineers and architects building the future of automated enterprise intelligence.</p>
        </div>
        <div className="columns-1 md:columns-3 gap-gutter space-y-gutter">
          {testimonials.map((testimonial, i) => (
            <GlassCard 
              key={i} 
              ref={cardRefs[i]}
              className="break-inside-avoid p-8 hover:-translate-y-2 transition-all duration-slow border-mystic-mint/10 glass-highlight hover:shadow-elevation-high group"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="font-body-md italic mb-8 text-arctic-powder opacity-90 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale contrast-125 border border-mystic-mint/20 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-normal">
                  <img className="w-full h-full object-cover" alt={testimonial.alt} src={testimonial.image} />
                </div>
                <div>
                  <p className="font-bold text-arctic-powder">{testimonial.name}</p>
                  <p className="font-code-md text-[10px] text-deep-saffron uppercase opacity-80 tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
