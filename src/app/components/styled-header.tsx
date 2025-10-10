
import Image from "next/image";

import Dropdown from "./dropdown-nav";
export default function StyledHeader() {
  return (
      <div className="h-70 w-full flex drop-shadow-md">
        <div className="h-full w-[10%] pl-10">
          <div className="h-[50%] w-full flex items-start justify-start">
            <Image
              aria-hidden
              src="/corner-arrow.png"
              alt="Corner arrow icon"
              width={50}
              height={50}
            />
          </div>
          <div className="h-[50%] w-full flex items-end justify-start">
            <Image
              aria-hidden
              src="/corner-arrow.png"
              alt="Corner arrow icon"
              width={50}
              height={50}
              className="rotate-[-90deg]"
            /> 
          </div>
        </div>

        <div className="h-full w-[80%] flex items-center justify-center"> 
          <Image
            aria-hidden
            src="/genesis-series-title.png"
            alt="LEVL Logo"
            width={700}
            height={700}
            className="mx-auto"
          />
        </div>

        <div className="h-full w-[10%] pr-10">
          <div className="h-[50%] w-full flex items-start justify-end">
            <Image
              aria-hidden
              src="/corner-arrow.png"
              alt="Corner arrow icon"
              width={50}
              height={50}
              className="rotate-[90deg]"
            />
          </div>
          <div className="h-[50%] w-full flex items-end justify-end">
            <Image
              aria-hidden
              src="/corner-arrow.png"
              alt="Corner arrow icon"
              width={50}
              height={50}
              className="rotate-[180deg]"
            />
          </div>
        </div>
      </div>
  );
}