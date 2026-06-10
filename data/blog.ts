export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  tags: string[];
  publishedAt: string;
  modifiedAt?: string;
  author: string;
  readTime: number;
  metaTitle: string;
  metaDescription: string;
  imageUrl: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "istanbul-parca-esya-tasima-avantajlari",
    title: "İstanbul'da Parça Eşya Taşımanın Avantajları",
    excerpt:
      "Büyük nakliye araçlarına yüksek ücretler ödemek yerine panelvan ile parça eşya taşımanın ekonomik yolları ve avantajları.",
    category: "Rehber",
    tags: ["parça eşya", "panelvan", "İstanbul nakliye", "ekonomik taşıma"],
    publishedAt: "2025-03-01",
    author: "Ülkü Lojistik Ekibi",
    readTime: 5,
    metaTitle: "İstanbul Parça Eşya Taşıma Avantajları | Ülkü Lojistik Blog",
    metaDescription:
      "İstanbul içi parça eşya taşımacılığında panelvan kullanmanın avantajları. Ekonomik, hızlı ve pratik çözümler hakkında bilgi alın.",
    imageUrl: "/updatedimage/1.jpeg",
    imageAlt: "İstanbul sokaklarında beyaz panelvan nakliye aracı",
  },
  {
    slug: "ogrenci-evi-tasima-rehberi",
    title: "Öğrenci Evi Taşıma Rehberi: İstanbul'da Bütçe Dostu Nakliye",
    excerpt:
      "İstanbul'da öğrenci evi taşırken dikkat etmeniz gerekenler ve bütçe dostu nakliye ipuçları.",
    category: "Rehber",
    tags: ["öğrenci taşıma", "uygun nakliye", "İstanbul", "yurt taşıma"],
    publishedAt: "2025-02-15",
    author: "Ülkü Lojistik Ekibi",
    readTime: 7,
    metaTitle: "Öğrenci Evi Taşıma Rehberi İstanbul | Ülkü Lojistik Blog",
    metaDescription:
      "İstanbul'da öğrenci evi taşımak için pratik ipuçları ve bütçe dostu panelvan nakliye seçenekleri.",
    imageUrl: "/updatedimage/2.jpeg",
    imageAlt: "Öğrenci eşyaları ve kolilerle dolu panelvan",
  },
  {
    slug: "yuk-taksi-nedir-nasil-cagrilir",
    title: "Yük Taksi Nedir? İstanbul'da Nasıl Çağrılır?",
    excerpt:
      "Şehir içi hızlı teslimatlar için kullanılan yük taksi sisteminin işleyişi ve kolaylıkları.",
    category: "Bilgi",
    tags: ["yük taksi", "İstanbul", "hızlı teslimat", "panelvan"],
    publishedAt: "2025-01-20",
    author: "Ülkü Lojistik Ekibi",
    readTime: 4,
    metaTitle: "Yük Taksi Nedir? İstanbul'da Nasıl Çağrılır? | Ülkü Lojistik",
    metaDescription:
      "İstanbul yük taksi sistemi, nasıl çalışır ve nasıl çağrılır. Panelvan yük taksi avantajları ve fiyatlandırma bilgisi.",
    imageUrl: "/updatedimage/1.jpeg",
    imageAlt: "İstanbul şehir içinde panelvan yük taksi hizmeti",
  },
  {
    slug: "beyaz-esya-tasima-dikkat-edilecekler",
    title: "Beyaz Eşya Taşırken Dikkat Edilmesi Gerekenler",
    excerpt:
      "Buzdolabı, çamaşır makinesi ve diğer beyaz eşyaların güvenli taşınması için bilmeniz gereken ipuçları.",
    category: "Rehber",
    tags: ["beyaz eşya", "buzdolabı taşıma", "çamaşır makinesi", "güvenli taşıma"],
    publishedAt: "2025-01-05",
    author: "Ülkü Lojistik Ekibi",
    readTime: 6,
    metaTitle: "Beyaz Eşya Taşıma Rehberi | Güvenli Nakliye İpuçları",
    metaDescription:
      "Beyaz eşya taşırken dikkat edilmesi gerekenler. Buzdolabı, çamaşır makinesi taşıma rehberi ve güvenli nakliye ipuçları.",
    imageUrl: "/updatedimage/2.jpeg",
    imageAlt: "Beyaz eşya taşıma için hazırlanan panelvan aracı",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getLatestBlogPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}
