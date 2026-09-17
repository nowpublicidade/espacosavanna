"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Accordion do layout aprovado: itens separados por linha dourada (16%),
 * pergunta em peso 400, chevron de linha fina que gira ao abrir
 * (fechado aponta para a direita, aberto para baixo).
 */
function Accordion({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-line py-4 md:py-[1.375rem]", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/trigger flex flex-1 items-center justify-between gap-3.5 text-left md:gap-5",
          "font-sans text-[0.84375rem] font-normal leading-snug text-foreground md:text-[1.0625rem]",
          "outline-none transition-colors hover:text-gold-soft focus-visible:text-gold-soft",
          className,
        )}
        {...props}
      >
        {children}
        <span
          aria-hidden
          className={cn(
            "mt-px size-[9px] shrink-0 border-r-[1.4px] border-b-[1.4px] border-gold md:size-2.5",
            "-rotate-45 transition-transform duration-(--duration-fast) ease-(--ease-out)",
            "group-data-open/trigger:rotate-45",
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "pt-3 text-[0.78125rem] leading-[1.7] font-light text-fg-muted md:max-w-[58ch] md:pt-4 md:text-[0.90625rem] md:leading-[1.8]",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
