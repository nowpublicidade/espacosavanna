import type { Feature, ImageAsset, SectionCopy } from "@/types/content";
import { ctaPhoto, heroes, mosaic } from "@/data/images";
import { whatsappMessages } from "@/lib/whatsapp";

/** Conteúdo de Aluguel de Salas (Documento 02 §13, Documento 03 §14). */

const availabilityCta = {
  label: "Consultar disponibilidade",
  intent: "availability" as const,
  whatsappMessage: whatsappMessages.rooms,
};

export const hero = {
  eyebrow: "Aluguel de salas",
  title: "Um espaço preparado",
  titleAccent: "para seus atendimentos.",
  text: "Disponibilizamos ambientes estruturados para profissionais que buscam conforto, privacidade e uma localização estratégica.",
  cta: availabilityCta,
  image: heroes.pages.landscape,
  imageMobile: heroes.pages.portrait,
};

export const structure = {
  eyebrow: "Estrutura",
  title: "Salas privativas, prontas para receber.",
  text: "Ambientes climatizados, com área de banho, iluminação preparada e recepção discreta. Você chega e atende.",
  cta: availabilityCta,
  images: mosaic,
} satisfies SectionCopy & { images: readonly [ImageAsset, ImageAsset, ImageAsset] };

export const differentials = {
  eyebrow: "Por que aqui",
  title: "Privacidade, localização e flexibilidade.",
  items: [
    {
      icon: "lock",
      title: "Privacidade",
      shortTitle: "Privacidade",
      description: "Entrada discreta e ambientes reservados para você e seus clientes.",
    },
    {
      icon: "calendar",
      title: "Flexibilidade",
      shortTitle: "Flexível",
      description: "Períodos, diárias ou horários avulsos, conforme a sua agenda.",
    },
    {
      icon: "sun",
      title: "Localização",
      shortTitle: "Localização",
      description: "Fácil acesso e estacionamento próximo, em região estratégica.",
    },
  ] satisfies Feature[],
} satisfies SectionCopy & { items: Feature[] };

export const usage = {
  eyebrow: "Formas de utilização",
  title: "Do horário avulso à agenda fixa.",
  paragraphs: [
    "As salas podem ser reservadas por período, diária ou em horários recorrentes. Consulte a disponibilidade e monte o formato que melhor atende à sua rotina.",
    "Valores, regras de uso e detalhes da estrutura são informados no atendimento pelo WhatsApp.",
  ],
  cta: availabilityCta,
} satisfies SectionCopy & { paragraphs: string[] };

export const finalCta = {
  title: "Consulte a disponibilidade das salas.",
  text: "Fale com a nossa equipe e conheça as condições para utilizar o espaço.",
  cta: availabilityCta,
  image: ctaPhoto,
} satisfies SectionCopy & { image: ImageAsset };
