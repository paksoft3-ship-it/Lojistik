import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "whatsapp" | "urgent" | "muted";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-[#F8F9FA] text-[#6B7280] border-[#E5E7EB]",
    primary: "bg-[#FFF0EB] text-[#E63900] border-[#FECDB9]",
    whatsapp: "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]",
    urgent: "bg-[#FFFBEB] text-[#F59E0B] border-[#FDE68A]",
    muted: "bg-[#F8F9FA] text-[#6B7280] border-[#E5E7EB]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
