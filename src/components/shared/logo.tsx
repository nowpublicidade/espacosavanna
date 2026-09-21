import Image from "next/image";
import Link from "next/link";
import { brand } from "@/data/images";
import { cn } from "@/lib/utils";

const sizes = {
  header: "h-logo",
  "header-mobile": "h-logo-mobile",
  footer: "h-[2.875rem]",
  "footer-mobile": "h-[3.875rem]",
} as const;

type LogoProps = {
  /** header 34 · header-mobile 38 · footer 46 · footer-mobile 62 (layout aprovado). */
  size?: keyof typeof sizes;
  /** Envolve em link para a home (padrão). */
  asLink?: boolean;
  priority?: boolean;
  className?: string;
};

/** Marca com proporção original preservada; a altura define a largura. */
export function Logo({ size = "header", asLink = true, priority, className }: LogoProps) {
  const image = (
    <Image
      src={brand.logo.src}
      alt={brand.logo.alt}
      width={brand.logo.width}
      height={brand.logo.height}
      preload={priority}
      sizes="(min-width: 1024px) 220px, 160px"
      className={cn("block w-auto", sizes[size], className)}
    />
  );

  if (!asLink) return image;

  return (
    <Link href="/" aria-label={brand.logo.alt} className="inline-flex shrink-0">
      {image}
    </Link>
  );
}
