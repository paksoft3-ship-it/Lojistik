import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { faqs } from "@/data/faq";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { InnerHero } from "@/components/sections/InnerHero";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FAQJsonLd } from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | İstanbul Minivan Nakliye SSS",
  description:
    "UluLojistik İstanbul minivan nakliye SSS. Fiyat, kapasite, hizmet bölgeleri, hamaliye ve daha fazlası hakkında sık sorulan sorular.",
  alternates: { canonical: `${siteConfig.domain}/sss` },
};

export default function SSSPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "SSS", href: "/sss" },
        ]}
      />
      <FAQJsonLd faqs={faqs} />

      <InnerHero
        title="Sıkça Sorulan Sorular"
        description="İstanbul içi minivan nakliye hizmetlerimiz hakkında merak edilen sorular ve cevapları."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "SSS" },
        ]}
        badge="SSS"
      />

      <section className="py-14">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>

      <BottomCTA />
    </>
  );
}
