import { contact, siteConfig } from "@/data/site";
import { pages } from "@/content/pages";
import { defaultOgImage } from "@/lib/seo";

/**
 * JSON-LD (schema.org). Regra: só entram dados reais. Campos cujo dado
 * ainda é placeholder (ver `siteConfig.placeholders`) ficam de fora até
 * a substituição — a estrutura já está preparada para recebê-los.
 */

const absolute = (path: string) => new URL(path, siteConfig.url).toString();

export function organizationJsonLd() {
  const { placeholders } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absolute("/#organization"),
    name: siteConfig.name,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    inLanguage: "pt-BR",
    // Pendentes de dados oficiais — preenchidos automaticamente ao virar a flag:
    ...(placeholders.logo ? {} : { logo: absolute("/brand/logo.png"), image: absolute(defaultOgImage.src) }),
    ...(placeholders.contact
      ? {}
      : {
          telephone: `+${contact.whatsappNumber}`,
          sameAs: [contact.instagramUrl],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: `+${contact.whatsappNumber}`,
            availableLanguage: "Portuguese",
          },
        }),
    ...(placeholders.address
      ? {}
      : {
          address: {
            "@type": "PostalAddress",
            streetAddress: contact.address.street,
            addressLocality: contact.address.city,
            addressRegion: contact.address.state,
            postalCode: contact.address.zip,
            addressCountry: "BR",
          },
          hasMap: contact.address.mapsUrl,
        }),
    ...(placeholders.hours
      ? {}
      : {
          openingHours: contact.openingHours.map((slot) => `${slot.days}: ${slot.hours}`),
        }),
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absolute("/#website"),
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "pt-BR",
    publisher: { "@id": absolute("/#organization") },
  };
}

type Crumb = { name: string; path: string };

/** Trilha estrutural (Home → seção → página). Dados reais: só nomes de rotas. */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Início", path: pages.home.path }, ...crumbs].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absolute(crumb.path),
    })),
  };
}
