import WorkListPage from "@/components/work/work-list";
import { getAllFrontmatterWorks } from "@/config/mdx";

export default async function WorksPage() {
  const works = await getAllFrontmatterWorks("public/markdown/works");

  return <WorkListPage works={works} />;
}
