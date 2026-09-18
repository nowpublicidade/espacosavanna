import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Campo de texto do sistema: superfície discreta, contorno dourado 20%,
 * foco em dourado — mesma altura dos controles (54px).
 */
export function Input({ className, type = "text", ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-control-md w-full rounded-lg border border-line-strong bg-surface-2 px-4 font-sans text-body text-foreground",
        "placeholder:text-fg-faint",
        "outline-none transition-colors focus-visible:border-gold/70",
        "aria-invalid:border-destructive/70",
        className,
      )}
      {...props}
    />
  );
}
