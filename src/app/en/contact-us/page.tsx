import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="relative h-[100svh]">
      <Image
        fill
        src={"/Porcelanosa_Grupo.jpg"}
        alt={"contact-us"}
        className="object-cover"
      />
      <div
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] [&>*]:bg-[rgba(0,0,0,0.6)] p-4 flex flex-col justify-between text-white min-w-[clamp(850px,80vw,1400px)] w-max
      "
      >
        <div className="text-[2.25rem] p-2 w-max px-8 rounded-t-2xl">
          Contact us
        </div>
        <div className="flex justify-between px-8 py-4">
          <div className="flex flex-col gap-2">
            <span className="text-3xl">Sofia</span>
            <span>+359 2 860 60 60</span>
            <div className="flex gap-4 items-center">
              <span>
                blvd. Simeonovsko Shose 120A, <br />
                1700, Vitosha, Sofia
              </span>
              <div className="h-full w-[1px] bg-white" />
              <Link
                href={"https://maps.app.goo.gl/Ahei97iBT896uF7XA"}
                target="_blank"
              >
                FIND US ON MAP
              </Link>
            </div>
            <div className="flex gap-4 mt-8">
              <div className="flex flex-col gap-2">
                <span>Monday - Friday</span>
                <span>Saturday</span>
                <span>Sunday</span>
              </div>
              <div className="h-full w-[1px] bg-white" />
              <div className="flex flex-col gap-2">
                <span>09:00 - 19:00</span>
                <span>CLOSED</span>
                <span>CLOSED</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl">Varna</span>
            <span>+359 52 500 555</span>
            <div className="flex gap-4 items-center">
              <span>
                str. Nikola Vaptsarov 5 <br />
                9002, Varna
              </span>
              <div className="h-full w-[1px] bg-white" />
              <Link
                href={"https://maps.app.goo.gl/WYCv96BynNKNtPd6A"}
                target="_blank"
              >
                FIND US ON MAP
              </Link>
            </div>
            <div className="flex gap-4 mt-8">
              <div className="flex flex-col gap-2">
                <span>Monday - Friday</span>
                <span>Saturday</span>
                <span>Sunday</span>
              </div>
              <div className="h-full w-[1px] bg-white" />
              <div className="flex flex-col gap-2">
                <span>10:00 - 18:00</span>
                <span>CLOSED</span>
                <span>CLOSED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
