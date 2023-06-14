"use client";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Menu from "./menu";
import { atom, useAtom } from "jotai";

export const menuAtom = atom(false);

export const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
export default function MobileHeader() {
  const [isOpen, setIsOpen] = useAtom(menuAtom);
  const [isScrolled, setIsScrolled] = useState<boolean>();
  const pathname = usePathname();
  const isMounted = useIsMounted();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsScrolled(window.pageYOffset > 50)
      );
    }
  }, []);

  return (
    <header
      className={clsx(
        "fixed flex md:hidden z-50 w-full h-[48px] text-navy",
        isScrolled ? "mobile-header-scrolled" : "bg-primary"
      )}
    >
      <button
        className={clsx(
          "absolute flex flex-col justify-around w-6 h-6 bg-none cursor-pointer burger-wrapper z-50"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={clsx(
            "h-[2px] rounded-lg relative burger-bar bg-navy",

            isOpen ? "rotate-45 w-6 " : "w-6"
          )}
        ></div>
        <div
          className={clsx(
            "w-6 h-[2px] rounded-lg relative burger-bar bg-navy",

            isOpen ? "opacity-0" : "opacity-100"
          )}
        ></div>
        <div
          className={clsx(
            "h-[2px] rounded-lg relative burger-bar bg-navy",

            isOpen ? "-rotate-45 w-6 " : "w-6"
          )}
        ></div>
      </button>
      {isMounted && <Menu />}
    </header>
  );
}
