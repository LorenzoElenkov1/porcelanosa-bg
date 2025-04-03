"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement, useMemo } from "react";

type LinkButtonBase = TypeButton & {
  text: string | ReactElement;
  style?: string;
  showActive?: boolean;
  hoverable?: boolean;
  isContactUs?: boolean;
  onClick?: () => void;
  newTab?: boolean;
};

type PrimaryButton = {
  primary?: true;
  secondary?: never;
};

type SecondaryButton = {
  secondary?: true;
  primary?: never;
};

type TypeButton = PrimaryButton | SecondaryButton;

type ButtonProps = LinkButtonBase & {
  link?: false;
  href?: never;
};

type LinkProps = LinkButtonBase & {
  link: true;
  href: string | { pathname: string; query?: string } | (() => string);
};

type Props = ButtonProps | LinkProps;

const primaryStyles = "bg-blue-400 text-white";
const secondaryStyles = "bg-transparent";
const hoverStyles =
  "hover:bg-[linear-gradient(to_right,rgba(255,255,255,0.2),transparent)] ";

const Button = ({
  text,
  style = "",
  primary,
  secondary,
  link,
  href,
  showActive = true,
  hoverable = true,
  isContactUs = false,
  onClick,
  newTab = false,
}: Props) => {
  const location = usePathname();

  const isActive = useMemo(() => {
    return (
      showActive &&
      location.includes(
        href && typeof href === "string"
          ? href || ""
          : typeof href === "object"
          ? href.pathname || ""
          : typeof href === "function"
          ? href() || ""
          : ""
      )
    );
  }, [location, href, showActive]);

  return link && href ? (
    <Link
      href={typeof href === "function" ? href() : href}
      target={newTab ? "_blank" : "_self"}
      className={`px-2 ${showActive ? "border-l-[0.2rem]" : ""} ${
        isActive
          ? "border-l-[rgb(255,99,71)]"
          : !isContactUs
          ? "border-l-gray-500"
          : ""
      } ${hoverable ? hoverStyles : ""} ${
        isContactUs
          ? "border-[1px] border-[lightgray] border-l-[rgb(211,211,211)] py-2"
          : ""
      } ${style}`}
    >
      {text}
    </Link>
  ) : (
    <button
      className={`px-2 ${showActive ? "border-l-2" : ""} ${
        primary ? primaryStyles : secondary ? secondaryStyles : ""
      } ${
        isActive ? "border-l-[rgb(255,99,71)]" : "border-l-gray-500"
      } ${style}`}
      onClick={onClick ? onClick : () => {}}
    >
      {text}
    </button>
  );
};

export default Button;
