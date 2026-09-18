import type { ImageAsset, SectionCopy } from "@/types/content";
import { placeholderImage } from "@/data/images";
import { ctas } from "@/content/home";

/** Conteúdo institucional da página Experiências (Documento 02 §9, Documento 03 §11). */

export const hero = {
  eyebrow: "Experiências",
  title: "Descubra uma",
  titleAccent: "experiência personalizada.",
  text: "Cada atendimento é pensado para proporcionar uma experiência diferenciada, respeitando o momento e a preferência de cada visitante.",
  cta: ctas.availability,
  image: placeholderImage("hero", "Ambiente do Espaço Savanna", 16 / 9, "center 40%"),
};

export const listing = {
  eyebrow: "Nossas experiências",
  title: "Escolha o que faz sentido para o seu momento.",
} satisfies SectionCopy;

export const finalCta = {
  title: "Consulte a disponibilidade.",
  text: "Fale com a nossa equipe pelo WhatsApp e escolha o melhor horário para a sua experiência.",
  cta: ctas.availability,
  image: placeholderImage("space", "Ambiente do Espaço Savanna", 16 / 9, "center 40%"),
} satisfies SectionCopy & { image: ImageAsset };

/** Rótulos da página individual. */
export const detail = {
  eyebrow: "Experiência",
  aboutEyebrow: "Sobre a experiência",
  therapistsTitle: "Terapeutas que oferecem esta experiência",
  therapistsEyebrow: "Terapeutas",
  ctaLabel: "Consultar disponibilidade",
  backLabel: "Todas as experiências",
  cardCta: { label: "Conhecer perfil" },
} as const;
