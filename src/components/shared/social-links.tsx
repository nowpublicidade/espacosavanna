import type { ComponentType, SVGProps } from "react";
import { InstagramIcon, WhatsAppIcon } from "@/components/shared/icons";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";
import type { SiteContact } from "@/types/content";

export type SocialLink = {
  label: string;
  href: string;
  /** Componente, não elemento: cada contexto define o tamanho do ícone. */
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  external: true;
};

/**
 * Canais públicos da marca, na mesma ordem e com os mesmos ícones no rodapé
 * e na página de Contato. Fonte única para os dois não divergirem.
 */
export function socialLinks(contact: SiteContact): SocialLink[] {
  return [
    {
      label: "WhatsApp",
      href: buildWhatsAppUrl(whatsappMessages.default),
      Icon: WhatsAppIcon,
      external: true,
    },
    {
      label: "Instagram",
      href: contact.instagramUrl,
      Icon: InstagramIcon,
      external: true,
    },
  ];
}
