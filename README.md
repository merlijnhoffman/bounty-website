# BOUNTY — marketing + legal website

Next.js 15 (App Router) + Tailwind CSS 3. Static-friendly, zero-config on Vercel. No cookies, no analytics.

| URL | What | App Store Connect field |
| --- | --- | --- |
| `/` | Landing page (EN) | Marketing URL |
| `/nl` | Landing page (NL) | — |
| `/privacy` | Privacy Policy | **Privacy Policy URL** (required) |
| `/terms` | Terms of Service (links to Apple’s standard EULA) | License Agreement → use Apple’s standard EULA |
| `/support` | Support: contact form, FAQ, deletion how-to | **Support URL** (required) |
| `/delete-account` | In-app instructions + web deletion request form | Account deletion URL |
| `/sitemap.xml`, `/robots.txt` | Generated automatically | — |

> **Not build-tested yet.** The sandbox this was written in blocks the npm registry, so `npm install` / `next build` could
> not be run there. Run step 1 below first; if the build prints an error, send it to me and I’ll fix it.

---

## 1. Run it locally

Requires Node 20+ (Node 22 recommended).

```bash
cd bounty-website
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check (do this before deploying)
```

## 2. Replace the placeholders

Everything is marked `TODO:` — find them all with:

```bash
grep -rn "TODO" app components lib README.md
```

Nearly all values live in **one file: `lib/config.ts`**.

| Placeholder | Where | Notes |
| --- | --- | --- |
| Site URL | `lib/config.ts` → `SITE.url`, or env var `NEXT_PUBLIC_SITE_URL` | Used for canonical URLs, sitemap, Open Graph. Set to your real domain. |
| App Store link | `SITE.appStoreUrl` or env var `NEXT_PUBLIC_APP_STORE_URL` | Replace `idTODO` with your Apple ID once the app exists in App Store Connect. |
| Support email | `SITE.supportEmail` or `NEXT_PUBLIC_SUPPORT_EMAIL` | Must be a mailbox you actually read. |
| Privacy email | `SITE.privacyEmail` or `NEXT_PUBLIC_PRIVACY_EMAIL` | Receives GDPR + deletion requests. Can equal the support email. |
| Legal entity name | `SITE.legalName` | Shown in footer, Privacy Policy, Terms. |
| Legal address | `SITE.legalAddress` | GDPR needs a contact address for the controller. |
| Registration number | `SITE.registrationNumber` | KvK / company number — or delete the line in `/privacy`. |
| Governing law | `SITE.governingLaw` | e.g. “the Netherlands”. |
| Prize payout method + timeframe | `SITE.payoutMethod`, `SITE.payoutTimeframe` | Must match what you will really do. |
| “Last updated” date | `SITE.legalUpdated`, `SITE.legalUpdatedISO` | Update whenever you edit the legal pages. |
| App Store badge | `components/StoreBadge.tsx` | Placeholder button. Apple requires its **official** badge artwork: https://developer.apple.com/app-store/marketing/guidelines/ |
| Phone mockups | `components/Screens.tsx` | Illustrative CSS mockups. Swap in real screenshots later. |

Environment variables beat the defaults in `lib/config.ts`. Because `NEXT_PUBLIC_*` values are baked in at build time,
**redeploy after changing them**.

## 3. Deploy on Vercel

### Option A — Vercel CLI (fastest, works from this folder)

```bash
npm install -g vercel
vercel login                 # opens the browser, log in / create a free account
cd bounty-website
vercel                       # first run = preview deployment
```

Answer the prompts:

1. *Set up and deploy?* → **Y**
2. *Which scope?* → your personal account (or team)
3. *Link to existing project?* → **N**
4. *Project name?* → e.g. `bounty-website`
5. *In which directory is your code located?* → `./`
6. Vercel detects **Next.js** automatically. Accept the default build/output settings (no overrides needed).

Add your env vars (once), then ship to production:

```bash
vercel env add NEXT_PUBLIC_SITE_URL production        # e.g. https://bounty.app
vercel env add NEXT_PUBLIC_APP_STORE_URL production   # real App Store URL
vercel env add NEXT_PUBLIC_SUPPORT_EMAIL production
vercel env add NEXT_PUBLIC_PRIVACY_EMAIL production
vercel --prod                                         # production deployment
```

### Option B — GitHub + Vercel dashboard (best for auto-deploys)

