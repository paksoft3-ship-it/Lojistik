import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { faqs } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FAQJsonLd } from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | İstanbul Panelvan Nakliye SSS – Ülkü Lojistik",
  description:
    "Ülkü Lojistik İstanbul panelvan nakliye hizmeti hakkında sık sorulan sorular. Fiyat, kapasite, hizmet bölgeleri, hamaliye, aynı gün teslimat ve daha fazlası.",
  alternates: { canonical: `${siteConfig.domain}/sss` },
};

export default function SSSPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "SSS", href: "/sss" },
        ]}
      />
      <FAQJsonLd faqs={faqs} />

      <InnerHero
        title="Sıkça Sorulan Sorular"
        description="İstanbul içi panelvan nakliye hizmetlerimiz hakkında en çok merak edilen sorular ve cevapları."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "SSS" },
        ]}
        badge="SSS"
        primaryCTA={{ label: "Teklif Al", href: "/teklif-al" }}
      />

      <section className="py-14">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Section badge */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className="material-symbols-outlined text-[#E63900] text-[28px]"
                aria-hidden="true"
              >
                help
              </span>
              <h2 className="text-[20px] font-semibold text-[#111827]">
                Tüm Sorular ({faqs.length})
              </h2>
            </div>

            {/* Native details/summary accordion */}
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.id}
                  className="bg-white border border-[#E5E7EB] rounded-[14px] group overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                    <span className="font-medium text-[#111827] text-[15px] leading-snug group-open:text-[#E63900] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className="material-symbols-outlined text-[22px] text-[#6B7280] shrink-0 group-open:rotate-180 transition-transform group-open:text-[#E63900]"
                      aria-hidden="true"
                    >
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-[#6B7280] text-[15px] leading-relaxed border-t border-[#F3F4F6] pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            {/* Contact nudge */}
            <div className="mt-10 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[14px] p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <span
                className="material-symbols-outlined text-[#E63900] text-[36px] shrink-0"
                aria-hidden="true"
              >
                chat_bubble
              </span>
              <div className="flex-1">
                <p className="font-semibold text-[#111827] mb-1">Sorunuzu bulamadınız mı?</p>
                <p className="text-sm text-[#6B7280]">
                  Merak ettiğiniz her konuda bize ulaşabilirsiniz. WhatsApp veya telefon ile anında cevap alın.
                </p>
              </div>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-5 py-2.5 rounded-[8px] transition-colors text-sm min-h-[44px]"
              >
                WhatsApp&apos;tan Sor
              </a>
            </div>
          </div>
        </Container>
      </section>

      <BottomCTA />
    </>
  );
}
