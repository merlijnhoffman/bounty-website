import Link from "next/link";
import { DeleteForm } from "@/components/DeleteForm";
import { LegalPage } from "@/components/LegalPage";
import { LINKS, SITE } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Delete your account",
  description:
    "How to delete your BOUNTY account and personal data: in the app under Settings → Delete Account, or by requesting deletion on this page.",
  path: "/delete-account",
});

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete your account"
      updated={false}
      intro="You can delete your BOUNTY account and the personal data linked to it at any time. The fastest way is inside the app. If you can’t open the app, use the request form below."
    >
      <h2 id="in-app">Option 1: delete in the app (instant)</h2>
      <ol className="my-3 list-decimal space-y-2 pl-6 leading-7 text-ink-2">
        <li>
          Open BOUNTY and log in. Tap <strong className="text-ink">Settings</strong>.
        </li>
        <li>
          <em>(Optional)</em> Tap <strong className="text-ink">Export My Data</strong> to download a copy of your data.
        </li>
        <li>
          Tap <strong className="text-ink">Delete Account</strong> and confirm.
        </li>
      </ol>
      <p>Your account is removed immediately and you are logged out.</p>

      <h2 id="web">Option 2: request deletion here</h2>
      <p>
        Use this if you have deleted the app, lost your device or can’t log in. For your protection we will{" "}
        <strong>verify that the request comes from the owner of the account</strong> (we reply to the email address on
        the account) before anything is deleted, and confirm once it’s done.
      </p>

      <div className="not-prose my-6 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <DeleteForm to={SITE.privacyEmail} />
      </div>

      <p>
        Prefer to write directly? Email <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> from the address
        used on your account with the subject “BOUNTY account deletion request”.
      </p>

      <h2 id="what">What gets deleted</h2>
      <ul>
        <li>Your account (email, login) and profile.</li>
        <li>Your tickets and the data linked to your account.</li>
        <li>
          Precise location and live-radar data, which is in any case deleted within 7 days after each event ends.
        </li>
      </ul>

      <h2 id="kept">What we may keep, and for how long</h2>
      <ul>
        <li>
          <strong>Purchase and accounting records</strong> (held by Apple, RevenueCat and us), up to 10 years where tax
          or accounting law requires it.
        </li>
        <li>
          <strong>Records needed for a legal claim or fraud prevention</strong>, such as a prize payout, only for as long
          as necessary.
        </li>
        <li>
          Backups and logs are overwritten on their normal cycle. All account data is gone from our active systems
          within 30 days of your request at the latest.
        </li>
      </ul>

      <h2 id="note">Good to know</h2>
      <ul>
        <li>Deletion is permanent and can’t be undone. You will lose access to any tickets you hold.</li>
        <li>Deleting your account doesn’t refund tickets. See the refund section of our <Link href={LINKS.terms}>Terms</Link>.</li>
        <li>
          Questions about your data? See the <Link href={LINKS.privacy}>Privacy Policy</Link> or{" "}
          <Link href={LINKS.support}>contact support</Link>.
        </li>
      </ul>
    </LegalPage>
  );
}
