import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { BottomCTA } from "@/components/sections/BottomCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: { canonical: `${siteConfig.domain}/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const dateFormatted = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />
      <ArticleJsonLd post={post} />

      <div className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Breadcrumb
              items={[
                { label: "Ana Sayfa", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
              className="mb-8"
            />

            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-[#E63900] bg-[#FFF0EB] px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-[#9CA3AF]">{post.readTime} dk okuma</span>
                <time className="text-xs text-[#9CA3AF]" dateTime={post.publishedAt}>
                  {dateFormatted}
                </time>
              </div>
              <h1 className="text-[28px] md:text-[36px] font-semibold text-[#111827] leading-tight tracking-tight mb-4">
                {post.title}
              </h1>
              <p className="text-[18px] text-[#6B7280] leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            {/* Article body placeholder */}
            <article className="prose max-w-none">
              <p className="text-[#6B7280] leading-relaxed mb-6">
                {post.excerpt} İstanbul içi minivan nakliye hizmetlerimiz hakkında daha fazla bilgi almak için{" "}
                <Link href="/hizmetler" className="text-[#E63900] hover:underline">
                  hizmetler sayfamızı
                </Link>{" "}
                ziyaret edebilirsiniz.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Sorularınız için{" "}
                <Link href="/iletisim" className="text-[#E63900] hover:underline">
                  bizimle iletişime geçin
                </Link>{" "}
                veya hemen{" "}
                <Link href="/teklif-al" className="text-[#E63900] hover:underline">
                  teklif alın
                </Link>.
              </p>
            </article>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280] mb-3">Etiketler:</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#F8F9FA] border border-[#E5E7EB] rounded-full text-xs text-[#6B7280]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <BottomCTA />
    </>
  );
}
