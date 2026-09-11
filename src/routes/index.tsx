import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";

import { ActionLink } from "@/components/site/Action";
import { ArtImage, PhotoStack, SectionCut, SectionMark } from "@/components/site/art";
import {
  CTASection,
  LeadershipProfile,
  ProgrammeList,
  StatisticBlock,
  Testimonial,
} from "@/components/site/blocks";
import { Gallery } from "@/components/site/Gallery";
import { ImageMosaic } from "@/components/site/ImageMosaic";
import { InstitutionFeature } from "@/components/site/InstitutionFeature";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  announcements,
  gallery,
  images,
  institutions,
  leadership,
  org,
  pillars,
  programmes,
  testimonials,
} from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Ashrith Group of Institutions | Nursing & Paramedical, Udupi",
      description:
        "Nursing and paramedical education at Kota, Udupi District, Karnataka. Ashrith Group of Institutions offers B.Sc. Nursing, GNM and allied health diplomas with supervised clinical training.",
      path: "/",
    }),
  component: HomePage,
});

const previewProgrammes = programmes.slice(0, 5);
const featuredLeader = leadership.find((l) => l.featured) ?? leadership[0]!;
const supportingLeaders = leadership.filter((l) => l !== featuredLeader).slice(0, 4);
const testimonial = testimonials[0]!;

