export const siteConfig = {
  brandName: "UluLojistik",
  domain: "https://ululojistik.com",
  email: "info@ululojistik.com",
  phone: "0850 123 45 67",
  phoneHref: "tel:+908501234567",
  whatsappNumber: "905850123456", // Replace with real WhatsApp number
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}?text=Merhaba,%20minivan%20nakliye%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`;
  },
  serviceArea: "İstanbul",
  vehicleType: "Minivan",
  mainDescription:
    "İstanbul içi hızlı ve ekonomik minivan nakliye hizmetleri. Parça eşya, beyaz eşya, öğrenci eşyası, yük taksi ve acil minivan taşımacılığında güvenilir çözüm.",
  keywords: [
    "İstanbul minivan nakliye",
    "İstanbul yük taksi",
    "parça eşya taşıma İstanbul",
    "beyaz eşya taşıma İstanbul",
    "öğrenci eşyası taşıma",
    "küçük yük taşıma İstanbul",
    "acil minivan nakliye",
    "ofis taşıma İstanbul",
    "İstanbul nakliye",
    "minivan kiralama İstanbul",
  ] as string[],
  social: {
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
  },
  address: {
    city: "İstanbul",
    country: "TR",
    countryName: "Türkiye",
  },
  openingHours: "Mo-Su 07:00-23:00",
  priceRange: "₺₺",
  foundingYear: 2020,
} as const;

export type SiteConfig = typeof siteConfig;
