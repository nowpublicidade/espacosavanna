import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { MapEmbed } from "@/components/shared/map-embed";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppIcon } from "@/components/shared/icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { SectionCopy, SiteContact } from "@/types/content";

type LocationSectionProps = {
  copy: SectionCopy;
  contact: SiteContact;
  labels: {
    address: string;
    hours: string;
    directions: string;
    whatsapp: string;
    mapTitle: string;
    mapPlaceholder: string;
  };
  whatsappMessage: string;
  surface?: "base" | "alt";
  id?: string;
};

/**
 * "Localização" da Home (Documento 01 §4 e Documento 02 §6): endereço legível
 * de imediato, horários, rota e mapa — para quem chega ao site já procurando
 * onde fica, sem precisar abrir a página de Contato.
 */
export function LocationSection({
  copy,
  contact,
  labels,
  whatsappMessage,
  surface = "base",
  id = "localizacao",
}: LocationSectionProps) {
  const { address } = contact;

  return (
    <Section id={id} surface={surface} bordered>
      {/* Mobile: endereço → mapa → ações. Desktop: texto à esquerda, mapa à direita. */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-[4.375rem] lg:gap-y-10">
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <SectionHeading copy={copy} titleMaxCh={22} />

          <div className="mt-7 flex flex-col gap-6 lg:mt-9 lg:flex-row lg:gap-12">
            <div className="flex flex-col gap-2">
              <Eyebrow as="span" size="label">
                {labels.address}
              </Eyebrow>
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-[1.375rem] leading-[1.3] text-foreground hover:text-gold-soft lg:text-[1.5rem]"
              >
                {address.street}
              </a>
              <p className="text-body text-fg-muted">
                {address.neighborhood} · {address.city} – {address.state}
                <br />
                CEP {address.zip}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Eyebrow as="span" size="label">
                {labels.hours}
              </Eyebrow>
              <div className="flex flex-col gap-1 text-body text-fg-muted">
                {contact.openingHours.map((slot) => (
                  <span key={slot.days}>
                    {slot.days}: {slot.hours}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        <MapEmbed
          src={address.mapsEmbedUrl}
          title={labels.mapTitle}
          placeholder={labels.mapPlaceholder}
          className="aspect-[4/3] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:aspect-[16/11]"
        />

        <div className="flex flex-col gap-3 lg:col-start-1 lg:row-start-2 lg:flex-row lg:gap-3.5 lg:self-start">
            <Button
              href={address.mapsUrl}
              external
              variant="secondary"
              size="md"
              className="max-lg:w-full"
            >
              {labels.directions}
            </Button>
            <Button
              href={buildWhatsAppUrl(whatsappMessage)}
              external
              size="md"
              icon={<WhatsAppIcon />}
              className="max-lg:w-full"
            >
              {labels.whatsapp}
            </Button>
        </div>
      </div>
    </Section>
  );
}
