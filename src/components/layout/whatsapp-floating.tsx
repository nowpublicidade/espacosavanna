import { WhatsAppIcon } from "@/components/shared/icons";
import { CtaLink } from "@/components/shared/cta-link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import type { Cta } from "@/types/content";

type WhatsAppFloatingProps = {
  cta: Cta;
  /**
   * Sobrescreve a flag global `siteConfig.features.whatsappFloating`.
   * Enquanto a flag estiver desligada, o componente não renderiza nada.
   */
  enabled?: boolean;
  /**
   * bar    = barra sticky inferior do layout aprovado (mobile)
   * bubble = balão circular no canto (desktop, fora do layout — a validar)
   * auto   = bar abaixo de lg, bubble a partir de lg
   */
  variant?: "bar" | "bubble" | "auto";
  className?: string;
};

/**
 * CTA de WhatsApp sempre visível. Desligado por padrão (Fase 02):
 * a barra segue exatamente o layout aprovado; o balão é proposta.
 */
export function WhatsAppFloating({
  cta,
  enabled = siteConfig.features.whatsappFloating,
  variant = "auto",
  className,
}: WhatsAppFloatingProps) {
  if (!enabled) return null;

  const showBar = variant !== "bubble";
  const showBubble = variant !== "bar";

  return (
    <>
      {showBar ? (
        <div
          className={cn(
            "sticky bottom-0 z-30 px-[1.125rem] pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]",
            "bg-[linear-gradient(180deg,rgb(11_8_6/0)_0%,rgb(11_8_6/0.94)_40%)]",
            variant === "auto" && "lg:hidden",
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
            "outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            variant === "auto" && "max-lg:hidden",
            className,
          )}
        >
          <WhatsAppIcon className="size-6" strokeWidth={1.5} />
        </a>
      ) : null}
    </>
  );
}
