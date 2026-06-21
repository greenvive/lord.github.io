import type { ServicePageContent } from "@/lib/types";

export const sportsBroadcastStage: ServicePageContent = {
  slug: "sports-broadcast-stage",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
    { name: "체육대회 및 BJ 무대설치", href: "/event-solutions/sports-broadcast-stage" },
  ],
  metaTitle: "체육대회·BJ 방송 무대 설치 | 야외행사·개인방송 세트 | LORD",
  metaDescription:
    "체육대회, 운동회, 야외 행사와 BJ/개인방송, 라이브커머스, 온라인 방송에 필요한 무대, 음향, 조명, 포토존, 세트 구성을 제공합니다. 현장 진행과 촬영 환경을 함께 고려합니다.",
  h1: "체육대회와 BJ/방송 행사를 위한 맞춤 무대 설치",
  aiSummary:
    "체육대회 무대는 넓은 야외 공간에서 진행자 음성 전달, 시상 동선, 관객 안전이 중요하고, BJ/방송 무대는 카메라 구도, 조명, 배경 세트, 음향 품질이 중요합니다. LORD는 체육대회, 운동회, 개인방송, 라이브커머스에 맞춘 무대와 시스템 구성을 제공합니다.",
  heroImageAlt: "체육대회 본부석 무대와 BJ 방송용 배경 세트",
  summaryTable: [
    { label: "적용 행사", value: "체육대회, 운동회, BJ/개인방송, 라이브커머스" },
    { label: "기본 구성(체육대회)", value: "본부석, 시상무대, 음향" },
    { label: "기본 구성(방송)", value: "배경 세트, 조명, 음향" },
    { label: "설치 시간", value: "약 4~6시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["체육대회", "운동회", "BJ/개인방송", "라이브커머스", "온라인 방송"],
  scope: [
    "체육대회 본부석·시상무대·음향 구성",
    "방송용 배경 세트·조명·소품 제작",
    "카메라 구도를 고려한 세트 설계",
    "진행자 음향 및 관객 안전선 확보",
    "행사·방송 종료 후 철거",
  ],
  configExamples: [
    { title: "소규모 운동회", detail: "본부석 + 음향 중심 구성" },
    { title: "지역 체육대회", detail: "본부석 + 시상무대 + 분산형 음향 구성" },
    { title: "BJ/라이브커머스 세트", detail: "배경 세트 + 색온도 보정 조명 + 방송 음향" },
  ],
  process: [
    "상담 — 체육대회 또는 방송 목적 확인",
    "현장 확인 — 운동장 규모 또는 스튜디오 공간 점검",
    "구성 제안 — 본부석/세트 구성 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공",
    "운영 — 행사·방송 당일 현장 지원",
    "철거 — 종료 후 철거",
  ],
  safetyChecklist: [
    "운동장 스피커 분산 배치로 음성 전달력 확보",
    "시상무대 주변 안전선 설치",
    "방송 세트 전기 배선 안전 점검",
    "카메라 동선과 진행 동선 분리",
  ],
  costFactors: [
    { item: "체육대회", factors: "운동장 규모, 스피커 수량" },
    { item: "방송 세트", factors: "세트 크기, 조명 수량, 모듈화 여부" },
  ],
  faq: [
    {
      q: "체육대회 진행용 음향만 렌탈할 수 있나요?",
      a: "네, 본부석·시상무대 없이 음향 장비만 별도로 렌탈하는 것도 가능합니다.",
    },
    {
      q: "운동장에 무대 설치가 가능한가요?",
      a: "가능합니다. 트랙이나 잔디 상태에 맞춰 바닥 보호 장비를 함께 사용합니다.",
    },
    {
      q: "BJ 방송용 배경 세트도 제작하나요?",
      a: "네, 개인방송·라이브커머스 모두 카메라 구도에 맞춘 배경 세트 제작이 가능합니다.",
    },
    {
      q: "라이브커머스 촬영용 조명도 가능한가요?",
      a: "가능합니다. 제품 색감 왜곡을 줄이는 색온도 보정 조명을 적용합니다.",
    },
    {
      q: "방송용 무대는 일반 무대와 무엇이 다른가요?",
      a: "카메라 구도와 조명, 배경 디자인이 핵심이며, 현장 관객보다 화면에 보이는 결과물을 기준으로 설계합니다.",
    },
  ],
  relatedLinks: [
    { label: "야외 무대", href: "/stage-rental-installation/outdoor-stage" },
    { label: "음향", href: "/system-equipment-rental/sound" },
    { label: "조명", href: "/system-equipment-rental/lighting" },
  ],
};
