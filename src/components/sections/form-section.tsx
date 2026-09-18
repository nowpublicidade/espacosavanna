import { ContactForm } from "@/components/shared/contact-form";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { FormField, SectionCopy } from "@/types/content";

type FormSectionProps = {
  copy: SectionCopy;
  fields: FormField[];
  intro: string;
  submitLabel: string;
  note?: string;
  surface?: "base" | "alt";
  id?: string;
};

/** Cabeçalho à esquerda (.8fr) e formulário à direita (1.2fr). */
export function FormSection({ copy, fields, intro, submitLabel, note, surface = "alt", id = "formulario" }: FormSectionProps) {
  return (
    <Section id={id} surface={surface}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-[4.375rem]">
        <SectionHeading copy={copy} titleMaxCh={18} />
        <ContactForm fields={fields} intro={intro} submitLabel={submitLabel} note={note} />
      </div>
    </Section>
  );
}
