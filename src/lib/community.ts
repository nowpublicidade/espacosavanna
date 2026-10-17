import { contact } from "@/data/site";
import { whatsappMessages } from "@/lib/whatsapp";
import type { Cta } from "@/types/content";

/**
 * CTA de entrada no Clube de Vantagens. Enquanto o convite do grupo não
 * estiver em `data/site.ts`, abre a conversa direta com a mensagem pronta —
 * assim a página funciona desde já, e basta colar o link depois.
 */
export function communityCta(label: string): Cta {
  const invite = contact.communityUrl?.trim();
  return invite ? { label, href: invite } : { label, whatsappMessage: whatsappMessages.community };
}
