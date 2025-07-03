import { getAllFrontmatterWorks } from "@/config/mdx";

import WorkListPage from "../work/work-list";


export default async function HomeOldWorksPage() {
  const works = await getAllFrontmatterWorks("public/markdown/works");
  const oldWorks = works.slice(1, 2);

  return <WorkListPage works={oldWorks} />;
}
