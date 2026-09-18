import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { FaqItem, SectionCopy } from "@/types/content";

type FaqSectionProps = {
  copy: SectionCopy;
  items: FaqItem[];
  surface?: "base" | "alt";
  id?: string;
};

/**
 * "Dúvidas" (layout aprovado). Superfície alternada.
 * Desktop: título (.8fr) + lista (1.2fr), gap 70. Mobile: empilhado.
 */
export function FaqSection({ copy, items, surface = "alt", id = "duvidas" }: FaqSectionProps) {
  return (
    <Section id={id} surface={surface}>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-[4.375rem]">
        <SectionHeading copy={copy} />
        <FaqAccordion items={items} />
      </div>
    </Section>
  );
}
