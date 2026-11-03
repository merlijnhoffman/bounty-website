import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { LegalPage } from "@/components/LegalPage";
import { APPLE_REFUNDS_URL, LINKS, SITE } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Support",
  description:
    "Get help with BOUNTY: contact support, read answers to common questions about tickets, location, QR codes and refunds, and learn how to delete your account.",
  path: "/support",
});

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "I can’t log in or I forgot my password",
    a: (
      <>
        Use the “forgot password” option on the login screen to get a reset email. If it doesn’t arrive within a few
        minutes, check your spam folder and make sure you use the email address you signed up with. Still stuck? Contact
        us using the form above.
      </>
    ),
  },
  {
    q: "The app says I’m not in the event zone, or my location is wrong",
    a: (
      <>
        Make sure Location Services is on and BOUNTY has location access (iOS Settings → Privacy &amp; Security →
        Location Services → BOUNTY). Choose “Precise Location” and, if you can, “Always” so the radar keeps working when
        the screen is off. GPS can be less accurate between tall buildings, so move into the open and wait a few seconds.
      </>
    ),
  },
  {
    q: "Hunter Connect / the QR scan doesn’t work",
    a: (
      <>
        Both hunters need a ticket for the same live event and must be within 100 m of each other. Allow camera access in
        iOS Settings, hold the phone steady and make sure the QR code is fully visible and not too bright or dim. You can
        earn a maximum of 3 hint tokens. If you already have 3, scanning won’t add more.
      </>
    ),
  },
  {
    q: "I paid for a ticket but can’t join the event",
    a: (
      <>
        Make sure you’re logged in to the same account you bought it with and that you have an internet connection. Open
        the event again, or restart the app. If the ticket is still missing, send us your account email and the Apple
        receipt (from the confirmation email) through the form above.
      </>
    ),
  },
  {
    q: "How do I get a refund?",
    a: (
      <>
        Tickets are in-app purchases, so refunds are processed by Apple. Request one at{" "}
        <a href={APPLE_REFUNDS_URL} target="_blank" rel="noopener noreferrer">
          Apple’s refund page
        </a>
        . If we cancel an event, we refund your ticket. See the ticket and refund section in our{" "}
        <Link href={LINKS.terms}>Terms of Service</Link>.
      </>
    ),
  },
  {
    q: "Why do I see other players on the radar?",
    a: (
      <>
        During a live event the Hunter Radar shows your position to other hunters in the same event and theirs to you.
        That’s part of the game and only happens while an event is live. See the{" "}
        <Link href={LINKS.privacy}>Privacy Policy</Link> for the details.
      </>
    ),
  },
  {
    q: "I didn’t get push notifications",
    a: <>Allow notifications for BOUNTY in iOS Settings → Notifications. Check that Focus modes or Low Power Mode aren’t silencing them.</>,
  },
  {
    q: "Which languages does the app support?",
    a: <>English, Dutch, German, French and Spanish. The app follows your phone’s language where possible.</>,
  },
  {
    q: "How do I delete my account or my data?",
    a: (
      <>
        In the app go to <strong>Settings → Delete Account</strong>. You can also use “Export My Data” there to download a
        copy of your data first. If you can’t access the app, use the{" "}
        <Link href={LINKS.deleteAccount}>account deletion page</Link>. Full instructions are below.
      </>
    ),
  },
];

export default function SupportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "BOUNTY Support",
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: SITE.supportEmail },
    },
  };

  return (
    <LegalPage
      title="Support"
      updated={false}
      intro="Stuck on a clue, a ticket or your account? We’re happy to help. Most questions are answered below. Otherwise, write to us."
    >
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="not-prose my-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <h2 className="!mt-0">Contact us</h2>
        <p>
          Email us at <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> or use the form. We usually reply
          within 2 business days. Please include your account email, your city/event and, for bugs, your iPhone model and
          iOS version.
        </p>
        <div className="mt-6">
          <ContactForm to={SITE.supportEmail} />
        </div>
      </div>

      <h2 id="faq">Frequently asked questions</h2>
      <div className="not-prose mt-4 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-line bg-surface open:border-amber/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 text-left font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
              <span>{f.q}</span>
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-card text-lg leading-none text-amber transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="prose-legal px-5 pb-5 [&_p]:my-0 text-sm leading-7 text-ink-2">{f.a}</div>
          </details>
        ))}
      </div>

      <h2 id="delete">How to delete your account</h2>
      <ol className="my-3 list-decimal space-y-2 pl-6 leading-7 text-ink-2">
        <li>
          Open BOUNTY and go to <strong className="text-ink">Settings</strong>.
        </li>
        <li>
          Tap <strong className="text-ink">Delete Account</strong> and confirm.
        </li>
        <li>Your account, profile and tickets are removed permanently. This can’t be undone.</li>
      </ol>
      <p>
        Can’t open the app? Use the <Link href={LINKS.deleteAccount}>web deletion request page</Link>. See the{" "}
        <Link href={LINKS.privacy}>Privacy Policy</Link> for how long different kinds of data are kept.
      </p>
    </LegalPage>
  );
}
