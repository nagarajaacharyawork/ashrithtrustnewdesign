import { createFileRoute } from "@tanstack/react-router";

import { InstitutionPage } from "@/components/site/InstitutionPage";
import { institutionBySlug } from "@/data/site";
import { pageHead } from "@/lib/seo";

const institution = institutionBySlug("paramedical")!;

export const Route = createFileRoute("/institutions/paramedical")({
  head: () =>
    pageHead({
      title: "K. R. Hegde College of Paramedical Sciences",
      description:
        "Allied health diplomas in medical laboratory, operation theatre, imaging and dialysis technology at K. R. Hegde College of Paramedical Sciences, Kota, Udupi.",
      path: "/institutions/paramedical",
    }),
  component: () => <InstitutionPage institution={institution} />,
});
