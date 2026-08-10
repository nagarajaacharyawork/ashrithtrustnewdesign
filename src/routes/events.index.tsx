import { createFileRoute } from "@tanstack/react-router";

import { SectionCut } from "@/components/site/art";
import { useMemo, useState } from "react";

import { CTASection, EventCard, EventList } from "@/components/site/blocks";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { events, images } from "@/data/site";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/events/")({
  head: () =>
    pageHead({
      title: "Events & News",
      description:
        "Ceremonies, community health camps, cultural days and academic events at Ashrith Group of Institutions, Kota, Udupi.",
      path: "/events",
    }),
  component: EventsPage,
});

const categories = ["All", "Academic", "Community", "Campus"] as const;

const featured = events.find((e) => e.featured) ?? events[0]!;

function EventsPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const list = useMemo(() => {
    const rest = events.filter((e) => e.slug !== featured.slug);
    return category === "All" ? rest : rest.filter((e) => e.category === category);
  }, [category]);

  return (
    <>
      <PageHero
        eyebrow="Events & news"
        title="What's happening at Ashrith."
        intro="Ceremonies, outreach camps, cultural programmes and academic milestones from across the academic year."
        image={images.eventHealthCamp}
        imageAlt="Students at a community health camp"
        breadcrumbs={[{ label: "Events" }]}
      />

      <section className="section-y bg-white">
        <div className="shell">
          <p className="eyebrow">Featured</p>
          <div className="mt-6">
            <EventCard event={featured} featured />
          </div>
        </div>
      </section>

      <SectionCut from="white" to="haze" variant="curve" />
      <section className="section-y bg-haze">
        <div className="shell">
          <SectionHeading number="01" eyebrow="All events" title="Browse by category." />
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={cn(
                  "border px-4 py-2 font-display text-[0.78rem] font-bold tracking-wide transition-colors",
                  category === c
                    ? "border-navy bg-navy text-white"
                    : "border-hairline bg-white text-ink-soft hover:border-navy/40 hover:text-navy",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10">
            {list.length > 0 ? (
              <EventList items={list} />
            ) : (
              <p className="border border-dashed border-hairline bg-white px-6 py-16 text-center text-sm text-ink-soft">
                No events in this category yet.
              </p>
            )}
          </div>
        </div>
      </section>

      <CTASection
        topTone="haze"
        title={<>Join us at the next one.</>}
        intro="Admissions enquiries are welcome throughout the year."
        image={images.eventLamp}
      />
    </>
  );
}
