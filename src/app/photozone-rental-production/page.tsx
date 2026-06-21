import type { Metadata } from "next";
import HubPageTemplate from "@/components/HubPageTemplate";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { photozoneHub } from "@/lib/content/photozone-hub";

export const metadata: Metadata = {
  title: photozoneHub.metaTitle.replace(" | LORD", ""),
  description: photozoneHub.metaDescription,
  alternates: { canonical: `/${photozoneHub.slug}` },
};

export default function PhotozoneRentalProductionPage() {
  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd(photozoneHub.breadcrumb),
          serviceJsonLd({ name: photozoneHub.h1, description: photozoneHub.metaDescription, url: `/${photozoneHub.slug}` }),
          faqJsonLd(photozoneHub.faq),
        ]}
      />
      <HubPageTemplate content={photozoneHub} />
    </>
  );
}
