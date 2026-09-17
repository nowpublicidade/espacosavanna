import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaLink } from "@/components/shared/cta-link";
import { cn } from "@/lib/utils";
import type { SectionCopy } from "@/types/content";

type SectionHeadingProps = {
  copy: SectionCopy;
  as?: "h1" | "h2";
  /** h2 = seções (30→46px) · display = hero (40→76px). */
  size?: "h2" | "display";
  align?: "start" | "center";
  /** Conteúdo à direita do título no desktop (ex.: "Ver todas →"). */
  aside?: ReactNode;
  /** Largura máxima do título em caracteres (layout usa 16–20ch). */
  titleMaxCh?: number;
  textMaxCh?: number;
  /** Renderiza copy.cta abaixo do texto como botão secundário. */
  showCta?: boolean;
  className?: string;
};

/**
 * Eyebrow + título (com trecho em dourado-suave opcional) + texto + CTA.
 * Espaçamentos do layout aprovado: eyebrow→título 12/18px, título→texto 14/20px.
 */
export function SectionHeading({
  copy,
  as: Heading = "h2",
  size = "h2",
  align = "start",
  aside,
  titleMaxCh,
  textMaxCh = 44,
  showCta = false,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        aside && "md:flex-row md:items-end md:justify-between md:gap-10",
        centered && "items-center text-center",
        className,
      )}
    >
      <div className={cn("flex flex-col", centered && "items-center")}>
        {copy.eyebrow ? (
          <Eyebrow className="mb-3 md:mb-[1.125rem]">{copy.eyebrow}</Eyebrow>
        ) : null}
        <Heading
          className={cn(size === "display" ? "text-display" : "text-h2")}
          style={titleMaxCh ? { maxWidth: `${titleMaxCh}ch` } : undefined}
        >
          {copy.shortTitle ? (
            <>
              <span className="lg:hidden">{copy.shortTitle}</span>
              <span className="max-lg:hidden">{copy.title}</span>
            </>
          ) : (
            copy.title
          )}
          {copy.titleAccent ? (
            <>
              <br />
              <span className="text-gold-soft">{copy.titleAccent}</span>
            </>
          ) : null}
        </Heading>
        {copy.text ? (
          <p
            className="mt-3.5 text-body text-fg-muted md:mt-5"
            style={{ maxWidth: `${textMaxCh}ch` }}
          >
            {copy.text}
          </p>
        ) : null}
        {showCta && copy.cta ? (
          <div className="mt-[1.375rem] md:mt-[2.125rem]">
            <CtaLink cta={copy.cta} variant="secondary" size="md" />
          </div>
        ) : null}
      </div>
      {aside ? <div className="shrink-0 md:pb-1">{aside}</div> : null}
    </div>
  );
}
