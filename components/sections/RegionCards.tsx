import Link from "next/link";
import { avrupa, anadolu } from "@/data/districts";
import { Container } from "@/components/ui/Container";

export function RegionCards() {
  return (
    <section className="py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-[20px] p-8 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#E63900] text-[24px]" aria-hidden="true">
                  location_on
                </span>
                <h3 className="text-[22px] font-semibold text-[#111827]">
                  Avrupa Yakası Nakliye
                </h3>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Avrupa yakasındaki tüm ilçeler için hızlı panelvan araçlarımız her
                an hazır.
              </p>
              <p className="text-sm text-[#9CA3AF]">
                {avrupa
                  .slice(0, 6)
                  .map((d) => d.name)
                  .join(", ")}{" "}
                ve daha fazlası...
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/bolgeler/avrupa-yakasi-panelvan-nakliye"
                className="inline-flex items-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium px-5 py-2.5 rounded-[8px] transition-colors active:scale-95 text-sm"
              >
                Teklif Al
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-[20px] p-8 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#E63900] text-[24px]" aria-hidden="true">
                  location_on
                </span>
                <h3 className="text-[22px] font-semibold text-[#111827]">
                  Anadolu Yakası Nakliye
                </h3>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Anadolu yakasından İstanbul&apos;un her yerine güvenilir ve pratik
                taşıma.
              </p>
              <p className="text-sm text-[#9CA3AF]">
                {anadolu
                  .slice(0, 6)
                  .map((d) => d.name)
                  .join(", ")}{" "}
                ve daha fazlası...
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/bolgeler/anadolu-yakasi-panelvan-nakliye"
                className="inline-flex items-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium px-5 py-2.5 rounded-[8px] transition-colors active:scale-95 text-sm"
              >
                Teklif Al
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
