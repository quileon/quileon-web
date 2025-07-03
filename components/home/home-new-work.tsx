import { getAllFrontmatterWorks } from "@/config/mdx";

import WorkListPage from "../work/work-list";


export default async function HomeNewWorkPage() {
  const works = await getAllFrontmatterWorks("public/markdown/works");
  const recentWork = works[0];

  return <WorkListPage works={[recentWork]} />;
}
