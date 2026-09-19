import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TherapistsGridSection } from "@/components/sections/therapists-grid-section";
import { FinalCta } from "@/components/sections/final-cta";
import * as content from "@/content/therapists";
import { pages } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { therapists } from "@/data/therapists";

export const metadata: Metadata = buildMetadata(pages.therapists);

/** Terapeutas — "criar uma experiência de escolha" (Documento 02, item 8). */
export default function TherapistsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Terapeutas", path: pages.therapists.path }])} />
      <Hero content={content.hero} size="compact" id="terapeutas-hero" />
      <TherapistsGridSection copy={content.listing} therapists={therapists} cardCta={content.listing.cardCta} />
      <FinalCta copy={content.finalCta} className="max-lg:hidden" />
    </>
  );
}
