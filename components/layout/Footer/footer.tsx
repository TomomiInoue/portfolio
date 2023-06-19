import Container from "@/components/common/container";
import GithubSvg from "./githubSvg";
import LinkedinSvg from "./linkedinSvg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-10 md:my-1">
      <Container>
        <div className="block md:flex justify-between">
          <p>© {new Date().getFullYear()} Tomomi Inoue</p>
          <div className="flex gap-x-3 ">
            <Link
              href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
              target="_blank"
              className="cursor-pointer"
            >
              <LinkedinSvg />
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
              target="_blank"
              className="cursor-pointer"
            >
              <GithubSvg />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
