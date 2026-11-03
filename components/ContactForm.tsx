"use client";

import { useState } from "react";

const TOPICS = [
  "Account or login",
  "Tickets and purchases",
  "Gameplay, location or QR codes",
  "Bug report",
  "Privacy or data request",
  "Other",
];

/**
 * Zero-backend contact form: opens the visitor's email app with a pre-filled message.
 * To receive submissions directly on the site instead, see "Upgrade the forms" in the README.
 */
export function ContactForm({ to }: { to: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const topic = String(fd.get("topic") ?? "Other");
    const message = String(fd.get("message") ?? "").trim();

    const subject = `[BOUNTY support] ${topic}`;
    const body = `${message}\n\n—\nName: ${name}\nAccount email: ${email}\nTopic: ${topic}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label="Contact support">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Your name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className="input" />
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email used in the app
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className="input" />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="label">
          Topic
        </label>
        <select id="topic" name="topic" className="input" defaultValue={TOPICS[0]}>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="label">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="input resize-y"
          placeholder="Tell us what happened, which event or city, and your device model + iOS version if it's a bug."
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary">
          Open email to send
        </button>
        <p className="text-xs text-ink-3" role="status">
          {sent
            ? "Your email app should have opened. If not, write to us directly at the address above."
            : "This opens your email app with the message ready to send."}
        </p>
      </div>
    </form>
  );
}
