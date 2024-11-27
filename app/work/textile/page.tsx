import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <title>ari peró | textile art & fashion design</title>
      {/* Header */}
      <header className="bg-[#0000CC] p-4 flex justify-between items-center border-b border-[#0000FF]">
        <div className="flex items-center gap-2">
          <Link
            href="/work"
            className="inline-flex items-center font-ncl z-50 text-white hover:text-[#AAFF00] transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            BAck to woRk
          </Link>
          {/* <h1 className="font-ncl">ARIAPERO</h1> */}
          <p className="text-xs ml-2 opacity-75">42°21'36.36"N 71°5'39.12"E</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs">(∩｀-´)⊃━☆ﾟ.*･｡ﾟ</span>
          <span className="text-xs">｡ﾟ･*.｡ﾟ☆━٩(⇀‸↼‶)</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Section - Image and Green Text */}
          <div className="space-y-6">
            <div className="bg-black border border-[#333] rounded-lg overflow-hidden w-full max-w-md">
              <Image
                src="/textile.jpg?height=400&width=400"
                alt="A close-up of a layered outfit featuring a white button-up shirt under a black sleeveless top with a curved hemline. The shirt is slightly crinkled, and the black top has asymmetrical cuts, revealing parts of the shirt underneath. Attached to the outfit are two small, plush, star-shaped blue accessories, one on each side. A white braided cord hangs from a multicolored rainbow keffiyeh, visible on the left edge of the outfit. The background shows part of a stone building and pavement."
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-1 font-ncl">
              <div className="text-[#AAFF00] text-4xl font-bold tracking-wider transform skew-x-12">
                MODULAR
              </div>
              <div className="text-[#AAFF00] text-4xl font-bold tracking-wider transform skew-x-12">
                CLOTHING
              </div>
              <div className="text-[#AAFF00] text-4xl font-bold tracking-wider transform skew-x-12">
                DESIGN
              </div>
            </div>
          </div>

          {/* Right Section - White Text */}
          <div className="space-y-6">
            <div className="space-y-1 font-ncl">
              <div className="text-white text-4xl font-bold tracking-wider transform skew-x-12">
                modular
              </div>
              <div className="text-white text-4xl font-bold tracking-wider transform skew-x-12">
                clothing
              </div>
              <div className="text-white text-4xl font-bold tracking-wider transform skew-x-12">
                design
              </div>
            </div>
            <div className="bg-black border border-[#333] rounded-lg overflow-hidden w-full max-w-md mt-8 aspect-square">
              <video
                src="/textile.mov"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-[#0000CC] p-4 rounded-lg flex justify-between items-center font-mono mt-8">
          <div className="flex items-center gap-4">
            <span>8614</span>
            <span className="opacity-75">99-99</span>
          </div>
          <div className="text-sm">FILE://ARIAPERO-TEXTILE-DESIGN</div>
          <div className="text-sm">TO BE CONTINUED</div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="space-y-2 text-sm">
            <p>+ CUT & RE-HEMMED</p>
            <p>+ CREWNECK SWEATSHIRT</p>
            <p>+ INTO ARCHES</p>
            <p>+ ON FOUR SIDES</p>
          </div>
          <div className="space-y-2 text-sm">
            <p>+ INTERCHANGEABLE STUFFED ACCESSORIES</p>
            <p>+ INITIAL MOCK-UP - FELT STARS</p>
            <p>+ DINKY (W/ LOVE) HAND-SEWN</p>
            <p>+ ATTACHABLE & DETACHABLE (VELCRO)</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#AAFF00] p-4 flex justify-between items-center mt-8 font-mono">
        <Link href="/" className="text-black hover:underline">
          HTTPS://ARIAPERO.GITHUB.IO
        </Link>
        <div className="text-black">© 2024 Ari Peró. All rights reserved.</div>
        <a
          href="mailto:ariapero@mit.edu"
          className="text-black hover:underline"
        >
          MAILTO:ARIAPERO@MIT.EDU
        </a>
      </footer>
    </div>
  );
}
