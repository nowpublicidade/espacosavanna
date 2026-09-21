import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // 82 para fotografias (qualidade premium); 75 para o restante.
    qualities: [75, 82],
  },
};

export default nextConfig;
