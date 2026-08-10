import { cn } from "@/lib/utils";

export type MosaicItem = { src: string; alt: string; caption?: string };

const shapes = [
  "rounded-tl-[3.5rem] rounded-br-[3.5rem]",
  "rounded-tr-[3rem]",
  "rounded-bl-[3rem]",
  "rounded-t-full",
];

const spans = [
  "col-span-7 aspect-[4/5]",
  "col-span-5 aspect-square mt-10",
  "col-span-5 aspect-square",
  "col-span-7 aspect-[4/3]",
];

/** Editorial image mosaic — asymmetric rhythm, organic corners, no card chrome. */
export function ImageMosaic({ items, className }: { items: MosaicItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-12 gap-3 md:gap-4", className)}>
      {items.slice(0, 4).map((item, i) => (
        <figure key={item.src + i} className={cn("relative", spans[i])}>
          <div className={cn("zoom-media h-full overflow-hidden bg-mist", shapes[i])}>
            <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
          </div>
          {item.caption ? (
            <figcaption className="absolute bottom-3 left-0 flex items-center gap-2 bg-white/95 px-3 py-1.5 backdrop-blur-sm">
              <span className="font-display text-[0.62rem] font-extrabold text-saffron">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[0.6rem] font-bold tracking-[0.16em] text-navy uppercase">
                {item.caption}
              </span>
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
