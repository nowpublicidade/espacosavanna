import { Logo } from "@/components/shared/logo";
import { CtaLink } from "@/components/shared/cta-link";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { NavLink } from "@/components/layout/nav-link";
import type { Cta, NavItem } from "@/types/content";

type HeaderProps = {
  nav: NavItem[];
  secondaryNav?: NavItem[];
  cta: Cta;
};

/**
 * Header sticky do layout aprovado: fundo escuro translúcido com blur,
 * linha dourada inferior. Desktop: logo · nav · CTA outline 48px.
 * Mobile e telas até 1279px: logo 38px · hambúrguer (abre o MobileMenu).
 * O modo desktop entra em 1280px — abaixo disso a navegação de 6 itens
 * mais o CTA não cabem sem quebrar (o layout aprovado define apenas 1440).
 */
export function Header({ nav, secondaryNav = [], cta }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-(--overlay-header) supports-backdrop-filter:backdrop-blur-[14px]">
      <div className="mx-auto flex w-full max-w-site items-center justify-between gap-10 px-5 py-3.5 xl:px-gutter xl:py-[1.125rem]">
        <Logo size="header-mobile" priority className="xl:hidden" />
        <Logo size="header" priority className="max-xl:hidden" />

        <nav aria-label="Principal" className="hidden items-center gap-10 xl:flex">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="text-nav text-fg-nav transition-colors hover:text-gold-soft"
              activeClassName="text-gold hover:text-gold"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:block">
          <CtaLink cta={cta} variant="secondary" size="sm" className="border-gold/50" />
        </div>

        <div className="xl:hidden">
          <MobileMenu nav={nav} secondaryNav={secondaryNav} cta={cta} />
        </div>
      </div>
    </header>
  );
}
