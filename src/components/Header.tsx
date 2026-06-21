"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-lord-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-en text-2xl font-extrabold tracking-tight text-white">
          LORD<span className="text-lord-orange">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <div key={item.href} className="group relative py-2">
              <Link href={item.href} className="text-sm font-bold text-white hover:text-lord-orange">
                {item.label}
              </Link>
              {item.children.length > 0 && (
                <div className="invisible absolute left-0 top-full z-50 w-64 rounded-2xl border border-white/10 bg-lord-charcoal p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.ready ? child.href : item.href}
                      className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-lord-orange"
                    >
                      {child.label}
                      {!child.ready && <span className="ml-2 text-xs text-white/40">준비중</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/about-contact" className="btn-primary !h-11 !px-6 text-sm">
            빠른 견적 문의
          </Link>
        </div>

        <button
          aria-label="메뉴 열기"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-lord-black px-5 py-4 lg:hidden">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-white/10 py-3">
              <Link href={item.href} className="block font-bold text-white" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {item.children.length > 0 && (
                <div className="mt-2 flex flex-col gap-1 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.ready ? child.href : item.href}
                      className="py-1 text-sm text-white/70"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                      {!child.ready && <span className="ml-2 text-xs text-white/40">준비중</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={`tel:${site.phone}`} className="btn-primary mt-4 w-full !h-12 text-sm">
            전화 상담 {site.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
