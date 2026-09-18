import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { FinalCta } from "@/components/sections/final-cta";
import * as content from "@/content/experiences";
import { pages } from "@/content/pages";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: { absolute: pages.experiences.title },
  description: pages.experiences.description,
  alternates: { canonical: pages.experiences.path },
};

/** Experiências — "apresentar os atendimentos como experiências premium" (Documento 02, item 9). */
export default function ExperiencesPage() {
  return (
    <>
      <Hero content={content.hero} size="compact" id="experiencias-hero" />
      <ExperiencesSection copy={content.listing} experiences={experiences} />
      <FinalCta copy={content.finalCta} className="max-lg:hidden" />
    </>
  );
}
