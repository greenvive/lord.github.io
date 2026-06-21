import type { ServicePageContent } from "@/lib/types";

export const photowallBackwall: ServicePageContent = {
  slug: "photowall-backwall",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "포토존 제작·렌탈", href: "/photozone-rental-production" },
    { name: "포토월·백월", href: "/photozone-rental-production/photowall-backwall" },
  ],
  metaTitle: "포토월·백월 제작 | 시상식·인터뷰·브랜드 행사 | LORD",
  metaDescription:
    "시상식, 인터뷰, 브랜드 행사, 기자간담회에 필요한 포토월과 백월을 제작·설치합니다. 로고 반복 패턴, 행사명, 조명, 레드카펫까지 현장에 맞춰 구성합니다.",
  h1: "사진과 영상에 선명하게 남는 포토월·백월 제작",
  aiSummary:
    "포토월·백월은 행사명, 브랜드 로고, 협찬사 로고가 사진과 영상에 잘 보이도록 설계하는 배경 구조물입니다. LORD는 시상식, 기자간담회, 인터뷰, 브랜드 행사에 맞춰 포토월·백월 디자인, 출력, 설치, 조명 구성을 제공합니다.",
  heroImageAlt: "시상식 현장에 설치된 로고 반복 패턴 포토월과 레드카펫",
  summaryTable: [
    { label: "적용 행사", value: "시상식, 기자간담회, 인터뷰, 브랜드 행사" },
    { label: "기본 구성", value: "포토월 또는 백월 출력물, 거치 구조물" },
    { label: "선택 구성", value: "조명, 레드카펫, 차단봉, 사인물" },
    { label: "설치 시간", value: "약 2~4시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["시상식", "기자간담회", "인터뷰 촬영", "브랜드 런칭 행사"],
  scope: [
    "포토월·백월 디자인 시안 제작",
    "로고 반복 패턴 또는 단일 디자인 출력",
    "거치 구조물 설치",
    "촬영 조명 설치",
    "레드카펫·차단봉 설치",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "인터뷰용 백월", detail: "가로 3~4m, 행사명 중심 단순 디자인" },
    { title: "시상식 포토월", detail: "가로 5~6m, 로고 반복 패턴 + 레드카펫" },
    { title: "브랜드 행사 포토월", detail: "가로 6m 이상, 조명 + 사인물 통합 구성" },
  ],
  process: [
    "상담 — 행사명, 로고, 협찬사 정보 확인",
    "디자인 시안 제공",
    "출력 — 소재·해상도 결정 후 출력",
    "설치 — 거치 구조물 및 조명 세팅",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 신속 철거",
  ],
  safetyChecklist: [
    "거치 구조물 고정 상태 점검",
    "조명 전기 배선 안전 점검",
    "촬영 동선과 관람 동선 분리",
  ],
  costFactors: [
    { item: "출력물", factors: "크기, 소재, 디자인 복잡도" },
    { item: "구조물", factors: "거치 방식, 목공 보강 여부" },
    { item: "조명", factors: "조명 수량, 연출 난이도" },
    { item: "부속", factors: "레드카펫, 차단봉, 사인물 추가 여부" },
  ],
  faq: [
    {
      q: "포토월과 백월은 어떤 차이가 있나요?",
      a: "포토월은 로고가 반복 패턴으로 들어가는 촬영용 배경이며, 백월은 행사명 중심의 단순한 배경 구조물입니다.",
    },
    {
      q: "로고 반복 패턴 제작이 가능한가요?",
      a: "네, 협찬사 로고를 포함한 반복 패턴 디자인을 제작 전 시안으로 확인하실 수 있습니다.",
    },
    {
      q: "레드카펫과 차단봉도 함께 설치할 수 있나요?",
      a: "가능합니다. 포토월과 함께 레드카펫, 차단봉, 안내 사인물을 통합 구성해드립니다.",
    },
    {
      q: "포토월 크기는 어떻게 정하나요?",
      a: "촬영 인원, 카메라 거리, 행사장 폭을 고려해 가로 3m부터 6m 이상까지 규모를 결정합니다.",
    },
    {
      q: "당일 설치 후 당일 철거가 가능한가요?",
      a: "네, 대부분의 포토월·백월은 당일 설치와 철거가 가능합니다.",
    },
  ],
  relatedLinks: [
    { label: "기업행사 포토존", href: "/photozone-rental-production/corporate-photozone" },
    { label: "브랜드 포토존", href: "/photozone-rental-production/brand-photozone" },
    { label: "조명", href: "/system-equipment-rental/lighting" },
    { label: "비용·견적 가이드", href: "/cost-estimate-guide" },
  ],
};
