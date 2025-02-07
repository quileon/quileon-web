import { compileMDX } from "next-mdx-remote/rsc";
import Bun from "bun";
import { ReactElement } from "react";

export interface MDXArticleProps {
  title: string;
  subTitle: string;
  coverImage: string;
  date: string;
  topic: string[];
  link: string;
}

export interface MDXAboutProps {
  name: string;
  title: string;
  description: string;
  avatar: string;
}

export async function getSingleMDXArticle(paths: string): Promise<{
  frontmatter: MDXArticleProps;
  content: ReactElement;
}> {
  const mdxSource = await Bun.file(paths).text();
  const mdx = await compileMDX<MDXArticleProps>({
    source: mdxSource,
    options: { parseFrontmatter: true },
  });
  return mdx;
}

export async function getAllMDXArticles(paths: string) {
  const mdxGlob = new Bun.Glob("*.md");
  const mdxFiles = [];
  for await (const file of mdxGlob.scan(paths)) {
    const mdxSource = await Bun.file(`${paths}/${file}`).text();
    const mdx = await compileMDX<MDXArticleProps>({
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

  mdxFiles.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });

  return mdxFiles;
}

export async function getMDXAbout(): Promise<{
  frontmatter: MDXAboutProps;
  content: ReactElement;
}> {
  const mdxSource = await Bun.file("./public/md/about.md").text();
  const mdx = await compileMDX<MDXAboutProps>({
    source: mdxSource,
    options: { parseFrontmatter: true },
  });
  return mdx;
}
