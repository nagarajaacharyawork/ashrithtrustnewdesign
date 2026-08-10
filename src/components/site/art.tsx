import type { ReactNode } from "react";

import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------------
 * Ashrith visual language — section transitions, organic image framing,
 * editorial numbering, ghost typography and decorative markers.
 * ------------------------------------------------------------------------ */

export type Tone = "white" | "haze" | "cream" | "mist" | "navy" | "navyDeep";

const toneFill: Record<Tone, string> = {
  white: "#ffffff",
  haze: "var(--haze)",
  cream: "var(--cream)",
  mist: "var(--mist)",
  navy: "var(--navy)",
  navyDeep: "var(--navy-deep)",
};

const toneBg: Record<Tone, string> = {
  white: "bg-white",
  haze: "bg-haze",
  cream: "bg-cream",
  mist: "bg-mist",
  navy: "bg-navy",
  navyDeep: "bg-navy-deep",
};

export type CutVariant =
  "curve" | "arc" | "concave" | "diagonal" | "diagonalReverse" | "wave" | "step";

const cutPaths: Record<CutVariant, string> = {
  curve: "M0,120 L0,44 C400,132 1040,132 1440,44 L1440,120 Z",
  arc: "M0,120 L0,116 C480,-46 960,-46 1440,116 L1440,120 Z",
  concave: "M0,120 C360,4 1080,4 1440,120 Z",
  diagonal: "M0,120 L1440,10 L1440,120 Z",
  diagonalReverse: "M0,120 L0,10 L1440,120 Z",
  wave: "M0,120 L0,66 C240,14 470,112 720,74 C980,34 1210,96 1440,52 L1440,120 Z",
  step: "M0,120 L0,72 L560,72 C640,72 660,26 740,26 L1440,26 L1440,120 Z",
};

/** Designed transition between two adjacent section colours. */
export function SectionCut({
  from,
  to,
  variant = "curve",
  className,
}: {
  from: Tone;
  to: Tone;
  variant?: CutVariant;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative -mt-px w-full overflow-hidden", toneBg[from], className)}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-10 w-full sm:h-16 md:h-24"
        focusable="false"
      >
        <path d={cutPaths[variant]} fill={toneFill[to]} />
      </svg>
    </div>
  );
}

/** Oversized, very low contrast word used as background texture. */
export function GhostWord({
  children,
  className,
  tone = "mist",
}: {
  children: ReactNode;
  className?: string;
  tone?: "mist" | "light" | "warm";
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute font-display leading-[0.78] font-extrabold tracking-tight uppercase select-none",
        "text-[6rem] sm:text-[10rem] lg:text-[15rem]",
        tone === "mist" && "text-mist",
        tone === "light" && "text-white/[0.06]",
        tone === "warm" && "text-saffron/[0.09]",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Editorial section marker: 01 ——— ABOUT */
export function SectionMark({
  number,
  label,
  tone = "dark",
  className,
}: {
  number: string;
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p className={cn("flex items-center gap-3", className)}>
      <span className="font-display text-[0.8rem] font-extrabold tracking-[0.08em] text-saffron">
        {number}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-8 shrink-0 sm:w-12",
          tone === "light" ? "bg-white/35" : "bg-saffron/45",
        )}
      />
      <span
        className={cn(
          "font-display text-[0.68rem] font-bold tracking-[0.2em] uppercase",
          tone === "light" ? "text-white/70" : "text-ink-soft",
        )}
      >
        {label}
      </span>
    </p>
  );
}

