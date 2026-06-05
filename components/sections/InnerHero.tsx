import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

interface InnerHeroProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  badge?: string;
}

export function InnerHero({
  title,
  description,
  breadcrumbs,
  primaryCTA,
  secondaryCTA,
  badge,
}: InnerHeroProps) {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#E5E7EB]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <Breadcrumb items={breadcrumbs} />

            {badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF0EB] text-[#E63900] text-xs font-medium rounded-full border border-[#FECDB9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63900]" aria-hidden="true" />
                {badge}
              </span>
            )}

            <h1 className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-tight text-[#111827]">
              {title}
            </h1>

            <p className="text-[17px] text-[#6B7280] leading-relaxed max-w-xl">
              {description}
            </p>

            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-wrap gap-4 pt-2">
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className="inline-flex items-center gap-2 bg-[#E63900] hover:bg-[#C92F00] text-white font-medium px-6 py-3 rounded-[8px] transition-colors active:scale-95 min-h-[44px]"
                  >
                    {primaryCTA.label}
                  </Link>
                )}
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className="inline-flex items-center gap-2 border border-[#E5E7EB] text-[#111827] hover:bg-[#F8F9FA] font-medium px-6 py-3 rounded-[8px] transition-colors min-h-[44px]"
                  >
                    {secondaryCTA.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Visual placeholder */}
          <div className="hidden md:flex h-[280px] rounded-[14px] bg-[#F8F9FA] border border-[#E5E7EB] items-center justify-center">
            <span className="material-symbols-outlined text-[80px] text-[#E63900] opacity-20" aria-hidden="true">
              airport_shuttle
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
