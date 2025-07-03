export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Quileon's Portfolio",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Works",
      href: "/works",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
  ],
  links: {
    github: "https://github.com/quileon",
    linkedin: "https://www.linkedin.com/in/shaquille-arriza-hidayat",
  },
};
