"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

export function TopBar() {
  return (
    <div className="hidden md:block bg-[#111827] text-white text-sm">
      <div className="mx-auto max-w-[1200px] px-8 py-2 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-gray-300">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              location_on
            </span>
            İstanbul içi 7/24 hızlı minivan nakliye
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
            onClick={() => trackPhoneClick("topbar")}
            aria-label={`Bizi arayın: ${siteConfig.phone}`}
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              phone
            </span>
            {siteConfig.phone}
          </Link>
          <Link
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#16A34A] hover:text-green-400 transition-colors"
            onClick={() => trackWhatsAppClick("topbar")}
            aria-label="WhatsApp ile iletişime geçin"
          >
            <span className="material-symbols-outlined text-[16px] filled" aria-hidden="true">
              chat
            </span>
            WhatsApp
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
            aria-label={`E-posta gönderin: ${siteConfig.email}`}
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              mail
            </span>
            {siteConfig.email}
          </Link>
        </div>
      </div>
    </div>
  );
}
