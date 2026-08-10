import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CountUp } from "@/components/site/CountUp";
import { GhostWord, SectionCut } from "@/components/site/art";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ActionLink } from "@/components/site/Action";
import { stats, type Programme, type SiteEvent, type Leader } from "@/data/site";
import { cn } from "@/lib/utils";

/* ------------------------------ Statistics ------------------------------- */

export function StatisticBlock({
  tone = "light",
  items = stats,
}: {
  tone?: "light" | "dark";
  items?: typeof stats;
}) {
  const dark = tone === "dark";
  return (
    <div className="relative">
      <GhostWord tone={dark ? "light" : "mist"} className="-top-14 right-0 lg:-top-24">
        15+
      </GhostWord>
      <dl
        className={cn(
          "relative grid grid-cols-2 gap-px overflow-hidden rounded-tl-[2.25rem] rounded-br-[2.25rem] sm:grid-cols-3 lg:grid-cols-5",
          dark ? "bg-white/15" : "bg-hairline",
        )}
      >
        {items.map((s, i) => (
          <div
            key={s.label}
            className={cn("relative px-5 py-7 md:px-6 md:py-9", dark ? "bg-navy" : "bg-white")}
          >
            <span
              aria-hidden="true"
              className="absolute top-5 right-5 font-display text-[0.6rem] font-bold tracking-[0.16em] text-saffron/70"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span
                className={cn(
                  "block font-display text-[2rem] leading-none font-extrabold tracking-tight md:text-[2.6rem]",
                  dark ? "text-white" : "text-navy",
                )}
              >
                <CountUp value={s.value} suffix={s.suffix} />
              </span>
              <span aria-hidden="true" className="mt-4 block h-px w-10 bg-saffron" />
              <span
                className={cn(
                  "mt-3 block font-display text-[0.68rem] font-bold tracking-[0.14em] uppercase",
                  dark ? "text-saffron-bright" : "text-ink-soft",
                )}
              >
                {s.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ------------------------------- Programmes ------------------------------- */

export function ProgrammeRow({ programme, index }: { programme: Programme; index?: number }) {
  return (
    <Link
      to="/programmes/$programme"
      params={{ programme: programme.slug }}
      className="row-indicator group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-hairline py-5 transition-colors hover:bg-mist/50 md:grid-cols-[auto_minmax(0,2.2fr)_minmax(0,1.6fr)_auto_auto] md:gap-6 md:px-4"
    >
      {typeof index === "number" ? (
        <span className="hidden font-display text-[0.72rem] font-extrabold text-saffron md:block">
          {String(index + 1).padStart(2, "0")}
        </span>
      ) : null}
      <div className="min-w-0">
        <h3 className="font-display text-base leading-snug font-extrabold text-ink transition-colors group-hover:text-navy md:text-lg">
          {programme.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-[0.8rem] text-ink-soft md:hidden">
          {programme.institution}
        </p>
      </div>
      <p className="hidden text-[0.82rem] leading-snug text-ink-soft md:block">
        {programme.institution}
      </p>
      <p className="hidden font-display text-[0.8rem] font-bold tracking-wide text-navy md:block">
        {programme.duration}
      </p>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-tl-[0.85rem] rounded-br-[0.85rem] border border-hairline text-navy transition-all group-hover:border-saffron group-hover:bg-saffron group-hover:text-[oklch(0.24_0.05_60)]">
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

export function ProgrammeList({ items }: { items: Programme[] }) {
  if (items.length === 0) {
    return (
      <p className="border border-dashed border-hairline px-6 py-14 text-center text-sm text-ink-soft">
        No programmes match your search. Try a different keyword or category.
      </p>
    );
  }
  return (
    <div className="border-t border-hairline">
      {items.map((p, i) => (
        <ProgrammeRow key={p.slug} programme={p} index={i} />
      ))}
    </div>
  );
}

/* --------------------------------- Events --------------------------------- */

const eventShapes = ["rounded-tl-[2.5rem]", "rounded-tr-[2.5rem]", "rounded-br-[2.5rem]"];
const eventRatios = ["aspect-[4/3]", "aspect-[5/4]", "aspect-[16/11]"];

export function EventCard({
  event,
  featured = false,
  index = 0,
}: {
  event: SiteEvent;
  featured?: boolean;
  index?: number;
}) {
  const shape = featured ? "rounded-tl-[3rem]" : eventShapes[index % eventShapes.length];
  const ratio = featured ? "" : eventRatios[index % eventRatios.length];

  return (
    <article
      className={cn(
        "group flex flex-col",
        featured && "lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-0",
        !featured && index % 3 === 1 && "lg:mt-8",
      )}
    >
      <Link
        to="/events/$slug"
        params={{ slug: event.slug }}
        className={cn("zoom-media relative block overflow-hidden bg-mist", shape)}
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={event.image}
          alt=""
          loading="lazy"
          width={1400}
          height={1000}
          className={cn("w-full object-cover", featured ? "h-64 lg:h-full" : ratio)}
        />
        <span className="absolute top-0 left-0 rounded-br-[1.1rem] bg-saffron px-3 py-2 font-display text-[0.6rem] font-extrabold tracking-[0.14em] text-[oklch(0.24_0.05_60)] uppercase">
          {event.dateLabel}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/15"
        />
      </Link>
      <div
        className={cn(
          "flex flex-1 flex-col border-x border-b border-hairline bg-white p-5 md:p-6",
          featured && "lg:border-l-0 lg:p-10",
        )}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-tl-[0.7rem] rounded-br-[0.7rem] bg-mist px-2.5 py-1 font-display text-[0.62rem] font-bold tracking-[0.14em] text-navy uppercase">
            {event.category}
          </span>
          <time dateTime={event.date} className="text-[0.75rem] font-semibold text-ink-soft">
            {event.dateLabel}
          </time>
        </div>
        <h3
          className={cn(
            "mt-3 font-display leading-snug font-extrabold text-ink",
            featured ? "text-2xl md:text-3xl" : "text-lg",
          )}
        >
          <Link
            to="/events/$slug"
            params={{ slug: event.slug }}
            className="transition-colors hover:text-navy"
          >
            {event.title}
          </Link>
        </h3>
        <p
          className={cn("mt-3 text-sm leading-relaxed text-ink-soft", !featured && "line-clamp-3")}
        >
          {event.excerpt}
        </p>
        <Link
          to="/events/$slug"
          params={{ slug: event.slug }}
          className="group/link mt-5 inline-flex items-center gap-2 font-display text-[0.8rem] font-bold text-navy transition-colors hover:text-saffron"
        >
          View Details
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

export function EventList({ items }: { items: SiteEvent[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((e, i) => (
        <Reveal key={e.slug} delay={i * 60}>
          <EventCard event={e} index={i} />
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------- Leadership ------------------------------- */

export function LeadershipProfile({
  leader,
  compact = false,
}: {
  leader: Leader;
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "relative flex gap-4 rounded-tl-[1.75rem] rounded-br-[1.75rem] border border-hairline bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-saffron/40 hover:shadow-soft",
        compact ? "items-center" : "flex-col",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid shrink-0 place-items-center rounded-tl-[1.1rem] rounded-br-[1.1rem] bg-mist font-display font-extrabold text-navy ring-1 ring-navy/10",
          compact ? "h-14 w-14 text-lg" : "h-16 w-16 text-xl",
        )}
      >
        {leader.initials}
      </span>
      <div className="min-w-0">
        <h3 className="font-display text-base leading-snug font-extrabold text-ink">
          {leader.name}
        </h3>
        <p className="mt-1 font-display text-[0.68rem] font-bold tracking-[0.14em] text-saffron uppercase">
          {leader.role}
        </p>
        {!compact ? (
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{leader.bio}</p>
        ) : null}
      </div>
    </article>
  );
}

/* ------------------------------- Testimonial ------------------------------ */

export function Testimonial({
  quote,
  name,
  programme,
  year,
  image,
}: {
  quote: string;
  name: string;
  programme: string;
  year: string;
  image: string;
}) {
  return (
    <figure className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 -left-3 hidden h-24 w-24 rounded-full border border-saffron/40 sm:block"
        />
        <div className="zoom-media relative overflow-hidden rounded-t-[7rem] bg-mist">
          <img
            src={image}
            alt={`Student of ${programme} at Ashrith`}
            loading="lazy"
            width={1000}
            height={1200}
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
        <span className="absolute -right-2 bottom-6 rounded-tl-[1.1rem] rounded-br-[1.1rem] bg-navy px-3.5 py-2 font-display text-[0.6rem] font-bold tracking-[0.16em] text-white uppercase shadow-lift">
          Student voice
        </span>
      </div>
      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -left-4 font-display text-[9rem] leading-none font-extrabold text-saffron/15 select-none lg:text-[13rem]"
        >
          &ldquo;
        </span>
        <blockquote className="relative font-display text-xl leading-[1.45] font-bold text-ink sm:text-2xl lg:text-[1.85rem]">
          {quote}
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <span aria-hidden="true" className="h-10 w-0.5 shrink-0 bg-saffron" />
          <span>
            <span className="block font-display text-base font-extrabold text-navy">{name}</span>
            <span className="mt-1 block text-sm text-ink-soft">
              {programme} · {year}
            </span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

/* --------------------------------- CTA ------------------------------------ */

export function CTASection({
  title,
  intro,
  image,
  topTone = "white",
  ghost = "Apply",
  primary = { label: "Apply Now", to: "/admissions" },
  secondary = { label: "Visit Campus", to: "/campus" },
}: {
  title: React.ReactNode;
  intro?: string;
  image: string;
  topTone?: "white" | "haze" | "cream" | "mist";
  ghost?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <>
      <SectionCut from={topTone} to="navy" variant="arc" />
      <section className="relative isolate overflow-hidden bg-navy">
        <img
          src={image}
          alt=""
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-navy/80" />
        <div aria-hidden="true" className="dot-field-light absolute inset-0 opacity-40" />
        <GhostWord tone="light" className="top-4 left-1/2 -translate-x-1/2 text-center">
          {ghost}
        </GhostWord>
        <div className="shell relative py-16 text-center md:py-24">
          <span aria-hidden="true" className="mx-auto mb-7 block h-10 w-px bg-saffron" />
          <h2 className="mx-auto max-w-3xl text-3xl leading-[1.1] font-extrabold text-white sm:text-4xl lg:text-[3rem]">
            {title}
          </h2>
          {intro ? <p className="mx-auto mt-5 max-w-xl text-white/70">{intro}</p> : null}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ActionLink to={primary.to} size="lg">
              {primary.label}
            </ActionLink>
            <ActionLink to={secondary.to} variant="ghostLight" size="lg">
              {secondary.label}
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------ Section shell ----------------------------- */

export function SectionIntro(props: Parameters<typeof SectionHeading>[0]) {
  return <SectionHeading {...props} />;
}
