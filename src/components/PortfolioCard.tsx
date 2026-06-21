import Link from "next/link";
import type { PortfolioSample } from "@/lib/types";

export default function PortfolioCard({ item }: { item: PortfolioSample & { slug: string } }) {
  return (
    <Link href={`/portfolio/${item.slug}`} className="portfolio-card block transition hover:-translate-y-1">
      <div className="flex h-44 items-center justify-center bg-lord-cream text-xs text-black/40">
        시공 사진 영역 — {item.title}
      </div>
      <div className="p-5">
        <p className="text-lg font-extrabold text-lord-black">{item.title}</p>
        <div className="portfolio-meta mt-4 text-[#4a4a4a]">
          <p><span className="font-bold text-lord-black">지역</span> {item.region}</p>
          <p><span className="font-bold text-lord-black">행사유형</span> {item.eventType}</p>
          <p><span className="font-bold text-lord-black">설치품목</span> {item.items}</p>
          <p><span className="font-bold text-lord-black">규모</span> {item.scale}</p>
          <p><span className="font-bold text-lord-black">설치시간</span> {item.installTime}</p>
        </div>
        <p className="mt-4 text-sm text-[#4a4a4a]">
          <span className="font-bold text-lord-black">해결 과제</span> {item.challenge}
        </p>
        <span className="mt-4 inline-block text-sm font-bold text-lord-orange">자세히 보기 →</span>
      </div>
    </Link>
  );
}
