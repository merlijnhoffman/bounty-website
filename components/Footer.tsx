import Image from "next/image";
import Link from "next/link";
import { content, type Locale } from "@/lib/content";
import { LINKS, SITE } from "@/lib/config";

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale];
  const home = t.homePath;
  const anchor = (id: string) => (home === "/" ? `/#${id}` : `${home}#${id}`);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href={home} className="inline-flex items-center gap-2.5" aria-label="BOUNTY home">
            <Image src="/icon-512.png" alt="" width={32} height={32} className="h-8 w-8 rounded-lg" />
            <span className="text-lg font-black tracking-wide">BOUNTY</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-ink-2">{t.footer.tagline}</p>
          <p className="mt-2 text-sm font-semibold text-amber">{locale === "nl" ? content.nl.hero.line2 : content.en.hero.line2}</p>
        </div>

        <nav aria-label={t.footer.product}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-ink-3">{t.footer.product}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href={anchor("how")} className="text-ink-2 hover:text-amber">
                {t.nav.how}
              </Link>
            </li>
            <li>
              <Link href={anchor("features")} className="text-ink-2 hover:text-amber">
                {t.nav.features}
              </Link>
            </li>
            <li>
              <Link href={anchor("faq")} className="text-ink-2 hover:text-amber">
                {t.nav.faq}
              </Link>
            </li>
            <li>
              <a href={SITE.appStoreUrl} className="text-ink-2 hover:text-amber" rel="noopener">
                App Store
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label={t.footer.legal}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-ink-3">{t.footer.legal}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href={LINKS.privacy} className="text-ink-2 hover:text-amber">
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={LINKS.terms} className="text-ink-2 hover:text-amber">
                {t.footer.terms}
              </Link>
            </li>
            <li>
              <Link href={LINKS.support} className="text-ink-2 hover:text-amber">
                {t.footer.support}
              </Link>
            </li>
            <li>
              <Link href={LINKS.deleteAccount} className="text-ink-2 hover:text-amber">
                {t.footer.deleteAccount}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.legalName}. {t.footer.rights}
          </p>
          <p>{t.footer.legalNote}</p>
        </div>
      </div>
    </footer>
  );
}
