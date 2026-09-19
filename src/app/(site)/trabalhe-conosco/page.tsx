import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TextSection } from "@/components/sections/text-section";
import { FormSection } from "@/components/sections/form-section";
import * as content from "@/content/careers";
import { pages } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata(pages.careers);

/** Trabalhe Conosco — cadastro de profissionais (Documento 02, item 12). */
export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Trabalhe Conosco", path: pages.careers.path }])} />
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
