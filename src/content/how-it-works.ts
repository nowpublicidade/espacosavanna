import type { ImageAsset, SectionCopy } from "@/types/content";
import { ctaPhoto, heroes } from "@/data/images";
import { ctas } from "@/content/home";

/** Conteúdo institucional de Como Funciona (Documento 02 §10, Documento 03 §7 e §12). */

export const hero = {
  eyebrow: "Como funciona",
  title: "Sua experiência começa",
  titleAccent: "de forma simples.",
  text: "Escolha, converse e agende. Do primeiro contato à sua chegada, tudo acontece com discrição e sem burocracia.",
  cta: ctas.schedule,
  image: heroes.pages.landscape,
  imageMobile: heroes.pages.portrait,
};

export const steps = {
  eyebrow: "Passo a passo",
  title: "Agendar é simples.",
} satisfies SectionCopy;

export const choosing = {
  eyebrow: "Como escolher",
  title: "Escolha sua terapeuta com calma.",
  paragraphs: [
    "Cada terapeuta tem uma forma própria de atender. Conheça os perfis, veja as experiências que cada uma oferece e escolha a que mais conversa com o que você procura.",
    "Se preferir, nossa equipe pode auxiliar você nessa escolha durante o contato pelo WhatsApp.",
  ],
  cta: ctas.therapists,
} satisfies SectionCopy & { paragraphs: string[] };

export const attendance = {
  eyebrow: "O atendimento",
  title: "Discrição do primeiro contato ao fim da visita.",
  paragraphs: [
    "Todo o contato, o agendamento e a chegada ao espaço são conduzidos com privacidade e sigilo. Você é recebido em ambiente reservado, preparado para o seu conforto.",
    "Detalhes sobre horários, duração e formas de pagamento são informados no atendimento pelo WhatsApp, junto com a confirmação da reserva.",
  ],
} satisfies SectionCopy & { paragraphs: string[] };

export const faq = {
  eyebrow: "Dúvidas",
  title: "Perguntas frequentes.",
} satisfies SectionCopy;

export const finalCta = {
  title: "Pronto para conhecer o Espaço Savanna?",
  text: "Entre em contato e consulte nossa disponibilidade de horários.",
  cta: ctas.scheduleNow,
  image: ctaPhoto,
} satisfies SectionCopy & { image: ImageAsset };
