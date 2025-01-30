import Image from "next/image";
import Link from "next/link";
import ProfilePicture from "@public/ProfilePicture.jpg";

export default function HomeHero() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <h1 className="font-bold text-4xl lg:text-6xl">
        Network Engineer and Cloud Engineer
      </h1>
      <p className="text-xl lg:text-4xl">
        I am Shaquille, an undergraduate network engineer from Politeknik Negeri
        Jakarta. My passion is Linux and VIM.
      </p>
      <Link
        href="/about"
        className="flex items-center gap-2 w-44 py-0.5 pl-0.5 bg-pastel-pink rounded-full cursor-pointer hover:ring-2 hover:ring-pastel-brown hover:ring-opacity-75"
      >
        <Image
          src={ProfilePicture}
          alt="Profile Picture"
          width={45}
          height={45}
          className="rounded-full"
        />
        <p className="text-xl font-medium text-black">About me!</p>
      </Link>
    </div>
  );
}
