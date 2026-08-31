import { cn } from "@/lib/utils";

export type MosaicItem = { src: string; alt: string; caption?: string };

/** Editorial image mosaic — large main image left, three supporting images right. */
export function ImageMosaic({ items, className }: { items: MosaicItem[]; className?: string }) {
  const [main, ...supporting] = items.slice(0, 4);
  if (!main) return null;

  return (
    <div className={cn("grid gap-3 md:gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]", className)}>
      {/* Main image — tall, prominent */}
      <figure className="relative overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] bg-mist">
        <div className="zoom-media h-full">
          <img
            src={main.src}
            alt={main.alt}
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:h-full"
          />
        </div>
        {main.caption ? (
          <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 bg-white/95 px-3 py-1.5 backdrop-blur-sm">
            <span className="font-display text-[0.62rem] font-extrabold text-saffron">01</span>
            <span className="font-display text-[0.6rem] font-bold tracking-[0.16em] text-navy uppercase">
              {main.caption}
            </span>
          </figcaption>
        ) : null}
      </figure>

      {/* Supporting images — three stacked */}
      <div className="grid grid-rows-3 gap-3 md:gap-4">
        {supporting.map((item, i) => (
          <figure
            key={item.src + i}
            className={cn(
              "relative overflow-hidden bg-mist",
              i === 0 && "rounded-tr-[2rem]",
              i === 1 && "rounded-bl-[2rem] rounded-tr-[2rem]",
              i === 2 && "rounded-bl-[2rem]",
            )}
          >
            <div className="zoom-media h-full">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="aspect-[16/9] h-full w-full object-cover"
              />
            </div>
            {item.caption ? (
              <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 bg-white/95 px-3 py-1.5 backdrop-blur-sm">
                <span className="font-display text-[0.62rem] font-extrabold text-saffron">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <span className="font-display text-[0.6rem] font-bold tracking-[0.16em] text-navy uppercase">
                  {item.caption}
                </span>
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}
