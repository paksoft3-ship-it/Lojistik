import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface ServicesGridProps {
  title?: string;
  description?: string;
  limit?: number;
}

export function ServicesGrid({
  title = "İstanbul İçi Panelvan Nakliye Hizmetlerimiz",
  description = "Büyük kamyonlara gerek duymadan, şehrin dar sokaklarına girebilen panelvanlarımızla sunduğumuz hizmetler.",
  limit,
}: ServicesGridProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <Section>
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
          {displayedServices.map((service, index) => (
            <ServiceCard
              key={service.slug}
              title={service.shortTitle}
              description={service.shortDescription}
              icon={service.icon}
              href={service.href}
              features={service.features.slice(0, 2)}
              highlighted={index === displayedServices.length - 1 && service.slug === "acil-panelvan-nakliye"}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
