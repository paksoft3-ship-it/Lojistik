import { FeatureCard } from "@/components/cards/FeatureCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const reasons = [
  {
    icon: "payments",
    title: "Ekonomik Taşıma",
    description:
      "Büyük araçlara yüksek ücretler ödemek yerine, sadece eşyanızın kapladığı alan kadar ödeyin.",
  },
  {
    icon: "traffic",
    title: "İstanbul Trafiğine Uygun",
    description:
      "Köprü ve tünel yasaklarına takılmaz, dar sokaklara rahatça girer, park sorunu yaşamaz.",
  },
  {
    icon: "schedule",
    title: "Hızlı Planlama",
    description:
      "Aynı gün içinde organize olur, eşyalarınızı beklemeden hemen yola çıkarırız.",
  },
  {
    icon: "view_in_ar",
    title: "Küçük Yükler İçin İdeal",
    description:
      "Birkaç parça eşya, öğrenci evi veya küçük ofis taşımaları için en optimum çözüm.",
  },
];

interface WhyMinivanProps {
  title?: string;
  description?: string;
}

export function WhyMinivan({
  title = "Neden Panelvan Tercih Etmelisiniz?",
  description = "Büyük kamyonetlerin giremediği sokaklara, trafiğe takılmadan ve daha uygun fiyatlarla ulaşın.",
}: WhyMinivanProps) {
  return (
    <Section background="surface">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-[26px] md:text-[30px] font-semibold tracking-tight text-[#111827] mb-4">
            {title}
          </h2>
          <p className="text-[17px] text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason) => (
            <FeatureCard
              key={reason.title}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              align="center"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
