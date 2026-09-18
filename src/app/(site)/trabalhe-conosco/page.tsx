import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TextSection } from "@/components/sections/text-section";
import { FormSection } from "@/components/sections/form-section";
import * as content from "@/content/careers";
import { pages } from "@/content/pages";

export const metadata: Metadata = {
  title: { absolute: pages.careers.title },
  description: pages.careers.description,
  alternates: { canonical: pages.careers.path },
};

/** Trabalhe Conosco — cadastro de profissionais (Documento 02, item 12). */
export default function CareersPage() {
  return (
    <>
      <Hero content={content.hero} size="compact" id="trabalhe-conosco-hero" />
      <TextSection copy={content.values} paragraphs={content.values.paragraphs} surface="base" id="valores" />
      <FormSection
        copy={content.form}
        fields={content.form.fields}
        intro={content.form.intro}
        submitLabel={content.form.submitLabel}
        note={content.form.note}
        id="cadastro"
      />
    </>
  );
}
