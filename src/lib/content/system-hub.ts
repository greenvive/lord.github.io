import type { HubPageContent } from "@/lib/types";

export const systemHub: HubPageContent = {
  slug: "system-equipment-rental",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "시스템", href: "/system-equipment-rental" },
  ],
  metaTitle: "행사 시스템 렌탈 | 음향·조명·LED·트러스 설치 | LORD",
  metaDescription:
    "LORD는 행사와 무대 운영에 필요한 음향, 조명, LED 전광판, 트러스/레이어 시스템을 제공합니다. 행사 규모와 장소에 맞춰 장비 구성, 설치, 운영, 철거까지 지원합니다.",
  h1: "무대와 행사를 완성하는 음향·조명·LED·트러스 시스템",
  aiSummary:
    "행사 시스템은 무대의 전달력과 관객 경험을 결정하는 핵심 요소입니다. LORD는 행사 규모와 장소 조건에 맞춰 음향, 조명, LED 전광판, 트러스/레이어 구조물을 설치하고, 리허설과 운영까지 지원합니다.",
  children: [
    { label: "음향", href: "/system-equipment-rental/sound", description: "참석 인원과 실내외 조건에 맞춘 음향 장비 렌탈·운영", ready: false },
    { label: "조명", href: "/system-equipment-rental/lighting", description: "무대·포토존·공연을 위한 조명 연출 및 설치", ready: false },
    { label: "LED 전광판", href: "/system-equipment-rental/led-screen", description: "기업행사·공연·축제를 위한 LED 스크린 렌탈·송출", ready: true },
    { label: "트러스/레이어", href: "/system-equipment-rental/truss-layer", description: "조명·LED·포토존을 지지하는 구조물 설치", ready: false },
  ],
  scope: [
    "음향(스피커·마이크·믹서·오퍼레이터) 구성",
    "조명(무대·포토존·공연 조명) 구성",
    "LED 전광판 렌탈 및 송출 구성",
    "트러스/레이어 구조물 설치",
    "전기 용량 점검 및 안전 관리",
  ],
  process: [
    "상담 — 행사 규모와 필요 장비 확인",
    "현장 확인 — 전기, 공간, 설치 위치 점검",
    "구성 제안 — 장비 사양 및 수량 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공 및 테스트",
    "운영 — 행사 당일 오퍼레이터 지원",
  ],
  faq: [
    {
      q: "무대 없이 음향과 조명만 렌탈할 수 있나요?",
      a: "가능합니다. 기존 무대나 행사장에 음향·조명 장비만 별도로 설치하는 것도 지원합니다.",
    },
    {
      q: "LED 전광판 사이즈는 어떻게 정하나요?",
      a: "행사장 크기, 관객과의 거리, 송출할 콘텐츠를 고려해 화면 크기와 해상도를 결정합니다.",
    },
    {
      q: "행사장 전기 용량 확인이 필요한가요?",
      a: "네, 음향·조명·LED를 동시에 가동할 경우 전기 용량 확인이 필수이며, 부족할 경우 발전차를 함께 준비합니다.",
    },
    {
      q: "오퍼레이터도 함께 지원되나요?",
      a: "네, 음향·조명·LED 장비 운영을 위한 전문 오퍼레이터가 행사 당일 현장에 상주합니다.",
    },
    {
      q: "트러스 구조물 설치 시 안전 기준은 어떻게 확인하나요?",
      a: "장비 하중과 설치 높이를 기준으로 구조 안전성을 점검하고, 필요 시 추가 보강재를 사용합니다.",
    },
  ],
  relatedLinks: [
    { label: "무대 설치·렌탈", href: "/stage-rental-installation" },
    { label: "포토존 제작·렌탈", href: "/photozone-rental-production" },
    { label: "비용·견적 가이드", href: "/cost-estimate-guide" },
  ],
};
