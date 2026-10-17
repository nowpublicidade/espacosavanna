import type { Feature, SectionCopy } from "@/types/content";
import { ctaPhoto, heroes } from "@/data/images";

/**
 * Clube de Vantagens — conteúdo do card aprovado pelo cliente, adaptado para
 * o site: no card o texto fala com quem já entrou no grupo ("você acaba de
 * entrar"); aqui fala com quem ainda vai entrar. "Massagistas" virou
 * "terapeutas", como no resto do site.
 */

export const hero = {
  eyebrow: "Comunidade",
  title: "Entre para o nosso",
  titleAccent: "Clube de Vantagens.",
  text: "Promoções exclusivas, mimos e conteúdos especiais para quem merece relaxar.",
  cta: { label: "Entrar no clube", href: "#entrar" },
  image: heroes.pages.landscape,
  imageMobile: heroes.pages.portrait,
};

export const about = {
  eyebrow: "Clube de Vantagens Savanna",
  title: "O grupo de avisos mais relaxante do WhatsApp.",
  paragraphs: [
    "Criamos esta comunidade para mimar quem já cuida tanto dos outros diariamente — com vantagens que não anunciamos em nenhum outro lugar.",
    "É um grupo de avisos: só a nossa equipe publica. Você recebe as novidades no seu tempo, sem conversa paralela e sem notificação desnecessária.",
  ],
} satisfies SectionCopy & { paragraphs: string[] };

export const benefitsSection = {
  eyebrow: "Vantagens",
  title: "O que você vai encontrar por aqui.",
} satisfies SectionCopy;

export const benefits: Feature[] = [
  {
    icon: "tag",
    title: "Cupons de desconto",
    shortTitle: "Descontos",
    description: "Para as suas massagens favoritas.",
  },
  {
    icon: "gift",
    title: "Mimos e brindes",
    shortTitle: "Mimos",
    description: "Upgrades de sessão e brindes exclusivos para membros.",
  },
  {
    icon: "bell",
    title: "Alertas em primeira mão",
    shortTitle: "Alertas",
    description: "Promoções relâmpago avisadas antes de todo mundo.",
  },
  {
    icon: "bloom",
    title: "Conteúdos exclusivos",
    shortTitle: "Conteúdos",
    description: "Publicações que você só encontra aqui.",
  },
  {
    icon: "heart",
    title: "Novas terapeutas",
    shortTitle: "Novidades",
    description: "Você conhece quem chega à equipe antes do site.",
  },
];

/** Os dois avisos do card: privacidade e a dica de notificações. */
export const notes = [
  {
    icon: "lock",
    title: "Privacidade",
    text: "Ninguém além dos administradores consegue ver o seu número ou que você está aqui. Sua privacidade é nossa prioridade.",
  },
  {
    icon: "bell",
    title: "Dica de ouro",
    text: "Mantenha o grupo fixado e com as notificações ativas. Quem chega primeiro sempre garante os melhores mimos do dia.",
  },
] as const;

export const finalCta = {
  title: "Não fique de fora.",
  text: "A entrada é gratuita e você sai quando quiser, com um toque.",
  cta: { label: "Entrar no clube", href: "#entrar" },
  image: ctaPhoto,
} satisfies SectionCopy & { image: typeof ctaPhoto };
