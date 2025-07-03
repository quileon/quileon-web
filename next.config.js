import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  output: "standalone",
};

const withMDX = createMDX({
  // Markdown plugins
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
});

// module.exports = nextConfig;
export default withMDX(nextConfig);
