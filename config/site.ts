export const siteConfig = {
  brandName: "Ülkü Lojistik",
  domain: "https://ulkulojistik.com",
  email: "info@ulkulojistik.com",
  phone: "0543 811 19 84",
  phoneHref: "tel:+905438111984",
  phone2: "0541 287 83 31",
  phoneHref2: "tel:+905412878331",
  whatsappNumber: "905438111984",
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}?text=Merhaba,%20panelvan%20nakliye%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`;
  },
  serviceArea: "İstanbul",
  vehicleType: "Panelvan",
  mainDescription:
    "İstanbul içi hızlı ve ekonomik panelvan nakliye hizmetleri. Parça eşya, beyaz eşya, öğrenci eşyası, yük taksi ve acil panelvan taşımacılığında güvenilir çözüm.",
  keywords: [
    "İstanbul panelvan nakliye",
    "İstanbul yük taksi",
    "parça eşya taşıma İstanbul",
    "beyaz eşya taşıma İstanbul",
    "öğrenci eşyası taşıma",
    "küçük yük taşıma İstanbul",
    "acil panelvan nakliye",
    "ofis taşıma İstanbul",
    "İstanbul nakliye",
    "panelvan kiralama İstanbul",
  ] as string[],
  social: {
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
  },
  address: {
    street: "Fevzi Çakmak Mah. Girne Cad. No: 40 A",
    district: "Pendik",
    city: "İstanbul",
    country: "TR",
    countryName: "Türkiye",
    full: "Fevzi Çakmak Mah. Girne Cad. No: 40 A, Pendik / İstanbul",
  },
  openingHours: "Mo-Su 07:00-23:00",
  priceRange: "₺₺",
  foundingYear: 2020,
} as const;

export type SiteConfig = typeof siteConfig;
