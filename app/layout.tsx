import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp, MobileBottomNav } from "@/components/layout/FloatingWhatsApp";
import { GTMScript, GTMNoscript } from "@/components/tracking/GTM";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `İstanbul Minivan Nakliye | ${siteConfig.brandName}`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.mainDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.domain,
    siteName: siteConfig.brandName,
    title: `İstanbul Minivan Nakliye | ${siteConfig.brandName}`,
    description: siteConfig.mainDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `İstanbul Minivan Nakliye | ${siteConfig.brandName}`,
    description: siteConfig.mainDescription,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <GTMScript />
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-white font-sans pb-16 md:pb-0">
        <GTMNoscript />
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomNav />
      </body>
    </html>
  );
}
