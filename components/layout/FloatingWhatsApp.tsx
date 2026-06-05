"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { trackWhatsAppClick } from "@/lib/tracking";

export function FloatingWhatsApp() {
  return (
    <Link
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center w-14 h-14 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
      onClick={() => trackWhatsAppClick("floating_button")}
      aria-label="WhatsApp ile iletişime geçin"
    >
      <span className="material-symbols-outlined text-[28px] filled" aria-hidden="true">
        chat
      </span>
    </Link>
  );
}

export function MobileBottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[#E5E7EB]"
      aria-label="Mobil alt menü"
    >
      <div className="flex justify-around items-center h-16 px-2">
        <Link
          href={siteConfig.phoneHref}
          className="flex flex-col items-center justify-center gap-0.5 px-3 py-1 min-w-[64px] min-h-[44px] text-[#6B7280] hover:text-[#E63900] transition-colors"
          onClick={() => trackWhatsAppClick("mobile_bottom_nav")}
          aria-label="Bizi arayın"
        >
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            phone
          </span>
          <span className="text-[10px] font-medium">Ara</span>
        </Link>
        <Link
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 px-3 py-1 min-w-[64px] min-h-[44px] text-[#16A34A] hover:text-green-700 transition-colors"
          onClick={() => trackWhatsAppClick("mobile_bottom_nav")}
          aria-label="WhatsApp ile iletişime geçin"
        >
          <span className="material-symbols-outlined filled text-[22px]" aria-hidden="true">
            chat
          </span>
          <span className="text-[10px] font-medium">WhatsApp</span>
        </Link>
        <Link
          href="/teklif-al"
          className="flex flex-col items-center justify-center gap-0.5 px-3 py-1 min-w-[64px] min-h-[44px] bg-[#E63900] text-white rounded-[8px] active:scale-95"
          aria-label="Fiyat teklifi alın"
        >
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            request_quote
          </span>
          <span className="text-[10px] font-medium">Teklif Al</span>
        </Link>
      </div>
    </nav>
  );
}
