'use client'

import { useState, useEffect } from 'react' 
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from 'lucide-react'
import Link from 'next/link'
import RadialBackground from "../../components/RadialBackground"

type SearchResult = {
  title: string;
  content: string;
  url: string;
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [searchIndex, setSearchIndex] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     fetch('/search-index.json')
//       .then(response => response.json())
//       .then(data => {
//         setSearchIndex(data)
//         setIsLoading(false)
//       })
//       .catch(error => {
//         console.error('Error loading search index:', error)
//         setIsLoading(false)
//       })
//   }, [])


//   // const handleSearch = async (query: string) => {
//   //   setSearchQuery(query)
//   //   if (query.trim() === '') {
//   //     setSearchResults([])
//   //     return
//   //   }

//   //   setIsLoading(true)
//   //   try {
//   //     const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
//   //     const data = await response.json()
//   //     setSearchResults(data.results)
//   //   } catch (error) {
//   //     console.error('Search error:', error)
//   //     setSearchResults([])
//   //   } finally {
//   //     setIsLoading(false)
//   //   }
//   // }

//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setSearchResults([])
//       return
//     }

//     const results = searchIndex.filter(page =>
//       page.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       page.title.toLowerCase().includes(searchQuery.toLowerCase())
//     )

//     setSearchResults(results)
//   }, [searchQuery, searchIndex])

  return (
    <RadialBackground baseColor="#163734" highlightColor="#238177">
      {/* <div className="min-h-screen w-full relative overflow-hidden"> */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-white font-grand">Search</h1>
          <div className="relative mb-6">
            <Input
              type="text"
              placeholder="Search..."
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}  // handleSearch(e.target.value)}
              className="pl-10 bg-white focus-visible:ring-offset-1 focus-visible:ring-gray-500 font-zen"
              aria-label="Search"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          {isLoading && <p className="text-center text-white font-zen font-medium">Loading...</p>}
          {/* <div className="space-y-4">
            {searchResults.map((result, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>
                    <Link href={result.url} className="text-blue-600 hover:underline font-zen">
                      {result.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{result.content.substring(0, 200)}...</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
          {searchQuery && searchResults.length === 0 && !isLoading && (
            <p className="text-center text-white mt-6 font-zen font-medium">No results found. Try a different search term.</p>
          )}

          {/* Disclaimer and Navigation Links */}
          <Card className="mt-8 bg-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-center -mb-4 text-2xl font-grand">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white text-center mb-6 font-zen">
                Search functionality is still actively being implemented. In the meantime, please explore these main pages:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg font-medium font-zen">
                <Link href="/" className="px-4 py-2 bg-teal-800 text-white rounded hover:bg-teal-900 transition-colors outline outline-teal-900 outline-1">Home</Link>
                <Link href="/bio" className="px-4 py-2 bg-white text-teal-900 rounded hover:bg-gray-100 transition-colors">Bio</Link>
                <Link href="/work" className="px-4 py-2 bg-white text-teal-900 rounded hover:bg-gray-100 transition-colors">Works</Link>
                <Link href="/docs/Ari_Pero_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-teal-900 rounded hover:bg-gray-100 transition-colors">Resume</Link>
                <Link href="https://ariapero.myportfolio.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-teal-900 rounded hover:bg-gray-100 transition-colors">Previous Portfolio</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      {/* </div> */}
    </RadialBackground>
  )
}