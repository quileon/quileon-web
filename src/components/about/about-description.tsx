import { getMDXAbout } from "@/utils/mdx";

export default async function AboutDescription() {
  const mdx = await getMDXAbout("./public/md/about.mdx");

  return (
    <div className="flex flex-col gap-12 prose-h1:text-3xl prose-h1:font-bold prose-h1:pb-2 prose-h2:text-xl prose-h2:font-semibold prose-h3:text-sm prose-p:pb-2 prose-ul:list-disc prose-ul:pl-5 prose-li:text-sm">
      {mdx.content}
    </div>
  );
}
