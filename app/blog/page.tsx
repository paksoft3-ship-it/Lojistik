import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/data/blog";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Blog | İstanbul Minivan Nakliye Rehberi – UluLojistik",
  description:
    "İstanbul minivan nakliye rehberi, taşınma ipuçları, ilçe rehberleri ve nakliye fiyatları hakkında faydalı yazılar. UluLojistik Blog.",
  alternates: { canonical: `${siteConfig.domain}/blog` },
};

const categories = [
  "Tüm Yazılar",
  "Minivan Nakliye",
  "Küçük Yük Taşıma",
  "Parça Eşya",
  "Beyaz Eşya",
  "Öğrenci Eşyası",
  "Fiyat Rehberi",
  "İstanbul İlçeleri",
  "Acil Taşıma",
];

const popularTopics = [
  { label: "İstanbul Minivan Nakliye Fiyatları", href: "/blog/istanbul-parca-esya-tasima-avantajlari" },
  { label: "Öğrenci Evi Taşıma Rehberi", href: "/blog/ogrenci-evi-tasima-rehberi" },
  { label: "Beyaz Eşya Taşıma İpuçları", href: "/blog/beyaz-esya-tasima-dikkat-edilecekler" },
  { label: "Yük Taksi Nedir?", href: "/blog/yuk-taksi-nedir-nasil-cagrilir" },
];

// Extra placeholder articles
const extraArticles = [
  {
    slug: "istanbul-minivan-nakliye-fiyatlari",
    title: "İstanbul İçi Minivan Nakliye Fiyatları",
    excerpt: "2025 yılı İstanbul içi minivan nakliye fiyatları, hangi faktörler fiyatı etkiler ve nasıl uygun teklif alınır?",
    category: "Fiyat Rehberi",
    readTime: 3,
  },
  {
    slug: "kucuk-yuk-tasima-avantajlari",
    title: "Küçük Yük Taşımanın Avantajları",
    excerpt: "Büyük kamyon kiralamak yerine minivan ile küçük yük taşımak neden daha mantıklı? Avantajları ve tasarruf ipuçları.",
    category: "Küçük Yük",
    readTime: 2,
  },
  {
    slug: "parca-esya-tasima-nedir",
    title: "Parça Eşya Taşıma Nedir?",
    excerpt: "Parça eşya taşımacılığı ne anlama gelir, kimlere uygun, fiyatlandırma nasıl yapılır? Tüm detaylar bu rehberde.",
    category: "Parça Eşya",
    readTime: 4,
  },
  {
    slug: "guvenli-beyaz-esya-tasima",
    title: "Güvenli Beyaz Eşya Taşıma",
    excerpt: "Buzdolabı, çamaşır makinesi ve diğer beyaz eşyaları güvenle taşımanın yöntemleri ve profesyonel öneriler.",
    category: "Beyaz Eşya",
    readTime: 3,
  },
  {
    slug: "ogrenci-esyasi-nasil-ucuza-tasinir",
    title: "Öğrenci Eşyası Nasıl Ucuza Taşınır?",
    excerpt: "İstanbul'da üniversite dönemlerinde ev ya da yurt taşımasını bütçe dostu bir şekilde yapmanın pratik yolları.",
    category: "Öğrenci Eşyası",
    readTime: 5,
  },
];

