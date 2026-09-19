import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { siteConfig } from "@/data/site";
import { pages } from "@/content/pages";
import { defaultOgImage } from "@/lib/seo";
import "./globals.css";

/**
 * Títulos e frases institucionais. Apenas os pesos usados no layout aprovado:
 * 400 e itálico 400 (acento do hero mobile). Cada peso é um arquivo — e a
 * troca da fonte é o que define o LCP do h1.
 */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

/** Interface: menus, botões, textos corridos, formulários. */
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
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
  icons: { icon: "/favicon.svg" },
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
