import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { photowallBackwall as content } from "@/lib/content/photowall-backwall";

export const metadata: Metadata = {
  title: content.metaTitle.replace(" | LORD", ""),
  description: content.metaDescription,
  alternates: { canonical: `/photozone-rental-production/${content.slug}` },
};

export default function PhotowallBackwallPage() {
  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd(content.breadcrumb),
          serviceJsonLd({
            name: content.h1,
            description: content.metaDescription,
            url: `/photozone-rental-production/${content.slug}`,
          }),
          faqJsonLd(content.faq),
        ]}
      />
      <ServicePageTemplate content={content} />
    </>
  );
}
