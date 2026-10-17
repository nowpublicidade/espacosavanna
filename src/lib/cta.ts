import type { Cta } from "@/types/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Resolve um Cta da camada de conteúdo em atributos de link.
 * CTAs com `whatsappMessage` abrem o WhatsApp em nova aba; links absolutos
 * (como o convite do grupo da Comunidade) também.
 */
export function resolveCta(cta: Cta) {
  if (cta.whatsappMessage) {
    return {
      href: buildWhatsAppUrl(cta.whatsappMessage),
      external: true as const,
      isWhatsApp: true as const,
    };
  }
  // Convite de grupo e outros links absolutos abrem em nova aba; os do
  // WhatsApp ainda recebem o ícone do layout.
  const href = cta.href ?? "#";
  const isAbsolute = /^https?:\/\//.test(href);
  return {
    href,
    external: isAbsolute,
    isWhatsApp: isAbsolute && /(?:^|\.)(?:wa\.me|whatsapp\.com)/.test(new URL(href).hostname),
  };
}
