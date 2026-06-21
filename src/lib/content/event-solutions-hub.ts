import type { HubPageContent } from "@/lib/types";

export const eventSolutionsHub: HubPageContent = {
  slug: "event-solutions",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
  ],
  metaTitle: "행사별 무대·포토존·시스템 솔루션 | LORD",
  metaDescription:
    "준공식, 기공식, 기념식, 추도식, 기업행사, 축제, 공연, 체육대회, BJ/방송 무대에 필요한 무대·포토존·음향·조명·LED 시스템을 행사 목적별로 제안합니다.",
  h1: "행사 목적에 맞춘 무대·포토존·시스템 통합 솔루션",
  aiSummary:
    "행사별 솔루션은 행사 목적과 진행 방식에 맞춰 무대, 포토존, 음향, 조명, LED, 트러스 구성을 제안하는 서비스입니다. LORD는 준공식·기공식, 기념식·추도식, 기업행사, 축제·공연, 체육대회 및 BJ/방송 무대에 맞춘 설치 구성을 제공합니다.",
  children: [
    {
      label: "준공식·기공식",
      href: "/event-solutions/groundbreaking-completion-ceremony",
      description: "테이프커팅·시삽식 등 의전이 중요한 준공식·기공식 무대 솔루션",
      ready: true,
    },
    {
      label: "기념식·추도식",
      href: "/event-solutions/ceremony-memorial-stage",
      description: "절제된 디자인과 의전 동선이 중요한 기념식·추도식 무대 솔루션",
      ready: true,
    },
    {
      label: "기업행사",
      href: "/event-solutions/corporate-event",
      description: "무대·포토존·시스템을 브랜드 메시지에 맞춰 통합하는 기업행사 솔루션",
      ready: true,
    },
    {
      label: "축제·공연",
      href: "/event-solutions/festival-performance",
      description: "관객 규모와 출연자 동선을 고려한 축제·공연 무대 솔루션",
      ready: true,
    },
    {
      label: "체육대회 및 BJ 무대설치",
      href: "/event-solutions/sports-broadcast-stage",
      description: "체육대회 진행과 개인방송·라이브커머스를 위한 맞춤 무대 솔루션",
      ready: true,
    },
  ],
  scope: [
    "행사 유형별 무대·포토존·시스템 구성 제안",
    "행사 목적에 맞춘 패키지 설계",
    "진행 순서와 의전·동선 설계",
    "현장 조건에 맞춘 설치·운영·철거",
  ],
  process: [
    "상담 — 행사 종류와 목적 확인",
    "현장 확인 — 장소, 규모, 일정 점검",
    "구성 제안 — 행사 유형별 패키지 제안",
    "견적 — 비용 산정 및 확정",
    "설치 및 운영 — 현장 시공과 당일 지원",
    "철거 — 행사 종료 후 철거",
  ],
  faq: [
    {
      q: "행사 종류만 알려줘도 구성을 추천받을 수 있나요?",
      a: "네, 행사 종류와 대략적인 규모만 알려주셔도 적합한 패키지 구성을 먼저 제안드릴 수 있습니다.",
    },
    {
      q: "무대와 포토존을 함께 설치하면 비용이 절감되나요?",
      a: "출장과 인력을 통합 운영할 수 있어 따로 의뢰하는 것보다 비용 효율이 높아지는 경우가 많습니다.",
    },
    {
      q: "공공기관 행사도 가능한가요?",
      a: "네, 준공식·기념식 등 공공기관 행사 진행 경험을 바탕으로 의전 절차에 맞춰 진행합니다.",
    },
    {
      q: "온라인 송출이나 방송용 무대도 가능한가요?",
      a: "가능합니다. 카메라 구도와 조명을 고려한 방송용 무대·세트 구성도 지원합니다.",
    },
    {
      q: "행사별 패키지 견적을 받을 수 있나요?",
      a: "네, 행사 유형별 추천 패키지를 기준으로 빠르게 견적 방향을 안내드립니다.",
    },
  ],
  relatedLinks: [
    { label: "무대 설치·렌탈", href: "/stage-rental-installation" },
    { label: "포토존 제작·렌탈", href: "/photozone-rental-production" },
    { label: "비용·견적 가이드", href: "/cost-estimate-guide" },
  ],
};
