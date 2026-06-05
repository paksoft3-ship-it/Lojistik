import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { avrupa } from "@/data/districts";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { WhyMinivan } from "@/components/sections/WhyMinivan";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Avrupa Yakası Minivan Nakliye | İstanbul – UluLojistik",
  description:
    "İstanbul Avrupa yakasında hızlı ve güvenilir minivan nakliye hizmeti. Beşiktaş, Şişli, Bakırköy, Beylikdüzü ve tüm Avrupa yakası ilçelerine 7/24 ekonomik taşımacılık.",
  alternates: { canonical: `${siteConfig.domain}/bolgeler/avrupa-yakasi-minivan-nakliye` },
};

const trustBadges = [
  { icon: "shield_with_heart", text: "Sigortalı Taşıma" },
  { icon: "schedule", text: "Aynı Gün Teslim" },
  { icon: "star", text: "5.0 Müşteri Puanı" },
];

export default function AvrupaYakasiPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Bölgeler", href: "/bolgeler" },
          { name: "Avrupa Yakası", href: "/bolgeler/avrupa-yakasi-minivan-nakliye" },
        ]}
      />

      {/* Hero section with inline QuoteForm */}
      <section className="py-12 md:py-16 bg-white border-b border-[#E5E7EB]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: hero content */}
            <div className="lg:col-span-7 space-y-5">
              <Breadcrumb
                items={[
                  { label: "Ana Sayfa", href: "/" },
                  { label: "Bölgeler", href: "/bolgeler" },
                  { label: "Avrupa Yakası" },
                ]}
              />

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF0EB] text-[#E63900] text-xs font-medium rounded-full border border-[#FECDB9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63900]" aria-hidden="true" />
                Avrupa Yakası
              </span>

              <h1 className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-tight text-[#111827]">
                Avrupa Yakası&apos;nda Hızlı ve Güvenilir Minivan Nakliye
              </h1>

              <p className="text-[17px] text-[#6B7280] leading-relaxed max-w-xl">
                İstanbul Avrupa yakasındaki tüm ilçelere 7/24 hızlı, ekonomik minivan nakliye hizmeti. Köprü yasaklarına takılmadan, dar sokaklara girerek eşyalarınızı güvenle taşıyoruz.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 pt-1">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.text}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] border border-[#E5E7EB] rounded-full text-sm font-medium text-[#111827]"
                  >
                    <span className="material-symbols-outlined text-[#E63900] text-[18px]" aria-hidden="true">
                      {badge.icon}
                    </span>
                    {badge.text}
                  </div>
                ))}
              </div>

              {/* Quick action buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium px-6 py-3 rounded-[8px] transition-colors active:scale-95 min-h-[44px]"
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">call</span>
                  Hemen Ara
                </Link>
                <Link
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-6 py-3 rounded-[8px] transition-colors active:scale-95 min-h-[44px]"
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">chat</span>
                  WhatsApp
                </Link>
              </div>
            </div>

            {/* Right: QuoteForm card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-sm">
                <h2 className="text-[18px] font-semibold text-[#111827] mb-5">
                  Hızlı Teklif Alın
                </h2>
                <QuoteForm compact />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Districts grid */}
      <section className="py-14">
        <Container>
          <div className="mb-8">
            <h2 className="text-[22px] md:text-[28px] font-semibold text-[#111827] mb-2">
              Hizmet Verdiğimiz Avrupa Yakası İlçeleri
            </h2>
            <p className="text-[#6B7280]">
              Aşağıdaki tüm ilçelere 7/24 minivan nakliye hizmeti veriyoruz.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {avrupa.map((d) => (
              <Link
                key={d.slug}
                href={`/bolgeler/${d.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F8F9FA] border border-[#E5E7EB] rounded-full text-sm text-[#6B7280] hover:border-[#E63900] hover:text-[#E63900] hover:bg-[#FFF0EB] transition-colors"
              >
                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">location_on</span>
                {d.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why minivan section */}
      <WhyMinivan />

      {/* Bottom CTA */}
      <BottomCTA
        title="Avrupa Yakası'nda Hızlı Minivan Nakliye"
        description="Beşiktaş'tan Beylikdüzü'ne, Şişli'den Silivri'ye — tüm Avrupa yakasına ekonomik ve hızlı taşımacılık."
      />
    </>
  );
}
