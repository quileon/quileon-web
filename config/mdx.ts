import matter from "gray-matter";

export interface MDXFrontmatterWorkProps {
  title: string;
  subtitle: string;
  date: string;
  topic: string[];
  directory: string;
  cover: string;
  filename: string;
  link?: string;
}

export interface MDXFrontmatterBlogProps {
  title: string;
  subtitle: string;
  date: string;
  topic: string[];
  directory: string;
  filename: string;
}

export interface MDXFrontmatterUserProps {
  name: string;
  title: string;
  description: string;
  avatar: string;
  filename: string;
  directory: string;
}

export async function getSingleFrontmatterWork(
  paths: string,
): Promise<MDXFrontmatterWorkProps> {
  const mdxSource = await Bun.file(paths).text();
  const mdx = matter(mdxSource);

  mdx.data.directory = paths.replace(/^public\//, "");
  mdx.data.filename = paths.split("/").pop();

  return mdx.data as MDXFrontmatterWorkProps;
}

export async function getAllFrontmatterWorks(
  paths: string,
): Promise<MDXFrontmatterWorkProps[]> {
  const mdxGlob = new Bun.Glob("*.md");
  const mdxFiles: MDXFrontmatterWorkProps[] = [];

  for await (const file of mdxGlob.scan(paths)) {
    const mdxSource = await Bun.file(`${paths}/${file}`).text();
    const mdx = matter(mdxSource);

    mdxFiles.push({
      ...mdx.data,
      directory: paths.replace(/^public\//, "/"),
      filename: file,
    } as MDXFrontmatterWorkProps);
  }

  mdxFiles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return mdxFiles;
}

export async function getSingleFrontmatterBlog(
  paths: string,
): Promise<MDXFrontmatterBlogProps> {
  const mdxSource = await Bun.file(paths).text();
  const mdx = matter(mdxSource);

  mdx.data.directory = paths.replace(/^public\//, "");
  mdx.data.filename = paths.split("/").pop();

  return mdx.data as MDXFrontmatterBlogProps;
}

export async function getAllFrontmatterBlogs(
  paths: string,
): Promise<MDXFrontmatterBlogProps[]> {
  const mdxGlob = new Bun.Glob("*.md");
  const mdxFiles: MDXFrontmatterBlogProps[] = [];

  for await (const file of mdxGlob.scan(paths)) {
    const mdxSource = await Bun.file(`${paths}/${file}`).text();
    const mdx = matter(mdxSource);

    mdxFiles.push({
      ...mdx.data,
      directory: paths.replace(/^public\//, "/"),
      filename: file,
    } as MDXFrontmatterBlogProps);
  }

  mdxFiles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return mdxFiles;
}

export async function getFrontmatterUser(
  paths: string,
): Promise<MDXFrontmatterUserProps> {
  const mdxSource = await Bun.file(paths).text();
  const mdx = matter(mdxSource);

  mdx.data.directory = paths.replace(/^public\//, "");
  mdx.data.filename = paths.split("/").pop();

  return mdx.data as MDXFrontmatterUserProps;
}
