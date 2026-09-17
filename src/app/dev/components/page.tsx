import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WhatsAppIcon } from "@/components/shared/icons";
import { Case, Specimen } from "./specimen";

export const metadata: Metadata = {
  title: "Componentes",
  robots: { index: false, follow: false },
};

const index = [
  { id: "button", label: "Button" },
  { id: "eyebrow", label: "Eyebrow" },
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
      </main>
    </div>
  );
}
