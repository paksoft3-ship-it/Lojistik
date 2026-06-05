import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface TestimonialsProps {
  limit?: number;
  title?: string;
}

export function Testimonials({
  limit = 3,
  title = "Müşteri Yorumları",
}: TestimonialsProps) {
  const displayed = testimonials.slice(0, limit);

  return (
    <Section background="surface">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-[26px] md:text-[30px] font-semibold tracking-tight text-[#111827] mb-3">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined filled text-[#F59E0B] text-[18px]"
                  aria-hidden="true"
                >
                  star
                </span>
              ))}
            </div>
            <span className="text-sm text-[#6B7280]">
              4.9/5 ortalama puan — 500+ müşteri yorumu
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayed.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
