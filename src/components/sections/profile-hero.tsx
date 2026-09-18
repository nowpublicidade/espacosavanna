import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ArrowIcon, WhatsAppIcon } from "@/components/shared/icons";
import { Section } from "@/components/shared/section";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { ImageAsset } from "@/types/content";

type ProfileHeroProps = {
  eyebrow: string;
  name: string;
  summary: string;
  image: ImageAsset;
  whatsappMessage: string;
  ctaLabel: string;
  back?: { label: string; href: string };
  /** Metadados curtos (ex.: disponibilidade). */
  meta?: { label: string; value: string }[];
};

/**
 * Abertura da página individual (terapeuta ou experiência):
 * fotografia 3:4 à esquerda, texto e CTA à direita — no mobile a foto
 * vem primeiro, em 4:5, seguida do texto.
 */
export function ProfileHero({
  eyebrow,
  name,
  summary,
  image,
  whatsappMessage,
  ctaLabel,
  back,
  meta,
}: ProfileHeroProps) {
  return (
    <Section spacing="tight">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-[4.375rem]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-3 lg:aspect-[3/4]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            style={{ objectPosition: image.focal }}
          />
        </div>

        <div className="flex flex-col items-start">
          {back ? (
            <Button
              href={back.href}
              variant="ghost"
              icon={<ArrowIcon className="rotate-180" />}
              className="mb-6 lg:mb-8"
            >
              {back.label}
            </Button>
          ) : null}
          <Eyebrow className="mb-3.5 lg:mb-[1.125rem]">{eyebrow}</Eyebrow>
          <h1 className="text-display">{name}</h1>
          <p className="mt-4 max-w-[44ch] text-lead text-fg-body lg:mt-6">{summary}</p>

          {meta && meta.length > 0 ? (
            <dl className="mt-6 flex flex-col gap-3 border-t border-line pt-6 lg:mt-8">
              {meta.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt>
                    <Eyebrow as="span" size="label">{item.label}</Eyebrow>
                  </dt>
                  <dd className="text-body text-fg-muted">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="mt-8 w-full lg:mt-10 lg:w-auto">
            <Button
              href={buildWhatsAppUrl(whatsappMessage)}
              external
              size="lg"
              icon={<WhatsAppIcon />}
              className="max-lg:h-control-md max-lg:w-full"
            >
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
