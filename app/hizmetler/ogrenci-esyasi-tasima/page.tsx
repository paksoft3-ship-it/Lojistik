import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { siteConfig } from "@/config/site";

const SLUG = "ogrenci-esyasi-tasima";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug(SLUG);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `${siteConfig.domain}${service.href}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.domain}${service.href}`,
      type: "website",
    },
  };
}

export default function ServicePage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
