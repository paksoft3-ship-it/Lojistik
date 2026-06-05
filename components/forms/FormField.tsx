import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, error, required, children, className }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="text-sm font-medium text-[#111827]">
        {label}
        {required && <span className="text-[#E63900] ml-0.5" aria-label="zorunlu">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputClass =
  "w-full bg-white border border-[#E5E7EB] rounded-[8px] px-4 py-2.5 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#E63900] focus:ring-1 focus:ring-[#E63900] transition-colors min-h-[44px]";

export const selectClass =
  "w-full bg-white border border-[#E5E7EB] rounded-[8px] px-4 py-2.5 text-[15px] text-[#111827] focus:outline-none focus:border-[#E63900] focus:ring-1 focus:ring-[#E63900] appearance-none transition-colors min-h-[44px] cursor-pointer";
