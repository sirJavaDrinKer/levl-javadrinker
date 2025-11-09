"use client";
import Link from "next/link";



import Dropdown from "./dropdown-nav";

export default function Header() {
  return (
    <header className="bg-stone-200 text-black p-4 text-center border-b-2 border-stone-300 flex items-center sticky top-0 z-50">
      <div className="w-1/3 text-left">
        <Dropdown
          options={
            [
              { label: "Home", value: "nav-home" },
              { label: "Guidelines", value: "nav-rules" },
              { label: "Our Team", value: "nav-team" }
            ]
          }
          onSelect={(value) => {
            switch (value) {
              case "nav-home": window.location.href = "/"; break;
              case "nav-rules": window.location.href ="/guidelines"; break;
              case "nav-team": window.location.href ="/team"; break;
              default:
                return;
            }
          }}
        />
      </div>
      <div className="w-1/3 text-center font-bold text-xl">LEVL</div>
      <div className="w-1/3 justify-end flex"><p className="px-4 py-2 cursor-default bg-stone-300"> Proudly ran by talented goobers.</p></div> 
    </header>
  );
}