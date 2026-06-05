import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({ children, className, hover = false, padding = "md" }: CardProps) {
  const paddingMap = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-white border border-[#E5E7EB] rounded-[14px]",
        paddingMap[padding],
        hover && "transition-colors duration-200 hover:border-[#E63900] cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
