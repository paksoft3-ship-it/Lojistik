import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "İletişim | UluLojistik İstanbul Minivan Nakliye",
  description:
    "UluLojistik ile iletişime geçin. Telefon, WhatsApp veya e-posta ile ulaşabilirsiniz. Sadece İstanbul içi hizmet.",
  alternates: { canonical: `${siteConfig.domain}/iletisim` },
};

const contactCards = [
  {
    icon: "phone",
    title: "Telefon",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    description: "7/24 hizmet hattı",
    colorClass: "text-[#E63900]",
  },
  {
    icon: "chat",
    title: "WhatsApp",
    value: "WhatsApp ile Yaz",
    href: siteConfig.whatsappHref,
    description: "Hızlı yanıt için",
    colorClass: "text-[#16A34A]",
    filled: true,
    external: true,
  },
  {
    icon: "mail",
    title: "E-posta",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Detaylı sorular için",
    colorClass: "text-[#E63900]",
  },
  {
    icon: "location_on",
    title: "Hizmet Bölgesi",
    value: "Tüm İstanbul",
    href: "/bolgeler",
    description: "Sadece İstanbul içi",
    colorClass: "text-[#E63900]",
  },
];

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
            {contactCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 flex flex-col items-center text-center gap-3 hover:border-[#E63900] transition-colors"
              >
                <span
                  className={`material-symbols-outlined text-[32px] ${card.colorClass} ${card.filled ? "filled" : ""}`}
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
                <div>
                  <p className="font-semibold text-[#111827] mb-0.5">{card.title}</p>
                  <p className={`text-sm font-medium ${card.colorClass}`}>{card.value}</p>
                  <p className="text-xs text-[#9CA3AF] mt-1">{card.description}</p>
                </div>
              </Link>
            ))}
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
                  <span className="material-symbols-outlined filled text-[#16A34A]" aria-hidden="true">chat</span>
                  Hızlı Yanıt için WhatsApp
                </h3>
                <p className="text-sm text-[#6B7280] mb-4">
                  En hızlı yanıt için WhatsApp hattımızı kullanın.
                </p>
                <Link
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white font-medium px-5 py-2.5 rounded-[8px] text-sm transition-colors"
                >
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
