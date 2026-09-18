import type { NavItem } from "@/types/content";

/** Menu desktop — Documento 01, item 13. */
export const mainNav: NavItem[] = [
  { label: "O Espaço", href: "/o-espaco" },
  { label: "Terapeutas", href: "/terapeutas" },
  { label: "Experiências", href: "/experiencias" },
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contato", href: "/contato" },
];

/** Links secundários exibidos apenas no footer e no menu mobile. */
export const secondaryNav: NavItem[] = [
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { label: "Aluguel de Salas", href: "/aluguel-de-salas" },
];

export const footerNav = {
  navigate: [...mainNav, ...secondaryNav] as NavItem[],
};
