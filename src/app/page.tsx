import Image from "next/image";
import { brand } from "@/data/images";
import { siteConfig } from "@/data/site";

/**
 * Página provisória. A Home real será construída na Fase 03,
 * após a validação dos componentes.
 */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-stack px-gutter py-section text-center">
      <Image
        src={brand.logo.src}
        alt={brand.logo.alt}
        width={brand.logo.width}
        height={brand.logo.height}
        priority
        className="h-logo w-auto"
      />
      <p className="text-eyebrow uppercase text-gold">{siteConfig.shortDescription}</p>
    </main>
  );
}
