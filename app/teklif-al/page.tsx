import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Fiyat Teklifi Al | İstanbul Minivan Nakliye",
  description:
    "İstanbul içi minivan nakliye için hızlı fiyat teklifi alın. Kalkış ve varış ilçesini, yük tipini belirtin. 15 dakika içinde size dönelim.",
  alternates: { canonical: `${siteConfig.domain}/teklif-al` },
  robots: { index: false },
};

const trustItems = [
  { icon: "timer", title: "15 Dk İçinde", description: "Hızlı teklif dönüşü" },
  { icon: "verified", title: "Güvenilir", description: "500+ mutlu müşteri" },
  { icon: "payments", title: "Şeffaf Fiyat", description: "Gizli ücret yok" },
  { icon: "support_agent", title: "7/24 Destek", description: "Her zaman ulaşılabiliriz" },
];

export default function TeklifAlPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Teklif Al", href: "/teklif-al" },
        ]}
      />

      <div className="py-12 md:py-16 bg-[#F8F9FA] min-h-screen">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-[28px] md:text-[36px] font-semibold text-[#111827] mb-3 tracking-tight">
                Ücretsiz Fiyat Teklifi Alın
              </h1>
              <p className="text-[#6B7280] text-lg">
                İstanbul içi minivan nakliye için bilgilerinizi girin, 15 dakika içinde size dönelim.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-[20px] p-6 md:p-8">
                <QuoteForm />
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                {/* Trust items */}
                <div className="bg-white border border-[#E5E7EB] rounded-[14px] p-6">
                  <h3 className="font-semibold text-[#111827] mb-4">Neden UluLojistik?</h3>
                  <div className="space-y-4">
                    {trustItems.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#E63900] text-[20px] mt-0.5" aria-hidden="true">{item.icon}</span>
                        <div>
                          <p className="font-medium text-sm text-[#111827]">{item.title}</p>
                          <p className="text-xs text-[#6B7280]">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp alternative */}
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px] p-6 text-center">
                  <div className="flex justify-center mb-3"><WhatsAppIcon size={32} /></div>
                  <p className="font-medium text-[#111827] mb-1">WhatsApp ile Teklif</p>
                  <p className="text-sm text-[#6B7280] mb-4">Formsuz, direkt mesajlaşarak teklif alın</p>
                  <Link
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-5 py-2.5 rounded-[8px] text-sm transition-colors w-full justify-center"
                  >
                    <WhatsAppIcon size={16} className="brightness-0 invert" />
                    WhatsApp&apos;tan Yaz
                  </Link>
                </div>

                {/* Phone */}
                <div className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 text-center">
                  <span className="material-symbols-outlined text-[#E63900] text-[32px] mb-3" aria-hidden="true">phone</span>
                  <p className="font-medium text-[#111827] mb-1">Telefon ile Teklif</p>
                  <Link
                    href={siteConfig.phoneHref}
                    className="text-[#E63900] font-bold text-lg hover:underline"
                  >
                    {siteConfig.phone}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
