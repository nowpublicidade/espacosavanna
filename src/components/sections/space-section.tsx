import { CtaLink } from "@/components/shared/cta-link";
import { ImageMosaic } from "@/components/shared/image-mosaic";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { ImageAsset, SectionCopy } from "@/types/content";

type SpaceSectionProps = {
  copy: SectionCopy;
  images: readonly [ImageAsset, ImageAsset, ImageAsset];
  surface?: "base" | "alt";
  id?: string;
};

/**
 * "O Espaço" (layout aprovado). Superfície alternada.
 * Desktop: texto (.85fr) + mosaico (1.35fr), gap 70, CTA sob o texto.
 * Mobile: texto, mosaico e CTA de 50px em largura total.
 */
export function SpaceSection({ copy, images, surface = "alt", id = "espaco" }: SpaceSectionProps) {
  return (
    <Section id={id} surface={surface}>
      <div className="grid gap-3.5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:items-center lg:gap-[4.375rem]">
        <div>
          <SectionHeading copy={copy} />
          {copy.cta ? (
            <div className="mt-[2.125rem] max-lg:hidden">
              <CtaLink cta={copy.cta} variant="secondary" size="md" className="px-8" />
            </div>
          ) : null}
        </div>

        <ImageMosaic images={images} className="mt-2 lg:mt-0" />

        {copy.cta ? (
          <div className="mt-2 lg:hidden">
            <CtaLink cta={copy.cta} variant="secondary" size="md" fullWidth className="h-[3.125rem]" />
          </div>
        ) : null}
      </div>
    </Section>
  );
}
