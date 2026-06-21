import type { HubPageContent } from "@/lib/types";

export const photozoneHub: HubPageContent = {
  slug: "photozone-rental-production",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "포토존 제작·렌탈", href: "/photozone-rental-production" },
  ],
  metaTitle: "포토존 제작·렌탈 | 기업행사·브랜드·포토월·백월 | LORD",
  metaDescription:
    "기업행사, 브랜드 행사, 팝업스토어, 시상식, 축제에 필요한 포토존 제작·렌탈 서비스를 제공합니다. 포토월, 백월, 조명, 사인물, 레드카펫까지 행사 목적에 맞춰 구성합니다.",
  h1: "행사의 첫인상을 만드는 포토존 제작·렌탈",
  aiSummary:
    "포토존 제작·렌탈은 행사 목적, 브랜드 로고 노출, 촬영 동선, 조명, 설치 공간에 따라 구성이 달라집니다. LORD는 기업행사 포토존, 브랜드 포토존, 포토월·백월, 팝업스토어 포토존을 행사 콘셉트에 맞춰 제작·설치합니다.",
  children: [
    {
      label: "기업행사 포토존",
      href: "/photozone-rental-production/corporate-photozone",
      description: "시상식·창립기념식·컨퍼런스를 위한 브랜드 신뢰 중심 포토존",
      ready: false,
    },
    {
      label: "브랜드 포토존",
      href: "/photozone-rental-production/brand-photozone",
      description: "신제품 출시·홍보 행사·체험존을 위한 브랜드 경험 포토존",
      ready: false,
    },
    {
      label: "포토월·백월",
      href: "/photozone-rental-production/photowall-backwall",
      description: "시상식·인터뷰·기자간담회를 위한 로고 노출 배경 구조물",
      ready: true,
    },
    {
      label: "팝업스토어 포토존",
      href: "/photozone-rental-production/popup-store-photozone",
      description: "팝업스토어·체험형 행사를 위한 촬영·공유 중심 포토존",
      ready: false,
    },
  ],
  scope: [
    "포토존·포토월·백월 디자인 및 제작",
    "로고·오브제·사인물 제작",
    "조명, 레드카펫 등 부속 설치",
    "촬영 동선 설계",
    "행사 종료 후 철거 및 폐기",
  ],
  process: [
    "상담 — 행사 목적, 브랜드 가이드 확인",
    "디자인 시안 제공",
    "제작 — 출력물, 구조물 제작",
    "설치 — 현장 시공 및 조명 세팅",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 철거 및 폐기",
  ],
  faq: [
    {
      q: "포토존 제작과 렌탈의 차이는 무엇인가요?",
      a: "제작형은 행사 전용 디자인으로 새로 만드는 방식이고, 렌탈형은 기존 구조물·소품을 활용해 빠르고 비용 효율적으로 구성하는 방식입니다.",
    },
    {
      q: "브랜드 로고를 넣은 포토존 제작이 가능한가요?",
      a: "네, 행사명과 브랜드·협찬사 로고를 반영한 디자인 시안을 제작 전에 제공합니다.",
    },
    {
      q: "포토월과 백월은 무엇이 다른가요?",
      a: "포토월은 로고가 반복 패턴으로 들어간 촬영용 배경이고, 백월은 행사명 중심의 단순 배경 구조물입니다. 행사 목적에 따라 선택합니다.",
    },
    {
      q: "야외 포토존 설치도 가능한가요?",
      a: "가능합니다. 야외 설치 시 바람과 비에 대비한 고정·방수 방식을 적용합니다.",
    },
    {
      q: "포토존 조명도 함께 설치할 수 있나요?",
      a: "네, 촬영 품질을 높이기 위한 조명을 포토존과 함께 구성해 제공합니다.",
    },
  ],
  relatedLinks: [
    { label: "조명", href: "/system-equipment-rental/lighting" },
    { label: "기업행사 무대", href: "/stage-rental-installation/corporate-event-stage" },
    { label: "비용·견적 가이드", href: "/cost-estimate-guide" },
  ],
};
