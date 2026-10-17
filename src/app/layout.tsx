import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/data/site";
import { pages } from "@/content/pages";
import { defaultOgImage } from "@/lib/seo";
import "./globals.css";

/**
 * As fontes são auto-hospedadas (src/fonts) em vez de next/font/google: o
 * build do Google baixa os arquivos da rede a cada compilação, e a falha
 * dessa chamada derrubava o deploy no Coolify. Os .woff2 são os mesmos
 * arquivos que o Google serve no subset latin — o desenho não muda.
 *
 * Títulos e frases institucionais. Apenas os pesos usados no layout
 * aprovado: 400 e itálico 400 (acento do hero mobile).
 */
const cormorant = localFont({
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: "Times New Roman",
  src: [
    {
      path: "../fonts/cormorant-garamond-latin-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/cormorant-garamond-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

/** Interface: menus, botões, textos corridos, formulários. Arquivo variável
 *  único, que cobre os pesos 300 a 600 usados no site. */
const jost = localFont({
  variable: "--font-jost",
  display: "swap",
  adjustFontFallback: "Arial",
  src: [
    {
      path: "../fonts/jost-latin-var.woff2",
      weight: "300 600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pages.home.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: pages.home.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    images: [{ url: defaultOgImage.src, alt: defaultOgImage.alt, width: defaultOgImage.width, height: defaultOgImage.height }],
  },
  twitter: { card: "summary_large_image" },
  // Indexação controlada por NEXT_PUBLIC_INDEXABLE (ver data/site.ts).
  robots: siteConfig.indexable ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.locale}
      className={`${cormorant.variable} ${jost.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
