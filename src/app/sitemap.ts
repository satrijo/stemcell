import type { MetadataRoute } from "next";

const BASE_URL = "https://stemcell.my";

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/stem-cell-therapy-malaysia", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/stem-cell-therapy-cost-malaysia", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/best-stem-cell-clinics-malaysia", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/treatments-conditions", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/consultation", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/stem-cell-therapy-knee-malaysia", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/stem-cell-hair-treatment-malaysia", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/stem-cell-facial-treatment-malaysia", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/stem-cell-anti-aging-therapy-malaysia", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/stem-cell-therapy-neurological-disorders-malaysia", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/stem-cell-therapy-autoimmune-disease", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/what-are-stem-cells", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/what-is-stem-cell-therapy", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/stem-cell-education", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/types-of-stem-cells", priority: 0.65, changeFrequency: "yearly" as const },
  { path: "/mesenchymal-stem-cell-therapy", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/stem-cell-therapy-benefits", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/stem-cell-therapy-side-effects", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/stem-cell-transplant", priority: 0.65, changeFrequency: "yearly" as const },
  { path: "/hematopoietic-stem-cell-transplant", priority: 0.65, changeFrequency: "yearly" as const },
  { path: "/bone-marrow-stem-cell-transplant", priority: 0.65, changeFrequency: "yearly" as const },
  { path: "/autologous-stem-cell-transplant", priority: 0.65, changeFrequency: "yearly" as const },
  { path: "/allogeneic-stem-cell-transplant", priority: 0.65, changeFrequency: "yearly" as const },
  { path: "/stem-cell-banking-malaysia", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/umbilical-cord-stem-cell-storage", priority: 0.65, changeFrequency: "yearly" as const },
  { path: "/public-vs-private-stem-cell-banking", priority: 0.65, changeFrequency: "yearly" as const },
  { path: "/stem-cell-research-malaysia", priority: 0.65, changeFrequency: "monthly" as const },
  { path: "/is-stem-cell-therapy-legal-malaysia", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/verify-stem-cell-clinic-malaysia", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
