"use client";

import { Smooch_Sans } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CaretDown from "@public/CaretDown";
import CaretUp from "@public/CaretUp";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
});

export default function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer lg:hidden">
        {isOpen ? (
          <CaretUp height={15} width={25} />
        ) : (
          <CaretDown height={15} width={25} />
        )}
      </div>
      {isOpen && (
        <nav
          className={`${smoochSans.className} font-bold text-4xl text-pastel-brown absolute w-full top-16 left-0`}
        >
          <ul className="flex flex-col gap-2 absolute bg-pastel-grey w-full">
            <li className="hover:bg-pastel-pink px-4">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-pastel-pink px-4">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:bg-pastel-pink px-4">
              <Link href="/works">Work</Link>
            </li>
            <li className="hover:bg-pastel-pink px-4">
              <Link href="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
