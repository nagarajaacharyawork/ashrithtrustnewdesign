import { createFileRoute } from "@tanstack/react-router";

import { SectionCut } from "@/components/site/art";
import { CTASection, StatisticBlock } from "@/components/site/blocks";
import { FAQ } from "@/components/site/FAQ";
import { ImageMosaic } from "@/components/site/ImageMosaic";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { faqs, images, missionVision, org, pillars, timeline } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Ashrith Trust & Institutions",
      description:
        "Ashrith Trust (R.) has served the coastal Karnataka community for over 15 years through healthcare education at Kota, Udupi. Read our mission, vision and history.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Fifteen years of teaching students to serve."
        intro={`${org.trust} runs two healthcare institutions at Kota, Udupi District, built on a simple idea: education is only useful when it reaches the people who need care.`}
        image={images.campusLocation}
        imageAlt="The Ashrith campus at Kota, Udupi"
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="section-y bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl leading-[1.1] font-extrabold text-ink sm:text-4xl">
              A trust founded to serve, an education built to match.
            </h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
              <p>
                {org.trust} was established with a mandate across healthcare, education and social
                service in the coastal belt of Karnataka. Its first educational venture, Ashrith
                College & School of Nursing, opened at Kota to address a shortage of trained nursing
                professionals in the region.
              </p>
              <p>
                K. R. Hegde College of Paramedical Sciences followed, extending the same
                practice-first approach to allied health technology. Together the institutions have
                taught more than 1200 students and alumni.
              </p>
              <p>
                The Trust's motto — <strong className="text-ink">{org.tagline}</strong> — is not
                decoration. Community health camps, screening drives and service activities are part
                of the academic calendar, not extras.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ImageMosaic
              items={[
                { src: images.eventLamp, alt: "Lamp lighting ceremony", caption: "Lamp lighting" },
                {
                  src: images.eventHealthCamp,
                  alt: "Community health camp",
                  caption: "Community service",
                },
                { src: images.library, alt: "Campus library", caption: "Library" },
                { src: images.studentsCampus, alt: "Students on campus", caption: "Campus life" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <SectionCut from="white" to="haze" variant="wave" />
      <section className="section-y bg-haze">
        <div className="shell">
          <SectionHeading
            number="01"
            eyebrow="What guides us"
            title="Mission, vision and philosophy."
          />
          <div className="mt-10 grid gap-px bg-hairline md:grid-cols-2">
            {missionVision.map((m, i) => (
              <Reveal key={m.title} delay={i * 60} className="bg-white p-7 md:p-9">
                <h3 className="font-display text-lg font-extrabold text-navy md:text-xl">
                  {m.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{m.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionCut from="haze" to="white" variant="wave" />
      <section className="section-y bg-white">
        <div className="shell">
          <SectionHeading number="02" eyebrow="Milestones" title="How the campus grew." />
          <ol className="mt-10 border-t border-hairline">
            {timeline.map((t, i) => (
              <Reveal
                as="li"
                key={t.year}
                delay={i * 50}
                className="grid gap-2 border-b border-hairline py-7 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8"
              >
                <span className="font-display text-xl font-extrabold text-saffron">{t.year}</span>
                <div>
                  <h3 className="font-display text-lg font-extrabold text-ink">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <SectionCut from="white" to="cream" variant="wave" />
      <section className="section-y bg-cream">
        <div className="shell">
          <SectionHeading
            number="03"
            eyebrow="Our commitments"
            title="Five principles we teach by."
          />
          <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.number} delay={i * 55} className="bg-white p-7">
                <span className="font-display text-sm font-extrabold text-saffron">{p.number}</span>
                <h3 className="mt-4 font-display text-base leading-snug font-extrabold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionCut from="cream" to="navy" variant="wave" />
      <section className="bg-navy py-14 md:py-20">
        <div className="shell">
          <StatisticBlock tone="dark" />
        </div>
      </section>

      <SectionCut from="navy" to="white" variant="wave" />
      <section className="section-y bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
              Frequently asked.
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection
        topTone="white"
        title={<>Come and see the campus for yourself.</>}
        intro="Visits can be arranged during office hours at Kota, Udupi."
        image={images.campusHero}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
