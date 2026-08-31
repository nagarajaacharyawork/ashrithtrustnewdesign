import { createFileRoute, notFound } from "@tanstack/react-router";

import { SectionCut } from "@/components/site/art";
import { ArrowRight, Check } from "lucide-react";

import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ActionLink } from "@/components/site/Action";
import { ProgrammeList } from "@/components/site/blocks";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { programmeBySlug, programmes } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/programmes/$programme")({
  loader: ({ params }) => {
    const programme = programmeBySlug(params.programme);
    if (!programme) throw notFound();
    return { slug: programme.slug };
  },
  head: ({ params }) => {
    const p = programmeBySlug(params.programme);
    if (!p) {
      return { meta: [{ title: "Programme not found" }, { name: "robots", content: "noindex" }] };
    }
    return pageHead({
      title: `${p.name} — ${p.duration}`,
      description: p.short,
      path: `/programmes/${p.slug}`,
      type: "article",
    });
  },
  component: ProgrammeDetail,
});

function ProgrammeDetail() {
  const { slug } = Route.useLoaderData();
  const programme = programmeBySlug(slug)!;
  const related = programmes
    .filter((p) => p.slug !== programme.slug && p.category === programme.category)
    .slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={programme.category}
        title={programme.name}
        intro={programme.short}
        image={programme.image}
        imageAlt={`${programme.name} training at Ashrith`}
        breadcrumbs={[{ label: "Programmes", to: "/programmes" }, { label: programme.name }]}
        meta={[
          { label: "Duration", value: programme.duration },
          { label: "Type", value: programme.type },
          { label: "Stream", value: programme.category },
          { label: "Campus", value: "Kota, Udupi" },
        ]}
        actions={
          <>
            <ActionLink to="/admissions" size="lg">
              Apply Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ActionLink>
            <ActionLink
              to={
                programme.institutionSlug === "nursing"
                  ? "/institutions/nursing"
                  : "/institutions/paramedical"
              }
              variant="ghostLight"
              size="lg"
            >
              {programme.institution}
            </ActionLink>
          </>
        }
      />

      <section className="section-y bg-white">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">Overview</p>
              <h2 className="mt-3 text-2xl leading-tight font-extrabold text-ink sm:text-3xl">
                About this programme
              </h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
                {programme.overview}
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="font-display text-xl font-extrabold text-ink">
                Curriculum highlights
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {programme.curriculum.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 border border-hairline bg-cream px-4 py-3 text-sm text-ink-soft"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="font-display text-xl font-extrabold text-ink">
                Clinical & practical training
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
                {programme.training}
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="font-display text-xl font-extrabold text-ink">Learning outcomes</h3>
              <ul className="mt-5 space-y-3">
                {programme.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-sm text-ink-soft">
                    <ArrowRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-saffron"
                      aria-hidden="true"
                    />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="font-display text-xl font-extrabold text-ink">Career pathways</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {programme.careers.map((c) => (
                  <li
                    key={c}
                    className="border-l-2 border-saffron bg-haze px-4 py-3 text-sm text-ink-soft"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-hairline bg-cream p-6">
              <h3 className="font-display text-base font-extrabold text-navy">Programme summary</h3>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  { t: "Institution", d: programme.institution },
                  { t: "Duration", d: programme.duration },
                  { t: "Award", d: programme.type },
                  { t: "Eligibility", d: programme.eligibility },
                ].map((x) => (
                  <div key={x.t}>
                    <dt className="font-display text-[0.62rem] font-bold tracking-[0.14em] text-ink-soft uppercase">
                      {x.t}
                    </dt>
                    <dd className="mt-1 leading-relaxed text-ink">{x.d}</dd>
                  </div>
                ))}
              </dl>
              <ActionLink to="/admissions" className="mt-6 w-full">
                Apply for this programme
              </ActionLink>
            </div>
          </aside>
        </div>
      </section>

      <SectionCut from="white" to="haze" variant="wave" />
      <section className="section-y bg-haze">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Enquire</p>
            <h2 className="mt-3 text-2xl leading-tight font-extrabold text-ink sm:text-3xl">
              Ask about {programme.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Send your details and the admissions office will get back to you with eligibility,
              documentation and intake information.
            </p>
          </div>
          <EnquiryForm variant="admission" defaultProgramme={programme.name} />
        </div>
      </section>

      {related.length > 0 ? (
        <>
          <SectionCut from="haze" to="white" variant="wave" />
          <section className="section-y bg-white">
            <div className="shell">
              <SectionHeading
                number="01"
                eyebrow="Related"
                title={`Other ${programme.category.toLowerCase()} programmes`}
                action={
                  <ActionLink to="/programmes" variant="outline">
                    All Programmes
                  </ActionLink>
                }
              />
              <div className="mt-10">
                <ProgrammeList items={related} />
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
