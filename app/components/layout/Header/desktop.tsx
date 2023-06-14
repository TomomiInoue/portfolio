"use client";

import { usePathname, useRouter } from "next/navigation";
import Container from "@/app/components/common/container";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

export const menuItems = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "LifeStyle",
    link: "lifestyle",
  },
  {
    title: "Experience",
    link: "experience",
  },
  {
    title: "Work",
    link: "work",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

export default function DesktopHeader() {
  const [isScrolled, setIsScrolled] = useState<boolean>();
  const pathname = usePathname();

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
        setIsScrolled(window.pageYOffset > 80)
      );
    }
  }, []);

  return (
    <header
      className={clsx(
        "hidden md:flex fixed z-50 w-full text-white",
        isScrolled ? "header-scrolled" : "bg-primary"
      )}
    >
      <Container>
        <div className="flex justify-end ml-auto py-5">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "mx-5 text-20px hover:scale-125",
                pathname?.includes(item.title) ? "border-b-2 border-white" : ""
              )}
              onClick={() => handleClick(item.link)}
            >
              <Link href={`#${item.title}`}>{item.title}</Link>
            </div>
          ))}
        </div>
      </Container>
    </header>
  );
}
