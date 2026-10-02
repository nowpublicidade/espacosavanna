import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

type MapEmbedProps = {
  /** URL de embed do Google Maps. Vazia → mostra o rótulo de espera. */
  src: string;
  title: string;
  /** Rótulo exibido quando ainda não há embed configurado. */
  placeholder: string;
  className?: string;
};

/** Mapa do endereço, dessaturado para não competir com a fotografia. */
export function MapEmbed({ src, title, placeholder, className }: MapEmbedProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-line-strong bg-surface-2",
        className,
      )}
    >
      {src ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full grayscale-[0.4] contrast-[0.9]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Eyebrow as="span" className="text-gold/45">
            {placeholder}
          </Eyebrow>
        </div>
      )}
    </div>
  );
}
