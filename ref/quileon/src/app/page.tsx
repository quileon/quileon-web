import HomeBlog from "@/components/home/home-blog";
import HomeHero from "@/components/home/home-hero";
import HomeNewWork from "@/components/home/home-new-work";
import HomeOldWorks from "@/components/home/home-old-work";

export default function Home() {
  return (
    <div
      className={`container max-w-screen-lg mx-auto px-4 py-8 flex flex-col gap-12`}
    >
      <HomeHero />
      <HomeNewWork />
      <HomeBlog />
      <HomeOldWorks />
    </div>
  );
}
