import Link from "next/link";
import { site } from "@/lib/site";

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-black/10 bg-white/95 backdrop-blur lg:hidden">
      <a href={`tel:${site.phone}`} className="flex flex-col items-center justify-center gap-0.5 py-3 text-xs font-bold text-lord-black">
        전화 상담
      </a>
      <a
        href={site.kakaoUrl}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 border-x border-black/10 py-3 text-xs font-bold text-lord-black"
      >
        카카오 문의
      </a>
      <Link href="/about-contact" className="flex flex-col items-center justify-center gap-0.5 bg-lord-orange py-3 text-xs font-bold text-white">
        빠른 견적
      </Link>
    </div>
  );
}
