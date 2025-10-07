"use client";
import { useRouter } from 'next/router'

import Dropdown from "./dropdown-nav";

export default function Header() {
  const router = useRouter();
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
              router.push('/');
            } else if (value=="nav-rules") {
              router.push('/guidelines');
            }
          }}
        />
      </div>
      <div className="w-1/3 text-center font-bold text-xl">LEVL</div>
      <div className="w-1/3"></div> 
    </header>
  );
}