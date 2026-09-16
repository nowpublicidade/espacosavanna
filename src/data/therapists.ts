import type { Therapist } from "@/types/content";
import { placeholderImage } from "@/data/images";

/**
 * Conteúdo comercial — PLACEHOLDERS baseados no layout aprovado.
 * Nomes, textos e fotos serão substituídos pelos dados reais.
 */
export const therapists: Therapist[] = [
  {
    slug: "babi",
    name: "Babi",
    summary: "Atendimento personalizado com foco em presença e conexão.",
    bio: "Apresentação completa da terapeuta. Texto a ser definido com a equipe do Espaço Savanna.",
    highlights: ["Massagem Tântrica", "Experiência Sensorial", "Atendimento personalizado"],
    image: placeholderImage("therapist", "Babi — terapeuta do Espaço Savanna", 3 / 4),
    availability: "Consultar disponibilidade pelo WhatsApp",
    experiences: ["massagem-tantrica", "experiencia-sensorial"],
    featured: true,
  },
  {
    slug: "luana",
    name: "Luana",
    summary: "Técnicas que unem relaxamento profundo e bem-estar.",
    bio: "Apresentação completa da terapeuta. Texto a ser definido com a equipe do Espaço Savanna.",
    highlights: ["Massagem Relaxante", "Técnicas Sensoriais", "Atendimento exclusivo"],
    image: placeholderImage("therapist", "Luana — terapeuta do Espaço Savanna", 3 / 4),
    availability: "Consultar disponibilidade pelo WhatsApp",
    experiences: ["massagem-relaxante", "experiencia-sensorial"],
    featured: true,
  },
  {
    slug: "julia",
    name: "Júlia",
    summary: "Um atendimento marcante, com sensibilidade e conexão.",
    bio: "Apresentação completa da terapeuta. Texto a ser definido com a equipe do Espaço Savanna.",
    highlights: ["Sensualidade e conexão", "Toque marcante", "Atendimento personalizado"],
    image: placeholderImage("therapist", "Júlia — terapeuta do Espaço Savanna", 3 / 4),
    availability: "Consultar disponibilidade pelo WhatsApp",
    experiences: ["massagem-tantrica"],
    featured: true,
  },
];

export const featuredTherapists = therapists.filter((t) => t.featured);

export function getTherapist(slug: string) {
  return therapists.find((t) => t.slug === slug);
}
