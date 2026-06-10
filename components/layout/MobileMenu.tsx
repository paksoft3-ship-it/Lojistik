"use client";

import Link from "next/link";
import { mainNav, ctaNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import Image from "next/image";

export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="md:hidden flex items-center justify-center w-10 h-10 rounded-[8px] text-[#111827] hover:bg-[#F8F9FA] transition-colors"
      onClick={onClick}
      aria-label="Menüyü aç"
    >
      <span className="material-symbols-outlined" aria-hidden="true">
        menu
      </span>
    </button>
  );
}

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-xl transform transition-transform duration-300 md:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#E5E7EB]">
          <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-90"
            onClick={onClose}
          >
            <Image src="/logo.png" alt="Ülkü Lojistik Logo" width={180} height={60} className="h-8 w-auto object-contain" priority />
          </Link>
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-[8px] hover:bg-[#F8F9FA] transition-colors"
            onClick={onClose}
            aria-label="Menüyü kapat"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        {/* Nav */}
        <nav className="px-4 py-4">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 rounded-[8px] text-[#111827] hover:bg-[#F8F9FA] hover:text-[#E63900] font-medium transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-1 ml-4 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-3 py-2 rounded-[8px] text-sm text-[#6B7280] hover:bg-[#F8F9FA] hover:text-[#E63900] transition-colors"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-6 space-y-3">
            <Link
              href={ctaNav.href}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium rounded-[8px] transition-colors"
              onClick={onClose}
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                request_quote
              </span>
              Teklif Al
            </Link>
            <Link
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium rounded-[8px] transition-colors"
              onClick={() => {
                trackWhatsAppClick("mobile_menu");
                onClose();
              }}
            >
              <WhatsAppIcon size={18} variant="white" />
              WhatsApp&apos;tan Yaz
            </Link>
            <Link
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 w-full py-3 border border-[#E5E7EB] text-[#111827] font-medium rounded-[8px] hover:bg-[#F8F9FA] transition-colors"
              onClick={() => { trackPhoneClick("mobile_menu"); onClose(); }}
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">phone</span>
              {siteConfig.phone}
            </Link>
            <Link
              href={siteConfig.phoneHref2}
              className="flex items-center justify-center gap-2 w-full py-3 border border-[#E5E7EB] text-[#111827] font-medium rounded-[8px] hover:bg-[#F8F9FA] transition-colors"
              onClick={() => { trackPhoneClick("mobile_menu"); onClose(); }}
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">phone</span>
              {siteConfig.phone2}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
