import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowIcon, WhatsAppIcon } from "@/components/shared/icons";
import { CtaLink } from "@/components/shared/cta-link";
import { Logo } from "@/components/shared/logo";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeatureRow } from "@/components/shared/feature-row";
import { ImageMosaic } from "@/components/shared/image-mosaic";
import { TherapistCard } from "@/components/shared/therapist-card";
import { ExperienceCard } from "@/components/shared/experience-card";
import { HorizontalScroller } from "@/components/shared/horizontal-scroller";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Steps } from "@/components/shared/steps";
import { Reveal } from "@/components/shared/reveal";
import { WhatsAppFloating } from "@/components/layout/whatsapp-floating";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ctas, experiencesSection, faqSection, features, footer, hero, howItWorks, space, therapistsSection } from "@/content/home";
import { homeFaq } from "@/data/faq";
import { mainNav, secondaryNav } from "@/data/navigation";
import { experiences, featuredExperiences } from "@/data/experiences";
import { featuredTherapists } from "@/data/therapists";
import { contact, siteConfig } from "@/data/site";
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
  { id: "header", label: "Header" },
  { id: "footer", label: "Footer" },
  { id: "feature-row", label: "FeatureRow" },
  { id: "image-mosaic", label: "ImageMosaic" },
  { id: "therapist-card", label: "TherapistCard" },
  { id: "experience-card", label: "ExperienceCard" },
  { id: "faq", label: "FaqAccordion" },
  { id: "steps", label: "Steps" },
  { id: "reveal", label: "Reveal" },
  { id: "whatsapp-floating", label: "WhatsAppFloating" },
];

/**
 * Rota interna de validação visual. Tudo o que aparece aqui são os
 * componentes reais do site, com dados da camada de conteúdo.
 */
