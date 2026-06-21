import type { Breadcrumb } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";

interface PageHeroProps {
  breadcrumb: Breadcrumb[];
  h1: string;
  aiSummary: string;
  heroImageAlt: string;
}

export default function PageHero({ breadcrumb, h1, aiSummary, heroImageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-lord-black px-5 pb-16 pt-10 text-white">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF6A00 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl">
        <Breadcrumbs items={breadcrumb} />
        <h1 className="hero-title mt-5 max-w-3xl">{h1}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{aiSummary}</p>
        <div
          role="img"
          aria-label={heroImageAlt}
          className="mt-10 flex h-56 w-full items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-lord-charcoal to-black text-sm text-white/40"
        >
          대표 시공 이미지 / 영상 영역 — {heroImageAlt}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/about-contact" variant="primary">빠른 견적 문의</Button>
          <Button href="/portfolio" variant="secondary">포트폴리오 보기</Button>
        </div>
      </div>
    </section>
  );
}
