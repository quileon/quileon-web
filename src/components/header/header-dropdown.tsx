import { Smooch_Sans } from "next/font/google";
import Link from "next/link";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
});

export default function HeaderDropdown() {
  return (
    <nav
      className={`${smoochSans.className} font-bold text-4xl text-pastel-brown`}
    >
      <ul className="flex flex-col gap-2 absolute bg-pastel-grey w-full">
        <li className="hover:bg-pastel-pink px-4">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:bg-pastel-pink px-4">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:bg-pastel-pink px-4">
          <Link href="/work">Work</Link>
        </li>
        <li className="hover:bg-pastel-pink px-4">
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}
