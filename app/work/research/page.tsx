// TODO: fix footnote stuff
// add meltem VR guide?

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  X,
  ChevronUp,
  FileText,
  Map,
  BarChart3,
  Microscope,
} from "lucide-react";

import { ImageViewer } from "@/components/ImageViewer"; // TODO: use image viewer more like on web page, thumbnail navigation, esp for citylab 43-pager need more than just back/forth arrows

interface ResearchProject {
  id: string;
  title: string;
  subtitle?: string;
  year: string;
  category: string;
  description: string;
  images?: { src: string; alt: string }[];
  pdfUrl?: string;
  coverImage?: string;
  tags?: string[];
}

const projects: ResearchProject[] = [
  {
    id: "citylab-dossier",
    title: "LOVE THE LEE: Right to the River",
    subtitle: "Cork CityLabs I Visual Dossier",
    year: "2026",
    category: "dossier",
    description:
      "Speculative urban futures design provocation for reclaiming public access to Cork's River Lee through a 10-year action plan combining festival activations, riverside infrastructure, and community co-creation.",
    images: Array.from({ length: 43 }, (_, i) => ({
      // TODO: i want the 4 cover pages to be pages 1, 7, 16, 32
      src: `/research/citylab-cork/${i + 1}.png`,
      alt: `CityLab dossier page ${i + 1}`,
    })),
    tags: ["Urban Studies", "Urban Design/Prototyping"],
  },
  {
    id: "postindustrial-chicago",
    title: "Post-Industrial Transformation and Social Resilience on Chicago's South Side",
    // subtitle: "Research Paper",
    year: "2026",
    category: "paper",
    description:
      "Tracing the post-industrial transformation of South Side, Chicago, emphasizing local community responses to deindustrialization and impact of recent planning and policy interventions in the area.",
    pdfUrl: "/research/chicago/paper.pdf",
    coverImage: "/research/chicago/cover.png",
    tags: ["Urban Studies", "Social Justice"],
  },
  {
    id: "senseable-city",
    title: "Drive-By Visuo-Thermal Sensing for Urban Tree Microclimate Analysis",
    subtitle: "Research conducted with MIT Senseable City Lab (Poster on individual contributions, created by Ari Peró)",
    year: "2025",
    category: "poster",
    description: "Thermal sensing project stitching urban tree canopy panoramas from vehicle cameras to analyze micro-climate cooling effects for tree health monitoring.",
    images: [
      {
        src: "/research/senseable/poster.png",
        alt: "Senseable City Lab research project poster",
      },
    ],
    tags: ["Urban Sensing", "Computer Vision", "Machine Learning/AI"],
  },
  {
    id: "mitos-project",
    title: "Enhancing Accessibility and Equity in MIT's Transportation Systems",
    subtitle: "Sustainable Commute Initiative",
    year: "2025",
    category: "poster",
    // description: "Proposal for improving transportation options for MIT community, focusing on low-income students/staff.",
    description: "",
    images: [
      { src: "/research/mitos/poster.png", alt: "Sustainable Commute Initiative poster" },
    ],
    pdfUrl: "/research/mitos/proposal.pdf",
    tags: ["Social Justice", "Sustainability", "Participatory Planning"],
  },
  {
    id: "demos",
    title: "DemOS 2.0: The Code for a 21st-Century Social Contract",
    subtitle: "",
    year: "2025",
    category: "paper",
    description:
      "A blueprint for rebuilding participation, legitimacy, and responsiveness in governance by integrating quantum-resistant cryptography, blockchain, and ethical AI.",
    pdfUrl: "/research/demos/paper.pdf",
    coverImage: "/research/demos/cover.png",
    tags: ["E-Governance", "Machine Learning/AI"],
  },
  {
    id: "visibility",
    title: "Politics of Visibility: Contemporary Art as a Catalyst for Social Change",
    subtitle: "",
    year: "2025",
    category: "paper",
    description:
      "Exploration of how art can transform cultural narratives and foster social change by interrogating visibility, accessibility, and ethics in contemporary practice.",
    pdfUrl: "/research/visibility/paper.pdf",
    coverImage: "/research/visibility/cover.png",
    tags: ["Urban Studies", "Social Justice"],
    // TODO: add award won
  },
  {
    id: "data-sharing",
    title: "Balancing Data Sovereignty and Biodiversity Preservation in Automated Camera Trap Analysis",
    subtitle: "Research conducted under Dr. Sara Beery, MIT CSAIL",
    year: "2024",
    category: "paper",
    description: "Optimizing data sharing for ecological ML applications.",
    pdfUrl: "/research/beery-lab/paper.pdf",
    coverImage: "/research/beery-lab/cover.png",
    tags: ["Data Science", "Environmental Science", "Computer Vision"],
  },
  {
    id: "little-haiti",
    title: "From \"Innovation\" to Gentrification",
    subtitle: "Op-ed and presentation...",
    year: "2022",
    category: "paper, presentation",
    description:
      "A research-backed op-ed and presentation on gentrification and displacement in Miami's Little Haiti, illustrating critical analysis of complex urban issues.",
    images: [
      { src: "/research/little-haiti/a.png", alt: "Little Haiti op-ed page 1" },
      { src: "/research/little-haiti/b.png", alt: "Little Haiti op-ed page 2" },
      ...Array.from({ length: 17 }, (_, i) => ({
        src: `/research/little-haiti/${i + 1}.png`,
        alt: `Little Haiti presentation page ${i + 1}`,
      })),
    ],
    tags: ["Urban Planning", "Social Justice", "Climate Justice"],
    // TODO: add award won
  },
];

