import type { SVGProps } from "react";

/**
 * Câmera de linha fina, no mesmo traço do WhatsAppIcon (o Lucide tem um
 * Instagram, mas com peso diferente do conjunto aprovado).
 * Herda `currentColor` e o tamanho via className (ex.: size-4).
 */
export function InstagramIcon({ strokeWidth = 1.7, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M16.9 7.1h.01" />
    </svg>
  );
}
