export interface District {
  slug: string;
  name: string;
  side: "avrupa" | "anadolu";
  description?: string;
}

export const avrupa: District[] = [
  { slug: "besiktas", name: "Beşiktaş", side: "avrupa" },
  { slug: "sisli", name: "Şişli", side: "avrupa" },
  { slug: "sarıyer", name: "Sarıyer", side: "avrupa" },
  { slug: "kagithane", name: "Kâğıthane", side: "avrupa" },
  { slug: "beyoglu", name: "Beyoğlu", side: "avrupa" },
  { slug: "fatih", name: "Fatih", side: "avrupa" },
  { slug: "zeytinburnu", name: "Zeytinburnu", side: "avrupa" },
  { slug: "bakirkoy", name: "Bakırköy", side: "avrupa" },
  { slug: "kucukcekmece", name: "Küçükçekmece", side: "avrupa" },
  { slug: "buyukcekmece", name: "Büyükçekmece", side: "avrupa" },
  { slug: "avcilar", name: "Avcılar", side: "avrupa" },
  { slug: "bahcelievler", name: "Bahçelievler", side: "avrupa" },
  { slug: "bagcilar", name: "Bağcılar", side: "avrupa" },
  { slug: "gungoren", name: "Güngören", side: "avrupa" },
  { slug: "esenler", name: "Esenler", side: "avrupa" },
  { slug: "bayrampasa", name: "Bayrampaşa", side: "avrupa" },
  { slug: "gaziosmanpasa", name: "Gaziosmanpaşa", side: "avrupa" },
  { slug: "eyupsultan", name: "Eyüpsultan", side: "avrupa" },
  { slug: "sultangazi", name: "Sultangazi", side: "avrupa" },
  { slug: "basaksehir", name: "Başakşehir", side: "avrupa" },
  { slug: "esenyurt", name: "Esenyurt", side: "avrupa" },
  { slug: "beylikduzu", name: "Beylikdüzü", side: "avrupa" },
  { slug: "catalca", name: "Çatalca", side: "avrupa" },
  { slug: "silivri", name: "Silivri", side: "avrupa" },
  { slug: "arnavutkoy", name: "Arnavutköy", side: "avrupa" },
];

export const anadolu: District[] = [
  { slug: "kadikoy", name: "Kadıköy", side: "anadolu" },
  { slug: "uskudar", name: "Üsküdar", side: "anadolu" },
  { slug: "atasehir", name: "Ataşehir", side: "anadolu" },
  { slug: "umraniye", name: "Ümraniye", side: "anadolu" },
  { slug: "maltepe", name: "Maltepe", side: "anadolu" },
  { slug: "kartal", name: "Kartal", side: "anadolu" },
  { slug: "pendik", name: "Pendik", side: "anadolu" },
  { slug: "beykoz", name: "Beykoz", side: "anadolu" },
  { slug: "cekmekoy", name: "Çekmeköy", side: "anadolu" },
  { slug: "sancaktepe", name: "Sancaktepe", side: "anadolu" },
  { slug: "sultanbeyli", name: "Sultanbeyli", side: "anadolu" },
  { slug: "tuzla", name: "Tuzla", side: "anadolu" },
  { slug: "gebze", name: "Gebze", side: "anadolu" },
  { slug: "sahrayicedit", name: "Sahrayıcedit", side: "anadolu" },
  { slug: "adalar", name: "Adalar", side: "anadolu" },
];

export const allDistricts: District[] = [...avrupa, ...anadolu];

export function getDistrictBySlug(slug: string): District | undefined {
  return allDistricts.find((d) => d.slug === slug);
}

export function getDistrictsBySlug(slugs: string[]): District[] {
  return slugs
    .map((slug) => allDistricts.find((d) => d.slug === slug))
    .filter(Boolean) as District[];
}
