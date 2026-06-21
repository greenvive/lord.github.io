import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-lord-black px-5 py-16 text-white/70">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-en text-2xl font-extrabold text-white">
              LORD<span className="text-lord-orange">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">{site.description}</p>
          </div>

          {nav
            .filter((item) => item.children.length > 0)
            .map((item) => (
              <div key={item.href}>
                <p className="text-sm font-bold text-white">{item.label}</p>
                <ul className="mt-3 space-y-2">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.ready ? child.href : item.href}
                        className="text-sm text-white/60 hover:text-lord-orange"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          <div>
            <p className="text-sm font-bold text-white">연락처</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>전화 {site.phoneDisplay}</li>
              <li>이메일 {site.email}</li>
              <li>
                <Link href="/about-contact" className="hover:text-lord-orange">
                  상담 신청 바로가기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>무대 설치·렌탈 · 포토존 제작·렌탈 · 음향·조명·LED·트러스 통합 설치 전문</p>
        </div>
      </div>
    </footer>
  );
}
