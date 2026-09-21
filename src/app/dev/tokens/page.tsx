import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { brand, experiencePhotos, heroes, therapistPhotos } from "@/data/images";
import { colorGroups, controls, radii, spacing, typeScale } from "./manifest";

export const metadata: Metadata = {
  title: "Design Tokens",
  robots: { index: false, follow: false },
};

/**
 * Rota interna de validação do Design System.
 * Não usa componentes do site (eles ainda não existem) — apenas utilitários
 * gerados a partir dos tokens, para aprovar a base antes dos componentes.
 */
export default function TokensPage() {
  if (process.env.NODE_ENV === "production") notFound();

  const placeholders = [heroes.home.landscape, therapistPhotos.babi[0], experiencePhotos["massagem-tantrica"]];

  return (
    <main className="mx-auto w-full max-w-narrow px-gutter pb-section">
      <header className="flex flex-col gap-stack-sm border-b border-line py-section-tight">
        <p className="text-eyebrow uppercase text-gold">Espaço Savanna · Fase 01</p>
        <h1 className="text-h2">Design Tokens</h1>
        <p className="max-w-[56ch] text-body text-fg-body">
          Base visual extraída do Design System e do layout aprovado. Tudo o que
          aparece nesta página vem de <code className="text-gold-soft">src/styles/tokens.css</code>.
        </p>
      </header>

      {/* Cores */}
      <Section title="Cor" eyebrow="01">
        {colorGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-stack">
            <h3 className="text-h3">{group.title}</h3>
            <ul className="grid grid-cols-2 gap-stack-sm sm:grid-cols-3">
              {group.items.map((c) => (
                <li
                  key={c.name}
                  className="overflow-hidden rounded-lg border border-line-strong bg-surface-2"
                >
                  <div
                    className="h-20 border-b border-line-subtle"
                    style={{ background: `var(${c.name})` }}
                  />
                  <div className="flex flex-col gap-1 p-4">
                    <span className="text-caption text-gold-soft">{c.name}</span>
                    <span className="text-small text-foreground">{c.hex}</span>
                    <span className="text-caption text-fg-muted">{c.use}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-stack">
          <h3 className="text-h3">Superfícies em sequência</h3>
          <div className="overflow-hidden rounded-lg border border-line-strong">
            <div className="bg-background px-6 py-8 text-small text-fg-muted">
              --brand-bg · seção padrão
            </div>
            <div className="border-t border-line-subtle bg-surface-1 px-6 py-8 text-small text-fg-muted">
              --brand-surface-1 · seção alternada
              <div className="mt-4 rounded-lg border border-line-strong bg-surface-2 p-5 text-small text-fg-body">
                --brand-surface-2 · card com contorno --line-strong
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Tipografia */}
      <Section title="Tipografia" eyebrow="02">
        <ul className="flex flex-col divide-y divide-line-subtle">
          {typeScale.map((t) => (
            <li
              key={t.name}
              className="grid gap-3 py-6 md:grid-cols-[10rem_1fr] md:items-baseline"
            >
              <div className="flex flex-col gap-1">
                <span className="text-caption text-gold-soft">{t.name}</span>
                <span className="text-caption text-fg-faint">{t.size}</span>
                <span className="text-caption text-fg-faint">{t.font}</span>
              </div>
              <p className={t.cls}>{t.sample}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-stack-sm">
          <h3 className="text-h3">Título com acento itálico (hero)</h3>
          <p className="text-display font-heading">
            Uma experiência
            <br />
            <em className="italic text-gold-soft">além do convencional.</em>
          </p>
        </div>
      </Section>

      {/* Espaçamento */}
      <Section title="Espaçamento e ritmo" eyebrow="03">
        <ul className="flex flex-col gap-stack-sm">
          {spacing.map((s) => (
            <li key={s.name} className="grid grid-cols-[11rem_1fr] items-center gap-4">
              <div className="flex flex-col">
                <span className="text-caption text-gold-soft">{s.name}</span>
                <span className="text-caption text-fg-faint">{s.value}</span>
              </div>
              <div className={`h-3 rounded-sm bg-gold/40 ${s.cls}`} />
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-stack-sm">
          <h3 className="text-h3">Alturas de controle</h3>
          <ul className="flex flex-wrap items-end gap-stack-sm">
            {controls.map((c) => (
              <li key={c.name} className="flex flex-col items-center gap-2">
                <div
                  className={`w-24 rounded-lg border border-line-accent ${c.cls}`}
                />
                <span className="text-caption text-gold-soft">{c.value}</span>
                <span className="text-caption text-fg-faint">{c.use}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-stack-sm">
          <h3 className="text-h3">Raio</h3>
          <ul className="flex flex-wrap gap-stack">
            {radii.map((r) => (
              <li key={r.name} className="flex flex-col items-center gap-2">
                <div className={`size-20 border border-line-accent bg-surface-2 ${r.cls}`} />
                <span className="text-caption text-gold-soft">{r.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Botões (especímenes — o componente Button virá na Fase 02) */}
      <Section title="Botões — especímenes" eyebrow="04">
        <p className="max-w-[56ch] text-small text-fg-muted">
          Renderizados apenas com utilitários de token, para aprovar cor, altura,
          tracking e raio antes de criar o componente <code>Button</code>.
        </p>
        <div className="flex flex-wrap items-center gap-stack">
          <span className="surface-gold inline-flex h-control-lg items-center gap-3 rounded-lg px-9 text-button font-semibold uppercase">
            <MessageCircle className="size-4" strokeWidth={1.7} aria-hidden />
            Agendar pelo WhatsApp
          </span>
          <span className="inline-flex h-control-lg items-center rounded-lg border border-line-accent px-9 text-button font-medium uppercase text-gold-soft">
            Conhecer o espaço
          </span>
          <span className="inline-flex h-control items-center gap-2.5 rounded-lg border border-gold/50 px-6 text-button font-medium uppercase text-gold-soft">
            <MessageCircle className="size-4" strokeWidth={1.7} aria-hidden />
            Agendar pelo WhatsApp
          </span>
          <span className="inline-flex h-control-sm items-center rounded-inner border border-gold/40 px-6 text-caption uppercase tracking-button text-gold-soft">
            Conhecer perfil
          </span>
          <span className="inline-flex items-center gap-2.5 text-small tracking-[.12em] text-gold-soft">
            Ver todas as terapeutas <span aria-hidden>→</span>
          </span>
        </div>
      </Section>

      {/* Marca e imagens */}
      <Section title="Marca e placeholders" eyebrow="05">
        <div className="flex flex-col gap-stack-sm">
          <h3 className="text-h3">Logo oficial (1024×255)</h3>
          <div className="flex flex-wrap items-center gap-stack-lg rounded-lg border border-line bg-surface-1 p-8">
            <div className="flex flex-col items-start gap-2">
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-logo w-auto"
              />
              <span className="text-caption text-fg-faint">header desktop · 34px</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-logo-mobile w-auto"
              />
              <span className="text-caption text-fg-faint">header mobile · 38px</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-stack-sm">
          <h3 className="text-h3">Imagens — fotografias oficiais (ImageAsset)</h3>
          <ul className="grid gap-stack-sm sm:grid-cols-3">
            {placeholders.map((img) => (
              <li key={img.alt} className="flex flex-col gap-2">
                <div
                  className="relative overflow-hidden rounded-lg bg-surface-3"
                  style={{ aspectRatio: `${img.width} / ${img.height}` }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <span className="text-caption text-fg-faint">
                  {img.alt} · {img.width}×{img.height}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </main>
  );
}

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-stack-lg border-b border-line-subtle py-section-tight">
      <div className="flex items-baseline gap-4">
        <span className="font-heading text-h3 text-gold">{eyebrow}</span>
        <h2 className="text-h2">{title}</h2>
      </div>
      {children}
    </section>
  );
}
