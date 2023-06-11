import { useAtom } from "jotai";
import { menuAtom } from "./mobile";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { menuItems } from "./desktop";

export default function Menu() {
  const [isOpen, setIsOpen] = useAtom(menuAtom);

  const handleClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);

    if (element) {
      element.focus();
      setTimeout(() => {
        window.scroll({
          top: element.offsetTop - 40,
          behavior: "smooth",
        });
      }, 500);
    }
  };

  return (
    <menu
      className={clsx(
        "bg-white fixed w-screen h-screen text-navy text-center",
        isOpen ? "menu-open" : "menu-close"
      )}
    >
      <div className="block mt-20 space-y-6">
        {menuItems.map((item: any, index: number) => (
          <div
            key={index}
            className={clsx(
              "text-20px font-medium text-navy",
              isOpen ? "items-open" : ""
            )}
            onClick={() => handleClick(item.link)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </menu>
  );
}
