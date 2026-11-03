import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { EDPB_MEMBERS_URL, LINKS, SITE } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How BOUNTY collects, uses and protects your personal data: precise location during live events, camera use for QR codes, account and purchase data, and your GDPR rights.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what personal data the BOUNTY app and this website collect, why we collect it, who we share it with and what rights you have. We keep it short on purpose: we only collect what the game needs to work."
    >
      <h2 id="controller">1. Who we are</h2>
      <p>
        The data controller for BOUNTY is <strong>{SITE.legalName}</strong> (“BOUNTY”, “we”, “us”),{" "}
        {SITE.legalAddress}. Company registration: {SITE.registrationNumber}.
      </p>
      <p>
        Privacy contact: <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>. If you are in the EU/UK and
        need our representative under Art. 27 GDPR, contact the same address.
      </p>

      <h2 id="summary">2. The short version</h2>
      <ul>
        <li>
          We collect your <strong>precise location only during live events you have joined</strong>, and delete it
          after the event ends.
        </li>
        <li>
          The <strong>camera</strong> is used only to scan QR codes for Hunter Connect. We don’t save photos or video.
        </li>
        <li>
          We never see your <strong>card details</strong>. Purchases are handled by Apple and RevenueCat.
        </li>
        <li>We don’t sell your data, show ads or track you across other apps and websites.</li>
        <li>
          You can <strong>export or delete</strong> your data in the app (Settings) or on our{" "}
          <Link href={LINKS.deleteAccount}>account deletion page</Link>.
        </li>
      </ul>

      <h2 id="data">3. What we collect and why</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Why we use it</th>
            <th>Legal basis (GDPR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Account data:</strong> email address, name or display name, user ID
            </td>
            <td>Create and secure your account, let you log in, show your profile, contact you about the service</td>
            <td>Contract (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>
              <strong>Precise location (GPS)</strong>, collected only during live events you joined
            </td>
            <td>
              Show your position on the map, measure distance to clues and the target, check that you are inside the
              event zone, power the Hunter Radar, and detect cheating
            </td>
            <td>Consent via the iOS permission prompt (Art. 6(1)(a)) and contract (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>
              <strong>Camera</strong> (live view only, nothing stored)
            </td>
            <td>Scan another hunter’s QR code for Hunter Connect</td>
            <td>Consent via the iOS permission prompt</td>
          </tr>
          <tr>
            <td>
              <strong>Connection data:</strong> which two users connected, when, and the hint tokens earned
            </td>
            <td>Verify Hunter Connect (including the 100 m check), award hint tokens (max. 3), prevent abuse</td>
            <td>Contract; legitimate interest in fair play (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>
              <strong>Ticket and purchase data:</strong> which events you hold a ticket for, purchase confirmation
              from Apple/RevenueCat
            </td>
            <td>Give you access to the event, handle support and refund requests, meet accounting obligations</td>
            <td>Contract; legal obligation (Art. 6(1)(c))</td>
          </tr>
          <tr>
            <td>
              <strong>Push notification token</strong>
            </td>
            <td>Send event updates (event live, new clue, winner declared)</td>
            <td>Consent via the iOS permission prompt</td>
          </tr>
          <tr>
            <td>
              <strong>Device and diagnostic data:</strong> device identifier, crash logs and performance data
            </td>
            <td>Keep the app working, fix bugs, prevent fraud</td>
            <td>Legitimate interest (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>
              <strong>Winner and payout data:</strong> if you win, the details we need to pay you (for example your name
              and payout account)
            </td>
            <td>Verify the win and pay out the prize</td>
            <td>Contract; legal obligation</td>
          </tr>
          <tr>
            <td>
              <strong>Support messages</strong>
            </td>
            <td>Answer your questions and keep a record of the request</td>
            <td>Contract; legitimate interest</td>
          </tr>
        </tbody>
      </table>

      <h3>Location in more detail</h3>
      <ul>
        <li>
          BOUNTY collects precise location only while you are taking part in a live event. Outside live events it
          doesn’t collect your location.
        </li>
        <li>
          If you allow location “Always” (background), the app can keep tracking your position during a live event
          even when the screen is off or another app is open, so the radar and zone checks keep working. You can
          choose “While Using the App” or switch location off at any time in iOS Settings, but you won’t be able to
          take part in a live hunt without location.
        </li>
        <li>
          <strong>Other players can see you.</strong> During a live event, the Hunter Radar shows your position in real
          time to other hunters who hold a ticket for the same event. It is not shown to anyone else.
        </li>
      </ul>

      <h2 id="not-collected">4. What we do not do</h2>
      <ul>
        <li>We do not sell or rent personal data.</li>
        <li>We do not use your data for advertising and do not include third-party advertising SDKs.</li>
        <li>
          We do not “track” you in the Apple sense: no linking of your data with data from other companies’ apps or
          websites for advertising or data-broker purposes.
        </li>
        <li>We never store your card or payment-instrument details.</li>
        <li>This website sets no cookies and uses no analytics by default.</li>
      </ul>

      <h2 id="sharing">5. Who we share data with (processors)</h2>
      <p>We use a small number of service providers who process data on our behalf under data-processing terms:</p>
      <ul>
        <li>
          <strong>Supabase</strong>: authentication, database, storage of clue media and server functions. Hosts your
          account, tickets, event data and live hunter locations.
        </li>
        <li>
          <strong>RevenueCat</strong> and <strong>Apple</strong>: in-app purchase processing and entitlement checks.
          Apple handles payment; RevenueCat receives purchase tokens and an app user ID. We never receive your card
          details.
        </li>
        <li>
          <strong>Apple Push Notification service</strong> and <strong>Expo</strong> (push delivery): receive your push
          token and notification content to deliver event updates.
        </li>
        <li>
          <strong>Map providers</strong> (Apple Maps / Google Maps, depending on your device): display the map during
          events.
        </li>
        <li>
          <strong>Vercel</strong>: hosts this website and may process technical request data (such as IP address) in
          server logs.
        </li>
      </ul>
      <p>
        We may also disclose data if required by law, to protect the safety of players, or to establish, exercise or
        defend legal claims. If the business is ever sold or reorganised, data may transfer to the new owner under the
        same protections.
      </p>

      <h2 id="transfers">6. International transfers</h2>
      <p>
        Some providers are located outside the European Economic Area (EEA) or the UK, including in the United States.
        Where we transfer personal data outside the EEA/UK, we rely on an EU adequacy decision (including the EU–US
        Data Privacy Framework where the provider is certified) or on Standard Contractual Clauses. Contact us for a
        copy of the safeguards.
      </p>

      <h2 id="retention">7. How long we keep data</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Retention</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Precise location and radar positions</td>
            <td>Only for the duration of the live event; deleted within 7 days after the event ends</td>
          </tr>
          <tr>
            <td>Account data (email, name, user ID, tickets)</td>
            <td>While your account is active; deleted within 30 days after you delete your account</td>
          </tr>
          <tr>
            <td>Purchase and accounting records</td>
            <td>Up to 10 years where required by tax and accounting law</td>
          </tr>
          <tr>
            <td>Diagnostic and crash data</td>
            <td>Up to 90 days</td>
          </tr>
          <tr>
            <td>Push token</td>
            <td>Until you log out, revoke notifications or delete your account</td>
          </tr>
          <tr>
            <td>Support messages</td>
            <td>Up to 24 months after the request is closed</td>
          </tr>
        </tbody>
      </table>

      <h2 id="rights">8. Your rights under the GDPR</h2>
      <p>You have the right to:</p>
      <ul>
        <li>
          <strong>Access</strong> your data (Art. 15) and receive a <strong>portable copy</strong> (Art. 20): use
          “Export My Data” in the app’s Settings.
        </li>
        <li>
          <strong>Rectify</strong> inaccurate data (Art. 16): update your profile in the app, or contact us.
        </li>
        <li>
          <strong>Erase</strong> your data (Art. 17): use “Delete Account” in the app’s Settings, or the{" "}
          <Link href={LINKS.deleteAccount}>web deletion form</Link>.
        </li>
        <li>
          <strong>Restrict</strong> (Art. 18) or <strong>object</strong> to (Art. 21) certain processing.
        </li>
        <li>
          <strong>Withdraw consent</strong> at any time (Art. 7(3)) by turning off location, camera or notification
          permissions in iOS Settings. This doesn’t affect processing done before you withdrew.
        </li>
        <li>
          <strong>Complain</strong> to your national data protection authority (Art. 77). Find yours in the{" "}
          <a href={EDPB_MEMBERS_URL} rel="noopener noreferrer" target="_blank">
            EDPB member list
          </a>
          .
        </li>
      </ul>
      <p>
        To exercise a right, email <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>. We may need to verify
        your identity first. We respond within one month, which can be extended by up to two further months for complex
        or numerous requests (we will tell you if so).
      </p>

      <h2 id="deletion">9. Deleting your account</h2>
      <p>
        You can delete your account at any time in the app under <strong>Settings → Delete Account</strong>. If you can’t
        access the app, use our <Link href={LINKS.deleteAccount}>account deletion page</Link>. Deletion is permanent.
        Some records (for example purchase records held by Apple and for accounting) may be kept as described in
        section 7.
      </p>

      <h2 id="children">10. Children</h2>
      <p>
        BOUNTY is not directed at children under 16 and we do not knowingly collect personal data from them. If you
        believe a child under 16 has given us personal data, contact{" "}
        <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> and we will delete it.
      </p>

      <h2 id="security">11. Security</h2>
      <p>
        We use encryption in transit (HTTPS/TLS), access controls and row-level security in our database, and keep
        location data only as long as needed. No system is perfectly secure. If a personal data breach is likely to
        put your rights at risk, we will notify the competent authority within 72 hours (Art. 33) and tell you without
        undue delay where the risk is high (Art. 34).
      </p>

      <h2 id="changes">12. Changes to this policy</h2>
      <p>
        We may update this policy as the app changes. We will update the date at the top and, for material changes,
        tell you in the app or by email before they take effect.
      </p>

      <h2 id="contact">13. Contact</h2>
      <p>
        {SITE.legalName}
        <br />
        {SITE.legalAddress}
        <br />
        <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>
      </p>
      <p>
        See also our <Link href={LINKS.terms}>Terms of Service</Link> and <Link href={LINKS.support}>Support</Link>{" "}
        page.
      </p>
    </LegalPage>
  );
}
