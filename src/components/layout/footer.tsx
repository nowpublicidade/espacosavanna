import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Logo } from "@/components/shared/logo";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";
import type { Experience, NavItem, SiteContact } from "@/types/content";

type FooterProps = {
  nav: NavItem[];
  experiences: Pick<Experience, "slug" | "name">[];
  contact: SiteContact;
  tagline: string;
  ageNotice: string;
  siteName: string;
};

/**
 * Rodapé do layout aprovado.
 * Desktop: logo 46 + tagline · colunas Navegar / Experiências / Contato ·
 * barra inferior com © e aviso de maioridade.
 * Mobile: centralizado, logo 62, links em coluna, aviso em uma linha.
 */
export function Footer({ nav, experiences, contact, tagline, ageNotice, siteName }: FooterProps) {
  const year = new Date().getFullYear();
  const contactLinks = [
    { label: "WhatsApp", href: buildWhatsAppUrl(whatsappMessages.default), external: true },
    { label: "Instagram", href: contact.instagramUrl, external: true },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-site px-gutter pt-11 pb-10 text-center lg:pt-16 lg:text-left">
        <div className="flex flex-col items-center gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_auto_auto] lg:items-start lg:gap-[4.375rem] lg:pb-12">
          <div className="flex flex-col items-center lg:items-start">
            <Logo size="footer-mobile" className="lg:hidden" />
            <Logo size="footer" className="max-lg:hidden" />
            <p className="mt-5 max-w-[30ch] text-caption leading-[1.7] text-foreground/50 lg:mt-6 lg:max-w-[32ch] lg:text-[0.875rem] lg:leading-[1.75]">
              {tagline}
            </p>
          </div>

          <FooterColumn title="Navegar" items={nav} className="lg:flex" />
          <FooterColumn
            title="Experiências"
            items={experiences.map((e) => ({ label: e.name, href: `/experiencias/${e.slug}` }))}
            className="hidden lg:flex"
          />
          <FooterColumn title="Contato" items={contactLinks} className="hidden lg:flex" />
        </div>

        <div className="mt-7 flex flex-col items-center gap-2 border-t border-line pt-5 text-[0.625rem] uppercase tracking-[0.1em] text-foreground/32 lg:mt-0 lg:flex-row lg:justify-between lg:gap-10 lg:pt-6 lg:text-eyebrow lg:tracking-[0.12em]">
          <span>© {year} {siteName}</span>
          <span className="max-lg:hidden">{ageNotice}</span>
          <span className="lg:hidden">· {ageNotice}</span>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  items: { label: string; href: string; external?: boolean }[];
  className?: string;
};

function FooterColumn({ title, items, className }: FooterColumnProps) {
  return (
    <div className={`flex flex-col items-center gap-[0.5625rem] lg:items-start lg:gap-[0.8125rem] ${className ?? ""}`}>
      <Eyebrow as="span" size="label" className="mb-1.5 max-lg:hidden">
        {title}
      </Eyebrow>
      {items.map((item) =>
        item.external ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] text-foreground/55 hover:text-gold-soft lg:text-[0.84375rem] lg:text-fg-muted"
          >
            {item.label}
          </a>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="text-[0.75rem] text-foreground/55 hover:text-gold-soft lg:text-[0.84375rem] lg:text-fg-muted"
          >
            {item.label}
          </Link>
        ),
      )}
    </div>
  );
}
