import WorksWork from "@/components/works/works-work";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function WorkHomepage() {
  return (
    <div
      className={`container max-w-screen-lg mx-auto px-4 py-8 ${inter.className} flex flex-col gap-12`}
    >
      <WorksWork />
    </div>
  );
}