export default function BlogPage() {
  const allArticles = [
    ...extraArticles,
    ...blogPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      readTime: p.readTime,
    })),
  ];

  const featuredPost = blogPosts[0];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      <InnerHero
        title="Blog / İstanbul Minivan Nakliye Rehberi"
        description="Taşınma ipuçları, fiyat rehberleri, ilçe bilgileri ve minivan nakliye hakkında faydalı içerikler."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Blog" },
        ]}
        badge="Nakliye Rehberi"
      />

      <section className="py-12">
        <Container>
          {/* Search */}
          <div className="relative mb-6 max-w-lg">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280] text-[20px] pointer-events-none"
              aria-hidden="true"
            >
              search
            </span>
            <input
              type="search"
              placeholder="Blogda ara..."
              className="w-full bg-white border border-[#E5E7EB] rounded-[10px] pl-10 pr-4 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#E63900] focus:ring-1 focus:ring-[#E63900] transition-colors"
              aria-label="Blogda ara"
            />
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={cat}
                type="button"
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-[#E63900] text-white"
                    : "bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#E63900] hover:text-[#E63900]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Posts area */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured article */}
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden hover:border-[#E63900] hover:shadow-sm transition-all">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Image placeholder */}
                  <div className="flex items-center justify-center bg-[#F8F9FA] min-h-[200px]">
                    <span
                      className="material-symbols-outlined text-[#E63900] opacity-30"
                      style={{ fontSize: "72px" }}
                      aria-hidden="true"
                    >
                      airport_shuttle
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col justify-center">
                    <span className="inline-block px-2.5 py-1 bg-[#FFF0EB] text-[#E63900] text-xs font-medium rounded-full border border-[#FECDB9] mb-3 w-fit">
                      Minivan Nakliye
                    </span>
                    <h2 className="text-[18px] font-semibold text-[#111827] mb-3 leading-snug">
                      İstanbul&apos;da Minivan Nakliye Ne Zaman Tercih Edilir?
                    </h2>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                      Küçük hacimli taşımalarda büyük araç kiralamak gereksiz maliyet yaratır. Minivan nakliyenin avantajlarını keşfedin.
                    </p>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="text-[#E63900] font-medium text-sm hover:underline inline-flex items-center gap-1"
                    >
                      Rehberi Oku
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Articles grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {allArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="bg-white border border-[#E5E7EB] rounded-[14px] p-5 flex flex-col gap-3 hover:border-[#E63900] hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 bg-[#F8F9FA] text-[#6B7280] text-xs font-medium rounded-full border border-[#E5E7EB]">
                        {article.category}
                      </span>
                      <span className="text-xs text-[#9CA3AF] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]" aria-hidden="true">schedule</span>
                        {article.readTime} dk okuma
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#111827] text-[15px] leading-snug group-hover:text-[#E63900] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <span className="text-[#E63900] text-sm font-medium inline-flex items-center gap-1 mt-auto">
                      Devamını Oku
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
              {/* Quick quote widget */}
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6">
                <h3 className="font-semibold text-[#111827] mb-4">Hızlı Teklif</h3>
                <div className="space-y-3">
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280] text-[18px] pointer-events-none"
                      aria-hidden="true"
                    >
                      location_on
                    </span>
                    <input
                      type="text"
                      placeholder="Nereden"
                      className="w-full bg-[#F8F9FA] border border-[#E5E7EB] rounded-[8px] pl-9 pr-4 py-2.5 text-[14px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#E63900] transition-colors min-h-[44px]"
                    />
                  </div>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280] text-[18px] pointer-events-none"
                      aria-hidden="true"
                    >
                      location_on
                    </span>
                    <input
                      type="text"
                      placeholder="Nereye"
                      className="w-full bg-[#F8F9FA] border border-[#E5E7EB] rounded-[8px] pl-9 pr-4 py-2.5 text-[14px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#E63900] transition-colors min-h-[44px]"
                    />
                  </div>
                  <Link
                    href="/teklif-al"
                    className="inline-flex items-center justify-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium px-5 py-3 rounded-[8px] transition-colors w-full text-sm min-h-[44px]"
                  >
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">request_quote</span>
                    Teklif İste
                  </Link>
                </div>
              </div>

              {/* Popular topics */}
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6">
                <h3 className="font-semibold text-[#111827] mb-4">Popüler Konular</h3>
                <ul className="space-y-3">
                  {popularTopics.map((topic) => (
                    <li key={topic.label}>
                      <Link
                        href={topic.href}
                        className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#E63900] transition-colors group"
                      >
                        <span className="material-symbols-outlined text-[16px] text-[#E63900]" aria-hidden="true">
                          chevron_right
                        </span>
                        <span className="group-hover:underline">{topic.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="bg-[#FFF0EB] border border-[#FECDB9] rounded-[16px] p-6 text-center">
                <span className="material-symbols-outlined text-[#E63900] text-[32px] mb-3 block" aria-hidden="true">
                  airport_shuttle
                </span>
                <h3 className="font-semibold text-[#111827] mb-2">Hemen Taşıyalım</h3>
                <p className="text-sm text-[#6B7280] mb-4">İstanbul içi minivan nakliye için ücretsiz teklif alın.</p>
                <Link
                  href="/teklif-al"
                  className="inline-flex items-center justify-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium px-5 py-2.5 rounded-[8px] transition-colors w-full text-sm min-h-[44px]"
                >
                  Teklif Al
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
