"use client";
import { Filters } from "@/app/products/_types";
import Image from "next/image";
import React from "react";

type Option = { value: string; label: string };

type Props = {
  label: string;
  options: Option[];
  value: Option;
  setOption: (option: Option, type: keyof Filters) => void;
  type: keyof Filters;
};

const Dropdown = (props: Props) => {
  const [isOpen, setOpen] = React.useState(false);

  const isActive = (option: Option) => {
    return option.value === props.value.value;
  };

  const handleOptionClick = (option: Option) => {
    setOpen(false);
    props.setOption(option, props.type);
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <span className="text-xl">{props.label}</span>
      <button
        onClick={() => setOpen(!isOpen)}
        className="p-2 px-4 border-2 flex gap-2 items-center w-[160px] justify-between"
      >
        {props.value.label}
        <Image
          src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
          alt="dropdown"
          width={12}
          height={12}
        />
      </button>
      {isOpen && (
        <div className="flex flex-col absolute top-20 w-[160px] left-0 bg-slate-200 z-10">
          {props.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={`${
                isActive(option) ? "bg-slate-300" : ""
              } pl-[17px] py-2 text-start hover:bg-slate-300`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
