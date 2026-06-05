import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <span className="material-symbols-outlined text-[80px] text-[#E63900] opacity-30 mb-4 block" aria-hidden="true">
            airport_shuttle
          </span>
          <h1 className="text-[28px] font-semibold text-[#111827] mb-3">
            Sayfa Bulunamadı
          </h1>
          <p className="text-[#6B7280] mb-8 leading-relaxed">
            Aradığınız sayfayı bulamadık. Minivan&apos;ımız yanlış yola girmiş olabilir!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium px-6 py-3 rounded-[8px] transition-colors min-h-[44px]"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/teklif-al"
              className="inline-flex items-center justify-center gap-2 border border-[#E5E7EB] text-[#111827] hover:bg-[#F8F9FA] font-medium px-6 py-3 rounded-[8px] transition-colors min-h-[44px]"
            >
              Teklif Al
            </Link>
            <Link
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-6 py-3 rounded-[8px] transition-colors min-h-[44px]"
            >
              <WhatsAppIcon size={20} className="brightness-0 invert" />
              WhatsApp
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
