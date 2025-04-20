import { getMDXAbout } from "@/utils/mdx";
import Image from "next/image";

export default async function AboutAvatar() {
  const mdx = await getMDXAbout("./public/md/about.mdx");

  return (
    <section className="flex flex-col items-center lg:sticky lg:top-8">
      <Image
        src={mdx.frontmatter.avatar}
        alt="Profile Image"
        width={200}
        height={200}
        className="rounded-full border-teal border-2"
      />
    </section>
  );
}
