import WorkListPage from "../work/work-list";

import { getAllFrontmatterWorks } from "@/config/mdx";

export default async function HomeOldWorksPage() {
  const works = await getAllFrontmatterWorks("public/markdown/works");
  const oldWorks = works.slice(1, 2);

  return <WorkListPage works={oldWorks} />;
}
