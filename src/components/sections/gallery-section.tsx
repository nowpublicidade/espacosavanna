import { CtaLink } from "@/components/shared/cta-link";
import { Gallery } from "@/components/shared/gallery";
import { ArrowIcon } from "@/components/shared/icons";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { ImageAsset, SectionCopy } from "@/types/content";

type GallerySectionProps = {
  copy?: SectionCopy;
  images: ImageAsset[];
  layout?: "editorial" | "uniform";
  surface?: "base" | "alt";
  id?: string;
};

/** Galeria com cabeçalho opcional e link "Ver galeria completa →". */
export function GallerySection({ copy, images, layout, surface = "base", id = "galeria" }: GallerySectionProps) {
  const link = copy?.cta ? (
    <CtaLink cta={copy.cta} variant="ghost" icon={<ArrowIcon />} iconPosition="right" />
  ) : null;

  return (
    <Section id={id} surface={surface}>
      {copy ? (
        <SectionHeading
          copy={copy}
          titleMaxCh={20}
          aside={link ? <div className="max-lg:hidden">{link}</div> : undefined}
          className="mb-5 lg:mb-10"
        />
      ) : null}
      <Gallery images={images} layout={layout} />
      {link ? <div className="mt-5 lg:hidden">{link}</div> : null}
    </Section>
  );
}
