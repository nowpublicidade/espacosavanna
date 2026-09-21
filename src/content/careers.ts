import type { FormField, ImageAsset, SectionCopy } from "@/types/content";
import { ctaPhoto, heroes } from "@/data/images";

/** Conteúdo de Trabalhe Conosco (Documento 02 §12, Documento 03 §13). */

export const hero = {
  eyebrow: "Trabalhe conosco",
  title: "Faça parte do",
  titleAccent: "Espaço Savanna.",
  text: "Buscamos profissionais comprometidas com atendimento de qualidade, responsabilidade e uma experiência diferenciada.",
  image: heroes.pages.landscape,
  imageMobile: heroes.pages.portrait,
};

export const form = {
  eyebrow: "Cadastro",
  title: "Conte um pouco sobre você.",
  text: "Preencha os dados abaixo. As informações seguem diretamente para a nossa equipe pelo WhatsApp, com total discrição.",
  intro: "Olá! Tenho interesse em fazer parte da equipe do Espaço Savanna.",
  submitLabel: "Enviar cadastro",
  note: "Ao enviar, o WhatsApp será aberto com a mensagem preenchida para você revisar antes de enviar.",
  fields: [
    { name: "nome", label: "Nome", type: "text", required: true, autoComplete: "name" },
    { name: "telefone", label: "Telefone", type: "tel", required: true, autoComplete: "tel", placeholder: "(00) 00000-0000" },
    { name: "instagram", label: "Instagram", type: "text", placeholder: "@" },
    { name: "experiencia", label: "Experiência profissional", type: "text", placeholder: "Áreas e tempo de atuação" },
    { name: "mensagem", label: "Mensagem", type: "textarea", placeholder: "Conte um pouco sobre você" },
  ] satisfies FormField[],
} satisfies SectionCopy & { intro: string; submitLabel: string; note: string; fields: FormField[] };

export const values = {
  eyebrow: "O que valorizamos",
  title: "Cuidado, discrição e profissionalismo.",
  paragraphs: [
    "Trabalhamos com uma equipe selecionada, em um ambiente que preza pelo respeito, pela privacidade e pela qualidade de cada atendimento.",
    "Oferecemos estrutura completa, ambiente reservado e uma rotina organizada para que você possa se dedicar ao que faz de melhor.",
  ],
} satisfies SectionCopy & { paragraphs: string[] };

export const image: ImageAsset = ctaPhoto;
