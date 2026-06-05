import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  const dateFormatted = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col bg-white border border-[#E5E7EB] rounded-[14px] overflow-hidden hover:border-[#E63900] transition-colors duration-200",
        className
      )}
    >
      {/* Image placeholder */}
      <div className="h-44 bg-[#F8F9FA] flex items-center justify-center border-b border-[#E5E7EB]">
        <span className="material-symbols-outlined text-[48px] text-[#E5E7EB]" aria-hidden="true">
          article
        </span>
      </div>

      <div className="p-5 flex flex-col gap-2 flex-grow">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#E63900] bg-[#FFF0EB] px-2 py-0.5 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-[#9CA3AF]">{post.readTime} dk okuma</span>
        </div>
        <h3 className="font-semibold text-[#111827] text-[15px] leading-snug group-hover:text-[#E63900] transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2 flex-grow">
          {post.excerpt}
        </p>
        <time className="text-xs text-[#9CA3AF] mt-1" dateTime={post.publishedAt}>
          {dateFormatted}
        </time>
      </div>
    </Link>
  );
}
