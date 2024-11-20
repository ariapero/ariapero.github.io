import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Montserrat, Reenie_Beanie, Zen_Kaku_Gothic_New } from "next/font/google";
import Footnote from "../components/Footnote";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reenie",
  display: "swap",
});

const zen = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen",
  display: "swap",
});

const sloop = localFont({
  src: "./fonts/Sloop-ScriptThree.ttf",
  variable: "--font-sloop",
  display: "swap",
});

const highriseRegular = localFont({
  src: "./fonts/HighriseFont-Demo-Regular.otf",
  variable: "--font-highrise-regular",
  display: "swap",
});

const highriseBold = localFont({
  src: "./fonts/HighriseFont-Bold-Demo.otf",
  variable: "--font-highrise-bold",
  display: "swap",
});

const highriseCondensed = localFont({
  src: "./fonts/HighriseFont-Condensed-Demo.otf",
  variable: "--font-highrise-condensed",
  display: "swap",
});

const grand = localFont({
  src: "./fonts/GrandSlang-Roman.ttf",
  variable: "--font-grand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ari peró",
  description:
    "Arts and Engineering portfolio of Ari Peró, BS Candidate at MIT DUSP and EECS",
  icons: [
    {
      rel: "icon",
      url: "./favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
      ${inter.variable} 
      ${montserrat.variable} 
      ${reenieBeanie.variable} 
      ${zen.variable}
      ${sloop.variable} 
      ${highriseRegular.variable} 
      ${highriseBold.variable} 
      ${highriseCondensed.variable}
      ${grand.variable}
    `}
    >
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      {/* <body className="font-sans flex flex-col min-h-screen"> */}
      <body className="font-sans flex flex-col min-h-screen bg-gradient-to-br from-[#163734] to-[#238177]">
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 w-full bg-transparent z-50 p-4">
            <nav></nav>
          </header>
          <main className="flex-grow">{children}</main>
          <Footnote />
        </div>
      </body>
    </html>
  );
}
