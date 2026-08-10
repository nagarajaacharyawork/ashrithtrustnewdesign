import { ArrowRight } from "lucide-react";

import { ActionLink } from "@/components/site/Action";
import { PhotoStack, SectionMark } from "@/components/site/art";
import { Reveal } from "@/components/site/Reveal";
import type { Institution } from "@/data/site";
import { cn } from "@/lib/utils";

export function InstitutionFeature({
  institution,
  reverse = false,
  programmeCount,
}: {
  institution: Institution;
  reverse?: boolean;
  programmeCount: number;
}) {
  return (
    <Reveal
      as="article"
      className={cn(
        "relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -left-2 font-display text-[7rem] leading-none font-extrabold text-navy/[0.06] select-none lg:-top-16 lg:text-[11rem]"
        >
          {institution.index}
        </span>
        <PhotoStack
          main={institution.image}
          mainAlt={institution.name}
          inset={institution.secondaryImage}
          insetAlt=""
          shape={reverse ? "dropTL" : "leaf"}
          position={reverse ? "bottom-left" : "bottom-right"}
          label={institution.shortName}
          index={institution.index}
          ratio={reverse ? "aspect-[5/4]" : "aspect-[4/3]"}
          badge={{ value: String(programmeCount), label: "Programmes" }}
        />
      </div>

      <div className="mt-6 lg:mt-0">
        <SectionMark number={institution.index} label={`Institution ${institution.index}`} />
        <h3 className="mt-4 text-2xl leading-tight font-extrabold text-ink sm:text-3xl lg:text-[2.15rem]">
          {institution.name}
        </h3>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{institution.summary}</p>

        <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] border border-hairline bg-hairline sm:max-w-sm">
          <div className="bg-white px-4 py-4">
            <dt className="font-display text-[0.62rem] font-bold tracking-[0.14em] text-ink-soft uppercase">
              Programmes
            </dt>
            <dd className="mt-1 font-display text-xl font-extrabold text-navy">{programmeCount}</dd>
          </div>
          <div className="bg-white px-4 py-4">
            <dt className="font-display text-[0.62rem] font-bold tracking-[0.14em] text-ink-soft uppercase">
              Focus
            </dt>
            <dd className="mt-1 font-display text-sm font-extrabold text-navy">
              {institution.shortName}
            </dd>
          </div>
        </dl>

        <ul className="mt-6 space-y-2.5">
          {institution.highlights.slice(0, 3).map((h) => (
            <li key={h.title} className="flex gap-3 text-sm text-ink-soft">
              <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-saffron" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-ink">{h.title}.</strong> {h.body}
              </span>
            </li>
          ))}
        </ul>

        <ActionLink to={institution.to} variant="navy" className="mt-8">
          Explore {institution.shortName}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ActionLink>
      </div>
    </Reveal>
  );
}
