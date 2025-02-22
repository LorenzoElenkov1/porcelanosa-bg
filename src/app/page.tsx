import Button from "@/components/Buttons/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-[calc(100svh-200px)] relative">
      <Image
        fill
        src="Porcelanosa_Grupo.jpg"
        alt="Porcelanosa"
        className="object-cover"
      />
      <div className="absolute top-[55%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center gap-4">
        <h1 className="flex flex-col items-center leading-none text-white text-[60px]">
          НОВА КОЛЕКЦИЯ <span>2025</span>
        </h1>
        <div className="text-xl">
          <Button primary text="Виж тук" style="px-8 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
