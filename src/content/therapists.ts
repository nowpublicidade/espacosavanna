import type { Cta, ImageAsset, SectionCopy } from "@/types/content";
import { placeholderImage } from "@/data/images";
import { ctas } from "@/content/home";

/** Conteúdo institucional da página Terapeutas (Documento 02 §8, Documento 03 §10). */

export const hero = {
  eyebrow: "Terapeutas",
  title: "Conheça",
  titleAccent: "nossas terapeutas.",
  text: "Cada profissional possui uma experiência e uma forma única de atendimento. Escolha com calma — nossa equipe pode auxiliar você.",
  cta: ctas.availability,
  image: placeholderImage("hero", "Ambiente reservado do Espaço Savanna", 16 / 9, "center 40%"),
};

export const listing = {
  eyebrow: "Escolha sua terapeuta",
  title: "Profissionais preparadas para uma experiência personalizada.",
  text: "Em um ambiente confortável e discreto.",
  cardCta: { label: "Conhecer perfil" },
} satisfies SectionCopy & { cardCta: Cta };

export const finalCta = {
  title: "Em dúvida sobre qual escolher?",
  text: "Fale com a nossa equipe pelo WhatsApp. Ajudamos você a encontrar a experiência ideal.",
  cta: ctas.availability,
  image: placeholderImage("space", "Ambiente do Espaço Savanna", 16 / 9, "center 40%"),
} satisfies SectionCopy & { image: ImageAsset };

/** Rótulos da página individual. */
export const profile = {
  aboutEyebrow: "Apresentação",
  serviceEyebrow: "Perfil de atendimento",
  availabilityEyebrow: "Disponibilidade",
  experiencesTitle: "Experiências oferecidas",
  ctaLabel: "Agendar pelo WhatsApp",
  backLabel: "Todas as terapeutas",
} as const;
