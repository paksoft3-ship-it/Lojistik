export interface FAQ {
  id: string;
  question: string;
  answer: string;
  categories: string[];
}

export const faqs: FAQ[] = [
  {
    id: "fiyat",
    question: "Fiyatlandırma nasıl yapılıyor?",
    answer:
      "Fiyatlandırma; alış ve teslimat noktaları arasındaki mesafe, taşınacak eşyaların hacmi ve ağırlığı ile talep edilen ek hizmetlere (hamaliye, paketleme) göre belirlenmektedir. Hızlı teklif için formumuzu doldurabilir veya WhatsApp'tan bize ulaşabilirsiniz.",
    categories: ["genel", "fiyat"],
  },
  {
    id: "kapasite",
    question: "Minivan araçların kapasitesi nedir?",
    answer:
      "Minivan araçlarımız ortalama 800 kg taşıma kapasitesine ve 4-6 m³ yük alanına sahiptir. Araç uzunluğu yaklaşık 2,20 m, genişliği ise 1,40 m'dir. Bu sayede koltuk, buzdolabı, koli ve benzeri eşyalar rahatlıkla taşınabilmektedir.",
    categories: ["genel", "arac"],
  },
  {
    id: "bolgeler",
    question: "İstanbul'un hangi ilçelerine hizmet veriyorsunuz?",
    answer:
      "UluLojistik olarak İstanbul'un tüm ilçelerine hizmet veriyoruz. Avrupa Yakası'nda Beşiktaş, Şişli, Bakırköy, Beylikdüzü ve daha fazlası; Anadolu Yakası'nda Kadıköy, Üsküdar, Maltepe, Pendik ve tüm ilçeler hizmet bölgemiz içindedir. Sadece İstanbul içi hizmet sağlamaktayız.",
    categories: ["genel", "bolge"],
  },
  {
    id: "hamali",
    question: "Eşya taşıma (hamaliye) hizmetiniz var mı?",
    answer:
      "Evet, talep halinde deneyimli taşıma personeli sağlıyoruz. Hamaliye hizmeti ayrıca fiyatlandırılmaktadır. Teklif alırken bu ihtiyacınızı belirtmeniz yeterlidir.",
    categories: ["genel", "hizmet"],
  },
  {
    id: "sameday",
    question: "Aynı gün teslimat yapıyor musunuz?",
    answer:
      "Evet, uygunluk durumuna göre aynı gün teslimat yapabiliyoruz. Acil taşıma talepleriniz için 7/24 hattımızı arayabilir veya WhatsApp'tan ulaşabilirsiniz. İstanbul içi tüm taşıma işlemlerinde hızlı çözüm üretiyoruz.",
    categories: ["genel", "hizmet"],
  },
  {
    id: "sigorta",
    question: "Taşıma sırasında eşyalarım sigortalı mı?",
    answer:
      "Araçlarımız trafik sigortasına sahiptir. Yük sigortası için önceden bilgilendirme alabilirsiniz. Eşyalarınızın güvenliği için özel ambalaj ve sabitleme malzemeleri kullanıyoruz.",
    categories: ["genel", "guvenlik"],
  },
  {
    id: "yuk-taksi-fiyat",
    question: "Yük taksi fiyatı nasıl hesaplanıyor?",
    answer:
      "Yük taksi hizmetinde fiyat; alış ve teslimat noktaları arasındaki mesafe, yükün hacmi ve taşıma saatine göre belirlenmektedir. Sadece gidiş yönü ücreti uygulanmaktadır. Hızlı fiyat almak için WhatsApp'tan bize yazabilirsiniz.",
    categories: ["yuk-taksi", "fiyat"],
  },
  {
    id: "kac-dakika",
    question: "Yük taksi ne kadar sürede gelir?",
    answer:
      "İstanbul içi yük taksi hizmetimizde araç, talep sonrasında 30-60 dakika içinde adresinizde olmaktadır. Yoğun saatlerde bu süre biraz uzayabilmektedir. Acil durumlar için 7/24 hattımızı arayabilirsiniz.",
    categories: ["yuk-taksi"],
  },
  {
    id: "acil-sure",
    question: "Acil nakliye talebi ne kadar sürede karşılanıyor?",
    answer:
      "Acil minivan nakliye taleplerinizi 7/24 karşılıyoruz. Araç, talep sonrasında genellikle 60 dakika içinde kapınıza gelmektedir. Hızlı ulaşım için doğrudan WhatsApp veya telefon hattımızı kullanmanızı öneririz.",
    categories: ["acil"],
  },
  {
    id: "beyaz-esya-tasinan",
    question: "Beyaz eşya taşımada nelere dikkat ediyorsunuz?",
    answer:
      "Buzdolabı ve derin dondurucular dik pozisyonda taşınmaktadır. Tüm beyaz eşyalar havalı naylon ve köpük malzemeler ile sarılmaktadır. Çamaşır makinesi davulu için özel sabitleyiciler kullanılmaktadır. Talep halinde kurulum desteği de sağlıyoruz.",
    categories: ["beyaz-esya"],
  },
  {
    id: "odeme",
    question: "Ödeme seçenekleri nelerdir?",
    answer:
      "Nakit, havale/EFT ve kredi kartı ile ödeme kabul ediyoruz. Kurumsal müşterilerimize fatura düzenleyebiliyoruz. Ödeme detayları teklif aşamasında netleştirilmektedir.",
    categories: ["genel", "fiyat"],
  },
  {
    id: "sehirlerarasi",
    question: "Şehirlerarası taşıma yapıyor musunuz?",
    answer:
      "Hayır. UluLojistik sadece İstanbul içi minivan taşımacılığı hizmeti vermektedir. Şehirlerarası, uluslararası veya büyük hacimli yük taşımacılığı hizmetlerimiz bulunmamaktadır.",
    categories: ["genel", "bolge"],
  },
];

export function getFAQsByIds(ids: string[]): FAQ[] {
  return ids
    .map((id) => faqs.find((f) => f.id === id))
    .filter(Boolean) as FAQ[];
}

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.categories.includes(category));
}

export const homepageFAQIds = [
  "sehirlerarasi",
  "kapasite",
  "fiyat",
  "hamali",
  "sameday",
  "sigorta",
];
