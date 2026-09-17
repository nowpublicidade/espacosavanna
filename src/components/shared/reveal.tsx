"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Atraso em segundos (para escalonar itens irmãos). */
  delay?: number;
  /** Deslocamento vertical inicial em px. Padrão 12 — quase imperceptível. */
  y?: number;
  as?: "div" | "section" | "li" | "article";
  className?: string;
};

/**
 * Entrada sutil no viewport: fade + deslocamento mínimo, uma única vez.
 * Uso deliberado — apenas onde melhora a leitura (ver ART_DIRECTION, item 7).
 * Com prefers-reduced-motion, renderiza sem animação.
 */
export function Reveal({ children, delay = 0, y = 12, as = "div", className }: RevealProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  if (reduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
