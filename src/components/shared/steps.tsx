import { Fragment } from "react";
import { ConnectorIcon, Icon } from "@/components/shared/icons";
import { REVEAL_STAGGER, Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { Step } from "@/types/content";

type StepsProps = {
  steps: Step[];
  className?: string;
};

/**
 * Passos do "Como funciona" (layout aprovado).
 * Desktop: colunas centralizadas — ícone 34px, número em Cormorant 19px,
 * texto 14px — ligadas por conectores de seta (44×10).
 * Mobile: grid 2×2 de blocos com contorno dourado 18%, alinhados à esquerda.
 */
export function Steps({ steps, className }: StepsProps) {
  return (
    <ol
      className={cn(
        "grid grid-cols-2 gap-2.5",
        "lg:grid-cols-[1fr_44px_1fr_44px_1fr_44px_1fr] lg:items-start lg:gap-0",
        className,
      )}
    >
      {steps.map((step, index) => (
        <Fragment key={step.title}>
          <Reveal
            as="li"
            delay={index * REVEAL_STAGGER}
            className={cn(
              "flex flex-col gap-[0.6875rem] rounded-lg border border-gold/18 px-3.5 py-[1.125rem]",
              "lg:items-center lg:gap-4 lg:border-0 lg:px-4 lg:py-0 lg:text-center",
            )}
          >
            {step.icon ? (
              <Icon name={step.icon} className="size-[1.375rem] text-gold lg:size-[2.125rem]" />
            ) : null}
            <span className="font-heading text-[1.0625rem] leading-none text-gold lg:text-[1.1875rem]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[0.78125rem] leading-[1.5] text-fg-body lg:max-w-[16ch] lg:text-[0.875rem] lg:leading-[1.55]">
              {step.title}
            </span>
          </Reveal>
          {index < steps.length - 1 ? (
            <ConnectorIcon
              className="mt-3.5 hidden h-2.5 w-11 self-start text-gold/55 lg:block"
            />
          ) : null}
        </Fragment>
      ))}
    </ol>
  );
}
