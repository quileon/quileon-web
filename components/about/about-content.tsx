import { ReactNode } from "react";
import { Divider } from "@heroui/divider";

import AboutMe from "@/public/markdown/about-me.md";

function CustomH2({ children }: { children?: ReactNode }) {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 pb-2">{children}</h2>
      <Divider className="mb-5" />
    </>
  );
}

function CustomH3({ children }: { children?: ReactNode }) {
  return <h3 className="text-large sm:text-xl font-bold">{children}</h3>;
}

function CustomH4({ children }: { children?: ReactNode }) {
  return (
    <h4 className="text-medium sm:text-lg font-medium mb-4">{children}</h4>
  );
}

function CustomUL({ children }: { children?: ReactNode }) {
  return <ul className="list-disc list-outside ml-4 space-y-1">{children}</ul>;
}

function CustomLI({ children }: { children?: ReactNode }) {
  return <li className="">{children}</li>;
}

const overrideComponents = {
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  ul: CustomUL,
  li: CustomLI,
};

export default async function AboutContentPage() {
  return <AboutMe components={overrideComponents} />;
}
