"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { trackLeadSuccess } from "@/lib/tracking";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

function TesekkurlerContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source") ?? "quote_form";

  useEffect(() => {
    trackLeadSuccess({ source });
  }, [source]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-[#F8F9FA]">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          {/* Green check circle */}
          <div className="w-24 h-24 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <span
              className="material-symbols-outlined filled text-white"
              style={{ fontSize: "48px" }}
              aria-hidden="true"
            >
              check
            </span>
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F0FDF4] text-[#16A34A] text-xs font-semibold rounded-full border border-[#BBF7D0] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" aria-hidden="true" />
            Talebiniz Alındı
          </span>

          <h1 className="text-[28px] md:text-[36px] font-semibold text-[#111827] mb-4 tracking-tight">
            Teklif Talebiniz Alındı
          </h1>

          <p className="text-[17px] text-[#6B7280] leading-relaxed mb-10">
            İstanbul içi minivan nakliye teklifiniz için en kısa sürede sizinle iletişime geçeceğiz.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-7 py-3.5 rounded-[8px] transition-colors active:scale-95 min-h-[48px]"
            >
              <WhatsAppIcon size={20} variant="white" />
              WhatsApp&apos;tan Hızlı Yaz
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-semibold px-7 py-3.5 rounded-[8px] transition-colors active:scale-95 min-h-[48px]"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">home</span>
              Ana Sayfaya Dön
            </Link>
          </div>

          {/* Phone note */}
          <p className="text-sm text-[#9CA3AF]">
            Acil durumlarda bizi arayın:{" "}
            <Link href={siteConfig.phoneHref} className="text-[#E63900] font-semibold hover:underline">
              {siteConfig.phone}
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default function TesekkurlerPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center bg-[#F8F9FA]">
          <p className="text-[#6B7280]">Yükleniyor...</p>
        </div>
      }
    >
      <TesekkurlerContent />
    </Suspense>
  );
}
