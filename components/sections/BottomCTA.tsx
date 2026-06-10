import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface BottomCTAProps {
  title?: string;
  description?: string;
}

export function BottomCTA({
  title = "İstanbul İçi Yükünüzü Hemen Taşıyalım",
  description = "Büyük araçlara yüksek ücretler ödemeyin. Hızlı, ekonomik ve pratik panelvan nakliye için hemen teklif alın.",
}: BottomCTAProps) {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8">
      <Container>
        <div className="bg-[#E63900] rounded-[20px] p-8 md:p-12 text-center flex flex-col items-center gap-6">
          <h2 className="text-[28px] md:text-[40px] font-semibold text-white leading-tight tracking-tight max-w-2xl">
            {title}
          </h2>
          <p className="text-[17px] text-white/90 max-w-xl leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center">
            <Link
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#E63900] font-semibold px-8 py-4 rounded-[8px] hover:bg-gray-50 transition-colors active:scale-95 min-h-[52px]"
              aria-label={`Bizi arayın: ${siteConfig.phone}`}
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">call</span>
              Hemen Arayın
            </Link>
            <Link
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-8 py-4 rounded-[8px] transition-colors active:scale-95 min-h-[52px]"
              aria-label="WhatsApp ile iletişime geçin"
            >
              <WhatsAppIcon size={20} variant="white" />
              WhatsApp&apos;tan Yazın
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
