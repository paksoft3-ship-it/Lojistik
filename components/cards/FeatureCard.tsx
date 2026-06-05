import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  align = "left",
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 p-6 bg-white border border-[#E5E7EB] rounded-[14px]",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span
        className="material-symbols-outlined text-[#E63900] text-[36px]"
        aria-hidden="true"
      >
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-[#111827] text-[15px] mb-1">{title}</h3>
        <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
