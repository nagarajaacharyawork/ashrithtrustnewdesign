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

      <SectionCut from="white" to="haze" variant="wave" />
      <section className="section-y bg-haze">
        <div className="shell">
          <SectionHeading
            number="01"
            eyebrow="Board of trustees"
            title="Trustees and management."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((l, i) => (
              <Reveal key={l.name} delay={i * 60}>
                <LeadershipProfile leader={l} />
              </Reveal>
            ))}
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
