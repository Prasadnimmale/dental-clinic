import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { IconCard } from "@/components/common/IconCard";
import { Reveal } from "@/components/common/Reveal";
import { whyChooseUs } from "@/data/whyChooseUs";

export function WhyChooseUs() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Six Reasons Patients{" "}
                <span className="text-gradient-brand">Keep Coming Back</span>
              </>
            }
            description="Most of our new patients arrive through a neighbour's recommendation. These are the things they tell us about."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.07}>
              <li className="h-full">
                <IconCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  className="h-full"
                />
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}