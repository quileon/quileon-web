import { getMDXAbout } from "@/utils/mdx";

export default async function AboutProfile() {
  const mdx = await getMDXAbout();

  return (
    <section className="flex flex-col gap-2 items-center">
      <h1 className="text-4xl font-bold text-center">{mdx.frontmatter.name}</h1>
      <h2 className="text-2xl pb-2 text-center">{mdx.frontmatter.title}</h2>
      <p className="text-xl">{mdx.frontmatter.description}</p>
    </section>
  );
}
