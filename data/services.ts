export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  icon: string;
  href: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  forWhom: { icon: string; title: string; description: string }[];
  whatCanBeTransported: string[];
  advantages: { icon: string; title: string; description: string }[];
  faqIds: string[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "istanbul-panelvan-nakliye",
    title: "İstanbul Panelvan Nakliye",
    shortTitle: "Panelvan Nakliye",
    description:
      "İstanbul içi tüm ilçeler arası hızlı, güvenilir ve ekonomik panelvan taşımacılığı. Köprü yasaklarına takılmadan, dar sokaklara rahatça giren panelvanlarımızla eşyalarınızı güvenle taşıyoruz.",
    shortDescription:
      "Tüm ilçeler arası hızlı, panelvan araçlarla direkt teslimat.",
    imageUrl: "/updatedimage/1.jpeg",
    icon: "local_shipping",
    href: "/hizmetler/istanbul-panelvan-nakliye",
    features: [
      "Köprü yasaklarından muaf",
      "Dar sokaklara kolay erişim",
      "Aynı gün teslimat",
      "7/24 hizmet",
    ],
    metaTitle: "İstanbul Panelvan Nakliye | Hızlı ve Ekonomik Taşıma",
    metaDescription:
      "İstanbul içi panelvan nakliye hizmeti. Aynı gün teslimat, uygun fiyat. Köprü yasaklarına takılmadan, İstanbul'un tüm ilçelerine hızlı taşıma. Hemen teklif alın.",
    keywords: [
      "İstanbul panelvan nakliye",
      "panelvan taşımacılık İstanbul",
      "İstanbul içi nakliye",
      "hızlı nakliye İstanbul",
    ],
    forWhom: [
      {
        icon: "home",
        title: "Öğrenci & Bekarlar",
        description: "Az eşyalı ev taşımaları için en ekonomik ve hızlı yöntem.",
      },
      {
        icon: "store",
        title: "E-Ticaret Satıcıları",
        description: "Müşterilerinize aynı gün teslimat yapmak için ideal.",
      },
      {
        icon: "apartment",
        title: "Ofis & İş Yerleri",
        description: "Ekipman ve malzeme transferleri için pratik çözüm.",
      },
    ],
    whatCanBeTransported: [
      "Koliler & Kutular",
      "Küçük Mobilya",
      "Beyaz Eşya",
      "Elektronik Eşya",
      "Bisiklet & Motor",
      "Bavul & Çanta",
    ],
    advantages: [
      {
        icon: "payments",
        title: "Ekonomik Taşıma",
        description:
          "Büyük araçlara yüksek ücretler ödemek yerine sadece ihtiyacınız kadar ödeyin.",
      },
      {
        icon: "traffic",
        title: "İstanbul Trafiğine Uygun",
        description:
          "Köprü ve tünel yasaklarına takılmaz, dar sokaklara rahatça girer.",
      },
      {
        icon: "schedule",
        title: "Hızlı Planlama",
        description:
          "Aynı gün içinde organize olur, eşyalarınızı beklemeden hemen yola çıkarırız.",
      },
      {
        icon: "verified_user",
        title: "Güvenli Taşıma",
        description: "Kapalı kasa panelvanlar sayesinde eşyalarınız korunur.",
      },
    ],
    faqIds: ["fiyat", "kapasite", "bolgeler", "hamali", "sameday", "sigorta"],
    relatedSlugs: [
      "istanbul-yuk-taksi",
      "parca-esya-tasima",
      "kucuk-yuk-tasima",
    ],
  },
  {
    slug: "istanbul-yuk-taksi",
    title: "İstanbul Yük Taksi",
    shortTitle: "Yük Taksi",
    description:
      "Taksi mantığıyla çalışan, İstanbul içinde hızlı çağrılabilen hafif ticari araçlarımızla yük taşıma hizmeti. Taksi gibi çağırın, yükünüzü kapıdan kapıya taşıyalım.",
    shortDescription:
      "Taksi mantığıyla çalışan, hızlı çağrılabilen hafif ticari araçlar.",
    imageUrl: "/updatedimage/2.jpeg",
    icon: "local_taxi",
    href: "/hizmetler/istanbul-yuk-taksi",
    features: [
      "Taksi gibi çağırın",
      "Sadece gidiş yönü ücreti",
      "Anında kapınızda",
      "7/24 operasyon",
    ],
    metaTitle: "İstanbul Yük Taksi | Panelvan ile Hızlı Yük Taşıma",
    metaDescription:
      "İstanbul yük taksi hizmeti. Taksi gibi çağırın, kapıdan kapıya taşıma. Küçük yükler için ekonomik ve hızlı panelvan çözümü. Hemen teklif alın.",
    keywords: [
      "İstanbul yük taksi",
      "yük taksi İstanbul",
      "hızlı yük taşıma",
      "panelvan yük taksi",
    ],
    forWhom: [
      {
        icon: "business",
        title: "İş Dünyası",
        description: "Acil ofis transferleri ve kurye hizmetleri için ideal.",
      },
      {
        icon: "store",
        title: "Esnaf & Dükkanlar",
        description: "Ürün ve malzeme teslimatları için pratik çözüm.",
      },
      {
        icon: "home",
        title: "Bireysel Kullanıcılar",
        description: "Küçük taşıma ihtiyaçları için ekonomik seçenek.",
      },
    ],
    whatCanBeTransported: [
      "Koliler & Paketler",
      "Küçük Mobilya",
      "Elektronik",
      "Ev Eşyası",
      "İş Malzemeleri",
      "Hediyelik Ürünler",
    ],
    advantages: [
      {
        icon: "flash_on",
        title: "Anında Hizmet",
        description: "30-60 dakika içinde kapınıza geliyoruz.",
      },
      {
        icon: "payments",
        title: "Şeffaf Fiyat",
        description: "Sadece gidiş yönü ücreti, gizli ücret yok.",
      },
      {
        icon: "route",
        title: "Direkt Teslimat",
        description: "Durak durak değil, direkt varış noktasına.",
      },
      {
        icon: "support_agent",
        title: "7/24 Destek",
        description: "Gece ya da gündüz, her zaman ulaşabilirsiniz.",
      },
    ],
    faqIds: ["yuk-taksi-fiyat", "kac-dakika", "bolgeler", "hamali"],
    relatedSlugs: [
      "istanbul-panelvan-nakliye",
      "kucuk-yuk-tasima",
      "acil-panelvan-nakliye",
    ],
  },
  {
    slug: "kucuk-yuk-tasima",
    title: "İstanbul Küçük Yük Taşıma",
    shortTitle: "Küçük Yük Taşıma",
    description:
      "1 koli ya da 10 koli fark etmez. İstanbul içinde küçük yükleriniz için ekonomik panelvan çözümü. Büyük nakliye araçlarına gerek duymadan hızlı taşıma.",
    shortDescription:
      "Büyük nakliye aracı gerektirmeyen az miktardaki eşyalarınız için.",
    imageUrl: "/updatedimage/2.jpeg",
    icon: "inventory_2",
    href: "/hizmetler/kucuk-yuk-tasima",
    features: [
      "Ekonomik fiyatlandırma",
      "Parça başına hesaplama",
      "Kapıdan kapıya hizmet",
      "Aynı gün teslimat",
    ],
    metaTitle: "İstanbul Küçük Yük Taşıma | Panelvan Nakliye",
    metaDescription:
      "İstanbul içi küçük yük taşıma. Koli, paket, az eşya için ekonomik panelvan çözümü. Büyük araç tutmadan pratik taşıma. Hemen fiyat alın.",
    keywords: [
      "küçük yük taşıma İstanbul",
      "koli taşıma İstanbul",
      "az eşya nakliye",
      "ekonomik taşıma İstanbul",
    ],
    forWhom: [
      {
        icon: "inventory",
        title: "Koli & Paket Sahipleri",
        description: "Az sayıda koli veya paketi taşımak isteyenler.",
      },
      {
        icon: "store",
        title: "Online Satıcılar",
        description: "E-ticaret ürün teslimatları için pratik çözüm.",
      },
      {
        icon: "home",
        title: "Ev Sahipleri",
        description: "Küçük ev eşyalarını taşımak isteyenler için.",
      },
    ],
    whatCanBeTransported: [
      "Koliler & Kutular",
      "Paketler",
      "Bavullar",
      "Küçük Cihazlar",
      "Kırtasiye Malzemeleri",
      "Küçük Parçalar",
    ],
    advantages: [
      {
        icon: "savings",
        title: "Tasarruf",
        description: "Büyük araç kiralamak yerine sadece yükünüz için ödeme.",
      },
      {
        icon: "speed",
        title: "Hız",
        description: "Trafiğe takılmayan panelvanlarla hızlı teslimat.",
      },
      {
        icon: "handshake",
        title: "Esneklik",
        description: "Az ya da çok, her boyutta yük kabul ediyoruz.",
      },
      {
        icon: "verified",
        title: "Güvenilir",
        description: "Söz verdiğimiz saatte, güvenle teslim ediyoruz.",
      },
    ],
    faqIds: ["fiyat", "kapasite", "bolgeler"],
    relatedSlugs: [
      "istanbul-yuk-taksi",
      "parca-esya-tasima",
      "istanbul-panelvan-nakliye",
    ],
  },
  {
    slug: "parca-esya-tasima",
    title: "İstanbul Parça Eşya Taşıma",
    shortTitle: "Parça Eşya Taşıma",
    description:
      "Koltuk, dolap, masa gibi tekil büyük eşyalarınızı İstanbul içinde güvenle taşıyoruz. Sabitleme ve koruma malzemeleriyle hasarsız teslimat garantisi.",
    shortDescription: "1-2 parça mobilya veya eşyanın güvenle taşınması.",
    imageUrl: "/updatedimage/1.jpeg",
    icon: "chair",
    href: "/hizmetler/parca-esya-tasima",
    features: [
      "Sabitleme ve koruma",
      "İsteğe bağlı personel",
      "Hasarsızlık garantisi",
      "Aynı gün taşıma",
    ],
    metaTitle: "İstanbul Parça Eşya Taşıma | Az Eşya Nakliye",
    metaDescription:
      "İstanbul içi parça eşya taşıma. Koltuk, dolap, masa gibi tekil eşyaların güvenli taşınması. Sabitleme ve koruma dahil. Hemen teklif alın.",
    keywords: [
      "parça eşya taşıma İstanbul",
      "tekil eşya nakliye",
      "koltuk taşıma İstanbul",
      "mobilya taşıma İstanbul",
    ],
    forWhom: [
      {
        icon: "weekend",
        title: "1-2 Parça Sahipleri",
        description: "Birkaç parça mobilya taşımak isteyenler için ideal.",
      },
      {
        icon: "store",
        title: "Mobilya Satıcıları",
        description: "Müşteriye satılan mobilyanın teslimatı için.",
      },
      {
        icon: "home",
        title: "Kısmi Taşınma",
        description: "Tüm evi değil, sadece birkaç eşyayı taşımak isteyenler.",
      },
    ],
    whatCanBeTransported: [
      "Koltuk & Kanepe",
      "Dolap & Şifonyer",
      "Masa & Sandalye",
      "Raf Sistemleri",
      "Yatak & Baza",
      "TV Ünitesi",
    ],
    advantages: [
      {
        icon: "security",
        title: "Koruma Malzemeleri",
        description: "Havalı naylon ve bant ile eşyalarınız korunur.",
      },
      {
        icon: "group",
        title: "Personel Desteği",
        description: "İstek halinde taşıma personeli sağlıyoruz.",
      },
      {
        icon: "price_check",
        title: "Adil Fiyat",
        description: "Parça sayısına göre şeffaf fiyatlandırma.",
      },
      {
        icon: "access_time",
        title: "Hızlı Planlama",
        description: "Aynı gün veya ertesi gün taşıma organize edilir.",
      },
    ],
    faqIds: ["fiyat", "kapasite", "hamali", "sigorta"],
    relatedSlugs: [
      "beyaz-esya-tasima",
      "istanbul-panelvan-nakliye",
      "kucuk-yuk-tasima",
    ],
  },
  {
    slug: "beyaz-esya-tasima",
    title: "İstanbul Beyaz Eşya Taşıma",
    shortTitle: "Beyaz Eşya Taşıma",
    description:
      "Buzdolabı, çamaşır makinesi, fırın gibi hassas beyaz eşyalarınızı İstanbul içinde güvenle taşıyoruz. Dik taşıma garantisi ve özel koruma malzemeleriyle hasarsız teslimat.",
    shortDescription:
      "Buzdolabı, çamaşır makinesi gibi eşyaların hasarsız nakliyesi.",
    imageUrl: "/updatedimage/2.jpeg",
    icon: "kitchen",
    href: "/hizmetler/beyaz-esya-tasima",
    features: [
      "Dik taşıma garantisi",
      "Özel havalı naylon",
      "Kurulum desteği",
      "Hasarsız teslimat",
    ],
    metaTitle: "İstanbul Beyaz Eşya Taşıma | Panelvan ile Güvenli Taşıma",
    metaDescription:
      "İstanbul içi beyaz eşya taşıma. Buzdolabı, çamaşır makinesi, fırın taşımacılığı. Dik taşıma garantisi, özel koruma. Hemen teklif alın.",
    keywords: [
      "beyaz eşya taşıma İstanbul",
      "buzdolabı taşıma İstanbul",
      "çamaşır makinesi taşıma",
      "güvenli eşya nakliye",
    ],
    forWhom: [
      {
        icon: "kitchen",
        title: "Ev Değiştirenler",
        description: "Beyaz eşyalarını güvenle taşımak isteyenler için.",
      },
      {
        icon: "store",
        title: "Satıcı & Bayiler",
        description: "Müşteriye teslim edilen cihazlar için.",
      },
      {
        icon: "home",
        title: "Kiracılar",
        description: "Kısa mesafeli ev geçişlerinde beyaz eşya taşıma.",
      },
    ],
    whatCanBeTransported: [
      "Buzdolabı",
      "Çamaşır Makinesi",
      "Kurutma Makinesi",
      "Fırın & Ocak",
      "Bulaşık Makinesi",
      "Derin Dondurucu",
    ],
    advantages: [
      {
        icon: "straighten",
        title: "Dik Taşıma",
        description: "Kompresör hasarını önlemek için dik pozisyonda taşıma.",
      },
      {
        icon: "shield",
        title: "Özel Koruma",
        description: "Havalı naylon ve köpük ile tam koruma.",
      },
      {
        icon: "build",
        title: "Kurulum Desteği",
        description: "Talep halinde cihaz bağlantısı yardımı sağlıyoruz.",
      },
      {
        icon: "verified",
        title: "Hasarsız Garanti",
        description: "Titizlikle yüklenen eşyalar hasarsız teslim edilir.",
      },
    ],
    faqIds: ["fiyat", "beyaz-esya-tasinan", "hamali", "sigorta"],
    relatedSlugs: [
      "parca-esya-tasima",
      "istanbul-panelvan-nakliye",
      "kucuk-yuk-tasima",
    ],
  },
  {
    slug: "ogrenci-esyasi-tasima",
    title: "İstanbul Öğrenci Eşyası Taşıma",
    shortTitle: "Öğrenci Eşyası",
    description:
      "Öğrenci bütçesine uygun, hızlı ve güvenilir ev ve yurt taşıma hizmeti. Valiz, koli, küçük mobilyalar ve oda eşyalarınızı İstanbul içinde kolayca taşıyoruz.",
    shortDescription:
      "Öğrenciler için uygun fiyatlı yurt veya ev taşıma çözümleri.",
    imageUrl: "/updatedimage/2.jpeg",
    icon: "school",
    href: "/hizmetler/ogrenci-esyasi-tasima",
    features: [
      "Öğrenci dostu fiyat",
      "Valiz ve koli taşıma",
      "Haftasonu hizmet",
      "Hızlı planlama",
    ],
    metaTitle: "İstanbul Öğrenci Eşyası Taşıma | Ekonomik Panelvan Nakliye",
    metaDescription:
      "İstanbul öğrenci eşyası taşıma. Yurt, öğrenci evi taşımacılığı. Uygun fiyat, hızlı hizmet. Valiz, koli, mobilya taşıma. Hemen teklif alın.",
    keywords: [
      "öğrenci eşyası taşıma İstanbul",
      "yurt taşıma İstanbul",
      "öğrenci nakliye",
      "ucuz nakliye İstanbul",
    ],
    forWhom: [
      {
        icon: "school",
        title: "Üniversite Öğrencileri",
        description: "Yurt veya kiralık ev taşıma ihtiyacı olanlar.",
      },
      {
        icon: "home",
        title: "Yeni Mezunlar",
        description: "İlk evine veya yeni işine taşınanlar.",
      },
      {
        icon: "family_restroom",
        title: "Aileleri",
        description: "Şehirdeki çocuğunun eşyalarını taşımak isteyenler.",
      },
    ],
    whatCanBeTransported: [
      "Valiz & Bavullar",
      "Koliler",
      "Raf & Kitaplık",
      "Koltuk & Puf",
      "Yatak Takımı",
      "Küçük Elektronik",
    ],
    advantages: [
      {
        icon: "savings",
        title: "Uygun Fiyat",
        description: "Öğrenci bütçesine uygun şeffaf fiyatlandırma.",
      },
      {
        icon: "schedule",
        title: "Esnek Saatler",
        description: "Hafta içi ve haftasonları hizmet veriyoruz.",
      },
      {
        icon: "speed",
        title: "Hızlı Taşıma",
        description: "Ders saatlerinize göre planlama yapabilirsiniz.",
      },
      {
        icon: "handshake",
        title: "Güvenilir",
        description: "Eşyalarınız güvende, zamanında teslim edilir.",
      },
    ],
    faqIds: ["fiyat", "kapasite", "bolgeler", "hamali"],
    relatedSlugs: [
      "istanbul-panelvan-nakliye",
      "kucuk-yuk-tasima",
      "parca-esya-tasima",
    ],
  },
  {
    slug: "ofis-magaza-urunu-tasima",
    title: "İstanbul Ofis ve Mağaza Ürünü Taşıma",
    shortTitle: "Ofis & Mağaza",
    description:
      "Küçük ölçekli ofis taşımaları, mağaza içi transferler ve iş yeri malzeme sevkiyatları için İstanbul içi panelvan hizmeti. Kurumsal fatura ve düzenli sevkiyat planı.",
    shortDescription:
      "Küçük ölçekli ofis taşımaları ve mağaza içi transferler.",
    imageUrl: "/updatedimage/2.jpeg",
    icon: "storefront",
    href: "/hizmetler/ofis-magaza-urunu-tasima",
    features: [
      "Kurumsal fatura",
      "Düzenli sevkiyat planı",
      "Mesai dışı taşıma",
      "Hızlı planlama",
    ],
    metaTitle: "İstanbul Ofis ve Mağaza Ürünü Taşıma | Ülkü Lojistik",
    metaDescription:
      "İstanbul ofis ve mağaza taşıma. Küçük ofis transferi, mağaza ürün sevkiyatı. Kurumsal fatura, düzenli plan. Panelvan ile pratik çözüm. Teklif alın.",
    keywords: [
      "ofis taşıma İstanbul",
      "mağaza ürünü taşıma",
      "kurumsal nakliye İstanbul",
      "iş yeri taşıma",
    ],
    forWhom: [
      {
        icon: "business",
        title: "Ofis Sahipleri",
        description: "Küçük ölçekli ofis transferleri için.",
      },
      {
        icon: "storefront",
        title: "Mağaza Sahipleri",
        description: "Ürün ve malzeme sevkiyatları için pratik çözüm.",
      },
      {
        icon: "inventory",
        title: "E-Ticaret İşletmeleri",
        description: "Stok ve ürün transferleri için düzenli hizmet.",
      },
    ],
    whatCanBeTransported: [
      "Ofis Mobilyası",
      "Dosya & Arşiv",
      "Mağaza Ürünleri",
      "Ekipman",
      "Numuneler",
      "Paketler & Koliler",
    ],
    advantages: [
      {
        icon: "receipt_long",
        title: "Kurumsal Fatura",
        description: "KDV faturası ile muhasebe uyumlu hizmet.",
      },
      {
        icon: "repeat",
        title: "Düzenli Plan",
        description: "Haftalık veya aylık düzenli sevkiyat planı oluşturulabilir.",
      },
      {
        icon: "nightlight",
        title: "Mesai Dışı",
        description: "İş saatleri dışında taşıma imkânı.",
      },
      {
        icon: "speed",
        title: "Verimli",
        description: "İş süreçlerinizi aksatmadan hızlı taşıma.",
      },
    ],
    faqIds: ["fiyat", "kapasite", "bolgeler", "hamali"],
    relatedSlugs: [
      "istanbul-panelvan-nakliye",
      "kucuk-yuk-tasima",
      "istanbul-yuk-taksi",
    ],
  },
  {
    slug: "acil-panelvan-nakliye",
    title: "İstanbul Acil Panelvan Nakliye",
    shortTitle: "Acil Nakliye",
    description:
      "Beklemek istemeyenler için İstanbul'un her noktasına 60 dakika içinde araç yönlendiriyoruz. 7/24 acil panelvan nakliye hizmeti.",
    shortDescription:
      "Beklemek istemeyenler için en hızlı VIP gönderi hizmeti.",
    imageUrl: "/updatedimage/1.jpeg",
    icon: "emergency",
    href: "/hizmetler/acil-panelvan-nakliye",
    features: [
      "1 saatte kapınızda",
      "Doğrudan teslimat",
      "7/24 operasyon",
      "Ekspres fiyatlandırma",
    ],
    metaTitle: "İstanbul Acil Panelvan Nakliye | 7/24 Ekspres Taşıma",
    metaDescription:
      "İstanbul acil panelvan nakliye. 7/24 hizmet, 60 dakikada kapınızda. Ekspres taşıma, direkt teslimat. Hemen arayın veya WhatsApp'tan yazın.",
    keywords: [
      "acil nakliye İstanbul",
      "acil panelvan İstanbul",
      "ekspres taşıma İstanbul",
      "7/24 nakliye",
    ],
    forWhom: [
      {
        icon: "bolt",
        title: "Acil Durumlar",
        description: "Beklenmedik taşıma ihtiyaçları için 7/24 hizmet.",
      },
      {
        icon: "business_center",
        title: "İş Dünyası",
        description: "Acil ürün ve malzeme teslimatı için.",
      },
      {
        icon: "home",
        title: "Bireysel",
        description: "Planlanmamış ev ya da eşya taşıma ihtiyaçları.",
      },
    ],
    whatCanBeTransported: [
      "Her Türlü Yük",
      "Belgeler & Dosyalar",
      "Elektronik Cihazlar",
      "Küçük Mobilya",
      "Koliler",
      "Özel Eşyalar",
    ],
    advantages: [
      {
        icon: "flash_on",
        title: "60 Dakika Garanti",
        description: "Araç 60 dakika içinde kapınızda.",
      },
      {
        icon: "route",
        title: "Direkt Teslimat",
        description: "Durak olmadan, direkt varış noktasına.",
      },
      {
        icon: "schedule",
        title: "7/24 Hizmet",
        description: "Gece ya da gündüz, her zaman hizmetinizdeyiz.",
      },
      {
        icon: "support_agent",
        title: "Anlık İletişim",
        description: "WhatsApp ile anlık takip ve iletişim imkânı.",
      },
    ],
    faqIds: ["acil-sure", "fiyat", "bolgeler"],
    relatedSlugs: [
      "istanbul-yuk-taksi",
      "istanbul-panelvan-nakliye",
      "kucuk-yuk-tasima",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as Service[];
}
