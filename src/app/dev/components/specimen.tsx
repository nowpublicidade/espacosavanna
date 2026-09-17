import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Moldura de exibição da rota /dev/components.
 * Não é um componente do site — apenas rotula e separa os especímenes.
 */
export function Specimen({
  id,
  index,
  title,
  note,
  children,
}: {
  id: string;
  index: string;
  title: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-line-subtle py-section-tight"
    >
      <div className="mb-stack-lg flex flex-col gap-2">
        <div className="flex items-baseline gap-4">
          <span className="font-heading text-h3 text-gold">{index}</span>
          <h2 className="text-h2">{title}</h2>
        </div>
        {note ? <p className="max-w-[64ch] text-small text-fg-muted">{note}</p> : null}
      </div>
      {children}
    </section>
  );
}

/** Sub-bloco com legenda. */
export function Case({
  label,
  children,
  className,
  bleed = false,
}: {
  label: string;
  children: ReactNode;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <div className={cn("mb-stack-lg flex flex-col gap-3 last:mb-0", className)}>
      <span className="text-caption text-fg-faint">{label}</span>
      <div className={cn(!bleed && "flex flex-wrap items-center gap-4")}>{children}</div>
    </div>
  );
}
