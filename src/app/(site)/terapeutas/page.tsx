import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TherapistsGridSection } from "@/components/sections/therapists-grid-section";
import { FinalCta } from "@/components/sections/final-cta";
import * as content from "@/content/therapists";
import { pages } from "@/content/pages";
import { therapists } from "@/data/therapists";

export const metadata: Metadata = {
  title: { absolute: pages.therapists.title },
  description: pages.therapists.description,
  alternates: { canonical: pages.therapists.path },
};

/** Terapeutas — "criar uma experiência de escolha" (Documento 02, item 8). */
export default function TherapistsPage() {
  return (
    <>
      <Hero content={content.hero} size="compact" id="terapeutas-hero" />
      <TherapistsGridSection copy={content.listing} therapists={therapists} cardCta={content.listing.cardCta} />
      <FinalCta copy={content.finalCta} className="max-lg:hidden" />
    </>
  );
}
