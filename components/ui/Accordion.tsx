"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-[#E5E7EB] rounded-[8px] bg-white overflow-hidden"
          >
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-[#E63900] focus-visible:ring-inset"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-${item.id}`}
            >
              <span className="font-medium text-[#111827] text-[15px] leading-snug">
                {item.question}
              </span>
              <span
                className={cn(
                  "material-symbols-outlined text-[#6B7280] flex-shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
                aria-hidden="true"
              >
                expand_more
              </span>
            </button>
            <div
              id={`accordion-${item.id}`}
              role="region"
              hidden={!isOpen}
              className="px-5 pb-4 text-[#6B7280] text-sm leading-relaxed"
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
