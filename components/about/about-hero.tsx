import { Image } from "@heroui/image";

import { getFrontmatterUser } from "@/config/mdx";

export default async function AboutHeroPage() {
  const user = await getFrontmatterUser("public/markdown/about-me.md");

  return (
    <section className="flex flex-col gap-6 sm:flex-row sm:gap-12 items-center">
      <Image
        isBlurred
        alt="Profile Image"
        className="rounded-full border-teal border-2"
        height={200}
        src={`/${user.avatar}`}
        width={200}
      />
      <div className="flex flex-col flex-1 gap-2">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          {user.name}
        </h1>
        <p className="text-xl sm:text-2xl text-center pb-4">{user.title}</p>
        <p className="sm:text-lg">{user.description}</p>
      </div>
    </section>
  );
}
