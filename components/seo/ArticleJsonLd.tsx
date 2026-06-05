import { JsonLd } from "./JsonLd";
import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/data/blog";

interface ArticleJsonLdProps {
  post: BlogPost;
}

export function ArticleJsonLd({ post }: ArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.domain,
    },
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt ?? post.publishedAt,
    url: `${siteConfig.domain}/blog/${post.slug}`,
    mainEntityOfPage: `${siteConfig.domain}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return <JsonLd data={schema} />;
}
