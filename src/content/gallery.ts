import type { ImageAsset, SectionCopy } from "@/types/content";
import { placeholderImage } from "@/data/images";
import { ctas } from "@/content/home";

/** Conteúdo institucional da Galeria (Documento 02 §11) — pouco texto, imagens grandes. */

export const hero = {
  eyebrow: "Galeria",
  title: "O espaço",
  titleAccent: "em imagens.",
  text: "Arquitetura, iluminação e detalhes de um ambiente pensado para o seu conforto.",
  image: placeholderImage("hero", "Ambiente do Espaço Savanna", 16 / 9, "center 40%"),
};

export const finalCta = {
  title: "Venha conhecer pessoalmente.",
  text: "Entre em contato e consulte nossa disponibilidade de horários.",
  cta: ctas.schedule,
  image: placeholderImage("space", "Ambiente do Espaço Savanna", 16 / 9, "center 40%"),
} satisfies SectionCopy & { image: ImageAsset };
