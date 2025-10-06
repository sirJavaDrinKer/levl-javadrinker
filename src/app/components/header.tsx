// components/Header.tsx

"use client";

import Dropdown from "./dropdown-nav";

export default function Header() {
  return (
    <header className="bg-stone-200 text-black p-4 text-center border-b-2 border-stone-300 flex items-center sticky top-0 z-50">
      <div className="w-1/3 text-left">
        <Dropdown
          options={
            [
              { label: "Home", value: "nav-home" },
              { label: "Guidelines", value: "nav-rules" }
            ]
          }
          onSelect={(value) => {
            if (value=="nav-home") {
              window.location.href = "/";
            } else if (value=="nav-rules") {
              window.location.href = "/guidelines"
            }
          }}
        />
      </div>
      <div className="w-1/3 text-center font-bold text-xl">LEVL</div>
      <div className="w-1/3"></div> 
    </header>
  );
}