"use client";

import Home from "@public/Home";
import { Smooch_Sans } from "next/font/google";
import Link from "next/link";
import CaretDown from "@public/CaretDown";
import CaretUp from "@public/CaretUp";
import { useState } from "react";
import HeaderDropdown from "./header-dropdown";

const smoochSans = Smooch_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <header>
      <nav className="bg-pastel-green h-16 flex items-center relative">
        <div className="container max-w-screen-lg flex flex-row gap-3 mx-auto items-center justify-between px-4">
          <div className="flex flex-row gap-3">
            <Link href="/">
              <Home height={35} width={39} />
            </Link>
            <Link href="/" className="lg:hidden">
              <h1
                className={`text-4xl font-bold text-pastel-white ${smoochSans.className}`}
              >
                Homepage
              </h1>
            </Link>
            <div className="flex-row gap-6 ml-3 hidden lg:flex">
              <Link href="/">
                <h1
                  className={`text-4xl font-bold text-pastel-white ${smoochSans.className} hover:underline cursor-pointer`}
                >
                  Home
                </h1>
              </Link>
              <Link href="/about">
                <h1
                  className={`text-4xl font-bold text-pastel-white ${smoochSans.className} hover:underline cursor-pointer`}
                >
                  About
                </h1>
              </Link>
              <Link href="/work">
                <h1
                  className={`text-4xl font-bold text-pastel-white ${smoochSans.className} hover:underline cursor-pointer`}
                >
                  Work
                </h1>
              </Link>
              <Link href="/blogs">
                <h1
                  className={`text-4xl font-bold text-pastel-white ${smoochSans.className} hover:underline cursor-pointer`}
                >
                  Blogs
                </h1>
              </Link>
            </div>
          </div>
          <div onClick={toggleDropdown} className="cursor-pointer lg:hidden">
            {isOpen ? (
              <CaretUp height={15} width={25} />
            ) : (
              <CaretDown height={15} width={25} />
            )}
          </div>
        </div>
      </nav>
      {isOpen && <HeaderDropdown />}
    </header>
  );
}
