export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: [
      {
        label: "Panelvan Nakliye",
        href: "/hizmetler/istanbul-panelvan-nakliye",
      },
      { label: "Yük Taksi", href: "/hizmetler/istanbul-yuk-taksi" },
      { label: "Küçük Yük Taşıma", href: "/hizmetler/kucuk-yuk-tasima" },
      { label: "Parça Eşya Taşıma", href: "/hizmetler/parca-esya-tasima" },
      { label: "Beyaz Eşya Taşıma", href: "/hizmetler/beyaz-esya-tasima" },
      {
        label: "Öğrenci Eşyası",
        href: "/hizmetler/ogrenci-esyasi-tasima",
      },
      {
        label: "Ofis & Mağaza",
        href: "/hizmetler/ofis-magaza-urunu-tasima",
      },
      { label: "Acil Nakliye", href: "/hizmetler/acil-panelvan-nakliye" },
    ],
  },
  {
    label: "Bölgeler",
    href: "/bolgeler",
    children: [
      {
        label: "Avrupa Yakası",
        href: "/bolgeler/avrupa-yakasi-panelvan-nakliye",
      },
      {
        label: "Anadolu Yakası",
        href: "/bolgeler/anadolu-yakasi-panelvan-nakliye",
      },
    ],
  },
  { label: "Araçlarımız", href: "/araclarimiz" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export const ctaNav: NavItem = {
  label: "Teklif Al",
  href: "/teklif-al",
};

export const footerNav = {
  hizmetler: [
    { label: "İstanbul Panelvan Nakliye", href: "/hizmetler/istanbul-panelvan-nakliye" },
    { label: "Yük Taksi", href: "/hizmetler/istanbul-yuk-taksi" },
    { label: "Parça Eşya Taşıma", href: "/hizmetler/parca-esya-tasima" },
    { label: "Beyaz Eşya Taşıma", href: "/hizmetler/beyaz-esya-tasima" },
    { label: "Öğrenci Eşyası Taşıma", href: "/hizmetler/ogrenci-esyasi-tasima" },
    { label: "Küçük Ofis Taşıma", href: "/hizmetler/ofis-magaza-urunu-tasima" },
    { label: "Acil Panelvan Nakliye", href: "/hizmetler/acil-panelvan-nakliye" },
  ],
  kurumsal: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Araçlarımız", href: "/araclarimiz" },
    { label: "Bölgeler", href: "/bolgeler" },
    { label: "Blog", href: "/blog" },
    { label: "SSS", href: "/sss" },
    { label: "İletişim", href: "/iletisim" },
  ],
  bolgeler: [
    { label: "Avrupa Yakası", href: "/bolgeler/avrupa-yakasi-panelvan-nakliye" },
    { label: "Anadolu Yakası", href: "/bolgeler/anadolu-yakasi-panelvan-nakliye" },
    { label: "Kadıköy", href: "/bolgeler/kadikoy" },
    { label: "Beşiktaş", href: "/bolgeler/besiktas" },
    { label: "Şişli", href: "/bolgeler/sisli" },
    { label: "Üsküdar", href: "/bolgeler/uskudar" },
  ],
};
