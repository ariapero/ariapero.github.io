import Link from 'next/link'
import RadialBackground from '../components/RadialBackground'
 
export default function NotFound() {
  return (
    <RadialBackground baseColor="#163734" highlightColor="#238177">
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="font-bold text-white -mb-8 font-reenie text-huge" style={{ textShadow: '2px 2px 4px rgba(0,0,0, 0.15)' }}>404</h1>
            <h2 className="text-2xl font-semibold text-[#b4d0cb] mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0, 0.5)' }}>Page Not Found</h2>
            <p className="text-back-500 mb-8">Oops! The page you're looking for doesn't exist.</p>
            <Link href="/" className="px-4 py-2 bg-white text-black rounded hover:bg-opacity-80 transition-colors">
                Go back home
            </Link>
        </div>
    </RadialBackground>
  )
}