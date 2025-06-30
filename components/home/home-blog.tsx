import { Card, CardHeader } from "@heroui/card";

import { getAllFrontmatterBlogs } from "@/config/mdx";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import Link from "next/link";

export default async function HomeBlogPage() {
  const blogs = await getAllFrontmatterBlogs("public/markdown/blogs");

  blogs.slice(0, 2);

  return (
    <article className="flex flex-col sm:flex-row gap-2 sm:px-10">
      <h2 className="text-2xl font-semibold sm:w-1/5">Latest Blog</h2>
      <section className="lg:w-4/5 flex flex-col sm:flex-row gap-6 p-4 sm:p-0">
        {blogs.map((blog) => (
          <Card
            key={blog.filename}
            className="sm:w-1/2"
            as={Link}
            href={`/blogs/${blog.filename.replace(/\.md$/, "")}`}
          >
            <CardHeader className="flex flex-col gap-1 items-start">
              <p className="text-medium">{blog.title}</p>
              <p className="text-small text-default-500">
                {new Date(blog.date).toLocaleDateString(["en-ID", "id-ID"], {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </CardHeader>
            <Divider className="hidden sm:block" />
            {blog.topic && (
              <div className="hidden sm:flex flex-row gap-2 p-2">
                {blog.topic.map((topic) => (
                  <Chip key={topic}>{topic}</Chip>
                ))}
              </div>
            )}
          </Card>
        ))}
      </section>
    </article>
  );
}