1. Push this folder to GitHub — either as its own repo (simplest) or as a sub-folder (e.g. `website/`) of your app repo.
2. Go to https://vercel.com/new → **Import** the repo.
3. If the site is in a sub-folder: **Root Directory** → `website`. Framework preset: **Next.js** (auto).
4. Open **Environment Variables** and add the four `NEXT_PUBLIC_*` variables from the table above.
5. Click **Deploy**. Every push to `main` now redeploys automatically; every PR gets a preview URL.

### Custom domain

Project → **Settings → Domains → Add** → enter your domain → add the DNS records Vercel shows you (an `A` record for the
apex, or a `CNAME` for `www`). HTTPS is automatic. Then set `NEXT_PUBLIC_SITE_URL` to the final domain and redeploy.

### Verify after deploying

- Open `/`, `/nl`, `/privacy`, `/terms`, `/support`, `/delete-account`, `/sitemap.xml`, `/robots.txt`
- Paste the URL into https://www.opengraph.xyz to check the 1200×630 preview image
- Run Lighthouse (Chrome DevTools → Lighthouse) on `/` in an incognito window

## 4. URLs to paste into App Store Connect

Replace `https://YOUR-DOMAIN` with your production domain.

| App Store Connect field | Where | Value |
| --- | --- | --- |
| **Privacy Policy URL** | App Information → General Information | `https://YOUR-DOMAIN/privacy` |
| **Support URL** | App Store → version page → App Information | `https://YOUR-DOMAIN/support` |
| Marketing URL (optional) | same | `https://YOUR-DOMAIN/` |
| License Agreement | App Information → License Agreement | Keep Apple’s **standard EULA** (the Terms page links to it) |
| Account deletion | Apple requires an in-app path (Settings → Delete Account ✔). Link this too if asked: | `https://YOUR-DOMAIN/delete-account` |

**App Privacy (“nutrition label”) answers** should match your app’s `PrivacyInfo.xcprivacy`: precise + coarse location,
email address, user ID, device ID and other diagnostic data — all *App Functionality*, none used for tracking. Also add
**Purchases** (purchase history) and, if you collect it, **Name** — the app/RevenueCat/Apple handle purchases, so declare
them as you actually use them.

## 5. Before you launch — checklist

- [ ] All `TODO:` values replaced (`grep -rn "TODO" app components lib`)
- [ ] `support@` and `privacy@` mailboxes exist and someone reads them (Apple, users and regulators will use them)
- [ ] **Have a lawyer review `/privacy` and `/terms`.** They are solid drafts written from your app’s code and your brief,
      but they are not legal advice. Pay particular attention to: refund wording (EU withdrawal rights for digital
      content/services), prize/promotion rules in the countries you operate in (some require a sweepstakes/skill-contest
      analysis), the 18+ prize eligibility, tax handling of payouts and retention periods.
- [ ] Make the in-app Privacy Policy screen (`expo/app/privacy.tsx`) consistent with the website. It currently says
      `privacy@bounty.app` and has no mention of Hunter Radar visibility; ideally open the web URL from the app instead of
      maintaining two versions.
- [ ] Replace the placeholder App Store button with Apple’s official badge
- [ ] Replace CSS mockups with real screenshots (optional)
- [ ] Decide whether you want analytics. If you add any non-essential cookies/analytics, add a consent banner first
      (this site sets no cookies today, so no banner is needed).

## 6. Optional: upgrade the forms

The contact form and deletion form open the visitor’s email app (`mailto:`) — nothing to host, nothing to break. If you
later want submissions delivered without the visitor’s email app, add a Next.js Route Handler
(`app/api/contact/route.ts`) that sends mail via [Resend](https://resend.com) (or similar) and set the API key as a
Vercel environment variable. **Never auto-delete accounts from the web form without verifying the requester owns the
email** (e.g. send a confirmation link to the address on the account first).

## 7. Project structure

```
app/
  (site)/            English root layout (lang="en") → /, /privacy, /terms, /support, /delete-account
  nl/                Dutch root layout (lang="nl")   → /nl
  sitemap.ts         /sitemap.xml
  robots.ts          /robots.txt
  globals.css        Tailwind + small component classes
components/          Header, Footer, Landing, Screens (phone mockups), forms, LegalPage
lib/config.ts        ← all placeholders live here
lib/content.ts       EN + NL landing copy
lib/metadata.ts      SEO / Open Graph helper
public/              og-image.png (1200×630), icons, prize image
tailwind.config.ts   Palette from the app: #0C0C0E bg, #161618 surface, #F59E0B amber
```

Dutch copy for the landing page lives in `lib/content.ts` (`content.nl`). Legal pages are English only, as requested; the NL
landing page links to them.