function HomePage() {
  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_100%_at_0%_0%,oklch(0.402_0.097_244.4)_0%,oklch(0.33_0.079_246)_60%)]"
        />
        <div aria-hidden="true" className="dot-field-light absolute inset-0 opacity-30" />

        <div className="shell relative grid items-center gap-14 py-12 pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:py-20 lg:pb-32">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-saffron" />
              <p className="eyebrow text-saffron-bright">Excellence in Healthcare Education</p>
            </div>
            <h1 className="mt-5 text-[2.6rem] leading-[0.98] font-extrabold text-white sm:text-6xl lg:text-[4.25rem]">
              Study to
              <br />
              <em className="font-display font-extrabold text-saffron not-italic">Serve</em>{" "}
              <span className="italic">Humanity.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
              Nursing and paramedical education managed by {org.trust} at Kota, Udupi District —
              where classroom teaching, laboratory practice and supervised clinical exposure are
              taught as one.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink to="/admissions" size="lg">
                Apply Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ActionLink>
              <ActionLink to="/institutions" variant="ghostLight" size="lg">
                Explore Institutions
              </ActionLink>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4">
              {[
                { v: "15+", l: "Years" },
                { v: "4000+", l: "Students & Alumni" },
                { v: "99%", l: "Placement Assistance" },
                { v: "50+", l: "Faculty & Mentors" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="sr-only">{s.l}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-extrabold text-white sm:text-3xl">
                      {s.v}
                    </span>
                    <span aria-hidden="true" className="mt-2 block h-px w-8 bg-saffron/70" />
                    <span className="mt-2 block font-display text-[0.6rem] font-bold tracking-[0.14em] text-white/55 uppercase">
                      {s.l}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:pl-6">
            <PhotoStack
              main={images.campusHero}
              mainAlt="Ashrith Group of Institutions campus building at Kota, Udupi"
              inset={images.nursingStudents}
              insetAlt="Nursing students practising patient care"
              position="bottom-left"
              shape="arch"
              ratio="aspect-[4/3] lg:aspect-[5/4]"
              badge={{ value: "15+", label: "Years of Service" }}
              label="Kota Campus"
              index="01"
              priority
            />
            <span className="absolute -top-3 right-2 hidden items-center gap-2 rounded-tl-[1rem] rounded-br-[1rem] bg-white px-3.5 py-2 font-display text-[0.6rem] font-bold tracking-[0.16em] text-navy uppercase shadow-soft sm:inline-flex">
              NH-66 · Udupi
            </span>
          </div>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 block h-10 w-full sm:h-16 md:h-24"
          focusable="false"
        >
          <path d="M0,120 L0,66 C240,14 470,112 720,74 C980,34 1210,96 1440,52 L1440,120 Z" fill="var(--cream)" />
        </svg>
      </section>

      {/* --------------------------- ANNOUNCEMENTS --------------------------- */}
      <section aria-label="Announcements" className="bg-cream">
        <div className="shell grid gap-px bg-hairline md:grid-cols-3">
          {announcements.map((a, i) => (
            <Link
              key={a.label}
              to={a.to}
              className="group flex items-start gap-4 bg-cream px-5 py-6 transition-colors hover:bg-white"
            >
              <span
                className="mt-0.5 font-display text-[0.7rem] font-extrabold text-saffron"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[0.7rem] font-bold tracking-[0.14em] text-navy uppercase">
                  {a.label}
                </span>
                <span className="mt-1.5 block text-sm text-ink-soft">{a.text}</span>
                <span className="mt-2 inline-flex items-center gap-1.5 font-display text-[0.75rem] font-bold text-saffron">
                  {a.cta}
                  <ArrowRight
                    className="h-3 w-3 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SectionCut from="cream" to="white" variant="wave" />

      {/* --------------------------- INTRODUCTION ---------------------------- */}
      <section className="section-y relative overflow-hidden bg-white pt-4 md:pt-8">
        <div className="shell relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <SectionMark number="01" label="Who we are" />
            <h2 className="mt-4 text-3xl leading-[1.08] font-extrabold text-ink sm:text-4xl lg:text-[2.9rem]">
              15 years of building healthcare professionals with purpose.
            </h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
              <p>
                {org.trust} was established to serve the community through healthcare, education and
                social work. Ashrith College & School of Nursing and K. R. Hegde College of
                Paramedical Sciences were founded and are managed by the Trust on a single campus at
                Kota, Udupi District.
              </p>
              <p>
                Both institutions share one conviction: healthcare cannot be learned from a book
                alone. Students train where care happens — in laboratories, demonstration rooms and
                supervised clinical settings — from their first year onward.
              </p>
            </div>
            <ActionLink to="/about" variant="outline" className="mt-8">
              Discover Our Story
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ActionLink>
          </Reveal>

          <Reveal delay={100} className="relative">
            <ArtImage
              src={images.classroom}
              alt="Students attending a lecture at the Ashrith campus"
              shape="leaf"
              ratio="aspect-[16/10]"
              index="01"
              label="Classroom teaching"
              outline="orange"
            />
            <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-5">
              <ArtImage
                src={images.skillsLab}
                alt="Faculty demonstrating a procedure in the nursing skills laboratory"
                shape="dropBR"
                ratio="aspect-square"
                index="02"
                label="Skills lab"
              />
              <ArtImage
                src={images.labTraining}
                alt="Paramedical students working in the laboratory"
                shape="arch"
                ratio="aspect-square"
                index="03"
                label="Laboratory"
                className="sm:mt-8"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SectionCut from="white" to="haze" variant="wave" />

      {/* --------------------------- INSTITUTIONS ---------------------------- */}
      <section className="section-y relative overflow-hidden bg-haze pt-4 md:pt-8">
        <div className="shell relative">
          <SectionHeading
            number="01"
            eyebrow="Our institutions"
            title={
              <>
                Two institutions.
                <br />
                One commitment to healthcare.
              </>
            }
            action={
              <ActionLink to="/institutions" variant="outline">
                View Both Institutions
              </ActionLink>
            }
          />
          <div className="mt-16 space-y-24 lg:space-y-32">
            {institutions.map((inst, i) => (
              <InstitutionFeature
                key={inst.slug}
                institution={inst}
                reverse={i % 2 === 1}
                programmeCount={programmes.filter((p) => p.institutionSlug === inst.slug).length}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionCut from="haze" to="white" variant="wave" />

      {/* ----------------------------- WHY ASHRITH ---------------------------- */}
      <section className="section-y relative overflow-hidden bg-white pt-4 md:pt-8">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionMark number="03" label="Why Ashrith" />
            <h2 className="mt-4 text-3xl leading-[1.08] font-extrabold text-ink sm:text-4xl">
              Five things we refuse to compromise on.
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
              Every decision at Ashrith — timetable, batch size, laboratory hours — is made against
              these five commitments.
            </p>
            <div className="mt-10 hidden lg:block">
              <ArtImage
                src={images.facultyMentoring}
                alt="Faculty member mentoring students"
                shape="arch"
                ratio="aspect-[4/3]"
                index="04"
                label="Faculty mentorship"
              />
            </div>
          </div>

          <ol className="border-t border-hairline">
            {pillars.map((p, i) => (
              <Reveal
                as="li"
                key={p.number}
                delay={i * 60}
                className="row-indicator group border-b border-hairline py-7"
              >
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 md:gap-8">
                  <span className="font-display text-xl font-extrabold text-saffron md:text-2xl">
                    {p.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg leading-snug font-extrabold text-ink md:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <SectionCut from="white" to="cream" variant="wave" />

      {/* ----------------------------- PROGRAMMES ---------------------------- */}
      <section className="section-y relative overflow-hidden bg-cream pt-4 md:pt-8">
        <div className="shell relative">
          <SectionHeading
            number="02"
            eyebrow="Programmes"
            title="Courses built for a defined healthcare role."
            intro="Degree and diploma programmes across nursing and allied health sciences, each with structured practical training."
            action={
              <ActionLink to="/programmes" variant="outline">
                View All Programmes
              </ActionLink>
            }
          />
          <div className="mt-10 overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] bg-white px-2 md:px-4">
            <ProgrammeList items={previewProgrammes} />
          </div>
        </div>
      </section>

      <SectionCut from="cream" to="navy" variant="wave" />

      {/* ----------------------------- STATISTICS ---------------------------- */}
      <section className="relative overflow-hidden bg-navy">
        <div aria-hidden="true" className="dot-field-light absolute inset-0 opacity-30" />
        <div className="shell relative py-14 md:py-16">
          <SectionMark number="05" label="Measured in outcomes" tone="light" />
          <h2 className="mt-4 max-w-2xl text-2xl leading-tight font-extrabold text-white sm:text-3xl">
            Fifteen years of steady, practical healthcare education.
          </h2>
        </div>
        <div className="shell relative pb-16 md:pb-20">
          <StatisticBlock tone="dark" />
        </div>
      </section>

      <SectionCut from="navy" to="white" variant="wave" />

      {/* ------------------------------- CAMPUS ------------------------------ */}
      <section className="section-y relative overflow-hidden bg-white pt-4 md:pt-8">
        <div className="shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="zoom-media overflow-hidden rounded-b-[5rem] rounded-tl-[3rem] bg-mist">
              <img
                src={images.campusLocation}
                alt="The Ashrith campus surroundings along NH-66 near Kota, Udupi"
                loading="lazy"
                width={1600}
                height={1000}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <span className="absolute -top-4 left-4 inline-flex items-center gap-2 rounded-tl-[1rem] rounded-br-[1rem] bg-navy px-3.5 py-2 font-display text-[0.6rem] font-bold tracking-[0.16em] text-white uppercase shadow-lift">
              <MapPin className="h-3.5 w-3.5 text-saffron" aria-hidden="true" />
              Kota, Udupi
            </span>
            <span className="absolute right-4 -bottom-4 rounded-tl-[1rem] rounded-br-[1rem] bg-saffron px-3.5 py-2 font-display text-[0.6rem] font-extrabold tracking-[0.16em] text-[oklch(0.24_0.05_60)] uppercase shadow-soft">
              13°58′N · 74°42′E
            </span>
          </Reveal>
          <Reveal delay={80}>
            <SectionMark number="06" label="Our campus" />
            <h2 className="mt-4 text-3xl leading-[1.08] font-extrabold text-ink sm:text-4xl">
              Our campus at Kota, Udupi.
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
              The campus sits directly on NH-66 in Kota, within easy reach of Udupi, Kundapura and
              the wider coastal belt — placing students close to the healthcare facilities where
              they train.
            </p>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] border border-hairline bg-hairline sm:grid-cols-3">
              {[
                { t: "Highway", d: "NH-66 frontage" },
                { t: "Location", d: "Kota, Udupi District" },
                { t: "Nearby", d: "Healthcare facilities" },
              ].map((x) => (
                <div key={x.t} className="bg-white px-5 py-5">
                  <dt className="font-display text-[0.62rem] font-bold tracking-[0.14em] text-ink-soft uppercase">
                    {x.t}
                  </dt>
                  <dd className="mt-1.5 font-display text-sm font-extrabold text-navy">{x.d}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink to="/campus" variant="navy">
                Explore Campus
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ActionLink>
              <a
                href={`tel:${org.phones[0].replace(/\s/g, "")}`}
                className="inline-flex h-11 items-center justify-center gap-2 border border-navy/20 px-6 font-display text-sm font-bold text-navy transition-colors hover:bg-mist"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {org.phones[0]}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionCut from="white" to="haze" variant="wave" />

      {/* -------------------------- LEARNING IN ACTION ----------------------- */}
      <section className="section-y relative overflow-hidden bg-haze pt-4 md:pt-8">
        <div className="shell relative">
          <SectionHeading
            number="03"
            eyebrow="Learning in action"
            title="Where the teaching actually happens."
            intro="Skills laboratories, diagnostic benches, demonstration theatres and supervised wards — the settings students work in week after week."
          />
          <Reveal className="mt-12">
            <ImageMosaic
              items={[
                {
                  src: images.nursingStudents,
                  alt: "Nursing practice in a training ward",
                  caption: "Clinical practice",
                },
                { src: images.labTraining, alt: "Laboratory bench work", caption: "Laboratory" },
                {
                  src: images.otTraining,
                  alt: "Operation theatre training session",
                  caption: "Theatre training",
                },
                {
                  src: images.facultyMentoring,
                  alt: "Faculty mentoring students",
                  caption: "Faculty mentorship",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <SectionCut from="haze" to="white" variant="wave" />

      {/* ----------------------------- CAMPUS LIFE --------------------------- */}
      <section className="section-y relative overflow-hidden bg-white pt-4 md:pt-8">
        <div className="shell">
          <SectionHeading
            number="04"
            eyebrow="Campus life"
            title="A campus that keeps students busy beyond the timetable."
            action={
              <ActionLink to="/campus-life" variant="outline">
                Explore Campus Life
              </ActionLink>
            }
          />
          <div className="mt-10">
            <Gallery items={gallery.slice(0, 7)} />
          </div>
        </div>
      </section>

      <SectionCut from="white" to="cream" variant="wave" />

      {/* ----------------------------- LEADERSHIP ---------------------------- */}
      <section className="section-y relative overflow-hidden bg-cream pt-4 md:pt-8">
        <div className="shell relative">
          <SectionHeading
            number="05"
            eyebrow="Leadership"
            title="The trustees who set the standard."
            action={
              <ActionLink to="/leadership" variant="outline">
                Meet Our Leadership
              </ActionLink>
            }
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10">
            <Reveal className="relative flex flex-col justify-between overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] bg-navy p-8 text-white md:p-10">
              <div aria-hidden="true" className="dot-field-light absolute inset-0 opacity-30" />
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="grid h-16 w-16 place-items-center rounded-tl-[1.25rem] rounded-br-[1.25rem] bg-white/10 font-display text-xl font-extrabold text-white"
                >
                  {featuredLeader.initials}
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold">{featuredLeader.name}</h3>
                <p className="mt-2 font-display text-[0.68rem] font-bold tracking-[0.14em] text-saffron-bright uppercase">
                  {featuredLeader.role}
                </p>
                <span aria-hidden="true" className="mt-5 block h-px w-12 bg-saffron" />
                <p className="mt-5 text-sm leading-relaxed text-white/70">{featuredLeader.bio}</p>
              </div>
              <p className="relative mt-8 border-t border-white/15 pt-6 font-display text-sm font-bold text-white/80">
                {org.trust} · {org.tagline}
              </p>
            </Reveal>
            <div className="flex flex-col justify-center gap-4">
              {supportingLeaders.map((l, i) => (
                <Reveal key={l.name} delay={i * 60}>
                  <LeadershipProfile leader={l} compact />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionCut from="cream" to="haze" variant="wave" />

      {/* -------------------------- STUDENT EXPERIENCE ----------------------- */}
      <section className="section-y relative overflow-hidden bg-haze pt-4 md:pt-8">
        <div className="shell relative">
          <SectionMark number="07" label="Student experience" />
          <div className="mt-10">
            <Testimonial {...testimonial} />
          </div>
          <div className="mt-10">
            <ActionLink to="/campus-life" variant="navy">
              Explore Student Life
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ActionLink>
          </div>
        </div>
      </section>

      {/* -------------------------------- CTA -------------------------------- */}
      <CTASection
        title={
          <>
            Your journey towards <span className="text-saffron">healthcare excellence</span> starts
            here.
          </>
        }
        intro={`Applications for ${org.admissionYear} are open across nursing and paramedical programmes.`}
        image={images.studentsCampus}
        topTone="haze"
      />

      <section className="border-t border-hairline bg-white py-8">
        <div className="shell flex flex-col gap-3 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
            {org.address.full}
          </p>
          <Link to="/contact" className="font-display font-bold text-navy hover:text-saffron">
            Get directions & contact details →
          </Link>
        </div>
      </section>
    </>
  );
}
