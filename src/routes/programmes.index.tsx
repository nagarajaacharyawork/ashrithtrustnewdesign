import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { CTASection, ProgrammeList } from "@/components/site/blocks";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images, programmes } from "@/data/site";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/programmes/")({
  head: () =>
    pageHead({
      title: "Programmes & Courses",
      description:
        "Explore nursing and paramedical programmes at Ashrith — B.Sc. Nursing, GNM, DMLT, operation theatre, imaging and dialysis technology diplomas.",
      path: "/programmes",
    }),
  component: ProgrammesPage,
});

const filters = ["All", "Nursing", "Paramedical", "Degree", "Diploma"] as const;

function ProgrammesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programmes.filter((p) => {
      const matchesFilter = filter === "All" || p.category === filter || p.type === filter;
      const matchesQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.institution.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Courses that lead to a defined healthcare role."
        intro="Degree and diploma programmes across nursing and allied health sciences, each combining classroom teaching with laboratory practice and supervised clinical exposure."
        image={images.skillsLab}
        imageAlt="Students practising in the skills laboratory"
        breadcrumbs={[{ label: "Programmes" }]}
        meta={[
          { label: "Programmes", value: String(programmes.length) },
          {
            label: "Nursing",
            value: String(programmes.filter((p) => p.category === "Nursing").length),
          },
          {
            label: "Paramedical",
            value: String(programmes.filter((p) => p.category === "Paramedical").length),
          },
          { label: "Campus", value: "Kota, Udupi" },
        ]}
      />

      <section className="section-y bg-white">
        <div className="shell">
          <SectionHeading number="01" eyebrow="Find your course" title="All programmes." />

          <div className="mt-8 flex flex-col gap-3 border border-hairline bg-cream p-4 md:flex-row md:items-center md:gap-4 md:p-4">
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={cn(
                    "h-9 border px-4 font-display text-[0.78rem] font-bold tracking-wide transition-colors",
                    filter === f
                      ? "border-navy bg-navy text-white"
                      : "border-hairline bg-white text-ink-soft hover:border-navy/40 hover:text-navy",
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="w-full md:w-60 md:shrink-0">
              <label htmlFor="programme-search" className="sr-only">
                Search programmes
              </label>
              <input
                id="programme-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programmes…"
                maxLength={80}
                className="h-9 w-full border border-hairline bg-white px-4 text-sm text-ink placeholder:text-ink-soft/60 focus:border-azure focus:outline-none"
              />
            </div>
          </div>

          <p aria-live="polite" className="mt-5 text-sm text-ink-soft">
            Showing {results.length} of {programmes.length} programmes
          </p>

          <div className="mt-4">
            <ProgrammeList items={results} />
          </div>
        </div>
      </section>

      <CTASection
        topTone="white"
        title={<>Not sure which programme fits?</>}
        intro="Tell us your qualification and interest — the admissions team will guide you."
        image={images.labTraining}
      />
    </>
  );
}
