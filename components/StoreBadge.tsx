import { content, type Locale } from "@/lib/content";
import { SITE } from "@/lib/config";

/**
 * Placeholder App Store button (links to SITE.appStoreUrl).
 * TODO: before launch, replace with Apple's official "Download on the App Store" badge artwork
 * (https://developer.apple.com/app-store/marketing/guidelines/) — Apple requires the official badge.
 */
export function StoreBadge({ locale, className = "" }: { locale: Locale; className?: string }) {
  const t = content[locale].badge;
  return (
    <a
      href={SITE.appStoreUrl}
      rel="noopener"
      aria-label={t.aria}
      className={`group inline-flex items-center gap-3 rounded-xl border border-line-light bg-black px-5 py-3 transition hover:border-amber ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 shrink-0 text-amber"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
        <path d="M12 8v6m0 0-2.5-2.5M12 14l2.5-2.5" />
        <path d="M10.5 18.5h3" />
      </svg>
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[11px] text-ink-2">{t.small}</span>
        <span className="text-lg font-bold tracking-tight text-ink">{t.big}</span>
      </span>
    </a>
  );
}
