import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { APPLE_EULA_URL, APPLE_REFUNDS_URL, LINKS, SITE } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms for using BOUNTY: tickets and refunds, prize pool rules and payout, safety when playing in public spaces, acceptable use and anti-cheat, and Apple’s standard EULA.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms are the agreement between you and us when you use the BOUNTY app and website. Please read them, especially the sections on safety, prizes and fair play."
    >
      <h2 id="who">1. Who we are and what these terms cover</h2>
      <p>
        BOUNTY is operated by <strong>{SITE.legalName}</strong>, {SITE.legalAddress} (“we”, “us”). By creating an account
        or using BOUNTY you agree to these terms and to our <Link href={LINKS.privacy}>Privacy Policy</Link>. If you
        don’t agree, don’t use the app.
      </p>
      <p>
        You must be at least 16 years old to use BOUNTY (and old enough to enter into a binding contract where you live,
        or have a parent or guardian’s permission). Prizes may only be claimed by adults, see section 7.
      </p>

      <h2 id="eula">2. Apple’s standard EULA</h2>
      <p>
        BOUNTY is licensed to you, not sold. The license for the iOS app is governed by Apple’s standard End User
        License Agreement for Licensed Applications (“Standard EULA”), available at{" "}
        <a href={APPLE_EULA_URL} target="_blank" rel="noopener noreferrer">
          {APPLE_EULA_URL}
        </a>
        . These terms add to the Standard EULA. If they conflict on the license to use the app itself, the Standard
        EULA prevails. Apple is not a party to these terms, isn’t responsible for the app or its content, and has no
        obligation to provide maintenance or support for it. Apple and its subsidiaries are third-party beneficiaries
        of the Standard EULA.
      </p>

      <h2 id="account">3. Your account</h2>
      <ul>
        <li>Give us accurate information and keep your login details secret. You are responsible for activity on your account.</li>
        <li>One person, one account. Accounts can’t be sold, shared or transferred.</li>
        <li>
          You can delete your account at any time in the app (Settings → Delete Account) or on our{" "}
          <Link href={LINKS.deleteAccount}>deletion page</Link>.
        </li>
      </ul>

      <h2 id="tickets">4. Tickets, payments and refunds</h2>
      <ul>
        <li>
          Taking part in a live event requires a <strong>one-time ticket for that event</strong>, bought in the app as
          an in-app purchase. The price is shown in the app (in your local currency, including any applicable taxes)
          before you buy. A ticket is not a subscription and doesn’t renew.
        </li>
        <li>
          Payments are processed by Apple and the purchase is managed through RevenueCat. We never see or store your
          card details.
        </li>
        <li>
          A ticket gives you access to <strong>one event only</strong>, is personal to your account and can’t be
          transferred or resold.
        </li>
        <li>
          <strong>Refunds.</strong> Because tickets are purchased through the App Store, refund requests are handled by
          Apple under its own policy (see{" "}
          <a href={APPLE_REFUNDS_URL} target="_blank" rel="noopener noreferrer">
            Apple’s “Request a refund” page
          </a>
          ). In addition: if <em>we</em> cancel an event before it starts or can’t run it, your ticket will be refunded
          in full. Once an event you hold a ticket for has started, the ticket is otherwise non-refundable, except where
          the law gives you a right to a refund that can’t be excluded. Nothing in these terms limits your statutory
          consumer rights.
        </li>
        <li>
          If you suspect a purchase was made without your permission, contact Apple first, then us at{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </li>
      </ul>

      <h2 id="how">5. How the game works</h2>
      <p>
        In each event, players follow clues released inside a defined zone to find a hidden target. Clues, the live
        Hunter Radar, the distance meter and Hunter Connect (earning up to 3 hint tokens by scanning another hunter’s QR
        code within 100 m) are tools to help you play. We run events at our discretion and may change, reschedule,
        shorten, extend or cancel an event, a zone, a clue or the rules where reasonably necessary (for example for
        safety, technical problems, weather, public disruption or suspected cheating). The in-app rules for each event
        apply in addition to these terms.
      </p>

      <h2 id="safety">6. Safety: you play at your own risk</h2>
      <p>
        BOUNTY is played in real public spaces. Please take it seriously:
      </p>
      <ul>
        <li>Stay aware of traffic, other people and your surroundings. Don’t look at your phone while crossing roads, cycling or driving. Never play while driving.</li>
        <li>Obey all laws and local rules. Never trespass, enter private or restricted property, climb, or put yourself or others in danger.</li>
        <li>Don’t run in crowded places and take care in poor weather, darkness and unfamiliar areas.</li>
        <li>Meet other hunters (Hunter Connect) only in public, well-lit places. You aren’t obliged to connect with anyone.</li>
        <li>Respect residents, businesses and other players. Don’t harass, follow or intimidate anyone.</li>
        <li>You are responsible for deciding whether you are fit and able to take part and for the safety of anyone in your care.</li>
      </ul>
      <p>
        You take part at your own risk. To the fullest extent permitted by law, we are not liable for injury, loss or
        damage arising from how you or other people behave while playing. Nothing in these terms excludes or limits
        liability for death or personal injury caused by our negligence, for fraud, or for anything else that can’t be
        excluded by law.
      </p>

      <h2 id="prize">7. Prize pool and payout</h2>
      <ul>
        <li>
          <strong>How the pool is built.</strong> The prize pool for an event is a base prize plus a fixed amount for
          every ticket sold for that event. The pool shown in the app updates live. The final amount is fixed when the
          event ends.
        </li>
        <li>
          <strong>No guarantee.</strong> Taking part doesn’t guarantee that you will win anything. Many players, one
          winner. Buying a ticket buys access to the event, not a prize.
        </li>
        <li>
          <strong>Who wins.</strong> The winner is the first eligible player to complete the objective of the event as
          verified by our systems and rules shown in the app. If two or more players complete it at (effectively) the
          same time, the tie-break rule shown in the app for that event applies. Our determination, made in good faith,
          is final, without affecting your legal rights.
        </li>
        <li>
          <strong>Eligibility.</strong> To receive a prize you must be an adult in your country of residence, have
          played within these terms, and be able to pass a reasonable identity and fair-play check. Employees and
          organisers of an event may be excluded.
        </li>
        <li>
          <strong>Payout.</strong> We pay the prize to the winner by {SITE.payoutMethod} within {SITE.payoutTimeframe}{" "}
          after verification. You must give us the details we need to pay you. If we can’t reach you or verify you
          within a reasonable period, we may award the prize to the next eligible player or roll it over.
        </li>
        <li>
          <strong>Taxes.</strong> Any tax on a prize is your responsibility. We may withhold or report amounts if the
          law requires.
        </li>
        <li>
          <strong>Cancelled events.</strong> If we cancel an event before it has a winner, tickets are refunded as set out
          in section 4 and no prize is paid.
        </li>
        <li>
          <strong>Apple.</strong> Apple is not a sponsor of, and is not involved in, any prize or event.
        </li>
      </ul>

      <h2 id="fair-play">8. Acceptable use and anti-cheat</h2>
      <p>To keep the game fair for everyone, you must not:</p>
      <ul>
        <li>fake or spoof your location (GPS spoofing, mock-location apps, emulators, jailbreak tools or similar);</li>
        <li>create multiple accounts, buy tickets for someone else to play, or play on a shared account;</li>
        <li>share, sell or publish clues, solutions or the target’s location while an event is live, or collude with other players to share a prize;</li>
        <li>manipulate Hunter Connect, QR codes, hint tokens or the Hunter Radar, or scan codes you weren’t given in person;</li>
        <li>reverse-engineer, scrape, attack, overload or interfere with the app, our servers or other players’ devices;</li>
        <li>use the app to stalk, harass, threaten or physically obstruct another person, or to target the hidden player or a venue in a way that is unsafe or unlawful;</li>
        <li>break the law, or use BOUNTY for anything other than playing the game as intended.</li>
      </ul>
      <p>
        If we reasonably believe you broke these rules, we may remove you from an event, withhold or reclaim a prize,
        suspend or close your account, and refuse a refund. We may also report unlawful conduct to the authorities.
      </p>

      <h2 id="ip">9. Our content and your content</h2>
      <p>
        The app, clues, media, name, logo and design belong to us or our licensors and are protected by law. You get a
        personal, non-exclusive, non-transferable, revocable licence to use the app for its intended purpose. If you
        send us feedback or content (for example in a support message), you allow us to use it to run and improve the
        service, without owing you anything.
      </p>

      <h2 id="availability">10. Availability and changes</h2>
      <p>
        We work hard to keep BOUNTY running but can’t promise it will always be available, error-free or accurate (GPS
        in particular can be inaccurate in dense urban areas). We may update, suspend or discontinue features. We will
        give reasonable notice of material changes to these terms. If you keep using the app after a change takes
        effect, you accept it.
      </p>

      <h2 id="liability">11. Warranties and liability</h2>
      <p>
        The app is provided “as is” to the extent permitted by law. Subject to section 6 and to your statutory rights as
        a consumer, we aren’t liable for indirect or consequential losses, lost opportunities, or issues caused by your
        device, network, location services or third-party services. Our total liability to you for claims related to the
        app is limited to the amount you paid us for tickets in the 12 months before the claim, except where the law
        doesn’t allow that limit. Nothing excludes liability that can’t be excluded by law, including for death,
        personal injury, fraud or wilful misconduct.
      </p>

      <h2 id="termination">12. Ending your use</h2>
      <p>
        You can stop using BOUNTY and delete your account at any time. We may suspend or terminate your account for
        breach of these terms or if required by law. Sections that by their nature should continue (for example 6, 7, 8
        and 11) survive termination.
      </p>

      <h2 id="law">13. Governing law and disputes</h2>
      <p>
        These terms are governed by the laws of {SITE.governingLaw}, without affecting any mandatory consumer protection
        rules of the country where you live. If you are a consumer in the EU you may also bring a claim in the courts of
        your country of residence. You can find the EU’s online dispute resolution information at{" "}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>

      <h2 id="contact">14. Contact</h2>
      <p>
        {SITE.legalName}
        <br />
        {SITE.legalAddress}
        <br />
        <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
      </p>
    </LegalPage>
  );
}
