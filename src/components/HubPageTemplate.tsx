import Link from "next/link";
import type { HubPageContent } from "@/lib/types";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-extrabold text-lord-black sm:text-3xl">{children}</h2>;
}

export default function HubPageTemplate({ content }: { content: HubPageContent }) {
  return (
    <>
      <PageHero
        breadcrumb={content.breadcrumb}
        h1={content.h1}
        aiSummary={content.aiSummary}
        heroImageAlt={`${content.h1} 대표 이미지`}
      />

      <section className="bg-lord-black px-5 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {content.children.map((child) => (
              <ServiceCard
                key={child.href}
                title={child.label}
                description={child.description}
                href={child.href}
                ready={child.ready}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          <div>
            <SectionHeading>제공 범위</SectionHeading>
            <ul className="body-copy mt-6 list-disc space-y-2 pl-5">
              {content.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
