"use client";

import React from "react";
import Button from "../Buttons/Button";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
  lang: "bg" | "en" | null;
  setLang: (lang: "bg" | "en") => void;
};

const LanguageSwitcher = ({ lang, setLang }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageToggle = (changeTo: 'bg' | 'en') => {
    let newPath;
    if (changeTo === lang) return;
    if (changeTo === 'bg') {
      newPath = pathname.replace(/^\/en/, "") || "/";
    } else {
      newPath = `/en${pathname}`;
    }
    setLang(changeTo);
    router.push(newPath);
  }
  return (
    <div className="flex flex-col relative text-xs gap-4 p-4">
      <Button style="hover:text-gray-600" text={<Image alt="bulgaria" width={24} height={24} src="/flags/bulgaria.png"/>} onClick={() => handleLanguageToggle('bg')} showActive={false} />
      <Button style="hover:text-gray-600" text={<Image alt="english" width={24} height={24} src="/flags/united-kingdom.png"/>} onClick={() => handleLanguageToggle('en')} showActive={false} />
    </div>
  );
};

export default LanguageSwitcher;
