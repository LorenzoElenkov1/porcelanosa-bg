"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, ReactElement, useMemo } from "react";
import { createPortal } from "react-dom";

type ExpandableButtonProps = {
  text: string | ReactElement;
  block: ReactElement;
  rightAligned?: boolean;
  rightOffset?: number;
  style?: string;
  showActive?: boolean;
  href?: string | { pathname: string; query?: string };
};

export default function ExpandableButton({
  text,
  block,
  rightAligned = false,
  rightOffset = 0,
  style,
  showActive = false,
  href,
}: ExpandableButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const buttonRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const location = usePathname();

  const isActive = useMemo(() => {
    return (
      showActive &&
      href &&
      location.includes(
        href && typeof href === "string"
          ? href || ""
          : typeof href === "object"
          ? href.pathname || ""
          : ""
      )
    );
  }, [location, href, showActive]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Cancel any existing close timeout
    }
    const current = buttonRef?.current || linkRef?.current;
    if (current) {
      const rect = current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY, // Position below button
        left: rightAligned
          ? rect.left - rightOffset + window.scrollX // ✅ Align right
          : rect.left + window.scrollX, // Default: align left
      });
    }
    setIsOpen(true);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const current = buttonRef?.current || linkRef?.current;
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget as Node) &&
      current &&
      !current.contains(event.relatedTarget as Node)
    ) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 500); // 500ms delay before closing
    }
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Cancel close when entering dropdown
    }
  };

  const closeDropdown = () => setIsOpen(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Button */}
      {href ? (
        <Link
          href={href}
          ref={linkRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`px-2 flex-nowrap flex gap-2 items-center ${
            showActive ? "border-l-[0.2rem]" : ""
          } ${
            isActive ? "border-l-[rgb(255,99,71)]" : "border-l-gray-500"
          } ${style}`}
        >
          {text}
        </Link>
      ) : (
        <div
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`px-2 flex-nowrap flex gap-2 items-center ${
            showActive ? "border-l-[0.2rem]" : ""
          } ${
            isActive ? "border-l-[rgb(255,99,71)]" : "border-l-gray-500"
          } ${style}`}
        >
          {text}
        </div>
      )}

      {/* Portal for the dropdown */}
      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 9999,
            }}
            className="w-max bg-black bg-opacity-60 rounded-md shadow-lg transition-all duration-300 ease-in-out opacity-100 translate-y-2 scale-100"
            onMouseEnter={handleDropdownMouseEnter} // ✅ Keep open when hovered
            onMouseLeave={handleMouseLeave} // ✅ Close when mouse leaves submenu
            // onClick={closeDropdown} // ✅ Clicking inside closes it
          >
            {block}
          </div>,
          document.body
        )}
    </>
  );
}
