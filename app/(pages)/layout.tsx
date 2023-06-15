import Header from "../components/layout/Header";
import "../styles/globals.css";
export const metadata = {
  title: "Portfolio website - Tomomi Inoue",
  description: "Freelance web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
