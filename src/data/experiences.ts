import type { Experience } from "@/types/content";
import { placeholderImage } from "@/data/images";

/** Conteúdo comercial — nomes e frases do layout aprovado; descrições a revisar. */
export const experiences: Experience[] = [
  {
    slug: "massagem-tantrica",
    name: "Massagem Tântrica",
    tagline: "Uma experiência de conexão, presença e prazer.",
    description:
      "Descrição completa da experiência. Texto a ser definido com a equipe do Espaço Savanna.",
    image: placeholderImage("experience", "Massagem Tântrica", 16 / 9, "center 18%"),
    featured: true,
  },
  {
    slug: "massagem-relaxante",
    name: "Massagem Relaxante",
    tagline: "Técnicas que promovem relaxamento profundo e bem-estar.",
    description:
      "Descrição completa da experiência. Texto a ser definido com a equipe do Espaço Savanna.",
    image: placeholderImage("experience", "Massagem Relaxante", 16 / 9, "center 45%"),
    featured: true,
  },
  {
    slug: "experiencia-sensorial",
    name: "Experiência Sensorial",
    tagline: "Uma jornada personalizada de sensações únicas.",
    description:
      "Descrição completa da experiência. Texto a ser definido com a equipe do Espaço Savanna.",
    image: placeholderImage("experience", "Experiência Sensorial", 16 / 9, "center 16%"),
    featured: true,
  },
];

export const featuredExperiences = experiences.filter((e) => e.featured);

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug);
}
