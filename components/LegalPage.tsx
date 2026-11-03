import { SITE } from "@/lib/config";

export function LegalPage({
  title,
  intro,
  updated = true,
  children,
}: {
  title: string;
  intro?: string;
  updated?: boolean;
  children: React.ReactNode;
}) {
  return (
    <main id="main" className="container-x max-w-3xl py-14 lg:py-20">
      <p className="text-xs font-bold uppercase tracking-widest text-amber">BOUNTY</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
      {updated && (
        <p className="mt-3 text-sm text-ink-3">
          Last updated: <time dateTime={SITE.legalUpdatedISO}>{SITE.legalUpdated}</time>
        </p>
      )}
      {intro && <p className="mt-6 text-lg leading-8 text-ink-2">{intro}</p>}
      <div className="prose-legal mt-4">{children}</div>
    </main>
  );
}
