import { Icon } from "@/components/shared/icons";
import { REVEAL_STAGGER, Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { IconName } from "@/types/content";

export type Note = {
  icon: IconName;
  title: string;
  text: string;
};

type NoteCardsProps = {
  notes: readonly Note[];
  className?: string;
};

/** Avisos em cartão de contorno dourado: ícone à esquerda, título e texto. */
export function NoteCards({ notes, className }: NoteCardsProps) {
  return (
    <ul className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-5", className)}>
      {notes.map((note, index) => (
        <Reveal
          as="li"
          key={note.title}
          delay={index * REVEAL_STAGGER}
          className="flex gap-4 rounded-lg border border-gold/18 px-4 py-[1.125rem] lg:gap-5 lg:px-6 lg:py-6"
        >
          <Icon name={note.icon} className="mt-0.5 size-6 shrink-0 text-gold lg:size-7" />
          <div className="flex flex-col gap-1.5">
            <span className="font-heading text-[1.125rem] leading-tight text-gold-soft lg:text-[1.25rem]">
              {note.title}
            </span>
            <p className="text-[0.875rem] leading-[1.65] text-fg-muted">{note.text}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
