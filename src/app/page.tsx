"use client";
import { useRef } from "react";
import AutoScrollOnThreshold from "./components/scroll-on-threshold";
import StyledHeader from "./components/styled-header";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div className="font-sans min-h-screen pb-20 flex flex-col items-center pl-5 pr-5">
      <div className="h-10"></div>
      <StyledHeader />
      <div className="h-20"></div>

      <div className="w-full max-w-3xl text-center mb-100">
        <h1 className="text-4xl font-bold mb-4">Ready for some fun?</h1>
        <p className="text-lg text-gray-700">View our upcoming series below.</p><br />
        <p className="text-lg text-gray-700 animate-bounce">↓</p>
      </div>
      
      <AutoScrollOnThreshold targetRef={targetRef} threshold={20} lockDuration={10} />


      <div ref={targetRef} className="bg-stone-300 h-1 w-screen mb-30"></div>

      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-6xl font-bold mb-4">LEVL Genesis Series</h1>
          
          <p className="text-lg text-gray-700 pb-4"> <strong>Genesis</strong> is our first step into the valorant event-hosting world. </p>
          
          <p className="text-lg text-gray-700 pb-10">Our goal is to give teams a VCT-like experience; a place to practice, grow, and compete on a well produced and streamed platform.
            Above all else we want to foster a healthy and fun environment for all teams and players involved.
          </p>
        </div>

        <div className="w-[85vw] h-[45vh] overflow-auto border-2 border-stone-400">
          <h1 className="pl-2 pt-2 text-2xl font-bold text-gray-800">This feature isn't ready, sorry!</h1>
          <p className="text-lg text-gray-700 pl-2">(A bracket would be here...)</p>
        </div>

      </div>
      
    </div>
  );
}
