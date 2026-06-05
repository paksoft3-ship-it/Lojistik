import Link from "next/link";
import { getLatestBlogPosts } from "@/data/blog";
import { BlogCard } from "@/components/cards/BlogCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function BlogPreview() {
  const posts = getLatestBlogPosts(3);

  return (
    <Section background="surface">
      <Container>
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-[26px] md:text-[30px] font-semibold tracking-tight text-[#111827]">
            Blog &amp; Bilgi
          </h2>
          <Link
            href="/blog"
            className="text-[#E63900] font-medium hover:underline hidden sm:block text-sm"
          >
            Tümünü Gör →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/blog"
            className="text-[#E63900] font-medium hover:underline text-sm"
          >
            Tümünü Gör →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
