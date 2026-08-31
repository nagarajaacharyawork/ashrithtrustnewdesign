import { ArrowRight, Check } from "lucide-react";

import { PhotoStack, SectionCut, SectionMark } from "@/components/site/art";
import { ActionLink } from "@/components/site/Action";
import { CTASection, ProgrammeList } from "@/components/site/blocks";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images, programmes, type Institution } from "@/data/site";

export function InstitutionPage({ institution }: { institution: Institution }) {
  const list = programmes.filter((p) => p.institutionSlug === institution.slug);

  return (
    <>
      <PageHero
        eyebrow={`Institution ${institution.index}`}
        title={institution.name}
        intro={institution.summary}
        image={institution.image}
        imageAlt={institution.name}
        breadcrumbs={[
          { label: "Institutions", to: "/institutions" },
          { label: institution.shortName },
        ]}
        meta={[
          { label: "Programmes", value: String(list.length) },
          { label: "Campus", value: "Kota, Udupi" },
          { label: "Focus", value: institution.shortName },
          { label: "Managed by", value: "Ashrith Trust (R.)" },
        ]}
        actions={
          <>
            <ActionLink to="/admissions" size="lg">
              Apply Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ActionLink>
            <ActionLink to="/contact" variant="ghostLight" size="lg">
              Ask a Question
            </ActionLink>
          </>
        }
      />

      <section className="section-y relative overflow-hidden bg-white pt-4 md:pt-8">
        <div className="shell relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <Reveal>
            <SectionMark number="01" label="Overview" />
            <h2 className="mt-4 text-3xl leading-[1.1] font-extrabold text-ink sm:text-4xl">
              About the{" "}
              {institution.shortName === "Nursing"
                ? "College & School of Nursing"
                : "College of Paramedical Sciences"}
            </h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
              {institution.description.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PhotoStack
              main={institution.secondaryImage}
              mainAlt={`Training facilities at ${institution.name}`}
              inset={institution.image}
              insetAlt=""
              shape={institution.slug === "nursing" ? "arch" : "leaf"}
              position={institution.slug === "nursing" ? "bottom-left" : "bottom-right"}
              ratio="aspect-[4/5]"
              label="Training facilities"
              index="01"
            />
          </Reveal>
        </div>
      </section>

      <SectionCut from="white" to="haze" variant="wave" />
      <section className="section-y bg-haze">
        <div className="shell">
          <SectionHeading
            number="02"
            eyebrow="What sets it apart"
            title="How students learn here."
          />
          <div className="mt-10 grid gap-px bg-hairline md:grid-cols-3">
            {institution.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70} className="flex flex-col bg-white p-7 md:p-8">
                <span className="font-display text-sm font-extrabold text-saffron">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg leading-snug font-extrabold text-ink">
                  {h.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{h.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionCut from="haze" to="white" variant="curve" />
      <section className="section-y bg-white">
        <div className="shell">
          <SectionHeading
            number="03"
            eyebrow="Programmes"
            title={`Programmes at ${institution.shortName === "Nursing" ? "the School of Nursing" : "the College of Paramedical Sciences"}`}
            action={
              <ActionLink to="/programmes" variant="outline">
                All Programmes
              </ActionLink>
            }
          />
          <div className="mt-10">
            <ProgrammeList items={list} />
          </div>
        </div>
      </section>

      <SectionCut from="white" to="cream" variant="wave" />
      <section className="section-y bg-cream">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Facilities</p>
            <h2 className="mt-3 text-2xl leading-tight font-extrabold text-ink sm:text-3xl">
              Laboratories & learning spaces
            </h2>
            <ul className="mt-6 space-y-3">
              {institution.facilities.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Careers</p>
            <h2 className="mt-3 text-2xl leading-tight font-extrabold text-ink sm:text-3xl">
              Where graduates work
            </h2>
            <ul className="mt-6 space-y-3">
              {institution.careers.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-ink-soft">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        topTone="cream"
        title={<>Train where healthcare actually happens.</>}
        intro={`Admissions are open for ${institution.shortName.toLowerCase()} programmes.`}
        image={images.studentsCampus}
      />
    </>
  );
}
