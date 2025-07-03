import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { ExternalLink, Rabbit } from "lucide-react";

import { MDXFrontmatterWorkProps } from "@/config/mdx";

interface WorkListPageProps {
  works: MDXFrontmatterWorkProps[];
}

export default function WorkListPage({ works }: WorkListPageProps) {
  return (
    <article className="flex flex-col gap-12 sm:px-10">
      {works.map((work) => (
        <section key={work.filename} className="flex flex-col gap-10">
          <Link
            className="block"
            href={`/works/${work.filename.replace(/.md$|.mdx$/, "")}`}
          >
            <Card
              isFooterBlurred
              className="w-full h-[200px] sm:h-[400px] group"
            >
              <Image
                isBlurred
                removeWrapper
                alt={work.title}
                className="object-cover w-full h-full rounded-lg"
                src={`${work.directory}/images/${work.cover}`}
              />
              <CardFooter className="absolute bottom-0 bg-black/40 z-10 border-t-1 border-default-600 dark:border-default-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white/60 text-small sm:text-large">
                  {work.title}
                </p>
              </CardFooter>
            </Card>
          </Link>
          <section className="flex flex-col sm:flex-row gap-4">
            <h3 className="text-2xl font-semibold sm:w-5/12">{work.title}</h3>
            <div className="sm:w-7/12 flex flex-col gap-4">
              <p>{work.subtitle}</p>
              <div className="flex flex-row gap-10 text-md">
                <Link
                  isBlock
                  isExternal
                  showAnchorIcon
                  anchorIcon={<Rabbit className="ml-2" />}
                  color="primary"
                  href={`/works/${work.filename.replace(/.md$|.mdx$/, "")}`}
                >
                  Read case study
                </Link>
                {work.link && (
                  <Link
                    isBlock
                    isExternal
                    showAnchorIcon
                    anchorIcon={<ExternalLink className="ml-2" />}
                    color="secondary"
                    href={work.link}
                  >
                    View project
                  </Link>
                )}
              </div>
            </div>
          </section>
        </section>
      ))}
    </article>
  );
}
