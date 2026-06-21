import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, faqJsonLd, organizationJsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

const breadcrumb = [
  { name: "홈", href: "/" },
  { name: "회사소개·상담", href: "/about-contact" },
];

const faq = [
  {
    q: "상담 후 견적은 언제 받을 수 있나요?",
    a: "행사 정보를 남겨주시면 보통 1~2일 내로 견적 방향을 안내드리며, 일정이 급한 경우 빠르게 우선 처리합니다.",
  },
  {
    q: "현장 실사도 가능한가요?",
    a: "네, 정확한 견적을 위해 현장 실사를 권장하며, 수도권은 빠르게 일정을 조율할 수 있습니다.",
  },
  {
    q: "행사 날짜만 정해진 상태에서도 문의할 수 있나요?",
    a: "가능합니다. 장소나 인원이 미정이라도 우선 문의해주시면 단계별로 함께 정리해드립니다.",
  },
  {
    q: "디자인 시안도 제공하나요?",
    a: "포토존, 백월 등 디자인이 필요한 항목은 제작 전에 시안을 제공합니다.",
  },
  {
    q: "긴급 설치 문의도 가능한가요?",
    a: "네, 일정이 임박한 경우에도 가능 여부를 빠르게 확인해드리니 전화로 먼저 문의해주세요.",
  },
];

const processSteps = [
  "상담 — 행사 목적과 일정 확인",
  "현장 확인 — 설치 장소 조건 점검",
  "구성 제안 — 무대·포토존·시스템 구성 제안",
  "견적 — 비용 산정 및 확정",
  "설치 — 현장 시공",
  "운영 — 행사 당일 현장 지원",
  "철거 — 행사 종료 후 철거",
];

export const metadata: Metadata = {
  title: "회사소개·상담",
  description:
    "LORD는 무대 설치·렌탈, 포토존 제작·렌탈, 음향·조명·LED·트러스 시스템을 제공하는 행사 공간 설치 전문 업체입니다. 행사 일정과 장소를 남겨주시면 맞춤 견적을 안내드립니다.",
  alternates: { canonical: "/about-contact" },
};

export default function AboutContactPage() {
  return (
    <>
      <JsonLdScript data={[breadcrumbJsonLd(breadcrumb), organizationJsonLd(), localBusinessJsonLd(), faqJsonLd(faq)]} />

      <PageHero
        breadcrumb={breadcrumb}
        h1="행사 공간 설치 전문 기업 LORD"
        aiSummary="LORD는 무대 설치·렌탈, 포토존 제작·렌탈, 음향·조명·LED·트러스 시스템을 제공하는 행사 공간 설치 전문 기업입니다. 기업행사, 공공행사, 축제, 공연, 체육대회, 방송형 행사에 맞춰 현장 조건 기반의 설치 구성을 제안합니다."
        heroImageAlt="LORD 행사 설치 현장 대표 이미지"
      />

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-extrabold text-lord-black">진행 프로세스</h2>
              <ol className="mt-6 space-y-3">
                {processSteps.map((step, index) => (
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
              <h2 className="text-2xl font-extrabold text-lord-black">연락처</h2>
              <ul className="mt-6 space-y-2 text-sm text-[#4a4a4a]">
                <li>전화 {site.phoneDisplay}</li>
                <li>이메일 {site.email}</li>
                <li>운영 지역 {site.areaServed.join(", ")}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-lord-black">자주 묻는 질문</h2>
              <div className="mt-6">
                <FaqAccordion items={faq} />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-lord-black">빠른 상담 신청</h2>
            <p className="body-copy mt-3 text-sm">
              행사명, 지역, 예상 인원, 설치 희망일을 남겨주시면 빠르게 견적 방향을 안내드립니다.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
