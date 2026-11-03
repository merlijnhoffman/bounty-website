import Link from "next/link";
import { content, type Locale } from "@/lib/content";
import { LINKS, SITE, absoluteUrl } from "@/lib/config";
import { StoreBadge } from "./StoreBadge";
import { ClueScreen, PhoneFrame, PrizeScreen, RadarScreen } from "./Screens";

const featureIcons = [
  // radar
  <path key="r" d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M12 12 19 5M12 3a9 9 0 1 0 9 9M12 7a5 5 0 1 0 5 5" />,
  // connect
  <path key="c" d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.7-5 6-5s6 2 6 5M17 11a2.5 2.5 0 1 0 0-5M17 15c2.5 0 4 1.7 4 4" />,
  // pot
  <path key="p" d="M12 3v18M16.5 7.5c-.8-1.2-2.4-2-4.5-2-2.5 0-4 1.2-4 3s1.5 2.6 4 3 4 1.2 4 3-1.5 3-4 3c-2.2 0-3.9-.9-4.8-2.3" />,
  // pin
  <path key="m" d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  // bell
  <path key="b" d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16ZM10 21h4" />,
  // shield
  <path key="s" d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3ZM9 12l2 2 4-4" />,
];

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function Landing({ locale }: { locale: Locale }) {
  const t = content[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MobileApplication",
        name: SITE.name,
        operatingSystem: "iOS",
        applicationCategory: "GameApplication",
        description: t.meta.description,
        url: absoluteUrl(t.homePath),
        image: absoluteUrl("/og-image.png"),
        inLanguage: ["en", "nl", "de", "fr", "es"],
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const langs = ["English", "Nederlands", "Deutsch", "Français", "Español"];

  return (
    <main id="main">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-amber/15 blur-[120px]"
        />
        <div className="container-x relative grid items-center gap-14 pb-20 pt-14 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 text-xs font-semibold text-amber">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="sr-only">BOUNTY — </span>
              {t.hero.line1}
              <br />
              <span className="text-amber">{t.hero.line2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-2">{t.hero.sub}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <StoreBadge locale={locale} />
              <a href="#how" className="btn-ghost">
                {t.nav.how}
              </a>
            </div>
            <p className="mt-4 text-xs text-ink-3">{t.hero.note}</p>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-8">
              {t.stats.map((s) => (
                <div key={s.t}>
                  <dt className="text-2xl font-black text-ink">{s.t}</dt>
                  <dd className="mt-1 text-xs leading-5 text-ink-3">{s.d}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center">
            <div className="hidden w-[30%] translate-y-10 -rotate-3 opacity-90 sm:block">
              <PhoneFrame label={`${t.hero.mockupLabel}: ${t.screens.clue}`}>
                <ClueScreen locale={locale} />
              </PhoneFrame>
            </div>
            <div className="z-10 w-[58%] sm:mx-[-4%] sm:w-[40%]">
              <PhoneFrame label={`${t.hero.mockupLabel}: ${t.screens.radar}`}>
                <RadarScreen locale={locale} />
              </PhoneFrame>
            </div>
            <div className="ml-[-8%] w-[40%] translate-y-8 rotate-3 opacity-90 sm:ml-0 sm:w-[30%]">
              <PhoneFrame label={`${t.hero.mockupLabel}: ${t.screens.prize}`}>
                <PrizeScreen locale={locale} />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── How it works ───────── */}
      <section id="how" className="scroll-mt-28 border-t border-line bg-surface/40 py-20 lg:py-28">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-widest text-amber">{t.how.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">{t.how.title}</h2>
          <p className="mt-4 max-w-xl text-ink-2">{t.how.sub}</p>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.how.steps.map((s, i) => (
              <li key={s.t} className="card relative">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber text-lg font-black text-bg">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-2">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── Features ───────── */}
      <section id="features" className="scroll-mt-28 py-20 lg:py-28">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-widest text-amber">{t.features.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">{t.features.title}</h2>
          <p className="mt-4 max-w-xl text-ink-2">{t.features.sub}</p>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((f, i) => (
              <li key={f.t} className="card transition hover:border-amber/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber/10 text-amber">
                  <Icon>{featureIcons[i]}</Icon>
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.t}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-2">{f.d}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold">{t.languages.title}</h3>
              <p className="mt-1 text-sm text-ink-2">{t.languages.sub}</p>
            </div>
            <ul className="flex flex-wrap gap-2" aria-label={t.languages.title}>
              {langs.map((l) => (
                <li
                  key={l}
                  className="rounded-full border border-line-light bg-card px-3.5 py-1.5 text-xs font-semibold text-ink"
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="faq" className="scroll-mt-28 border-t border-line bg-surface/40 py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber">{t.faq.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{t.faq.title}</h2>
            <p className="mt-4 text-sm text-ink-2">
              <Link href={LINKS.support} className="text-amber underline underline-offset-2 hover:text-amber-light">
                {t.footer.support}
              </Link>
              {" · "}
              <Link href={LINKS.privacy} className="text-amber underline underline-offset-2 hover:text-amber-light">
                {t.footer.privacy}
              </Link>
              {" · "}
              <Link href={LINKS.terms} className="text-amber underline underline-offset-2 hover:text-amber-light">
                {t.footer.terms}
              </Link>
            </p>
          </div>

          <div className="space-y-3">
            {t.faq.items.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-line bg-surface open:border-amber/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 text-left font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-card text-lg leading-none text-amber transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-7 text-ink-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Download CTA ───────── */}
      <section id="download" className="scroll-mt-28 py-20 lg:py-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-amber/30 bg-gradient-to-br from-amber/15 via-surface to-surface px-6 py-14 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/20 blur-[90px]"
            />
            <h2 className="relative text-3xl font-black tracking-tight sm:text-5xl">{t.cta.title}</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-ink-2">{t.cta.sub}</p>
            <div className="relative mt-8 flex justify-center">
              <StoreBadge locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
