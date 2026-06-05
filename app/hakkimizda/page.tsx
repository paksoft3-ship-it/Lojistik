import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Hakkımızda | İstanbul Minivan Nakliye",
  description:
    "UluLojistik hakkında. İstanbul içi minivan nakliye alanında uzmanlaşmış ekibimiz ve hizmet anlayışımız.",
  alternates: { canonical: `${siteConfig.domain}/hakkimizda` },
};

const values = [
  { icon: "handshake", title: "Güvenilirlik", description: "Söz verdiğimiz saatte, söz verdiğimiz fiyatta hizmet." },
  { icon: "speed", title: "Hız", description: "İstanbul trafiğini en iyi bilen minivanlarımızla hızlı teslimat." },
  { icon: "location_city", title: "İstanbul Odaklı", description: "Sadece İstanbul içi hizmet — her semti, her yolu tanıyoruz." },
  { icon: "savings", title: "Ekonomiklik", description: "Büyük araçlara gerek duymadan en uygun fiyatla hizmet." },
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
        title="Hakkımızda"
        description="İstanbul içi minivan nakliye alanında uzmanlaşmış UluLojistik olarak, hızlı, ekonomik ve güvenilir taşımacılık hizmeti sunuyoruz."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hakkımızda" },
        ]}
        primaryCTA={{ label: "Teklif Al", href: "/teklif-al" }}
      />

      <section className="py-14">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-[22px] font-semibold text-[#111827] mb-4">Biz Kimiz?</h2>
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
          </div>
        </Container>
      </section>

      <section className="py-12 bg-[#F8F9FA]">
        <Container>
          <h2 className="text-center text-[22px] font-semibold text-[#111827] mb-10">Değerlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 flex flex-col items-center text-center gap-3">
                <span className="material-symbols-outlined text-[#E63900] text-[32px]" aria-hidden="true">{v.icon}</span>
                <h3 className="font-semibold text-[#111827]">{v.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BottomCTA />
    </>
  );
}
