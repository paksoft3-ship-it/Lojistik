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
      "Büyük nakliye araçlarına yüksek ücretler ödemek yerine minivan ile parça eşya taşımanın ekonomik yolları ve avantajları.",
    category: "Rehber",
    tags: ["parça eşya", "minivan", "İstanbul nakliye", "ekonomik taşıma"],
    publishedAt: "2025-03-01",
    author: "UluLojistik Ekibi",
    readTime: 5,
    metaTitle: "İstanbul Parça Eşya Taşıma Avantajları | UluLojistik Blog",
    metaDescription:
      "İstanbul içi parça eşya taşımacılığında minivan kullanmanın avantajları. Ekonomik, hızlı ve pratik çözümler hakkında bilgi alın.",
    imageUrl: "/images/blog-parca-esya.png",
    imageAlt: "İstanbul sokaklarında beyaz minivan nakliye aracı",
  },
  {
    slug: "ogrenci-evi-tasima-rehberi",
    title: "Öğrenci Evi Taşıma Rehberi: İstanbul'da Bütçe Dostu Nakliye",
    excerpt:
      "İstanbul'da öğrenci evi taşırken dikkat etmeniz gerekenler ve bütçe dostu nakliye ipuçları.",
    category: "Rehber",
    tags: ["öğrenci taşıma", "uygun nakliye", "İstanbul", "yurt taşıma"],
    publishedAt: "2025-02-15",
    author: "UluLojistik Ekibi",
    readTime: 7,
    metaTitle: "Öğrenci Evi Taşıma Rehberi İstanbul | UluLojistik Blog",
    metaDescription:
      "İstanbul'da öğrenci evi taşımak için pratik ipuçları ve bütçe dostu minivan nakliye seçenekleri.",
    imageUrl: "/images/blog-ogrenci-rehber.png",
    imageAlt: "Öğrenci eşyaları ve kolilerle dolu minivan",
  },
  {
    slug: "yuk-taksi-nedir-nasil-cagrilir",
    title: "Yük Taksi Nedir? İstanbul'da Nasıl Çağrılır?",
    excerpt:
      "Şehir içi hızlı teslimatlar için kullanılan yük taksi sisteminin işleyişi ve kolaylıkları.",
    category: "Bilgi",
    tags: ["yük taksi", "İstanbul", "hızlı teslimat", "minivan"],
    publishedAt: "2025-01-20",
    author: "UluLojistik Ekibi",
    readTime: 4,
    metaTitle: "Yük Taksi Nedir? İstanbul'da Nasıl Çağrılır? | UluLojistik",
    metaDescription:
      "İstanbul yük taksi sistemi, nasıl çalışır ve nasıl çağrılır. Minivan yük taksi avantajları ve fiyatlandırma bilgisi.",
    imageUrl: "/images/blog-yuk-taksi.png",
    imageAlt: "İstanbul şehir içinde minivan yük taksi hizmeti",
  },
  {
    slug: "beyaz-esya-tasima-dikkat-edilecekler",
    title: "Beyaz Eşya Taşırken Dikkat Edilmesi Gerekenler",
    excerpt:
      "Buzdolabı, çamaşır makinesi ve diğer beyaz eşyaların güvenli taşınması için bilmeniz gereken ipuçları.",
    category: "Rehber",
    tags: ["beyaz eşya", "buzdolabı taşıma", "çamaşır makinesi", "güvenli taşıma"],
    publishedAt: "2025-01-05",
    author: "UluLojistik Ekibi",
    readTime: 6,
    metaTitle: "Beyaz Eşya Taşıma Rehberi | Güvenli Nakliye İpuçları",
    metaDescription:
      "Beyaz eşya taşırken dikkat edilmesi gerekenler. Buzdolabı, çamaşır makinesi taşıma rehberi ve güvenli nakliye ipuçları.",
    imageUrl: "/images/blog-beyaz-esya.png",
    imageAlt: "Beyaz eşya taşıma için hazırlanan minivan aracı",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getLatestBlogPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}
