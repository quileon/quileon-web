import Image from "next/image";
import Link from "next/link";
import ProfilePicture from "@public/ProfilePicture.jpg";

export default function HomeHero() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <h1 className="font-bold text-4xl lg:text-6xl">Network Engineer</h1>
      <p className="text-xl lg:text-4xl">
        I am Shaquille, an undergraduate network engineer from Politeknik Negeri
        Jakarta. My passion is Linux and VIM.
      </p>
      <Link
        className="flex items-center gap-3 w-44 py-0.5 pl-0.5 bg-mantle rounded-full cursor-pointer hover:ring-2 hover:ring-peach hover:ring-opacity-75"
        href="/about"
      >
        <Image
          alt="Profile Picture"
          className="rounded-full"
          height={45}
          src={ProfilePicture}
          width={45}
        />
        <p className="text-xl font-semibold">About me!</p>
      </Link>
    </div>
  );
}
