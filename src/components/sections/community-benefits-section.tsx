import { BenefitGrid } from "@/components/shared/benefit-grid";
import { NoteCards, type Note } from "@/components/shared/note-cards";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Feature, SectionCopy } from "@/types/content";

type CommunityBenefitsSectionProps = {
  copy: SectionCopy;
  benefits: Feature[];
  notes: readonly Note[];
  surface?: "base" | "alt";
  id?: string;
};

/**
 * "O que você vai encontrar por aqui": vantagens do Clube em faixa de
 * colunas e, abaixo, os dois avisos (privacidade e notificações).
 */
export function CommunityBenefitsSection({
  copy,
  benefits,
  notes,
  surface = "base",
  id = "vantagens",
}: CommunityBenefitsSectionProps) {
  return (
    <Section id={id} surface={surface} bordered>
      <SectionHeading copy={copy} titleMaxCh={22} align="center" className="mb-9 lg:mb-12" />
      <BenefitGrid items={benefits} />
      <NoteCards notes={notes} className="mt-10 lg:mt-14" />
    </Section>
  );
}
