import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { TextSection } from "@/components/sections/text-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import * as content from "@/content/how-it-works";
import { howItWorks } from "@/content/home";
import { pages } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { fullFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata(pages.howItWorks);

/** Como Funciona — "reduzir dúvidas antes do contato" (Documento 02, item 10). */
export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Como Funciona", path: pages.howItWorks.path }])} />
      <Hero content={content.hero} size="compact" id="como-funciona-hero" />
      <HowItWorksSection copy={content.steps} steps={howItWorks.steps} id="passo-a-passo" />
      <TextSection copy={content.choosing} paragraphs={content.choosing.paragraphs} surface="base" id="como-escolher" />
      <TextSection copy={content.attendance} paragraphs={content.attendance.paragraphs} surface="alt" id="atendimento" />
      <FaqSection copy={content.faq} items={fullFaq} surface="base" />
      <FinalCta copy={content.finalCta} className="max-lg:hidden" />
    </>
  );
}
