import type { ReactNode, SVGProps } from "react";
import type { IconName } from "@/types/content";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Conjunto de ícones de linha do layout aprovado (traço 1.2px, sem fill).
 * Lucide fica reservado ao chrome de interface (fechar, etc.).
 * Cor herdada de `currentColor`; tamanho via className.
 */
type Props = SVGProps<SVGSVGElement>;

const base = (props: Props) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  "aria-hidden": true,
  ...props,
});

const paths: Record<Exclude<IconName, "whatsapp">, ReactNode> = {
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15" r="1.2" />
    </>
  ),
  bloom: (
    <>
      <path d="M12 5c2.2 2.2 2.2 5.6 0 7.8-2.2-2.2-2.2-5.6 0-7.8Z" />
      <path d="M12 12.8c-2.6 1-5.4.3-7-1.6 2.2-1.3 5-1 7 1.6Z" />
      <path d="M12 12.8c2.6 1 5.4.3 7-1.6-2.2-1.3-5-1-7 1.6Z" />
      <path d="M6.5 15.5c1.8 2.4 4.6 3.5 5.5 3.5s3.7-1.1 5.5-3.5" />
    </>
  ),
  lotus: (
    <>
      <path d="M12 5c2.2 2.2 2.2 5.6 0 7.8-2.2-2.2-2.2-5.6 0-7.8Z" />
      <path d="M12 12.8c-2.6 1-5.4.3-7-1.6 2.2-1.3 5-1 7 1.6Z" />
      <path d="M12 12.8c2.6 1 5.4.3 7-1.6-2.2-1.3-5-1-7 1.6Z" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8.5" r="3.4" />
      <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3.5v4M16 3.5v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  petal: (
    <>
      <path d="M6.5 15.5c1.8 2.4 4.6 3.5 5.5 3.5s3.7-1.1 5.5-3.5" />
      <circle cx="12" cy="9" r="3.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" strokeLinecap="round" />
    </>
  ),
};

type IconProps = Props & { name: IconName };

/** Ícone de conteúdo resolvido pelo nome (camada de dados → SVG). */
export function Icon({ name, ...props }: IconProps) {
  if (name === "whatsapp") return <WhatsAppIcon strokeWidth={1.2} strokeLinecap="round" {...props} />;
  return <svg {...base(props)}>{paths[name]}</svg>;
}

/** Seta longa e fina dos links "Ver todas" (20×10). */
export function ArrowIcon(props: Props) {
  return (
    <svg viewBox="0 0 20 10" fill="none" stroke="currentColor" strokeWidth={1.2} aria-hidden {...props}>
      <path d="M0 5h18M14 1l4 4-4 4" />
    </svg>
  );
}

/** Conector entre passos do "Como funciona" (44×10). */
export function ConnectorIcon(props: Props) {
  return (
    <svg viewBox="0 0 44 10" fill="none" stroke="currentColor" strokeWidth={1} aria-hidden {...props}>
      <path d="M0 5h40M36 1l4 4-4 4" />
    </svg>
  );
}

export { WhatsAppIcon };
export type { IconName };
export const iconNames = Object.keys(paths).concat("whatsapp") as IconName[];

