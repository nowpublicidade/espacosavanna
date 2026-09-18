import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { SectionCopy } from "@/types/content";

type TextSectionProps = {
  copy: SectionCopy;
  paragraphs: string[];
  surface?: "base" | "alt";
  id?: string;
};

/**
 * Bloco editorial de texto: título à esquerda (.8fr), parágrafos à direita
 * (1.2fr) — mesma proporção da seção Dúvidas do layout aprovado.
 */
export function TextSection({ copy, paragraphs, surface = "alt", id }: TextSectionProps) {
  return (
    <Section id={id} surface={surface}>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-[4.375rem]">
        <SectionHeading copy={copy} titleMaxCh={18} />
        <div className="flex max-w-[58ch] flex-col gap-5 text-body text-fg-muted lg:pt-2">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
