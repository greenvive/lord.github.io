import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { costEstimateGuide as content } from "@/lib/content/cost-estimate-guide";

export const metadata: Metadata = {
  title: content.metaTitle.replace(" | LORD", ""),
  description: content.metaDescription,
  alternates: { canonical: `/${content.slug}` },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-extrabold text-lord-black sm:text-3xl">{children}</h2>;
}

export default function CostEstimateGuidePage() {
  return (
    <>
      <JsonLdScript data={[breadcrumbJsonLd(content.breadcrumb), faqJsonLd(content.faq)]} />

      <PageHero
        breadcrumb={content.breadcrumb}
        h1={content.h1}
        aiSummary={content.aiSummary}
        heroImageAlt="무대·포토존 설치 비용 산정 기준 안내"
      />

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          <div>
            <SectionHeading>비용 산정 요소</SectionHeading>
            <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
              <table className="w-full text-left text-sm">
                <tbody>
                  {content.costTable.map((row, index) => (
                    <tr key={row.item} className={index % 2 === 0 ? "bg-lord-cream/60" : "bg-white"}>
                      <th scope="row" className="w-1/4 px-5 py-3 font-bold text-lord-black">{row.item}</th>
                      <td className="px-5 py-3 text-[#4a4a4a]">{row.factors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <SectionHeading>견적 문의 시 필요한 정보</SectionHeading>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {content.requiredInfo.map((item, index) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-black/10 px-5 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lord-orange text-xs font-extrabold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold text-lord-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading>비용 절감 팁</SectionHeading>
            <ul className="body-copy mt-6 list-disc space-y-2 pl-5">
              {content.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading>자주 묻는 질문</SectionHeading>
            <div className="mt-6">
              <FaqAccordion items={content.faq} />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
