import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfileHero } from "@/components/sections/profile-hero";
import { ProfileDetailsSection } from "@/components/sections/profile-details-section";
import { TherapistsGridSection } from "@/components/sections/therapists-grid-section";
import { detail } from "@/content/experiences";
import { pages } from "@/content/pages";
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
  return {
    title: `${experience.name} — Experiências`,
    description: experience.tagline,
    alternates: { canonical: `${pages.experiences.path}/${experience.slug}` },
  };
}

/** Página individual da experiência: apresentação + terapeutas que a oferecem. */
export default async function ExperiencePage({ params }: PageProps<"/experiencias/[slug]">) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();

  const offeredBy = therapists.filter((therapist) => therapist.experiences.includes(experience.slug));

  return (
    <>
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
