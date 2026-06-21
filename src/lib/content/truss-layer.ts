import type { ServicePageContent } from "@/lib/types";

export const trussLayer: ServicePageContent = {
  slug: "truss-layer",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "시스템", href: "/system-equipment-rental" },
    { name: "트러스/레이어", href: "/system-equipment-rental/truss-layer" },
  ],
  metaTitle: "트러스·레이어 설치 렌탈 | 무대·조명·포토존 구조물 | LORD",
  metaDescription:
    "무대, 조명, LED, 포토존 설치에 필요한 트러스와 레이어 구조물을 렌탈·설치합니다. 행사장 구조, 하중, 안전, 장비 배치를 고려해 현장 맞춤형으로 구성합니다.",
  h1: "무대와 장비를 안전하게 지지하는 트러스·레이어 구조물",
  aiSummary:
    "트러스와 레이어 구조물은 조명, LED, 현수막, 포토존, 무대 장비를 안전하게 고정하기 위한 행사 구조물입니다. LORD는 행사장 조건과 장비 하중, 설치 위치, 안전 동선을 고려해 트러스·레이어를 설치합니다.",
  heroImageAlt: "야외 무대에 설치된 트러스 구조물과 조명·LED 장비",
  summaryTable: [
    { label: "적용 대상", value: "조명, LED, 현수막, 포토존, 사인물" },
    { label: "기본 구성", value: "스탠딩 트러스, 레이어" },
    { label: "선택 구성", value: "지붕형 트러스, 보강재" },
    { label: "설치 시간", value: "약 3~6시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["야외 무대 행사", "조명·LED 설치가 필요한 행사", "포토존 구조물이 필요한 행사"],
  scope: [
    "장비 하중에 맞춘 트러스 규격 설계",
    "스탠딩형·지붕형 트러스 설치",
    "조명·LED·현수막 거치 구조 구성",
    "안전 보강 및 고정 작업",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "조명 거치용 트러스", detail: "스탠딩 트러스 2~4조" },
    { title: "LED 지지용 트러스", detail: "보강 트러스 + 고정 베이스" },
    { title: "야외 무대 지붕형 트러스", detail: "대형 지붕형 트러스 + 강풍 보강" },
  ],
  process: [
    "상담 — 거치할 장비와 하중 확인",
    "현장 확인 — 설치 위치, 지면 상태 점검",
    "구성 제안 — 트러스 규격 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공 및 고정",
    "안전 점검 — 하중 및 고정 상태 확인",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "장비 하중 대비 구조 안전성 점검",
    "지면 고정 및 수평 확인",
    "강풍 대비 보강재 적용",
    "고소 작업 안전 절차 준수",
  ],
  costFactors: [
    { item: "트러스", factors: "규모, 형태(스탠딩/지붕형)" },
    { item: "보강", factors: "하중, 강풍 대비 보강 필요 여부" },
    { item: "설치 높이", factors: "고소 작업 난이도" },
  ],
  faq: [
    {
      q: "트러스와 레이어는 무엇이 다른가요?",
      a: "트러스는 장비를 매달거나 지지하는 입체 구조물이고, 레이어는 평면형 거치 구조물입니다. 용도에 따라 선택합니다.",
    },
    {
      q: "조명 설치용 트러스도 가능한가요?",
      a: "네, 조명 수량과 무게에 맞춰 트러스 규격을 설계합니다.",
    },
    {
      q: "포토존 구조물로 트러스를 사용할 수 있나요?",
      a: "가능합니다. 대형 포토존이나 야외 포토존에 트러스를 구조물로 활용합니다.",
    },
    {
      q: "실내 행사장에도 트러스 설치가 가능한가요?",
      a: "네, 천고와 바닥 하중을 확인한 뒤 실내에도 설치할 수 있습니다.",
    },
    {
      q: "트러스 설치 시 안전 확인은 어떻게 하나요?",
      a: "장비 하중과 설치 높이를 기준으로 구조 안전성을 점검하고, 필요 시 추가 보강재를 사용합니다.",
    },
  ],
  relatedLinks: [
    { label: "야외 무대", href: "/stage-rental-installation/outdoor-stage" },
    { label: "LED 전광판", href: "/system-equipment-rental/led-screen" },
    { label: "축제·공연 솔루션", href: "/event-solutions/festival-performance" },
  ],
};
