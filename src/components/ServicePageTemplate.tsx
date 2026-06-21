import Link from "next/link";
import type { ServicePageContent } from "@/lib/types";
import PageHero from "@/components/PageHero";
import SectionTable from "@/components/SectionTable";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioSamples } from "@/lib/content/portfolio";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-extrabold text-lord-black sm:text-3xl">{children}</h2>;
}

export default function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  return (
    <>
      <PageHero
        breadcrumb={content.breadcrumb}
        h1={content.h1}
        aiSummary={content.aiSummary}
        heroImageAlt={content.heroImageAlt}
      />

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          <div>
            <SectionHeading>서비스 요약</SectionHeading>
            <div className="mt-6">
              <SectionTable rows={content.summaryTable} />
            </div>
          </div>

          <div>
            <SectionHeading>이런 행사에 적합합니다</SectionHeading>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {content.eventFit.map((item) => (
                <li key={item} className="rounded-xl bg-lord-cream px-5 py-4 text-sm font-bold text-lord-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading>제공 범위</SectionHeading>
            <ul className="body-copy mt-6 list-disc space-y-2 pl-5">
              {content.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading>설치 구성 예시</SectionHeading>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {content.configExamples.map((example) => (
                <div key={example.title} className="rounded-2xl border border-black/10 p-5">
                  <p className="font-bold text-lord-black">{example.title}</p>
                  <p className="body-copy mt-2 text-sm">{example.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading>진행 프로세스</SectionHeading>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {content.process.map((step, index) => (
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
            <SectionHeading>안전 및 현장 체크포인트</SectionHeading>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {content.safetyChecklist.map((item) => (
                <li key={item} className="rounded-xl bg-lord-black px-5 py-4 text-sm text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading>관련 포트폴리오</SectionHeading>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {portfolioSamples.slice(0, 2).map((item) => (
                <PortfolioCard key={item.slug} item={item} />
              ))}
            </div>
            <Link href="/portfolio" className="mt-4 inline-block text-sm font-bold text-lord-orange">
              전체 포트폴리오 보기 →
            </Link>
          </div>

          <div>
            <SectionHeading>비용에 영향을 주는 요소</SectionHeading>
            <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
              <table className="w-full text-left text-sm">
                <tbody>
                  {content.costFactors.map((row, index) => (
                    <tr key={row.item} className={index % 2 === 0 ? "bg-lord-cream/60" : "bg-white"}>
                      <th scope="row" className="w-1/3 px-5 py-3 font-bold text-lord-black">{row.item}</th>
                      <td className="px-5 py-3 text-[#4a4a4a]">{row.factors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href="/cost-estimate-guide" className="mt-4 inline-block text-sm font-bold text-lord-orange">
              비용·견적 가이드 자세히 보기 →
            </Link>
          </div>

          <div>
            <SectionHeading>자주 묻는 질문</SectionHeading>
            <div className="mt-6">
              <FaqAccordion items={content.faq} />
            </div>
          </div>

          {content.relatedLinks.length > 0 && (
            <div>
              <SectionHeading>관련 페이지</SectionHeading>
              <div className="mt-6 flex flex-wrap gap-3">
                {content.relatedLinks.map((link) => (
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
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
