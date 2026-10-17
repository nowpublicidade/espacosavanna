import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TextSection } from "@/components/sections/text-section";
import { CommunityBenefitsSection } from "@/components/sections/community-benefits-section";
import { FinalCta } from "@/components/sections/final-cta";
import * as content from "@/content/community";
import { pages } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { communityCta } from "@/lib/community";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata(pages.community);

/**
 * Comunidade — Clube de Vantagens no WhatsApp, a partir do card aprovado.
 * Os CTAs saem de `communityCta`: convite do grupo quando houver, conversa
 * direta enquanto não houver.
 */
export default function CommunityPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Comunidade", path: pages.community.path }])} />
      <Hero
        content={{ ...content.hero, cta: communityCta(content.hero.cta.label) }}
        size="compact"
        id="comunidade-hero"
      />
      <TextSection copy={content.about} paragraphs={content.about.paragraphs} surface="alt" id="o-clube" />
      <CommunityBenefitsSection
        copy={content.benefitsSection}
        benefits={content.benefits}
        notes={content.notes}
      />
      <FinalCta copy={{ ...content.finalCta, cta: communityCta(content.finalCta.cta.label) }} id="entrar" />
    </>
  );
}
