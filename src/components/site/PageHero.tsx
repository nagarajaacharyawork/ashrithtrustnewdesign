import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const light = tone === "light";
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs">
        <li>
          <Link
            to="/"
            className={cn(
              "transition-colors",
              light ? "text-white/60 hover:text-white" : "text-ink-soft hover:text-navy",
            )}
          >
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight
              className={cn("h-3 w-3", light ? "text-white/40" : "text-ink-soft/60")}
              aria-hidden="true"
            />
            {item.to ? (
              <Link
                to={item.to}
                className={cn(
                  "transition-colors",
                  light ? "text-white/60 hover:text-white" : "text-ink-soft hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span className={cn(light ? "text-white" : "text-navy", "font-semibold")}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  breadcrumbs,
  actions,
  meta,
  nextTone = "white",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt: string;
  breadcrumbs?: Crumb[];
  actions?: ReactNode;
  meta?: { label: string; value: string }[];
  /** Colour of the section that follows, used by the curved hero edge. */
  nextTone?: "white" | "haze" | "cream" | "mist";
}) {
  const nextFill = {
    white: "#ffffff",
    haze: "var(--haze)",
    cream: "var(--cream)",
    mist: "var(--mist)",
  }[nextTone];

  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={image}
        alt={imageAlt}
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(105deg,oklch(0.33_0.079_246_/_0.95)_0%,oklch(0.33_0.079_246_/_0.72)_55%,oklch(0.33_0.079_246_/_0.45)_100%)]"
      />
      <div aria-hidden="true" className="dot-field-light absolute inset-0 opacity-30" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -bottom-10 font-display text-[7rem] leading-none font-extrabold tracking-tight text-white/[0.05] uppercase select-none sm:text-[11rem] lg:text-[15rem]"
      >
        {eyebrow.split(" ")[0]}
      </span>
      <div className="shell relative pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className="mt-6 flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-10 bg-saffron" />
          <p className="eyebrow text-saffron-bright">{eyebrow}</p>
        </div>
        <h1 className="mt-4 max-w-4xl text-[2.1rem] leading-[1.05] font-extrabold text-white sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {intro}
          </p>
        ) : null}
        {actions ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>
        ) : null}
        {meta ? (
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] border border-white/15 bg-white/15 sm:grid-cols-4">
            {meta.map((m, i) => (
              <div key={m.label} className="relative bg-navy-deep/80 px-4 py-4 backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-3 font-display text-[0.55rem] font-bold text-saffron/70"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <dt className="font-display text-[0.62rem] font-bold tracking-[0.16em] text-white/50 uppercase">
                  {m.label}
                </dt>
                <dd className="mt-1.5 font-display text-base font-extrabold text-white sm:text-lg">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-10 w-full sm:h-16 md:h-20"
        focusable="false"
      >
        <path d="M0,120 L0,60 C420,132 1020,132 1440,52 L1440,120 Z" fill={nextFill} />
      </svg>
    </section>
  );
}
