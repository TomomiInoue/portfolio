import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState<boolean>();
  const router = useRouter();

  const handleClick = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.focus();
      setTimeout(() => {
        window.scroll({
          top: element.offsetTop - 0,
          behavior: "smooth",
        });
      }, 500);
    }
  };

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
        isScrolled ? "bg-white text-navy" : "bg-primary text-white"
      )}
    >
      <button className="flex flex-col justify-around w-6 h-6 bg-none cursor-pointer burger-wrapper">
        <div
          className={clsx(
            "w-6 h-[2px] rounded-lg relative burger-bar",
            isScrolled ? "bg-navy" : "bg-white"
          )}
        ></div>
        <div
          className={clsx(
            "w-6 h-[2px] rounded-lg relative burger-bar",
            isScrolled ? "bg-navy" : "bg-white"
          )}
        ></div>
        <div
          className={clsx(
            "w-6 h-[2px] rounded-lg relative burger-bar",
            isScrolled ? "bg-navy" : "bg-white"
          )}
        ></div>
      </button>
    </header>
  );
}
