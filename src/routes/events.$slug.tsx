import { createFileRoute, notFound } from "@tanstack/react-router";

import { SectionCut } from "@/components/site/art";
import { ActionLink } from "@/components/site/Action";
import { EventList } from "@/components/site/blocks";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { eventBySlug, events } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = eventBySlug(params.slug);
    if (!event) throw notFound();
    return { slug: event.slug };
  },
  head: ({ params }) => {
    const e = eventBySlug(params.slug);
    if (!e) {
      return { meta: [{ title: "Event not found" }, { name: "robots", content: "noindex" }] };
    }
    return pageHead({
      title: e.title,
      description: e.excerpt,
      path: `/events/${e.slug}`,
      type: "article",
    });
  },
  component: EventDetail,
});

function EventDetail() {
  const { slug } = Route.useLoaderData();
  const event = eventBySlug(slug)!;
  const related = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={event.category}
        title={event.title}
        intro={event.excerpt}
        image={event.image}
        imageAlt={event.title}
        breadcrumbs={[{ label: "Events", to: "/events" }, { label: event.title }]}
        meta={[
          { label: "Date", value: event.dateLabel },
          { label: "Category", value: event.category },
          { label: "Venue", value: "Kota campus" },
        ]}
      />

      <article className="section-y bg-white">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div>
            <time dateTime={event.date} className="eyebrow block">
              {event.dateLabel}
            </time>
            <div className="mt-6 space-y-5 text-[0.95rem] leading-relaxed text-ink-soft">
              {event.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-10">
              <ActionLink to="/events" variant="outline">
                Back to all events
              </ActionLink>
            </div>
          </div>

          <Reveal className="grid gap-4">
            {event.gallery.map((src, i) => (
              <div key={src + String(i)} className="zoom-media">
                <img
                  src={src}
                  alt={`${event.title} — photograph ${i + 1}`}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </article>

      <SectionCut from="white" to="haze" variant="curve" />
      <section className="section-y bg-haze">
        <div className="shell">
          <SectionHeading
            number="01"
            eyebrow="More events"
            title="Other happenings at Ashrith."
            action={
              <ActionLink to="/events" variant="outline">
                All Events
              </ActionLink>
            }
          />
          <div className="mt-10">
            <EventList items={related} />
          </div>
        </div>
      </section>
    </>
  );
}
