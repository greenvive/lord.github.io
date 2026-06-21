import type { Metadata } from "next";
import HubPageTemplate from "@/components/HubPageTemplate";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { stageHub } from "@/lib/content/stage-hub";

export const metadata: Metadata = {
  title: stageHub.metaTitle.replace(" | LORD", ""),
  description: stageHub.metaDescription,
  alternates: { canonical: `/${stageHub.slug}` },
};

export default function StageRentalInstallationPage() {
  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd(stageHub.breadcrumb.map((b) => ({ name: b.name, href: b.href }))),
          serviceJsonLd({ name: stageHub.h1, description: stageHub.metaDescription, url: `/${stageHub.slug}` }),
          faqJsonLd(stageHub.faq),
        ]}
      />
      <HubPageTemplate content={stageHub} />
    </>
  );
}
