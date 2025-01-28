import HomeHero from "@/components/home/home-hero";
import WorkList from "@/components/home/work-list";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`container max-w-screen-lg mx-auto px-4 py-8 ${inter.className} flex flex-col gap-8`}
    >
      <HomeHero />
      <WorkList />
    </div>
  );
}
