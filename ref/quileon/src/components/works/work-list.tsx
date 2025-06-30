import Image from "next/image";
import Link from "next/link";
import OpenLink from "@public/open-link";
import RightArrow from "@public/right-arrow";
import { ReactElement } from "react";

import { MDXArticleProps } from "@/utils/mdx";

interface WorkListProps {
  works: {
    content: ReactElement;
    metadata: {
      filename: string;
      path: string;
    };
    frontmatter: MDXArticleProps;
  }[];
}

export default async function WorkList({ works }: WorkListProps) {
  return (
    <article className="flex flex-col gap-10 lg:px-10">
      {works.map((mdx) => (
        <div key={mdx.metadata.filename} className="flex flex-col gap-3">
          <Image
            alt={mdx.frontmatter.title}
            className="rounded-lg w-full h-[200px] object-cover border-yellow border-2"
            height={300}
            src={`/md/works/${mdx.frontmatter.coverImage}`}
            width={600}
          />
          <section className="flex flex-col px-2 lg:flex-row gap-4">
            <h3 className="text-2xl text-yellow font-semibold lg:w-5/12">
              {mdx.frontmatter.title}
            </h3>
            <div className="lg:w-7/12 flex flex-col gap-4">
              <p>{mdx.frontmatter.subTitle}</p>
              <div className="flex flex-row gap-10 text-peach font-semibold text-md">
                <Link
                  className="flex flex-row gap-2 items-center group"
                  href={`/works/${mdx.metadata.filename.replace(/\.md$/, "")}`}
                >
                  <p className="group-hover:underline transition-all">
                    Read case study
                  </p>
                  <RightArrow
                    className="group-hover:translate-x-[2px] transition-transform"
                    height={14}
                    width={14}
                  />
                </Link>
                {mdx.frontmatter.link && (
                  <Link
                    className="flex flex-row gap-2 items-center group"
                    href={mdx.frontmatter.link}
                    target="_blank"
                  >
                    <p className="group-hover:underline">View project</p>
                    <OpenLink
                      className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform"
                      height={14}
                      width={14}
                    />
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
