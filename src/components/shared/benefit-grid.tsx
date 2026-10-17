import { Eyebrow } from "@/components/ui/eyebrow";
import { Icon } from "@/components/shared/icons";
import { REVEAL_STAGGER, Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { Feature } from "@/types/content";

type BenefitGridProps = {
  items: Feature[];
  className?: string;
};

/**
 * Faixa de vantagens do card do Clube: colunas centralizadas separadas por
 * finas linhas douradas no desktop. No mobile vira grid de duas colunas e a
 * última, quando sobra sozinha, ocupa a linha inteira em vez de ficar torta.
 */
export function BenefitGrid({ items, className }: BenefitGridProps) {
  return (
    <ul className={cn("grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-5 lg:gap-0", className)}>
      {items.map((item, index) => (
        <Reveal
          as="li"
          key={item.title}
          delay={index * REVEAL_STAGGER}
          className={cn(
            "flex flex-col items-center gap-3 px-1 text-center lg:gap-3.5 lg:px-6",
            index > 0 && "lg:border-l lg:border-gold/18",
            "max-lg:[&:last-child:nth-child(odd)]:col-span-2",
          )}
        >
          <Icon name={item.icon} className="size-[1.75rem] shrink-0 text-gold lg:size-8" />
          <Eyebrow as="span" size="compact" className="text-[0.65625rem] tracking-[0.16em] lg:text-[0.6875rem]">
            <span className="lg:hidden">{item.shortTitle ?? item.title}</span>
            <span className="max-lg:hidden">{item.title}</span>
          </Eyebrow>
          <p className="max-w-[22ch] text-[0.8125rem] leading-[1.55] text-foreground/66 lg:text-[0.875rem] lg:leading-[1.65]">
            {item.description}
          </p>
        </Reveal>
      ))}
    </ul>
  );
}
