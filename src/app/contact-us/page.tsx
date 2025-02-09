import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="h-[50vh] w-full flex p-10 gap-10">
        <div className="w-1/2 relative">
          <Image
            src="/sofia.jpg"
            alt="sofia"
            fill
            className="object-cover rounded-md"
          />
          <div className="text-[50px] text-white absolute bottom-0 right-0 w-full flex justify-end items-center px-4">
            СОФИЯ
          </div>
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl font-semibold">РАБОТНО ВРЕМЕ</span>
            <Link
              href="https://maps.app.goo.gl/jo1kLsDqsV6YDyC16"
              className="px-4 py-2 bg-blue-400 text-white"
              passHref
              target="_blank"
            >
              ВИЖ НА КАРТАТА
            </Link>
          </div>
          <div className="flex justify-between">
            <span>ПОНЕДЕЛНИК</span>
            <span>09:00 - 19:00</span>
          </div>
          <div className="flex justify-between">
            <span>ВТОРНИК</span>
            <span>09:00 - 19:00</span>
          </div>
          <div className="flex justify-between">
            <span>СРЯДА</span>
            <span>09:00 - 19:00</span>
          </div>
          <div className="flex justify-between">
            <span>ЧЕТВЪРТЪК</span>
            <span>09:00 - 19:00</span>
          </div>
          <div className="flex justify-between">
            <span>ПЕТЪК</span>
            <span>09:00 - 19:00</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span className="font-semibold">СЪБОТА</span>
            <span>ПОЧИВЕН ДЕН</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>НЕДЕЛЯ</span>
            <span>ПОЧИВЕН ДЕН</span>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-slate-300 w-[90vw]" />
      <div className="h-[50vh] w-full flex p-10 gap-10 justify-between">
        <div className="flex flex-col gap-3 w-1/2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl font-semibold">РАБОТНО ВРЕМЕ</span>
            <Link
              className="px-4 py-2 bg-blue-400 text-white"
              href="https://maps.app.goo.gl/L5W1W4QhxG37DX4CA"
              passHref
              target="_blank"
            >
              ВИЖ НА КАРТАТА
            </Link>
          </div>
          <div className="flex justify-between">
            <span>ПОНЕДЕЛНИК</span>
            <span>09:00 - 18:00</span>
          </div>
          <div className="flex justify-between">
            <span>ВТОРНИК</span>
            <span>09:00 - 18:00</span>
          </div>
          <div className="flex justify-between">
            <span>СРЯДА</span>
            <span>09:00 - 18:00</span>
          </div>
          <div className="flex justify-between">
            <span>ЧЕТВЪРТЪК</span>
            <span>09:00 - 18:00</span>
          </div>
          <div className="flex justify-between">
            <span>ПЕТЪК</span>
            <span>09:00 - 18:00</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span className="font-semibold">СЪБОТА</span>
            <span>ПОЧИВЕН ДЕН</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>НЕДЕЛЯ</span>
            <span>ПОЧИВЕН ДЕН</span>
          </div>
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/varna.jpg"
            alt="varna"
            fill
            className="object-cover rounded-md"
          />
          <div className="text-[50px] text-white absolute top-0 left-0 w-full flex justify-start items-center px-4">
            ВАРНА
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
