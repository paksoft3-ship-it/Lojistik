import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "surface" | "dark";
  id?: string;
}

export function Section({
  children,
  className,
  background = "white",
  id,
}: SectionProps) {
  const bgMap = {
    white: "bg-white",
    surface: "bg-[#F8F9FA]",
    dark: "bg-[#111827] text-white",
  };

  return (
    <section
      id={id}
      className={cn("py-12 md:py-16 lg:py-20", bgMap[background], className)}
    >
      {children}
    </section>
  );
}
