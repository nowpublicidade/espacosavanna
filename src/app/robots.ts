import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

/**
 * Enquanto NEXT_PUBLIC_INDEXABLE não for "true", bloqueia tudo.
 * Na publicação oficial, libera o site e mantém /dev fora.
 */
export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/dev/"] },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
    host: siteConfig.url,
  };
}
