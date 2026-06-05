import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { allDistricts } from "@/data/districts";
import { blogPosts } from "@/data/blog";

const today = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: today, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/hizmetler`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/bolgeler`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/bolgeler/avrupa-yakasi-minivan-nakliye`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/bolgeler/anadolu-yakasi-minivan-nakliye`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/araclarimiz`, lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/teklif-al`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/hakkimizda`, lastModified: today, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/sss`, lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/iletisim`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}${s.href}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const districtPages: MetadataRoute.Sitemap = allDistricts.map((d) => ({
    url: `${base}/bolgeler/${d.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.modifiedAt ?? p.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...districtPages, ...blogPages];
}
