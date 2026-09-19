import Image from "next/image";
import { CtaLink } from "@/components/shared/cta-link";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { ImageAsset, SectionCopy } from "@/types/content";

type FinalCtaProps = {
  copy: SectionCopy & { image?: ImageAsset };
  id?: string;
  className?: string;
};

/**
 * Convite final do layout aprovado: cartão com fotografia ao fundo,
 * gradiente horizontal, título 44px, texto curto e CTA primário.
 * Min. 340px de altura no desktop; texto limitado a 620px.
 */
export function FinalCta({ copy, id = "agendar", className }: FinalCtaProps) {
  return (
    <Section id={id} className={className}>
      <Reveal className="relative flex min-h-[21.25rem] items-center overflow-hidden rounded-lg bg-surface-3">
        {copy.image ? (
          <Image
            src={copy.image.src}
            alt={copy.image.alt}
            fill
            sizes="(min-width: 1440px) 1328px, 100vw"
            className="object-cover"
            style={{ objectPosition: copy.image.focal }}
          />
        ) : null}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0",
            "bg-[linear-gradient(90deg,rgb(11_8_6/0.96)_0%,rgb(11_8_6/0.88)_44%,rgb(11_8_6/0.5)_100%)]",
          )}
        />
        <div className="relative max-w-[38.75rem] px-[1.375rem] py-10 lg:px-14 lg:py-[3.75rem]">
          <h2 className="text-h2 lg:text-[2.75rem]">{copy.title}</h2>
          {copy.text ? (
            <p className="mt-3.5 max-w-[40ch] text-body text-foreground/68 lg:mt-[1.125rem] lg:leading-[1.75]">
              {copy.text}
            </p>
          ) : null}
          {copy.cta ? (
            <div className="mt-6 lg:mt-8">
              <CtaLink cta={copy.cta} size="lg" className="lg:px-9" />
            </div>
          ) : null}
        </div>
      </Reveal>
    </Section>
  );
}
