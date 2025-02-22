import React from "react";
import "@/styles/index.css";
import ExpandableButton from "../Buttons/ExpandableButton";
import FactoriesBlock from "./FactoriesBlock";
import Image from "next/image";
import Button from "../Buttons/Button";

const Header = () => {
  return (
    <div className="w-full [&>*]:border-[rgba(0,0,0,0.2)] bg-slate-50 bg-opacity-70">
      <div className="flex py-2">
        <Button
          link
          href="/"
          text={
            <>
              <h4
                className={`font-custom w-full text-[2rem] tracking-tight gap-3 flex justify-center items-center`}
              >
                <span>PORCELANOSA</span>
                <span className="text-[1.5rem]">Grupo</span>
              </h4>
              <div className="flex gap-2 self-end pb-2">
                <span className="text-[0.75rem]">представено от</span>
                <div className="w-[44px] h-[22px] relative">
                  <Image
                    src="/download.png"
                    fill
                    alt="ele-ceramica"
                  />
                </div>
              </div>
            </>
          }
          style="flex flex-col items-center justify-center w-max mx-auto py-0 px-0"
        />
        <div className="flex gap-2 justify-center items-center text-[13px] absolute right-0 top-0 py-7 px-2">
          <Button
            secondary
            text="Връзка с нас"
            link
            href="/contact-us"
          />
          <ExpandableButton
            text="Език"
            rightAligned
            rightOffset={40}
            block={
              <div className="flex flex-col relative text-xs gap-4">
                <span className="hover:text-gray-600">Български</span>
                <span className="hover:text-gray-600">English</span>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex justify-center gap-10 text-sm border-y-[1px]">
        <Button
          secondary
          text="Продукти"
          link
          href="/products"
        />
        <ExpandableButton
          text={
            <>
              Каталози{" "}
              <Image
                src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
                alt="dropdown"
                width={12}
                height={12}
              />
            </>
          }
          block={<FactoriesBlock />}
        />
        <Button secondary text="Проекти" link href="/projects" />
        <Button
          secondary
          text="Lifestyle"
          link
          href="/lifestyle"
        />
      </div>
    </div>
  );
};

export default Header;
