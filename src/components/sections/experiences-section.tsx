import { CtaLink } from "@/components/shared/cta-link";
import { ExperienceCard } from "@/components/shared/experience-card";
import { REVEAL_STAGGER, Reveal } from "@/components/shared/reveal";
import { ArrowIcon } from "@/components/shared/icons";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Experience, SectionCopy } from "@/types/content";

type ExperiencesSectionProps = {
  copy: SectionCopy;
  experiences: Experience[];
  id?: string;
};

/**
 * "Experiências" (layout aprovado).
 * Desktop: cabeçalho com "Ver todas" à direita + grid de 3 cards-imagem.
 * Mobile: título curto e cards empilhados (gap 12), sem link.
 */
export function ExperiencesSection({ copy, experiences, id = "experiencias" }: ExperiencesSectionProps) {
  return (
    <Section id={id}>
      <SectionHeading
        copy={copy}
        titleMaxCh={20}
        aside={
          copy.cta ? (
            <div className="max-lg:hidden">
              <CtaLink cta={copy.cta} variant="ghost" icon={<ArrowIcon />} iconPosition="right" />
            </div>
          ) : undefined
        }
        className="mb-5 lg:mb-10"
      />
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-5">
        {experiences.map((experience, index) => (
          <Reveal key={experience.slug} delay={(index % 3) * REVEAL_STAGGER}>
            <ExperienceCard experience={experience} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
