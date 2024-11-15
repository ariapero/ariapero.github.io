import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Montserrat, Reenie_Beanie } from "next/font/google";
import Footnote from "../components/Footnote";
import Head from "next/head";
import "./globals.css";

// const inter = Inter({ weight: "variable", subsets: ['latin'], variable: '--font-inter' })
// const montserrat = Montserrat({ weight: "variable", subsets: ['latin'], variable: '--font-montserrat' })
// const reenieBeanie = Reenie_Beanie({ weight: '400', subsets: ['latin'], variable: '--font-reenie' })
// const sloop = localFont({
//   src: "./fonts/Sloop-ScriptThree.ttf",
//   variable: "--font-sloop",
// });
// const highriseRegular = localFont({
//   src: "./fonts/HighriseFont-Demo-Regular.otf",
//   variable: "--font-highrise-regular",
// });
// const highriseBold = localFont({
//   src: "./fonts/HighriseFont-Bold-Demo.otf",
//   variable: "--font-highrise-bold",
// });
// const highriseCondensed = localFont({
//   src: "./fonts/HighriseFont-Condensed-Demo.otf",
//   variable: "--font-highrise-condensed",
// });

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

export const metadata: Metadata = {
  title: "Ari Peró Portfolio",
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
  // export default function RootLayout({
  //     children,
  // }: {
  //     children: React.ReactNode
  // }) {
  return (
    // <html lang="en">
    <html
      lang="en"
      className={`
      ${inter.variable} 
      ${montserrat.variable} 
      ${reenieBeanie.variable} 
      ${sloop.variable} 
      ${highriseRegular.variable} 
      ${highriseBold.variable} 
      ${highriseCondensed.variable}
    `}
    >
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
      {/* <body className={inter.className}> */}
      {/* <body className="font-sans"> */}
      <body className="font-sans flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 w-full bg-transparent z-50 p-4">
          <nav>{/* Add navigation items here if needed */}</nav>
        </header>
        {/* <main>{children}</main> */}
        <main className="flex-grow">{children}</main>
        {/* <footer className="fixed bottom-0 left-0 w-full bg-transparent z-50 p-4 font-inter">
          <p className="text-sm text-white-500 opacity-80 text-center font-inter">&copy; {new Date().getFullYear()} Ari Peró. All rights reserved.</p>
        </footer> */}
        <Footnote />
      </body>
    </html>
    // );
  );
}
