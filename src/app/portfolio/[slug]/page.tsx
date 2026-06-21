import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, articleJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/jsonld";
import { portfolioDetails, getPortfolioBySlug } from "@/lib/content/portfolio";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-extrabold text-lord-black sm:text-3xl">{children}</h2>;
}

export function generateStaticParams() {
  return portfolioDetails.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) return {};
  return {
    title: item.metaTitle.replace(" | LORD", ""),
    description: item.metaDescription,
    alternates: { canonical: `/portfolio/${item.slug}` },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) notFound();

  const breadcrumb = [
    { name: "홈", href: "/" },
    { name: "설치 포트폴리오", href: "/portfolio" },
    { name: item.title, href: `/portfolio/${item.slug}` },
  ];

  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd(breadcrumb),
          articleJsonLd({ headline: item.metaTitle, description: item.metaDescription, url: `/portfolio/${item.slug}` }),
          serviceJsonLd({ name: item.eventType, description: item.metaDescription, url: `/portfolio/${item.slug}` }),
          faqJsonLd(item.faq),
        ]}
      />

      <PageHero
        breadcrumb={breadcrumb}
        h1={item.title}
        aiSummary={item.overview}
        heroImageAlt={`${item.region} ${item.eventType} 설치 사례 — ${item.items}`}
      />

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          <div>
            <SectionHeading>프로젝트 개요</SectionHeading>
            <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
              <table className="w-full text-left text-sm">
                <tbody>
                  <Row label="행사 종류" value={item.eventType} />
                  <Row label="설치 지역" value={item.region} />
                  <Row label="행사 장소" value={item.venue} />
                  <Row label="참석 규모" value={item.attendees} />
                  <Row label="설치 품목" value={item.items} />
                  <Row label="규모" value={item.scale} />
                  <Row label="설치 시간" value={item.installTime} />
                  <Row label="운영 범위" value={item.operationScope} />
                  <Row label="해결 과제" value={item.challenge} />
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <SectionHeading>고객 요청사항</SectionHeading>
            <p className="body-copy mt-4">{item.clientRequest}</p>
          </div>

          <div>
            <SectionHeading>현장 조건</SectionHeading>
            <p className="body-copy mt-4">{item.siteConditions}</p>
          </div>

          <div>
            <SectionHeading>LORD 제안 구성</SectionHeading>
            <ul className="body-copy mt-6 list-disc space-y-2 pl-5">
              {item.proposedConfig.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading>설치 장비와 규격</SectionHeading>
            <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
              <table className="w-full text-left text-sm">
                <tbody>
                  {item.equipmentSpecs.map((spec, index) => (
                    <tr key={spec.item} className={index % 2 === 0 ? "bg-lord-cream/60" : "bg-white"}>
                      <th scope="row" className="w-1/3 px-5 py-3 font-bold text-lord-black">{spec.item}</th>
                      <td className="px-5 py-3 text-[#4a4a4a]">{spec.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <SectionHeading>설치 과정</SectionHeading>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.processSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-3 rounded-xl border border-black/10 px-5 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lord-orange text-xs font-extrabold text-white">
                    {index + 1}
                  </span>
                  <span className="body-copy text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <SectionHeading>완성 이미지</SectionHeading>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="flex h-56 items-center justify-center rounded-2xl border border-black/10 bg-lord-cream text-xs text-black/40"
                >
                  완성 시공 이미지 영역 {n} — {item.title}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading>비슷한 행사 추천 구성</SectionHeading>
            <p className="body-copy mt-4">{item.similarRecommendation}</p>
          </div>

          <div>
            <SectionHeading>자주 묻는 질문</SectionHeading>
            <div className="mt-6">
              <FaqAccordion items={item.faq} />
            </div>
          </div>

          <div>
            <SectionHeading>관련 페이지</SectionHeading>
            <div className="mt-6 flex flex-wrap gap-3">
              {item.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-black/15 px-5 py-2 text-sm font-bold text-lord-black hover:border-lord-orange hover:text-lord-orange"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr className="even:bg-white odd:bg-lord-cream/60">
      <th scope="row" className="w-1/3 px-5 py-3 font-bold text-lord-black">{label}</th>
      <td className="px-5 py-3 text-[#4a4a4a]">{value}</td>
    </tr>
  );
}
