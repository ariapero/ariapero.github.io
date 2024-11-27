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

const projects = [
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
  // second project
];

export default function WebDevPage() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const project = projects[currentProject];
    setCurrentSlide((prev) => (prev + 1) % project.pages.length);
  };

  const prevSlide = () => {
    const project = projects[currentProject];
    setCurrentSlide(
      (prev) => (prev - 1 + project.pages.length) % project.pages.length
    );
  };

  return (
    <div className="min-h-screen text-white p-16 z-0 font-zen">
      <title>ari peró | web dev & ui</title>
      <Link
        href="/work"
        className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-8"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Work
      </Link>

      <h1 className="text-4xl font-bold mb-8 font-grand">
        Web Development & &thinsp;UI
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
                    // </Badge>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center whitespace-nowrap text-white hover:text-gray-300 transition-colors"
              >
                Visit Project <ExternalLink className="ml-2" size={16} />
              </a>
            </div>

            <Card className="border-0 bg-white/5 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0 relative">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={project.pages[currentSlide].image}
                        alt={project.pages[currentSlide].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl text-white font-bold mb-2">
                          {project.pages[currentSlide].title}
                        </h3>
                        <p className="text-gray-200">
                          {project.pages[currentSlide].description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </div>

                {/* Thumbnail Navigation */}
                <div className="relative bg-black/40 p-4">
                  <div className="flex justify-center gap-2 overflow-x-auto">
                    {project.pages.map((page, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={cn(
                          "relative w-24 h-16 overflow-hidden rounded transition-all",
                          currentSlide === index
                            ? "border-2 border-white"
                            : "opacity-50 hover:opacity-75"
                        )}
                      >
                        <Image
                          src={page.thumbnail}
                          alt={page.title}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-200">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
