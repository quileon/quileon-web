import Image from "next/image";

import { getMDXAbout } from "@/utils/mdx";

export default async function AboutAvatar() {
  const mdx = await getMDXAbout("./public/md/about.mdx");

  return (
    <section className="flex flex-col items-center lg:sticky lg:top-8">
      <Image
        alt="Profile Image"
        className="rounded-full border-teal border-2"
        height={200}
        src={mdx.frontmatter.avatar}
        width={200}
      />
    </section>
  );
}
