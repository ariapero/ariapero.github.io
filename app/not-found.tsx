import Link from 'next/link'
import RadialBackground from '../components/RadialBackground'
 
export default function NotFound() {
  return (
    <RadialBackground baseColor="#163734" highlightColor="#238177">
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="font-bold text-white mb-0 font-grand text-9xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0, 0.15)' }}>404</h1>
            <h2 className="text-2xl font-semibold text-[#b4d0cb] mb-4 font-zen" style={{ textShadow: '2px 2px 4px rgba(0,0,0, 0.5)' }}>Page Not Found</h2>
            <p className="text-gray-900 mb-8 font-zen font-medium">Oops! The page you're looking for doesn't exist... <i>yet</i>.</p>
            <div className="space-x-4">
              <Link href="/" className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition-colors font-zen">
                Go back home
              </Link>
              <Link href="/search" className="px-4 py-2 bg-teal-900 text-white rounded hover:bg-teal-800 transition-colors font-zen outline outline-teal-800 outline-1">
                Or <b>search</b> the site!
              </Link>
            </div>
        </div>
    </RadialBackground>
  )
}