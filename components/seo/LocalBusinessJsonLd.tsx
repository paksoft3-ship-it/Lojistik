import { JsonLd } from "./JsonLd";
import { siteConfig } from "@/config/site";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.brandName,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/logo.png`,
    image: `${siteConfig.domain}/og-image.jpg`,
    description: siteConfig.mainDescription,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "07:00",
      closes: "23:00",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.serviceArea,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "İstanbul Minivan Nakliye Hizmetleri",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "İstanbul Minivan Nakliye" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "İstanbul Yük Taksi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Parça Eşya Taşıma" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beyaz Eşya Taşıma" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Öğrenci Eşyası Taşıma" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acil Minivan Nakliye" } },
      ],
    },
  };

  return <JsonLd data={schema} />;
}
