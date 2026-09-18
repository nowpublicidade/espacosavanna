import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ContactSection } from "@/components/sections/contact-section";
import * as content from "@/content/contact";
import { pages } from "@/content/pages";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: pages.contact.title },
  description: pages.contact.description,
  alternates: { canonical: pages.contact.path },
};

/** Contato — página final de conversão (Documento 02, item 14). */
export default function ContactPage() {
  return (
    <>
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
