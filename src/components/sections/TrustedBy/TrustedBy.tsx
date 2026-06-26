import { Container } from '../../ui/Container';

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-outline-variant/10 bg-surface-container-lowest/50">
      <Container>
        <p className="font-label-caps text-label-caps text-on-surface-variant text-center mb-10 opacity-50 uppercase tracking-[0.2em]">Validated by Global Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale contrast-125">
          {["LUMINA", "AXON", "STRATA", "NEXUS", "QUANTUM"].map((company) => (
            <div key={company} className="h-8 w-32 bg-on-surface-variant/20 rounded flex items-center justify-center font-bold text-xl">
              {company}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
