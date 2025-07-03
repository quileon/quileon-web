import Link from "next/link";

import { getAllMDXArticles } from "@/utils/mdx";

export default async function WorkHomepage() {
  const works = await getAllMDXArticles("./public/md/blogs");

  return (
    <div className="flex flex-col gap-4 m-4">
      {works.map((mdx) => (
        <Link
          key={mdx.frontmatter.title}
          className="block outline-1 shadow-md p-4"
          href={`/blogs/${mdx.metadata.filename.replace(/\.md$/, "")}`}
        >
          <h1 className="text-lg">{mdx.frontmatter.title}</h1>
        </Link>
      ))}
    </div>
  );
}
