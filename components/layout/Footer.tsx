import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/data/navigation";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="block mb-6 transition-opacity hover:opacity-90 inline-block w-fit"
              aria-label="Ülkü Lojistik Ana Sayfa"
            >
              <Image src="/darklogo.png" alt="Ülkü Lojistik Logo" width={210} height={70} className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              İstanbul içi parça eşya, koli, beyaz eşya ve öğrenci eşyası
              taşımacılığında hızlı ve ekonomik panelvan çözümleri.
            </p>
            <div className="space-y-2 text-sm">
              <Link
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-gray-400 hover:text-[#E63900] transition-colors"
                aria-label={`Telefon: ${siteConfig.phone}`}
              >
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  phone
                </span>
                {siteConfig.phone}
              </Link>
              <Link
                href={siteConfig.phoneHref2}
                className="flex items-center gap-2 text-gray-400 hover:text-[#E63900] transition-colors"
                aria-label={`Telefon: ${siteConfig.phone2}`}
              >
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  phone
                </span>
                {siteConfig.phone2}
              </Link>
              <Link
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label="WhatsApp ile iletişime geçin"
              >
                <WhatsAppIcon size={16} />
                <span className="text-[#25D366]">WhatsApp</span>
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  mail
                </span>
                {siteConfig.email}
              </Link>
              <p className="flex items-start gap-2 text-gray-400">
                <span className="material-symbols-outlined text-[16px] mt-0.5 shrink-0" aria-hidden="true">
                  location_on
                </span>
                <span>{siteConfig.address.full}</span>
              </p>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2.5">
              {footerNav.hizmetler.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#E63900] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Kurumsal</h3>
            <ul className="space-y-2.5">
              {footerNav.kurumsal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#E63900] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölgeler */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Hizmet Bölgeleri</h3>
            <ul className="space-y-2.5">
              {footerNav.bolgeler.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#E63900] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-3">7/24 Hızlı İletişim</p>
              <Link
                href="/teklif-al"
                className="inline-flex items-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white text-sm font-medium px-4 py-2 rounded-[8px] transition-colors"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-4">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs text-gray-500">
              © {currentYear} Ülkü Lojistik. Tüm Hakları Saklıdır. | Sadece İstanbul İçi Panelvan Nakliye
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-2 flex-1">
            <a
              href="https://paksoft.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group"
            >
              <span className="text-gray-500 text-xs mr-2 group-hover:text-[#E63900] transition-colors">Geliştirici:</span>
              <div className="flex items-center text-[#E63900] group-hover:text-[#C92F00] transition-colors">
                {/* Custom Crescent Icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 -rotate-12 mr-1">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.08-1.38-.7.13-1.42.21-2.16.21-5.52 0-10-4.48-10-10S9.42 2.83 14.92 2.83c.74 0 1.46.08 2.16.21C15.58 2.5 13.85 2 12 2z" />
                </svg>
                <span className="font-bold text-sm tracking-wide">PakSoft</span>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-end gap-4 text-xs text-gray-500 flex-1">
            <Link href="/sss" className="hover:text-gray-300 transition-colors">
              SSS
            </Link>
            <Link href="/iletisim" className="hover:text-gray-300 transition-colors">
              İletişim
            </Link>
            <Link href="/hakkimizda" className="hover:text-gray-300 transition-colors">
              Hakkımızda
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
