import type { PageMeta } from "@/types/content";
import { siteConfig } from "@/data/site";

/**
 * Metadata por rota — base do SEO (Documento 02, item 17).
 * Títulos e descrições são placeholders editoriais a revisar.
 */
export const pages = {
  home: {
    path: "/",
    title: `${siteConfig.name} — Experiência premium em ambiente reservado`,
    description:
      "Uma experiência de conexão, conforto e exclusividade. Ambiente reservado, atendimento personalizado e agendamento pelo WhatsApp.",
  },
  space: {
    path: "/o-espaco",
    title: `O Espaço — ${siteConfig.name}`,
    description:
      "Um espaço criado para experiências únicas: conforto, privacidade e uma estrutura preparada para receber cada visitante com atenção aos detalhes.",
  },
  therapists: {
    path: "/terapeutas",
    title: `Terapeutas — ${siteConfig.name}`,
    description:
      "Conheça nossas terapeutas. Cada profissional possui uma experiência e uma forma única de atendimento.",
  },
  experiences: {
    path: "/experiencias",
    title: `Experiências — ${siteConfig.name}`,
    description:
      "Descubra uma experiência personalizada, pensada para respeitar o momento e a preferência de cada visitante.",
  },
  howItWorks: {
    path: "/como-funciona",
    title: `Como Funciona — ${siteConfig.name}`,
    description:
      "Como agendar, como escolher sua terapeuta e como funciona o atendimento. Respostas para as dúvidas mais comuns.",
  },
  gallery: {
    path: "/galeria",
    title: `Galeria — ${siteConfig.name}`,
    description: "Arquitetura, iluminação e detalhes do ambiente do Espaço Savanna.",
  },
  careers: {
    path: "/trabalhe-conosco",
    title: `Trabalhe Conosco — ${siteConfig.name}`,
    description:
      "Faça parte do Espaço Savanna. Buscamos profissionais comprometidas com atendimento de qualidade.",
  },
  rooms: {
    path: "/aluguel-de-salas",
    title: `Aluguel de Salas — ${siteConfig.name}`,
    description:
      "Ambientes estruturados para profissionais que buscam conforto, privacidade e localização estratégica.",
  },
  contact: {
    path: "/contato",
    title: `Contato — ${siteConfig.name}`,
    description: "Entre em contato pelo WhatsApp. Endereço, horários e Instagram.",
  },
} satisfies Record<string, PageMeta>;

export type PageKey = keyof typeof pages;
