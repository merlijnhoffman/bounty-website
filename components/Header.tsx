import Image from "next/image";
import Link from "next/link";
import { content, type Locale } from "@/lib/content";

export function Header({ locale }: { locale: Locale }) {
  const t = content[locale];
  const home = t.homePath;
  const anchor = (id: string) => (home === "/" ? `/#${id}` : `${home}#${id}`);

  const links = [
    { href: anchor("how"), label: t.nav.how },
    { href: anchor("features"), label: t.nav.features },
    { href: anchor("faq"), label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-bg"
      >
        {locale === "nl" ? "Ga naar inhoud" : "Skip to content"}
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href={home} className="flex items-center gap-2.5" aria-label="BOUNTY home">
          <Image
            src="/icon-512.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg"
            priority
          />
          <span className="text-lg font-black tracking-wide">BOUNTY</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-ink-2 transition hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center rounded-lg border border-line bg-surface p-0.5 text-xs font-semibold"
            role="group"
            aria-label={t.footer.language}
          >
            <Link
              href="/"
              hrefLang="en"
              lang="en"
              aria-current={locale === "en" ? "true" : undefined}
              className={`rounded-md px-2.5 py-1.5 ${
                locale === "en" ? "bg-amber text-bg" : "text-ink-2 hover:text-ink"
              }`}
            >
              EN
            </Link>
            <Link
              href="/nl"
              hrefLang="nl"
              lang="nl"
              aria-current={locale === "nl" ? "true" : undefined}
              className={`rounded-md px-2.5 py-1.5 ${
                locale === "nl" ? "bg-amber text-bg" : "text-ink-2 hover:text-ink"
              }`}
            >
              NL
            </Link>
          </div>

          <a href="#download" className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex">
            {t.nav.download}
          </a>
        </div>
      </div>

      {/* Mobile nav: pure HTML, no JS */}
      <nav aria-label="Main mobile" className="container-x flex gap-5 overflow-x-auto pb-3 md:hidden">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="whitespace-nowrap text-sm text-ink-2 hover:text-ink">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
