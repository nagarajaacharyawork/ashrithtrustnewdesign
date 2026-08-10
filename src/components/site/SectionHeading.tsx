import type { ReactNode } from "react";

import { SectionMark } from "@/components/site/art";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  number,
  title,
  intro,
  align = "left",
  tone = "dark",
  action,
  className,
}: {
  eyebrow?: string;
  /** Editorial section number, e.g. "02" — renders the 02 —— LABEL marker. */
  number?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  action?: ReactNode;
  className?: string;
}) {
  const light = tone === "light";
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center"
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {number && eyebrow ? (
          <SectionMark
            number={number}
            label={eyebrow}
            tone={light ? "light" : "dark"}
            className={cn("mb-4", align === "center" && "justify-center")}
          />
        ) : eyebrow ? (
          <p className={cn("eyebrow mb-3", light && "text-saffron-bright")}>{eyebrow}</p>
        ) : null}
        <h2
          className={cn(
            "text-3xl leading-[1.08] font-extrabold sm:text-4xl lg:text-[2.75rem]",
            light ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
        {intro ? (
          <p
            className={cn(
              "mt-4 text-[0.9375rem] leading-relaxed md:text-base",
              light ? "text-white/75" : "text-ink-soft",
            )}
          >
            {intro}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
