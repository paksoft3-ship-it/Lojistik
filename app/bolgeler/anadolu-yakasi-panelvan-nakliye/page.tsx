import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { anadolu } from "@/data/districts";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { QuickQuoteForm } from "@/components/sections/QuickQuoteForm";
import { WhyMinivan } from "@/components/sections/WhyMinivan";
import { UrgentCTA } from "@/components/sections/UrgentCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { getFAQsByIds } from "@/data/faq";

export const metadata: Metadata = {
  title: "Anadolu Yakası Panelvan Nakliye | İstanbul",
  description:
    "İstanbul Anadolu yakasında panelvan nakliye hizmeti. Kadıköy, Üsküdar, Maltepe, Pendik ve tüm ilçelere hızlı ve ekonomik taşımacılık.",
  alternates: { canonical: `${siteConfig.domain}/bolgeler/anadolu-yakasi-panelvan-nakliye` },
};

export default function AnadoluYakasiPage() {
  const faqs = getFAQsByIds(["bolgeler", "fiyat", "sameday"]);
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Bölgeler", href: "/bolgeler" },
          { name: "Anadolu Yakası", href: "/bolgeler/anadolu-yakasi-panelvan-nakliye" },
        ]}
      />
      <InnerHero
        title="Anadolu Yakası Panelvan Nakliye"
        description="İstanbul Anadolu yakasındaki tüm ilçelere 7/24 hızlı, ekonomik panelvan nakliye hizmeti. Kadıköy'den Pendik'e, Üsküdar'dan Maltepe'ye tüm semtlere."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Bölgeler", href: "/bolgeler" },
          { label: "Anadolu Yakası" },
        ]}
        primaryCTA={{ label: "Teklif Al", href: "/teklif-al" }}
        badge="Anadolu Yakası"
        imageUrl="/Updatedimage/1.jpeg"
        imageAlt="Anadolu Yakası Panelvan Nakliye"
      />

      <section className="py-14">
        <Container>
          <h2 className="text-[22px] font-semibold text-[#111827] mb-6">Hizmet Verdiğimiz İlçeler</h2>
          <div className="flex flex-wrap gap-3">
            {anadolu.map((d) => (
              <Link
                key={d.slug}
                href={`/bolgeler/${d.slug}`}
                className="px-4 py-2 bg-[#F8F9FA] border border-[#E5E7EB] rounded-full text-sm text-[#6B7280] hover:border-[#E63900] hover:text-[#E63900] transition-colors"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <QuickQuoteForm />
      <WhyMinivan />
      <UrgentCTA />
      <FAQAccordion faqs={faqs} />
      <BottomCTA />
    </>
  );
}
