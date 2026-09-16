import type { ImageAsset } from "@/types/content";

type PlaceholderKind = "hero" | "space" | "therapist" | "experience" | "gallery";

const BASE_WIDTH = 1600;

/**
 * Gera um ImageAsset apontando para os SVGs em /public/images/placeholders.
 * Quando as fotos finais chegarem, basta trocar `src` nos arquivos de dados.
 */
export function placeholderImage(
  kind: PlaceholderKind,
  alt: string,
  ratio = 16 / 9,
  focal?: string,
): ImageAsset {
  return {
    src: `/images/placeholders/${kind}.svg`,
    alt,
    width: BASE_WIDTH,
    height: Math.round(BASE_WIDTH / ratio),
    focal,
    placeholder: true,
  };
}

export const brand = {
  /** Placeholder com a proporção 4:1 da logo do layout aprovado (900×225). */
  logo: {
    src: "/brand/logo-placeholder.svg",
    alt: "Espaço Savanna",
    width: 900,
    height: 225,
    placeholder: true,
  } satisfies ImageAsset,
};
