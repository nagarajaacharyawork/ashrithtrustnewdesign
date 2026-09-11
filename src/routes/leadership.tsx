import { createFileRoute } from "@tanstack/react-router";

import { SectionCut } from "@/components/site/art";
import { CTASection, LeadershipProfile } from "@/components/site/blocks";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images, leadership, org } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/leadership")({
  head: () =>
    pageHead({
      title: "Leadership & Trustees",
      description:
        "Meet the trustees and leadership of Ashrith Trust (R.) who guide Ashrith College & School of Nursing and K. R. Hegde College of Paramedical Sciences.",
      path: "/leadership",
    }),
  component: LeadershipPage,
});

const featured = leadership.find((l) => l.featured) ?? leadership[0]!;
const others = leadership.filter((l) => l !== featured);

function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The people behind Ashrith."
        intro={`${org.trust} is guided by trustees who have kept a single standard across fifteen years: teach what students will actually need in practice.`}
        image={images.facultyMentoring}
        imageAlt="Faculty and leadership at the Ashrith campus"
        breadcrumbs={[{ label: "Leadership" }]}
      />

      <section className="section-y bg-white">
        <div className="shell grid gap-0 lg:grid-cols-2">
          <Reveal className="bg-navy p-8 text-white md:p-12">
            <span
              aria-hidden="true"
              className="grid h-20 w-20 place-items-center bg-white/10 font-display text-2xl font-extrabold"
            >
              {featured.initials}
            </span>
            <h2 className="mt-7 font-display text-2xl font-extrabold md:text-3xl">
              {featured.name}
            </h2>
            <p className="mt-2 font-display text-[0.7rem] font-bold tracking-[0.14em] text-saffron-bright uppercase">
              {featured.role}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/75">{featured.bio}</p>
            <blockquote className="mt-8 border-t border-white/15 pt-7 font-display text-lg leading-snug font-bold">
              &ldquo;{org.tagline}.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={80} className="zoom-media min-h-64">
            <img
              src={images.classroom}
              alt="Teaching in progress at the Ashrith campus"
              loading="lazy"
              width={1400}
              height={1600}
              className="h-full w-full object-cover object-center"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-haze">
        <div className="shell">
          <SectionHeading
            number="01"
            eyebrow="Board of trustees"
            title="Trustees and management."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* Main featured card (K.R. Hegde) - spans 2 columns */}
            <Reveal className="lg:col-span-2">
              <article className="relative flex flex-col rounded-tl-[1.75rem] rounded-br-[1.75rem] border border-hairline bg-white p-8 h-full">
                <span
                  aria-hidden="true"
                  className="grid h-20 w-20 place-items-center rounded-tl-[1.1rem] rounded-br-[1.1rem] bg-navy font-display text-2xl font-extrabold text-white"
                >
                  {featured.initials}
                </span>
                <div className="mt-6 flex-1">
                  <h3 className="font-display text-2xl leading-snug font-extrabold text-ink">
                    {featured.name}
                  </h3>
                  <p className="mt-2 font-display text-[0.7rem] font-bold tracking-[0.14em] text-saffron uppercase">
                    {featured.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{featured.bio}</p>
                  <blockquote className="mt-6 border-t border-hairline pt-6 font-display text-base leading-snug font-bold text-ink">
                    &ldquo;{org.tagline}.&rdquo;
                  </blockquote>
                </div>
              </article>
            </Reveal>

            {/* Vertical stack of horizontal strip cards for other trustees - single column */}
            <div className="flex flex-col justify-center gap-6">
              {others.map((leader, i) => (
                <Reveal key={leader.name} delay={(i + 1) * 80}>
                  <article className="relative flex items-center gap-4 rounded-tl-[1.75rem] rounded-br-[1.75rem] border border-hairline bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-saffron/40 hover:shadow-soft min-h-[100px]">
                    <span
                      aria-hidden="true"
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-tl-[1.1rem] rounded-br-[1.1rem] bg-mist font-display text-lg font-extrabold text-navy ring-1 ring-navy/10"
                    >
                      {leader.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-base leading-snug font-extrabold text-ink">
                        {leader.name}
                      </h3>
                      <p className="mt-1 font-display text-[0.68rem] font-bold tracking-[0.14em] text-saffron uppercase">
                        {leader.role}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        topTone="haze"
        title={<>Questions for the management?</>}
        intro="The administrative office at Kota responds to enquiries during working hours."
        image={images.campusHero}
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "About the Trust", to: "/about" }}
      />
    </>
  );
}
