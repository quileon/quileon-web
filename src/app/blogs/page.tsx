import { getAllMDXArticles } from "@/utils/mdx";
import Link from "next/link";

export default async function WorkHomepage() {
  const works = await getAllMDXArticles("./public/md/blogs");
  return (
    <div className="flex flex-col gap-4 m-4">
      {works.map((mdx) => (
        <Link
          key={mdx.frontmatter.title}
          href={`/blogs/${mdx.metadata.filename.replace(/\.md$/, "")}`}
          className="block outline-1 shadow-md p-4"
        >
          <h1 className="text-lg">{mdx.frontmatter.title}</h1>
        </Link>
      ))}
    </div>
  );
}
