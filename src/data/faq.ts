import type { FaqItem } from "@/types/content";

/** Perguntas do layout aprovado + Documento 03, item 12. */
export const homeFaq: FaqItem[] = [
  {
    question: "O atendimento é discreto?",
    answer:
      "Sim. Todo o contato, o agendamento e a chegada ao espaço são conduzidos com total privacidade e sigilo.",
  },
  {
    question: "Preciso agendar com antecedência?",
    answer:
      "Recomendamos agendar com antecedência para garantir o horário e a terapeuta de sua preferência.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "As formas aceitas são informadas no atendimento pelo WhatsApp, junto com todos os detalhes da reserva.",
  },
];

export const fullFaq: FaqItem[] = [
  {
    question: "Como faço para agendar?",
    answer: "O agendamento é realizado diretamente pelo WhatsApp.",
  },
  {
    question: "Preciso escolher uma terapeuta?",
    answer: "Sim. Nossa equipe pode auxiliar você durante esse processo.",
  },
  ...homeFaq,
];
