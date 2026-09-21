import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Cta, Therapist } from "@/types/content";

type TherapistCardProps = {
  therapist: Therapist;
  /** Rótulo do CTA; o destino é a página individual da terapeuta. */
  cta: Cta;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Card de terapeuta do layout aprovado: foto 3:4 protagonista, nome em caps
 * dourado-suave, até três destaques precedidos por "·" e CTA outline interno.
 * Desktop: padding 24/22/26 · Mobile (carrossel, 245px): foto 290px, padding 16/15/17.
 */
export function TherapistCard({
  therapist,
  cta,
  sizes = "(min-width: 1024px) 30vw, 245px",
  priority,
  className,
}: TherapistCardProps) {
  const href = cta.href ?? `/terapeutas/${therapist.slug}`;

  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-line-strong bg-surface-2",
        "transition-colors duration-(--duration) ease-(--ease-out) hover:border-gold/35",
        className,
      )}
    >
      <div className="relative h-[18.125rem] bg-surface-3 lg:aspect-[3/4] lg:h-auto">
        <Image
          src={therapist.image.src}
          alt={therapist.image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: therapist.image.focal }}
        />
      </div>

      <div className="flex flex-1 flex-col px-[0.9375rem] pt-4 pb-[1.0625rem] lg:px-[1.375rem] lg:pt-6 lg:pb-[1.625rem]">
        <h3 className="font-sans text-[0.8125rem] font-normal uppercase leading-none tracking-label text-gold-soft">
          {therapist.name}
        </h3>
        <ul className="mt-[0.6875rem] mb-4 flex flex-col gap-1.5 lg:mt-3.5 lg:mb-[1.375rem] lg:gap-2">
          {therapist.highlights.slice(0, 3).map((item) => (
            <li key={item} className="text-[0.875rem] leading-snug text-foreground/70">
              · {item}
            </li>
          ))}
        </ul>
        <Button href={href} variant="outline-soft" size="xs" fullWidth className="mt-auto">
          {cta.label}
        </Button>
      </div>
    </article>
  );
}
