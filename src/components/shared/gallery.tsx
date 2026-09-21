import Image from "next/image";
import { REVEAL_STAGGER, Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { PHOTO_QUALITY } from "@/lib/images";
import type { ImageAsset } from "@/types/content";

type GalleryProps = {
  images: ImageAsset[];
  /**
   * editorial = grade de 3 colunas com a primeira imagem em destaque
   * (2 colunas × 2 linhas); mobile em 2 colunas.
   * uniform = todas as imagens no mesmo tamanho.
   */
  layout?: "editorial" | "uniform";
  /** portrait = células 4:5 (fotos de terapeutas), 2 colunas no mobile / 4 no desktop. */
  aspect?: "landscape" | "portrait";
  className?: string;
};

/**
 * Galeria de fotografias — imagens grandes, sem texto, raio e gap do sistema
 * (12px desktop / 8px mobile, como o mosaico do layout aprovado).
 */
export function Gallery({ images, layout = "editorial", aspect = "landscape", className }: GalleryProps) {
  const portrait = aspect === "portrait";
  return (
    <ul
      className={cn(
        "grid grid-flow-dense grid-cols-2 gap-2 lg:gap-3",
        portrait ? "lg:grid-cols-4 [&>li]:aspect-[4/5]" : "lg:grid-cols-3 [grid-auto-rows:9.5rem] lg:[grid-auto-rows:16rem]",
        className,
      )}
    >
      {images.map((image, index) => {
        const featured = !portrait && layout === "editorial" && index % 5 === 0;
        return (
          <Reveal
            as="li"
            key={image.src + image.alt + index}
            delay={(index % 3) * REVEAL_STAGGER}
            className={cn(
              "relative overflow-hidden rounded-lg bg-surface-3",
              featured && "col-span-2 row-span-2",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
              quality={PHOTO_QUALITY}
              className="object-cover"
              style={{ objectPosition: image.focal }}
            />
          </Reveal>
        );
      })}
    </ul>
  );
}
