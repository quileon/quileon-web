import BlogListPage from "@/components/blog/blog-list";
import BlogSearchPage from "@/components/blog/blog-search";
import { getAllFrontmatterBlogs } from "@/config/mdx";

interface BlogsPageSearchProps {
  searchParams: Promise<{
    topic?: string;
    title?: string;
  }>;
}

export default async function BlogsPage({
  searchParams,
}: BlogsPageSearchProps) {
  const { topic, title } = await searchParams;

  const blogs = await getAllFrontmatterBlogs("public/markdown/blogs");
  let filteredBlogs = blogs;

  if (topic) {
    filteredBlogs = filteredBlogs.filter((blog) => blog.topic.includes(topic));
  }
  if (title) {
    filteredBlogs = filteredBlogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(title.toLowerCase()) ||
        blog.subtitle.toLowerCase().includes(title.toLowerCase())
    );
  }

  return (
    <div className="flex flex-col gap-12 lg:gap-16 mx-auto">
      <BlogSearchPage blogs={blogs} title={title} topic={topic} />
      <BlogListPage blogs={filteredBlogs} />
    </div>
  );
}

export async function generateStaticParams() {
  const blogs = await getAllFrontmatterBlogs("public/markdown/blogs");
  const params = [];

  // Generate params for each topic
  for (const blog of blogs) {
    for (const topic of blog.topic) {
      params.push({ topic });
    }
  }

  // Add a param for no filters
  params.push({});

  return params;
}
