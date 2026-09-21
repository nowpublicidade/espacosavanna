import type { ImageAsset } from "@/types/content";
import { galleryPhotos } from "@/data/images";

/**
 * Fotografias do espaço. A ordem define a composição da galeria
 * (a 1ª e a 6ª ganham destaque 2×2).
 */
export const galleryImages: ImageAsset[] = galleryPhotos;

/** Recorte usado na página O Espaço. */
export const spaceGallery = galleryImages.slice(0, 5);
