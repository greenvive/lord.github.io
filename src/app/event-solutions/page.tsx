import type { Metadata } from "next";
import HubPageTemplate from "@/components/HubPageTemplate";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { eventSolutionsHub } from "@/lib/content/event-solutions-hub";

export const metadata: Metadata = {
  title: eventSolutionsHub.metaTitle.replace(" | LORD", ""),
  description: eventSolutionsHub.metaDescription,
  alternates: { canonical: `/${eventSolutionsHub.slug}` },
};

export default function EventSolutionsPage() {
  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd(eventSolutionsHub.breadcrumb),
          serviceJsonLd({
            name: eventSolutionsHub.h1,
            description: eventSolutionsHub.metaDescription,
            url: `/${eventSolutionsHub.slug}`,
          }),
          faqJsonLd(eventSolutionsHub.faq),
        ]}
      />
      <HubPageTemplate content={eventSolutionsHub} />
    </>
  );
}
