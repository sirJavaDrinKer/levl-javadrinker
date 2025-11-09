import Image from "next/image";
import CollapsibleSection from "../components/collapsible-section";

export default function Team() {
  return ( 
    <div className="flex flex-col items-center justify-center pt-50">
      <h1 className="text-3xl font-bold mb-4">🚧 Under Construction 🚧</h1>
      <p>Please be patient with us!</p>

      <div className="relative w-full h-20 pt-10 overflow-x-hidden">
        <div className="absolute flex items-center animate-truck space-x-4">
          <p>🚚</p>
          <p className="animate-ping">💨</p>
        </div>
      </div>
    </div>
  );
}
