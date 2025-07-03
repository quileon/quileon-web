import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

import { MDXFrontmatterBlogProps } from "@/config/mdx";

interface BlogListPageProps {
  blogs: MDXFrontmatterBlogProps[];
}

function topicParam(topic: string) {
  const params = new URLSearchParams();

  params.append("topic", topic);

  return `/blogs?${params.toString()}`;
}

export default function BlogListPage({ blogs }: BlogListPageProps) {
  return (
    <article className="flex flex-col gap-12 sm:px-10">
      {blogs.map((blog) => (
        <Card
          key={blog.filename}
          as={Link}
          className="flex flex-col"
          href={`/blogs/${blog.filename.replace(/\.md$/, "")}`}
        >
          <CardHeader className="flex flex-col items-start">
            <h3 className="text-medium">{blog.title}</h3>
            <p className="text-small text-default-500">
              {new Date(blog.date).toLocaleDateString(["en-ID", "id-ID"], {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-small text-default-500">{blog.subtitle}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            {blog.topic && (
              <div className="flex flex-row gap-2">
                {blog.topic.map((topic) => (
                  <Chip key={topic} as={Link} href={topicParam(topic)}>
                    {topic}
                  </Chip>
                ))}
              </div>
            )}
          </CardFooter>
        </Card>
      ))}
    </article>
  );
}
