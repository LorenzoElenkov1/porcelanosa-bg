import Button from "@/components/Buttons/Button";
import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <div className="w-full min-h-[100svh] flex flex-col pt-20 items-center">
      <div className="flex justify-center items-center">
        <div className="-mr-28 mt-28 flex flex-col  items-end text-[rgb(157,129,105)] text-[5rem] leading-none z-10 font-ivy-thin">
          <span className="italic">
            TAILOR <br /> MADE
          </span>
          <span className="italic">SURFACES</span>
          <div className="font-custom text-lg w-[300px] mt-6 text-end text-black flex flex-col gap-10 mr-36 items-end">
            <span>
              Large format porcelain and natural stone surfaces for countertops,
              flooring, interior cladding, tables, sinks and other finished
              products of the highest quality and performance.
            </span>
            <Button
              text={
                <>
                  <span>SEE ALL</span>
                  <Image
                    src="https://img.icons8.com/ios-glyphs/30/long-arrow-right.png"
                    alt="long-arrow-right"
                    width={20}
                    height={20}
                    className="invert"
                  />
                </>
              }
              showActive={false}
              primary
              style="bg-[rgb(157,130,105)] w-max p-2 px-6 rounded-3xl flex items-center gap-2 hover:bg-[rgb(83, 68, 54)] text-white"
              link
              href="products"
            />
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          src="/natural-stone.mp4"
          className="max-w-[1000px] w-[63vw] aspect-[1.77/1] mt-32 flex-grow-0 flex-shrink-0"
        />
      </div>
      <div className="w-[1px] h-[140px] bg-black my-10" />
      <div className="flex flex-col items-center gap-2 mt-4">
        <span className="text-[1.5rem] tracking-wider">MATERIALS</span>
        <span className="w-1/2 text-center">
          The firm specialising in large-format surfaces offers two product
          lines: XTONE porcelain and Altissima natural stone.
        </span>
        <div className="mt-10 flex items-center gap-56 mb-10">
          <div className="flex flex-col group relative">
            <div className="flex flex-col text-[3.5rem] font-ivy-thin leading-[46px] z-[20] -ml-12">
              <span className="text-[rgb(157,129,105)]">PORCELAIN</span>
              <span className="pl-14">XTONE</span>
            </div>
            <div className="absolute top-56 left-[-100px] w-full h-1/5 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col gap-32">
              <span>
                Reflection of nature. Generic product capable of capturing
                countless designs through high-performance materials.
              </span>
              <Button
                text={
                  <>
                    <span>EXPLORE PRODUCTS</span>
                    <Image
                      src="https://img.icons8.com/ios-glyphs/30/long-arrow-right.png"
                      alt="long-arrow-right"
                      width={20}
                      height={20}
                      className="invert"
                    />
                  </>
                }
                showActive={false}
                primary
                style="z-[20] ml-40 bg-[rgb(157,130,105)] w-max p-2 px-6 rounded-3xl flex items-center gap-2 hover:bg-[rgb(83, 68, 54)] text-white"
                link
                href={{ pathname: "/xtone/products", query: "type=porcelain" }}
              />
            </div>
            <div className="w-[350px] h-[450px] relative -mt-8 overflow-hidden">
              <div className="w-full h-full bg-white opacity-0 group-hover:opacity-40 absolute top-0 left-0 z-10" />
              <Image
                src="/porcelain-xtone.webp"
                alt=""
                fill
                className="object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-100 scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col group relative">
            <div className="w-[350px] h-[450px] relative -mt-8 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[12] text-2xl opacity-100 group-hover:opacity-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 618.63 99.2"
                  className="w-[150px]"
                >
                  <path d="M60,59.06c.64,0,.76-.38.64-.76L49.15,27.05c-.12-.5-.25-1.14-.63-1.14s-.63.64-.76,1.14L36.07,58.17c-.13.51,0,.89.5.89ZM34,65.42c-.63,0-.89.25-1.15,1L26,83.83a24.47,24.47,0,0,0-1.91,7.75c0,2.29,1.14,3.94,5.08,3.94h1.91c1.52,0,1.9.25,1.9,1,0,1-.76,1.26-2.16,1.26-4.06,0-9.52-.38-13.46-.38-1.4,0-8.38.38-15,.38C.76,97.8,0,97.55,0,96.54c0-.77.51-1,1.52-1a37.77,37.77,0,0,0,3.94-.26c5.84-.76,8.25-5.08,10.8-11.43L48.14,5.08C49.66,1.4,50.42,0,51.69,0s1.91,1.14,3.18,4.06c3,7,23.37,57.8,31.5,77.11C91.2,92.6,94.88,94.37,97.55,95a27.91,27.91,0,0,0,5.33.51c1,0,1.66.13,1.66,1s-1.15,1.26-5.85,1.26-13.85,0-24-.25c-2.29-.13-3.82-.13-3.82-1s.52-1,1.78-1.15a2.07,2.07,0,0,0,1.15-2.92L63.63,66.3a1.21,1.21,0,0,0-1.27-.88Z"></path>
                  <path d="M574.05,59.06c.63,0,.75-.38.63-.76L563.24,27.05c-.12-.5-.25-1.14-.63-1.14s-.63.64-.76,1.14L550.16,58.17c-.12.51,0,.89.51.89Zm-25.92,6.36c-.63,0-.88.25-1.14,1l-6.86,17.4a24.67,24.67,0,0,0-1.9,7.75c0,2.29,1.14,3.94,5.08,3.94h1.9c1.52,0,1.91.25,1.91,1,0,1-.76,1.26-2.16,1.26-4.07,0-9.53-.38-13.47-.38-1.39,0-8.38.38-15,.38-1.66,0-2.41-.25-2.41-1.26,0-.77.5-1,1.52-1a37.4,37.4,0,0,0,3.93-.26c5.85-.76,8.26-5.08,10.8-11.43L562.23,5.08C563.76,1.4,564.52,0,565.79,0s1.9,1.14,3.18,4.06c3,7,23.36,57.8,31.5,77.11C605.29,92.6,609,94.37,611.64,95a28,28,0,0,0,5.34.51c1,0,1.65.13,1.65,1s-1.15,1.26-5.85,1.26-13.84,0-24-.25c-2.29-.13-3.81-.13-3.81-1s.51-1,1.77-1.15a2.06,2.06,0,0,0,1.15-2.92L577.73,66.3a1.23,1.23,0,0,0-1.27-.88Z"></path>
                  <path d="M131.36,72.13c0,11.44,0,17.1,1.94,18.78,1.54,1.37,5,1.89,12,1.89,4.81,0,8.29-.1,10.54-2.52a10.76,10.76,0,0,0,2.25-5.35c.11-.84.31-1.36,1-1.36s.83.94.83,2a69.2,69.2,0,0,1-1.34,10.28c-.61,2-1,2.42-5.73,2.42-6.45,0-11.67-.11-16.17-.32s-8.29-.21-12-.21c-1,0-3,.11-5.11.11s-4.41.2-6.25.2c-1.12,0-1.74-.31-1.74-.94,0-.42.3-.94,1.43-.94a13,13,0,0,0,3.18-.32c1.84-.41,2.35-2.09,2.66-4.72.4-3.78.4-10.81.4-19V56.39c0-13.54,0-16.06-.1-18.89-.2-3-1-4-3.89-4.82a11.19,11.19,0,0,0-3-.32c-1,0-1.54-.31-1.54-.95s.61-.83,1.95-.83c4.19,0,9.92.2,12.38.2,2.15,0,9.52-.2,13-.2,1.33,0,1.95.2,1.95.83s-.52.95-1.64.95a18.7,18.7,0,0,0-3.48.32c-2.45.41-3.17,1.67-3.38,4.82-.2,2.83-.2,5.35-.2,18.89Z"></path>
                  <path d="M182.83,36l-13.4.32c-5.23.1-7.37.73-8.7,2.73a10.11,10.11,0,0,0-1.54,3c-.2.73-.41,1.15-1,1.15s-.82-.52-.82-1.47c0-1.47,1.74-10.07,1.94-10.8.21-1.16.51-1.69,1-1.69.72,0,1.65.74,3.89,1.06a83.76,83.76,0,0,0,9,.41h36.54a40.35,40.35,0,0,0,6.13-.41c1.44-.22,2.15-.43,2.46-.43.62,0,.72.53.72,1.9,0,1.88-.21,8.49-.21,10.8-.1,1-.3,1.47-.82,1.47-.71,0-.92-.42-1-1.78l-.1-.95c-.2-2.3-2.56-5-10.64-5.14L194.91,36v36.1c0,8.19.1,15.21.51,19.1.3,2.52.81,4.19,3.48,4.61a32.78,32.78,0,0,0,4.6.32c1,0,1.44.52,1.44.94,0,.63-.72,1-1.74,1-5.94,0-12-.32-14.54-.32-2,0-8.18.32-11.77.32-1.12,0-1.74-.32-1.74-1,0-.42.31-.94,1.44-.94a12.34,12.34,0,0,0,3.17-.32c1.84-.42,2.36-2.09,2.66-4.72.41-3.78.41-10.8.41-19Z"></path>
                  <path d="M235.63,56.39c0-13.54,0-16.06-.1-18.89-.21-3-1.13-4.09-3.07-4.72a11.44,11.44,0,0,0-3.28-.42c-.92,0-1.43-.21-1.43-1.05,0-.53.71-.74,2.15-.74,3.38,0,9.52.21,12.07.21,2.26,0,8.09-.21,11.57-.21,1.13,0,1.84.21,1.84.74,0,.84-.51,1.05-1.43,1.05a12.8,12.8,0,0,0-2.66.31c-2.46.43-3.18,1.68-3.38,4.83-.2,2.83-.2,5.35-.2,18.89V72.13c0,8.6,0,15.74.4,19.52.31,2.41.92,3.77,3.59,4.2a34.38,34.38,0,0,0,4.6.31c1,0,1.43.52,1.43.94,0,.63-.71,1-1.73,1-5.94,0-12.08-.32-14.54-.32-2,0-8.18.32-11.77.32-1.12,0-1.74-.32-1.74-1,0-.42.31-.94,1.44-.94a13.47,13.47,0,0,0,3.17-.31c1.84-.43,2.35-1.68,2.66-4.31.41-3.67.41-10.81.41-19.41Z"></path>
                  <path d="M272.36,96.89c-1.43-.63-1.74-1-1.74-3,0-4.83.41-10.39.51-11.86s.42-2.31,1.13-2.31.92.84.92,1.47a16.76,16.76,0,0,0,.83,4.62c1.93,6.61,8.69,8.81,14.32,8.81,7.78,0,12.49-5,12.49-11.33,0-3.88-.93-7.76-8.91-12.59l-5.22-3.15c-10.64-6.4-14.12-12.38-14.12-20.25,0-10.91,10.23-17.94,22.72-17.94a52.22,52.22,0,0,1,12.79,1.46c.82.22,1.23.53,1.23,1.16,0,1.15-.31,3.67-.31,10.7,0,1.89-.41,2.83-1.13,2.83S307,45,307,43.9A10.22,10.22,0,0,0,304.6,38c-1.33-1.67-4.19-4.19-10-4.19-6.44,0-12.28,3.46-12.28,9.54,0,4,1.43,7.14,9.52,11.76l3.69,2.1c11.86,6.71,15.55,13.53,15.55,21.62,0,6.61-2.46,12-9,16.68-4.29,3.14-10.23,3.67-15,3.67-5.22,0-10.75-.53-14.64-2.31"></path>
                  <path d="M327.62,96.89c-1.43-.63-1.74-1-1.74-3,0-4.83.41-10.39.51-11.86s.42-2.31,1.13-2.31.92.84.92,1.47a17.09,17.09,0,0,0,.82,4.62c1.94,6.61,8.7,8.81,14.33,8.81,7.77,0,12.48-5,12.48-11.33,0-3.88-.92-7.76-8.9-12.59L342,67.51c-10.64-6.4-14.13-12.38-14.13-20.25,0-10.91,10.24-17.94,22.73-17.94a52.29,52.29,0,0,1,12.79,1.46c.82.22,1.22.53,1.22,1.16,0,1.15-.3,3.67-.3,10.7,0,1.89-.41,2.83-1.13,2.83s-.92-.52-.92-1.57A10.26,10.26,0,0,0,359.86,38c-1.33-1.67-4.2-4.19-10-4.19-6.45,0-12.28,3.46-12.28,9.54,0,4,1.43,7.14,9.52,11.76l3.68,2.1c11.87,6.71,15.55,13.53,15.55,21.62,0,6.61-2.45,12-9,16.68-4.3,3.14-10.23,3.67-15,3.67-5.23,0-10.75-.53-14.64-2.31"></path>
                  <path d="M385.75,56.39c0-13.54,0-16.06-.11-18.89-.2-3-1.12-4.09-3.07-4.72a11.37,11.37,0,0,0-3.27-.42c-.92,0-1.44-.21-1.44-1.05,0-.53.72-.74,2.16-.74,3.37,0,9.51.21,12.07.21,2.26,0,8.09-.21,11.56-.21,1.13,0,1.85.21,1.85.74,0,.84-.51,1.05-1.44,1.05a12.8,12.8,0,0,0-2.66.31c-2.45.43-3.17,1.68-3.37,4.83-.21,2.83-.21,5.35-.21,18.89V72.13c0,8.6,0,15.74.41,19.52.31,2.41.92,3.77,3.58,4.2a34.53,34.53,0,0,0,4.61.31c1,0,1.43.52,1.43.94,0,.63-.71,1-1.74,1-5.93,0-12.07-.32-14.53-.32-2.05,0-8.19.32-11.77.32-1.13,0-1.74-.32-1.74-1,0-.42.31-.94,1.44-.94a13.53,13.53,0,0,0,3.17-.31c1.84-.43,2.35-1.68,2.66-4.31.41-3.67.41-10.81.41-19.41Z"></path>
                  <path d="M430.77,31.31c.21-1.47,1-2.31,1.74-2.31.92,0,1.54.42,2.77,2.83l24.14,49.32L483.58,31.2c.71-1.46,1.53-2.2,2.35-2.2s1.74.95,2.05,2.83l8.18,54.89c.82,5.55,1.64,8,4.4,8.81a17.21,17.21,0,0,0,5.12.84c.82,0,1.43.31,1.43.84,0,.73-1,1.05-2.35,1.05-2.25,0-15-.32-18.63-.53-2.15-.1-2.66-.52-2.66-1s.41-.73,1-.94.72-1.26.42-3.78l-5-38.51h-.31L460.24,92.9c-2,4.21-2.55,5-3.58,5s-2.15-1.78-3.58-4.51c-2.15-4.09-9.31-17.73-10.34-20.25-.71-1.68-6-12.49-9-18.68h-.31l-4.3,34.42a30.72,30.72,0,0,0-.3,4.19c0,1.69,1.23,2.32,2.76,2.63a15.56,15.56,0,0,0,3.17.42c.82,0,1.43.42,1.43.84,0,.84-.81,1-2.14,1-3.79,0-7.89-.32-9.52-.32s-6,.32-8.9.32c-.93,0-1.64-.21-1.64-1,0-.42.51-.84,1.43-.84a15.82,15.82,0,0,0,2.76-.21c2.46-.31,3.28-3.88,3.68-6.82Z"></path>
                </svg>
              </div>
              <div className="w-full h-full bg-white opacity-0 group-hover:opacity-20 absolute top-0 left-0 z-10" />
              <Image
                src="/altissima.webp"
                alt=""
                fill
                className="object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-100 scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute top-0 left-[-100px] w-full h-full z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col gap-32">
              <Button
                text={
                  <>
                    <span>EXPLORE PRODUCTS</span>
                    <Image
                      src="https://img.icons8.com/ios-glyphs/30/long-arrow-right.png"
                      alt="long-arrow-right"
                      width={20}
                      height={20}
                      className="invert"
                    />
                  </>
                }
                showActive={false}
                primary
                style="z-[20] ml-40 bg-[rgb(157,130,105)] w-max p-2 px-6 rounded-3xl flex items-center gap-2 hover:bg-[rgb(83, 68, 54)] text-white"
                link
                href={{
                  pathname: "/xtone/products",
                  query: "type=natural-stone",
                }}
              />
              <span>
                Reflection of nature. Generic product capable of capturing
                countless designs through high-performance materials.
              </span>
            </div>
            <div className="flex flex-col items-end text-[3.5rem] font-ivy-thin leading-[46px] -mt-16 z-[20] -mr-12">
              <span>NATURAL</span>
              <span className="text-[rgb(157,129,105)] pr-8">STONE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
