import { Card, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { User } from "@heroui/user";

export default function HomeHeroPage() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <h1 className="font-bold text-4xl sm:text-6xl">
        Network and Multimedia Engineer
      </h1>
      <p className="text-xl lg:text-4xl">
        I am Shaquille, a highly motivated Informatics and Computer Engineering
        student specializing in cloud infrastructure, IoT, and backend systems.
      </p>
      <Link color="foreground" href="/about">
        <Card className="max-w-fit rounded-full">
          <CardHeader className="mr-2">
            <User
              avatarProps={{ src: "/profile-icon.jpg", alt: "Profile Picture" }}
              description="About Me!"
              name="Shaquille Arriza Hidayat"
            />
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
