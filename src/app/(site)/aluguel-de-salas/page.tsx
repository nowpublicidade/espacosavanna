import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { SpaceSection } from "@/components/sections/space-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { TextSection } from "@/components/sections/text-section";
import { FinalCta } from "@/components/sections/final-cta";
import * as content from "@/content/rooms";
import { pages } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata(pages.rooms);

/** Aluguel de Salas — página comercial para profissionais (Documento 02, item 13). */
export default function RoomsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Aluguel de Salas", path: pages.rooms.path }])} />
      <Hero content={content.hero} size="compact" id="aluguel-hero" />
      <SpaceSection copy={content.structure} images={content.structure.images} surface="base" id="estrutura" />
      <FeaturesSection copy={content.differentials} features={content.differentials.items} id="diferenciais" />
      <TextSection copy={content.usage} paragraphs={content.usage.paragraphs} surface="base" id="utilizacao" />
      <FinalCta copy={content.finalCta} className="max-lg:hidden" />
    </>
  );
}
