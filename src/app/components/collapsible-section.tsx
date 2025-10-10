"use client";

import { useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col gap-4 bg-stone-300 rounded-3xl shadow-md">
      <div
        className="w-full text-center cursor-pointer select-none flex justify-center items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
