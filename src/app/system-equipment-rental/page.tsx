import type { Metadata } from "next";
import HubPageTemplate from "@/components/HubPageTemplate";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { systemHub } from "@/lib/content/system-hub";

export const metadata: Metadata = {
  title: systemHub.metaTitle.replace(" | LORD", ""),
  description: systemHub.metaDescription,
  alternates: { canonical: `/${systemHub.slug}` },
};

export default function SystemEquipmentRentalPage() {
  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd(systemHub.breadcrumb),
          serviceJsonLd({ name: systemHub.h1, description: systemHub.metaDescription, url: `/${systemHub.slug}` }),
          faqJsonLd(systemHub.faq),
        ]}
      />
      <HubPageTemplate content={systemHub} />
    </>
  );
}
