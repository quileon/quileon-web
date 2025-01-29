import { getAllMDX } from "@/utils/mdx";
import WorkList from "../works/work-list";

export default async function HomeNewWork() {
  const works = await getAllMDX("./public/works");

  return <WorkList works={[works[0]]} />;
}
