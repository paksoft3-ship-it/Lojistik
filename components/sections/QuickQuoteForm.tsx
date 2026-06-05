import { QuoteForm } from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";

interface QuickQuoteFormProps {
  serviceSlug?: string;
  defaultDistrict?: string;
}

export function QuickQuoteForm({ serviceSlug, defaultDistrict }: QuickQuoteFormProps) {
  return (
    <section className="relative z-20 pb-10">
      <Container>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 md:p-8 shadow-sm">
          <h2 className="text-[22px] font-semibold text-[#111827] mb-6">
            Hızlı Teklif Alın
          </h2>
          <QuoteForm serviceSlug={serviceSlug} defaultDistrict={defaultDistrict} compact />
        </div>
      </Container>
    </section>
  );
}
