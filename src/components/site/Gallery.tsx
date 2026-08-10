import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import type { GalleryItem } from "@/data/site";
import { cn } from "@/lib/utils";

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const current = items[index];

  const next = useCallback(
    () => onNavigate((index + 1) % items.length),
    [index, items.length, onNavigate],
  );
  const prev = useCallback(
    () => onNavigate((index - 1 + items.length) % items.length),
    [index, items.length, onNavigate],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, onClose]);

  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[100] flex flex-col bg-[oklch(0.2_0.04_247_/_0.96)] p-3 sm:p-6"
    >
      <div className="flex items-center justify-between gap-4 text-white">
        <p className="min-w-0 truncate text-xs text-white/70 sm:text-sm">
          {index + 1} / {items.length} · {current.category}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          autoFocus
          className="grid h-11 w-11 shrink-0 place-items-center border border-white/25 transition-colors hover:bg-white hover:text-navy"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center gap-2 py-4 sm:gap-5">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="grid h-11 w-11 shrink-0 place-items-center border border-white/25 text-white transition-colors hover:bg-white hover:text-navy"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <img src={current.src} alt={current.alt} className="max-h-full max-w-full object-contain" />
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="grid h-11 w-11 shrink-0 place-items-center border border-white/25 text-white transition-colors hover:bg-white hover:text-navy"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-white/70 sm:text-sm">
        {current.alt}
      </p>
    </div>
  );
}

const galleryShapes = [
  "rounded-tl-[3rem]",
  "rounded-br-[2.5rem]",
  "rounded-t-[3.5rem]",
  "",
  "rounded-bl-[2.5rem] rounded-tr-[2.5rem]",
  "rounded-tr-[3rem]",
  "rounded-b-[2.5rem]",
];

export function Gallery({ items, columns = 3 }: { items: GalleryItem[]; columns?: 2 | 3 | 4 }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <ul
        className={cn(
          "grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:gap-4 lg:auto-rows-[230px]",
          columns === 3 && "lg:grid-cols-3",
          columns === 4 && "lg:grid-cols-4",
        )}
      >
        {items.map((item, i) => (
          <li
            key={`${item.src}-${i}`}
            className={cn(
              item.span === "tall" && "row-span-2",
              item.span === "wide" && "col-span-2 lg:col-span-2",
            )}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "zoom-media group relative block h-full w-full overflow-hidden bg-mist text-left",
                galleryShapes[i % galleryShapes.length],
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/25"
              />
              <span className="absolute bottom-0 left-0 flex max-w-full items-center gap-2 bg-white/95 px-3 py-1.5 backdrop-blur-sm">
                <span className="font-display text-[0.6rem] font-extrabold text-saffron">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="truncate font-display text-[0.62rem] font-bold tracking-[0.14em] text-navy uppercase">
                  {item.category}
                </span>
              </span>
              <span className="sr-only">Open image: {item.alt}</span>
            </button>
          </li>
        ))}
      </ul>

      {active !== null ? (
        <Lightbox
          items={items}
          index={active}
          onClose={() => setActive(null)}
          onNavigate={setActive}
        />
      ) : null}
    </>
  );
}
