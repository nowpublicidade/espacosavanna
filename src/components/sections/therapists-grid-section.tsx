import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TherapistCard } from "@/components/shared/therapist-card";
import type { Cta, SectionCopy, Therapist } from "@/types/content";

type TherapistsGridSectionProps = {
  copy?: SectionCopy;
  therapists: Therapist[];
  cardCta: Cta;
  surface?: "base" | "alt";
  id?: string;
};

/** Listagem completa de terapeutas: 1 coluna no mobile, 3 no desktop (gap 20). */
export function TherapistsGridSection({
  copy,
  therapists,
  cardCta,
  surface = "base",
  id = "terapeutas",
}: TherapistsGridSectionProps) {
  return (
    <Section id={id} surface={surface}>
      {copy ? <SectionHeading copy={copy} titleMaxCh={24} className="mb-5 lg:mb-10" /> : null}
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {therapists.map((therapist) => (
          <li key={therapist.slug}>
            <TherapistCard therapist={therapist} cta={cardCta} className="h-full" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
