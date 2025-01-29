import HomeHero from "@/components/home/home-hero";
import HomeNewWork from "@/components/home/home-new-work";
import HomeOldWorks from "@/components/home/home-old-work";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`container max-w-screen-lg mx-auto px-4 py-8 ${inter.className} flex flex-col gap-8`}
    >
      <HomeHero />
      <HomeNewWork />
      <HomeOldWorks />
    </div>
  );
}
