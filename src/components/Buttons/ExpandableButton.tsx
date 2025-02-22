"use client";
import { useState, useEffect, useRef, ReactElement } from "react";
import { createPortal } from "react-dom";

type ExpandableButtonProps = {
  text: string | ReactElement;
  block: ReactElement;
  rightAligned?: boolean;
  rightOffset?: number;
  style?: string;
};

export default function ExpandableButton({
  text,
  block,
  rightAligned = false,
  rightOffset = 0,
  style
}: ExpandableButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY, // Position below button
        left: rightAligned
          ? rect.left - rightOffset + window.scrollX // ✅ Align right
          : rect.left + window.scrollX, // Default: align left
      });
    }
    setIsOpen((prev) => !prev);
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
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`px-4 py-2 flex-nowrap flex gap-2 items-center ${style}`}
      >
        {text}
      </button>

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
            className="w-max p-4 bg-gray-100 rounded-md shadow-lg transition-all duration-300 ease-in-out opacity-100 translate-y-2 scale-100"
            onClick={closeDropdown} // ✅ Clicking inside closes it
          >
            {block}
          </div>,
          document.body
        )}
    </>
  );
}
