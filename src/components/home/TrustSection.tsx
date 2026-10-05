import { Container } from "@/components/common/Container";
import { IconCard } from "@/components/common/IconCard";
import { Reveal } from "@/components/common/Reveal";
import { trustHighlights } from "@/data/trust";

/**
 * Compact trust strip directly below the hero — four promises, minimal and
 * icon-led so it reads as reassurance rather than a feature grid.
 */
export function TrustSection() {
  return (
    <section
      aria-label="Why patients trust us"
      className="relative border-y border-ink-100 bg-white py-12 sm:py-14"
    >
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {trustHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <IconCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant="plain"
                className="h-full"
              />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}