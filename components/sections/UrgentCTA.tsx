import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function UrgentCTA() {
  return (
    <section className="py-10">
      <Container>
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-[20px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#F59E0B] text-white w-14 h-14 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                warning
              </span>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold text-[#111827] mb-1">
                Acil taşımanız mı var?
              </h3>
              <p className="text-[#6B7280]">
                Aynı gün, anında çıkış yapabilen araçlarımız için bizi hemen arayın.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0 flex-wrap">
            <Link
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium px-6 py-3 rounded-[8px] transition-colors whitespace-nowrap min-h-[44px]"
              aria-label="Bizi hemen arayın"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">call</span>
              Hemen Ara
            </Link>
            <Link
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-6 py-3 rounded-[8px] transition-colors whitespace-nowrap min-h-[44px]"
              aria-label="WhatsApp ile iletişime geçin"
            >
              <WhatsAppIcon size={20} variant="white" />
              WhatsApp
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
