import { createFileRoute } from "@tanstack/react-router";

import { SectionCut } from "@/components/site/art";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { FAQ } from "@/components/site/FAQ";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { faqs, images, org } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Us",
      description: `Contact Ashrith Group of Institutions at ${org.address.full}. Phone ${org.phones[0]}, email ${org.email}. Office hours and campus map.`,
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us."
        intro="The administrative office at Kota answers admissions, academic and general enquiries during working hours."
        image={images.campusLocation}
        imageAlt="The Ashrith campus on NH-66 at Kota"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-y bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Reach us</p>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
              Campus & office details.
            </h2>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-saffron" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="font-display text-[0.62rem] font-bold tracking-[0.14em] text-ink-soft uppercase">
                    Address
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink">
                    {org.address.line1}
                    <br />
                    {org.address.line2}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-saffron" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="font-display text-[0.62rem] font-bold tracking-[0.14em] text-ink-soft uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1.5 space-y-1 text-sm text-ink">
                    {org.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="block hover:text-navy"
                      >
                        {p}
                      </a>
                    ))}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-saffron" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="font-display text-[0.62rem] font-bold tracking-[0.14em] text-ink-soft uppercase">
                    Email
                  </dt>
                  <dd className="mt-1.5 space-y-1 text-sm break-words text-ink">
                    <a href={`mailto:${org.email}`} className="block hover:text-navy">
                      {org.email}
                    </a>
                    <a href={`mailto:${org.admissionsEmail}`} className="block hover:text-navy">
                      {org.admissionsEmail}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-saffron" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="font-display text-[0.62rem] font-bold tracking-[0.14em] text-ink-soft uppercase">
                    Office hours
                  </dt>
                  <dd className="mt-1.5 space-y-1 text-sm text-ink">
                    {org.officeHours.map((h) => (
                      <p key={h.day}>
                        <span className="font-semibold">{h.day}:</span> {h.time}
                      </p>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <EnquiryForm
            variant="contact"
            title="Send us a message"
            intro="We respond to enquiries during office hours."
          />
        </div>
      </section>

      <SectionCut from="white" to="haze" variant="curve" />
      <section className="section-y bg-haze">
        <div className="shell">
          <SectionHeading number="01" eyebrow="Find us" title="On NH-66 at Kota, Udupi District." />
          <Reveal className="mt-10 border border-hairline bg-white p-2">
            <iframe
              title="Map showing Ashrith Group of Institutions, Kota, Udupi"
              src={org.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full md:h-[28rem]"
            />
          </Reveal>
          <div className="mt-6">
            <a
              href={org.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center bg-navy px-6 font-display text-sm font-bold text-white transition-colors hover:bg-navy-deep"
            >
              Get directions
            </a>
          </div>
        </div>
      </section>

      <SectionCut from="haze" to="white" variant="diagonal" />
      <section className="section-y bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
              Quick answers.
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
