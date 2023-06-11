import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Menu from "./menu";
import { atom, useAtom } from "jotai";

export const menuAtom = atom(false);

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useAtom(menuAtom);
  const [isScrolled, setIsScrolled] = useState<boolean>();
  const router = useRouter();

  //   const isMounted = useRef(false);
  //   useEffect(() => {
  //     isMounted.current = true;
  //     return () => {
  //       isMounted.current = false;
  //     };
  //   }, []);
  //   return isMounted;
  // };

  // const handleClick = (id: string) => {
  //   const element = document.getElementById(id);

  //   if (element) {
  //     element.focus();
  //     setTimeout(() => {
  //       window.scroll({
  //         top: element.offsetTop - 0,
  //         behavior: "smooth",
  //       });
  //     }, 500);
  //   }
  // };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsScrolled(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <header
      className={clsx(
        "fixed flex md:hidden z-50 w-full h-[48px]",
        isScrolled ? "bg-grey text-navy" : "bg-primary text-white"
      )}
    >
      <button
        className="absolute flex flex-col justify-around w-6 h-6 bg-none cursor-pointer burger-wrapper z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={clsx(
            "h-[2px] rounded-lg relative burger-bar",
            isScrolled ? "bg-navy" : "bg-white",
            isOpen ? "rotate-45 w-6 " : "w-6"
          )}
        ></div>
        <div
          className={clsx(
            "w-6 h-[2px] rounded-lg relative burger-bar",
            isScrolled ? "bg-navy" : "bg-white",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        ></div>
        <div
          className={clsx(
            "h-[2px] rounded-lg relative burger-bar",
            isScrolled ? "bg-navy" : "bg-white",
            isOpen ? "-rotate-45 w-6 " : "w-6"
          )}
        ></div>
      </button>
      {isOpen && <Menu />}
    </header>
  );
}
