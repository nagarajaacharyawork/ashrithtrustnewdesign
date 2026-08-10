import { createFileRoute } from "@tanstack/react-router";

import { InstitutionPage } from "@/components/site/InstitutionPage";
import { institutionBySlug } from "@/data/site";
import { pageHead } from "@/lib/seo";

const institution = institutionBySlug("nursing")!;

export const Route = createFileRoute("/institutions/nursing")({
  head: () =>
    pageHead({
      title: "Ashrith College & School of Nursing",
      description:
        "B.Sc. Nursing, GNM and ANM programmes at Ashrith College & School of Nursing, Kota, Udupi — skills-lab practice and supervised clinical postings from year one.",
      path: "/institutions/nursing",
    }),
  component: () => <InstitutionPage institution={institution} />,
});
