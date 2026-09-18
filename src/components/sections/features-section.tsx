import { FeatureRow } from "@/components/shared/feature-row";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Feature, SectionCopy } from "@/types/content";

type FeaturesSectionProps = {
  copy: SectionCopy;
  features: Feature[];
  surface?: "base" | "alt";
  id?: string;
};

/** Cabeçalho centralizado + faixa de diferenciais (mesma faixa do Hero). */
export function FeaturesSection({ copy, features, surface = "alt", id }: FeaturesSectionProps) {
  return (
    <Section id={id} surface={surface} bordered spacing="tight">
      <SectionHeading copy={copy} className="mb-2 lg:mb-4 lg:items-center lg:text-center" />
      <FeatureRow features={features} />
    </Section>
  );
}
