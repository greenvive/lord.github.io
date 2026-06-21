import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { trussLayer as content } from "@/lib/content/truss-layer";

export const metadata: Metadata = {
  title: content.metaTitle.replace(" | LORD", ""),
  description: content.metaDescription,
  alternates: { canonical: `/system-equipment-rental/${content.slug}` },
};

export default function TrussLayerPage() {
  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd(content.breadcrumb),
          serviceJsonLd({
            name: content.h1,
            description: content.metaDescription,
            url: `/system-equipment-rental/${content.slug}`,
          }),
          faqJsonLd(content.faq),
        ]}
      />
      <ServicePageTemplate content={content} />
    </>
  );
}
