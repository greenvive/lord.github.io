import type { ServicePageContent } from "@/lib/types";

export const ledScreen: ServicePageContent = {
  slug: "led-screen",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "시스템", href: "/system-equipment-rental" },
    { name: "LED 전광판", href: "/system-equipment-rental/led-screen" },
  ],
  metaTitle: "LED 전광판 렌탈·설치 | 기업행사·공연·축제 LED 스크린 | LORD",
  metaDescription:
    "기업행사, 공연, 축제, 기념식에 필요한 LED 전광판과 LED 스크린을 렌탈·설치합니다. 화면 크기, 해상도, 송출 장비, 전기 용량을 현장 조건에 맞춰 구성합니다.",
  h1: "무대 메시지를 선명하게 전달하는 LED 전광판 렌탈",
  aiSummary:
    "LED 전광판 렌탈은 행사장 크기, 관객 거리, 화면 콘텐츠, 실내외 여부, 전기 용량에 따라 크기와 해상도를 정해야 합니다. LORD는 기업행사, 공연, 축제, 기념식에 필요한 LED 스크린 설치와 송출 구성을 지원합니다.",
  heroImageAlt: "기업행사 무대에 설치된 대형 LED 전광판과 발표 자료 송출 화면",
  summaryTable: [
    { label: "적용 행사", value: "기업행사, 공연, 축제, 기념식" },
    { label: "기본 구성", value: "LED 패널, 송출 장비(미디어 서버), 구조 프레임" },
    { label: "선택 구성", value: "실외용 방수 LED, 멀티 화면 분할 송출" },
    { label: "설치 시간", value: "약 3~6시간 (대형 화면은 추가 소요)" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["기업행사 발표·시상식", "공연·축제 무대 배경 화면", "기념식 영상 송출", "컨퍼런스 발표 자료 송출"],
  scope: [
    "LED 패널 렌탈 및 화면 크기·해상도 설계",
    "구조 프레임 설치 및 고정",
    "발표 자료·영상 송출 장비 구성",
    "실내/실외 사양 구분 적용",
    "행사 당일 송출 오퍼레이터 지원",
    "행사 종료 후 철거",
  ],
  configExamples: [
    { title: "발표용 LED", detail: "가로 3~4m, 단일 화면 송출 구성" },
    { title: "기업행사 무대 LED", detail: "가로 5~7m, 발표 자료 + 영상 송출 구성" },
    { title: "공연·축제 LED", detail: "가로 8m 이상, 실외 방수 사양 + 멀티 송출" },
  ],
  process: [
    "상담 — 화면 크기와 송출 콘텐츠 확인",
    "현장 확인 — 전기 용량, 설치 위치 점검",
    "구성 제안 — 해상도·구조 프레임 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 구조물 및 패널 설치",
    "리허설 — 송출 테스트",
    "운영 — 행사 당일 오퍼레이터 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "구조 프레임 하중 및 고정 점검",
    "전기 용량 및 배선 안전 점검",
    "실외 설치 시 방수·방풍 점검",
    "패널 간 발열 관리",
  ],
  costFactors: [
    { item: "화면 크기", factors: "가로·세로 규격, 해상도" },
    { item: "설치 환경", factors: "실내/실외, 방수 사양 여부" },
    { item: "송출 장비", factors: "미디어 서버, 멀티 화면 분할" },
    { item: "구조물", factors: "프레임 높이, 보강 필요 여부" },
  ],
  faq: [
    {
      q: "LED 전광판 크기는 어떻게 정하나요?",
      a: "행사장 폭, 관객과의 거리, 송출할 콘텐츠 종류를 고려해 화면 크기와 해상도를 결정합니다.",
    },
    {
      q: "실외 LED와 실내 LED는 무엇이 다른가요?",
      a: "실외 LED는 방수·방풍 사양과 더 높은 밝기(휘도)를 갖추고 있어 야외 환경에서도 선명하게 보입니다.",
    },
    {
      q: "발표 자료 송출도 가능한가요?",
      a: "네, PPT·영상 등 발표 자료를 LED로 송출할 수 있도록 미디어 서버와 연결 장비를 구성합니다.",
    },
    {
      q: "LED 설치에는 전기가 얼마나 필요한가요?",
      a: "화면 크기에 따라 다르며, 대형 LED의 경우 별도 전용 회선이나 발전차가 필요할 수 있습니다. 사전 현장 확인으로 정확히 안내드립니다.",
    },
    {
      q: "무대 백월 대신 LED를 사용할 수 있나요?",
      a: "가능합니다. LED 화면을 백월처럼 활용해 브랜드 영상, 로고, 발표 자료를 동시에 노출할 수 있습니다.",
    },
  ],
  relatedLinks: [
    { label: "기업행사 무대", href: "/stage-rental-installation/corporate-event-stage" },
    { label: "공연·축제 무대", href: "/stage-rental-installation/festival-performance-stage" },
    { label: "트러스/레이어", href: "/system-equipment-rental/truss-layer" },
    { label: "비용·견적 가이드", href: "/cost-estimate-guide" },
  ],
};
