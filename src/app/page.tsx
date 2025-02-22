import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-[100svh] relative">
      <Image
        fill
        src="Porcelanosa_Grupo.jpg"
        alt="Porcelanosa"
        className="object-cover"
      />
      <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-start text-4xl text-white bg-[rgba(0,0,0,0.5)] px-8 py-4">
        <span>Тук може да пише различни неща</span>
        <span className="text-lg">на всяка снимка, която се върти тук</span>
      </div>
    </div>
  );
}
