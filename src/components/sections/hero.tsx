import { getImageProps } from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaLink } from "@/components/shared/cta-link";
import { cn } from "@/lib/utils";
import { PHOTO_QUALITY } from "@/lib/images";
import type { Cta, ImageAsset } from "@/types/content";

export type HeroContent = {
  eyebrow?: string;
  title: string;
  /** Segunda linha do título em dourado-suave (itálico no mobile, como no layout). */
  titleAccent?: string;
  text?: string;
  cta?: Cta;
  secondaryCta?: Cta;
  /** Versão paisagem (computador). */
  image: ImageAsset;
  /** Versão retrato (celular, abaixo de lg). Sem ela, usa `image` nos dois. */
  imageMobile?: ImageAsset;
};

type HeroProps = {
  content: HeroContent;
  /** Bloco renderizado abaixo da imagem, dentro da seção (ex.: FeatureRow). */
  below?: ReactNode;
  /** default = Home (760/460px) · compact = páginas internas (560/380px). */
  size?: "default" | "compact";
  id?: string;
  className?: string;
};

/**
 * Hero do layout aprovado.
 * Desktop: fotografia full-bleed (min 760px) com gradiente horizontal e
 * vertical; coluna de texto ≤ 600px à esquerda; dois CTAs lado a lado.
 * Mobile: imagem 460px com texto sobreposto na base; CTAs empilhados
 * abaixo da imagem, fora dela.
 */
export function Hero({ content, below, size = "default", id = "inicio", className }: HeroProps) {
  const { eyebrow, title, titleAccent, text, cta, secondaryCta, image, imageMobile } = content;
  const common = { alt: image.alt, sizes: "100vw", preload: true, quality: PHOTO_QUALITY, fill: true as const };
  const desktop = getImageProps({ ...common, src: image.src });
  const mobile = getImageProps({ ...common, src: (imageMobile ?? image).src });

  const heading = (
    <>
      {eyebrow ? (
        <Eyebrow className="mb-3.5 lg:mb-[1.375rem] lg:text-[0.71875rem]">{eyebrow}</Eyebrow>
      ) : null}
      <h1 className="text-display leading-[1.06] lg:leading-[1.1]">
        {title}
        {titleAccent ? (
          <>
            <br />
            <em className="italic text-gold-soft lg:not-italic">{titleAccent}</em>
          </>
        ) : null}
      </h1>
      {text ? (
        <p className="mt-4 max-w-[36ch] text-[0.9375rem] leading-[1.6] text-fg-body lg:mt-[1.625rem] lg:max-w-[46ch] lg:text-[1.03125rem] lg:leading-[1.7]">
          {text}
        </p>
      ) : null}
    </>
  );

  const actions =
    cta || secondaryCta ? (
      <div className="flex flex-col gap-[0.6875rem] lg:flex-row lg:gap-3.5">
        {cta ? <CtaLink cta={cta} size="lg" className="max-lg:h-control-md max-lg:w-full" /> : null}
        {secondaryCta ? (
          <CtaLink
            cta={secondaryCta}
            variant="secondary"
            size="lg"
            className="max-lg:h-[3.25rem] max-lg:w-full"
          />
        ) : null}
      </div>
    ) : null;

  return (
    <section id={id} className={cn("relative", className)}>
      {/* Fotografia + overlays */}
      <div
        className={cn(
          "relative flex items-end bg-surface-3 lg:items-center",
          size === "default" ? "min-h-[28.75rem] lg:min-h-[47.5rem]" : "min-h-[23.75rem] lg:min-h-[35rem]",
        )}
      >
        {/* Art direction: retrato até 1023px, paisagem a partir de 1024px */}
        <picture>
          <source media="(min-width: 64rem)" srcSet={desktop.props.srcSet ?? desktop.props.src} />
          <source media="(max-width: 63.99rem)" srcSet={mobile.props.srcSet ?? mobile.props.src} />
          {/* eslint-disable-next-line jsx-a11y/alt-text -- alt vem de common */}
          <img
            {...desktop.props}
            className="absolute inset-0 size-full object-cover max-lg:[object-position:var(--focal-mobile)] lg:[object-position:var(--focal-desktop)]"
            style={{
              "--focal-desktop": image.focal ?? "center",
              "--focal-mobile": (imageMobile ?? image).focal ?? "center",
            } as React.CSSProperties}
          />
        </picture>
        <div aria-hidden className="absolute inset-0 bg-(image:--overlay-hero-mobile) lg:hidden" />
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgb(11_8_6/0.95)_0%,rgb(11_8_6/0.86)_40%,rgb(11_8_6/0.4)_72%,rgb(11_8_6/0.5)_100%)] lg:block"
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgb(11_8_6/0.5)_0%,rgb(11_8_6/0)_24%,rgb(11_8_6/0)_66%,var(--brand-bg)_100%)] lg:block"
        />

        <div className="relative mx-auto w-full max-w-site px-[1.375rem] pb-[1.625rem] lg:px-gutter lg:py-section">
          {/* Sem Reveal aqui: o h1 é o elemento LCP e precisa pintar de imediato. */}
          <div className="lg:max-w-[37.5rem]">
            {heading}
            {actions ? <div className="hidden lg:mt-10 lg:block">{actions}</div> : null}
          </div>
        </div>
      </div>

      {/* Mobile: CTAs fora da imagem */}
      {actions ? <div className="px-[1.375rem] pt-[1.375rem] lg:hidden">{actions}</div> : null}

      {below ? <div className="mx-auto w-full max-w-site lg:px-gutter">{below}</div> : null}
    </section>
  );
}
