import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { FeatureRow } from "@/components/shared/feature-row";
import { SpaceSection } from "@/components/sections/space-section";
import { TherapistsSection } from "@/components/sections/therapists-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import * as home from "@/content/home";
import { pages } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { featuredTherapists } from "@/data/therapists";
import { featuredExperiences } from "@/data/experiences";
import { homeFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata(pages.home);

/**
 * Home — ordem das seções exatamente como no layout aprovado.
 * O CTA final existe apenas no desktop; no mobile o rodapé cumpre esse papel.
 */
export default function HomePage() {
  return (
    <>
      <Hero content={home.hero} below={<FeatureRow features={home.features} />} />
      <SpaceSection copy={home.space} images={home.space.images} />
      <TherapistsSection
        copy={home.therapistsSection}
        therapists={featuredTherapists}
        cardCta={home.therapistsSection.cardCta}
      />
      <HowItWorksSection copy={home.howItWorks} steps={home.howItWorks.steps} />
      <ExperiencesSection copy={home.experiencesSection} experiences={featuredExperiences} />
      <FaqSection copy={home.faqSection} items={homeFaq} />
      <FinalCta copy={home.finalCta} className="max-lg:hidden" />
    </>
  );
}
