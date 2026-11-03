export type Locale = "en" | "nl";

type Item = { t: string; d: string };
type Faq = { q: string; a: string };

export type Content = {
  htmlLang: string;
  homePath: string;
  meta: { title: string; description: string };
  nav: { how: string; features: string; faq: string; download: string; menu: string };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    note: string;
    mockupLabel: string;
  };
  stats: Item[];
  how: { eyebrow: string; title: string; sub: string; steps: Item[] };
  features: { eyebrow: string; title: string; sub: string; items: Item[] };
  languages: { title: string; sub: string };
  faq: { eyebrow: string; title: string; items: Faq[] };
  cta: { title: string; sub: string };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    privacy: string;
    terms: string;
    support: string;
    deleteAccount: string;
    rights: string;
    legalNote: string;
    language: string;
  };
  badge: { small: string; big: string; aria: string };
  screens: {
    radar: string;
    nearby: string;
    clue: string;
    clueText: string;
    distance: string;
    prize: string;
    live: string;
    hunters: string;
    connect: string;
    tokens: string;
  };
};

export const content: Record<Locale, Content> = {
  en: {
    htmlLang: "en",
    homePath: "/",
    meta: {
      title: "BOUNTY — Hunt the city. Win the pot.",
      description:
        "BOUNTY is a real-world city treasure hunt for iPhone. Buy a ticket, follow GPS clues across the city, spot other hunters on a live radar and win the growing prize pool.",
    },
    nav: {
      how: "How it works",
      features: "Features",
      faq: "FAQ",
      download: "Download",
      menu: "Menu",
    },
    hero: {
      eyebrow: "Live city treasure hunt · iOS",
      line1: "Hunt the city.",
      line2: "Win the pot.",
      sub: "BOUNTY turns your city into a live game. Follow GPS clues across a hidden zone, see other hunters on the radar, and race for a prize pool that grows with every ticket sold.",
      note: "Free to download. A ticket is bought once per event.",
      mockupLabel: "Illustrative app screens",
    },
    stats: [
      { t: "1 ticket", d: "One-time purchase per event" },
      { t: "Live", d: "Radar and prize pool in real time" },
      { t: "5", d: "Languages in the app" },
    ],
    how: {
      eyebrow: "How it works",
      title: "Four steps from couch to cash",
      sub: "No scripts, no tour guide. Just you, your phone and a city full of clues.",
      steps: [
        {
          t: "Buy your ticket",
          d: "Pick a live event in your city and buy a one-time ticket in the app. Every ticket adds to the prize pool.",
        },
        {
          t: "Get the clues",
          d: "When the event goes live, clues unlock inside a defined zone. Each one points you closer to the target.",
        },
        {
          t: "Hunt the city",
          d: "Use GPS, the distance meter and the live radar to track the target while other hunters do the same.",
        },
        {
          t: "Win the prize pool",
          d: "The first hunter to crack it takes the pot. The pool is a base prize plus an amount for every ticket sold.",
        },
      ],
    },
    features: {
      eyebrow: "Features",
      title: "Built for the street, not the sofa",
      sub: "Everything in BOUNTY is designed to get you outside, moving and meeting people.",
      items: [
        {
          t: "Live Hunter Radar",
          d: "See other hunters near you in real time during an event. Are they chasing the same clue, or are you ahead?",
        },
        {
          t: "Hunter Connect",
          d: "Meet another hunter in person and scan their QR code (within 100 m) to earn hint tokens, up to a maximum of 3.",
        },
        {
          t: "Live prize pool",
          d: "A base prize plus an amount for every ticket sold, updated live in the app. The more hunters, the bigger the pot.",
        },
        {
          t: "GPS-based clues",
          d: "Clues are tied to real places inside the event zone and can include text, images or video.",
        },
        {
          t: "Event updates by push",
          d: "Get notified when an event goes live, when a new clue drops and when a winner is declared.",
        },
        {
          t: "Location only when it counts",
          d: "Your precise location is collected during live events only, and deleted after the event ends.",
        },
      ],
    },
    languages: {
      title: "Speaks your language",
      sub: "BOUNTY is available in English, Dutch, German, French and Spanish.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Good to know before you hunt",
      items: [
        {
          q: "What do I need to play?",
          a: "An iPhone with an internet connection, GPS (Location Services) switched on, and push notifications enabled so you don't miss clues. You'll also need to allow camera access if you want to use Hunter Connect, because it scans QR codes. A comfortable pair of shoes helps too.",
        },
        {
          q: "Is my location always tracked?",
          a: "No. BOUNTY only collects your precise location during a live event you have joined. Outside live events your location is not collected. Location data is deleted after the event ends. You can change location permission at any time in iOS Settings. Read the full details in our Privacy Policy.",
        },
        {
          q: "Can other players see where I am?",
          a: "Yes, during a live event. The Hunter Radar shows nearby hunters in real time. That is part of the game. Your location is never shown to anyone outside the event.",
        },
        {
          q: "How does the prize pool work?",
          a: "The pool is a base prize plus a fixed amount for every ticket sold for that event. You can see it update live in the app. Winning is never guaranteed. The full prize terms are in our Terms of Service.",
        },
        {
          q: "Can I get a refund?",
          a: "Tickets are purchased through the App Store, so refunds are handled by Apple. If we cancel an event, your ticket will be refunded. For all other cases, see the ticket and refund section of our Terms of Service or contact support.",
        },
        {
          q: "How do I delete my account?",
          a: "Open the app, go to Settings and tap Delete Account. If you can't access the app, you can also request deletion on our website.",
        },
        {
          q: "Is it safe to play?",
          a: "BOUNTY happens in real public spaces. Stay aware of traffic and your surroundings, obey local laws, never enter private property and meet other hunters only in public places. You play at your own risk.",
        },
      ],
    },
    cta: {
      title: "The city is waiting.",
      sub: "Download BOUNTY, grab a ticket for the next event and be first to the finish.",
    },
    footer: {
      tagline: "A real-world city treasure hunt.",
      product: "Product",
      legal: "Legal & support",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Support",
      deleteAccount: "Delete account",
      rights: "All rights reserved.",
      legalNote: "Apple and the Apple logo are trademarks of Apple Inc.",
      language: "Language",
    },
    badge: {
      small: "Download on the",
      big: "App Store",
      aria: "Download BOUNTY on the App Store",
    },
    screens: {
      radar: "Hunter Radar",
      nearby: "hunters nearby",
      clue: "Clue 3",
      clueText: "Where the old market bells ring, look up and find the green door.",
      distance: "Distance to target",
      prize: "Prize pool",
      live: "LIVE",
      hunters: "hunters in the hunt",
      connect: "Hunter Connect",
      tokens: "Hint tokens",
    },
  },

  nl: {
    htmlLang: "nl",
    homePath: "/nl",
    meta: {
      title: "BOUNTY — Jaag door de stad. Win de pot.",
      description:
        "BOUNTY is een schattenjacht in het echt voor iPhone. Koop een ticket, volg GPS-aanwijzingen door de stad, zie andere jagers op een live radar en win de groeiende prijzenpot.",
    },
    nav: {
      how: "Hoe het werkt",
      features: "Functies",
      faq: "Veelgestelde vragen",
      download: "Download",
      menu: "Menu",
    },
    hero: {
      eyebrow: "Live stadsschattenjacht · iOS",
      line1: "Jaag door de stad.",
      line2: "Win de pot.",
      sub: "BOUNTY maakt van jouw stad een live spel. Volg GPS-aanwijzingen door een verborgen zone, zie andere jagers op de radar en race om een prijzenpot die groeit met elk verkocht ticket.",
      note: "Gratis te downloaden. Een ticket koop je één keer per evenement.",
      mockupLabel: "Illustratieve app-schermen",
    },
    stats: [
      { t: "1 ticket", d: "Eenmalige aankoop per evenement" },
      { t: "Live", d: "Radar en prijzenpot in realtime" },
      { t: "5", d: "Talen in de app" },
    ],
    how: {
      eyebrow: "Hoe het werkt",
      title: "Vier stappen van bank naar bonus",
      sub: "Geen script, geen gids. Alleen jij, je telefoon en een stad vol aanwijzingen.",
      steps: [
        {
          t: "Koop je ticket",
          d: "Kies een live evenement in jouw stad en koop in de app een eenmalig ticket. Elk ticket vergroot de prijzenpot.",
        },
        {
          t: "Ontvang de aanwijzingen",
          d: "Zodra het evenement live gaat, worden aanwijzingen binnen een afgebakende zone ontgrendeld. Elke aanwijzing brengt je dichter bij het doel.",
        },
        {
          t: "Jaag door de stad",
          d: "Gebruik GPS, de afstandsmeter en de live radar om het doel te volgen, terwijl andere jagers hetzelfde doen.",
        },
        {
          t: "Win de prijzenpot",
          d: "De eerste jager die het raadsel kraakt, wint de pot. De pot bestaat uit een basisprijs plus een bedrag per verkocht ticket.",
        },
      ],
    },
    features: {
      eyebrow: "Functies",
      title: "Gemaakt voor de straat, niet voor de bank",
      sub: "Alles in BOUNTY is bedoeld om je naar buiten te krijgen, in beweging en in contact met anderen.",
      items: [
        {
          t: "Live Hunter Radar",
          d: "Zie tijdens een evenement in realtime welke jagers bij jou in de buurt zijn. Zitten ze achter dezelfde aanwijzing aan, of loop jij voor?",
        },
        {
          t: "Hunter Connect",
          d: "Ontmoet een andere jager en scan zijn of haar QR-code (binnen 100 m) om hinttokens te verdienen, maximaal 3.",
        },
        {
          t: "Live prijzenpot",
          d: "Een basisprijs plus een bedrag per verkocht ticket, live bijgewerkt in de app. Hoe meer jagers, hoe groter de pot.",
        },
        {
          t: "GPS-aanwijzingen",
          d: "Aanwijzingen zijn gekoppeld aan echte plekken binnen de zone en kunnen uit tekst, beeld of video bestaan.",
        },
        {
          t: "Updates via push",
          d: "Ontvang een melding wanneer een evenement live gaat, er een nieuwe aanwijzing is en er een winnaar is.",
        },
        {
          t: "Locatie alleen wanneer het telt",
          d: "Je exacte locatie wordt alleen tijdens live evenementen verzameld en verwijderd nadat het evenement is afgelopen.",
        },
      ],
    },
    languages: {
      title: "Spreekt jouw taal",
      sub: "BOUNTY is beschikbaar in het Nederlands, Engels, Duits, Frans en Spaans.",
    },
    faq: {
      eyebrow: "Veelgestelde vragen",
      title: "Handig om te weten voor je op jacht gaat",
      items: [
        {
          q: "Wat heb ik nodig om mee te doen?",
          a: "Een iPhone met internetverbinding, GPS (Locatievoorzieningen) ingeschakeld en pushmeldingen aan, zodat je geen aanwijzing mist. Voor Hunter Connect heb je toegang tot de camera nodig, omdat de app QR-codes scant. Comfortabele schoenen helpen ook.",
        },
        {
          q: "Wordt mijn locatie altijd bijgehouden?",
          a: "Nee. BOUNTY verzamelt je exacte locatie alleen tijdens een live evenement waaraan je deelneemt. Buiten live evenementen wordt je locatie niet verzameld. Locatiegegevens worden verwijderd nadat het evenement is afgelopen. Je kunt de locatietoestemming altijd wijzigen in de iOS-instellingen. Lees alle details in ons privacybeleid (in het Engels).",
        },
        {
          q: "Kunnen andere spelers zien waar ik ben?",
          a: "Ja, tijdens een live evenement. De Hunter Radar toont jagers in je buurt in realtime. Dat hoort bij het spel. Je locatie wordt nooit getoond aan mensen buiten het evenement.",
        },
        {
          q: "Hoe werkt de prijzenpot?",
          a: "De pot is een basisprijs plus een vast bedrag voor elk verkocht ticket van dat evenement. Je ziet hem live bijwerken in de app. Winnen is nooit gegarandeerd. De volledige prijsvoorwaarden staan in onze gebruiksvoorwaarden (in het Engels).",
        },
        {
          q: "Kan ik mijn geld terugkrijgen?",
          a: "Tickets koop je via de App Store, dus terugbetalingen worden door Apple afgehandeld. Als wij een evenement annuleren, krijg je je ticket terugbetaald. Voor alle andere gevallen zie je het onderdeel over tickets en terugbetalingen in onze gebruiksvoorwaarden, of neem je contact op met support.",
        },
        {
          q: "Hoe verwijder ik mijn account?",
          a: "Open de app, ga naar Instellingen en tik op Account verwijderen. Heb je geen toegang tot de app, dan kun je het verwijderen ook via onze website aanvragen.",
        },
        {
          q: "Is het veilig om mee te doen?",
          a: "BOUNTY speelt zich af in echte openbare ruimtes. Let op het verkeer en je omgeving, houd je aan de lokale wetgeving, ga nooit op privéterrein en spreek andere jagers alleen op openbare plekken. Je doet mee op eigen risico.",
        },
      ],
    },
    cta: {
      title: "De stad wacht op je.",
      sub: "Download BOUNTY, pak een ticket voor het volgende evenement en wees als eerste bij de finish.",
    },
    footer: {
      tagline: "Een schattenjacht door de echte stad.",
      product: "Product",
      legal: "Juridisch & support",
      privacy: "Privacybeleid",
      terms: "Gebruiksvoorwaarden",
      support: "Support",
      deleteAccount: "Account verwijderen",
      rights: "Alle rechten voorbehouden.",
      legalNote: "Apple en het Apple-logo zijn handelsmerken van Apple Inc.",
      language: "Taal",
    },
    badge: {
      small: "Download in de",
      big: "App Store",
      aria: "Download BOUNTY in de App Store",
    },
    screens: {
      radar: "Hunter Radar",
      nearby: "jagers in de buurt",
      clue: "Aanwijzing 3",
      clueText: "Waar de oude marktklokken luiden, kijk omhoog en zoek de groene deur.",
      distance: "Afstand tot doel",
      prize: "Prijzenpot",
      live: "LIVE",
      hunters: "jagers in het spel",
      connect: "Hunter Connect",
      tokens: "Hinttokens",
    },
  },
};
