import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge precisa conhecer os tokens do projeto para não confundir
 * `text-h2` (tamanho) com `text-gold` (cor) ou `rounded-inner` com `rounded-lg`.
 * Mantenha esta lista alinhada ao @theme em src/app/globals.css.
 */
const fontSizes = [
  "display",
  "h2",
  "h3",
  "lead",
  "body",
  "small",
  "caption",
  "eyebrow",
  "button",
  "nav",
];

const colors = [
  "background",
  "foreground",
  "surface-1",
  "surface-2",
  "surface-3",
  "gold",
  "gold-soft",
  "gold-hover",
  "on-gold",
  "fg-nav",
  "fg-body",
  "fg-muted",
  "fg-faint",
  "line-subtle",
  "line",
  "line-strong",
  "line-accent",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "border",
  "input",
  "ring",
];

const spacing = [
  "gutter",
  "section",
  "section-tight",
  "stack-sm",
  "stack",
  "stack-lg",
  "control-lg",
  "control-md",
  "control",
  "control-sm",
  "control-xs",
  "header",
  "header-mobile",
  "logo",
  "logo-mobile",
];

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: colors,
      spacing,
      radius: ["sm", "inner", "md", "lg", "xl", "2xl"],
      tracking: ["eyebrow", "label", "button", "nav"],
    },
    classGroups: {
      "font-size": [{ text: fontSizes }],
      "max-w": [{ "max-w": ["site", "narrow"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
