import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckSquare, Calendar, Target, Repeat, FileText,
  BarChart2, ArrowRight, Check,
} from "lucide-react";

const FEATURES = [
  {
    icon: CheckSquare,
    title: "할 일 관리",
    desc: "우선순위, 마감일, 카테고리로 체계적으로 관리하세요.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Calendar,
    title: "캘린더",
    desc: "월간·주간·일간 보기로 일정을 한눈에 확인하세요.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Target,
    title: "목표 관리",
    desc: "장기 목표를 세우고 달성률을 시각적으로 추적하세요.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Repeat,
    title: "습관 트래커",
    desc: "매일 습관을 체크하고 연속 수행 일수를 기록하세요.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: FileText,
    title: "메모",
    desc: "마크다운 메모로 중요한 아이디어를 저장하세요.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: BarChart2,
    title: "통계",
    desc: "완료율, 습관 달성 히트맵 등 생산성 데이터를 확인하세요.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

const PLAN_FEATURES = [
  "할 일·일정·목표·습관·메모 통합 관리",
  "반복 일정 및 반복 할 일",
  "목표와 할 일 연동",
  "통계 및 생산성 분석",
  "다크모드 지원",
  "모바일 반응형",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">Planary</span>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">로그인</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-green-600 hover:bg-green-700">무료로 시작하기</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* 히어로 */}
      <section className="pt-24 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            개인 플래너 All-in-One
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            오늘의 계획부터<br />
            <span className="text-green-600">장기 목표까지,</span><br />
            한곳에서 관리하세요.
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
            일정, 할 일, 목표, 습관, 메모를 하나의 서비스에서.
            분산된 앱을 정리하고 생산성을 높이세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
                무료로 시작하기 <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="px-8">로그인</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 주요 기능 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">핵심 기능</h2>
            <p className="text-gray-500 mt-2">복잡하지 않게, 꼭 필요한 기능만</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-sm transition-shadow">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 무료 플랜 */}
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">완전 무료</h2>
            <p className="text-gray-500 mt-2">모든 기능을 무료로 사용하세요</p>
          </div>
          <div className="bg-green-600 rounded-2xl p-6 text-white">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold">₩0</div>
              <div className="text-green-200 text-sm mt-1">무료 플랜</div>
            </div>
            <ul className="space-y-3 mb-6">
              {PLAN_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm">
                  <Check size={16} className="text-green-300 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <Button className="w-full bg-white text-green-700 hover:bg-green-50">
                지금 시작하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">자주 묻는 질문</h2>
          <div className="space-y-4">
            {[
              {
                q: "모바일에서도 사용할 수 있나요?",
                a: "네. 모바일 브라우저에 최적화된 반응형 UI를 제공합니다.",
              },
              {
                q: "데이터는 안전하게 보관되나요?",
                a: "Supabase의 Row Level Security를 적용해 사용자별 데이터를 완전히 분리합니다.",
              },
              {
                q: "여러 기기에서 동기화되나요?",
                a: "클라우드 기반 서비스로, 어디서나 동일한 데이터에 접근할 수 있습니다.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-medium text-gray-900 mb-1.5">{q}</p>
                <p className="text-sm text-gray-500">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 푸터 CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">지금 시작하세요</h2>
        <p className="text-gray-500 mb-6">무료로 가입하고 오늘부터 생산성을 높이세요.</p>
        <Link href="/signup">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
            무료 회원가입 <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-gray-100 py-8 px-4 text-center text-sm text-gray-400">
        <p>© 2026 Planary. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-gray-600">이용약관</a>
          <a href="#" className="hover:text-gray-600">개인정보처리방침</a>
        </div>
      </footer>
    </div>
  );
}
