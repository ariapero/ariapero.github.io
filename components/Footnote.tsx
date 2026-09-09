"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Pages whose surface isn't the default teal body gradient. The global footer
 *  sits outside page wrappers, so it must use the same fill or a teal strip shows. */
const PAGE_SURFACE: Record<string, { className: string; color: string }> = {
  "/work/research": { className: "bg-neutral-950", color: "#0a0a0a" },
  "/work/video": { className: "bg-neutral-900", color: "#171717" },
};

export default function Footnote() {
  const pathname = usePathname();
  const surface = PAGE_SURFACE[pathname];

  useEffect(() => {
    if (!surface) return;
    const { background, backgroundImage } = document.body.style;
    document.body.style.background = surface.color;
    document.body.style.backgroundImage = "none";
    return () => {
      document.body.style.background = background;
      document.body.style.backgroundImage = backgroundImage;
    };
  }, [surface]);

  if (pathname === "/")
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-transparent z-50 p-4 font-inter">
        <p className="text-sm text-white text-center font-inter">
          &copy; {new Date().getFullYear()} Ari Peró. All rights reserved.
        </p>
      </footer>
    );

  if (
    pathname === "/bio" ||
    pathname === "/work/design" ||
    pathname === "/work/photo" ||
    pathname === "/work/instrumental" ||
    pathname === "/work/textile" ||
    pathname === "/work/composition" ||
    pathname === "/work/video" ||
    pathname === "/work/poetry"
  )
    return null;

  if (pathname === "/work" || pathname === "/search" || pathname === "/wip")
    return (
      <div>
        <footer className="fixed bottom-0 left-0 w-full bg-transparent z-50 p-4 font-zen">
          <p className="text-xs sm:text-sm leading-tight text-white opacity-80 text-center font-zen">
            &copy; {new Date().getFullYear()} Ari Peró.
          </p>
        </footer>
        <div className="fixed bottom-0 left-0 w-full bg-transparent z-40 p-3 flex justify-between items-center z-50">
          <Link href="/" className="text-white hover:underline text-xs">
            <Image
              src="/apple-icon.png"
              alt="Home"
              width={6}
              height={6}
              className="w-6 h-6"
              style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))" }}
            />
          </Link>
          <p>
            <a
              href="mailto:ariapero@mit.edu"
              className="text-white hover:underline text-xs font-zen"
            >
              ariapero@mit /{" "}
            </a>
            <a
              href="mailto:peroarian@gmail.com"
              className="text-white hover:underline text-xs font-zen sm:pr-4"
            >
              peroarian@gmail
            </a>
          </p>
        </div>
      </div>
    );

  return (
    <footer
      className={`${surface?.className ?? "bg-transparent"} w-full z-50 pt-2 pb-4 pl-4 pr-4 font-zen`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="text-white hover:underline w-1/3">
          <Image
            src="/apple-icon.png"
            alt="Home"
            width={6}
            height={6}
            className="w-6 h-6"
            style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))" }}
          />
        </Link>
        <p className="text-xs sm:text-sm text-white text-center w-1/3 opacity-80 font-zen">
          &copy; {new Date().getFullYear()} Ari Peró. All rights reserved.
        </p>
        <div className="w-1/3 text-right">
          <a
            href="mailto:peroarian@gmail.com"
            className="text-white hover:underline text-xs font-zen sm:pr-4"
          >
            peroarian@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
