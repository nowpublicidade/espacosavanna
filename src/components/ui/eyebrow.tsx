import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Rótulo em caixa alta com tracking largo, sempre dourado.
 * `default` = eyebrow de seção (.28em) · `compact` = rótulo de item (.2em)
 * `label` = coluna de footer (.24em).
 */
const eyebrowVariants = cva("block uppercase leading-none", {
  variants: {
    size: {
      default: "text-eyebrow tracking-eyebrow",
      compact: "text-[0.6875rem] tracking-label",
      label: "text-eyebrow tracking-[0.24em]",
    },
    tone: {
      gold: "text-gold",
      soft: "text-gold-soft",
    },
  },
  defaultVariants: { size: "default", tone: "gold" },
});

type EyebrowProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof eyebrowVariants> & {
    as?: "p" | "span" | "div";
  };

export function Eyebrow({ as: Tag = "p", size, tone, className, ...props }: EyebrowProps) {
  return <Tag className={cn(eyebrowVariants({ size, tone }), className)} {...props} />;
}
