import BlogSearchClient from "./blog-search-client";

import { MDXFrontmatterBlogProps } from "@/config/mdx";

interface BlogsPageSearchProps {
  topic?: string;
  title?: string;
  blogs: MDXFrontmatterBlogProps[];
}

export default async function BlogSearchPage({
  topic,
  title,
  blogs,
}: BlogsPageSearchProps) {
  const topicList = blogs.map((blog) => blog.topic).flat();
  const uniqueTopicList = Array.from(new Set(topicList));

  return (
    <BlogSearchClient
      title={title}
      topic={topic}
      uniqueTopicList={uniqueTopicList}
    />
  );
}
