import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { outdoorStage as content } from "@/lib/content/outdoor-stage";

export const metadata: Metadata = {
  title: content.metaTitle.replace(" | LORD", ""),
  description: content.metaDescription,
  alternates: { canonical: `/stage-rental-installation/${content.slug}` },
};

export default function OutdoorStagePage() {
  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd(content.breadcrumb),
          serviceJsonLd({
            name: content.h1,
            description: content.metaDescription,
            url: `/stage-rental-installation/${content.slug}`,
          }),
          faqJsonLd(content.faq),
        ]}
      />
      <ServicePageTemplate content={content} />
    </>
  );
}
