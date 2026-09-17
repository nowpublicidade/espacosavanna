import type { Cta, Feature, SectionCopy, Step } from "@/types/content";
import { placeholderImage } from "@/data/images";

/**
 * Conteúdo institucional da Home.
 * Textos do layout aprovado (prioridade) com fallback do Documento 03.
 * Ordem das seções segue o layout aprovado e não deve ser alterada sem validação.
 */

export const ctas = {
  schedule: {
    label: "Agendar pelo WhatsApp",
    intent: "schedule",
    whatsappMessage: "Olá! Gostaria de agendar um horário no Espaço Savanna.",
  },
  availability: {
    label: "Consultar disponibilidade",
    intent: "availability",
    whatsappMessage: "Olá! Gostaria de consultar a disponibilidade de horários.",
  },
  therapists: {
    label: "Conhecer terapeutas",
    intent: "therapists",
    href: "/terapeutas",
  },
  space: {
    label: "Conhecer o Espaço",
    href: "/o-espaco",
  },
  scheduleNow: {
    label: "Agendar agora",
    intent: "schedule",
    whatsappMessage: "Olá! Gostaria de agendar um horário no Espaço Savanna.",
  },
} satisfies Record<string, Cta>;

export const hero = {
  eyebrow: "Um espaço exclusivo",
  title: "Uma experiência",
  titleAccent: "além do convencional.",
  text: "Ambiente sofisticado, atendimento personalizado e total discrição para você viver momentos de relaxamento, conexão e novas sensações.",
  cta: ctas.schedule,
  secondaryCta: ctas.space,
  image: placeholderImage("hero", "Ambiente do Espaço Savanna", 16 / 9, "center 40%"),
} satisfies SectionCopy & { image: ReturnType<typeof placeholderImage> };

export const features: Feature[] = [
  {
    icon: "lock",
    title: "Atendimento reservado",
    shortTitle: "Reservado",
    description: "Discrição do primeiro contato ao atendimento.",
  },
  {
    icon: "sofa",
    title: "Ambiente confortável",
    shortTitle: "Confortável",
    description: "Espaços privativos e preparados para seu bem-estar.",
  },
  {
    icon: "sparkles",
    title: "Terapeutas selecionadas",
    shortTitle: "Selecionadas",
    description: "Profissionais experientes para proporcionar a melhor experiência.",
    shortDescription: "Profissionais experientes e preparadas.",
  },
];

export const space = {
  eyebrow: "O Espaço",
  title: "Um ambiente pensado para você se desconectar.",
  text: "Cada detalhe do Espaço Savanna foi planejado para proporcionar conforto, privacidade e uma atmosfera acolhedora.",
  cta: ctas.space,
  images: [
    placeholderImage("space", "Sala de atendimento do Espaço Savanna", 4 / 5),
    placeholderImage("space", "Detalhe do ambiente", 1),
    placeholderImage("space", "Iluminação e texturas do espaço", 1),
  ],
} satisfies SectionCopy & { images: ReturnType<typeof placeholderImage>[] };

export const therapistsSection = {
  eyebrow: "Nossas terapeutas",
  title: "Encontre a experiência ideal para você.",
  cta: { label: "Ver todas as terapeutas", href: "/terapeutas" },
  cardCta: { label: "Conhecer perfil" },
} satisfies SectionCopy & { cardCta: Cta };

export const howItWorks = {
  eyebrow: "Como funciona",
  title: "Agendar é simples.",
  steps: [
    { icon: "user", title: "Escolha sua terapeuta" },
    { icon: "whatsapp", title: "Entre em contato pelo WhatsApp" },
    { icon: "calendar", title: "Combine seu horário" },
    { icon: "sparkles", title: "Viva sua experiência" },
  ] satisfies Step[],
} satisfies SectionCopy & { steps: Step[] };

export const experiencesSection = {
  eyebrow: "Experiências",
  title: "Escolha o tipo de experiência ideal para você.",
  cta: { label: "Ver todas", href: "/experiencias" },
} satisfies SectionCopy;

export const faqSection = {
  eyebrow: "Dúvidas",
  title: "Perguntas frequentes.",
} satisfies SectionCopy;

export const location = {
  eyebrow: "Localização",
  title: "Fácil de chegar, discreto ao entrar.",
  text: "Endereço e orientações de chegada são confirmados no atendimento pelo WhatsApp.",
} satisfies SectionCopy;

export const finalCta = {
  title: "Reserve o seu momento.",
  text: "Atendimento com hora marcada, em ambiente exclusivo e reservado.",
  cta: ctas.schedule,
  image: placeholderImage("space", "Ambiente do Espaço Savanna", 16 / 9, "center 40%"),
} satisfies SectionCopy & { image: ReturnType<typeof placeholderImage> };

/** Texto institucional do rodapé (layout aprovado). */
export const footer = {
  tagline: "Atendimento com hora marcada. Ambiente exclusivo e reservado.",
} as const;
