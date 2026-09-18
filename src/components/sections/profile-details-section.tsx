import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/shared/section";

type ProfileDetailsSectionProps = {
  about: { eyebrow: string; paragraphs: string[] };
  service?: { eyebrow: string; items: string[] };
  id?: string;
};

/**
 * Corpo da página individual: apresentação em texto corrido e, ao lado,
 * o perfil de atendimento como lista com marcadores "·" do layout.
 */
export function ProfileDetailsSection({ about, service, id = "sobre" }: ProfileDetailsSectionProps) {
  return (
    <Section id={id} surface="alt">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-[4.375rem]">
        <div>
          <Eyebrow className="mb-4">{about.eyebrow}</Eyebrow>
          <div className="flex max-w-[58ch] flex-col gap-5 text-body text-fg-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        {service ? (
          <div className="lg:border-l lg:border-line lg:pl-[2.75rem]">
            <Eyebrow className="mb-4">{service.eyebrow}</Eyebrow>
            <ul className="flex flex-col gap-2.5">
              {service.items.map((item) => (
                <li key={item} className="text-body text-foreground/58">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
