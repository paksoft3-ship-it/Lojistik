import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda | İstanbul İçi Minivan Nakliye – UluLojistik",
  description:
    "UluLojistik hakkında bilgi alın. Sadece İstanbul içi minivan nakliye alanında uzmanlaşmış ekibimiz, hizmet anlayışımız ve değerlerimiz.",
  alternates: { canonical: `${siteConfig.domain}/hakkimizda` },
};

const trustBadges = [
  { icon: "check_circle", text: "Sadece İstanbul İçi Hizmet" },
  { icon: "check_circle", text: "Pratik Minivan Araçlar" },
  { icon: "check_circle", text: "Hızlı ve Şeffaf Fiyatlandırma" },
];

const values = [
  {
    icon: "handshake",
    title: "Güvenilirlik",
    description: "Söz verdiğimiz saatte, söz verdiğimiz fiyatta hizmet. Hiçbir sürpriz ücret yok.",
  },
  {
    icon: "speed",
    title: "Hız",
    description: "İstanbul trafiğini en iyi bilen minivanlarımızla en kısa sürede kapınızdayız.",
  },
  {
    icon: "location_city",
    title: "İstanbul Odaklı",
    description: "Sadece İstanbul içi hizmet — her semti, her sokağı, her yolu tanıyoruz.",
  },
  {
    icon: "savings",
    title: "Ekonomiklik",
    description: "Büyük araçlara gerek duymadan en uygun fiyatla kaliteli taşımacılık.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Hakkımızda", href: "/hakkimizda" },
        ]}
      />

      <InnerHero
        title="Hızlı, Pratik ve Sadece İstanbul'da"
        description="İstanbul içinde minivan araçlarla hızlı, ekonomik ve güvenilir taşımacılık hizmeti sunuyoruz. Tüm ilçelere 7/24 hizmet, şeffaf fiyatlandırma ve uzman ekip."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hakkımızda" },
        ]}
        badge="İstanbul İçi Minivan Nakliye"
        primaryCTA={{ label: "Teklif Al", href: "/teklif-al" }}
        secondaryCTA={{ label: "Hizmetlerimiz", href: "/hizmetler" }}
        imageUrl="/images/about-us.png"
        imageAlt="Hakkımızda"
      />

      {/* Trust badges + visual */}
      <section className="py-14 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Trust badges */}
            <div className="space-y-6">
              <h2 className="text-[22px] md:text-[28px] font-semibold text-[#111827] leading-snug">
                İstanbul&apos;un Her İlçesine Minivan ile Hizmet
              </h2>
              <p className="text-[#6B7280] leading-relaxed text-[17px]">
                UluLojistik olarak, İstanbul içinde küçük ve orta hacimli taşımalar için özel olarak minivan araç filosu kullanıyoruz. Büyük araçlara gerek duymadan, hızlı ve ekonomik çözümler sunuyoruz.
              </p>
              <ul className="space-y-3">
                {trustBadges.map((badge) => (
                  <li key={badge.text} className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined filled text-[#16A34A] text-[24px] shrink-0"
                      aria-hidden="true"
                    >
                      {badge.icon}
                    </span>
                    <span className="font-medium text-[#111827]">{badge.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Visual with floating cards */}
            <div className="relative h-[300px] rounded-[20px] bg-[#F8F9FA] border border-[#E5E7EB] overflow-hidden">
              <Image
                src="/images/about-us.png"
                alt="İstanbul'un her ilçesine minivan hizmeti"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              {/* Floating card 1 */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm border border-[#E5E7EB] rounded-[12px] px-4 py-3 shadow-sm">
                <p className="text-xs font-bold text-[#111827]">İstanbul Odaklı</p>
                <p className="text-xs text-[#6B7280]">Tüm ilçelerde</p>
              </div>
              {/* Floating card 2 */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm border border-[#E5E7EB] rounded-[12px] px-4 py-3 shadow-sm">
                <p className="text-xs font-bold text-[#111827]">Pratik Taşıma</p>
                <p className="text-xs text-[#6B7280]">Hızlı ve güvenli</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Biz Kimiz? */}
      <section className="py-14 bg-[#F8F9FA]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF0EB] text-[#E63900] text-xs font-medium rounded-full border border-[#FECDB9] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63900]" aria-hidden="true" />
                Hikayemiz
              </span>
              <h2 className="text-[22px] md:text-[28px] font-semibold text-[#111827] mb-5">Biz Kimiz?</h2>
              <p className="text-[#6B7280] leading-relaxed text-[17px]">
                UluLojistik, İstanbul içi minivan nakliye ve yük taşımacılığı alanında uzmanlaşmış bir firmadır. Sadece İstanbul içinde, sadece minivan araçlarla hizmet veren yapımızla müşterilerimize odaklanmış, pratik ve ekonomik çözümler sunuyoruz.
              </p>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-[#111827] mb-4">Neden Sadece Minivan?</h2>
              <p className="text-[#6B7280] leading-relaxed text-[17px]">
                İstanbul&apos;un yoğun trafiğini ve dar sokaklarını göz önünde bulundurarak, büyük kamyon veya kamyonetler yerine minivan araçlarla hizmet veriyoruz. Bu sayede köprü ve tünel yasaklarına takılmadan, park sorunu yaşamadan ve daha ekonomik fiyatlarla taşıma gerçekleştiriyoruz.
              </p>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-[#111827] mb-4">Hizmet Anlayışımız</h2>
              <p className="text-[#6B7280] leading-relaxed text-[17px]">
                Her taşımada müşteri memnuniyetini ön planda tutuyoruz. Zamanında gelme, eşyalara özenli davranma ve şeffaf fiyatlandırma ilkelerimizle hizmet veriyoruz. Herhangi bir sürpriz ücret veya gizli maliyet bulunmuyor; teklif aşamasında belirlenen fiyat değişmiyor.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-14 bg-white">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-[22px] md:text-[28px] font-semibold text-[#111827]">Değerlerimiz</h2>
            <p className="text-[#6B7280] mt-2">Her hizmette bizi yönlendiren prensipler</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-[14px] p-6 flex flex-col items-center text-center gap-3 hover:border-[#E63900] hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 bg-[#FFF0EB] rounded-[10px] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#E63900] text-[24px]" aria-hidden="true">
                    {v.icon}
                  </span>
                </div>
                <h3 className="font-semibold text-[#111827]">{v.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BottomCTA
        title="İstanbul İçi Taşıma İçin Hazırız"
        description="Pratik minivan araçlarımız ve deneyimli ekibimizle hemen hizmetinizdeyiz. Ücretsiz teklif alın."
      />
    </>
  );
}
