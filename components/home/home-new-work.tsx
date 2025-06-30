import WorkListPage from "../work/work-list";

import { getAllFrontmatterWorks } from "@/config/mdx";

export default async function HomeNewWorkPage() {
  const works = await getAllFrontmatterWorks("public/markdown/works");
  const recentWork = works[0];

  return <WorkListPage works={[recentWork]} />;
}
