import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ContactSection } from "@/components/sections/contact-section";
import * as content from "@/content/contact";
import { pages } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { contact } from "@/data/site";

export const metadata: Metadata = buildMetadata(pages.contact);

/** Contato — página final de conversão (Documento 02, item 14). */
export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contato", path: pages.contact.path }])} />
      <Hero content={content.hero} size="compact" id="contato-hero" />
      <ContactSection
        copy={content.info}
        contact={contact}
        labels={content.labels}
        whatsappMessage={content.whatsappMessage}
      />
    </>
  );
}
