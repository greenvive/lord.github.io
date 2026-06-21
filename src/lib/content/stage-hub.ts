import type { HubPageContent } from "@/lib/types";

export const stageHub: HubPageContent = {
  slug: "stage-rental-installation",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "무대 설치·렌탈", href: "/stage-rental-installation" },
  ],
  metaTitle: "무대 설치·렌탈 | 실내·야외·기업행사·공연 무대 전문 | LORD",
  metaDescription:
    "LORD는 실내 무대, 야외 무대, 기업행사 무대, 공연·축제 무대 설치와 렌탈을 제공합니다. 행사 규모와 현장 조건에 맞춰 무대 규격, 백월, 음향, 조명, LED 구성을 함께 제안합니다.",
  h1: "행사 목적과 현장 조건에 맞춘 무대 설치·렌탈",
  aiSummary:
    "무대 설치·렌탈은 행사 규모, 장소, 참석 인원, 무대 높이, 음향·조명·LED 구성에 따라 설계가 달라집니다. LORD는 실내·야외·기업행사·공연 무대를 현장 조건에 맞춰 설치하고, 필요 시 포토존, 백월, 음향, 조명, LED 시스템까지 통합 구성합니다.",
  children: [
    {
      label: "실내 무대",
      href: "/stage-rental-installation/indoor-stage",
      description: "호텔·강당·컨벤션 등 실내 행사장 천고·동선·전기 조건에 맞춘 무대 설치",
      ready: false,
    },
    {
      label: "야외 무대",
      href: "/stage-rental-installation/outdoor-stage",
      description: "축제·공연·공공행사를 위한 우천·강풍 대응 야외 무대 설치",
      ready: true,
    },
    {
      label: "기업행사 무대",
      href: "/stage-rental-installation/corporate-event-stage",
      description: "창립기념식·시상식·발표회를 위한 브랜드 중심 무대 설치",
      ready: true,
    },
    {
      label: "공연·축제 무대",
      href: "/stage-rental-installation/festival-performance-stage",
      description: "지역축제·대학축제·콘서트를 위한 출연자 동선 중심 무대 설치",
      ready: false,
    },
  ],
  scope: [
    "무대 바닥, 계단, 난간, 백월, 트러스 설치",
    "LED 전광판, 음향, 조명 통합 구성",
    "행사 규모·현장 조건에 맞춘 규격 설계",
    "리허설 및 행사 당일 운영 지원",
    "행사 종료 후 철거",
  ],
  process: [
    "상담 — 행사 목적, 일정, 장소 확인",
    "현장 확인 — 천고, 바닥, 전기, 동선 점검",
    "구성 제안 — 무대 규격과 장비 구성 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공 및 안전 점검",
    "리허설 — 음향·조명·LED 최종 점검",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 신속 철거",
  ],
  faq: [
    {
      q: "행사 무대 설치는 몇 시간 정도 걸리나요?",
      a: "무대 규모와 장비 구성에 따라 다르지만, 일반적인 기업행사 무대는 3~6시간, LED·트러스가 포함된 대형 무대는 6시간 이상 소요됩니다.",
    },
    {
      q: "무대 크기는 어떻게 정하나요?",
      a: "참석 인원, 무대 사용 인원, LED·백월 크기, 행사장 천고, 관객 시야각을 함께 고려해 결정합니다. 현장 실사 후 정확한 규격을 제안드립니다.",
    },
    {
      q: "실내 행사장에도 무대를 설치할 수 있나요?",
      a: "가능합니다. 호텔 연회장, 강당, 컨벤션센터 등 실내 공간은 천고와 반입 동선, 전기 용량을 확인한 뒤 설치합니다.",
    },
    {
      q: "야외 무대는 비나 바람에 어떻게 대비하나요?",
      a: "방수 장비와 트러스 고정, 강풍 시 설치 중단 기준을 사전에 안내드리며, 필요 시 발전차와 방수 커버를 함께 준비합니다.",
    },
    {
      q: "무대와 음향, 조명을 함께 의뢰할 수 있나요?",
      a: "네, LORD는 무대·음향·조명·LED·트러스를 통합으로 제공하여 별도 업체를 섭외하지 않고 한 번에 진행할 수 있습니다.",
    },
  ],
  relatedLinks: [
    { label: "비용·견적 가이드", href: "/cost-estimate-guide" },
    { label: "설치 포트폴리오", href: "/portfolio" },
    { label: "시스템(음향·조명·LED·트러스)", href: "/system-equipment-rental" },
  ],
};
