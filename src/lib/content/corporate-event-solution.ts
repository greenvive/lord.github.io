import type { ServicePageContent } from "@/lib/types";

export const corporateEventSolution: ServicePageContent = {
  slug: "corporate-event",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
    { name: "기업행사", href: "/event-solutions/corporate-event" },
  ],
  metaTitle: "기업행사 무대·포토존·시스템 통합 설치 | LORD",
  metaDescription:
    "기업행사, 사내행사, 컨퍼런스, 시상식, 비전선포식에 필요한 무대, 포토존, 음향, 조명, LED, 백월을 통합 설치합니다. 브랜드 메시지와 행사 진행을 고려해 구성합니다.",
  h1: "브랜드 메시지와 행사 진행을 함께 설계하는 기업행사 솔루션",
  aiSummary:
    "기업행사 설치는 무대, 포토존, 음향, 조명, LED, 백월을 각각 따로 보는 것보다 행사 목적과 브랜드 메시지에 맞춰 통합 설계하는 것이 중요합니다. LORD는 기업행사의 발표, 시상, 촬영, 의전, 관객 동선을 고려해 공간을 구성합니다.",
  heroImageAlt: "기업행사 현장에 통합 설치된 무대, 포토존, LED, 음향 시스템",
  summaryTable: [
    { label: "적용 행사", value: "기업행사, 사내행사, 컨퍼런스, 시상식, 비전선포식" },
    { label: "기본 구성", value: "무대, 음향, 조명" },
    { label: "선택 구성", value: "포토존, LED, 백월, 트러스" },
    { label: "설치 시간", value: "약 3~6시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["기업행사", "사내행사", "컨퍼런스", "시상식", "비전선포식"],
  scope: [
    "무대·포토존·시스템 통합 설계",
    "브랜드 로고·컬러를 반영한 백월·포토존 디자인",
    "발표·시상·의전 동선 설계",
    "LED 송출 및 음향·조명 운영",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "소규모 사내행사", detail: "무대 + 음향 + 조명 기본 구성" },
    { title: "중형 컨퍼런스", detail: "무대 + LED + 포토존 통합 구성" },
    { title: "대형 시상식·비전선포식", detail: "무대 + 백월 + LED + 포토존 + 트러스 통합 구성" },
  ],
  process: [
    "상담 — 행사 목적과 브랜드 가이드 확인",
    "현장 확인 — 장소, 동선, 전기 점검",
    "구성 제안 — 통합 구성 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공",
    "리허설 — 발표·시상 동선 점검",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "발표자·시상자 동선과 관객 동선 분리",
    "전기 용량 사전 확인",
    "LED·트러스 고정 상태 점검",
    "포토존 촬영 동선 확보",
  ],
  costFactors: [
    { item: "무대", factors: "크기, 높이, 백월 포함 여부" },
    { item: "포토존", factors: "디자인, 브랜드 적용 범위" },
    { item: "LED·음향·조명", factors: "화면 크기, 참석 인원, 연출 난이도" },
  ],
  faq: [
    {
      q: "기업행사 전체 설치를 한 번에 맡길 수 있나요?",
      a: "네, 무대·포토존·음향·조명·LED를 하나의 팀이 통합으로 설치해 별도 업체를 섭외할 필요가 없습니다.",
    },
    {
      q: "무대와 포토존 디자인 톤을 통일할 수 있나요?",
      a: "가능합니다. 브랜드 가이드를 기준으로 무대와 포토존의 디자인 톤을 통일해 제작합니다.",
    },
    {
      q: "발표 자료와 LED 송출도 가능한가요?",
      a: "네, 발표 자료, 영상, 시상식 화면을 LED로 송출할 수 있도록 장비를 구성합니다.",
    },
    {
      q: "임원 의전 동선을 고려해 설치할 수 있나요?",
      a: "가능합니다. 임원 이동 동선과 좌석 배치를 사전에 협의해 반영합니다.",
    },
    {
      q: "행사 규모별 패키지가 있나요?",
      a: "네, 소규모 사내행사부터 대형 시상식까지 규모별 추천 구성을 제안드립니다.",
    },
  ],
  relatedLinks: [
    { label: "기업행사 무대", href: "/stage-rental-installation/corporate-event-stage" },
    { label: "기업행사 포토존", href: "/photozone-rental-production/corporate-photozone" },
    { label: "LED 전광판", href: "/system-equipment-rental/led-screen" },
  ],
};
