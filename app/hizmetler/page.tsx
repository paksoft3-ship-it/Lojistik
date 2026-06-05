import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { WhyMinivan } from "@/components/sections/WhyMinivan";
import { QuickQuoteForm } from "@/components/sections/QuickQuoteForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { UrgentCTA } from "@/components/sections/UrgentCTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { getFAQsByIds } from "@/data/faq";
import { avrupa, anadolu } from "@/data/districts";

export const metadata: Metadata = {
  title: "İstanbul İçi Minivan Nakliye Hizmetleri",
  description:
    "İstanbul içi tüm minivan nakliye hizmetleri: yük taksi, parça eşya, beyaz eşya, öğrenci eşyası, ofis taşıma ve acil nakliye. Hemen teklif alın.",
  alternates: {
    canonical: `${siteConfig.domain}/hizmetler`,
  },
  openGraph: {
    title: "İstanbul İçi Minivan Nakliye Hizmetleri | UluLojistik",
    description:
      "İstanbul içi tüm minivan nakliye hizmetleri. 7/24 hizmet, aynı gün taşıma.",
    url: `${siteConfig.domain}/hizmetler`,
  },
};

const faqIds = ["fiyat", "kapasite", "bolgeler", "hamali", "sameday", "odeme"];

const guidanceItems = [
  { icon: "inventory_2", title: "Sadece Koli/Paket", description: "Küçük Yük Taşıma hizmetimiz en ekonomik seçenektir." },
  { icon: "weekend", title: "1-2 Parça Mobilya", description: "Parça Eşya hizmetimizle güvenle taşıyoruz." },
  { icon: "kitchen", title: "Beyaz Eşya", description: "Özel korumalı Beyaz Eşya Taşıma tam size göre." },
  { icon: "timer", title: "Zamanım Yok", description: "Acil Minivan Nakliye ile 1 saatte kapınızdayız." },
];

export default function HizmetlerPage() {
  const faqs = getFAQsByIds(faqIds);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Hizmetler", href: "/hizmetler" },
        ]}
      />

      <InnerHero
        title="İstanbul İçi Minivan Nakliye Hizmetlerimiz"
        description="Küçük hacimli yükleriniz, parça eşyalarınız, beyaz eşya ve öğrenci evi taşımacılığı için İstanbul'un her noktasına 7/24 hızlı, güvenilir ve ekonomik minivan araçlarımızla hizmetinizdeyiz."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetler" },
        ]}
        primaryCTA={{ label: "Hemen Fiyat Al", href: "/teklif-al" }}
        secondaryCTA={{ label: "Araçlarımızı İncele", href: "/araclarimiz" }}
        badge="İstanbul İçi Minivan Taşıma"
      />

      {/* Services Grid */}
      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.shortTitle}
                description={service.shortDescription}
                icon={service.icon}
                href={service.href}
                features={service.features}
                highlighted={service.slug === "acil-minivan-nakliye"}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Which service is right for you */}
      <section className="py-14 bg-[#F8F9FA] border-y border-[#E5E7EB]">
        <Container>
          <h2 className="text-center text-[24px] md:text-[28px] font-semibold text-[#111827] mb-10">
            Hangi Hizmet Size Uygun?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guidanceItems.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                align="center"
              />
            ))}
          </div>
        </Container>
      </section>

      <WhyMinivan />

      {/* İstanbul Regions */}
      <section className="py-14 bg-[#F8F9FA] border-y border-[#E5E7EB]">
        <Container>
          <h2 className="text-center text-[24px] md:text-[28px] font-semibold text-[#111827] mb-4">
            İstanbul İçi Hizmet Bölgelerimiz
          </h2>
          <p className="text-center text-[#6B7280] mb-10 max-w-xl mx-auto">
            İstanbul&apos;un her iki yakasında, tüm ilçelere dakikalar içinde ulaşıyor, güvenle taşıyoruz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-[14px] border border-[#E5E7EB]">
              <h3 className="text-[18px] font-semibold text-[#111827] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E63900]" aria-hidden="true">location_on</span>
                Avrupa Yakası
              </h3>
              <div className="flex flex-wrap gap-2">
                {avrupa.map((d) => (
                  <span key={d.slug} className="px-3 py-1 bg-[#F8F9FA] border border-[#E5E7EB] rounded text-xs text-[#6B7280]">
                    {d.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-7 rounded-[14px] border border-[#E5E7EB]">
              <h3 className="text-[18px] font-semibold text-[#111827] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E63900]" aria-hidden="true">location_on</span>
                Anadolu Yakası
              </h3>
              <div className="flex flex-wrap gap-2">
                {anadolu.map((d) => (
                  <span key={d.slug} className="px-3 py-1 bg-[#F8F9FA] border border-[#E5E7EB] rounded text-xs text-[#6B7280]">
                    {d.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <QuickQuoteForm />

      <UrgentCTA />

      <FAQAccordion faqs={faqs} title="Hizmetler Hakkında Sıkça Sorulan Sorular" showLink />

      <BottomCTA
        title="Hemen Taşınmaya Hazır Mısınız?"
        description="Bizi arayın veya WhatsApp'tan mesaj atın, İstanbul içi en uygun fiyat teklifimizi hemen iletelim."
      />
    </>
  );
}
