import type { ServicePageContent } from "@/lib/types";

export const ceremonyMemorial: ServicePageContent = {
  slug: "ceremony-memorial-stage",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
    { name: "기념식·추도식", href: "/event-solutions/ceremony-memorial-stage" },
  ],
  metaTitle: "기념식·추도식 무대 설치 | 의전·공공행사 무대 | LORD",
  metaDescription:
    "기념식, 추도식, 추모행사, 공공행사에 필요한 무대, 백월, 음향, 조명, 의전 동선을 구성합니다. 행사 분위기와 상징성을 고려해 차분하고 품격 있게 설치합니다.",
  h1: "행사의 의미와 품격을 살리는 기념식·추도식 무대 설치",
  aiSummary:
    "기념식·추도식 무대는 과한 연출보다 행사 의미, 의전 동선, 헌화·묵념 진행, 백월 디자인, 음향 전달력이 중요합니다. LORD는 공공행사와 추모행사에 맞춰 차분하고 품격 있는 무대와 시스템 구성을 제공합니다.",
  heroImageAlt: "추도식 현장에 설치된 절제된 디자인의 백월과 무대",
  summaryTable: [
    { label: "적용 행사", value: "기념식, 추도식, 추모행사, 현충일 행사, 공공행사" },
    { label: "기본 구성", value: "무대, 백월, 음향" },
    { label: "선택 구성", value: "헌화대, 조명, 내빈석" },
    { label: "설치 시간", value: "약 2~4시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["기념식", "추도식", "추모행사", "현충일 행사", "공공행사"],
  scope: [
    "절제된 디자인의 무대·백월 설치",
    "헌화·묵념 동선 설계",
    "음향 전달력 중심의 마이크·스피커 구성",
    "차분한 조명 연출",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "소규모 추도식", detail: "가로 4~5m 무대, 백월 + 음향 중심 구성" },
    { title: "공공기관 기념식", detail: "무대 + 헌화대 + 내빈석 통합 구성" },
    { title: "대규모 추모행사", detail: "무대 + 백월 + 다채널 음향 + 차분한 조명" },
  ],
  process: [
    "상담 — 행사 진행 순서와 의미 확인",
    "현장 확인 — 장소, 동선 점검",
    "구성 제안 — 절제된 디자인 방향 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공",
    "운영 — 행사 당일 진행 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "헌화대-무대 간 이동 동선 확보",
    "묵념 진행을 위한 무음향 구간 운영",
    "조명 밝기 과다 연출 자제",
    "내빈 동선과 일반 참석자 동선 분리",
  ],
  costFactors: [
    { item: "무대", factors: "크기, 백월 포함 여부" },
    { item: "음향", factors: "참석 인원, 야외 여부" },
    { item: "백월", factors: "디자인 단순도, 출력 소재" },
    { item: "헌화대", factors: "규모, 동선 구성" },
  ],
  faq: [
    {
      q: "추도식 무대는 일반 행사 무대와 무엇이 다른가요?",
      a: "화려한 연출보다 절제된 디자인과 차분한 진행을 우선하며, 헌화·묵념 동선을 더 중요하게 고려합니다.",
    },
    {
      q: "헌화대와 무대를 함께 구성할 수 있나요?",
      a: "네, 헌화대와 무대 사이의 이동 동선을 고려해 함께 배치합니다.",
    },
    {
      q: "백월 디자인도 가능한가요?",
      a: "가능합니다. 행사명 중심의 단순하고 품격 있는 디자인으로 제작합니다.",
    },
    {
      q: "야외 추모행사 음향도 지원하나요?",
      a: "네, 야외 공간에서도 음성이 명확히 전달되도록 스피커 배치를 설계합니다.",
    },
    {
      q: "공공기관 행사 경험이 중요한가요?",
      a: "네, 의전 절차와 진행 순서에 대한 이해가 필요한 만큼 공공행사 경험을 바탕으로 진행합니다.",
    },
  ],
  relatedLinks: [
    { label: "무대 설치·렌탈", href: "/stage-rental-installation" },
    { label: "음향", href: "/system-equipment-rental/sound" },
    { label: "설치 포트폴리오", href: "/portfolio" },
  ],
};
