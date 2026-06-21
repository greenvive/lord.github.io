import type { ServicePageContent } from "@/lib/types";

export const lighting: ServicePageContent = {
  slug: "lighting",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "시스템", href: "/system-equipment-rental" },
    { name: "조명", href: "/system-equipment-rental/lighting" },
  ],
  metaTitle: "행사 조명 렌탈·설치 | 무대·공연·포토존 조명 | LORD",
  metaDescription:
    "무대, 공연, 기업행사, 포토존에 필요한 조명 렌탈과 설치를 제공합니다. 행사 분위기, 촬영 품질, 출연자 동선에 맞춰 조명 장비를 구성합니다.",
  h1: "행사의 분위기와 촬영 품질을 높이는 조명 설치",
  aiSummary:
    "행사 조명은 무대 집중도, 공연 연출, 사진 촬영 품질, 브랜드 분위기에 영향을 줍니다. LORD는 무대 조명, 공연 조명, 포토존 조명, 기업행사 조명을 행사 목적과 공간 조건에 맞춰 설치합니다.",
  heroImageAlt: "무대와 포토존에 설치된 조명 연출 장면",
  summaryTable: [
    { label: "적용 행사", value: "무대, 공연, 기업행사, 포토존" },
    { label: "기본 구성", value: "무대 조명, 포인트 조명" },
    { label: "선택 구성", value: "무빙라이트, 색온도 보정 조명" },
    { label: "설치 시간", value: "약 2~4시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["무대 행사", "공연", "기업행사", "포토존 촬영"],
  scope: [
    "무대·포토존 조명 설계",
    "공연용 무빙라이트 구성",
    "촬영 품질을 위한 색온도 보정",
    "전기 용량 확인 및 안전 점검",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "기본 무대 조명", detail: "무대 조명 4~6조" },
    { title: "기업행사 포토존 조명", detail: "촬영용 조명 2~3조" },
    { title: "공연 조명", detail: "무빙라이트 + 무대 조명 통합 구성" },
  ],
  process: [
    "상담 — 행사 목적과 연출 방향 확인",
    "현장 확인 — 전기 용량, 설치 위치 점검",
    "구성 제안 — 조명 수량·종류 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공",
    "운영 — 행사 당일 조명 운영 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "조명 거치대 고정 상태 점검",
    "전기 배선 안전 점검",
    "고열 발생 조명의 환기 확보",
  ],
  costFactors: [
    { item: "조명", factors: "수량, 종류(고정/무빙)" },
    { item: "연출", factors: "연출 난이도, 시나리오 수" },
    { item: "전력", factors: "전기 용량, 발전기 필요 여부" },
  ],
  faq: [
    {
      q: "포토존 조명만 따로 설치할 수 있나요?",
      a: "네, 무대 조명 없이 포토존 조명만 별도로 설치하는 것도 가능합니다.",
    },
    {
      q: "실내 행사 조명은 어느 정도가 적당한가요?",
      a: "행사장 기존 조명과 무대 집중도를 고려해 4~6조 정도의 추가 조명을 권장합니다.",
    },
    {
      q: "공연용 무빙라이트도 가능한가요?",
      a: "가능합니다. 공연 연출에 맞춰 무빙라이트와 고정 조명을 조합해 구성합니다.",
    },
    {
      q: "조명 설치에는 전기가 얼마나 필요한가요?",
      a: "조명 수량과 종류에 따라 다르며, 사전 현장 확인을 통해 정확한 전기 용량을 안내드립니다.",
    },
    {
      q: "무대와 조명을 함께 견적 받을 수 있나요?",
      a: "네, 무대·음향·조명을 통합으로 견적받으시면 출장과 인력 운영이 효율적입니다.",
    },
  ],
  relatedLinks: [
    { label: "포토월·백월", href: "/photozone-rental-production/photowall-backwall" },
    { label: "음향", href: "/system-equipment-rental/sound" },
    { label: "LED 전광판", href: "/system-equipment-rental/led-screen" },
  ],
};
