import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Hero } from "@/components/sections/Hero";
import { QuickQuoteForm } from "@/components/sections/QuickQuoteForm";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyMinivan } from "@/components/sections/WhyMinivan";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TransportItemsGrid } from "@/components/sections/TransportItemsGrid";
import { IstanbulDistricts } from "@/components/sections/IstanbulDistricts";
import { RegionCards } from "@/components/sections/RegionCards";
import { UrgentCTA } from "@/components/sections/UrgentCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { FAQJsonLd } from "@/components/seo/FAQJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFAQsByIds, homepageFAQIds } from "@/data/faq";

export const metadata: Metadata = {
  title: `İstanbul Panelvan Nakliye | ${siteConfig.brandName}`,
  description:
    "İstanbul içi hızlı ve ekonomik panelvan nakliye. Parça eşya, beyaz eşya, öğrenci eşyası ve yük taksi hizmetleri. Aynı gün taşıma, 7/24 hizmet. Hemen teklif alın.",
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    title: `İstanbul Panelvan Nakliye | ${siteConfig.brandName}`,
    description:
      "İstanbul içi hızlı ve ekonomik panelvan nakliye hizmetleri. Aynı gün teslimat, 7/24 hizmet.",
    url: siteConfig.domain,
    type: "website",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.brandName,
  url: siteConfig.domain,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.domain}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  const faqs = getFAQsByIds(homepageFAQIds);

  return (
    <>
      <JsonLd data={websiteSchema} />
      <FAQJsonLd faqs={faqs} />

      <Hero />
      <QuickQuoteForm />
      <ServicesGrid />
      <WhyMinivan />
      <HowItWorks />
      <TransportItemsGrid />
      <IstanbulDistricts />
      <RegionCards />
      <UrgentCTA />
      <Testimonials />
      <FAQAccordion faqs={faqs} showLink />
      <BlogPreview />
      <BottomCTA />
    </>
  );
}
