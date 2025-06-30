import Home from "@public/home";
import { Smooch_Sans } from "next/font/google";
import Link from "next/link";
import HeaderDropdown from "./header-dropdown";

const smoochSans = Smooch_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function Header() {
  return (
    <header className="bg-crust h-16 flex items-center relative">
      <div className="container max-w-screen-lg flex flex-row gap-3 mx-auto items-center justify-between px-4">
        <div className="flex flex-row gap-3">
          <Link href="/" className="group">
            <Home
              height={35}
              width={39}
              className="transition-transform transform group-hover:scale-110 duration-150"
            />
          </Link>
          <Link href="/" className="lg:hidden">
            <h1
              className={`text-4xl font-bold text-subtext0 ${smoochSans.className}`}
            >
              Homepage
            </h1>
          </Link>
          <div className="flex-row gap-6 ml-3 hidden lg:flex">
            <Link href="/">
              <h1
                className={`text-4xl font-bold text-subtext0 ${smoochSans.className} hover:underline hover:decoration-peach cursor-pointer`}
              >
                Home
              </h1>
            </Link>
            <Link href="/about">
              <h1
                className={`text-4xl font-bold text-subtext0 ${smoochSans.className} hover:underline hover:decoration-mauve cursor-pointer`}
              >
                About
              </h1>
            </Link>
            <Link href="/works">
              <h1
                className={`text-4xl font-bold text-subtext0 ${smoochSans.className} hover:underline hover:decoration-green cursor-pointer`}
              >
                Works
              </h1>
            </Link>
            <Link href="/blogs">
              <h1
                className={`text-4xl font-bold text-subtext0 ${smoochSans.className} hover:underline hover:decoration-blue cursor-pointer`}
              >
                Blogs
              </h1>
            </Link>
          </div>
        </div>
        <HeaderDropdown />
      </div>
    </header>
  );
}
