import type { ServicePageContent } from "@/lib/types";

export const popupStorePhotozone: ServicePageContent = {
  slug: "popup-store-photozone",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "포토존 제작·렌탈", href: "/photozone-rental-production" },
    { name: "팝업스토어 포토존", href: "/photozone-rental-production/popup-store-photozone" },
  ],
  metaTitle: "팝업스토어 포토존 제작 | 브랜드 팝업·체험형 공간 | LORD",
  metaDescription:
    "브랜드 팝업스토어와 체험형 행사에 필요한 포토존, 오브제, 백월, 조명, 사인물을 제작·설치합니다. 방문자 촬영 동선과 SNS 확산을 고려해 공간을 구성합니다.",
  h1: "방문자가 촬영하고 공유하는 팝업스토어 포토존 제작",
  aiSummary:
    "팝업스토어 포토존은 브랜드 메시지를 체험 공간 안에서 자연스럽게 노출하고, 방문자가 사진과 영상을 촬영해 공유하도록 설계해야 합니다. LORD는 팝업스토어 콘셉트에 맞춰 포토존, 오브제, 백월, 조명, 사인물을 제작·설치합니다.",
  heroImageAlt: "팝업스토어 내부에 설치된 체험형 포토존과 브랜드 오브제",
  summaryTable: [
    { label: "적용 행사", value: "팝업스토어, 체험형 행사" },
    { label: "기본 구성", value: "포토존 오브제, 사인물" },
    { label: "선택 구성", value: "조명, 제품 진열대" },
    { label: "설치 시간", value: "약 5~6시간 (제작 포함)" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["팝업스토어", "체험형 행사", "단기 브랜드 공간"],
  scope: [
    "공간 면적에 맞춘 포토존 디자인",
    "방문자 동선 설계",
    "SNS 공유 유도 사인물 배치",
    "운영 기간 중 유지보수",
    "철거 및 폐기",
  ],
  configExamples: [
    { title: "소형 매장 포토존", detail: "가로 3m 이내, 벽면 활용형" },
    { title: "중형 팝업스토어 포토존", detail: "가로 4~5m, 오브제 + 조명 구성" },
    { title: "체험형 대형 포토존", detail: "가로 5m 이상, 체험 오브제 중심 구성" },
  ],
  process: [
    "상담 — 팝업스토어 콘셉트와 운영 기간 확인",
    "디자인 시안 제공",
    "제작",
    "설치 — 약 5~6시간",
    "운영 기간 중 점검",
    "철거 및 폐기",
  ],
  safetyChecklist: [
    "협소 공간 내 오브제 고정 점검",
    "방문객 동선과 매장 통로 분리",
    "전기 배선 안전 점검",
  ],
  costFactors: [
    { item: "포토존", factors: "면적, 오브제 복잡도" },
    { item: "운영", factors: "운영 기간, 유지보수 빈도" },
    { item: "철거", factors: "폐기 필요 여부" },
  ],
  faq: [
    {
      q: "팝업스토어 기간이 짧아도 제작 가능한가요?",
      a: "네, 짧은 운영 기간에 맞춰 빠른 제작과 설치가 가능하며, 렌탈형 오브제를 활용하면 더 효율적입니다.",
    },
    {
      q: "브랜드 오브제도 제작할 수 있나요?",
      a: "가능합니다. 브랜드 컨셉에 맞는 오브제를 맞춤 제작합니다.",
    },
    {
      q: "좁은 공간에도 포토존 설치가 가능한가요?",
      a: "네, 협소한 매장 공간에서도 벽면을 활용한 포토존 설계가 가능합니다.",
    },
    {
      q: "포토존과 제품 진열대를 함께 만들 수 있나요?",
      a: "가능합니다. 제품 진열과 촬영 공간을 한 동선 안에 통합해 구성합니다.",
    },
    {
      q: "철거와 폐기까지 지원하나요?",
      a: "네, 팝업스토어 종료 후 철거와 폐기까지 함께 진행합니다.",
    },
  ],
  relatedLinks: [
    { label: "브랜드 포토존", href: "/photozone-rental-production/brand-photozone" },
    { label: "조명", href: "/system-equipment-rental/lighting" },
  ],
};
