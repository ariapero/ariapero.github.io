"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  link?: string;
  technologies: string[];
  pages: {
    title: string;
    description: string;
    image: string;
    thumbnail: string;
  }[];
  keyFeatures?: string[];
};

const projects: Project[] = [
  {
    title: "Unsubscribe MIT",
    description:
      "A platform to help MIT students discover free food, share surplus items, and manage dormspam. Winner of the Webby/People's Choice Award in the 2024 MIT WebLab web development competition.",
    link: "https://unsubscribe.mit.edu",
    technologies: [
      "React",
      "Express",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "WebSocket",
      "Socket.IO",
      "OAuth/OpenID",
      "Google Login API",
      "MIT Shibboleth",
      "Material-UI",
      "ReactTimeAgo",
      "FullCalendar",
    ],
    pages: [
      {
        title: "Landing Page",
        description:
          "Secure access for MIT students via MIT Touchstone authentication, ensuring a safe and personalized experience while maintaining a clean, minimalist design.",
        image: "/unsubscribe-landing.png?height=450&width=800",
        thumbnail: "/unsubscribe-landing.png?height=100&width=150",
      },
      {
        title: "Dashboard (Food Posts Feed)",
        // description: "A centralized hub showing recent free food posts, lost & found items, and relevant dormspam, with smart filtering options.",
        description:
          "A real-time feed of free food posts with seamless integration of collected mailing list emails. Users can upload photos, mark items as 'gone', and connect with the community.",
        image: "/unsubscribe-dash.png?height=450&width=800",
        thumbnail: "/unsubscribe-dash.png?height=100&width=150",
      },
      {
        title: "Dark Mode",
        // description: "A centralized hub showing recent free food posts, lost & found items, and relevant dormspam, with smart filtering options.",
        description:
          "A real-time feed of free food posts with seamless integration of collected mailing list emails. Users can upload photos, mark items as 'gone', and connect with the community.",
        image: "/unsubscribe-dark.png?height=450&width=800",
        thumbnail: "/unsubscribe-dark.png?height=100&width=150",
      },
      {
        title: "Scheduled Food (Calendar View)",
        description:
          "An interactive calendar of scheduled free food events, allowing users to plan and share their own events, fostering a culture of sharing and sustainability.",
        image: "/unsubscribe-calendar.png?height=450&width=800",
        thumbnail: "/unsubscribe-calendar.png?height=100&width=150",
      },
      {
        title: "Scheduled Food (Grid View)",
        description:
          "View scheduled food in grid view, or click on a calendar item to be led to the corresponding food card post in grid view.",
        image: "/unsubscribe-scheduled.png?height=450&width=800",
        thumbnail: "/unsubscribe-scheduled.png?height=100&width=150",
      },
      // {
      //   title: "User Profile",
      //   description: "Personalized user profiles with dynamic name updates to avoid deadnaming, showcasing the project's commitment to inclusivity and respect.",
      //   image: "/unsubscribe2.png?height=450&width=800",
      //   thumbnail: "/unsubscribe2.png?height=100&width=150"
      // },
    ],
    keyFeatures: [
      "Real-time updates and notifications using WebSocket and Socket.IO",
      "Secure authentication via OAuth/OpenID clients, Google Login API, and MIT Shibboleth",
      "Responsive multiplatform UI using Tailwind, MUI, ReactTimeAgo, and FullCalendar",
      "Seamless integration of mailing list emails into visually appealing feed posts",
      "Interactive calendar for scheduled free food events",
      "Personalized user profiles with dynamic user data updates to avoid deadnaming, showcasing the project's commitment to inclusivity and respect.",
      // "Dynamic user data updates to avoid deadnaming",
      // "Personalized features for authenticated MIT users",
    ],
  },
  {
    title: "Indigenous Women Rising Data Visualization",
    description:
      "Developed tools to visualize abortion fund data for the non-profit foundation Indigneous Women Rising (IWR). Created ArcGIS StoryMap showing geographic distribution of IWR's services across Native territories, for integration/embedding onto their public-facing website. Implemented privacy-preserving measures to protect sensitive client information. Designed visualizations to demonstrate urgent demand for abortion care and IWR's capacity to serve clients. With Alec Wagner, Rima Das, Caroline Chea, Bianchi Dy.",
    technologies: ["Python", "ArcGIS", "QGIS", "PyQGIS", "Tableau", "Jotform", "Wix", "Canva"],
    pages: [
      {
        title: "IWR Final Presentation Slide 1",
        description: "",
        image: "/iwr/iwr-1.png?height=450&width=800",
        thumbnail: "/iwr/iwr-1.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 2",
        description: "",
        image: "/iwr/iwr-2.png?height=450&width=800",
        thumbnail: "/iwr/iwr-2.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 3",
        description: "",
        image: "/iwr/iwr-3.png?height=450&width=800",
        thumbnail: "/iwr/iwr-3.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 4",
        description: "",
        image: "/iwr/iwr-4.png?height=450&width=800",
        thumbnail: "/iwr/iwr-4.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 5",
        description: "",
        image: "/iwr/iwr-5.png?height=450&width=800",
        thumbnail: "/iwr/iwr-5.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 6",
        description: "",
        image: "/iwr/iwr-6.png?height=450&width=800",
        thumbnail: "/iwr/iwr-6.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 7",
        description: "",
        image: "/iwr/iwr-7.png?height=450&width=800",
        thumbnail: "/iwr/iwr-7.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 8",
        description: "",
        image: "/iwr/iwr-8.png?height=450&width=800",
        thumbnail: "/iwr/iwr-8.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 9",
        description: "",
        image: "/iwr/iwr-9.png?height=450&width=800",
        thumbnail: "/iwr/iwr-9.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 10",
        description: "",
        image: "/iwr/iwr-10.png?height=450&width=800",
        thumbnail: "/iwr/iwr-10.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 11",
        description: "",
        image: "/iwr/iwr-11.png?height=450&width=800",
        thumbnail: "/iwr/iwr-11.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 12",
        description: "",
        image: "/iwr/iwr-12.png?height=450&width=800",
        thumbnail: "/iwr/iwr-12.png?height=100&width=150",
      },
      {
        title: "IWR Final Presentation Slide 13",
        description: "",
        image: "/iwr/iwr-13.png?height=450&width=800",
        thumbnail: "/iwr/iwr-13.png?height=100&width=150",
      },
    ],
  },
  {
    title: "Who Polices Who? Mapping Police Geographies in Boston",
    description:
      "Conducted exploratory GIS analysis of spatial relationships between police officer residences and policing patterns in Boston. Used Python for data scraping and preprocessing of police incident reports. Created interactive maps and data visualizations to communicate findings on potential racial biases in policing distribution. Aimed to inform more equitable policing practices and resource allocation strategies. With Denyse Tan, Marina Ten Have, and Gabriel Rodríguez.",
    technologies: ["Python", "QGIS", "PyQGIS", "Tableau", "GitHub", "Web/data scraping (publicly available documents)"],
    pages: [
      {
        title: "",
        description: "",
        image: "/Who-Polices-Who/policing-1.png?height=450&width=800",
        thumbnail: "/Who-Polices-Who/policing-1.png?height=100&width=150",
      },
      {
        title: "",
        description: "",
        image: "/Who-Polices-Who/policing-2.png?height=450&width=800",
        thumbnail: "/Who-Polices-Who/policing-2.png?height=100&width=150",
      },
      {
        title: "",
        description: "",
        image: "/Who-Polices-Who/policing-3.png?height=450&width=800",
        thumbnail: "/Who-Polices-Who/policing-3.png?height=100&width=150",
      },
      {
        title: "",
        description: "",
        image: "/Who-Polices-Who/policing-4.png?height=450&width=800",
        thumbnail: "/Who-Polices-Who/policing-4.png?height=100&width=150",
      },
      {
        title: "",
        description: "",
        image: "/Who-Polices-Who/policing-5.png?height=450&width=800",
        thumbnail: "/Who-Polices-Who/policing-5.png?height=100&width=150",
      },
      {
        title: "",
        description: "",
        image: "/Who-Polices-Who/policing-6.png?height=450&width=800",
        thumbnail: "/Who-Polices-Who/policing-6.png?height=100&width=150",
      },
      {
        title: "",
        description: "",
        image: "/Who-Polices-Who/policing-7.png?height=450&width=800",
        thumbnail: "/Who-Polices-Who/policing-7.png?height=100&width=150",
      },
      {
        title: "",
        description: "",
        image: "/Who-Polices-Who/policing-8.png?height=450&width=800",
        thumbnail: "/Who-Polices-Who/policing-8.png?height=100&width=150",
      },
      {
        title: "",
        description: "",
        image: "/Who-Polices-Who/policing-9.png?height=450&width=800",
        thumbnail: "/Who-Polices-Who/policing-9.png?height=100&width=150",
      },
      {
        title: "",
        description: "",
        image: "/Who-Polices-Who/policing-10.png?height=450&width=800",
        thumbnail: "/Who-Polices-Who/policing-10.png?height=100&width=150",
      },
    ],
  },
];

