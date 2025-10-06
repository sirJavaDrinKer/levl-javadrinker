// components/Header.tsx

"use client";

import Dropdown from "./dropdown";

export default function Header() {
  return (
    <header className="bg-stone-200 text-black p-4 text-center border-b-2 border-stone-300 flex items-center sticky top-0 z-50">
      <div className="w-1/3 text-left">
        {/* The Dropdown component and its onSelect prop are now inside a Client Component */}
        <Dropdown
          options={[{ label: "Home", value: "nav-home" }]}
          onSelect={(value) => {
            console.log("Selected:", value);
          }}
        />
      </div>
      <div className="w-1/3 text-center font-bold text-xl">LEVL</div>
      <div className="w-1/3"></div> {/* Empty div for spacing */}
    </header>
  );
}