import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-[#F8F9FA]">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated icon container */}
          <div className="flex justify-center mb-8">
            <div className="relative w-44 h-44 rounded-full bg-[#F8F9FA] border-2 border-[#E5E7EB] flex items-center justify-center shadow-sm">
              <span
                className="material-symbols-outlined text-[#E63900] animate-bounce"
                style={{ fontSize: "80px" }}
                aria-hidden="true"
              >
                location_off
              </span>
              <span
                className="material-symbols-outlined text-[#6B7280] absolute bottom-6 right-6"
                style={{ fontSize: "28px" }}
                aria-hidden="true"
              >
                box
              </span>
            </div>
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF0EB] text-[#E63900] text-xs font-semibold rounded-full border border-[#FECDB9] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E63900]" aria-hidden="true" />
            404 SAYFA BULUNAMADI
          </span>

          <h1 className="text-[28px] md:text-[40px] font-semibold text-[#111827] tracking-tight mb-4 leading-tight">
            Aradığınız Sayfaya Ulaşamadık
          </h1>

          <p className="text-[17px] text-[#6B7280] leading-relaxed mb-10 max-w-lg mx-auto">
            Görünüşe göre bu sayfa taşınmış veya silinmiş olabilir. Ancak İstanbul içi hızlı panelvan nakliye hizmetimiz kesintisiz devam ediyor.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-semibold px-7 py-3.5 rounded-[8px] transition-colors active:scale-95 min-h-[48px]"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">home</span>
              Ana Sayfaya Dön
            </Link>
            <Link
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-7 py-3.5 rounded-[8px] transition-colors active:scale-95 min-h-[48px]"
            >
              <WhatsAppIcon size={20} variant="white" />
              WhatsApp&apos;tan Yaz
            </Link>
            <Link
              href="/teklif-al"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#E5E7EB] text-[#111827] hover:bg-white hover:border-[#E63900] hover:text-[#E63900] font-semibold px-7 py-3.5 rounded-[8px] transition-colors min-h-[48px]"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">request_quote</span>
              Teklif Al
            </Link>
          </div>

          {/* Helpful links bento */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              href="/hizmetler/istanbul-panelvan-nakliye"
              className="flex flex-col items-center gap-2 bg-white border border-[#E5E7EB] rounded-[14px] p-5 hover:border-[#E63900] hover:shadow-sm transition-all group"
            >
              <span className="material-symbols-outlined text-[#E63900] text-[28px]" aria-hidden="true">airport_shuttle</span>
              <span className="text-sm font-medium text-[#111827] group-hover:text-[#E63900] transition-colors text-center leading-tight">Panelvan Nakliye</span>
            </Link>
            <Link
              href="/hizmetler"
              className="flex flex-col items-center gap-2 bg-white border border-[#E5E7EB] rounded-[14px] p-5 hover:border-[#E63900] hover:shadow-sm transition-all group"
            >
              <span className="material-symbols-outlined text-[#E63900] text-[28px]" aria-hidden="true">category</span>
              <span className="text-sm font-medium text-[#111827] group-hover:text-[#E63900] transition-colors text-center leading-tight">Tüm Hizmetler</span>
            </Link>
            <Link
              href="/bolgeler"
              className="flex flex-col items-center gap-2 bg-white border border-[#E5E7EB] rounded-[14px] p-5 hover:border-[#E63900] hover:shadow-sm transition-all group"
            >
              <span className="material-symbols-outlined text-[#E63900] text-[28px]" aria-hidden="true">location_on</span>
              <span className="text-sm font-medium text-[#111827] group-hover:text-[#E63900] transition-colors text-center leading-tight">Bölgeler</span>
            </Link>
            <Link
              href="/teklif-al"
              className="flex flex-col items-center gap-2 bg-white border border-[#E5E7EB] rounded-[14px] p-5 hover:border-[#E63900] hover:shadow-sm transition-all group"
            >
              <span className="material-symbols-outlined text-[#E63900] text-[28px]" aria-hidden="true">request_quote</span>
              <span className="text-sm font-medium text-[#111827] group-hover:text-[#E63900] transition-colors text-center leading-tight">Teklif Al</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
