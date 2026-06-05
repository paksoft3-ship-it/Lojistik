import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { avrupa } from "@/data/districts";
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
  title: "Avrupa Yakası Minivan Nakliye | İstanbul",
  description:
    "İstanbul Avrupa yakasında minivan nakliye hizmeti. Beşiktaş, Şişli, Bakırköy, Beylikdüzü ve tüm ilçelere hızlı ve ekonomik taşımacılık.",
  alternates: { canonical: `${siteConfig.domain}/bolgeler/avrupa-yakasi-minivan-nakliye` },
};

export default function AvrupaYakasiPage() {
  const faqs = getFAQsByIds(["bolgeler", "fiyat", "sameday"]);
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Bölgeler", href: "/bolgeler" },
          { name: "Avrupa Yakası", href: "/bolgeler/avrupa-yakasi-minivan-nakliye" },
        ]}
      />
      <InnerHero
        title="Avrupa Yakası Minivan Nakliye"
        description="İstanbul Avrupa yakasındaki tüm ilçelere 7/24 hızlı, ekonomik minivan nakliye hizmeti. Köprü yasaklarına takılmadan, dar sokaklara girerek."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Bölgeler", href: "/bolgeler" },
          { label: "Avrupa Yakası" },
        ]}
        primaryCTA={{ label: "Teklif Al", href: "/teklif-al" }}
        badge="Avrupa Yakası"
      />

      <section className="py-14">
        <Container>
          <h2 className="text-[22px] font-semibold text-[#111827] mb-6">Hizmet Verdiğimiz İlçeler</h2>
          <div className="flex flex-wrap gap-3">
            {avrupa.map((d) => (
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
