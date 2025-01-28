import { getAllMDX, getSingleMDX } from "@/utils/mdx";

interface WorkPageProps {
  params: Promise<{ workSlug: string }>;
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { workSlug } = await params;
  const mdx = await getSingleMDX(`./public/works/${workSlug}.md`);

  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  const mdxs = await getAllMDX("./public/works");
  return mdxs.map((mdx) => ({
    workSlug: mdx.metadata.filename.replace(/\.md$/, ""),
  }));
}
