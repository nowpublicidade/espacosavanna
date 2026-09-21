import type { Therapist } from "@/types/content";
import { therapistPhotos } from "@/data/images";

/**
 * Terapeutas — fotos oficiais aplicadas. Textos (summary, bio, highlights)
 * ainda são PLACEHOLDERS de referência: revisar com o cliente.
 */
const PLACEHOLDER_BIO =
  "Apresentação completa da terapeuta. Texto a ser definido com a equipe do Espaço Savanna.";
const AVAILABILITY = "Consultar disponibilidade pelo WhatsApp";

function therapist(
  slug: string,
  name: string,
  summary: string,
  highlights: string[],
  experiences: string[],
  featured = false,
): Therapist {
  const [image, ...photos] = therapistPhotos[slug];
  return {
    slug,
    name,
    summary,
    bio: PLACEHOLDER_BIO,
    highlights,
    image: { ...image, alt: `${name} — terapeuta do Espaço Savanna` },
    photos: photos.map((p, i) => ({ ...p, alt: `${name} — foto ${i + 2}` })),
    availability: AVAILABILITY,
    experiences,
    featured,
  };
}

export const therapists: Therapist[] = [
  therapist("babi", "Babi", "Atendimento personalizado com foco em presença e conexão.", ["Massagem Tântrica", "Experiência Sensorial", "Atendimento personalizado"], ["massagem-tantrica", "experiencia-sensorial"], true),
  therapist("luana", "Luana", "Técnicas que unem relaxamento profundo e bem-estar.", ["Massagem Relaxante", "Técnicas Sensoriais", "Atendimento exclusivo"], ["massagem-relaxante", "experiencia-sensorial"], true),
  therapist("mily", "Mily", "Um atendimento marcante, com sensibilidade e conexão.", ["Massagem Tântrica", "Sensualidade e conexão", "Toque marcante"], ["massagem-tantrica"], true),
  therapist("adriana", "Adriana", "Experiência e acolhimento em cada atendimento.", ["Massagem Tântrica", "Massagem Relaxante", "Atendimento personalizado"], ["massagem-tantrica", "massagem-relaxante"]),
  therapist("manu", "Manu", "Presença, técnica e um atendimento sob medida.", ["Massagem Relaxante", "Experiência Sensorial", "Atendimento exclusivo"], ["massagem-relaxante", "experiencia-sensorial"]),
  therapist("mariah", "Mariah", "Elegância e atenção aos detalhes do início ao fim.", ["Massagem Tântrica", "Experiência Sensorial", "Atendimento personalizado"], ["massagem-tantrica", "experiencia-sensorial"]),
  therapist("maya", "Maya", "Uma experiência intensa, conduzida com sensibilidade.", ["Massagem Tântrica", "Sensualidade e conexão", "Atendimento exclusivo"], ["massagem-tantrica"]),
];

export const featuredTherapists = therapists.filter((t) => t.featured);

export function getTherapist(slug: string) {
  return therapists.find((t) => t.slug === slug);
}
