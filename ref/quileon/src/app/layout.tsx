import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Header } from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// const helvetica = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Helvetica.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Helvetica-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Helvetica-Light.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Helvetica-Oblique.ttf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "../../public/fonts/Helvetica-BoldOblique.ttf",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "../../public/fonts/Helvetica-LightOblique.ttf",
//       weight: "300",
//       style: "italic",
//     },
//   ],
//   variable: "--font-helvetica",
// });

const sansFrancisco = localFont({
  src: [
    {
      path: "../../public/fonts/SFProDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/SFProDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/SFProDisplay-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Quillzyy's Portfolio",
  description: "Quillzyy's portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} $ antialiased bg-white text-black min-h-screen flex flex-col`}
        className={`${sansFrancisco.className} antialiased latte dark:mocha bg-base text-text min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
