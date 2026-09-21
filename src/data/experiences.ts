import type { Experience } from "@/types/content";
import { experiencePhotos } from "@/data/images";

/** Conteúdo comercial — nomes e frases do layout aprovado; descrições a revisar. */
export const experiences: Experience[] = [
  {
    slug: "massagem-tantrica",
    name: "Massagem Tântrica",
    icon: "lotus",
    tagline: "Uma experiência de conexão, presença e prazer.",
    description:
      "Descrição completa da experiência. Texto a ser definido com a equipe do Espaço Savanna.",
    image: experiencePhotos["massagem-tantrica"],
    featured: true,
  },
  {
    slug: "massagem-relaxante",
    name: "Massagem Relaxante",
    icon: "petal",
    tagline: "Técnicas que promovem relaxamento profundo e bem-estar.",
    description:
      "Descrição completa da experiência. Texto a ser definido com a equipe do Espaço Savanna.",
    image: experiencePhotos["massagem-relaxante"],
    featured: true,
  },
  {
    slug: "experiencia-sensorial",
    name: "Experiência Sensorial",
    icon: "sun",
    tagline: "Uma jornada personalizada de sensações únicas.",
    description:
      "Descrição completa da experiência. Texto a ser definido com a equipe do Espaço Savanna.",
    image: experiencePhotos["experiencia-sensorial"],
    featured: true,
  },
];

export const featuredExperiences = experiences.filter((e) => e.featured);

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug);
}
