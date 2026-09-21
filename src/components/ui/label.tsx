import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Rótulo de campo em caps dourado, como os eyebrows compactos. */
export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      className={cn("block text-[0.75rem] uppercase tracking-label text-gold", className)}
      {...props}
    />
  );
}
