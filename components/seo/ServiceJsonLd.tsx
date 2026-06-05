import { JsonLd } from "./JsonLd";
import { siteConfig } from "@/config/site";
import type { Service } from "@/data/services";

interface ServiceJsonLdProps {
  service: Service;
}

export function ServiceJsonLd({ service }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${siteConfig.domain}${service.href}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.brandName,
      url: siteConfig.domain,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.serviceArea,
    },
    serviceType: "Minivan Nakliye",
  };

  return <JsonLd data={schema} />;
}
