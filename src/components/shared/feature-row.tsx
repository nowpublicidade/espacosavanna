import { Eyebrow } from "@/components/ui/eyebrow";
import { Icon } from "@/components/shared/icons";
import { cn } from "@/lib/utils";
import type { Feature } from "@/types/content";

type FeatureRowProps = {
  features: Feature[];
  className?: string;
};

/**
 * Faixa de diferenciais do layout aprovado (dentro da seção do Hero).
 * Desktop: 3 colunas, ícone à esquerda, colunas separadas por linhas
 * verticais douradas. Mobile: 3 colunas centralizadas com rótulo curto.
 * Não é um bloco de cards — sem fundo, sem borda externa.
 */
export function FeatureRow({ features, className }: FeatureRowProps) {
  return (
    <ul
      className={cn(
        "grid grid-cols-3 gap-1.5 px-4 pt-[1.625rem] pb-[1.875rem] lg:gap-0 lg:px-0 lg:pt-[2.375rem] lg:pb-11",
        className,
      )}
    >
      {features.map((feature, index) => (
        <li
          key={feature.title}
          className={cn(
            "flex flex-col items-center gap-[0.5625rem] px-1 text-center",
            "lg:flex-row lg:items-start lg:gap-[1.125rem] lg:text-left",
            index === 0 && "lg:pr-11",
            index === 1 && "border-x border-gold/16 lg:border-gold/18 lg:px-11",
            index === 2 && "lg:pl-11",
          )}
        >
          <Icon name={feature.icon} className="size-[1.375rem] shrink-0 text-gold lg:mt-0.5 lg:size-[1.875rem]" />
          <div className="flex flex-col">
            <Eyebrow
              as="span"
              size="compact"
              className="text-[0.5625rem] tracking-[0.18em] lg:text-[0.6875rem] lg:tracking-label"
            >
              <span className="lg:hidden">{feature.shortTitle ?? feature.title}</span>
              <span className="max-lg:hidden">{feature.title}</span>
            </Eyebrow>
            <p className="mt-2 text-[0.6875rem] leading-[1.5] text-foreground/50 lg:mt-[0.5625rem] lg:text-[0.84375rem] lg:leading-[1.65] lg:text-foreground/58">
              <span className="lg:hidden">{feature.shortDescription ?? feature.description}</span>
              <span className="max-lg:hidden">{feature.description}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
