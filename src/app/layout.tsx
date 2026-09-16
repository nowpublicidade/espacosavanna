import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { siteConfig } from "@/data/site";
import { pages } from "@/content/pages";
import "./globals.css";

/** Títulos, frases institucionais. Pesos e itálico usados no layout aprovado. */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
  },
  robots: { index: false, follow: false }, // TODO: liberar indexação na publicação
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
