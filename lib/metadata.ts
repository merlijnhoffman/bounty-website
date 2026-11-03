import type { Metadata } from "next";
import { SITE, absoluteUrl } from "./config";

type Options = {
  title: string;
  description: string;
  path: string;
  locale?: "en" | "nl";
  languages?: Record<string, string>;
  /** Use the title exactly as given (no "| BOUNTY" suffix). */
  absoluteTitle?: boolean;
};

export function buildMetadata(o: Options): Metadata {
  const fullTitle = o.absoluteTitle ? o.title : `${o.title} | ${SITE.name}`;
  return {
    metadataBase: new URL(SITE.url),
    title: fullTitle,
    description: o.description,
    applicationName: SITE.name,
    alternates: { canonical: o.path, languages: o.languages },
    openGraph: {
      title: fullTitle,
      description: o.description,
      url: absoluteUrl(o.path),
      siteName: SITE.name,
      type: "website",
      locale: o.locale === "nl" ? "nl_NL" : "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${SITE.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: o.description,
      images: ["/og-image.png"],
    },
    icons: {
      icon: [
        { url: "/icon.png", sizes: "64x64", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/apple-icon.png",
    },
  };
}
