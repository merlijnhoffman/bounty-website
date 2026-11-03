"use client";

import { useState } from "react";

/**
 * Web fallback for account deletion (Apple Guideline 5.1.1(v) asks for in-app deletion; this page is the
 * back-up for people who can no longer open the app).
 *
 * It opens a pre-filled email to the privacy mailbox. We then verify ownership by replying to the address on
 * the account before deleting anything (never delete on an unverified request — anyone could type any email).
 * To process requests inside the site instead, see "Upgrade the forms" in the README.
 */
export function DeleteForm({ to }: { to: string }) {
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [sent, setSent] = useState(false);

  const emailsMatch = email.trim().length > 3 && email.trim().toLowerCase() === email2.trim().toLowerCase();
  const canSubmit = emailsMatch && confirm;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    const subject = "BOUNTY account deletion request";
    const body = [
      "I request permanent deletion of my BOUNTY account and associated personal data (GDPR Art. 17).",
      "",
      `Account email: ${email.trim()}`,
      "",
      "I understand this is permanent and cannot be undone.",
      "I understand I may be asked to verify that I own this account before it is deleted.",
    ].join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label="Request account deletion">
      <div>
        <label htmlFor="del-email" className="label">
          Email address of your BOUNTY account
        </label>
        <input
          id="del-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
      </div>

      <div>
        <label htmlFor="del-email2" className="label">
          Confirm email address
        </label>
        <input
          id="del-email2"
          type="email"
          required
          autoComplete="off"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
          aria-invalid={email2.length > 0 && !emailsMatch}
          aria-describedby="del-email2-hint"
          className="input"
        />
        <p id="del-email2-hint" className="mt-1.5 text-xs text-ink-3" aria-live="polite">
          {email2.length > 0 && !emailsMatch ? "The email addresses don’t match yet." : "Type it again to avoid typos."}
        </p>
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-card p-4 text-sm leading-6 text-ink-2">
        <input
          type="checkbox"
          checked={confirm}
          onChange={(e) => setConfirm(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-amber"
        />
        <span>
          I understand that deleting my account permanently removes my profile and tickets, and that this{" "}
          <strong className="text-ink">cannot be undone</strong>. Any ticket I bought is not refunded by deleting my
          account.
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={!canSubmit}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          Open email to request deletion
        </button>
        <p className="text-xs text-ink-3" role="status">
          {sent
            ? "Your email app should have opened. Send the email to start the request."
            : "This opens your email app with the request ready to send."}
        </p>
      </div>
    </form>
  );
}
