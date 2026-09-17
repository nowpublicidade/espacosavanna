import type { SVGProps } from "react";

/**
 * Balão de linha fina usado no layout aprovado (Lucide não possui WhatsApp).
 * Herda `currentColor` e o tamanho via className (ex.: size-4).
 */
export function WhatsAppIcon({ strokeWidth = 1.7, ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.2A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.6 9.2c0 3.3 2.7 6 6 6" />
    </svg>
  );
}
