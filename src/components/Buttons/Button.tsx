"use client";
import Link from "next/link";
import React, { ReactElement } from "react";

type LinkButtonBase = TypeButton & {
  text: string | ReactElement;
  style?: string;
};

type PrimaryButton = {
    primary?: true;
    secondary?: never;
}

type SecondaryButton = {
    secondary?: true;
    primary?: never;
}

type TypeButton = PrimaryButton | SecondaryButton;


type ButtonProps = LinkButtonBase & {
  link?: false;
  href?: never;
};

type LinkProps = LinkButtonBase & {
  link: true;
  href: string;
};

type Props = ButtonProps | LinkProps;

const primaryStyles = "bg-blue-400 text-white";
const secondaryStyles = "bg-transparent";

const Button = ({ text, style = "", primary, secondary, link = false, href }: Props) => {

  return link && href ? (
    <Link href={href} className={`px-2 py-2 ${style}`}>{text}</Link>
  ) : (
    <button
      className={`px-2 py-2 ${
        primary ? primaryStyles : secondary ? secondaryStyles : ""
      } ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
