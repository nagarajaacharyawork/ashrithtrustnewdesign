import { org } from "@/data/site";

/** Builds a consistent per-route head() payload for TanStack Router. */
export function pageHead({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  const fullTitle = title.includes(org.shortName) ? title : `${title} — ${org.name}`;
  const clipped = fullTitle.length > 62 ? title : fullTitle;
  return {
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: clipped },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { name: "twitter:title", content: clipped },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
    title: clipped,
  };
}
