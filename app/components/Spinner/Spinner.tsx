import lightningPng from "@/public/lightning.png";
import Image from "next/image";
export function Spinner() {
  return (
    <div className="w-full h-full flex  justify-center items-center">
      <div className="flex flex-col items-center">
        <Image
          className="animate-spin w-10 mb-4"
          src={lightningPng}
          alt="Logo"
        />
        <div>Loading...</div>
      </div>
    </div>
  );
}
