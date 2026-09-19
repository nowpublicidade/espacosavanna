import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { GallerySection } from "@/components/sections/gallery-section";
import { FinalCta } from "@/components/sections/final-cta";
import * as content from "@/content/gallery";
import { pages } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = buildMetadata(pages.gallery);

/** Galeria — "fotos grandes, pouco texto" (Documento 02, item 11). */
export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Galeria", path: pages.gallery.path }])} />
      <Hero content={content.hero} size="compact" id="galeria-hero" />
      <GallerySection images={galleryImages} id="fotos" />
      <FinalCta copy={content.finalCta} className="max-lg:hidden" />
    </>
  );
}
