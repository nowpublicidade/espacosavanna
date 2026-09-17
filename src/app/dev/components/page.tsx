import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WhatsAppIcon } from "@/components/shared/icons";
import { CtaLink } from "@/components/shared/cta-link";
import { Logo } from "@/components/shared/logo";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ctas, experiencesSection, hero, space, therapistsSection } from "@/content/home";
import { Case, Specimen } from "./specimen";

export const metadata: Metadata = {
  title: "Componentes",
  robots: { index: false, follow: false },
};

const index = [
  { id: "button", label: "Button" },
  { id: "eyebrow", label: "Eyebrow" },
  { id: "cta-link", label: "CtaLink" },
  { id: "logo", label: "Logo" },
  { id: "section", label: "Section" },
  { id: "section-heading", label: "SectionHeading" },
];

/**
 * Rota interna de validação visual. Tudo o que aparece aqui são os
 * componentes reais do site, com dados da camada de conteúdo.
 */
export default function ComponentsPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-line px-gutter py-8">
        <div className="mx-auto flex w-full max-w-site flex-col gap-3">
          <Eyebrow>Espaço Savanna · Fase 02</Eyebrow>
          <h1 className="text-h2">Componentes</h1>
          <nav aria-label="Índice" className="flex flex-wrap gap-x-5 gap-y-2">
            {index.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-small text-fg-muted hover:text-gold-soft">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-site px-gutter">
        <Specimen
          id="button"
          index="A1"
          title="Button"
          note="Variantes e tamanhos do layout aprovado. Ícone opcional à esquerda ou à direita; renderiza <a>, <Link> ou <button>."
        >
          <Case label="primary · lg 58 / md 54 / sm 48">
            <Button variant="primary" size="lg" icon={<WhatsAppIcon />}>Agendar pelo WhatsApp</Button>
            <Button variant="primary" size="md" icon={<WhatsAppIcon />}>Agendar pelo WhatsApp</Button>
            <Button variant="primary" size="sm" icon={<WhatsAppIcon />}>Agendar agora</Button>
          </Case>
          <Case label="secondary · lg / md / sm (header)">
            <Button variant="secondary" size="lg">Conhecer o Espaço</Button>
            <Button variant="secondary" size="md">Conhecer o Espaço</Button>
            <Button variant="secondary" size="sm" icon={<WhatsAppIcon />}>Agendar pelo WhatsApp</Button>
          </Case>
          <Case label="outline-soft · xs (CTA em card, 46 desktop / 42 mobile)">
            <Button variant="outline-soft" size="xs">Conhecer perfil</Button>
            <div className="w-56">
              <Button variant="outline-soft" size="xs" fullWidth>Conhecer perfil</Button>
            </div>
          </Case>
          <Case label="ghost · link com seta">
            <Button variant="ghost" href="/terapeutas" icon={<ArrowRight />} iconPosition="right">
              Ver todas as terapeutas
            </Button>
            <Button variant="ghost" href="/experiencias" icon={<ArrowRight />} iconPosition="right">
              Ver todas
            </Button>
          </Case>
          <Case label="estados · disabled / fullWidth / como link externo">
            <Button variant="primary" size="md" disabled>Indisponível</Button>
            <Button variant="secondary" size="md" disabled>Indisponível</Button>
            <div className="w-72">
              <Button variant="primary" size="md" fullWidth icon={<WhatsAppIcon />} href="https://wa.me/5500000000000" external>
                Agendar pelo WhatsApp
              </Button>
            </div>
          </Case>
        </Specimen>

        <Specimen
          id="eyebrow"
          index="A2"
          title="Eyebrow"
          note="Rótulo em caps dourado. default .28em (seções) · compact .2em (itens) · label .24em (footer)."
        >
          <Case label="default / compact / label · tone gold / soft">
            <Eyebrow>Um espaço exclusivo</Eyebrow>
            <Eyebrow size="compact">Atendimento reservado</Eyebrow>
            <Eyebrow size="label">Navegar</Eyebrow>
            <Eyebrow size="compact" tone="soft">Massagem Tântrica</Eyebrow>
          </Case>
        </Specimen>

        <Specimen
          id="cta-link"
          index="B1"
          title="CtaLink"
          note="Recebe um Cta da camada de conteúdo. Com whatsappMessage → wa.me em nova aba com ícone; com href → Link interno."
        >
          <Case label="ctas.schedule (WhatsApp) · ctas.space (rota) · ctas.therapists (rota) · ctas.availability">
            <CtaLink cta={ctas.schedule} />
            <CtaLink cta={ctas.space} variant="secondary" />
            <CtaLink cta={ctas.therapists} variant="secondary" size="md" />
            <CtaLink cta={ctas.availability} size="md" />
          </Case>
          <Case label="ghost com seta · card xs">
            <CtaLink cta={therapistsSection.cta!} variant="ghost" icon={<ArrowRight />} iconPosition="right" />
            <CtaLink cta={{ ...therapistsSection.cardCta, href: "/terapeutas/babi" }} variant="outline-soft" size="xs" />
          </Case>
        </Specimen>

        <Specimen
          id="logo"
          index="B2"
          title="Logo"
          note="Proporção 4:1 preservada. header 34 · header-mobile 38 · footer 46 · footer-mobile 62."
        >
          <Case label="header / header-mobile / footer / footer-mobile">
            <Logo size="header" />
            <Logo size="header-mobile" />
            <Logo size="footer" />
            <Logo size="footer-mobile" asLink={false} />
          </Case>
        </Specimen>

        <Specimen
          id="section"
          index="B3"
          title="Section"
          note="Ritmo de seções: base → alt (linha dourada superior) → base. Container site 1440 / narrow 1120 / fluid."
        >
          <Case label="sequência base · alt · alt bordered · base, com padding real" bleed>
            <div className="overflow-hidden rounded-lg border border-line-strong">
              <Section spacing="tight">
                <p className="text-small text-fg-muted">surface base · container site</p>
              </Section>
              <Section surface="alt" spacing="tight">
                <p className="text-small text-fg-muted">surface alt · container site</p>
              </Section>
              <Section surface="alt" bordered spacing="tight" container="narrow">
                <p className="text-small text-fg-muted">surface alt bordered · container narrow</p>
              </Section>
              <Section spacing="tight" container="fluid">
                <p className="px-gutter text-small text-fg-muted">surface base · container fluid (padding manual)</p>
              </Section>
            </div>
          </Case>
        </Specimen>

        <Specimen
          id="section-heading"
          index="B4"
          title="SectionHeading"
          note="Eyebrow + título + texto + CTA. `aside` posiciona um link à direita no desktop e abaixo no mobile."
        >
          <Case label="com texto e CTA secundário (seção O Espaço)" bleed>
            <SectionHeading copy={space} showCta />
          </Case>
          <Case label="com aside (seção Terapeutas)" bleed>
            <SectionHeading
              copy={therapistsSection}
              titleMaxCh={18}
              aside={<CtaLink cta={therapistsSection.cta!} variant="ghost" icon={<ArrowRight />} iconPosition="right" />}
            />
          </Case>
          <Case label="com aside e título limitado a 20ch (seção Experiências)" bleed>
            <SectionHeading
              copy={experiencesSection}
              titleMaxCh={20}
              aside={<CtaLink cta={experiencesSection.cta!} variant="ghost" icon={<ArrowRight />} iconPosition="right" />}
            />
          </Case>
          <Case label="display com acento (hero) · h1" bleed>
            <SectionHeading copy={hero} as="h1" size="display" textMaxCh={46} />
          </Case>
          <Case label="centralizado" bleed>
            <SectionHeading copy={{ title: "Reserve o seu momento.", text: "Atendimento com hora marcada, em ambiente exclusivo e reservado." }} align="center" />
          </Case>
        </Specimen>
      </main>
    </div>
  );
}
