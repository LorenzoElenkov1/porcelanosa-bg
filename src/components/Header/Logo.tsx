import React from "react";
import Button from "../Buttons/Button";
import ExpandableButton from "../Buttons/ExpandableButton";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

type Props = {
  lang: "bg" | "en" | null;
  setLang: (lang: "bg" | "en") => void;
};

const Logo = ({ lang, setLang }: Props) => {
  return (
    <div className="flex">
      <Button
        link
        href={lang === "en" ? "/en" : "/"}
        showActive={false}
        hoverable={false}
        text={
          <>
            <h4
              className={`font-custom w-full text-[2rem] tracking-tight gap-1 flex justify-center items-center`}
            >
              <span>PORCELANOSA</span>
              <span className="text-[1.5rem]">Grupo</span>
            </h4>
            <div className="self-end flex items-center text-[0.5rem] -mt-2 gap-[6px] font-[Arial]">
              <span>{lang === "en" ? "represented" : "представено"}</span>
              <span>{lang === "en" ? "by" : "от"}</span>
              <span className="font-black italic">ELE Ceramica</span>
            </div>
          </>
        }
        style="flex flex-col items-center justify-center w-max mx-auto py-0 px-0 pb-2"
      />
      <div className="flex gap-2 justify-center items-center text-[13px] absolute right-0 mt-3 mr-8">
        <Button
          showActive={false}
          hoverable={false}
          secondary
          text={lang === "en" ? "Contact us" : "Контакти"}
          link
          href={lang === "en" ? "/en/contact-us" : "/contact-us"}
          isContactUs
          style="border-none"
        />
        <ExpandableButton
          text={
            <Image
              width={18}
              height={18}
              src={
                lang === "bg"
                  ? "/flags/bulgaria.png"
                  : "/flags/united-kingdom.png"
              }
              alt=""
            />
          }
          rightAligned
          rightOffset={20}
          block={<LanguageSwitcher lang={lang} setLang={setLang} />}
        />
      </div>
    </div>
  );
};

export default Logo;
