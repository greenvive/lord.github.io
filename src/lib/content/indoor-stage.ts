import type { ServicePageContent } from "@/lib/types";

export const indoorStage: ServicePageContent = {
  slug: "indoor-stage",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "무대 설치·렌탈", href: "/stage-rental-installation" },
    { name: "실내 무대", href: "/stage-rental-installation/indoor-stage" },
  ],
  metaTitle: "실내 무대 설치·렌탈 | 호텔·강당·컨벤션 행사 무대 | LORD",
  metaDescription:
    "호텔, 강당, 컨벤션센터, 연회장 등 실내 행사장에 맞춘 무대 설치·렌탈 서비스를 제공합니다. 천고, 반입 동선, 바닥 하중, 전기 용량을 고려해 안전하게 시공합니다.",
  h1: "호텔·강당·컨벤션 행사에 최적화된 실내 무대 설치",
  aiSummary:
    "실내 무대 설치는 행사장 천고, 바닥 하중, 반입 동선, 전기 용량, 관객 시야를 고려해야 합니다. LORD는 호텔 연회장, 강당, 컨벤션센터, 회의실 등 실내 공간 조건에 맞춰 무대 높이와 규모, 백월, 음향, 조명 구성을 제안합니다.",
  heroImageAlt: "호텔 연회장에 설치된 실내 무대와 백월, 조명 시스템",
  summaryTable: [
    { label: "적용 행사", value: "세미나, 시상식, 기업행사, 컨퍼런스, 기념식, 발표회" },
    { label: "기본 구성", value: "무대 바닥, 백월, 음향, 조명" },
    { label: "선택 구성", value: "LED 전광판, 포토존" },
    { label: "설치 시간", value: "약 3~5시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["세미나", "시상식", "기업행사", "컨퍼런스", "기념식", "발표회"],
  scope: [
    "행사장 천고·반입 동선 사전 확인",
    "무대 바닥·계단·백월 설치",
    "바닥 보호 작업",
    "전기 용량 확인 및 음향·조명 구성",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "소규모 발표 무대", detail: "가로 4m, 포디움 + 음향 중심 구성" },
    { title: "중형 기업행사 무대", detail: "가로 6m, 백월 + 음향 + 조명 구성" },
    { title: "LED 포함 프리미엄 무대", detail: "가로 7m 이상, LED + 백월 + 조명 통합 구성" },
  ],
  process: [
    "상담 — 행사장 종류와 규모 확인",
    "현장 확인 — 천고, 반입 동선, 전기 점검",
    "구성 제안 — 무대 높이·규모 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공 및 바닥 보호",
    "리허설 — 음향·조명 점검",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "행사장 천고와 무대 높이 적합성 확인",
    "바닥 하중 및 보호 매트 적용",
    "엘리베이터·화물 반입 가능 여부 확인",
    "전기 용량 사전 점검",
  ],
  costFactors: [
    { item: "무대", factors: "크기, 높이, 바닥 보호 필요 여부" },
    { item: "백월", factors: "디자인, 출력 소재" },
    { item: "음향·조명", factors: "행사장 규모, 연출 난이도" },
  ],
  faq: [
    {
      q: "호텔 연회장에도 무대 설치가 가능한가요?",
      a: "네, 호텔 연회장의 천고와 반입 동선을 사전에 확인한 뒤 안전하게 설치합니다.",
    },
    {
      q: "실내 무대 설치 시 바닥 손상은 어떻게 방지하나요?",
      a: "바닥 보호 매트와 받침대를 사용해 기존 바닥재가 손상되지 않도록 설치합니다.",
    },
    {
      q: "엘리베이터 반입이 어려운 곳도 설치할 수 있나요?",
      a: "가능합니다. 계단 운반이나 분할 반입 등 현장에 맞는 방법을 사전에 계획합니다.",
    },
    {
      q: "실내 무대에 LED 전광판을 함께 설치할 수 있나요?",
      a: "네, 천고와 전기 용량이 충족되면 LED 전광판을 함께 설치할 수 있습니다.",
    },
    {
      q: "행사 당일 오전 설치가 가능한가요?",
      a: "가능합니다. 다만 설치 시간이 짧을 경우 사전에 장비와 인력을 더 확보해 진행합니다.",
    },
  ],
  relatedLinks: [
    { label: "기업행사 무대", href: "/stage-rental-installation/corporate-event-stage" },
    { label: "LED 전광판", href: "/system-equipment-rental/led-screen" },
    { label: "비용·견적 가이드", href: "/cost-estimate-guide" },
  ],
};
