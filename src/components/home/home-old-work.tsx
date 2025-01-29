import { getAllMDX } from "@/utils/mdx";
import WorkList from "../works/work-list";

export default async function HomeOldWorks() {
  const works = await getAllMDX("./public/md/works");
  const oldWorks = works.slice(1, 2);

  return <WorkList works={oldWorks} />;
}
