import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Ritmo editorial do site: padding vertical, container e superfície.
 *
 * surface base = #0B0806 · alt = #100C09 com linha dourada superior
 * (e inferior opcional), como no layout aprovado.
 */
const sectionVariants = cva("relative", {
  variants: {
    surface: {
      base: "bg-background",
      alt: "bg-surface-1 border-t border-line-subtle",
    },
    bordered: {
      true: "border-b border-line-subtle",
    },
    spacing: {
      default: "py-section",
      tight: "py-section-tight",
      none: "",
    },
  },
  defaultVariants: { surface: "base", spacing: "default" },
});

const containerVariants = cva("mx-auto w-full", {
  variants: {
    container: {
      site: "max-w-site px-gutter",
      narrow: "max-w-narrow px-gutter",
      /** Sem padding lateral — para carrosséis que sangram até a borda. */
      fluid: "max-w-site",
    },
  },
  defaultVariants: { container: "site" },
});

type SectionProps = Omit<ComponentProps<"section">, "className" | "ref"> &
  VariantProps<typeof sectionVariants> &
  VariantProps<typeof containerVariants> & {
    as?: "section" | "div" | "footer" | "header";
    className?: string;
    /** Classes aplicadas ao container interno. */
    innerClassName?: string;
  };

export function Section({
  as: Tag = "section",
  surface,
  bordered,
  spacing,
  container,
  className,
  innerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn(sectionVariants({ surface, bordered, spacing }), className)} {...props}>
      <div className={cn(containerVariants({ container }), innerClassName)}>{children}</div>
    </Tag>
  );
}
