import { Landing } from "@/components/Landing";
import { content } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: content.nl.meta.title,
  absoluteTitle: true,
  description: content.nl.meta.description,
  path: "/nl",
  locale: "nl",
  languages: { en: "/", nl: "/nl", "x-default": "/" },
});

export default function DutchHomePage() {
  return <Landing locale="nl" />;
}
