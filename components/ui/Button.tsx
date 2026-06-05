"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackPhoneClick, trackWhatsAppClick, trackCTAClick } from "@/lib/tracking";

type Variant = "primary" | "secondary" | "whatsapp" | "outline" | "urgent";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  trackingLocation?: string;
  trackingType?: "phone" | "whatsapp" | "cta";
  "aria-label"?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#E63900] hover:bg-[#C92F00] text-white border border-[#E63900] hover:border-[#C92F00]",
  secondary:
    "bg-transparent border border-[#111827] text-[#111827] hover:bg-[#F8F9FA]",
  whatsapp:
    "bg-[#16A34A] hover:bg-[#15803D] text-white border border-[#16A34A] hover:border-[#15803D]",
  outline:
    "bg-transparent border border-[#E5E7EB] text-[#111827] hover:bg-[#F8F9FA]",
  urgent:
    "bg-[#F59E0B] hover:bg-[#D97706] text-white border border-[#F59E0B] hover:border-[#D97706]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm font-medium rounded-[8px] min-h-[40px]",
  md: "px-6 py-3 text-[16px] font-medium leading-6 rounded-[8px] min-h-[44px]",
  lg: "px-8 py-4 text-[16px] font-medium leading-6 rounded-[8px] min-h-[52px]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled,
  trackingLocation,
  trackingType,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-150 active:scale-95 select-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  function handleClick() {
    if (trackingLocation) {
      const text = typeof children === "string" ? children : ariaLabel ?? "";
      if (trackingType === "phone") trackPhoneClick(trackingLocation, text);
      else if (trackingType === "whatsapp") trackWhatsAppClick(trackingLocation, text);
      else if (trackingType === "cta") trackCTAClick(trackingLocation, text, href ?? "");
    }
    onClick?.();
  }

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={baseClasses}
          onClick={handleClick}
          aria-label={ariaLabel}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          target={href.startsWith("http") ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses} onClick={handleClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
