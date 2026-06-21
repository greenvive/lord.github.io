import type { ServicePageContent } from "@/lib/types";

export const corporatePhotozone: ServicePageContent = {
  slug: "corporate-photozone",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "포토존 제작·렌탈", href: "/photozone-rental-production" },
    { name: "기업행사 포토존", href: "/photozone-rental-production/corporate-photozone" },
  ],
  metaTitle: "기업행사 포토존 제작 | 시상식·창립기념식·컨퍼런스 | LORD",
  metaDescription:
    "기업행사, 시상식, 창립기념식, 컨퍼런스에 필요한 포토존과 포토월을 제작·설치합니다. 브랜드 로고, 행사명, 촬영 조명, 레드카펫까지 현장에 맞춰 구성합니다.",
  h1: "브랜드 신뢰를 높이는 기업행사 포토존 제작",
  aiSummary:
    "기업행사 포토존은 브랜드 로고, 행사명, 참석자 동선, 사진 촬영 품질을 고려해 설계해야 합니다. LORD는 시상식, 창립기념식, 컨퍼런스, 사내행사에 맞춘 포토월·백월·조명·레드카펫 구성을 제공합니다.",
  heroImageAlt: "기업행사장에 설치된 브랜드 로고 포토존과 레드카펫",
  summaryTable: [
    { label: "적용 행사", value: "시상식, 창립기념식, 컨퍼런스, 사내행사" },
    { label: "기본 구성", value: "포토존 백월, 조명" },
    { label: "선택 구성", value: "레드카펫, 협찬사 로고, 사인물" },
    { label: "설치 시간", value: "약 2~4시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["시상식", "창립기념식", "컨퍼런스", "사내행사"],
  scope: [
    "브랜드 로고 반영 디자인 시안 제작",
    "포토존 출력 및 구조물 설치",
    "촬영 조명 설치",
    "레드카펫·사인물 구성",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "소규모 사내행사 포토존", detail: "가로 3m, 단일 로고 디자인" },
    { title: "시상식 포토존", detail: "가로 5m, 로고 반복 패턴 + 레드카펫" },
    { title: "컨퍼런스 포토존", detail: "가로 4~5m, 협찬사 로고 다수 배치" },
  ],
  process: [
    "상담 — 행사명, 로고, 협찬사 정보 확인",
    "디자인 시안 제공",
    "출력 및 구조물 제작",
    "설치 — 현장 시공 및 조명 세팅",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "구조물 고정 상태 점검",
    "촬영 조명 전기 배선 안전 점검",
    "촬영 동선과 이동 동선 분리",
  ],
  costFactors: [
    { item: "포토존", factors: "크기, 디자인 복잡도, 로고 수" },
    { item: "조명", factors: "조명 수량, 연출 난이도" },
    { item: "부속", factors: "레드카펫, 사인물 추가 여부" },
  ],
  faq: [
    {
      q: "행사 로고와 협찬사 로고를 함께 넣을 수 있나요?",
      a: "네, 협찬사 로고의 우선순위와 크기를 협의해 균형 있게 배치합니다.",
    },
    {
      q: "포토존 디자인 시안도 받을 수 있나요?",
      a: "가능합니다. 제작 전 디자인 시안을 제공하고 수정 사항을 반영합니다.",
    },
    {
      q: "촬영 조명까지 포함할 수 있나요?",
      a: "네, 촬영 품질을 높이는 조명을 포토존과 함께 구성해드립니다.",
    },
    {
      q: "실내/야외 모두 가능한가요?",
      a: "가능합니다. 야외 설치 시 바람과 비에 대비한 고정·방수 방식을 적용합니다.",
    },
    {
      q: "행사 종료 후 철거까지 진행하나요?",
      a: "네, 행사 종료 후 철거와 폐기까지 함께 진행합니다.",
    },
  ],
  relatedLinks: [
    { label: "포토월·백월", href: "/photozone-rental-production/photowall-backwall" },
    { label: "기업행사 무대", href: "/stage-rental-installation/corporate-event-stage" },
    { label: "기업행사 솔루션", href: "/event-solutions/corporate-event" },
  ],
};
