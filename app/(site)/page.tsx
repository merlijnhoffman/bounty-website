import { Landing } from "@/components/Landing";
import { content } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: content.en.meta.title,
  absoluteTitle: true,
  description: content.en.meta.description,
  path: "/",
  locale: "en",
  languages: { en: "/", nl: "/nl", "x-default": "/" },
});

export default function HomePage() {
  return <Landing locale="en" />;
}
