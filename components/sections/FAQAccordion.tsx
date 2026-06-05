import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { FAQ } from "@/data/faq";
import Link from "next/link";

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  showLink?: boolean;
}

export function FAQAccordion({
  faqs,
  title = "Sıkça Sorulan Sorular",
  showLink = false,
}: FAQAccordionProps) {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[26px] md:text-[30px] font-semibold tracking-tight text-[#111827]">
              {title}
            </h2>
          </div>
          <Accordion items={faqs} />
          {showLink && (
            <div className="text-center mt-8">
              <Link
                href="/sss"
                className="text-[#E63900] font-medium hover:underline"
              >
                Tüm soruları gör →
              </Link>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
