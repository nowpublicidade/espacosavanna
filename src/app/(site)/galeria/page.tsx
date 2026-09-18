import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { GallerySection } from "@/components/sections/gallery-section";
import { FinalCta } from "@/components/sections/final-cta";
import * as content from "@/content/gallery";
import { pages } from "@/content/pages";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: { absolute: pages.gallery.title },
  description: pages.gallery.description,
  alternates: { canonical: pages.gallery.path },
};

/** Galeria — "fotos grandes, pouco texto" (Documento 02, item 11). */
export default function GalleryPage() {
  return (
    <>
      <Hero content={content.hero} size="compact" id="galeria-hero" />
      <GallerySection images={galleryImages} id="fotos" />
      <FinalCta copy={content.finalCta} className="max-lg:hidden" />
    </>
  );
}
