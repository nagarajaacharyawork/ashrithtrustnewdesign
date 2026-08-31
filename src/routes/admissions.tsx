import { createFileRoute } from "@tanstack/react-router";

import { SectionCut } from "@/components/site/art";
import { Check, Mail, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ActionLink } from "@/components/site/Action";
import { ProgrammeList } from "@/components/site/blocks";
import { FAQ } from "@/components/site/FAQ";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { admissionSteps, faqs, images, org, programmes, requiredDocuments } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/admissions")({
  head: () =>
    pageHead({
      title: `Admissions ${org.admissionYear}`,
      description: `Admissions are open for nursing and paramedical programmes at Ashrith Group of Institutions, Kota, Udupi for ${org.admissionYear}. Enquire online or call the admissions office.`,
      path: "/admissions",
    }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow={`Admissions ${org.admissionYear}`}
        title="Apply to Ashrith."
        intro="Five straightforward steps from enquiry to enrolment. Submit the form below and the admissions office will guide you through eligibility and documentation."
        image={images.studentPortrait}
        imageAlt="A student at Ashrith Group of Institutions"
        breadcrumbs={[{ label: "Admissions" }]}
        actions={
          <>
            <a
              href={`tel:${org.phones[0].replace(/\s/g, "")}`}
              className="inline-flex h-12 items-center justify-center gap-2 bg-saffron px-7 font-display text-sm font-bold text-[oklch(0.24_0.05_60)] transition-colors hover:bg-saffron-bright"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {org.phones[0]}
            </a>
            <a
              href={`mailto:${org.admissionsEmail}`}
              className="inline-flex h-12 items-center justify-center gap-2 border border-white/35 bg-white/5 px-7 font-display text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-navy"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {org.admissionsEmail}
            </a>
          </>
        }
      />

      <section className="section-y bg-white">
        <div className="shell">
          <SectionHeading
            number="01"
            eyebrow="How it works"
            title="The admission process, step by step."
          />
          <ol className="mt-10 grid gap-px bg-hairline md:grid-cols-5">
            {admissionSteps.map((s, i) => (
              <Reveal as="li" key={s.number} delay={i * 55} className="bg-white p-6">
                <span className="font-display text-sm font-extrabold text-saffron">{s.number}</span>
                <h3 className="mt-4 font-display text-base leading-snug font-extrabold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <SectionCut from="white" to="haze" variant="wave" />
      <section id="enquiry" className="section-y bg-haze">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">Admission enquiry</p>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
              Start your application.
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
              Complete the form and our admissions team will contact you with the next steps for{" "}
              {org.admissionYear}.
            </p>
            <div className="mt-8 border border-hairline bg-white p-6">
              <h3 className="font-display text-base font-extrabold text-navy">
                Documents to keep ready
              </h3>
              <ul className="mt-4 space-y-2.5">
                {requiredDocuments.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <EnquiryForm
            variant="admission"
            title="Admission enquiry form"
            intro="All enquiries are answered by the admissions office at Kota."
          />
        </div>
      </section>

      <SectionCut from="haze" to="white" variant="wave" />
      <section className="section-y bg-white">
        <div className="shell">
          <SectionHeading
            number="02"
            eyebrow="Choose a programme"
            title="Programmes open for admission."
            action={
              <ActionLink to="/programmes" variant="outline">
                Programme Details
              </ActionLink>
            }
          />
          <div className="mt-10">
            <ProgrammeList items={programmes} />
          </div>
        </div>
      </section>

      <SectionCut from="white" to="cream" variant="wave" />
      <section className="section-y bg-cream">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Admissions FAQ</p>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
              Before you apply.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              Cannot find your answer? Call the admissions office or send a message from the contact
              page.
            </p>
            <ActionLink to="/contact" variant="navy" className="mt-7">
              Contact Admissions
            </ActionLink>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
