import React from "react";
import Button from "../Buttons/Button";

type Props = {
  lang: "bg" | "en" | null;
};

const LinkByLang = (lang: "bg" | "en" | null, link: string) => {
  if (lang === "en") return `/en${link}`;
  else return link;
};

const Navigation = ({ lang }: Props) => {
  return (
    <div className="flex flex-col justify-center text-sm border-y-[1px] py-2">
      <div className="flex gap-10 justify-center py-2">
        <Button
          secondary
          text="PORCELANOSA"
          link
          href={() => LinkByLang(lang, "/porcelanosa")}
        />
        <Button secondary text="NOKEN" link href="/noken" />
        <Button
          secondary
          text="XTONE"
          newTab
          link
          href="https://www.xtone-surface.com/en"
        />
        <Button
          secondary
          text="L'ANTIC COLONIAL"
          link
          href={() => LinkByLang(lang, "/lantic-colonial")}
        />
        <Button
          secondary
          text="KRION"
          newTab
          link
          href="https://www.krion.com/en/"
        />
        <Button secondary text="BUTECH" link href={() => LinkByLang(lang, "/butech")} />
        <Button secondary text="GAMADECOR" link href={() => LinkByLang(lang, "/gamadecor")} />
      </div>
      <div className="flex gap-10 justify-center py-2">
        <Button secondary text={lang === 'en' ? 'Info' : 'Инфо'} link href={() => LinkByLang(lang, "/lifestyle")} />
        <Button secondary text="Lifestyle" link href={() => LinkByLang(lang, "/lifestyle")} />
        <Button secondary text={lang === 'en' ? 'Projects' : 'Проекти'} link href={() => LinkByLang(lang, "/projects")} />
        <Button secondary text={lang === 'en' ? 'Promotions' : 'Промоции'} link href={() => LinkByLang(lang, "/promotions")} />
      </div>
    </div>
  );
};

export default Navigation;
