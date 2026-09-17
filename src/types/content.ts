/**
 * Tipos da camada de conteúdo.
 * /src/data   → conteúdo comercial e operacional (terapeutas, experiências, contato)
 * /src/content → conteúdo institucional (textos de páginas e seções)
 *
 * Componentes recebem esses tipos por props e nunca contêm texto fixo.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Ponto focal para object-position (ex.: "center 18%"). */
  focal?: string;
  /** Marca placeholders que serão substituídos pelas fotos finais. */
  placeholder?: boolean;
};

export type CtaIntent = "schedule" | "availability" | "therapists" | "custom";

export type Cta = {
  label: string;
  /** Rota interna (`/terapeutas`) ou âncora (`#agendar`). Omitir para CTA de WhatsApp. */
  href?: string;
  /** Mensagem pré-preenchida no WhatsApp. Se presente, o CTA abre o WhatsApp. */
  whatsappMessage?: string;
  intent?: CtaIntent;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Therapist = {
  slug: string;
  name: string;
  /** Apresentação curta usada nos cards. */
  summary: string;
  /** Apresentação completa usada na página individual. */
  bio: string;
  /** Destaques exibidos no card (máx. 3, conforme layout). */
  highlights: string[];
  image: ImageAsset;
  availability?: string;
  /** Slugs de experiências oferecidas. */
  experiences: string[];
  featured?: boolean;
};

export type Experience = {
  slug: string;
  name: string;
  icon: IconName;
  tagline: string;
  description: string;
  image: ImageAsset;
  featured?: boolean;
};

/** Ícones de linha do layout aprovado, resolvidos em components/shared/icons. */
export type IconName =
  | "whatsapp"
  | "lock"
  | "bloom"
  | "lotus"
  | "person"
  | "calendar"
  | "clock"
  | "petal"
  | "sun";

export type Feature = {
  icon: IconName;
  title: string;
  /** Rótulo curto exibido no mobile (layout aprovado usa uma palavra). */
  shortTitle?: string;
  description: string;
  /** Versão curta do texto para o mobile, quando o layout pedir. */
  shortDescription?: string;
};

export type Step = {
  icon?: IconName;
  title: string;
  description?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type OpeningHours = {
  days: string;
  hours: string;
};

export type SiteContact = {
  /** Somente dígitos com DDI, ex.: "5511999999999". */
  whatsappNumber: string;
  whatsappDisplay: string;
  instagramHandle: string;
  instagramUrl: string;
  email?: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    /** URL do Google Maps (embed) para a seção de localização. */
    mapsEmbedUrl: string;
    mapsUrl: string;
  };
  openingHours: OpeningHours[];
};

export type SectionCopy = {
  eyebrow?: string;
  title: string;
  /** Título alternativo exibido no mobile quando o layout aprovado difere. */
  shortTitle?: string;
  /** Trecho do título destacado em itálico dourado, se o layout pedir. */
  titleAccent?: string;
  text?: string;
  cta?: Cta;
  secondaryCta?: Cta;
};

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};
