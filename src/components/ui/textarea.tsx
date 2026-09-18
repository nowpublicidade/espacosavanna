import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-[8.5rem] w-full resize-y rounded-lg border border-line-strong bg-surface-2 px-4 py-3.5 font-sans text-body text-foreground",
        "placeholder:text-fg-faint",
        "outline-none transition-colors focus-visible:border-gold/70",
        "aria-invalid:border-destructive/70",
        className,
      )}
      {...props}
    />
  );
}
