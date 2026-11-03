import Image from "next/image";
import { content, type Locale } from "@/lib/content";

/**
 * Illustrative phone mockups drawn with HTML/CSS (no screenshots needed).
 * TODO: replace with real App Store screenshots later — drop PNGs into /public and swap the
 * <PhoneFrame> children for <Image src="/screens/radar.png" ... />.
 */

export function PhoneFrame({
  children,
  className = "",
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative aspect-[9/18.5] w-full overflow-hidden rounded-[2.4rem] border-[6px] border-line-light bg-bg shadow-glow ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
      <div className="h-full w-full pt-9">{children}</div>
    </div>
  );
}

export function RadarScreen({ locale }: { locale: Locale }) {
  const s = content[locale].screens;
  const dots = [
    { x: "28%", y: "30%", c: "bg-amber" },
    { x: "70%", y: "24%", c: "bg-teal" },
    { x: "76%", y: "66%", c: "bg-amber" },
    { x: "34%", y: "74%", c: "bg-teal" },
  ];
  return (
    <div className="flex h-full flex-col px-4 pb-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-wide text-ink">{s.radar}</span>
        <span className="flex items-center gap-1.5 rounded-full bg-live/15 px-2 py-0.5 text-[10px] font-bold text-live">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-live" />
          {s.live}
        </span>
      </div>

      <div className="relative mx-auto my-auto aspect-square w-full max-w-[210px]">
        <div className="absolute inset-0 rounded-full border border-line-light" />
        <div className="absolute inset-[16%] rounded-full border border-line-light" />
        <div className="absolute inset-[32%] rounded-full border border-line-light" />
        <div className="absolute inset-[44%] rounded-full border border-amber/60" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-line" />
        <div className="absolute bottom-0 left-1/2 top-0 w-px bg-line" />
        <div
          className="absolute inset-0 animate-sweep rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(245,158,11,0.35), rgba(245,158,11,0) 28%, rgba(245,158,11,0) 100%)",
          }}
        />
        {dots.map((d, i) => (
          <span
            key={i}
            className={`absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${d.c}`}
            style={{ left: d.x, top: d.y }}
          />
        ))}
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink ring-4 ring-ink/20" />
      </div>

      <div className="rounded-xl border border-line bg-card px-3 py-2.5 text-center">
        <p className="text-lg font-black text-amber">4</p>
        <p className="text-[11px] text-ink-2">{s.nearby}</p>
      </div>
    </div>
  );
}

export function ClueScreen({ locale }: { locale: Locale }) {
  const s = content[locale].screens;
  return (
    <div className="flex h-full flex-col gap-3 px-4 pb-5">
      <span className="text-xs font-bold tracking-wide text-ink">{s.clue}</span>
      <div className="rounded-2xl border border-line bg-card p-3">
        <div className="mb-3 h-24 rounded-xl bg-gradient-to-br from-amber-dark/40 via-card to-teal/30" />
        <p className="text-[13px] leading-5 text-ink">{s.clueText}</p>
      </div>
      <div className="rounded-2xl border border-line bg-card p-3">
        <p className="text-[11px] text-ink-2">{s.distance}</p>
        <p className="mt-0.5 text-3xl font-black text-amber">240 m</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
          <div className="h-full w-[68%] rounded-full bg-amber" />
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between rounded-xl border border-amber/30 bg-amber/10 px-3 py-2.5">
        <span className="text-xs font-semibold text-amber">{s.connect}</span>
        <span className="text-[11px] text-ink-2">
          {s.tokens}: <strong className="text-ink">2/3</strong>
        </span>
      </div>
    </div>
  );
}

export function PrizeScreen({ locale }: { locale: Locale }) {
  const s = content[locale].screens;
  return (
    <div className="flex h-full flex-col items-center gap-2 px-4 pb-5 text-center">
      <span className="flex items-center gap-1.5 rounded-full bg-live/15 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-live">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-live" />
        {s.live} · {s.prize.toUpperCase()}
      </span>
      <Image
        src="/prize-pot.png"
        alt=""
        width={480}
        height={445}
        className="mt-2 h-auto w-[78%]"
        sizes="200px"
      />
      <p className="text-4xl font-black tracking-tight text-amber">€1,250</p>
      <p className="text-[11px] text-ink-2">
        <strong className="text-ink">112</strong> {s.hunters}
      </p>
      <div className="mt-auto w-full rounded-xl border border-line bg-card px-3 py-2 text-[11px] text-ink-2">
        €250 + €10 × 100
      </div>
    </div>
  );
}
