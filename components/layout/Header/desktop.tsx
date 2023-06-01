import Container from "@/components/common/container";

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
    <header className="fixed z-50 bg-white h-14 w-full">
      <Container>
        <div className="flex">
          {menuItems.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      </Container>
    </header>
  );
}
