"use client";

import { useEffect } from "react";
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
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-[#F0FDF4] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined filled text-[#16A34A] text-[40px]" aria-hidden="true">
              check_circle
            </span>
          </div>
          <h1 className="text-[28px] font-semibold text-[#111827] mb-3 tracking-tight">
            Teşekkürler!
          </h1>
          <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
            Talebiniz alındı. En kısa sürede sizi arayacağız veya WhatsApp üzerinden iletişime geçeceğiz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-6 py-3 rounded-[8px] transition-colors min-h-[44px]"
            >
              <WhatsAppIcon size={20} variant="white" />
              WhatsApp&apos;tan Yazın
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-[#E5E7EB] text-[#111827] hover:bg-[#F8F9FA] font-medium px-6 py-3 rounded-[8px] transition-colors min-h-[44px]"
            >
              Ana Sayfaya Dön
            </Link>
          </div>

          <p className="mt-8 text-sm text-[#9CA3AF]">
            Acil durumlarda bizi arayın:{" "}
            <Link href={siteConfig.phoneHref} className="text-[#E63900] font-medium hover:underline">
              {siteConfig.phone}
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

import { Suspense } from "react";

export default function TesekkurlerPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-[#6B7280]">Yükleniyor...</p>
        </div>
      }
    >
      <TesekkurlerContent />
    </Suspense>
  );
}
