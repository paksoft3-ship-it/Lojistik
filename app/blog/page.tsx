import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/cards/BlogCard";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Blog | İstanbul Minivan Nakliye Rehberi",
  description:
    "İstanbul minivan nakliye rehberi. Taşınma ipuçları, eşya koruma, ilçe rehberleri ve nakliye hakkında faydalı yazılar.",
  alternates: { canonical: `${siteConfig.domain}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      <InnerHero
        title="Blog & Bilgi Merkezi"
        description="İstanbul minivan nakliye rehberleri, taşınma ipuçları ve pratik bilgiler."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Blog" },
        ]}
        badge="Nakliye Rehberi"
      />

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
