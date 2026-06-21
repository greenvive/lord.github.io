import type { ServicePageContent } from "@/lib/types";

export const groundbreakingCeremony: ServicePageContent = {
  slug: "groundbreaking-completion-ceremony",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
    { name: "준공식·기공식", href: "/event-solutions/groundbreaking-completion-ceremony" },
  ],
  metaTitle: "준공식·기공식 무대 설치 | 테이프커팅·의전 행사 | LORD",
  metaDescription:
    "준공식, 기공식, 착공식, 테이프커팅 행사에 필요한 무대, 백월, 음향, 조명, 포토존을 설치합니다. 의전 동선과 행사 진행에 맞춘 구성을 제안합니다.",
  h1: "의전과 상징성이 중요한 준공식·기공식 무대 설치",
  aiSummary:
    "준공식·기공식 무대는 내빈 의전, 테이프커팅 동선, 백월, 음향, 포토존, 현장 안전을 함께 고려해야 합니다. LORD는 공공기관, 기업, 건설 현장 행사의 목적에 맞춰 무대와 시스템 장비를 설치합니다.",
  heroImageAlt: "준공식 현장에 설치된 테이프커팅존과 무대, 음향 시스템",
  summaryTable: [
    { label: "적용 행사", value: "준공식, 기공식, 착공식, 테이프커팅" },
    { label: "기본 구성", value: "무대, 테이프커팅존, 음향" },
    { label: "선택 구성", value: "백월, 포토존, 내빈석" },
    { label: "설치 시간", value: "약 3~5시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["준공식", "기공식", "착공식", "테이프커팅 행사"],
  scope: [
    "무대·테이프커팅존 설치",
    "내빈 의전 동선 설계",
    "백월·포토존 구성",
    "음향(유선 마이크 중심) 설치",
    "공사 현장 바닥 보강 및 안전 점검",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "소규모 착공식", detail: "가로 4~5m 무대, 음향 중심 구성" },
    { title: "테이프커팅 중심 준공식", detail: "테이프커팅존 + 무대 + 포토존 구성" },
    { title: "대형 준공식", detail: "무대 + 백월 + LED + 내빈석 통합 구성" },
  ],
  process: [
    "상담 — 행사 순서와 내빈 규모 확인",
    "현장 확인 — 바닥 상태, 동선 점검",
    "구성 제안 — 무대·테이프커팅존 구성 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공 및 바닥 보강",
    "운영 — 행사 당일 진행 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "공사 현장 바닥 수평 및 하중 점검",
    "테이프커팅존 안전 거리 확보",
    "내빈 이동 동선 확보",
    "임시 전기 배선 안전 점검",
  ],
  costFactors: [
    { item: "무대", factors: "크기, 바닥 보강 필요 여부" },
    { item: "테이프커팅존", factors: "내빈 수, 장식 구성" },
    { item: "음향", factors: "참석 인원, 마이크 수량" },
    { item: "포토존", factors: "디자인, 설치 위치" },
  ],
  faq: [
    {
      q: "준공식에 필요한 기본 장비는 무엇인가요?",
      a: "일반적으로 무대, 테이프커팅존, 음향이 기본 구성이며, 행사 규모에 따라 백월과 포토존을 추가합니다.",
    },
    {
      q: "테이프커팅 무대도 설치하나요?",
      a: "네, 테이프커팅 장면이 잘 보이도록 무대와 테이프커팅존의 위치와 각도를 함께 설계합니다.",
    },
    {
      q: "야외 현장에서도 설치가 가능한가요?",
      a: "가능합니다. 공사 현장이나 야외 부지의 바닥 상태를 확인한 뒤 보강 작업을 거쳐 설치합니다.",
    },
    {
      q: "내빈석과 포토존도 함께 구성할 수 있나요?",
      a: "네, 내빈 규모에 맞춰 내빈석과 포토존을 함께 배치할 수 있습니다.",
    },
    {
      q: "공사 현장처럼 바닥이 고르지 않은 곳도 가능한가요?",
      a: "네, 수평 보강 작업을 통해 안전하게 설치할 수 있습니다. 사전 현장 확인을 권장합니다.",
    },
  ],
  relatedLinks: [
    { label: "야외 무대", href: "/stage-rental-installation/outdoor-stage" },
    { label: "음향", href: "/system-equipment-rental/sound" },
    { label: "기업행사 포토존", href: "/photozone-rental-production/corporate-photozone" },
  ],
};
