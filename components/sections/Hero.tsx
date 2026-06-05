import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Hero() {
  return (
    <section className="relative pt-10 pb-20 overflow-hidden bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] border border-[#E5E7EB] rounded-full text-sm text-[#6B7280]">
                <span className="material-symbols-outlined text-[#E63900] text-[18px]" aria-hidden="true">location_city</span>
                Sadece İstanbul İçi
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] border border-[#E5E7EB] rounded-full text-sm text-[#6B7280]">
                <span className="material-symbols-outlined text-[#E63900] text-[18px]" aria-hidden="true">local_shipping</span>
                Sadece Minivan
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] border border-[#E5E7EB] rounded-full text-sm text-[#6B7280]">
                <span className="material-symbols-outlined text-[#E63900] text-[18px]" aria-hidden="true">bolt</span>
                Aynı Gün Taşıma
              </span>
            </div>

            <h1 className="text-[32px] md:text-[48px] font-semibold leading-[1.15] tracking-tight text-[#111827]">
              İstanbul İçi Hızlı ve Ekonomik{" "}
              <span className="text-[#E63900]">Minivan Nakliye</span>
            </h1>

            <p className="text-[18px] text-[#6B7280] leading-relaxed max-w-xl">
              Sadece İstanbul içi, pratik, hızlı ve ekonomik taşıma çözümleri.
              Parça eşya, öğrenci eşyası, beyaz eşya ve ofis taşımacılığında
              güvenilir minivanlarımızla yanınızdayız.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/teklif-al"
                className="inline-flex items-center justify-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium text-[16px] px-8 py-4 rounded-[8px] transition-colors active:scale-95 min-h-[52px]"
              >
                Hemen Teklif Al
              </Link>
              <Link
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium text-[16px] px-8 py-4 rounded-[8px] transition-colors active:scale-95 min-h-[52px]"
                aria-label="WhatsApp ile teklif alın"
              >
                <WhatsAppIcon size={20} variant="white" />
                WhatsApp&apos;tan Yaz
              </Link>
            </div>

            {/* Trust bar */}
            <div className="flex items-center gap-6 pt-4 border-t border-[#F0F0F0] flex-wrap">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#F59E0B] text-[20px] filled" aria-hidden="true">star</span>
                <span className="text-sm font-medium text-[#111827]">4.9/5</span>
                <span className="text-sm text-[#6B7280]">500+ Müşteri</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E63900] text-[20px]" aria-hidden="true">timer</span>
                <span className="text-sm text-[#6B7280]">15 Dk Teklif</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E63900] text-[20px]" aria-hidden="true">verified</span>
                <span className="text-sm text-[#6B7280]">Aynı Gün Garanti</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative h-[360px] lg:h-[460px] rounded-[20px] bg-[#F8F9FA] border border-[#E5E7EB] overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #E63900 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden="true"
            />
            <div className="relative text-center">
              <span className="material-symbols-outlined text-[100px] text-[#E63900] opacity-20" aria-hidden="true">
                airport_shuttle
              </span>
              <p className="text-[#6B7280] text-sm mt-2">
                İstanbul&apos;un tüm ilçelerine minivan hizmet
              </p>
            </div>

            {/* Floating cards */}
            <div className="absolute top-6 left-6 bg-white rounded-[12px] border border-[#E5E7EB] px-4 py-3 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-full bg-[#F8F9FA] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#E63900] text-[18px]" aria-hidden="true">timer</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#111827]">15 Dk İçinde</p>
                <p className="text-xs text-[#6B7280]">Hızlı Teklif</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 bg-white rounded-[12px] border border-[#E5E7EB] px-4 py-3 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-full bg-[#F8F9FA] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#E63900] text-[18px]" aria-hidden="true">verified</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#111827]">Aynı Gün</p>
                <p className="text-xs text-[#6B7280]">Teslimat Garantisi</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