const getCategoryIcon = (category: ResearchProject["category"]) => {
  switch (category) {
    case "paper":
      return <FileText size={16} />;
    case "dossier":
      return <Map size={16} />;
    case "poster":
      return <BarChart3 size={16} />;
    default:
      return <Microscope size={16} />;
  }
};

const PDFViewer = ({
  pdfUrl,
  title,
  onClose,
}: {
  pdfUrl: string;
  title: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 bg-neutral-900 p-3 z-10 flex items-center justify-between">
          <h3 className="text-white font-medium truncate pr-4">{title}</h3>
          <button
            className="text-white/70 hover:text-white p-1"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>
        <iframe src={pdfUrl} className="w-full h-full pt-12" title={title} />
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  onOpenViewer,
  onOpenPDF,
}: {
  project: ResearchProject;
  onOpenViewer: () => void;
  onOpenPDF: () => void;
}) => {
  const previewImages = project.images?.slice(0, 4) || [];
  const hasImages = previewImages.length > 0;
  const hasPDF = !!project.pdfUrl;
  const hasBoth = hasImages && hasPDF;

  const renderCover = () => {
    if (hasImages) {
      return (
        <div
          className={`grid ${previewImages.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-px h-full bg-neutral-800`}
        >
          {previewImages.map((img, idx) => (
            <div key={idx} className="relative bg-neutral-900 overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      );
    }

    if (project.coverImage) {
      return (
        <div className="relative w-full h-full">
          <Image
            src={project.coverImage}
            alt={`${project.title} cover`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
        <div className="text-center">
          <FileText size={48} className="mx-auto mb-2 text-teal-400" />
          <span className="text-sm text-neutral-400">PDF Document</span>
        </div>
      </div>
    );
  };

  return (
    <article className="group relative bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-colors">
      <button
        onClick={hasImages ? onOpenViewer : onOpenPDF}
        className="relative w-full aspect-[4/3] overflow-hidden"
      >
        {renderCover()}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {project.images && project.images.length > 0 && (
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-mono">
            {project.images.length}{" "}
            {project.images.length === 1 ? "page" : "pages"}
          </div>
        )}

        <div className="absolute top-3 left-3 bg-teal-600/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-white flex items-center gap-1">
          {getCategoryIcon(project.category)}
          <span className="uppercase tracking-wide">{project.category}</span>
        </div>
      </button>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold text-white leading-tight">
            {project.title}
          </h3>
          <span className="text-sm text-neutral-500 font-mono flex-shrink-0">
            {project.year}
          </span>
        </div>

        {project.subtitle && (
          <p className="text-sm text-teal-400 mb-3">{project.subtitle}</p>
        )}

        <p className="text-sm text-neutral-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {hasBoth && (
          <div className="flex gap-2 mb-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenViewer();
              }}
              className="flex-1 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm rounded transition-colors"
            >
              View Images
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenPDF();
              }}
              className="flex-1 px-3 py-2 bg-teal-600 hover:bg-teal-500 text-white text-sm rounded transition-colors"
            >
              View PDF Report
            </button>
          </div>
        )}

        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-500 transition-colors z-40"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default function ResearchPage() {
  const [activeProject, setActiveProject] = useState<ResearchProject | null>(
    null,
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPDFViewer, setShowPDFViewer] = useState(false);

  const openViewer = (project: ResearchProject) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
    setShowPDFViewer(false);
  };

  const openPDFViewer = (project: ResearchProject) => {
    setActiveProject(project);
    setShowPDFViewer(true);
  };

  const closeViewer = () => {
    setActiveProject(null);
    setCurrentImageIndex(0);
    setShowPDFViewer(false);
  };

  const nextImage = () => {
    if (activeProject && activeProject.images) {
      setCurrentImageIndex((prev) =>
        prev === activeProject.images!.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const previousImage = () => {
    if (activeProject && activeProject.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? activeProject.images!.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-zen">
      <title>ari pero | urban planning research</title>

      <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto relative px-4 xl:px-0 py-4">
          {" "}
          {/* TODO: make always flush left / aligned with page title */}
          <div className="flex items-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center text-neutral-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Work
            </Link>
          </div>
        </div>
      </header>

      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-teal-400 text-sm uppercase tracking-widest mb-4">
              Research Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl mb-6 leading-tight font-grand">
              Urban Science &<br />
              <span className="text-neutral-400">Sustainability Research</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              A collection of research projects spanning urban planning/studies, GIS
              analysis, data visualization, and policy research.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenViewer={() => openViewer(project)}
              onOpenPDF={() => openPDFViewer(project)}
            />
          ))}
        </div>
      </main>

      {activeProject && activeProject.images && !showPDFViewer && (
        <ImageViewer
          images={activeProject.images}
          currentIndex={currentImageIndex}
          onClose={closeViewer}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}

      {activeProject && activeProject.pdfUrl && showPDFViewer && (
        <PDFViewer
          pdfUrl={activeProject.pdfUrl}
          title={activeProject.title}
          onClose={closeViewer}
        />
      )}

      <ScrollToTopButton />
    </div>
  );
}
