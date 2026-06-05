import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { QuickQuoteForm } from "@/components/sections/QuickQuoteForm";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Minivan Araçlarımız | İstanbul İçi Nakliye Filosu – UluLojistik",
  description:
    "UluLojistik minivan araçları. İstanbul içi koli, parça eşya, beyaz eşya ve ofis taşımacılığı için kapalı kasa minivan filomuz. 800 kg kapasite, 4-6 m³ hacim, 7/24 hizmet.",
  alternates: { canonical: `${siteConfig.domain}/araclarimiz` },
};

const vehicleSpecs = [
  { icon: "directions_car", label: "Araç Tipi", value: "Panelvan / Minivan" },
  { icon: "location_on", label: "Kullanım Alanı", value: "İstanbul İçi" },
  { icon: "inventory_2", label: "Uygun Yükler", value: "Koli, hafif mobilya, beyaz eşya" },
  { icon: "traffic", label: "Avantajı", value: "Köprü yasaklarına takılmaz" },
];

const capacityCards = [
  { icon: "inventory_2", title: "Koli Kapasitesi", value: "30–40 koli", description: "Standart koliler için ideal" },
  { icon: "kitchen", title: "Beyaz Eşya Kapasitesi", value: "2–3 adet", description: "Buzdolabı, çamaşır makinesi vb." },
  { icon: "chair", title: "Mobilya Kapasitesi", value: "1–2 parça", description: "Koltuk, masa, yatak gibi parçalar" },
];

const cargoItems = [
  { icon: "inventory_2", label: "Koliler" },
  { icon: "chair", label: "Hafif Mobilya" },
  { icon: "kitchen", label: "Beyaz Eşya" },
  { icon: "school", label: "Öğrenci Eşyası" },
  { icon: "business_center", label: "Ofis Eşyaları" },
  { icon: "storefront", label: "Mağaza Ürünleri" },
  { icon: "devices", label: "Elektronik" },
  { icon: "local_laundry_service", label: "Tekstil Ürünleri" },
];

const advantages = [
  {
    icon: "traffic",
    title: "Trafiğe Takılmaz",
    description: "Köprü ve tünel yasaklarına takılmaz, saat kısıtlaması olmadan İstanbul&apos;un her yerine ulaşır.",
  },
  {
    icon: "location_searching",
    title: "Dar Sokaklara Girer",
    description: "İstanbul&apos;un dar sokaklarında, büyük araçların giremediği yerlerde rahatça hareket eder.",
  },
  {
    icon: "local_parking",
    title: "Park Sorunu Yaşamaz",
    description: "Küçük boyutu sayesinde park problemi yaşamadan hızlıca yükleme ve boşaltma yapar.",
  },
  {
    icon: "lock",
    title: "Kapalı Kasa Koruma",
    description: "Eşyalarınız hava koşullarından ve dış etkilerden korunur, güvenle taşınır.",
  },
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
        description="İstanbul içi koli, parça eşya, ofis malzemesi ve beyaz eşya taşımacılığı için ideal, trafiğe takılmayan, kapalı kasa minivan filomuzla 7/24 hizmetinizdeyiz."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Araçlarımız" },
        ]}
        badge="İstanbul İçi Minivan Araçlar"
        primaryCTA={{ label: "Teklif Al", href: "/teklif-al" }}
        secondaryCTA={{ label: "Hizmetlerimiz", href: "/hizmetler" }}
        imageUrl="/images/service-minivan.png"
        imageAlt="Minivan Araçlarımız"
      />

      {/* Featured vehicle card */}
      <section className="py-14 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#F8F9FA] border border-[#E5E7EB] rounded-[20px] p-8 md:p-10">
            {/* Vehicle visual */}
            <div className="relative w-full h-[260px] bg-white rounded-[14px] border border-[#E5E7EB] overflow-hidden">
              <Image
                src="/images/service-minivan.png"
                alt="Standart Kapalı Kasa Minivan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Specs */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF0EB] text-[#E63900] text-xs font-medium rounded-full border border-[#FECDB9] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63900]" aria-hidden="true" />
                Öne Çıkan Araç
              </span>
              <h2 className="text-[22px] font-semibold text-[#111827] mb-3">
                Standart Kapalı Kasa Minivan
              </h2>
              <p className="text-[#6B7280] mb-6 leading-relaxed text-sm">
                İstanbul içi taşımacılıkta en pratik ve ekonomik çözüm. Dar sokaklara girer, köprü yasaklarına takılmaz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicleSpecs.map((spec) => (
                  <div key={spec.label} className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-[10px] p-3">
                    <span className="material-symbols-outlined text-[#E63900] text-[20px] shrink-0 mt-0.5" aria-hidden="true">
                      {spec.icon}
                    </span>
                    <div>
                      <p className="text-xs text-[#6B7280]">{spec.label}</p>
                      <p className="text-sm font-semibold text-[#111827]">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Kapasite section */}
      <section className="py-14 bg-[#F8F9FA]">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-[22px] md:text-[28px] font-semibold text-[#111827]">Araç Kapasitesi</h2>
            <p className="text-[#6B7280] mt-2">Minivanımızın taşıma kapasitesi hakkında bilgi</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {capacityCards.map((card) => (
              <div key={card.title} className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 text-center hover:border-[#E63900] hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-[#FFF0EB] rounded-[10px] flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#E63900] text-[24px]" aria-hidden="true">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-semibold text-[#111827] mb-1">{card.title}</h3>
                <p className="text-[22px] font-bold text-[#E63900] mb-1">{card.value}</p>
                <p className="text-sm text-[#6B7280]">{card.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we transport */}
      <section className="py-14 bg-white">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-[22px] md:text-[28px] font-semibold text-[#111827]">
              Minivanla Neler Taşıyoruz?
            </h2>
            <p className="text-[#6B7280] mt-2">Küçük ve orta hacimli yükleriniz için ideal araç</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cargoItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[12px] p-5 text-center hover:border-[#E63900] transition-colors">
                <span className="material-symbols-outlined text-[#E63900] text-[28px]" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-sm font-medium text-[#111827]">{item.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Advantages */}
      <section className="py-14 bg-[#F8F9FA]">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-[22px] md:text-[28px] font-semibold text-[#111827]">
              Minivan ile İstanbul&apos;da Taşımanın Avantajları
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((item) => (
              <div key={item.title} className="flex gap-4 bg-white border border-[#E5E7EB] rounded-[14px] p-6 hover:border-[#E63900] hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-[#FFF0EB] rounded-[8px] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#E63900] text-[22px]" aria-hidden="true">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <QuickQuoteForm />

      <BottomCTA
        title="Minivan ile İstanbul'da Hızlı Taşıma"
        description="Sadece minivan araçlarımızla İstanbul içinde hızlı, ekonomik ve güvenilir taşımacılık. Hemen teklif alın."
      />
    </>
  );
}