export default function ComponentsPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <div className="flex flex-1 flex-col">
      {/* C1 · Header real, sticky — o mesmo usado no site */}
      <Header nav={mainNav} secondaryNav={secondaryNav} cta={ctas.schedule} />

      <header id="header" className="border-b border-line px-gutter py-8">
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
            <Button variant="ghost" href="/terapeutas" icon={<ArrowIcon />} iconPosition="right">
              Ver todas as terapeutas
            </Button>
            <Button variant="ghost" href="/experiencias" icon={<ArrowIcon />} iconPosition="right">
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
            <CtaLink cta={therapistsSection.cta!} variant="ghost" icon={<ArrowIcon />} iconPosition="right" />
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
              aside={<CtaLink cta={therapistsSection.cta!} variant="ghost" icon={<ArrowIcon />} iconPosition="right" />}
            />
          </Case>
          <Case label="com aside e título limitado a 20ch (seção Experiências)" bleed>
            <SectionHeading
              copy={experiencesSection}
              titleMaxCh={20}
              aside={<CtaLink cta={experiencesSection.cta!} variant="ghost" icon={<ArrowIcon />} iconPosition="right" />}
            />
          </Case>
          <Case label="display com acento (hero) · h1" bleed>
            <SectionHeading copy={hero} as="h1" size="display" textMaxCh={46} />
          </Case>
          <Case label="centralizado" bleed>
            <SectionHeading copy={{ title: "Reserve o seu momento.", text: "Atendimento com hora marcada, em ambiente exclusivo e reservado." }} align="center" />
          </Case>
        </Specimen>

        <Specimen
          id="feature-row"
          index="D1"
          title="FeatureRow"
          note="Faixa de diferenciais do Hero. Desktop: ícone à esquerda e divisores verticais. Mobile: colunas centralizadas com rótulo curto (RESERVADO / CONFORTÁVEL / SELECIONADAS)."
        >
          <Case label="features (content/home.ts)" bleed>
            <FeatureRow features={features} />
          </Case>
        </Specimen>

        <Specimen
          id="image-mosaic"
          index="D2"
          title="ImageMosaic"
          note="Mosaico da seção O Espaço: imagem principal em duas linhas + duas menores. Colunas 1.5fr/1fr (desktop) e 1.6fr/1fr (mobile)."
        >
          <Case label="space.images — na composição real ocupa a coluna direita (1.35fr) da seção" bleed>
            <div className="lg:max-w-[57%]">
              <ImageMosaic images={[space.images[0], space.images[1], space.images[2]]} />
            </div>
          </Case>
        </Specimen>

        <Specimen
          id="therapist-card"
          index="E1"
          title="TherapistCard + HorizontalScroller"
          note="Foto 3:4 protagonista, nome em caps, três destaques e CTA interno. No mobile, o HorizontalScroller vira carrossel de 245px com snap; no desktop, grid de 3 colunas."
        >
          <Case label="featuredTherapists (data/therapists.ts) dentro de HorizontalScroller" bleed>
            <HorizontalScroller columns={3}>
              {featuredTherapists.map((therapist) => (
                <TherapistCard key={therapist.slug} therapist={therapist} cta={therapistsSection.cardCta} />
              ))}
            </HorizontalScroller>
          </Case>
        </Specimen>

        <Specimen
          id="experience-card"
          index="E2"
          title="ExperienceCard"
          note="A fotografia é o card: sem borda, sem fundo, sem botão. Desktop: 330px com overlay vertical. Mobile: 150px empilhados, overlay horizontal e seta."
        >
          <Case label="featuredExperiences — grid 3 colunas (desktop) / coluna (mobile), como no layout" bleed>
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-5">
              {featuredExperiences.map((experience) => (
                <ExperienceCard key={experience.slug} experience={experience} />
              ))}
            </div>
          </Case>
        </Specimen>

        <Specimen
          id="faq"
          index="F1"
          title="Accordion + FaqAccordion"
          note="Perguntas separadas por linha dourada; chevron gira ao abrir; primeiro item aberto por padrão. Desktop: composição em duas colunas (título .8fr / lista 1.2fr) como no layout."
        >
          <Case label="homeFaq (data/faq.ts) na composição da seção Dúvidas" bleed>
            <div className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-[4.375rem]">
              <SectionHeading copy={faqSection} />
              <FaqAccordion items={homeFaq} />
            </div>
          </Case>
        </Specimen>

        <Specimen
          id="steps"
          index="F2"
          title="Steps"
          note="Passos 01–04 do Como funciona. Desktop: colunas centralizadas com conectores de seta. Mobile: grid 2×2 com contorno."
        >
          <Case label="howItWorks.steps (content/home.ts)" bleed>
            <div className="flex flex-col gap-6 lg:gap-[3.25rem]">
              <SectionHeading copy={howItWorks} />
              <Steps steps={howItWorks.steps} />
            </div>
          </Case>
        </Specimen>

        <Specimen
          id="reveal"
          index="G1"
          title="Reveal"
          note="Fade + 12px, 0,8s, uma vez. Com prefers-reduced-motion não anima. Uso pontual — nunca automático em todos os blocos."
        >
          <Case label="três blocos escalonados (0 / 0,1 / 0,2s) — role até aqui para ver" bleed>
            <div className="grid gap-5 lg:grid-cols-3">
              {featuredExperiences.map((experience, index) => (
                <Reveal key={experience.slug} delay={index * 0.1}>
                  <ExperienceCard experience={experience} />
                </Reveal>
              ))}
            </div>
          </Case>
        </Specimen>

        <Specimen
          id="whatsapp-floating"
          index="G2"
          title="WhatsAppFloating"
          note="Flag global siteConfig.features.whatsappFloating = false → não renderiza no site. Aqui forçado com enabled para avaliação: barra sticky (mobile, do layout aprovado) e balão (desktop, proposta)."
        >
          <Case label="enabled · variant auto — a barra aparece sticky ao final desta página no mobile; o balão no canto inferior direito no desktop" bleed>
            <p className="text-small text-fg-muted">
              Flag atual: <code className="text-gold-soft">{String(siteConfig.features.whatsappFloating)}</code>
            </p>
          </Case>
        </Specimen>

        <Specimen
          id="footer"
          index="C3"
          title="Footer"
          note="Renderizado abaixo, fora do container, com dados de site.ts, navigation.ts e experiences.ts. Header (C1) está fixo no topo desta página; MobileMenu (C2) abre pelo hambúrguer no mobile."
        >
          <p className="text-small text-fg-muted">↓ Footer real ao final da página.</p>
        </Specimen>
      </main>

      <Footer
        nav={mainNav}
        experiences={experiences}
        contact={contact}
        tagline={footer.tagline}
        ageNotice={siteConfig.ageNotice}
        siteName={siteConfig.name}
        className="max-lg:pb-[7.5rem]"
      />
      <WhatsAppFloating cta={ctas.schedule} enabled />
    </div>
  );
}
