import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { portfolioSamples } from "@/lib/content/portfolio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "무대 설치·포토존 제작·음향 조명 LED 렌탈 전문",
  description: site.description,
  alternates: { canonical: "/" },
};

const eventSolutions = [
  { label: "준공식·기공식", href: "/event-solutions/groundbreaking-completion-ceremony" },
  { label: "기념식·추도식", href: "/event-solutions/ceremony-memorial-stage" },
  { label: "기업행사", href: "/event-solutions/corporate-event" },
  { label: "축제·공연", href: "/event-solutions/festival-performance" },
  { label: "체육대회 및 BJ 무대설치", href: "/event-solutions/sports-broadcast-stage" },
];

const strengths = [
  { title: "통합 설치", desc: "무대·포토존·음향·조명·LED·트러스를 한 번에 진행합니다." },
  { title: "현장 맞춤 설계", desc: "행사장 조건을 실사로 확인한 뒤 규격과 구성을 제안합니다." },
  { title: "안전 중심 시공", desc: "하중, 전기, 우천·강풍 대비 등 안전 기준을 우선합니다." },
  { title: "빠른 견적 대응", desc: "행사명, 지역, 인원만 알려주셔도 견적 방향을 빠르게 안내합니다." },
  { title: "수도권 중심 기동성", desc: "수도권을 중심으로 빠르게 출동하며, 전국 출장도 가능합니다." },
];

const faq = [
  {
    q: "LORD는 무대와 포토존을 함께 설치할 수 있나요?",
    a: "네, 무대와 포토존의 디자인 톤을 통일해 함께 설치할 수 있으며, 별도 업체를 섭외할 필요가 없습니다.",
  },
  {
    q: "음향, 조명, LED까지 한 번에 견적을 받을 수 있나요?",
    a: "가능합니다. 행사 규모와 현장 조건을 알려주시면 음향·조명·LED를 통합한 견적을 한 번에 안내드립니다.",
  },
  {
    q: "수도권 외 지역도 설치가 가능한가요?",
    a: "네, 수도권을 중심으로 운영하지만 전국 어디든 출장 설치가 가능합니다.",
  },
  {
    q: "행사 전날 설치와 당일 철거가 가능한가요?",
    a: "가능합니다. 행사 규모에 맞춰 전날 설치, 당일 새벽 설치, 당일 철거 등 일정을 조율합니다.",
  },
  {
    q: "현장 실사 후 견적을 받을 수 있나요?",
    a: "네, 정확한 견적을 위해 현장 실사를 권장하며, 일정이 급한 경우 사진과 도면으로도 1차 견적이 가능합니다.",
  },
];

const breadcrumb = [{ name: "홈", href: "/" }];

export default function Home() {
  return (
    <>
      <JsonLdScript data={[breadcrumbJsonLd(breadcrumb), faqJsonLd(faq)]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-lord-black px-5 pb-24 pt-16 text-white">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[1100px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF6A00 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-en text-sm font-bold tracking-widest text-lord-orange-light">
            STAGE · PHOTOZONE · SOUND · LIGHT · LED · TRUSS
          </p>
          <h1 className="hero-title mx-auto mt-6 max-w-4xl">
            무대부터 포토존, 음향·조명·LED까지
            <br />
            행사 공간을 완성하는 <span className="text-lord-orange">LORD</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">
            LORD는 행사 무대 설치·렌탈, 포토존 제작·렌탈, 음향·조명·LED 전광판·트러스 시스템을 통합 제공하는
            행사 공간 설치 전문 업체입니다. 기업행사, 공공행사, 축제, 공연, 기념식, 체육대회 등 행사 목적에
            맞춰 기획, 제작, 설치, 운영, 철거까지 지원합니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/about-contact">빠른 견적 문의</Button>
            <Button href="/portfolio" variant="secondary">포트폴리오 보기</Button>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-lord-black px-5 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-extrabold text-white sm:text-3xl">서비스 3대 영역</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <ServiceCard
              title="무대 설치·렌탈"
              description="실내·야외·기업행사·공연/축제 무대를 현장 조건에 맞춰 설치합니다."
              href="/stage-rental-installation"
            />
            <ServiceCard
              title="포토존 제작·렌탈"
              description="기업행사·브랜드·포토월·팝업스토어 포토존을 콘셉트에 맞춰 제작합니다."
              href="/photozone-rental-production"
            />
            <ServiceCard
              title="시스템 장비"
              description="음향·조명·LED·트러스/레이어를 통합 구성하고 운영까지 지원합니다."
              href="/system-equipment-rental"
            />
          </div>
        </div>
      </section>

      {/* Event Solutions */}
      <section className="bg-lord-cream px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-extrabold text-lord-black sm:text-3xl">행사별 솔루션</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#4a4a4a]">
            서비스명보다 행사명으로 찾는 경우가 많습니다. 행사 목적에 맞는 솔루션을 바로 확인하세요.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {eventSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-black/10 bg-white px-5 py-6 text-center text-sm font-bold text-lord-black transition hover:border-lord-orange hover:text-lord-orange"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Proof */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-extrabold text-lord-black sm:text-3xl">대표 포트폴리오</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioSamples.slice(0, 4).map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/portfolio" variant="secondary" className="!border-black/20 !text-lord-black">
              전체 포트폴리오 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="bg-lord-black px-5 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">LORD의 강점</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {strengths.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 p-6">
                <p className="font-extrabold text-lord-orange">{item.title}</p>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-extrabold text-lord-black sm:text-3xl">자주 묻는 질문</h2>
          <div className="mt-10">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
