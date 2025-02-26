import React from "react";
import "@/styles/index.css";
import ExpandableButton from "../Buttons/ExpandableButton";
import Button from "../Buttons/Button";

const Header = () => {
  return (
    <div className="w-full [&>*]:border-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.5)] bg-opacity-70 text-white absolute z-10">
      <div className="flex">
        <Button
          link
          href="/"
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
              <div className="self-end flex items-center text-[0.5rem] -mt-1">
                <span>represented by ELE CERAMICA</span>
              </div>
            </>
          }
          style="flex flex-col items-center justify-center w-max mx-auto py-0 px-0"
        />
        <div className="flex gap-2 justify-center items-center text-[13px] absolute right-0 py-[1.3rem] mr-8">
          <Button showActive={false} hoverable={false} secondary text="Контакти" link href="/contact-us" isContactUs />
          <ExpandableButton
            text="Език"
            rightAligned
            rightOffset={28}
            block={
              <div className="flex flex-col relative text-xs gap-4">
                <span className="hover:text-gray-600">Български</span>
                <span className="hover:text-gray-600">English</span>
              </div>
            }
            style={'border-[1px] border-[lightgray] border-l-[lightgray] py-1'}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center text-sm border-y-[1px] py-2">
        <div className="flex gap-10 justify-center py-2">
          <Button secondary text="PORCELANOSA" link href="/porcelanosa" />
          <Button secondary text="NOKEN" link href="/noken" />
          <Button secondary text="XTONE" link href="/xtone" />
          <Button secondary text="L'ANTIC COLONIAL" link href="/lantic-colonial" />
          <Button secondary text="KRION" link href="/krion" />
          <Button secondary text="BUTECH" link href="/butech" />
          <Button secondary text="GAMADECOR" link href="/gamadecor" />
        </div>
        <div className="flex gap-10 justify-center py-2">
          <Button secondary text="Info" link href="/products" />
          <Button secondary text="Lifestyle" link href="/lifestyle" />
          <Button secondary text="Projects" link href="/projects" />
          <Button secondary text="Promotions" link href="/promotions" />
        </div>
      </div>
    </div>
  );
};

export default Header;
