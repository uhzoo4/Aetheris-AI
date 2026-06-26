import { Container } from '../../ui/Container';

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-mystic-mint/10 bg-nocturnal-expedition/30">
      <Container>
        <p className="font-label-caps text-label-caps text-mystic-mint text-center mb-10 opacity-50 uppercase tracking-[0.2em]">Validated by Global Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 grayscale contrast-125">
          {["LUMINA", "AXON", "STRATA", "NEXUS", "QUANTUM"].map((company) => (
            <div key={company} className="h-8 w-32 bg-mystic-mint/10 rounded flex items-center justify-center font-bold text-xl text-mystic-mint hover:bg-mystic-mint/20 hover:text-arctic-powder transition-all duration-300">
              {company}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
