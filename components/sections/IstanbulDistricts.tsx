import Link from "next/link";
import { avrupa, anadolu } from "@/data/districts";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function IstanbulDistricts() {
  const featured = [
    ...anadolu.slice(0, 5).map((d) => d.name),
    ...avrupa.slice(0, 4).map((d) => d.name),
  ];

  return (
    <Section>
      <Container>
        <h2 className="text-center text-[26px] md:text-[30px] font-semibold tracking-tight text-[#111827] mb-8">
          İstanbul&apos;un Tüm İlçelerine Hizmet Veriyoruz
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {featured.map((district) => (
            <span
              key={district}
              className="bg-[#F8F9FA] border border-[#E5E7EB] px-4 py-2 rounded-full text-sm font-medium text-[#6B7280]"
            >
              {district}
            </span>
          ))}
          <Link
            href="/bolgeler"
            className="text-[#E63900] text-sm font-medium flex items-center gap-1 px-4 py-2 hover:underline"
          >
            + Tüm İstanbul İlçeleri
          </Link>
        </div>
      </Container>
    </Section>
  );
}
