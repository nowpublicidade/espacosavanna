import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Caminho absoluto da rota, ex.: "/terapeutas/babi". */
  path: string;
  /** Imagem OG específica (caminho público). Padrão: imagem institucional. */
  image?: { src: string; alt: string; width?: number; height?: number };
  /** `article` para páginas individuais; `website` para o restante. */
  type?: "website" | "article";
  /** Impede indexação desta rota mesmo com o site indexável. */
  noindex?: boolean;
};

export const defaultOgImage = {
  src: "/og/default.jpg",
  alt: "Espaço Savanna — experiência premium em ambiente reservado",
  width: 1200,
  height: 630,
};

/**
 * Único construtor de metadata do site: title absoluto, description,
 * canonical, Open Graph e Twitter. A indexação segue `siteConfig.indexable`.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  type = "website",
  noindex = false,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const indexable = siteConfig.indexable && !noindex;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: indexable
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
      : { index: false, follow: false },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: "pt_BR",
      images: [{ url: image.src, alt: image.alt, width: image.width ?? 1200, height: image.height ?? 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.src],
    },
  };
}
