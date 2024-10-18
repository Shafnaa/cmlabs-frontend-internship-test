import Link from "next/link";
import { Icons } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center py-6">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.instagram.com/saujanashafi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons.instagram className="w-4 h-4" />
        Instagram
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/saujanashafi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons.linkedin className="w-4 h-4" />
        LinkedIn
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.github.com/Shafnaa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons.gitHub className="w-4 h-4" />
        GitHub
      </Link>
    </footer>
  );
}
