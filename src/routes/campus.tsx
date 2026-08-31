import { createFileRoute } from "@tanstack/react-router";

import { SectionCut } from "@/components/site/art";
import { CTASection } from "@/components/site/blocks";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { facilities, images, org } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/campus")({
  head: () =>
    pageHead({
      title: "Campus & Facilities",
      description:
        "The Ashrith campus at Kota on NH-66, Udupi District — classrooms, nursing skills labs, diagnostic laboratories, library and clinical demonstration spaces.",
      path: "/campus",
    }),
  component: CampusPage,
});

function CampusPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus"
        title="A campus built around practice."
        intro="Laboratories, demonstration rooms and reading spaces at Kota, Udupi District — designed so students spend more hours doing than watching."
        image={images.campusHero}
        imageAlt="Ashrith campus academic block"
        breadcrumbs={[{ label: "Campus" }]}
        meta={[
          { label: "Location", value: "Kota, Udupi" },
          { label: "Highway", value: "NH-66 frontage" },
          { label: "Institutions", value: "Two" },
          { label: "Facilities", value: `${facilities.length}+` },
        ]}
      />

      <section className="section-y bg-white">
        <div className="shell">
          <SectionHeading
            number="01"
            eyebrow="Facilities"
            title="Everything students need within one campus."
            intro="Shared across both institutions, maintained for daily teaching use."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 55} className="flex flex-col border border-hairline bg-white">
                <div className="zoom-media overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-extrabold text-ink">{f.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionCut from="white" to="haze" variant="wave" />
      <section className="section-y bg-haze">
        <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Getting here</p>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
              On NH-66, minutes from Kota.
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
              The campus is located directly on National Highway 66 at Kota, between Udupi and
              Kundapura, making it reachable by bus and road from across the coastal districts.
            </p>
            <address className="mt-7 border-l-2 border-saffron pl-5 text-sm leading-relaxed text-ink not-italic">
              {org.address.line1}
              <br />
              {org.address.line2}
            </address>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={org.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center bg-navy px-6 font-display text-sm font-bold text-white transition-colors hover:bg-navy-deep"
              >
                Open in Google Maps
              </a>
              <a
                href={`tel:${org.phones[0].replace(/\s/g, "")}`}
                className="inline-flex h-11 items-center justify-center border border-navy/25 px-6 font-display text-sm font-bold text-navy transition-colors hover:bg-mist"
              >
                Call the campus
              </a>
            </div>
          </Reveal>
          <Reveal delay={80} className="border border-hairline bg-white p-2">
            <iframe
              title="Map showing the Ashrith campus at Kota, Udupi"
              src={org.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full lg:h-[26rem]"
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        topTone="haze"
        title={<>Plan a visit to the Kota campus.</>}
        intro="See the laboratories and classrooms before you decide."
        image={images.campusLocation}
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "View Programmes", to: "/programmes" }}
      />
    </>
  );
}
