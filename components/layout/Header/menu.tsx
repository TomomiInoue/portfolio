import { useAtom } from "jotai";
import { menuAtom } from "./mobile";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { menuItems } from "./desktop";

export default function Menu() {
  const [isOpen, setIsOpen] = useAtom(menuAtom);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <menu
      className={clsx("bg-white fixed w-screen h-screen text-navy text-center")}
    >
      <div className="block mt-20">
        {menuItems.map((item: any, index: number) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </menu>
  );
}
