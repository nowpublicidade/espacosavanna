import { Button, type ButtonProps } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/shared/icons";
import { resolveCta } from "@/lib/cta";
import type { Cta } from "@/types/content";

type CtaLinkProps = {
  cta: Cta;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  fullWidth?: boolean;
  /** Oculta o ícone de WhatsApp mesmo em CTAs de conversão. */
  hideIcon?: boolean;
  icon?: ButtonProps["icon"];
  iconPosition?: ButtonProps["iconPosition"];
  className?: string;
};

/**
 * Ponte entre conteúdo e UI: resolve um `Cta` (WhatsApp ou rota interna)
 * e renderiza o Button correspondente. CTAs de WhatsApp abrem em nova aba
 * e recebem o ícone do layout por padrão.
 */
export function CtaLink({
  cta,
  variant = "primary",
  size = "lg",
  fullWidth,
  hideIcon,
  icon,
  iconPosition,
  className,
}: CtaLinkProps) {
  const { href, external, isWhatsApp } = resolveCta(cta);
  const resolvedIcon = icon ?? (isWhatsApp && !hideIcon ? <WhatsAppIcon /> : undefined);

  return (
    <Button
      href={href}
      external={external}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      icon={resolvedIcon}
      iconPosition={iconPosition}
      className={className}
    >
      {cta.label}
    </Button>
  );
}
