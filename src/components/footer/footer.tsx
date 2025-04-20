import { Smooch_Sans } from "next/font/google";
import LinkedIn from "@public/linkedin";
import GitHub from "@public/github";
import Link from "next/link";

const smoochSans = Smooch_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer
      className={`bg-yellow ${smoochSans.className} flex flex-col items-center justify-center gap-1 h-20 pt-2 text-base`}
    >
      <nav className="flex flex-row gap-4">
        <Link href="https://github.com/Quillzyy" target="_blank">
          <GitHub className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/shaquille-arriza-hidayat"
          target="_blank"
        >
          <LinkedIn className="h-5 w-5" />
        </Link>
      </nav>
      <h2 className="text-2xl font-bold">quillzyy powered 2024</h2>
    </footer>
  );
}
