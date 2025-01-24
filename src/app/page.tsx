import HomeHero from "@/components/home/home-hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`container max-w-screen-lg mx-auto px-4 py-8 ${inter.className}`}
    >
      <HomeHero />
    </div>
  );
}
