export interface Breadcrumb {
  name: string;
  href: string;
}

export interface SummaryRow {
  label: string;
  value: string;
}

export interface ConfigExample {
  title: string;
  detail: string;
}

export interface CostFactor {
  item: string;
  factors: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface ServicePageContent {
  slug: string;
  breadcrumb: Breadcrumb[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  aiSummary: string;
  heroImageAlt: string;
  summaryTable: SummaryRow[];
  eventFit: string[];
  scope: string[];
  configExamples: ConfigExample[];
  process: string[];
  safetyChecklist: string[];
  costFactors: CostFactor[];
  faq: FaqItem[];
  relatedLinks: RelatedLink[];
}

export interface HubChildCard {
  label: string;
  href: string;
  description: string;
  ready: boolean;
}

export interface HubPageContent {
  slug: string;
  breadcrumb: Breadcrumb[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  aiSummary: string;
  children: HubChildCard[];
  scope: string[];
  process: string[];
  faq: FaqItem[];
  relatedLinks: RelatedLink[];
}

export type PortfolioCategory =
  | "stage"
  | "photozone"
  | "sound"
  | "lighting"
  | "led"
  | "truss"
  | "corporate"
  | "public"
  | "festival"
  | "sports"
  | "broadcast";

export interface PortfolioSample {
  slug: string;
  title: string;
  region: string;
  eventType: string;
  items: string;
  scale: string;
  installTime: string;
  challenge: string;
}

export interface EquipmentSpec {
  item: string;
  spec: string;
}

export interface PortfolioDetail extends PortfolioSample {
  metaTitle: string;
  metaDescription: string;
  venue: string;
  attendees: string;
  operationScope: string;
  categories: PortfolioCategory[];
  overview: string;
  clientRequest: string;
  siteConditions: string;
  proposedConfig: string[];
  equipmentSpecs: EquipmentSpec[];
  processSteps: string[];
  similarRecommendation: string;
  faq: FaqItem[];
  relatedLinks: RelatedLink[];
}

export const portfolioFilters: { label: string; value: PortfolioCategory | "all" }[] = [
  { label: "전체", value: "all" },
  { label: "무대", value: "stage" },
  { label: "포토존", value: "photozone" },
  { label: "음향", value: "sound" },
  { label: "조명", value: "lighting" },
  { label: "LED", value: "led" },
  { label: "트러스", value: "truss" },
  { label: "기업행사", value: "corporate" },
  { label: "공공행사", value: "public" },
  { label: "축제·공연", value: "festival" },
  { label: "체육대회", value: "sports" },
  { label: "방송/BJ", value: "broadcast" },
];
