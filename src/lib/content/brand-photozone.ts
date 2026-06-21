import type { ServicePageContent } from "@/lib/types";

export const brandPhotozone: ServicePageContent = {
  slug: "brand-photozone",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "포토존 제작·렌탈", href: "/photozone-rental-production" },
    { name: "브랜드 포토존", href: "/photozone-rental-production/brand-photozone" },
  ],
  metaTitle: "브랜드 포토존 제작 | 신제품 출시·홍보 행사·체험존 | LORD",
  metaDescription:
    "신제품 출시, 브랜드 캠페인, 홍보 행사, 체험존에 적합한 브랜드 포토존을 제작합니다. 로고 노출, 제품 배치, 촬영 동선, 조명을 고려해 브랜드 경험을 설계합니다.",
  h1: "브랜드 경험을 사진으로 남기는 브랜드 포토존 제작",
  aiSummary:
    "브랜드 포토존은 단순 배경물이 아니라 브랜드 메시지, 제품 노출, 방문자 촬영 경험을 설계하는 공간입니다. LORD는 신제품 출시, 브랜드 캠페인, 체험존, 홍보 행사에 맞춰 포토존과 오브제, 조명, 사인물을 제작·설치합니다.",
  heroImageAlt: "신제품 출시 행사에 설치된 브랜드 컬러 포토존과 오브제",
  summaryTable: [
    { label: "적용 행사", value: "신제품 출시, 브랜드 캠페인, 홍보 행사, 체험존" },
    { label: "기본 구성", value: "포토존 오브제, 조명" },
    { label: "선택 구성", value: "제품 전시대, 사인물" },
    { label: "설치 시간", value: "약 4~6시간 (제작 포함)" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["신제품 출시 행사", "브랜드 캠페인", "홍보 행사", "체험존"],
  scope: [
    "브랜드 컬러·로고 반영 오브제 디자인 및 제작",
    "제품 전시와 포토존 동선 통합 설계",
    "촬영 조명 및 사인물 구성",
    "SNS 확산을 고려한 구도 설계",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "로고 중심형", detail: "브랜드 로고를 강조한 단순 디자인" },
    { title: "제품 중심형", detail: "제품 전시대와 포토존을 통합한 구성" },
    { title: "체험형/오브제형", detail: "방문자가 직접 체험하는 대형 오브제 구성" },
  ],
  process: [
    "상담 — 브랜드 가이드와 행사 목적 확인",
    "디자인 시안 제공",
    "오브제 제작",
    "설치 — 현장 시공",
    "운영 — 행사 기간 중 유지보수",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "대형 오브제 고정 및 하중 점검",
    "체험형 구조물 안전 점검",
    "방문객 동선과 촬영 동선 분리",
  ],
  costFactors: [
    { item: "오브제", factors: "크기, 제작 난이도, 소재" },
    { item: "조명", factors: "조명 수량, 색온도 보정 여부" },
    { item: "운영", factors: "운영 기간, 유지보수 필요 여부" },
  ],
  faq: [
    {
      q: "브랜드 컬러를 반영한 포토존 제작이 가능한가요?",
      a: "네, 브랜드 가이드라인에 맞춰 컬러와 디자인을 반영해 제작합니다.",
    },
    {
      q: "제품을 함께 전시할 수 있나요?",
      a: "가능합니다. 포토존과 제품 전시대를 통합해 체험과 촬영을 동시에 유도할 수 있습니다.",
    },
    {
      q: "SNS 인증샷용 포토존도 제작하나요?",
      a: "네, 해시태그 유도 사인물과 촬영하기 좋은 구도로 설계합니다.",
    },
    {
      q: "오브제 제작도 가능한가요?",
      a: "가능합니다. 브랜드 컨셉에 맞는 대형 오브제를 맞춤 제작합니다.",
    },
    {
      q: "짧은 캠페인 기간에는 렌탈형이 유리한가요?",
      a: "네, 운영 기간이 짧다면 기존 구조물을 활용하는 렌탈형이 비용과 제작 기간 면에서 유리합니다.",
    },
  ],
  relatedLinks: [
    { label: "팝업스토어 포토존", href: "/photozone-rental-production/popup-store-photozone" },
    { label: "포토월·백월", href: "/photozone-rental-production/photowall-backwall" },
  ],
};
