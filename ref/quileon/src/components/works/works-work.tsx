import WorkList from "../works/work-list";

import { getAllMDXArticles } from "@/utils/mdx";

export default async function WorksWork() {
  const works = await getAllMDXArticles("./public/md/works");

  return <WorkList works={works} />;
}
