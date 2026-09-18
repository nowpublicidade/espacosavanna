import { WhatsAppIcon } from "@/components/shared/icons";
import { CtaLink } from "@/components/shared/cta-link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import type { Cta } from "@/types/content";

type WhatsAppFloatingProps = {
  cta: Cta;
  /** Barra sticky inferior do layout aprovado (apenas abaixo de lg). */
  bar?: boolean;
  /** Balão circular fixo no canto (apenas a partir de lg) — proposta, desligado. */
  bubble?: boolean;
  className?: string;
};

/**
 * CTA de WhatsApp sempre visível.
 * A barra segue o layout aprovado: sticky na base, gradiente de fusão com o
 * fundo, botão primário de 54px — sem sombra, sem movimento.
 */
export function WhatsAppFloating({
  cta,
  bar = siteConfig.features.whatsappBar,
  bubble = siteConfig.features.whatsappBubble,
  className,
}: WhatsAppFloatingProps) {
  if (!bar && !bubble) return null;

  const showBar = bar;
  const showBubble = bubble;

  return (
    <>
      {showBar ? (
        <div
          className={cn(
            "sticky bottom-0 z-30 px-[1.125rem] pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]",
            "bg-[linear-gradient(180deg,rgb(11_8_6/0)_0%,rgb(11_8_6/0.94)_40%)] lg:hidden",
            className,
          )}
        >
          <CtaLink cta={cta} size="md" fullWidth />
        </div>
      ) : null}

      {showBubble ? (
        <a
          href={buildWhatsAppUrl(cta.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={cta.label}
          className={cn(
            "surface-gold fixed right-6 bottom-6 z-30 flex size-14 items-center justify-center rounded-full",
            "shadow-[0_10px_30px_rgb(0_0_0/0.5)] transition-[filter,transform] duration-(--duration-fast) ease-(--ease-out) hover:brightness-[1.04] hover:scale-[1.03]",
            "outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background max-lg:hidden",
            className,
          )}
        >
          <WhatsAppIcon className="size-6" strokeWidth={1.5} />
        </a>
      ) : null}
    </>
  );
}
