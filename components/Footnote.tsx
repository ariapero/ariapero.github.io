'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Footnote() {
    const pathname = usePathname()

    // if (pathname === '/') return null
    if (pathname === '/') return (
        <footer className="fixed bottom-0 left-0 w-full bg-transparent z-50 p-4 font-inter">
            <p className="text-sm text-white-500 text-center font-inter">&copy; {new Date().getFullYear()} Ari Peró. All rights reserved.</p>
        </footer>
    )

    if (pathname === '/work') return (
        <div>
            <footer className="fixed bottom-0 left-0 w-full bg-transparent z-50 p-4 font-inter">
                <p className="text-sm text-white-500 opacity-80 text-center font-inter">&copy; {new Date().getFullYear()} Ari Peró. All rights reserved.</p>
            </footer>
            <div className="fixed bottom-0 left-0 w-full bg-transparent z-40 p-4 flex justify-between items-center z-50">
                {/* <Image src="/apple-icon.png" alt="Home" width={24} height={24} className="w-full h-auto" /> */}
                <Link href="/" className="text-white hover:underline text-xs">
                    <Image src="/apple-icon.png" alt="Home" width={24} height={24} className="w-full h-auto" />
                </Link>
                {/* <p className="text-sm text-white-500 text-center font-inter">&copy; {new Date().getFullYear()} Ari Peró. All rights reserved.</p> */}
                <a href="mailto:ariapero@mit.edu" className="text-white hover:underline text-xs">ariapero@mit.edu</a>
            {/* </footer> */}
            </div>
        </div>
    )

    return (
        // <div>
        //     <footer className="bottom-0 w-full bg-transparent z-50 p-4 font-inter">
        //         <p className="text-sm text-white-500 opacity-80 text-center font-inter">&copy; {new Date().getFullYear()} Ari Peró. All rights reserved.</p>
        //     </footer>
        //     <div className="bottom-0 w-full bg-transparent z-40 p-4 flex justify-between items-center z-50">
        //         {/* <Image src="/apple-icon.png" alt="Home" width={24} height={24} className="w-full h-auto" /> */}
        //         <Link href="/" className="text-white hover:underline text-xs">
        //             <Image src="/apple-icon.png" alt="Home" width={24} height={24} className="w-full h-auto" />
        //         </Link>
        //         {/* <p className="text-sm text-white-500 text-center font-inter">&copy; {new Date().getFullYear()} Ari Peró. All rights reserved.</p> */}
        //         <a href="mailto:ariapero@mit.edu" className="text-white hover:underline text-xs">ariapero@mit.edu</a>
        //     {/* </footer> */}
        //     </div>
        // </div>

        // <div className="mt-auto bg-transparent font-inter">
        //     <footer className="mb-0">
        //         <p className="text-sm text-white-500 opacity-80 text-center font-inter">&copy; {new Date().getFullYear()} Ari Peró. All rights reserved.</p>
        //     </footer>
        //     <div className="flex justify-between items-center z-50">
        //         <Link href="/" className="text-white hover:underline text-xs">
        //             <Image src="/apple-icon.png" alt="Home" width={24} height={24} className="w-full h-auto" />
        //         </Link>
        //         <a href="mailto:ariapero@mit.edu" className="text-white hover:underline text-xs">ariapero@mit.edu</a>
        //     </div>
        // </div>
        
        // <div className="mt-auto bg-transparent z-50 p-4 font-inter">
        //     <div className="bottom-0 flex justify-between items-center">
        //         <Link href="/" className="text-white text-xs">
        //             <Image src="/apple-icon.png" alt="Home" width={24} height={24} className="w-full h-auto" />
        //         </Link>
        //         <a href="mailto:ariapero@mit.edu" className="text-white hover:underline text-xs">ariapero@mit.edu</a>
        //     </div>
        //     <footer className="bottom-0 text-sm text-white-500 text-center font-inter">
        //         &copy; {new Date().getFullYear()} Ari Peró. All rights reserved.
        //     </footer>
        // </div>

        <footer className="bg-transparent z-50 pt-2 pb-4 pl-4 pr-4 font-inter">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-white hover:underline text-xs w-1/3">
                    <Image src="/apple-icon.png" alt="Home" width={24} height={24} className="w-6 h-6" />
                </Link>
                <p className="text-sm text-white-500 text-center font-inter w-1/3 opacity-80">
                    &copy; {new Date().getFullYear()} Ari Peró. All rights reserved.
                </p>
                <div className="w-1/3 text-right">
                    <a href="mailto:ariapero@mit.edu" className="text-white hover:underline text-xs">
                        ariapero@mit.edu
                    </a>
                </div>
            </div>
        </footer>
    )
}