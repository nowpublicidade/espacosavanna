import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfileHero } from "@/components/sections/profile-hero";
import { ProfileDetailsSection } from "@/components/sections/profile-details-section";
import { TherapistsGridSection } from "@/components/sections/therapists-grid-section";
import { detail } from "@/content/experiences";
import { pages } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/data/site";
import { experiences, getExperience } from "@/data/experiences";
import { therapists } from "@/data/therapists";
import { whatsappMessages } from "@/lib/whatsapp";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }: PageProps<"/experiencias/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) return {};
  return buildMetadata({
    title: `${experience.name} — Experiências — ${siteConfig.name}`,
    description: experience.tagline,
    path: `${pages.experiences.path}/${experience.slug}`,
    type: "article",
  });
}

/** Página individual da experiência: apresentação + terapeutas que a oferecem. */
export default async function ExperiencePage({ params }: PageProps<"/experiencias/[slug]">) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();

  const offeredBy = therapists.filter((therapist) => therapist.experiences.includes(experience.slug));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Experiências", path: pages.experiences.path },
          { name: experience.name, path: `${pages.experiences.path}/${experience.slug}` },
        ])}
      />
      <ProfileHero
        eyebrow={detail.eyebrow}
        name={experience.name}
        summary={experience.tagline}
        image={experience.image}
        whatsappMessage={whatsappMessages.experience(experience.name)}
        ctaLabel={detail.ctaLabel}
        back={{ label: detail.backLabel, href: pages.experiences.path }}
      />
      <ProfileDetailsSection about={{ eyebrow: detail.aboutEyebrow, paragraphs: [experience.description] }} />
      {offeredBy.length > 0 ? (
        <TherapistsGridSection
          copy={{ eyebrow: detail.therapistsEyebrow, title: detail.therapistsTitle }}
          therapists={offeredBy}
          cardCta={detail.cardCta}
          id="terapeutas-da-experiencia"
        />
      ) : null}
    </>
  );
}
