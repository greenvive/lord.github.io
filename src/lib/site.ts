export const site = {
  name: "LORD",
  legalName: "LORD",
  url: "https://greenvive.github.io/lord",
  description:
    "LORD는 기업행사, 공공행사, 축제, 공연을 위한 무대 설치·렌탈, 포토존 제작, 음향·조명·LED·트러스 시스템을 통합 제공하는 행사 공간 설치 전문 업체입니다.",
  phone: "+82-1000-0000",
  phoneDisplay: "1000-0000",
  email: "contact@lord-stage.kr",
  kakaoUrl: "https://pf.kakao.com/_lordstage",
  areaServed: ["수도권", "서울", "경기", "인천", "전국"],
  sameAs: ["https://www.instagram.com/lord.stage", "https://blog.naver.com/lordstage"],
};

export const nav = [
  {
    label: "무대 설치·렌탈",
    href: "/stage-rental-installation",
    children: [
      { label: "실내 무대", href: "/stage-rental-installation/indoor-stage", ready: true },
      { label: "야외 무대", href: "/stage-rental-installation/outdoor-stage", ready: true },
      { label: "기업행사 무대", href: "/stage-rental-installation/corporate-event-stage", ready: true },
      { label: "공연·축제 무대", href: "/stage-rental-installation/festival-performance-stage", ready: true },
    ],
  },
  {
    label: "포토존 제작·렌탈",
    href: "/photozone-rental-production",
    children: [
      { label: "기업행사 포토존", href: "/photozone-rental-production/corporate-photozone", ready: true },
      { label: "브랜드 포토존", href: "/photozone-rental-production/brand-photozone", ready: true },
      { label: "포토월·백월", href: "/photozone-rental-production/photowall-backwall", ready: true },
      { label: "팝업스토어 포토존", href: "/photozone-rental-production/popup-store-photozone", ready: true },
    ],
  },
  {
    label: "시스템",
    href: "/system-equipment-rental",
    children: [
      { label: "음향", href: "/system-equipment-rental/sound", ready: true },
      { label: "조명", href: "/system-equipment-rental/lighting", ready: true },
      { label: "LED 전광판", href: "/system-equipment-rental/led-screen", ready: true },
      { label: "트러스/레이어", href: "/system-equipment-rental/truss-layer", ready: true },
    ],
  },
  {
    label: "행사별 솔루션",
    href: "/event-solutions",
    children: [
      { label: "준공식·기공식", href: "/event-solutions/groundbreaking-completion-ceremony", ready: true },
      { label: "기념식·추도식", href: "/event-solutions/ceremony-memorial-stage", ready: true },
      { label: "기업행사", href: "/event-solutions/corporate-event", ready: true },
      { label: "축제·공연", href: "/event-solutions/festival-performance", ready: true },
      { label: "체육대회 및 BJ 무대설치", href: "/event-solutions/sports-broadcast-stage", ready: true },
    ],
  },
  {
    label: "포트폴리오",
    href: "/portfolio",
    children: [],
  },
  {
    label: "비용·견적 가이드",
    href: "/cost-estimate-guide",
    children: [],
  },
  {
    label: "회사소개·상담",
    href: "/about-contact",
    children: [],
  },
];
