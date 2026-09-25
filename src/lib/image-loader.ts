import type { ImageLoaderProps } from "next/image";

/**
 * Loader usado apenas no export estático (GitHub Pages): não há otimizador,
 * então devolve o arquivo original com o basePath do repositório.
 */
export default function imageLoader({ src }: ImageLoaderProps) {
  if (src.startsWith("http")) return src;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  return `${basePath}${src}`;
}
