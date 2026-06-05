import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "İletişim | UluLojistik İstanbul Minivan Nakliye",
  description:
    "UluLojistik ile iletişime geçin. Telefon, WhatsApp veya e-posta ile ulaşabilirsiniz. Sadece İstanbul içi hizmet.",
  alternates: { canonical: `${siteConfig.domain}/iletisim` },
};

export default function IletisimPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "İletişim", href: "/iletisim" },
        ]}
      />

      <InnerHero
        title="İletişim"
        description="Minivan nakliye hizmetlerimiz hakkında soru sormak veya teklif almak için bizimle iletişime geçin."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim" },
        ]}
        badge="Bize Ulaşın"
      />

      <section className="py-14">
        <Container>
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {/* Phone */}
            <Link
              href={siteConfig.phoneHref}
              className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 flex flex-col items-center text-center gap-3 hover:border-[#E63900] transition-colors"
            >
              <span className="material-symbols-outlined text-[32px] text-[#E63900]" aria-hidden="true">phone</span>
              <div>
                <p className="font-semibold text-[#111827] mb-0.5">Telefon</p>
                <p className="text-sm font-medium text-[#E63900]">{siteConfig.phone}</p>
                <p className="text-xs text-[#9CA3AF] mt-1">7/24 hizmet hattı</p>
              </div>
            </Link>

            {/* WhatsApp — real logo */}
            <Link
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 flex flex-col items-center text-center gap-3 hover:border-[#25D366] transition-colors"
            >
              <WhatsAppIcon size={32} />
              <div>
                <p className="font-semibold text-[#111827] mb-0.5">WhatsApp</p>
                <p className="text-sm font-medium text-[#25D366]">WhatsApp ile Yaz</p>
                <p className="text-xs text-[#9CA3AF] mt-1">Hızlı yanıt için</p>
              </div>
            </Link>

            {/* Email */}
            <Link
              href={`mailto:${siteConfig.email}`}
              className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 flex flex-col items-center text-center gap-3 hover:border-[#E63900] transition-colors"
            >
              <span className="material-symbols-outlined text-[32px] text-[#E63900]" aria-hidden="true">mail</span>
              <div>
                <p className="font-semibold text-[#111827] mb-0.5">E-posta</p>
                <p className="text-sm font-medium text-[#E63900]">{siteConfig.email}</p>
                <p className="text-xs text-[#9CA3AF] mt-1">Detaylı sorular için</p>
              </div>
            </Link>

            {/* Address */}
            <div className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 flex flex-col items-center text-center gap-3">
              <span className="material-symbols-outlined text-[32px] text-[#E63900]" aria-hidden="true">location_on</span>
              <div>
                <p className="font-semibold text-[#111827] mb-0.5">Adres</p>
                <p className="text-sm font-medium text-[#E63900] leading-snug">{siteConfig.address.full}</p>
                <p className="text-xs text-[#9CA3AF] mt-1">Sadece İstanbul içi</p>
              </div>
            </div>
          </div>

          {/* Form + info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-[22px] font-semibold text-[#111827] mb-6">Mesaj Gönderin</h2>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-[14px] p-6">
                <h3 className="font-semibold text-[#111827] mb-3">Önemli Not</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  UluLojistik olarak <strong>sadece İstanbul içi</strong> minivan nakliye hizmeti sunmaktayız. Şehirlerarası, uluslararası veya büyük hacimli yük taşımacılığı hizmetimiz bulunmamaktadır.
                </p>
              </div>
              <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px] p-6">
                <h3 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <WhatsAppIcon size={20} />
                  Hızlı Yanıt için WhatsApp
                </h3>
                <p className="text-sm text-[#6B7280] mb-4">
                  En hızlı yanıt için WhatsApp hattımızı kullanın.
                </p>
                <Link
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-5 py-2.5 rounded-[8px] text-sm transition-colors"
                >
                  <WhatsAppIcon size={16} className="brightness-0 invert" />
                  WhatsApp&apos;tan Yaz
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
