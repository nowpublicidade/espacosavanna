import type { SectionCopy } from "@/types/content";
import { heroes } from "@/data/images";
import { whatsappMessages } from "@/lib/whatsapp";

/** Conteúdo da página Contato (Documento 02 §14, Documento 03 §15). */

export const hero = {
  eyebrow: "Contato",
  title: "Entre em contato",
  titleAccent: "com o Espaço Savanna.",
  text: "Atendimento pelo WhatsApp, com discrição do primeiro contato ao agendamento.",
  image: heroes.pages.landscape,
  imageMobile: heroes.pages.portrait,
};

export const info = {
  eyebrow: "Fale conosco",
  title: "Estamos à disposição.",
  text: "Tire dúvidas, consulte horários e agende sua experiência.",
} satisfies SectionCopy;

export const labels = {
  whatsapp: "WhatsApp",
  address: "Endereço",
  hours: "Horários",
  instagram: "Instagram",
  ctaLabel: "Falar pelo WhatsApp",
  mapTitle: "Localização do Espaço Savanna",
  mapPlaceholder: "Mapa",
} as const;

export const whatsappMessage = whatsappMessages.default;
