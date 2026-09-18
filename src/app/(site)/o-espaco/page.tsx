import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TextSection } from "@/components/sections/text-section";
import { SpaceSection } from "@/components/sections/space-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { FinalCta } from "@/components/sections/final-cta";
import * as space from "@/content/space";
import { pages } from "@/content/pages";
import { spaceGallery } from "@/data/gallery";

export const metadata: Metadata = {
  title: { absolute: pages.space.title },
  description: pages.space.description,
  alternates: { canonical: pages.space.path },
};

/**
 * O Espaço — objetivo: gerar confiança (Documento 02, item 7).
 * Apresentação → conceito → estrutura → diferenciais → galeria → convite.
 */
export default function SpacePage() {
  return (
    <>
      <Hero content={space.hero} size="compact" id="o-espaco" />
      <TextSection copy={space.concept} paragraphs={space.concept.paragraphs} id="conceito" />
      <SpaceSection copy={space.structure} images={space.structure.images} surface="base" id="estrutura" />
      <FeaturesSection copy={space.differentials} features={space.differentials.items} id="diferenciais" />
      <GallerySection copy={space.gallery} images={spaceGallery} />
      <FinalCta copy={space.finalCta} className="max-lg:hidden" />
    </>
  );
}
