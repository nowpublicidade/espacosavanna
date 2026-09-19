"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Atraso em segundos — para escalonar itens irmãos (0,08s entre cards). */
  delay?: number;
  /** Deslocamento vertical inicial em px. Padrão 12 — quase imperceptível. */
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
  className?: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Entrada sutil no viewport: fade + deslocamento mínimo, uma única vez.
 * Uso deliberado — apenas onde melhora a leitura (ART_DIRECTION, item 7).
 * Com prefers-reduced-motion renderiza estático. Carrega só o subconjunto
 * `domAnimation` do Framer Motion.
 */
export function Reveal({ children, delay = 0, y = 12, as = "div", className }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  const Component = m[as];

  return (
    <LazyMotion features={domAnimation} strict>
      <Component
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.8, delay, ease: EASE }}
      >
        {children}
      </Component>
    </LazyMotion>
  );
}

/** Intervalo padrão entre itens irmãos. */
export const REVEAL_STAGGER = 0.08;
