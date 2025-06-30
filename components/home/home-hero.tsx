import { Card, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { User } from "@heroui/user";

import { getFrontmatterUser } from "@/config/mdx";

export default async function HomeHeroPage() {
  const user = await getFrontmatterUser("public/markdown/about-me.md");

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <h1 className="font-bold text-4xl sm:text-6xl">{user.title}</h1>
      <p className="text-xl lg:text-4xl">{user.description.split(".")[0]}.</p>
      <Link color="foreground" href="/about">
        <Card className="max-w-fit rounded-full">
          <CardHeader className="mr-2">
            <User
              avatarProps={{ src: `/${user.avatar}`, alt: "Profile Picture" }}
              description="About Me!"
              name={user.name}
            />
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
