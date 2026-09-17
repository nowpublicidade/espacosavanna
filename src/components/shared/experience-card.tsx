import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, Icon } from "@/components/shared/icons";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types/content";

type ExperienceCardProps = {
  experience: Experience;
  href?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Card de experiência do layout aprovado — a fotografia é o card.
 * Sem borda, sem fundo, sem botão: o link é a imagem inteira com overlay
 * e texto sobreposto (ícone · nome em caps · frase curta).
 * Desktop: 330px, overlay vertical. Mobile: 150px, overlay horizontal + seta.
 */
export function ExperienceCard({
  experience,
  href = `/experiencias/${experience.slug}`,
  sizes = "(min-width: 1024px) 30vw, 100vw",
  priority,
  className,
}: ExperienceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block h-[9.375rem] overflow-hidden rounded-lg bg-surface-3 text-foreground lg:h-[20.625rem]",
        "outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <Image
        src={experience.image.src}
        alt={experience.image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-(--duration-slow) ease-(--ease-out) group-hover:scale-[1.02]"
        style={{ objectPosition: experience.image.focal }}
      />

      {/* Overlays do layout: horizontal + inferior no mobile; vertical no desktop */}
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgb(11_8_6/0.96)_0_58%,rgb(11_8_6/0.62)_100%)] lg:hidden"
      />
      <span aria-hidden className="absolute inset-0 bg-(--overlay-card) lg:hidden" />
      <span aria-hidden className="absolute inset-0 hidden bg-(--overlay-hero) lg:block" />

      <span className="absolute bottom-[1.125rem] left-[1.125rem] right-[4.375rem] flex flex-col gap-[0.4375rem] lg:inset-x-[1.625rem] lg:bottom-[1.625rem] lg:gap-[0.6875rem]">
        <Icon name={experience.icon} className="size-[1.375rem] text-gold lg:size-[1.625rem]" />
        <span className="text-[0.75rem] uppercase leading-none tracking-label text-gold-soft lg:text-[0.8125rem]">
          {experience.name}
        </span>
        <span className="text-[0.75rem] leading-[1.5] text-foreground/90 lg:text-[0.84375rem] lg:leading-[1.6] lg:text-foreground/85">
          {experience.tagline}
        </span>
      </span>

      <ArrowIcon className="absolute right-[1.125rem] bottom-[1.375rem] h-2.5 w-5 text-gold-soft lg:hidden" />
    </Link>
  );
}
