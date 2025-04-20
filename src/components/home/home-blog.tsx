import { getAllMDXArticles } from "@/utils/mdx";
import Link from "next/link";

export default async function HomeBlog() {
  const blogs = await getAllMDXArticles("./public/md/blogs");
  blogs.slice(0, 2);

  return (
    <article className="flex flex-col lg:flex-row gap-2 lg:px-10">
      <h2 className="text-2xl font-semibold lg:w-1/5">Latest Blog</h2>
      <section className="lg:w-4/5 flex flex-col lg:flex-row gap-6 p-4 lg:p-0">
        {blogs.map((mdx) => (
          <Link
            key={mdx.metadata.filename}
            href={`/blogs/${mdx.metadata.filename.replace(/\.md$/, "")}`}
            className="lg:w-1/2 flex flex-col gap-1 bg-mantle p-4 rounded-lg hover:ring-2 hover:ring-maroon"
          >
            <h3 className="text-sm font-semibold">{mdx.frontmatter.title}</h3>
            <section className="flex flex-col gap-2">
              <time
                className="block text-xs"
                dateTime={new Date(mdx.frontmatter.date).toLocaleDateString(
                  ["en-ID", "id-ID"],
                  {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }
                )}
              >
                {new Date(mdx.frontmatter.date).toLocaleDateString(
                  ["en-ID", "id-ID"],
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </time>
              <ul className="flex flex-row gap-2">
                {mdx.frontmatter.topic.map((topic) => (
                  <li
                    key={topic}
                    className="bg-maroon/20 text-xs text-maroon rounded-full px-2 py-0.5"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </section>
          </Link>
        ))}
      </section>
    </article>
  );
}
