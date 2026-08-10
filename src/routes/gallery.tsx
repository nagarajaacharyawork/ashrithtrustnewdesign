import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { CTASection } from "@/components/site/blocks";
import { Gallery } from "@/components/site/Gallery";
import { PageHero } from "@/components/site/PageHero";
import { gallery, galleryCategories, images } from "@/data/site";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead({
      title: "Photo Gallery",
      description:
        "Photographs of the Ashrith campus at Kota, Udupi — nursing practice, laboratories, classrooms, ceremonies, health camps and student life.",
      path: "/gallery",
    }),
  component: GalleryPage,
});

function GalleryPage() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");

  const items = useMemo(
    () => (category === "All" ? gallery : gallery.filter((g) => g.category === category)),
    [category],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The campus, as it actually looks."
        intro="Classrooms, laboratories, ceremonies and community work — photographs from across the Ashrith campus."
        image={images.eventCultural}
        imageAlt="Students at the annual cultural day"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="section-y bg-white">
        <div className="shell">
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={cn(
                  "border px-4 py-2 font-display text-[0.78rem] font-bold tracking-wide transition-colors",
                  category === c
                    ? "border-navy bg-navy text-white"
                    : "border-hairline bg-white text-ink-soft hover:border-navy/40 hover:text-navy",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <p aria-live="polite" className="mt-5 text-sm text-ink-soft">
            {items.length} {items.length === 1 ? "photograph" : "photographs"}
            {category !== "All" ? ` in ${category}` : ""}
          </p>

          <div className="mt-8">
            {items.length > 0 ? (
              <Gallery items={items} />
            ) : (
              <p className="border border-dashed border-hairline px-6 py-16 text-center text-sm text-ink-soft">
                No photographs in this category yet.
              </p>
            )}
          </div>
        </div>
      </section>

      <CTASection
        topTone="white"
        title={<>See it in person.</>}
        intro="Campus visits can be arranged during office hours at Kota, Udupi."
        image={images.campusHero}
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Explore Campus", to: "/campus" }}
      />
    </>
  );
}
