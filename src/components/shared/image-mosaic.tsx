import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { PHOTO_QUALITY } from "@/lib/images";
import type { ImageAsset } from "@/types/content";

type ImageMosaicProps = {
  /** Primeira imagem ocupa a coluna maior (duas linhas); as outras duas empilham. */
  images: readonly [ImageAsset, ImageAsset, ImageAsset];
  sizes?: string;
  className?: string;
};

/**
 * Mosaico editorial da seção "O Espaço" (layout aprovado).
 * Desktop: colunas 1.5fr / 1fr, linhas de 196px, gap 12.
 * Mobile: colunas 1.6fr / 1fr, altura 190px, gap 8.
 */
export function ImageMosaic({
  images,
  sizes = "(min-width: 1024px) 40vw, 60vw",
  className,
}: ImageMosaicProps) {
  const [main, ...rest] = images;

  return (
    <Reveal
      className={cn(
        "grid grid-cols-[1.6fr_1fr] grid-rows-[repeat(2,5.625rem)] gap-2",
        "lg:grid-cols-[1.5fr_1fr] lg:grid-rows-[repeat(2,12.25rem)] lg:gap-3",
        className,
      )}
    >
      <MosaicImage image={main} sizes={sizes} className="row-span-2" />
      {rest.map((image) => (
        <MosaicImage key={image.src + image.alt} image={image} sizes={sizes} />
      ))}
    </Reveal>
  );
}

function MosaicImage({
  image,
  sizes,
  className,
  priority,
}: {
  image: ImageAsset;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-surface-3", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        quality={PHOTO_QUALITY}
        preload={priority}
        className="object-cover"
        style={{ objectPosition: image.focal }}
      />
    </div>
  );
}
