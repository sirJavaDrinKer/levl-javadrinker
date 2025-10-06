import Image from "next/image";
import Footer from "./components/footer";

export default function Home() {
  return (
    
    <div className="font-sans min-h-screen pb-20 flex flex-col items-center justify-center">
      <div className="h-10"></div>
      <div className="h-70 w-full flex">

        <div className="h-full w-[10%] pl-10">
          {/* Aligned top-left for consistency */}
          <div className="h-[50%] w-full flex items-start justify-start">
            <Image
              aria-hidden
              src="/corner-arrow.png"
              alt="Corner arrow icon"
              width={50}
              height={50}
            />
          </div>
          {/* Aligned bottom-left as requested */}
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
          {/* Interpreted "bottom top right" as top-right */}
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
          {/* Interpreted "bottom bottom right" as bottom-right */}
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
      <div className="h-10"></div>

      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Hmm... you're early.</h1>
        <p className="text-lg text-gray-700">Hey there stranger!</p><br />
        <p className="text-lg text-gray-700">It seems you've found us before we were ready. We're working hard to get everything set up. In the meantime, feel free to join our community on Discord to stay updated!</p>
      </div>
    </div>
  );
}