import { getAllMDXArticles, getSingleMDXArticle } from "@/utils/mdx";

interface WorkPageProps {
  params: Promise<{ workSlug: string }>;
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { workSlug } = await params;
  const mdx = await getSingleMDXArticle(`./public/md/works/${workSlug}.md`);

  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  const mdxs = await getAllMDXArticles("./public/md/works");
  return mdxs.map((mdx) => ({
    workSlug: mdx.metadata.filename.replace(/\.md$/, ""),
  }));
}