export default function WebDevPage() {
  const [currentSlides, setCurrentSlides] = useState(projects.map(() => 0));

  const nextSlide = (projectIndex: number) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev];
      newSlides[projectIndex] = (newSlides[projectIndex] + 1) % projects[projectIndex].pages.length;
      return newSlides;
    });
  };

  const prevSlide = (projectIndex: number) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev];
      newSlides[projectIndex] = (newSlides[projectIndex] - 1 + projects[projectIndex].pages.length) % projects[projectIndex].pages.length;
      return newSlides;
    });
  };

  return (
    <div className="min-h-screen text-white p-6 sm:p-16 z-0 font-zen lg:px-[12vh] xl:px-[30vh]">
      <title>ari peró | web dev, ui, & public interest tech</title>
      <Link
        href="/work"
        className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-8"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Work
      </Link>

      <h1 className="text-4xl font-[599] mb-8 font-grand">
        <b>Web Development, UI/UX&#8202;, &#8202;&&thinsp; Public Intere</b>s<b>t Technology</b>
      </h1>

      <div className="space-y-16">
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div className="flex-1 max-w-4xl">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-200 mb-4 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center whitespace-nowrap text-white hover:text-gray-300 transition-colors"
                >
                  Visit Project <ExternalLink className="ml-2" size={16} />
                </a>
              )}
            </div>

            <Card className="border-0 bg-white/5 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0 relative">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlides[projectIndex]}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={project.pages[currentSlides[projectIndex]].image || "/placeholder.svg"}
                        alt={project.pages[currentSlides[projectIndex]].title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {project.pages[currentSlides[projectIndex]].description && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 md:p-6 hidden md:block">
                      <h3 className="text-lg md:text-xl text-white font-bold mb-2">
                        {project.pages[currentSlides[projectIndex]].title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-200">
                        {project.pages[currentSlides[projectIndex]].description}
                      </p>
                    </div>
                  )}

                  {project.pages.length > 1 && (
                    <div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                        onClick={() => prevSlide(projectIndex)}
                      >
                        <ChevronLeft className="h-8 w-8" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                        onClick={() => nextSlide(projectIndex)}
                      >
                        <ChevronRight className="h-8 w-8" />
                      </Button>
                    </div>
                  )}
                </div>

                {project.pages[currentSlides[projectIndex]].description && (
                  <div className="block md:hidden p-4 pt-3 bg-white/5">
                    <h3 className="text-lg text-white font-bold mb-2">
                      {project.pages[currentSlides[projectIndex]].title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {project.pages[currentSlides[projectIndex]].description}
                    </p>
                  </div>
                )}

                {project.pages.length > 1 && (
                  <div className="relative bg-black/40 p-4">
                    <div className="flex justify-center gap-2 overflow-x-auto">
                      {project.pages.map((page, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlides(prev => {
                            const newSlides = [...prev];
                            newSlides[projectIndex] = index;
                            return newSlides;
                          })}
                          className={cn(
                            "relative w-24 h-16 overflow-hidden rounded transition-all",
                            currentSlides[projectIndex] === index
                              ? "border-2 border-white"
                              : "opacity-50 hover:opacity-75"
                          )}
                        >
                          <Image
                            src={page.thumbnail || "/placeholder.svg"}
                            alt={page.title}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {project.keyFeatures && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="list-disc list-outside pl-4 space-y-1">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-200">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}