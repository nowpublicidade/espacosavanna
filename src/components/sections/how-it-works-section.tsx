import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Steps } from "@/components/shared/steps";
import type { SectionCopy, Step } from "@/types/content";

type HowItWorksSectionProps = {
  copy: SectionCopy;
  steps: Step[];
  id?: string;
};

/**
 * "Como funciona" (layout aprovado). Superfície alternada com linhas
 * superior e inferior. Desktop centralizado (padding 80, título 44px,
 * mb 52); mobile alinhado à esquerda (mb 24).
 */
export function HowItWorksSection({ copy, steps, id = "como-funciona" }: HowItWorksSectionProps) {
  return (
    <Section id={id} surface="alt" bordered spacing="tight">
      <SectionHeading
        copy={copy}
        className="mb-6 lg:mb-[3.25rem] lg:items-center lg:text-center [&_h2]:lg:text-[2.75rem] [&_p]:lg:mb-4"
      />
      <Steps steps={steps} />
    </Section>
  );
}
