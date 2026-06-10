import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getDistrictBySlug, allDistricts } from "@/data/districts";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { QuickQuoteForm } from "@/components/sections/QuickQuoteForm";
import { WhyMinivan } from "@/components/sections/WhyMinivan";
import { UrgentCTA } from "@/components/sections/UrgentCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFAQsByIds } from "@/data/faq";

interface Props {
  params: Promise<{ district: string }>;
}

export async function generateStaticParams() {
  return allDistricts.map((d) => ({ district: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { district: slug } = await params;
  const district = getDistrictBySlug(slug);
  if (!district) return {};

  return {
    title: `${district.name} Panelvan Nakliye | İstanbul`,
    description: `${district.name} içi ve ${district.name} çıkışlı panelvan nakliye hizmeti. Hızlı, ekonomik ve güvenilir taşımacılık. Hemen teklif alın.`,
    alternates: {
      canonical: `${siteConfig.domain}/bolgeler/${slug}`,
    },
  };
}

export default async function DistrictPage({ params }: Props) {
  const { district: slug } = await params;
  const district = getDistrictBySlug(slug);
  if (!district) notFound();

  const sideLabel = district.side === "avrupa" ? "Avrupa Yakası" : "Anadolu Yakası";
  const sideHref =
    district.side === "avrupa"
      ? "/bolgeler/avrupa-yakasi-panelvan-nakliye"
      : "/bolgeler/anadolu-yakasi-panelvan-nakliye";

  const regionImage =
    district.side === "avrupa" ? "/Updatedimage/2.jpeg" : "/Updatedimage/1.jpeg";

  const nearbyDistricts = allDistricts
    .filter((d) => d.side === district.side && d.slug !== slug)
    .slice(0, 8);

  const faqs = getFAQsByIds(["bolgeler", "fiyat", "sameday", "hamali"]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${district.name} Panelvan Nakliye`,
    description: `${district.name} içi ve ${district.name} çıkışlı panelvan nakliye hizmeti.`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.brandName,
      url: siteConfig.domain,
    },
    areaServed: { "@type": "Place", name: district.name },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Bölgeler", href: "/bolgeler" },
          { name: sideLabel, href: sideHref },
          { name: district.name, href: `/bolgeler/${slug}` },
        ]}
      />
      <JsonLd data={serviceSchema} />

      <InnerHero
        title={`${district.name} Panelvan Nakliye`}
        description={`${district.name} içi ve ${district.name} çıkışlı hızlı panelvan nakliye hizmeti. Parça eşya, beyaz eşya, öğrenci eşyası ve acil taşıma için 7/24 hizmetinizdeyiz.`}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Bölgeler", href: "/bolgeler" },
          { label: sideLabel, href: sideHref },
          { label: district.name },
        ]}
        primaryCTA={{ label: "Teklif Al", href: "/teklif-al" }}
        badge={`${sideLabel} — ${district.name}`}
        imageUrl={regionImage}
        imageAlt={`${district.name} Panelvan Nakliye`}
      />

      <QuickQuoteForm defaultDistrict={district.name} />

      {/* Services */}
      <section className="py-14 bg-[#F8F9FA]">
        <Container>
          <h2 className="text-[22px] font-semibold text-[#111827] mb-8">
            {district.name}&apos;de Sunulan Hizmetler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 4).map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.shortTitle}
                description={s.shortDescription}
                icon={s.icon}
                href={s.href}
              />
            ))}
          </div>
        </Container>
      </section>

      <WhyMinivan />

      {/* Nearby districts */}
      <section className="py-12">
        <Container>
          <h2 className="text-[22px] font-semibold text-[#111827] mb-6">
            Yakın İlçeler
          </h2>
          <div className="flex flex-wrap gap-3">
            {nearbyDistricts.map((d) => (
              <Link
                key={d.slug}
                href={`/bolgeler/${d.slug}`}
                className="px-4 py-2 bg-[#F8F9FA] border border-[#E5E7EB] rounded-full text-sm text-[#6B7280] hover:border-[#E63900] hover:text-[#E63900] transition-colors"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <UrgentCTA />
      <FAQAccordion faqs={faqs} />
      <BottomCTA
        title={`${district.name} İçi Taşıma İçin Hemen Teklif Alın`}
        description={`${district.name} ve çevresi için hızlı, ekonomik panelvan nakliye. 7/24 hizmetinizdeyiz.`}
      />
    </>
  );
}
