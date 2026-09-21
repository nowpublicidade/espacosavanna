/**
 * Manifesto de exibição da rota /dev/tokens.
 * Os valores reais vivem em src/styles/tokens.css — este arquivo apenas
 * descreve o que mostrar e com qual legenda. Rota removida em produção.
 */

export const colorGroups = [
  {
    title: "Base da marca",
    items: [
      { name: "--brand-bg", hex: "#0B0806", use: "Background principal" },
      { name: "--brand-surface-1", hex: "#100C09", use: "Seções alternadas" },
      { name: "--brand-surface-2", hex: "#120E0A", use: "Cards" },
      { name: "--brand-surface-3", hex: "#14100C", use: "Fundo de imagens" },
      { name: "--brand-fg", hex: "#F2EBE0", use: "Texto principal" },
      { name: "--brand-gold", hex: "#C6A15B", use: "Dourado — acento" },
      { name: "--brand-gold-soft", hex: "#E3CB9A", use: "Dourado suave — links, contornos" },
      { name: "--brand-gold-hover", hex: "#F3E4C4", use: "Hover de links dourados" },
      { name: "--brand-on-gold", hex: "#150F08", use: "Texto sobre dourado" },
    ],
  },
  {
    title: "Texto secundário (opacidade sobre #F2EBE0)",
    items: [
      { name: "--fg-nav", hex: "78%", use: "Links do menu" },
      { name: "--fg-body", hex: "72%", use: "Texto corrido" },
      { name: "--fg-muted", hex: "68%", use: "Parágrafos de seção, footer" },
      { name: "--fg-faint", hex: "52%", use: "Metadados, placeholders" },
    ],
  },
  {
    title: "Linhas (dourado em opacidade)",
    items: [
      { name: "--line-subtle", hex: "12%", use: "Divisor de seções" },
      { name: "--line", hex: "16%", use: "Header / footer" },
      { name: "--line-strong", hex: "20%", use: "Contorno de cards" },
      { name: "--line-accent", hex: "45%", use: "Botão secundário" },
    ],
  },
] as const;

export const typeScale = [
  { cls: "text-display font-heading", name: "display", size: "40 → 76px", font: "Cormorant 400", sample: "Uma experiência além do convencional." },
  { cls: "text-h2 font-heading", name: "h2", size: "30 → 46px", font: "Cormorant 400", sample: "Um ambiente pensado para você se desconectar." },
  { cls: "text-h3 font-heading", name: "h3", size: "17 → 19px", font: "Cormorant 400", sample: "Massagem Tântrica" },
  { cls: "text-lead text-fg-body", name: "lead", size: "16 → 17px", font: "Jost 300", sample: "Ambiente sofisticado, atendimento personalizado e total discrição." },
  { cls: "text-body text-fg-body", name: "body", size: "15 → 15.5px", font: "Jost 300", sample: "Cada detalhe do Espaço Savanna foi planejado para proporcionar conforto, privacidade e uma atmosfera acolhedora." },
  { cls: "text-small text-fg-muted", name: "small", size: "13.5 → 14px", font: "Jost 300", sample: "Atendimento com hora marcada. Ambiente exclusivo e reservado." },
  { cls: "text-caption text-fg-faint", name: "caption", size: "12.5px", font: "Jost 300", sample: "© 2026 Espaço Savanna" },
  { cls: "text-eyebrow uppercase text-gold", name: "eyebrow", size: "10.5px · .28em", font: "Jost 400", sample: "Um espaço exclusivo" },
  { cls: "text-button uppercase font-medium text-gold-soft", name: "button", size: "11.5 → 12.5px · .16em", font: "Jost 500/600", sample: "Agendar pelo WhatsApp" },
  { cls: "text-nav text-fg-nav", name: "nav", size: "13px · .06em", font: "Jost 400", sample: "O Espaço" },
] as const;

export const spacing = [
  { name: "--gutter", value: "22 → 56px", cls: "w-gutter" },
  { name: "--section-y", value: "40 → 90px", cls: "w-section" },
  { name: "--section-y-tight", value: "38 → 80px", cls: "w-section-tight" },
  { name: "--stack-sm", value: "12px", cls: "w-stack-sm" },
  { name: "--stack", value: "22px", cls: "w-stack" },
  { name: "--stack-lg", value: "44px", cls: "w-stack-lg" },
] as const;

export const controls = [
  { name: "--control-lg", value: "58px", cls: "h-control-lg", use: "CTA hero / final" },
  { name: "--control-md", value: "54px", cls: "h-control-md", use: "CTA mobile" },
  { name: "--control", value: "48px", cls: "h-control", use: "CTA header" },
  { name: "--control-sm", value: "46px", cls: "h-control-sm", use: "CTA em card" },
  { name: "--control-xs", value: "42px", cls: "h-control-xs", use: "CTA em card mobile" },
] as const;

export const radii = [
  { name: "--radius", value: "14px", cls: "rounded-lg" },
  { name: "--radius-inner", value: "10px", cls: "rounded-inner" },
  { name: "--radius-sm", value: "8px", cls: "rounded-sm" },
] as const;
