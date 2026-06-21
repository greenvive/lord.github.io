import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { portfolioDetails } from "@/lib/content/portfolio";

const staticPaths = [
  "",
  "/stage-rental-installation",
  "/stage-rental-installation/indoor-stage",
  "/stage-rental-installation/outdoor-stage",
  "/stage-rental-installation/corporate-event-stage",
  "/stage-rental-installation/festival-performance-stage",
  "/photozone-rental-production",
  "/photozone-rental-production/corporate-photozone",
  "/photozone-rental-production/brand-photozone",
  "/photozone-rental-production/photowall-backwall",
  "/photozone-rental-production/popup-store-photozone",
  "/system-equipment-rental",
  "/system-equipment-rental/sound",
  "/system-equipment-rental/lighting",
  "/system-equipment-rental/led-screen",
  "/system-equipment-rental/truss-layer",
  "/event-solutions",
  "/event-solutions/groundbreaking-completion-ceremony",
  "/event-solutions/ceremony-memorial-stage",
  "/event-solutions/corporate-event",
  "/event-solutions/festival-performance",
  "/event-solutions/sports-broadcast-stage",
  "/portfolio",
  "/cost-estimate-guide",
  "/about-contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const portfolioEntries = portfolioDetails.map((item) => ({
    url: `${site.url}/portfolio/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...portfolioEntries];
}
