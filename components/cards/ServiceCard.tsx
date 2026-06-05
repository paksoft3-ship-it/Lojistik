import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  features?: string[];
  highlighted?: boolean;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  features,
  highlighted = false,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-4 p-6 rounded-[14px] border transition-colors duration-200 hover:border-[#E63900] bg-white",
        highlighted
          ? "border-[#E63900] bg-[#FFF8F6]"
          : "border-[#E5E7EB]",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-[8px] flex items-center justify-center",
          highlighted ? "bg-[#E63900]" : "bg-[#F8F9FA]"
        )}
      >
        <span
          className={cn(
            "material-symbols-outlined text-[24px]",
            highlighted ? "text-white" : "text-[#E63900]"
          )}
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>

      <div>
        <h3
          className={cn(
            "font-semibold text-[15px] mb-1.5",
            highlighted ? "text-[#E63900]" : "text-[#111827]"
          )}
        >
          {title}
        </h3>
        <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
      </div>

      {features && features.length > 0 && (
        <ul className="space-y-1.5 mt-1">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-[#6B7280]">
              <span className="material-symbols-outlined text-[#E63900] text-[14px]" aria-hidden="true">
                check_circle
              </span>
              {f}
            </li>
          ))}
        </ul>
      )}

      <span className="mt-auto text-sm font-medium text-[#E63900] flex items-center gap-1 group-hover:gap-2 transition-all">
        Detaylı Bilgi
        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
          arrow_forward
        </span>
      </span>
    </Link>
  );
}
