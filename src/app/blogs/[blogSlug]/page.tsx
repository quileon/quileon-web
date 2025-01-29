import { getAllMDX, getSingleMDX } from "@/utils/mdx";

interface WorkPageProps {
  params: Promise<{ blogSlug: string }>;
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { blogSlug } = await params;
  const mdx = await getSingleMDX(`./public/md/blogs/${blogSlug}.md`);

  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  const mdxs = await getAllMDX("./public/md/blogs");
  return mdxs.map((mdx) => ({
    blogSlug: mdx.metadata.filename.replace(/\.md$/, ""),
  }));
}
