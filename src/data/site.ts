import type { SiteContact } from "@/types/content";

/**
 * Conteúdo operacional — PLACEHOLDERS.
 * Substituir pelos dados reais antes da publicação. Nenhum outro arquivo
 * deve conter número de telefone, endereço ou @ do Instagram.
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
    contact: true,   // WhatsApp e Instagram
    address: true,   // endereço e mapa
    hours: true,     // horários
    domain: true,    // URL oficial
    logo: true,      // logo e imagem OG
  },
} as const;

export const contact: SiteContact = {
  whatsappNumber: "5500000000000", // TODO: número real (somente dígitos, com DDI)
  whatsappDisplay: "(00) 00000-0000",
  instagramHandle: "@espacosavanna", // TODO
  instagramUrl: "https://instagram.com/espacosavanna",
  address: {
    street: "Rua Exemplo, 000", // TODO
    neighborhood: "Bairro",
    city: "Cidade",
    state: "UF",
    zip: "00000-000",
    mapsEmbedUrl: "", // TODO: URL de embed do Google Maps
    mapsUrl: "https://maps.google.com", // TODO
  },
  openingHours: [
    { days: "Segunda a sábado", hours: "10h às 22h" }, // TODO
    { days: "Domingo", hours: "Sob consulta" },
  ],
};
