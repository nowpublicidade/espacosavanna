import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloating } from "@/components/layout/whatsapp-floating";
import { ctas, footer } from "@/content/home";
import { mainNav, secondaryNav } from "@/data/navigation";
import { experiences } from "@/data/experiences";
import { contact, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Casca das páginas públicas: Header, conteúdo e Footer.
 * As rotas /dev ficam fora deste grupo e montam a própria casca.
 */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  const bar = siteConfig.features.whatsappBar;

  return (
    <>
      <Header nav={mainNav} secondaryNav={secondaryNav} cta={ctas.schedule} />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer
        nav={mainNav}
        experiences={experiences}
        contact={contact}
        tagline={footer.tagline}
        ageNotice={siteConfig.ageNotice}
        siteName={siteConfig.name}
        className={cn(bar && "max-lg:pb-[7.5rem]")}
      />
      <WhatsAppFloating cta={ctas.schedule} />
    </>
  );
}
