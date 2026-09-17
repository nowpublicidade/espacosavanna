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
 * Mobile: logo 38px · hambúrguer (abre o MobileMenu).
 */
export function Header({ nav, secondaryNav = [], cta }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-(--overlay-header) supports-backdrop-filter:backdrop-blur-[14px]">
      <div className="mx-auto flex w-full max-w-site items-center justify-between gap-10 px-5 py-3.5 lg:px-gutter lg:py-[1.125rem]">
        <Logo size="header-mobile" priority className="lg:hidden" />
        <Logo size="header" priority className="max-lg:hidden" />

        <nav aria-label="Principal" className="hidden items-center gap-10 lg:flex">
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

        <div className="hidden lg:block">
          <CtaLink cta={cta} variant="secondary" size="sm" className="border-gold/50" />
        </div>

        <div className="lg:hidden">
          <MobileMenu nav={nav} secondaryNav={secondaryNav} cta={cta} />
        </div>
      </div>
    </header>
  );
}
