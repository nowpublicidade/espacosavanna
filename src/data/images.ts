import type { ImageAsset } from "@/types/content";

/**
 * Fotografias do site (public/images). Os originais entregues ficam em
 * "savanna img/"; aqui entram as versões otimizadas (JPG, ≤ 2400px).
 * `focal` posiciona o recorte (object-position) por dispositivo.
 */
function photo(src: string, alt: string, width: number, height: number, focal?: string): ImageAsset {
  return { src, alt, width, height, focal };
}

export const brand = {
  /**
   * Logo oficial. Fonte: design/logo-original.png (2048×618, com margens
   * transparentes); para a web o lettering foi recortado e exportado em
   * 1024×255 (proporção 4,14:1 — a mesma do layout aprovado).
   */
  logo: {
    src: "/brand/logo.png",
    alt: "Espaço Savanna",
    width: 1024,
    height: 255,
  } satisfies ImageAsset,
};

/** Heros: versão paisagem (computador) + retrato (celular). */
export const heroes = {
  home: {
    landscape: photo("/images/hero/home-landscape.jpg", "Suíte do Espaço Savanna com jardim interno e luz de velas", 1536, 1024, "center"),
    portrait: photo("/images/hero/home-portrait.jpg", "Suíte do Espaço Savanna com jardim interno e luz de velas", 1122, 1402, "center 30%"),
  },
  space: {
    landscape: photo("/images/hero/espaco-landscape.jpg", "Sala de atendimento com futon, madeira e plantas", 1536, 1024, "70% center"),
    portrait: photo("/images/hero/espaco-portrait.jpg", "Sala de atendimento com futon, madeira e plantas", 1122, 1402, "center 40%"),
  },
  pages: {
    landscape: photo("/images/hero/paginas-landscape.jpg", "Recepção do Espaço Savanna com velas e objetos de madeira", 1536, 1024, "center"),
    portrait: photo("/images/hero/paginas-portrait.jpg", "Recepção do Espaço Savanna com velas e objetos de madeira", 1122, 1402, "center 45%"),
  },
};

/** Mosaico "O Espaço": 1 vertical + 2 horizontais. */
export const mosaic = [
  photo("/images/mosaic/recepcao.jpg", "Recepção com o painel Espaço Savanna", 1122, 1402, "center"),
  photo("/images/mosaic/sala-comoda.jpg", "Sala de estar com cômoda e poltrona", 1536, 1024, "center"),
  photo("/images/mosaic/suite.jpg", "Suíte com futon e espelho", 1536, 1024, "center"),
] as const;

export const galleryPhotos: ImageAsset[] = [
  photo("/images/gallery/galeria-01.jpg", "Suíte com painel de madeira e papel de parede botânico", 1536, 1024),
  photo("/images/gallery/galeria-02.jpg", "Sala de estar com objetos artesanais e velas", 1536, 1024),
  photo("/images/gallery/galeria-03.jpg", "Detalhe da cômoda rústica e plantas", 1536, 1024),
  photo("/images/gallery/galeria-04.jpg", "Recepção iluminada com o painel Espaço Savanna", 1536, 1024),
  photo("/images/gallery/galeria-05.jpg", "Sala com poltrona, cômoda e painel de madeira", 1536, 1024),
  photo("/images/gallery/galeria-06.jpg", "Corredor com flores e luz natural", 1536, 1024),
  photo("/images/gallery/galeria-07.jpg", "Suíte com futon, painel de madeira e plantas", 1536, 1024),
  photo("/images/gallery/galeria-08.jpg", "Suíte com espelho e iluminação indireta", 1536, 1024),
];

export const experiencePhotos = {
  "massagem-tantrica": photo("/images/experiences/massagem-tantrica.jpg", "Cama preparada com pétalas, velas e óleos", 1536, 1024, "center 55%"),
  "massagem-relaxante": photo("/images/experiences/massagem-relaxante.jpg", "Massagem relaxante à luz de velas", 1536, 1024, "60% center"),
  "experiencia-sensorial": photo("/images/experiences/experiencia-sensorial.jpg", "Atendimento com velas e aromas", 1536, 1024, "60% center"),
};

export const ctaPhoto = photo("/images/cta/cta-final.jpg", "Cortina e luz quente do ambiente", 2172, 724, "70% center");

/** Fotos das terapeutas: a primeira é a do card; as demais aparecem no perfil. */
const therapistPhoto = (slug: string, index: number, w: number, h: number, focal = "center 20%") =>
  photo(`/images/therapists/${slug}/${slug}-${index}.jpg`, `Foto de ${slug.charAt(0).toUpperCase() + slug.slice(1)}`, w, h, focal);

export const therapistPhotos: Record<string, ImageAsset[]> = {
  adriana: [therapistPhoto("adriana", 1, 941, 1386), therapistPhoto("adriana", 2, 851, 1254), therapistPhoto("adriana", 3, 733, 1080), therapistPhoto("adriana", 4, 851, 1254)],
  babi: [therapistPhoto("babi", 1, 660, 972), therapistPhoto("babi", 3, 653, 962), therapistPhoto("babi", 2, 900, 1326), therapistPhoto("babi", 4, 900, 1326)],
  luana: [therapistPhoto("luana", 1, 768, 1072)],
  manu: [therapistPhoto("manu", 1, 1023, 1428, "center 15%")],
  mariah: [therapistPhoto("mariah", 1, 1023, 1428)],
  maya: [therapistPhoto("maya", 1, 1280, 1787)],
  mily: [therapistPhoto("mily", 2, 900, 1326), therapistPhoto("mily", 1, 900, 1326), therapistPhoto("mily", 3, 983, 1448), therapistPhoto("mily", 4, 983, 1448)],
};
