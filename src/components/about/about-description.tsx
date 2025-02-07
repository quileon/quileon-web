import { getMDXAbout } from "@/utils/mdx";

export default async function AboutDescription() {
  const mdx = await getMDXAbout();

  return (
    <div className="prose-h1:text-3xl prose-h1:font-bold prose-h1:py-4 prose-h2:text-xl prose-h2:font-semibold prose-h3:text-sm prose-p:py-2 prose-ul:list-disc prose-ul:pl-4 prose-li:text-sm prose-li:pb-1">
      {mdx.content}
    </div>
  );
}