/** Small dotted / marker divider. */
export function DotRule({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={cn("flex items-center gap-2", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
      <span className={cn("h-px w-16", tone === "light" ? "bg-white/25" : "bg-hairline")} />
      <span
        className={cn("h-1.5 w-1.5 rounded-full", tone === "light" ? "bg-white/40" : "bg-navy/30")}
      />
    </span>
  );
}

export type FrameShape = "arch" | "leaf" | "dropBR" | "dropTL" | "curveBottom" | "soft" | "square";

const shapeClass: Record<FrameShape, string> = {
  arch: "rounded-t-[6rem] lg:rounded-t-[9rem]",
  leaf: "rounded-tl-[4rem] rounded-br-[4rem] lg:rounded-tl-[6rem] lg:rounded-br-[6rem]",
  dropBR: "rounded-br-[4.5rem] lg:rounded-br-[7rem]",
  dropTL: "rounded-tl-[4.5rem] lg:rounded-tl-[7rem]",
  curveBottom: "rounded-b-[3rem] lg:rounded-b-[5rem]",
  soft: "rounded-[1.75rem]",
  square: "",
};

export function shapeOf(shape: FrameShape) {
  return shapeClass[shape];
}

/** Art-directed photograph: organic mask + optional editorial label. */
export function ArtImage({
  src,
  alt,
  shape = "leaf",
  index,
  label,
  ratio = "aspect-[4/3]",
  className,
  imgClassName,
  outline,
  priority = false,
}: {
  src: string;
  alt: string;
  shape?: FrameShape;
  index?: string;
  label?: string;
  ratio?: string;
  className?: string;
  imgClassName?: string;
  outline?: "orange" | "blue";
  priority?: boolean;
}) {
  return (
    <figure className={cn("relative", className)}>
      {outline ? (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -inset-x-3 -inset-y-3 hidden border sm:block",
            shapeClass[shape],
            outline === "orange" ? "border-saffron/45" : "border-navy/20",
          )}
        />
      ) : null}
      <div className={cn("zoom-media relative overflow-hidden bg-mist", shapeClass[shape])}>
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          {...(priority ? { fetchPriority: "high" as const } : {})}
          className={cn("w-full object-cover", ratio, imgClassName)}
        />
      </div>
      {index || label ? (
        <figcaption className="mt-3 flex items-center gap-2.5">
          {index ? (
            <span className="font-display text-[0.72rem] font-extrabold text-saffron">{index}</span>
          ) : null}
          <span aria-hidden="true" className="h-px w-6 bg-saffron/50" />
          {label ? (
            <span className="font-display text-[0.62rem] font-bold tracking-[0.18em] text-ink-soft uppercase">
              {label}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Layered photography: a main image with a smaller overlapping frame. */
export function PhotoStack({
  main,
  mainAlt,
  inset,
  insetAlt,
  shape = "leaf",
  position = "bottom-right",
  badge,
  label,
  index,
  ratio = "aspect-[4/3]",
  className,
  priority = false,
}: {
  main: string;
  mainAlt: string;
  inset?: string;
  insetAlt?: string;
  shape?: FrameShape;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  badge?: { value: string; label: string };
  label?: string;
  index?: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
}) {
  const pos = {
    "bottom-right": "-bottom-8 right-4 lg:-right-8",
    "bottom-left": "-bottom-8 left-4 lg:-left-8",
    "top-right": "-top-8 right-4 lg:-right-8",
    "top-left": "-top-8 left-4 lg:-left-8",
  }[position];

  return (
    <div className={cn("relative", inset && "mb-12 lg:mb-14", className)}>
      <div className={cn("zoom-media relative overflow-hidden bg-mist", shapeClass[shape])}>
        <img
          src={main}
          alt={mainAlt}
          loading={priority ? "eager" : "lazy"}
          {...(priority ? { fetchPriority: "high" as const } : {})}
          className={cn("w-full object-cover", ratio)}
        />
        {label ? (
          <span className="absolute bottom-0 left-0 flex items-center gap-2 bg-white/95 px-3.5 py-2 backdrop-blur-sm">
            {index ? (
              <span className="font-display text-[0.68rem] font-extrabold text-saffron">
                {index}
              </span>
            ) : null}
            <span className="font-display text-[0.6rem] font-bold tracking-[0.18em] text-navy uppercase">
              {label}
            </span>
          </span>
        ) : null}
      </div>

      {inset ? (
        <div
          className={cn(
            "absolute w-32 overflow-hidden rounded-tl-[2rem] border-4 border-white shadow-lift sm:w-40 lg:w-52",
            pos,
          )}
        >
          <img
            src={inset}
            alt={insetAlt ?? ""}
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        </div>
      ) : null}

      {badge ? (
        <div className="absolute -top-4 -left-2 rounded-tl-[1.25rem] rounded-br-[1.25rem] bg-saffron px-4 py-3 text-[oklch(0.24_0.05_60)] shadow-soft sm:-left-5">
          <span className="block font-display text-xl leading-none font-extrabold sm:text-2xl">
            {badge.value}
          </span>
          <span className="mt-1 block font-display text-[0.55rem] font-bold tracking-[0.16em] uppercase">
            {badge.label}
          </span>
        </div>
      ) : null}
    </div>
  );
}

/** Section wrapper with tone + optional ghost word, keeps overflow contained. */
export function ArtSection({
  tone = "white",
  ghost,
  ghostClassName,
  ghostTone,
  className,
  children,
  id,
}: {
  tone?: Tone;
  ghost?: string;
  ghostClassName?: string;
  ghostTone?: "mist" | "light" | "warm";
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("section-y relative overflow-hidden", toneBg[tone], className)}>
      {ghost ? (
        <GhostWord
          {...(ghostTone ? { tone: ghostTone } : {})}
          className={cn("top-6 -right-4 lg:-right-10", ghostClassName)}
        >
          {ghost}
        </GhostWord>
      ) : null}
      <div className="relative">{children}</div>
    </section>
  );
}

/** Small floating metadata chip used near photography. */
export function MetaChip({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "navy";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-tl-[1rem] rounded-br-[1rem] px-3.5 py-2 font-display text-[0.6rem] font-bold tracking-[0.18em] uppercase shadow-soft",
        tone === "navy" ? "bg-navy text-white" : "bg-white text-navy",
        className,
      )}
    >
      {children}
    </span>
  );
}

export { Reveal };
