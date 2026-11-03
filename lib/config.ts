// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for everything you need to replace before launch.
// Search the whole project for "TODO:" to find every placeholder.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "BOUNTY",
  tagline: "Urban Bounty Hunt",

  // TODO: set your real production URL (or set NEXT_PUBLIC_SITE_URL in Vercel).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bounty-website-omega.vercel.app/support",

  // TODO: replace with your real App Store link (e.g. https://apps.apple.com/app/bounty/id1234567890)
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "https://apps.apple.com/app/idTODO",

  // TODO: replace with your real support mailbox
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "merlijnhoffman@gmail.com",

  // TODO: replace with your real privacy / data-protection mailbox (can be the same as support)
  privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL ?? "merlijnhoffman@gmail.com",

  // TODO: legal entity name that operates the app (shown in Privacy Policy + Terms)
  legalName: "SUTONGI",

  // TODO: registered address of the legal entity (GDPR requires a contact address)
  legalAddress: "Keizersgracht 568, Amsterdam, The Netherlands",

  // TODO: company registration number (KvK / Companies House / etc.), or delete the line in the legal pages
  registrationNumber: "KvK: 87056763",

  // TODO: governing law + courts for the Terms of Service (e.g. "the Netherlands")
  governingLaw: "The Netherlands)",

  // TODO: how and when prizes are paid out (shown in Terms). Keep consistent with what you actually do.
  payoutTimeframe: "30 days",
  payoutMethod: "Bank transfer",

  // TODO: update when you edit the Privacy Policy or Terms
  legalUpdated: "October 20, 2026",
  legalUpdatedISO: "2026-10-20",
} as const;

export const APPLE_EULA_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
export const APPLE_REFUNDS_URL = "https://support.apple.com/en-us/118223";
export const EDPB_MEMBERS_URL = "https://www.edpb.europa.eu/about-edpb/about-edpb/members_en";

export const LINKS = {
  privacy: "/privacy",
  terms: "/terms",
  support: "/support",
  deleteAccount: "/delete-account",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE.url).toString();
}
