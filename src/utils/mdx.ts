import { compileMDX } from "next-mdx-remote/rsc";
import Bun from "bun";

interface MDXProps {
  title: string;
  subTitle: string;
  coverImage: string;
  date: string;
  topic: string[];
  link: string;
}

export async function getSingleMDX(paths: string) {
  const mdxSource = await Bun.file(paths).text();
  const mdx = await compileMDX<MDXProps>({
    source: mdxSource,
    options: { parseFrontmatter: true },
  });
  return mdx;
}

export async function getAllMDX(paths: string) {
  const mdxGlob = new Bun.Glob("*.md");
  const mdxFiles = [];
  for await (const file of mdxGlob.scan(paths)) {
    const mdxSource = await Bun.file(`${paths}/${file}`).text();
    const mdx = await compileMDX<MDXProps>({
      source: mdxSource,
      options: { parseFrontmatter: true },
    });
    mdxFiles.push({
      metadata: {
        filename: file,
        path: `${paths}/${file}`,
      },
      ...mdx,
    });
  }
  return mdxFiles;
}
