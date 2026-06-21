import type { ServicePageContent } from "@/lib/types";

export const festivalPerformanceSolution: ServicePageContent = {
  slug: "festival-performance",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
    { name: "축제·공연", href: "/event-solutions/festival-performance" },
  ],
  metaTitle: "축제·공연 무대·음향·조명 설치 | LORD",
  metaDescription:
    "지역축제, 대학축제, 콘서트, 공연 행사에 필요한 무대, 음향, 조명, LED, 트러스를 통합 설치합니다. 관객 규모와 출연자 동선을 고려해 안전하게 구성합니다.",
  h1: "관객 몰입도를 높이는 축제·공연 무대 솔루션",
  aiSummary:
    "축제·공연 설치는 무대 크기, 관객 규모, 출연자 동선, 음향 출력, 조명 연출, LED 화면, 안전 동선을 함께 고려해야 합니다. LORD는 지역축제, 대학축제, 콘서트, 공연 행사에 맞춰 무대와 시스템 장비를 통합 제공합니다.",
  heroImageAlt: "축제 현장에 설치된 대형 무대와 LED, 조명, 음향 시스템",
  summaryTable: [
    { label: "적용 행사", value: "지역축제, 대학축제, 콘서트, 공연" },
    { label: "기본 구성", value: "무대, 음향, 조명" },
    { label: "선택 구성", value: "LED, 트러스, 백스테이지" },
    { label: "설치 시간", value: "약 5~8시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["지역축제", "대학축제", "콘서트", "공연", "버스킹"],
  scope: [
    "관객 규모에 맞춘 무대·시스템 구성",
    "출연자 동선과 백스테이지 설계",
    "음향·조명·LED 통합 운영",
    "야외 행사 안전 대응",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "소규모 버스킹", detail: "가로 4~6m 무대, 음향·조명 중심 구성" },
    { title: "지역축제 무대", detail: "가로 8~10m, LED + 트러스 통합 구성" },
    { title: "대형 콘서트 무대", detail: "가로 10m 이상, 트러스 보강 + 멀티 음향 구성" },
  ],
  process: [
    "상담 — 출연팀 수와 진행 순서 확인",
    "현장 확인 — 관객 규모, 지면, 전기 점검",
    "구성 제안 — 무대·시스템 구성 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공",
    "리허설 — 출연팀별 음향·조명 점검",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "관객 안전선 및 동선 확보",
    "백스테이지와 관객 구역 분리",
    "야외 행사 우천·강풍 대비",
    "트러스·LED 고정 상태 점검",
  ],
  costFactors: [
    { item: "무대", factors: "크기, 트러스 보강 여부" },
    { item: "음향", factors: "관객 규모, 출력 사양" },
    { item: "LED·조명", factors: "화면 크기, 연출 난이도" },
  ],
  faq: [
    {
      q: "지역축제 무대 설치도 가능한가요?",
      a: "네, 지역축제·대학축제 등 다양한 규모의 축제 무대 설치 경험이 있습니다.",
    },
    {
      q: "공연 음향과 조명을 함께 구성할 수 있나요?",
      a: "가능합니다. 공연 특성에 맞춘 음향 출력과 조명 연출을 함께 설계합니다.",
    },
    {
      q: "출연자 대기 공간도 고려하나요?",
      a: "네, 백스테이지 공간과 관객 구역을 분리해 출연자 대기와 이동이 원활하도록 설계합니다.",
    },
    {
      q: "야외 축제 우천 대비는 어떻게 하나요?",
      a: "방수 장비와 트러스 고정 작업으로 대비하며, 필요 시 일정 조율을 함께 안내드립니다.",
    },
    {
      q: "LED 화면이 필요한 행사는 어떤 경우인가요?",
      a: "관객 규모가 크거나 무대와 거리가 먼 경우, 영상·자막을 송출해야 하는 공연에 LED를 추천합니다.",
    },
  ],
  relatedLinks: [
    { label: "야외 무대", href: "/stage-rental-installation/outdoor-stage" },
    { label: "공연·축제 무대", href: "/stage-rental-installation/festival-performance-stage" },
    { label: "트러스/레이어", href: "/system-equipment-rental/truss-layer" },
  ],
};
