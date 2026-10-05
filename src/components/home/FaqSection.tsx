import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { Reveal } from "@/components/common/Reveal";
import { ActionLink } from "@/components/common/Button";
import { generalFaqs } from "@/data/whyChooseUs";
import { siteConfig, workingHours } from "@/data/site";

export function FaqSection() {
  return (
    <section className="relative bg-ink-50 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* --- Heading column --- */}
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="FAQ"
                title={
                  <>
                    Questions Patients{" "}
                    <span className="text-gradient-brand">Ask Us Most</span>
                  </>
                }
                description="If your question is not answered here, call us — we answer honestly, even when the answer is 'you do not need this yet'."
                action={
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-sm leading-relaxed text-ink-600">
                      Call or WhatsApp us during clinic hours:{" "}
                      {workingHours
                        .map(({ day, hours }) => `${day}: ${hours}`)
                        .join(" · ")}
                      . If you have urgent pain or swelling, let us know and our
                      team will guide you on the next step.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <ActionLink href="/contact" variant="solid">
                        Contact the clinic
                      </ActionLink>
                      <ActionLink
                        href={siteConfig.contact.phoneHref}
                        variant="outline"
                      >
                        Call us
                      </ActionLink>
                    </div>
                  </div>
                }
              />
            </Reveal>
          </div>

          {/* --- Accordion --- */}
          <Reveal className="lg:col-span-8" delay={0.08}>
            <div className="rounded-3xl border border-ink-100 bg-white px-6 py-2 shadow-soft sm:px-8">
              <FaqAccordion items={generalFaqs} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}