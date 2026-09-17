import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { Slot } from "radix-ui";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Toda superfície clicável do site.
 *
 * Variantes (layout aprovado):
 * - primary      gradiente dourado, texto escuro, peso 600 — CTA principal
 * - secondary    contorno dourado 45%, texto dourado-suave — CTA secundário
 * - outline-soft contorno 40%, raio interno 10px — CTA dentro de cards
 * - ghost        link com seta, tracking .12em — "Ver todas"
 *
 * Tamanhos: lg 58 · md 54 · sm 48 · xs 46 (42 no mobile).
 */
const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap",
    "font-sans uppercase leading-none tracking-button select-none",
    "transition-[color,background-color,border-color,filter,opacity] duration-(--duration-fast) ease-(--ease-out)",
    "outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary:
          "surface-gold rounded-lg font-semibold text-on-gold hover:brightness-[1.04] active:brightness-[0.98]",
        secondary:
          "rounded-lg border border-line-accent font-medium text-gold-soft hover:border-gold/70 hover:text-gold-hover",
        "outline-soft":
          "rounded-inner border border-gold/40 font-normal text-gold-soft hover:border-gold/70 hover:text-gold-hover",
        ghost:
          "h-auto! gap-2.5 px-0! font-normal text-gold-soft hover:text-gold-hover max-md:text-[0.71875rem] max-md:tracking-[0.14em] md:normal-case md:tracking-[0.12em]",
      },
      size: {
        lg: "h-control-lg px-[2.125rem] text-button [&_svg]:size-4",
        md: "h-control-md px-8 text-button [&_svg]:size-4",
        sm: "h-control px-[1.625rem] text-button [&_svg]:size-4",
        xs: "h-control-xs px-5 text-[0.65625rem] md:h-control-sm md:text-[0.6875rem] [&_svg]:size-3.5",
      },
      fullWidth: {
        true: "flex w-full",
      },
    },
    compoundVariants: [
      { variant: "ghost", size: ["lg", "md", "sm", "xs"], class: "text-small [&_svg]:size-4" },
    ],
    defaultVariants: { variant: "primary", size: "lg" },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children?: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
    asChild?: boolean;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentProps<"a">, "className" | "children" | "href"> & {
    href: string;
    /** Abre em nova aba (WhatsApp, Instagram). */
    external?: boolean;
    asChild?: undefined;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant,
  size,
  fullWidth,
  icon,
  iconPosition = "left",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, fullWidth }), className);
  const content = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      {children}
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  if (rest.href !== undefined) {
    const { href, external, asChild: _unused, ...anchorProps } = rest;
    void _unused;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...anchorProps}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const { asChild, href: _href, type = "button", ...buttonProps } = rest;
  void _href;
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp className={classes} type={asChild ? undefined : type} {...buttonProps}>
      {content}
    </Comp>
  );
}

export { buttonVariants };
