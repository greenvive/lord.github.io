import type { ServicePageContent } from "@/lib/types";

export const festivalPerformanceStage: ServicePageContent = {
  slug: "festival-performance-stage",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "무대 설치·렌탈", href: "/stage-rental-installation" },
    { name: "공연·축제 무대", href: "/stage-rental-installation/festival-performance-stage" },
  ],
  metaTitle: "공연·축제 무대 설치 | 지역축제·대학축제·콘서트 무대 | LORD",
  metaDescription:
    "공연, 지역축제, 대학축제, 버스킹, 콘서트에 필요한 무대 설치·렌탈 서비스를 제공합니다. 음향, 조명, LED, 트러스, 출연자 동선까지 행사 규모에 맞춰 구성합니다.",
  h1: "관객과 출연자가 모두 만족하는 공연·축제 무대 설치",
  aiSummary:
    "공연·축제 무대는 출연자 수, 관객 규모, 음향 출력, 조명 연출, LED 화면, 백스테이지 동선을 고려해 설계해야 합니다. LORD는 지역축제, 대학축제, 콘서트, 버스킹 등 공연형 행사에 맞춘 무대와 시스템 장비를 통합 제공합니다.",
  heroImageAlt: "공연 무대에 설치된 LED 배경 화면과 조명, 음향 시스템",
  summaryTable: [
    { label: "적용 행사", value: "지역축제, 대학축제, 콘서트, 버스킹" },
    { label: "기본 구성", value: "무대, 음향, 조명" },
    { label: "선택 구성", value: "LED, 트러스, 백스테이지 텐트" },
    { label: "설치 시간", value: "약 6~9시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["지역축제", "대학축제", "콘서트", "버스킹", "야외 공연"],
  scope: [
    "관객 규모에 맞춘 무대 규격 설계",
    "출연자 동선과 백스테이지 공간 구성",
    "음향·조명·LED 통합 설치",
    "리허설 진행 지원",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "소규모 버스킹 무대", detail: "가로 5m, 음향·조명 중심 구성" },
    { title: "대학축제 무대", detail: "가로 8m, LED + 조명 통합 구성" },
    { title: "지역축제 콘서트 무대", detail: "가로 10m 이상, 트러스 + 멀티 음향 구성" },
  ],
  process: [
    "상담 — 출연팀 수와 공연 순서 확인",
    "현장 확인 — 관객 규모, 지면 상태 점검",
    "구성 제안 — 무대·시스템 구성 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공",
    "리허설 — 출연팀별 음향·조명 점검",
    "운영 — 공연 진행 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "무대와 관객석 간 안전 거리 확보",
    "백스테이지 동선과 관객 동선 분리",
    "야외 공연 시 우천·강풍 대비",
    "음향 장비 하울링 방지 점검",
  ],
  costFactors: [
    { item: "무대", factors: "크기, 트러스 보강 여부" },
    { item: "음향", factors: "관객 규모, 출연팀 수" },
    { item: "조명·LED", factors: "연출 난이도, 화면 크기" },
  ],
  faq: [
    {
      q: "대학축제 무대 설치도 가능한가요?",
      a: "네, 대학축제처럼 다수의 동아리·아티스트가 출연하는 행사 경험이 많습니다.",
    },
    {
      q: "공연 무대에 필요한 음향 출력은 어떻게 정하나요?",
      a: "관객 규모와 공연장 형태(실내/야외)를 기준으로 스피커 출력과 배치를 결정합니다.",
    },
    {
      q: "출연자가 많은 행사에는 무대를 어떻게 구성하나요?",
      a: "백스테이지 대기 공간을 별도로 마련하고, 무대 전환이 빠르게 이루어지도록 동선을 설계합니다.",
    },
    {
      q: "LED 전광판이 꼭 필요한가요?",
      a: "관객 규모가 크거나 영상 콘텐츠가 중요한 공연이라면 추천하며, 소규모 공연에서는 선택사항입니다.",
    },
    {
      q: "공연 리허설까지 지원하나요?",
      a: "네, 출연팀별 음향·조명 리허설을 진행 순서에 맞춰 지원합니다.",
    },
  ],
  relatedLinks: [
    { label: "야외 무대", href: "/stage-rental-installation/outdoor-stage" },
    { label: "축제·공연 솔루션", href: "/event-solutions/festival-performance" },
    { label: "트러스/레이어", href: "/system-equipment-rental/truss-layer" },
  ],
};
