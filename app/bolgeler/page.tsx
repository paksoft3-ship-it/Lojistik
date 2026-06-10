import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { avrupa, anadolu } from "@/data/districts";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { QuickQuoteForm } from "@/components/sections/QuickQuoteForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { getFAQsByIds } from "@/data/faq";

export const metadata: Metadata = {
  title: "İstanbul İçi Panelvan Nakliye Bölgeleri",
  description:
    "İstanbul'un tüm ilçelerine panelvan nakliye hizmeti. Avrupa ve Anadolu yakasındaki tüm semtlere hızlı ve ekonomik taşımacılık.",
  alternates: { canonical: `${siteConfig.domain}/bolgeler` },
  openGraph: {
    title: "İstanbul Panelvan Nakliye Bölgeleri | Ülkü Lojistik",
    url: `${siteConfig.domain}/bolgeler`,
  },
};

export default function BolgerPage() {
  const faqs = getFAQsByIds(["bolgeler", "sehirlerarasi", "fiyat"]);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Bölgeler", href: "/bolgeler" },
        ]}
      />

      <InnerHero
        title="İstanbul'un Her İlçesine Panelvan Nakliye"
        description="Avrupa ve Anadolu yakasındaki tüm ilçelere hızlı, güvenilir ve ekonomik panelvan taşımacılığı hizmeti sunuyoruz. Sadece İstanbul içi."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Bölgeler" },
        ]}
        primaryCTA={{ label: "Teklif Al", href: "/teklif-al" }}
        badge="Sadece İstanbul İçi"
        imageUrl="/updatedimage/2.jpeg"
        imageAlt="İstanbul'un Her İlçesine Panelvan Nakliye"
      />

      {/* Region cards */}
      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="material-symbols-outlined text-[#E63900] text-[28px]" aria-hidden="true">location_on</span>
                <h2 className="text-[22px] font-semibold text-[#111827]">Avrupa Yakası</h2>
              </div>
              <p className="text-[#6B7280] mb-6">
                Boğaz köprüsünün batı yakasındaki tüm ilçelere hizmet veriyoruz.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {avrupa.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/bolgeler/${d.slug}`}
                    className="px-3 py-1 bg-[#F8F9FA] border border-[#E5E7EB] rounded text-xs text-[#6B7280] hover:border-[#E63900] hover:text-[#E63900] transition-colors"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/bolgeler/avrupa-yakasi-panelvan-nakliye"
                className="inline-flex items-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium px-5 py-2.5 rounded-[8px] text-sm transition-colors"
              >
                Avrupa Yakası Detay
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="material-symbols-outlined text-[#E63900] text-[28px]" aria-hidden="true">location_on</span>
                <h2 className="text-[22px] font-semibold text-[#111827]">Anadolu Yakası</h2>
              </div>
              <p className="text-[#6B7280] mb-6">
                Boğazın Asya yakasındaki tüm ilçelere hızlı panelvan hizmeti.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {anadolu.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/bolgeler/${d.slug}`}
                    className="px-3 py-1 bg-[#F8F9FA] border border-[#E5E7EB] rounded text-xs text-[#6B7280] hover:border-[#E63900] hover:text-[#E63900] transition-colors"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/bolgeler/anadolu-yakasi-panelvan-nakliye"
                className="inline-flex items-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium px-5 py-2.5 rounded-[8px] text-sm transition-colors"
              >
                Anadolu Yakası Detay
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <QuickQuoteForm />
      <FAQAccordion faqs={faqs} title="Bölgeler Hakkında Sıkça Sorulan Sorular" />
      <BottomCTA />
    </>
  );
}
