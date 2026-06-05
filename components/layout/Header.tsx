"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, ctaNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu, MobileMenuButton } from "./MobileMenu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-[#E5E7EB] shadow-none">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#111827] shrink-0"
            aria-label="UluLojistik - Ana Sayfa"
          >
            <span className="text-[#E63900]">Ulu</span>Lojistik
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Ana menü">
            {mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[15px] font-medium transition-colors",
                    isActive
                      ? "text-[#E63900] border-b-2 border-[#E63900] pb-0.5"
                      : "text-[#6B7280] hover:text-[#E63900]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <Link
              href={ctaNav.href}
              className="inline-flex items-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium text-[15px] px-5 py-2.5 rounded-[8px] transition-colors active:scale-95"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile Toggle */}
          <MobileMenuButton onClick={() => setMobileOpen(true)} />
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
