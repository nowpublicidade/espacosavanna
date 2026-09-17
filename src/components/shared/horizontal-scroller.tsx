import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HorizontalScrollerProps = {
  children: ReactNode;
  /** Colunas a partir de lg. */
  columns?: 2 | 3 | 4;
  /** Largura de cada item no carrossel mobile (layout: 245px). */
  itemWidth?: number;
  /** Sangra até as bordas no mobile usando o gutter da página. */
  bleed?: boolean;
  className?: string;
};

const columnClass = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
} as const;

/**
 * Mobile: carrossel com scroll-snap e barra oculta (gap 12).
 * Desktop: grid de N colunas (gap 20). Sem JavaScript.
 */
export function HorizontalScroller({
  children,
  columns = 3,
  itemWidth = 245,
  bleed = true,
  className,
}: HorizontalScrollerProps) {
  return (
    <div
      className={cn(
        "flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1.5 scrollbar-none",
        "[&>*]:w-[var(--scroller-item)] [&>*]:shrink-0 [&>*]:snap-start",
        bleed && "-mx-gutter px-gutter",
        "lg:mx-0 lg:grid lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0 lg:[&>*]:w-auto",
        columnClass[columns],
        className,
      )}
      style={{ "--scroller-item": `${itemWidth}px` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
