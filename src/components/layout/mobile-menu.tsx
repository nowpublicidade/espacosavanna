"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { CtaLink } from "@/components/shared/cta-link";
import type { Cta, NavItem } from "@/types/content";

type MobileMenuProps = {
  nav: NavItem[];
  secondaryNav?: NavItem[];
  cta: Cta;
};

/**
 * Menu mobile: gatilho hambúrguer do layout (três linhas, a última menor)
 * e painel com links em Cormorant, links secundários e CTA WhatsApp fixado
 * na base — "menu simplificado com destaque para WhatsApp" (Documento 01).
 */
export function MobileMenu({ nav, secondaryNav = [], cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Abrir menu"
        className="-mr-2.5 flex flex-col items-end gap-[5px] p-2.5 outline-none focus-visible:ring-2 focus-visible:ring-gold/70 rounded-sm"
      >
        <span className="block h-[1.5px] w-[22px] bg-gold-soft" />
        <span className="block h-[1.5px] w-[22px] bg-gold-soft" />
        <span className="block h-[1.5px] w-[14px] bg-gold-soft" />
      </SheetTrigger>

      <SheetContent
        side="right"
        aria-describedby={undefined}
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">Navegação do site</SheetDescription>

        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <Logo size="header-mobile" />
          <SheetClose
            aria-label="Fechar menu"
            className="-mr-2.5 p-2.5 text-gold-soft outline-none focus-visible:ring-2 focus-visible:ring-gold/70 rounded-sm"
          >
            <X className="size-5" strokeWidth={1.5} aria-hidden />
          </SheetClose>
        </div>

        <nav aria-label="Principal" className="flex flex-1 flex-col overflow-y-auto px-5 pt-8 pb-6">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line-subtle">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-heading text-[1.75rem] leading-none text-foreground hover:text-gold-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {secondaryNav.length > 0 ? (
            <ul className="mt-6 flex flex-col gap-3">
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-small text-fg-muted hover:text-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </nav>

        <div className="border-t border-line px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <CtaLink cta={cta} size="md" fullWidth />
        </div>
      </SheetContent>
    </Sheet>
  );
}
