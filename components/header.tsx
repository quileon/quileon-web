import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";
import { Github, Linkedin } from "lucide-react";

import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <Navbar maxWidth="xl">
      <NavbarContent justify="start">
        <NavbarBrand className="max-w-fit">
          <Link
            className="flex justify-start items-center gap-2 mr-2"
            color="foreground"
            href="/"
          >
            <Avatar alt="Profile Picture" src="/profile-icon.jpg" />
            <p className="font-bold text-inherit">quileon</p>
          </Link>
        </NavbarBrand>
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.label} className="hidden sm:flex">
            <Link color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <Link
          isExternal
          aria-label="GitHub"
          href={siteConfig.links.github}
          color="foreground"
        >
          <Github />
        </Link>
        <Link
          isExternal
          aria-label="LinkedIn"
          href={siteConfig.links.linkedin}
          color="foreground"
        >
          <Linkedin />
        </Link>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <Link
          isExternal
          aria-label="GitHub"
          href={siteConfig.links.github}
          color="foreground"
        >
          <Github />
        </Link>
        <Link
          isExternal
          aria-label="LinkedIn"
          href={siteConfig.links.linkedin}
          color="foreground"
        >
          <Linkedin />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        <div className="flex flex-col gap-4 mt-4 mx-4">
          {siteConfig.navItems.map((item) => (
            <NavbarMenuItem key={`menu-${item.label}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
