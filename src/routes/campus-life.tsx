import { createFileRoute } from "@tanstack/react-router";

import { SectionCut } from "@/components/site/art";
import { ActionLink } from "@/components/site/Action";
import { CTASection, EventList, Testimonial } from "@/components/site/blocks";
import { Gallery } from "@/components/site/Gallery";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { events, gallery, images, testimonials } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/campus-life")({
  head: () =>
    pageHead({
      title: "Campus Life at Ashrith",
      description:
        "Cultural days, community health camps, sports, clinical postings and student support — life beyond the timetable at the Ashrith campus, Kota, Udupi.",
      path: "/campus-life",
    }),
  component: CampusLifePage,
});

const strands = [
  {
    title: "Service & outreach",
    body: "Community health camps, screening drives and awareness programmes take students into villages around Kota — service is coursework, not an add-on.",
  },
  {
    title: "Ceremony & tradition",
    body: "Lamp lighting, oath taking and graduation days mark each cohort's progress into professional practice.",
  },
  {
    title: "Culture & sport",
    body: "Annual cultural day, inter-batch sports and club activities keep the campus lively through the academic year.",
  },
  {
    title: "Mentoring & support",
    body: "Faculty mentors track each student's clinical progress and academic wellbeing throughout the programme.",
  },
];

function CampusLifePage() {
  return (
    <>
      <PageHero
        eyebrow="Campus life"
        title="Life at Ashrith, beyond the timetable."
        intro="Students here spend their years in wards and laboratories — but also in health camps, cultural nights, sports grounds and study circles."
        image={images.studentsCampus}
        imageAlt="Students walking together on the Ashrith campus"
        breadcrumbs={[{ label: "Campus Life" }]}
      />

      <section className="section-y bg-white">
        <div className="shell">
          <SectionHeading
            number="01"
            eyebrow="What campus life looks like"
            title="Four strands of student life."
          />
          <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-2">
            {strands.map((s, i) => (
              <Reveal key={s.title} delay={i * 60} className="bg-white p-7 md:p-9">
                <span className="font-display text-sm font-extrabold text-saffron">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-extrabold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionCut from="white" to="haze" variant="curve" />
      <section className="section-y bg-haze">
        <div className="shell">
          <SectionHeading
            number="02"
            eyebrow="In pictures"
            title="Campus life in pictures."
            action={
              <ActionLink to="/gallery" variant="outline">
                Full Gallery
              </ActionLink>
            }
          />
          <div className="mt-10">
            <Gallery items={gallery.slice(2, 11)} />
          </div>
        </div>
      </section>

      <SectionCut from="haze" to="white" variant="diagonal" />
      <section className="section-y bg-white">
        <div className="shell">
          <p className="eyebrow">Student voice</p>
          <div className="mt-8">
            <Testimonial {...testimonials[0]!} />
          </div>
        </div>
      </section>

      <SectionCut from="white" to="cream" variant="concave" />
      <section className="section-y bg-cream">
        <div className="shell">
          <SectionHeading
            number="03"
            eyebrow="Recent happenings"
            title="Events across the academic year."
            action={
              <ActionLink to="/events" variant="outline">
                All Events
              </ActionLink>
            }
          />
          <div className="mt-10">
            <EventList items={events.slice(0, 3)} />
          </div>
        </div>
      </section>

      <CTASection
        topTone="cream"
        title={<>Become part of the next batch.</>}
        intro="Applications are open across nursing and paramedical programmes."
        image={images.eventCultural}
      />
    </>
  );
}
