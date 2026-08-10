import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function FAQ({
  items,
  tone = "light",
}: {
  items: { q: string; a: string }[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const dark = tone === "dark";

  return (
    <div className={cn("border-t", dark ? "border-white/15" : "border-hairline")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={cn("border-b", dark ? "border-white/15" : "border-hairline")}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span
                  className={cn(
                    "font-display text-[0.95rem] leading-snug font-extrabold md:text-base",
                    dark ? "text-white" : "text-ink",
                  )}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 grid h-7 w-7 shrink-0 place-items-center border transition-colors",
                    dark ? "border-white/25 text-white" : "border-hairline text-navy",
                    isOpen && "border-saffron bg-saffron text-[oklch(0.24_0.05_60)]",
                  )}
                >
                  {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "max-w-3xl text-sm leading-relaxed",
                    dark ? "text-white/70" : "text-ink-soft",
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
