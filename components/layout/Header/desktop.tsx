import Container from "@/components/common/container";
import Link from "next/link";

const menuItems = [
  {
    title: "About",
  },
  {
    title: "Experience",
  },
  {
    title: "Work",
  },
  {
    title: "Contact",
  },
];

export default function DesktopHeader() {
  return (
    <header className="fixed z-50 bg-navy text-white w-full">
      <Container>
        <div className="flex justify-end ml-auto py-5">
          {menuItems.map((item, index) => (
            <div key={index} className="mx-5 text-20px">
              <Link href={`#${item.title}`}>{item.title}</Link>
            </div>
          ))}
        </div>
      </Container>
    </header>
  );
}
