import AboutAvatar from "@/components/about/about-avatar";
import AboutDescription from "@/components/about/about-description";
import AboutProfile from "@/components/about/about-profile";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`container max-w-screen-lg mx-auto px-4 py-8 ${inter.className} flex flex-col gap-6 lg:flex-row lg:gap-12 lg:items-start`}
    >
      <AboutAvatar />
      <article className="flex flex-col flex-1 gap-12">
        <AboutProfile />
        <AboutDescription />
      </article>
    </div>
  );
}
