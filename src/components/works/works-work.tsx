import { getAllMDXArticles } from "@/utils/mdx";
import WorkList from "../works/work-list";

export default async function WorksWork() {
  const works = await getAllMDXArticles("./public/md/works");

  return <WorkList works={works} />;
}