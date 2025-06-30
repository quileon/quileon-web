import HomeBlogPage from "@/components/home/home-blog";
import HomeHeroPage from "@/components/home/home-hero";
import HomeNewWorkPage from "@/components/home/home-new-work";
import HomeOldWorksPage from "@/components/home/home-old-work";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 lg:gap-16 mx-auto mb-12">
      <HomeHeroPage />
      <HomeNewWorkPage />
      <HomeBlogPage />
      <HomeOldWorksPage />
    </div>
  );
}
