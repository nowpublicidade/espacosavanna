"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppIcon } from "@/components/shared/icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { FormField } from "@/types/content";

type ContactFormProps = {
  fields: FormField[];
  /** Primeira linha da mensagem enviada ao WhatsApp. */
  intro: string;
  submitLabel: string;
  /** Texto discreto abaixo do botão explicando o envio. */
  note?: string;
};

/**
 * Formulário sem backend: monta a mensagem com os campos preenchidos e
 * abre o WhatsApp — mantém um único canal de conversão (Documento 02, §15).
 */
export function ContactForm({ fields, intro, submitLabel, note }: ContactFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = fields
      .map((field) => {
        const value = values[field.name]?.trim();
        return value ? `${field.label}: ${value}` : null;
      })
      .filter(Boolean);
    const message = [intro, "", ...lines].join("\n");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate={false}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {fields.map((field) => {
          const id = `field-${field.name}`;
          const common = {
            id,
            name: field.name,
            required: field.required,
            placeholder: field.placeholder,
            autoComplete: field.autoComplete,
            value: values[field.name] ?? "",
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
              setValues((current) => ({ ...current, [field.name]: event.target.value })),
          };
          return (
            <div key={field.name} className={field.type === "textarea" ? "flex flex-col gap-2.5 lg:col-span-2" : "flex flex-col gap-2.5"}>
              <Label htmlFor={id}>
                {field.label}
                {field.required ? <span className="text-gold-soft/60"> *</span> : null}
              </Label>
              {field.type === "textarea" ? (
                <Textarea {...common} rows={5} />
              ) : (
                <Input {...common} type={field.type} inputMode={field.type === "tel" ? "tel" : undefined} />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-start gap-3.5">
        <Button type="submit" size="lg" icon={<WhatsAppIcon />} className="max-lg:h-control-md max-lg:w-full">
          {submitLabel}
        </Button>
        {note ? <p className="max-w-[52ch] text-caption text-fg-faint">{note}</p> : null}
      </div>
    </form>
  );
}
