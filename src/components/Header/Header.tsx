"use client";

import React, { useLayoutEffect } from "react";
import "@/styles/index.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useLanguage } from "../LanguageProvider/LanguageProvider";
import { usePathname } from "next/navigation";

const Header = () => {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  
  useLayoutEffect(() => {
    if (pathname.includes('/en/')) {
      setLang('en');
    } else {
      setLang('bg');
    }
  }, [pathname, setLang]);
  
  return (
    <div className="w-full max-w-[2048px] [&>*]:border-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.5)] bg-opacity-70 text-white absolute z-10 left-1/2 transform -translate-x-1/2">
      <Logo lang={lang} setLang={setLang} />
      <Navigation lang={lang} />
    </div>
  );
};

export default Header;
