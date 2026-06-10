import { InnerHero } from "./InnerHero";
import { QuickQuoteForm } from "./QuickQuoteForm";
import { WhyMinivan } from "./WhyMinivan";
import Image from "next/image";
import { TransportItemsGrid } from "./TransportItemsGrid";
import { UrgentCTA } from "./UrgentCTA";
import { Testimonials } from "./Testimonials";
import { FAQAccordion } from "./FAQAccordion";
import { BottomCTA } from "./BottomCTA";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { FAQJsonLd } from "@/components/seo/FAQJsonLd";
import { getRelatedServices } from "@/data/services";
import type { Service } from "@/data/services";
import { getFAQsByIds } from "@/data/faq";

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const faqs = getFAQsByIds(service.faqIds);
  const related = getRelatedServices(service.relatedSlugs);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Hizmetler", href: "/hizmetler" },
          { name: service.title, href: service.href },
        ]}
      />
      <ServiceJsonLd service={service} />
      {faqs.length > 0 && <FAQJsonLd faqs={faqs} />}

      {/* Hero */}
      <InnerHero
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetler", href: "/hizmetler" },
          { label: service.shortTitle },
        ]}
        primaryCTA={{ label: "Hemen Teklif Al", href: "/teklif-al" }}
        secondaryCTA={{ label: "WhatsApp'tan Yaz", href: "#whatsapp" }}
        badge={`İstanbul İçi ${service.shortTitle}`}
        imageUrl={service.imageUrl}
        imageAlt={service.title}
      />

      {/* Quick Quote */}
      <QuickQuoteForm serviceSlug={service.slug} />

      {/* For Whom */}
      <Section background="surface">
        <Container>
          <h2 className="text-center text-[24px] md:text-[28px] font-semibold text-[#111827] mb-10">
            Kimler İçin Uygun?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {service.forWhom.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                align="center"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* What can be transported */}
      <TransportItemsGrid
        title={`${service.shortTitle} ile Neler Taşınır?`}
        customItems={service.whatCanBeTransported.map((name) => ({
          icon: getIconForItem(name),
          label: name,
        }))}
      />

      {/* Advantages */}
      <Section>
        <Container>
          <h2 className="text-center text-[24px] md:text-[28px] font-semibold text-[#111827] mb-10">
            {service.shortTitle} Avantajları
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.advantages.map((adv) => (
              <FeatureCard
                key={adv.title}
                icon={adv.icon}
                title={adv.title}
                description={adv.description}
                align="center"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Panelvan info */}
      <Section background="dark">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[24px] md:text-[28px] font-semibold text-white mb-6">
                Panelvan Araç Kapasitesi
              </h2>
              <ul className="space-y-4">
                {[
                  "800 kg Taşıma Kapasitesi",
                  "17 m³ Yük Hacmi",
                  "2.20 m Uzunluk / 1.40 m Genişlik",
                  "Kapalı Kasa — Hava Şartlarından Korunur",
                  "İstanbul'un Dar Sokaklarına Uygun",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="material-symbols-outlined text-[#E63900] text-[20px]" aria-hidden="true">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[240px] rounded-[14px] overflow-hidden border border-white/10">
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <WhyMinivan />

      <UrgentCTA />

      <Testimonials />

      {faqs.length > 0 && (
        <FAQAccordion faqs={faqs} showLink />
      )}

      {/* Related services */}
      {related.length > 0 && (
        <Section background="surface">
          <Container>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#111827] mb-8">
              Diğer Hizmetlerimiz
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel) => (
                <ServiceCard
                  key={rel.slug}
                  title={rel.shortTitle}
                  description={rel.shortDescription}
                  icon={rel.icon}
                  href={rel.href}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <BottomCTA />
    </>
  );
}

function getIconForItem(name: string): string {
  const map: Record<string, string> = {
    "Koliler & Kutular": "inventory_2",
    "Koli & Kutu": "inventory_2",
    "Koliler": "inventory_2",
    "Paketler": "package_2",
    "Küçük Mobilya": "chair",
    "Mobilya": "chair",
    "Koltuk & Kanepe": "weekend",
    "Dolap & Şifonyer": "door_sliding",
    "Masa & Sandalye": "table_restaurant",
    "Raf Sistemleri": "shelves",
    "Yatak & Baza": "bed",
    "TV Ünitesi": "tv",
    "Beyaz Eşya": "kitchen",
    "Buzdolabı": "kitchen",
    "Çamaşır Makinesi": "local_laundry_service",
    "Kurutma Makinesi": "local_laundry_service",
    "Fırın & Ocak": "outdoor_grill",
    "Bulaşık Makinesi": "dishwasher_gen",
    "Derin Dondurucu": "ac_unit",
    "Elektronik Eşya": "devices",
    "Elektronik": "devices",
    "Bisiklet & Motor": "directions_bike",
    "Bisiklet/Motor": "directions_bike",
    "Motosiklet": "motorcycle",
    "Bavul & Çanta": "luggage",
    "Bavullar": "luggage",
    "Valiz & Bavullar": "luggage",
    "Raf & Kitaplık": "shelves",
    "Koltuk & Puf": "weekend",
    "Yatak Takımı": "bed",
    "Küçük Elektronik": "devices",
    "Ofis Mobilyası": "desk",
    "Dosya & Arşiv": "folder",
    "Mağaza Ürünleri": "storefront",
    "Ekipman": "precision_manufacturing",
    "Numuneler": "science",
    "Paketler & Koliler": "inventory_2",
    "Belgeler & Dosyalar": "description",
    "Elektronik Cihazlar": "devices",
    "Özel Eşyalar": "diamond",
    "Her Türlü Yük": "all_inbox",
    "İş Malzemeleri": "work",
    "Hediyelik Ürünler": "card_giftcard",
    "Kırtasiye Malzemeleri": "edit",
    "Küçük Parçalar": "category",
    "Küçük Cihazlar": "devices",
    "Öğrenci Eşyası": "school",
    "Fabrikalardan": "factory",
  };
  return map[name] ?? "inventory_2";
}
