import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/shared/icons";
import { socialLinks } from "@/components/shared/social-links";
import { MapEmbed } from "@/components/shared/map-embed";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { SectionCopy, SiteContact } from "@/types/content";

type ContactSectionProps = {
  copy: SectionCopy;
  contact: SiteContact;
  labels: {
    whatsapp: string;
    address: string;
    hours: string;
    instagram: string;
    ctaLabel: string;
    mapTitle: string;
    mapPlaceholder: string;
  };
  whatsappMessage: string;
  id?: string;
};

/**
 * Bloco de contato e localização: informações operacionais à esquerda
 * (WhatsApp, endereço, horários, Instagram) e mapa à direita.
 */
export function ContactSection({ copy, contact, labels, whatsappMessage, id = "contato" }: ContactSectionProps) {
  const { address } = contact;
  // Mesmos ícones do rodapé, à frente do rótulo de cada canal.
  const [whatsapp, instagram] = socialLinks(contact);

  return (
    <Section id={id}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-[4.375rem]">
        <div>
          <SectionHeading copy={copy} titleMaxCh={20} className="mb-8 lg:mb-10" />

          <dl className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:gap-8">
            <div className="flex flex-col gap-2">
              <dt>
                <Eyebrow as="span" size="label" className="inline-flex items-center gap-1.5">
                  <whatsapp.Icon className="size-3.5 shrink-0" />
                  {labels.whatsapp}
                </Eyebrow>
              </dt>
              <dd>
                <a
                  href={buildWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-h3 text-foreground hover:text-gold-soft"
                >
                  {contact.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt>
                <Eyebrow as="span" size="label" className="inline-flex items-center gap-1.5">
                  <instagram.Icon className="size-3.5 shrink-0" />
                  {labels.instagram}
                </Eyebrow>
              </dt>
              <dd>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-h3 text-foreground hover:text-gold-soft"
                >
                  {contact.instagramHandle}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt><Eyebrow as="span" size="label">{labels.address}</Eyebrow></dt>
              <dd className="text-body text-fg-muted">
                <a href={address.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-gold-soft">
                  {address.street}
                  <br />
                  {address.neighborhood} · {address.city} – {address.state}
                  <br />
                  {address.zip}
                </a>
                <span className="mt-1.5 block text-fg-muted/80">{address.landmark}.</span>
              </dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt><Eyebrow as="span" size="label">{labels.hours}</Eyebrow></dt>
              <dd className="flex flex-col gap-1 text-body text-fg-muted">
                {contact.openingHours.map((slot) => (
                  <span key={slot.days}>
                    {slot.days}: {slot.hours}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-10">
            <Button
              href={buildWhatsAppUrl(whatsappMessage)}
              external
              size="lg"
              icon={<WhatsAppIcon />}
              className="max-lg:h-control-md max-lg:w-full"
            >
              {labels.ctaLabel}
            </Button>
          </div>
        </div>

        <MapEmbed
          src={address.mapsEmbedUrl}
          title={labels.mapTitle}
          placeholder={labels.mapPlaceholder}
          className="aspect-[4/3] lg:aspect-auto lg:min-h-[30rem]"
        />
      </div>
    </Section>
  );
}
