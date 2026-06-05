import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { InnerHero } from "@/components/sections/InnerHero";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { QuickQuoteForm } from "@/components/sections/QuickQuoteForm";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Minivan Araçlarımız | İstanbul Nakliye Filosu",
  description:
    "UluLojistik minivan araçları. İstanbul içi taşımacılık için özel panelvan ve minivan araçlarımız. Kapalı kasa, 800 kg kapasite, 4-6 m³ hacim.",
  alternates: { canonical: `${siteConfig.domain}/araclarimiz` },
};

const specs = [
  { icon: "scale", label: "Taşıma Kapasitesi", value: "800 kg" },
  { icon: "straighten", label: "Yük Hacmi", value: "4-6 m³" },
  { icon: "height", label: "İç Uzunluk", value: "2.20 m" },
  { icon: "width", label: "İç Genişlik", value: "1.40 m" },
  { icon: "lock", label: "Kasa Tipi", value: "Kapalı Kasa" },
  { icon: "schedule", label: "Hizmet Saatleri", value: "7/24" },
];

const advantages = [
  { icon: "traffic", title: "Trafiğe Takılmaz", description: "Köprü ve tünel yasaklarına takılmaz, saat kısıtlaması olmadan İstanbul'un her yerine ulaşır." },
  { icon: "location_searching", title: "Dar Sokaklara Girer", description: "İstanbul'un dar sokaklarında, büyük araçların giremediği yerlerde rahatça hareket eder." },
  { icon: "local_parking", title: "Park Sorunu Yaşamaz", description: "Küçük boyutu sayesinde park problemi yaşamadan hızlıca yükleme ve boşaltma yapar." },
  { icon: "ac_unit", title: "Kapalı Kasa Koruma", description: "Eşyalarınız hava koşullarından ve dış etkilerden korunur." },
];

export default function AraclarimizPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Araçlarımız", href: "/araclarimiz" },
        ]}
      />

      <InnerHero
        title="Minivan Araçlarımız"
        description="UluLojistik olarak İstanbul içi taşımacılık için sadece minivan araçlar kullanıyoruz. Panelvan ve minivan araç filomuz, İstanbul'un trafiğine ve dar sokaklarına özel olarak seçilmiştir."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Araçlarımız" },
        ]}
        primaryCTA={{ label: "Teklif Al", href: "/teklif-al" }}
        badge="Sadece Minivan"
      />

      {/* Minivan card */}
      <section className="py-14">
        <Container>
          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-2/5 flex items-center justify-center bg-white rounded-[14px] border border-[#E5E7EB] p-10 min-h-[220px]">
              <span className="material-symbols-outlined text-[100px] text-[#E63900] opacity-30" aria-hidden="true">
                airport_shuttle
              </span>
            </div>
            <div className="flex-1">
              <h2 className="text-[22px] font-semibold text-[#111827] mb-2">Panelvan & Minivan</h2>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                İstanbul içi taşımacılıkta en pratik ve ekonomik çözüm olan minivan araçlarımız, küçük hacimli yüklerinizi hızlı ve güvenli biçimde taşımak için özel olarak hazırlanmıştır.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="bg-white border border-[#E5E7EB] rounded-[12px] p-4 text-center">
                    <span className="material-symbols-outlined text-[#E63900] text-[24px] mb-1" aria-hidden="true">{spec.icon}</span>
                    <p className="text-xs text-[#6B7280]">{spec.label}</p>
                    <p className="font-semibold text-[#111827] text-sm">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Advantages */}
      <Section background="surface">
        <Container>
          <h2 className="text-center text-[22px] md:text-[26px] font-semibold text-[#111827] mb-10">
            Minivan ile İstanbul&apos;da Taşımanın Avantajları
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((item) => (
              <div key={item.title} className="flex gap-4 bg-white border border-[#E5E7EB] rounded-[14px] p-6">
                <span className="material-symbols-outlined text-[#E63900] text-[28px] mt-0.5 shrink-0" aria-hidden="true">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <QuickQuoteForm />
      <BottomCTA
        title="Minivan ile İstanbul'da Hızlı Taşıma"
        description="Sadece minivan araçlarımızla İstanbul içinde hızlı, ekonomik ve güvenilir taşımacılık."
      />
    </>
  );
}
