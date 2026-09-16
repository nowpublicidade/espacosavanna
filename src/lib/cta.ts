import type { Cta } from "@/types/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Resolve um Cta da camada de conteúdo em atributos de link.
 * CTAs com `whatsappMessage` abrem o WhatsApp em nova aba.
 */
export function resolveCta(cta: Cta) {
  if (cta.whatsappMessage) {
    return {
      href: buildWhatsAppUrl(cta.whatsappMessage),
      external: true as const,
      isWhatsApp: true as const,
    };
  }
  return {
    href: cta.href ?? "#",
    external: false as const,
    isWhatsApp: false as const,
  };
}
