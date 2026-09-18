import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/shared/icons";
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

  return (
    <Section id={id}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-[4.375rem]">
        <div>
          <SectionHeading copy={copy} titleMaxCh={20} className="mb-8 lg:mb-10" />

          <dl className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:gap-8">
            <div className="flex flex-col gap-2">
              <dt><Eyebrow as="span" size="label">{labels.whatsapp}</Eyebrow></dt>
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
              <dt><Eyebrow as="span" size="label">{labels.instagram}</Eyebrow></dt>
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

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line-strong bg-surface-2 lg:aspect-auto lg:min-h-[30rem]">
          {address.mapsEmbedUrl ? (
            <iframe
              src={address.mapsEmbedUrl}
              title={labels.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.4] contrast-[0.9]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Eyebrow as="span" className="text-gold/45">{labels.mapPlaceholder}</Eyebrow>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
