import { getAllMDX } from "@/utils/mdx";
import Image from "next/image";
import Link from "next/link";
import OpenLink from "@public/OpenLink";
import RightArrow from "@public/RightArrow";

export default async function WorkList() {
  const mdxs = await getAllMDX("./public/works");

  return (
    <article className="flex flex-col gap-10 lg:p-10">
      {mdxs.map((mdx) => (
        <div key={mdx.metadata.filename} className="flex flex-col gap-3">
          <Image
            src={`/works/${mdx.frontmatter.coverImage}`}
            alt={mdx.frontmatter.title}
            width={600}
            height={300}
            className="rounded-lg w-full h-[200px] object-cover border-pastel-grey border-2"
          />
          <section className="flex flex-col px-2 lg:flex-row gap-4">
            <h1 className="text-2xl font-semibold lg:w-5/12">
              {mdx.frontmatter.title}
            </h1>
            <div className="lg:w-7/12 flex flex-col gap-4">
              <p>{mdx.frontmatter.subTitle}</p>
              <div className="flex flex-row gap-10 text-pastel-brown font-semibold text-md">
                <Link
                  href={`/works/${mdx.metadata.filename.replace(/\.md$/, "")}`}
                  className="flex flex-row gap-2 items-center"
                >
                  <p>Read case study</p>
                  <RightArrow height={14} width={14} />
                </Link>
                {mdx.frontmatter.link && (
                  <Link
                    href={mdx.frontmatter.link}
                    className="flex flex-row gap-2 items-center"
                    target="_blank"
                  >
                    <p>View project</p>
                    <OpenLink height={14} width={14} />
                  </Link>
                )}
              </div>
            </div>
          </section>
        </div>
      ))}
    </article>
  );
}
