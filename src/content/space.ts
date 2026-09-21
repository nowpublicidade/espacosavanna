import type { Feature, ImageAsset, SectionCopy } from "@/types/content";
import { ctaPhoto, heroes, mosaic } from "@/data/images";
import { ctas } from "@/content/home";

/**
 * Conteúdo institucional da página O Espaço (Documento 02, item 7;
 * Documento 03, item 9). Textos de referência a revisar com o cliente.
 */

export const hero = {
  eyebrow: "O Espaço",
  title: "Um espaço criado",
  titleAccent: "para experiências únicas.",
  text: "O Espaço Savanna une conforto, privacidade e uma estrutura preparada para receber cada visitante com atenção aos detalhes.",
  cta: ctas.schedule,
  image: heroes.space.landscape,
  imageMobile: heroes.space.portrait,
};

export const concept = {
  eyebrow: "Conceito",
  title: "Um lugar pensado para o tempo desacelerar.",
  paragraphs: [
    "Cada ambiente foi planejado para que a experiência comece antes do atendimento: na chegada discreta, na luz quente, no silêncio dos corredores.",
    "Materiais nobres, tecidos macios e uma atmosfera intimista compõem um espaço onde privacidade e conforto caminham juntos.",
  ],
} satisfies SectionCopy & { paragraphs: string[] };

export const structure = {
  eyebrow: "Estrutura",
  title: "Ambientes privativos, preparados para o seu bem-estar.",
  text: "Suítes individuais, área de banho e climatização em todos os espaços. Tudo organizado para que você se sinta acolhido do início ao fim.",
  cta: { label: "Ver galeria", href: "/galeria" },
  images: mosaic,
} satisfies SectionCopy & { images: readonly [ImageAsset, ImageAsset, ImageAsset] };

export const differentials = {
  eyebrow: "Diferenciais",
  title: "Mais do que um atendimento, uma experiência.",
  items: [
    {
      icon: "lock",
      title: "Privacidade",
      shortTitle: "Privacidade",
      description: "Um ambiente reservado para você aproveitar cada momento com tranquilidade.",
    },
    {
      icon: "bloom",
      title: "Conforto",
      shortTitle: "Conforto",
      description: "Espaços preparados para oferecer uma experiência completa.",
    },
    {
      icon: "person",
      title: "Atendimento personalizado",
      shortTitle: "Personalizado",
      description: "Cada detalhe pensado para tornar sua visita única.",
    },
  ] satisfies Feature[],
} satisfies SectionCopy & { items: Feature[] };

export const gallery = {
  eyebrow: "Galeria",
  title: "Arquitetura, luz e detalhes.",
  cta: { label: "Ver galeria completa", href: "/galeria" },
} satisfies SectionCopy;

export const finalCta = {
  title: "Venha conhecer o Espaço Savanna.",
  text: "Entre em contato e consulte nossa disponibilidade de horários.",
  cta: ctas.scheduleNow,
  image: ctaPhoto,
} satisfies SectionCopy & { image: ImageAsset };
