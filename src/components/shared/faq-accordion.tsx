import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/types/content";

type FaqAccordionProps = {
  items: FaqItem[];
  /** Índice do item aberto inicialmente (layout abre o primeiro). */
  defaultOpen?: number | null;
  className?: string;
};

/** Lista de perguntas frequentes sobre o Accordion da marca. */
export function FaqAccordion({ items, defaultOpen = 0, className }: FaqAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen === null ? undefined : `faq-${defaultOpen}`}
      className={className}
    >
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
