import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types/content";

type GalleryProps = {
  images: ImageAsset[];
  /**
   * editorial = grade de 3 colunas com a primeira imagem em destaque
   * (2 colunas × 2 linhas); mobile em 2 colunas.
   * uniform = todas as imagens no mesmo tamanho.
   */
  layout?: "editorial" | "uniform";
  className?: string;
};

/**
 * Galeria de fotografias — imagens grandes, sem texto, raio e gap do sistema
 * (12px desktop / 8px mobile, como o mosaico do layout aprovado).
 */
export function Gallery({ images, layout = "editorial", className }: GalleryProps) {
  return (
    <ul
      className={cn(
        "grid grid-flow-dense grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-3",
        "[grid-auto-rows:9.5rem] lg:[grid-auto-rows:16rem]",
        className,
      )}
    >
      {images.map((image, index) => {
        const featured = layout === "editorial" && index % 5 === 0;
        return (
          <li
            key={image.src + image.alt + index}
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
              className="object-cover"
              style={{ objectPosition: image.focal }}
            />
          </li>
        );
      })}
    </ul>
  );
}
