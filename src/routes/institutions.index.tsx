import { createFileRoute } from "@tanstack/react-router";

import { SectionCut } from "@/components/site/art";
import { CTASection, StatisticBlock } from "@/components/site/blocks";
import { InstitutionFeature } from "@/components/site/InstitutionFeature";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images, institutions, programmes } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/institutions/")({
  head: () =>
    pageHead({
      title: "Our Institutions",
      description:
        "Two institutions on one campus at Kota, Udupi — Ashrith College & School of Nursing and K. R. Hegde College of Paramedical Sciences.",
      path: "/institutions",
    }),
  component: InstitutionsPage,
});

function InstitutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our institutions"
        title="Two institutions, one campus, one purpose."
        intro="Nursing and allied health education managed by Ashrith Trust (R.) at Kota, Udupi District — sharing facilities, faculty culture and a single standard of practical training."
        image={images.campusHero}
        imageAlt="Ashrith campus at Kota, Udupi"
        breadcrumbs={[{ label: "Institutions" }]}
      />

      <section className="section-y bg-white">
        <div className="shell space-y-20 lg:space-y-28">
          {institutions.map((inst, i) => (
            <InstitutionFeature
              key={inst.slug}
              institution={inst}
              reverse={i % 2 === 1}
              programmeCount={programmes.filter((p) => p.institutionSlug === inst.slug).length}
            />
          ))}
        </div>
      </section>

      <SectionCut from="white" to="haze" variant="curve" />
      <section className="section-y bg-haze">
        <div className="shell">
          <SectionHeading
            number="01"
            eyebrow="At a glance"
            title="What the two institutions add up to."
            align="center"
          />
          <div className="mt-10">
            <StatisticBlock />
          </div>
        </div>
      </section>

      <CTASection
        topTone="haze"
        title={<>One campus. Two paths into healthcare.</>}
        intro="Talk to the admissions team about which programme fits your background."
        image={images.classroom}
      />
    </>
  );
}
