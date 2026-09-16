import { contact } from "@/data/site";

/**
 * Único ponto de construção de links de WhatsApp.
 * Toda conversão do site passa por aqui — facilita trocar o número,
 * adicionar UTM ou rastrear cliques.
 */
export function buildWhatsAppUrl(message?: string, number = contact.whatsappNumber) {
  const url = new URL(`https://wa.me/${number}`);
  if (message) url.searchParams.set("text", message);
  return url.toString();
}

/** Mensagens contextuais reutilizadas por seções e páginas. */
export const whatsappMessages = {
  default: "Olá! Gostaria de agendar um horário no Espaço Savanna.",
  availability: "Olá! Gostaria de consultar a disponibilidade de horários.",
  therapist: (name: string) =>
    `Olá! Gostaria de agendar um horário com ${name}.`,
  experience: (name: string) =>
    `Olá! Gostaria de saber mais sobre a experiência ${name}.`,
  rooms: "Olá! Gostaria de consultar a disponibilidade de salas para atendimento.",
  careers: "Olá! Tenho interesse em fazer parte da equipe do Espaço Savanna.",
} as const;
