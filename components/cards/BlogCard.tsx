import Link from "next/link";
import Image from "next/image";
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
      {/* Image */}
      <div className="relative h-44 w-full bg-[#F8F9FA] border-b border-[#E5E7EB] overflow-hidden">
        <Image
          src={post.imageUrl || "/updatedimage/2.jpeg"}
          alt={post.imageAlt || post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
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
