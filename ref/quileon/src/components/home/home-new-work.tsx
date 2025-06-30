import WorkList from "../works/work-list";

import { getAllMDXArticles } from "@/utils/mdx";

export default async function HomeNewWork() {
  const works = await getAllMDXArticles("./public/md/works");

  return <WorkList works={[works[0]]} />;
}
