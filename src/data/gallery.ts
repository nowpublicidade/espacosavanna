import type { ImageAsset } from "@/types/content";
import { placeholderImage } from "@/data/images";

/**
 * Fotografias do espaço — PLACEHOLDERS até o ensaio fotográfico.
 * A ordem define a composição da galeria (a 1ª e a 6ª ganham destaque).
 */
export const galleryImages: ImageAsset[] = [
  placeholderImage("gallery", "Sala principal com iluminação quente", 3 / 2),
  placeholderImage("gallery", "Detalhe de tecidos e madeira", 1),
  placeholderImage("gallery", "Corredor reservado", 1),
  placeholderImage("gallery", "Área de banho", 1),
  placeholderImage("gallery", "Detalhe de iluminação", 1),
  placeholderImage("gallery", "Suíte de atendimento", 3 / 2),
  placeholderImage("gallery", "Recepção discreta", 1),
  placeholderImage("gallery", "Texturas do ambiente", 1),
];

/** Recorte usado na página O Espaço. */
export const spaceGallery = galleryImages.slice(0, 5);
