"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const originalImages = [
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ee6a17b3-ab03-4521-bad2-8be3821b6e5b_rw_1920.jpg?h=ce7feb562d9213d788a7f2e1b78f494d",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/fcf2bcf3-382d-4a38-9b09-217d157696d3_rw_1920.jpg?h=2612907ecb508d6fc3d38e657d190844",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b41f973a-4de9-4787-9310-24edc599c6df_rw_1920.jpg?h=10e1467b9d8cbf115bf3127e2337a915",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/19dea52a-3129-483b-94b0-2dadc7cdeb69_rw_1920.jpg?h=8d80c169fb26d3f28368aa3e7f5c1331",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/a3723a24-7515-45fc-bca3-182ae1512157_rw_1920.jpg?h=c89599339ed13dc0ae282fcb40ded1fc",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/7cb6f2a9-5498-4f7d-8e44-ca14a629cd9a_rw_1920.jpg?h=5d6956d17c66aee596f45fb364afb117",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/e238f66a-59ab-4a48-83d8-0ea62d28edb4_rw_1920.jpg?h=c68032816b41ca27949b7801cedafd0e",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/91048952-d67a-4562-810d-2f33a25e0c2d_rw_1920.jpg?h=28e60751f8329a475af9334518749129",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/9557144a-9d45-40bf-80d0-185eb082db59_rw_1920.jpg?h=87f1f261536978d8f5c905403010802a",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/5f518272-7cd1-46a2-bbe5-e6c06ff48a52_rw_1920.jpg?h=68f34929457f0e3383283a1964e12c2f",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d6f20a88-60e0-4dbf-bcd6-b266c5f3c479_rw_1920.jpg?h=d53969dcf22b6346abdd1498aee44681",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/3b72f09e-f34b-4129-a97b-bfbbaf3c0e77_rw_1920.jpg?h=9b7c62e6178c3aaf66aff904f6df1af4",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0557d953-6957-47e2-bfa6-1e0182da0f7b_rw_1920.jpg?h=3e464bce0057ec6dd70b2b8e0e2c0e89",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/4693fe90-1676-4572-9c16-c1f15d33c5be_rw_1920.jpg?h=b8c8daf55b3ffedc8b5cb2fdb45a3c19",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/2450fc4c-3b72-4ba4-96e3-f85a83ff3211_rw_1920.jpg?h=21984a040775adde3d8797bbe6eff5b3",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/c7bc9926-8dd3-4eee-8dc0-80d19ea86c80_rw_1920.jpg?h=30b9398bd1bd125d20e8799a7b9cd344",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/4711c6dc-5f64-4751-b3da-327519709989_rw_1920.jpg?h=b29a6e967d37973d4b40c980884c4f32",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6af21685-6914-421c-a72b-eeacefe1b658_rw_1920.jpg?h=1f786f912d4d699046d8479bba6acf85",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8e357ffa-93d9-4568-8601-b64bb1b58ebc_rw_1920.jpg?h=1ba25604e3a44ee3fbd505648c432bc6",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8f650c2d-e924-4ad6-bbb6-b1ae83336104_rw_1920.jpg?h=823b23db6b33918ca7622d9c5a36affc",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/6036fc56-7fa5-438d-8d0a-7f71d95d82a9_rw_1920.jpg?h=a901548caa5b0f15fef0bc6bc6cbb733",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/07cb2cbe-5821-45ab-b7a7-c9cce35a27aa_rw_1920.jpg?h=89df16f2d0e30bdf29edd53430f4e164",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/3f8ab922-90e3-4976-a736-906cab26b5c3_rw_1920.jpg?h=a1bf0ed38a5a3e69fb57307bd9df544d",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b7a29ef3-23ac-49a5-bbd9-97ecd488514d_rw_1920.jpg?h=11c45a52d1d8b865b082556945b4ff48",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/b5b17e32-98a8-4fb5-9841-b08b9a60f416_rw_1920.jpg?h=81a8249e82dcac47e391eaf0a8a32904",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/ff5efbb6-8633-4853-b742-7db74b94abdf_rw_1920.jpg?h=647b1ed781ed520adbe85d52f283664e",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/41a00321-cd24-4451-b80b-0097e0f42ccf_rw_3840.png?h=9b858d4833c8a78592aedbfc2c823e6e",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/5486bd2a-3aa5-4842-9b88-a69993041ce8_rw_3840.png?h=6d54891721b4a808dc1786f8f324659b",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/5fd1e155-3a7a-4432-b337-59d966bb85bf.png?h=bf6537583050871a420bb0836dfe9d2d",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8f4b43cb-04a6-4816-8380-450b0f3d7980_rw_1200.jpg?h=b8b21aafb89dcf4bdcd649047ab1eeb4",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/94032b62-1bee-4ef6-bc3f-3c124ebe2514_rw_3840.jpg?h=59d5616624af851c33022fd3d1b3ccdc",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/95681ba9-9b51-4cc4-bc07-d24506749ed1_rw_3840.jpg?h=0af0889a01fdb2b003cafeb98ebd8fdd",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/03e75685-95ba-4387-9b73-85b413fc8f9e_rw_3840.png?h=9c1cedaab20fe0809d4ee16ef86d1a5f",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0dcc2c56-9c9d-49f3-ba86-f4b57bfa1e3b_rw_3840.jpg?h=77310b61e8f0b90cc47e21e1a8239bf4",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/e1131634-ee2c-45f0-b07f-5df9fcc9f747_rw_3840.jpg?h=e26f88110a77b18c4787fd8f23f3edb6",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/1ee7cb05-5f9e-4908-97ac-31d0e295e92a_rw_3840.png?h=bab0212aeb610f451afde0433cd599a3",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/d1ae0fdf-0420-48c1-923d-6d641dec1af9_rw_3840.png?h=80acd2d778076e934b249126d8f71358",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0420826f-984d-4db9-b84d-83324abdbcc8_rw_1920.JPG?h=5b791e765c71936e04d8d7a39c34bb08",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/80490a62-fa28-4b63-b685-185ae52bb7de_rw_1920.JPG?h=6df1f0823185c88e134c218e0109c04d",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/80490a62-fa28-4b63-b685-185ae52bb7de_rw_1920.JPG?h=6df1f0823185c88e134c218e0109c04d",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/f330307f-605b-4dc9-af3d-9b5e006c0f83_rw_1920.JPG?h=62c6e2be26b6f10237db45dc6a48fd61",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/43a6d553-6143-41ec-86c8-6cf94520559d_rw_1920.JPG?h=aeb4412a09b84d61d84530f43f54f60f",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8ed2d0e1-2c76-4959-a22e-811e02b4084f_rw_1200.JPG?h=c6444dcd0b5d44611b8ec144da51aebf",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/1b1f9cfb-a704-4509-acf6-1a56a5633f2b_rw_1200.jpg?h=7c7344ca274018d68c7e30b3cf7d7c97",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/658896ac-8f80-4b2f-80aa-132a82661655_rw_1200.JPG?h=63b2ffbb672092e21794adad00830cd9",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/8c2e947d-b373-4c2e-b895-a21daaceee02_rw_1920.jpg?h=9e52e6e7ad64c1988035510cdebb0113",
  "https://cdn.myportfolio.com/1e4e6370-269d-4446-8e3a-00bc90e58c53/0f1e6c1d-a45b-469a-b246-689bd7d963a3_rw_1920.jpg?h=0623c48624685f9d8b239309f01c740c",
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function PhotoPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const slideshowRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const randomizedImages = useMemo(() => shuffleArray(originalImages), []);

  const randomDepths = useMemo(
    () =>
      Array.from({ length: randomizedImages.length }, () => Math.random() * 40),
    [randomizedImages.length]
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        if (slideshowRef.current) {
          const newPosition = prevPosition + 1.1; // scroll speed
          return newPosition % slideshowRef.current.scrollWidth;
        }
        return prevPosition;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideshowRef.current) {
      slideshowRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div className="h-[100dvh] bg-black text-yellow-500 relative overflow-hidden font-mono flex flex-col">  {/* or h-screen */}
      <title>ari peró | photography & editing</title>
      {/* Autoscrolling background */}
      <div
        ref={slideshowRef}
        className="absolute inset-0 flex overflow-hidden"
        style={{ perspective: "1000px", perspectiveOrigin: "50% 50%" }}
      >
        {randomizedImages.map((src, index) => (
          <div
            key={index}
            className="shrink-0 w-full h-full"
            style={{
              transform: `translateZ(${
                Math.sin(randomDepths[index] * 0.5) * 280
              }px)`, // depth effect (image size)
              opacity: 0.7,
            }}
          >
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={60}
              priority={index < 2}
            />
          </div>
        ))}
      </div>
      {/* <div className="relative z-10 container mx-auto px-4 py-8"> */}
      {/* <div className="relative z-10 flex flex-col justify-between h-full p-8"> */}
      <div className="relative z-10 flex flex-col justify-between h-full px-4 md:px-16 py-6 md:py-8">  {/* browser view: px-16 py-8 */}
        <header>
          <div className="flex justify-between items-start text-xs">
            <div>
              <h2 className="text-sm mb-1.5">
                <Link
                  href="/work"
                  className="inline-flex items-center hover:underline hover:text-white transition-colors"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  BACK TO WORK
                </Link>
              </h2>
              <p className="whitespace-nowrap">2017 - 2022</p>
              {isMobile ? (
                <p>SAMPLE WORKS IN PHOTOGRAPHY & EDITING</p>
              ) : (
                <p className="whitespace-nowrap">SAMPLE WORKS</p>
              )}
            </div>
            {!isMobile && (
              <div className="text-center">
                <h1 className="text-xl font-bold mb-1">ARIAPERO/Photo</h1>
                {/* <p className="text-yellow-500">▼42°21'36.36"N 71°5'39.12"E</p> */}
                <p className="text-yellow-500">(* WIP/PLACEHOLDER PAGE *)</p>
              </div>
            )}
            <div className="text-right">
              {isMobile ? (
                <Link
                  href="/"
                  className="text-sm mb-1.5 hover:underline hover:text-white transition-colors"
                  rel="noopener noreferrer"
                >
                  HOME
                </Link>
              ) : (
                <Link
                  href="/"
                  className="hover:underline hover:text-white transition-colors"
                  rel="noopener noreferrer"
                >
                  <p>HTTPS://ARIAPERO</p>
                  <p>.GITHUB.IO</p>
                </Link>
              )}
            </div>
          </div>

          <div className="text-xs mt-3.5">
            {!isMobile && (
              <div>
                <p>EVENT / FASHION / PORTRAIT –– PHOTOGRAPHY</p>
                <p>
                  COLOR GRADING / CORRECTIVE / STYLISTIC / GENERAL –– EDITING
                </p>
              </div>
            )}
            <p>PHOTOS DISPLAYED ALL SHOT ON NIKON D3400 OR iPHONE 8</p>
          </div>
        </header>
        {/* Main title */}
        <main className="flex-grow flex items-center mt-4">  {/* orig <main className="my-24"> */}
          <div className="grid grid-cols-4 gap-4">
            <div className="text-red-600 text-[24vw] md:text-[8.2vw] leading-none font-bold tracking-tighter">  {/* orig text-[7rem] */}
              <Link
                href="https://ariapero.myportfolio.com/photo"
                target="_blank"
              >
                <div className="transform hover:scale-105 transition-transform">
                  CAM/
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  CHIM
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  ERA.
                </div>
              </Link>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer>  {/* orig <footer className="absolute bottom-0 left-0 right-0 p-4"> */}
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-2">
              <span>©</span>
              {isMobile ? (
                <span className="text-yellow-500">ARI PERÓ ✱ 2024</span>
              ) : (
                <span className="text-yellow-500">
                  ARI PERÓ / EST. MMXXIV / ARTS & DEV PORTFOLIO / PHOTOGRAPHY &
                  EDITING ✱
                </span>
              )}
            </div>
            <div>
              {isMobile ? (
                <a
                  href="mailto:ariapero@mit.edu"
                  className="underline hover:text-white transition-colors"
                >
                  EMAIL
                </a>
              ) : (
                <p>
                  <a
                    href="mailto:ariapero@mit.edu"
                    className="underline hover:text-white transition-colors"
                  >
                    HERE
                  </a>
                  &apos;S MY EMAIL ¯\_(ツ)_/¯
                </p>
              )}
            </div>
          </div>
        </footer>
      </div>
      {/* Decorative background lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-yellow-500/20"></div>
      <div className="absolute top-2/3 left-0 right-0 h-px bg-yellow-500/20"></div>  {/* or top-[62%] */}
    </div>
  );
}
