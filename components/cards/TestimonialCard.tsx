import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-[#E5E7EB] rounded-[14px] p-6 flex flex-col gap-4",
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-0.5" aria-label={`${testimonial.rating} yıldız`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined filled text-[#F59E0B] text-[18px]"
            aria-hidden="true"
          >
            star
          </span>
        ))}
      </div>

      {/* Comment */}
      <blockquote className="text-sm text-[#6B7280] leading-relaxed italic flex-grow">
        &ldquo;{testimonial.comment}&rdquo;
      </blockquote>

      {/* Author */}
      <footer>
        <cite className="font-semibold text-[#111827] text-sm not-italic">
          {testimonial.name}
        </cite>
        {testimonial.district && (
          <p className="text-xs text-[#9CA3AF] mt-0.5">{testimonial.district}</p>
        )}
      </footer>
    </div>
  );
}
