import type { NextConfig } from "next";
import path from "node:path";

/**
 * STATIC_EXPORT=true gera o site estático (out/) para o GitHub Pages:
 * sem otimizador de imagens (loader próprio com basePath), URLs com barra
 * final e basePath do repositório. Sem a variável, build normal (Vercel etc.).
 */
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  images: isStaticExport
    ? {
        loader: "custom",
        loaderFile: "./src/lib/image-loader.ts",
      }
    : {
        formats: ["image/avif", "image/webp"],
        // 82 para fotografias (qualidade premium); 75 para o restante.
        qualities: [75, 82],
      },
  ...(isStaticExport
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath || undefined,
        trailingSlash: true,
      }
    : {
        // Servidor Node enxuto para Docker/Coolify (.next/standalone).
        output: "standalone",
      }),
};

export default nextConfig;
