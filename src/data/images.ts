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
  /**
   * Logo oficial. Fonte: design/logo-original.png (2048×618, com margens
   * transparentes); para a web o lettering foi recortado e exportado em
   * 1024×255 (proporção 4,14:1 — a mesma do layout aprovado).
   */
  logo: {
    src: "/brand/logo.png",
    alt: "Espaço Savanna",
    width: 1024,
    height: 255,
  } satisfies ImageAsset,
};
