import type { SiteContact } from "@/types/content";

/**
 * Conteúdo operacional. Nenhum outro arquivo deve conter número de
 * telefone, endereço ou @ do Instagram — tudo vem daqui.
 */
export const siteConfig = {
  name: "Espaço Savanna",
  legalName: "Espaço Savanna",
  shortDescription:
    "Experiência premium de bem-estar em ambiente reservado, confortável e exclusivo.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.espacosavanna.com.br", // TODO: domínio oficial
  locale: "pt-BR",
  /**
   * Indexação por buscadores. Fica desligada até a publicação oficial:
   * defina NEXT_PUBLIC_INDEXABLE=true no ambiente de produção.
   */
  indexable: process.env.NEXT_PUBLIC_INDEXABLE === "true",
  foundingYear: 2026,
  /** Aviso obrigatório no rodapé (Documento 01, item 14). */
  ageNotice: "Entrada permitida apenas para maiores de 18 anos",
  /**
   * Flags de funcionalidades.
   * whatsappBar: barra sticky inferior no mobile (layout aprovado) — ativa.
   * whatsappBubble: balão fixo no desktop (proposta) — desligado.
   */
  features: {
    whatsappBar: true,
    whatsappBubble: false,
  },
  /**
   * Estado dos dados operacionais. Enquanto `true`, o dado é placeholder:
   * não entra no JSON-LD nem em metadados públicos.
   */
  placeholders: {
    whatsapp: false,  // (11) 94565-3708 — oficial
    instagram: true,  // @ pendente
    address: false,   // R. Dr. Miranda de Azevedo, 360 — oficial
    hours: false,     // seg–sáb 10h–22h, dom fechado — oficial
    domain: true,     // URL oficial pendente
    logo: false,      // logo oficial aplicada
  },
} as const;

const ADDRESS_QUERY = encodeURIComponent(
  "R. Dr. Miranda de Azevedo, 360 - Vila Anglo Brasileira, São Paulo - SP, 05027-000",
);

export const contact: SiteContact = {
  whatsappNumber: "5511945653708",
  whatsappDisplay: "(11) 94565-3708",
  instagramHandle: "@espacosavanna", // TODO: confirmar o @ oficial
  instagramUrl: "https://instagram.com/espacosavanna",
  address: {
    street: "R. Dr. Miranda de Azevedo, 360",
    neighborhood: "Vila Anglo Brasileira",
    city: "São Paulo",
    state: "SP",
    zip: "05027-000",
    // Embed por endereço, sem chave de API. Pode ser trocado pelo embed do
    // "Compartilhar → Incorporar um mapa" do Google Maps quando houver a ficha do negócio.
    mapsEmbedUrl: `https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed&z=16&hl=pt-BR`,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`,
  },
  openingHours: [
    {
      days: "Segunda a sábado",
      hours: "10h às 22h",
      schema: {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "22:00",
      },
    },
    { days: "Domingo", hours: "Fechado" },
  ],
};
