import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfileHero } from "@/components/sections/profile-hero";
import { ProfileDetailsSection } from "@/components/sections/profile-details-section";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { profile } from "@/content/therapists";
import { pages } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/data/site";
import { getTherapist, therapists } from "@/data/therapists";
import { experiences } from "@/data/experiences";
import { whatsappMessages } from "@/lib/whatsapp";

export function generateStaticParams() {
  return therapists.map((therapist) => ({ slug: therapist.slug }));
}

export async function generateMetadata({ params }: PageProps<"/terapeutas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const therapist = getTherapist(slug);
  if (!therapist) return {};
  return buildMetadata({
    title: `${therapist.name} — Terapeutas — ${siteConfig.name}`,
    description: therapist.summary,
    path: `${pages.therapists.path}/${therapist.slug}`,
    type: "article",
  });
}

/** Página individual da terapeuta (Documento 02 §8, Documento 03 §10). */
export default async function TherapistPage({ params }: PageProps<"/terapeutas/[slug]">) {
  const { slug } = await params;
  const therapist = getTherapist(slug);
  if (!therapist) notFound();

  const offered = experiences.filter((experience) => therapist.experiences.includes(experience.slug));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Terapeutas", path: pages.therapists.path },
          { name: therapist.name, path: `${pages.therapists.path}/${therapist.slug}` },
        ])}
      />
      <ProfileHero
        eyebrow="Terapeuta"
        name={therapist.name}
        summary={therapist.summary}
        image={therapist.image}
        whatsappMessage={whatsappMessages.therapist(therapist.name)}
        ctaLabel={profile.ctaLabel}
        back={{ label: profile.backLabel, href: pages.therapists.path }}
        meta={therapist.availability ? [{ label: profile.availabilityEyebrow, value: therapist.availability }] : undefined}
      />
      <ProfileDetailsSection
        about={{ eyebrow: profile.aboutEyebrow, paragraphs: [therapist.bio] }}
        service={{ eyebrow: profile.serviceEyebrow, items: therapist.highlights }}
      />
      {therapist.photos && therapist.photos.length > 0 ? (
        <GallerySection
          copy={{ eyebrow: "Fotos", title: profile.photosTitle }}
          images={therapist.photos}
          aspect="portrait"
          surface="base"
          id="fotos"
        />
      ) : null}
      {offered.length > 0 ? (
        <ExperiencesSection
          copy={{ eyebrow: "Experiências", title: profile.experiencesTitle }}
          experiences={offered}
          surface="alt"
          id="experiencias-oferecidas"
        />
      ) : null}
    </>
  );
}
