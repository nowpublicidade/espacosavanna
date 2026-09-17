import { CtaLink } from "@/components/shared/cta-link";
import { HorizontalScroller } from "@/components/shared/horizontal-scroller";
import { ArrowIcon } from "@/components/shared/icons";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TherapistCard } from "@/components/shared/therapist-card";
import type { Cta, SectionCopy, Therapist } from "@/types/content";

type TherapistsSectionProps = {
  copy: SectionCopy;
  therapists: Therapist[];
  cardCta: Cta;
  id?: string;
};

/**
 * "Nossas terapeutas" (layout aprovado).
 * Desktop: cabeçalho com link à direita (mb 40) + grid de 3 cards.
 * Mobile: cabeçalho, carrossel sangrado e link em caixa alta abaixo.
 */
export function TherapistsSection({ copy, therapists, cardCta, id = "terapeutas" }: TherapistsSectionProps) {
  const link = copy.cta ? (
    <CtaLink cta={copy.cta} variant="ghost" icon={<ArrowIcon />} iconPosition="right" />
  ) : null;

  return (
    <Section id={id}>
      <SectionHeading
        copy={copy}
        titleMaxCh={18}
        aside={link ? <div className="max-lg:hidden">{link}</div> : undefined}
        className="mb-5 lg:mb-10"
      />

      <HorizontalScroller columns={3}>
        {therapists.map((therapist) => (
          <TherapistCard key={therapist.slug} therapist={therapist} cta={cardCta} />
        ))}
      </HorizontalScroller>

      {link ? <div className="mt-5 lg:hidden">{link}</div> : null}
    </Section>
  );
}
