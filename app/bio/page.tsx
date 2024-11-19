"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PipelineBackground from "../../components/PipelineBackground";

const App: React.FC = () => {
  const coursework = [
    {
      category: "Urban Studies",
      courses: [
        "Globalization and Its Discontents: Consuming Latin America",
        "Climate & Sustainability Undergraduate Advanced Research (TA)",
        "Undergraduate Planning Seminar",
        "Intro to Urban Design & Development",
        "Making Public Policy",
        "Intro to Housing, Community, & Economic Development"
      ]
    },
    {
      category: "Urban Science",
      courses: [
        "Crowd Sourced City: Civic Tech Prototyping (Data Activism)",
        "Intro to Spatial Analysis & GIS Laboratory"
      ]
    },
    {
      category: "Computer Science (CS) & Applications",
      courses: [
        "Digital and Computational Photography",
        "Advances in Computer Vision",
        "Intro to Machine Learning",
        "The Battlecode Programming Competition",
        "Web Lab: Programming Class & Competition",
        "UPOP Engineering Practice Experience + Workshop",
        "Linear Algebra & Optimization",
        "Intro to Algorithms",
        "Discrete Math & Proof for CS",
        "Fundamentals of Programming",
        "Intro to Computational Thinking & Data Science",
        "Intro to CS Programming in Python"
      ]
    },
    {
      category: "Social Justice",
      courses: [
        "HIV/AIDS in American Culture",
        "Black Matters: Introduction to Black Studies",
        "Reparations for Slavery & Colonization: Contemporary Movements for Justice",
        "Brazil: Race, Place, & Modernity in the Americas",
        "Crime, Punishment & Policing in an Unequal America (Harvard Law School)",
        "How to Change the World: Experiences from Social Entrepreneurs"
      ]
    },
    {
      category: "Music",
      courses: [
        "Advanced Seminar in Music",
        "FaMLE: MIT Laptop Ensemble",
        "Rambax: MIT Senegalese Drum Ensemble",
        "Musics of Africa",
        "DJ History, Technique, and Technology",
        "Harmony and Counterpoint II",
        "Chamber Music Society (MIT Vocal Jazz Ensemble)",
        "Music Performance (Emerson/Harris Program for Private Study Jazz Voice Scholarship)",
        "Harmony and Counterpoint I",
        "MIT Chamber Chorus",
        "MIT Concert Choir",
        "Electronic Music Composition"
      ]
    },
    {
      category: "Creative Arts",
      courses: [
        "Intro to Artistic Experimentation",
        "Performance Media",
        "Intro to Video & Related Media",
        "Beyond Independent Filmmaking"
      ]
    }
  ];

  return (
    <div>
      <PipelineBackground />
      {/* Content */}
      <motion.main
        className="relative z-10 min-h-screen p-8 sm:p-12 lg:p-16 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Low opacity black box */}
        <div className="absolute inset-0 bg-black opacity-40 w-full h-full"></div>
        {/* <div className='max-w-7xl mx-auto'> */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Link
              href="/"
              className="text-4xl font-bold hover:opacity-80 transition-opacity font-reenie"
            >
              Ari Peró
            </Link>
            <div className="mt-1 space-y-1 text-sm font-zen">
              <p>MIT DUSP, EECS, Music</p>
              <p>B.S. Candidate 2025</p>
              <p><a href="mailto:ariapero@mit.edu" className="hover:underline">
                ariapero@mit.edu
              </a></p>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* <div className='grid lg:grid-cols-2 gap-12 lg:gap-20'> */}
            <motion.div
              className="space-y-8 lg:w-2/3"
              // className='space-y-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-grand">
                Art, Policy, & Technology
                <span className="block font-normal">for the common good</span>
              </h1>

              <div
                className="space-y-6 text-m leading-relaxed z-10"
                style={{ textShadow: "1px 1px 2px black" }}
              >
                <p>
                  Ari Peró has been committed to effecting political change
                  since before they were old enough to vote. Since February
                  2018, they have been at the forefront of shaping national
                  legislation as a founding member of{" "}
                  <b>Students Demand Action: Miami</b>. Ari is guided by the
                  principle of "pay it forward and pay it back," inspiring peers
                  to harness their political agency and empowering them with
                  tools for tangible transformation.
                </p>

                <p>
                  Their interests converge around critical issues such as
                  housing justice, leveraging social media for amplifying
                  advocacy groups, environmentally conscious planning through
                  indigenous and reparative paradigms, and holistic criminal
                  justice reform&#8212;fighting for both racial and LGBTQ+ justice
                  within the context of reducing incarceration. Utilizing
                  technology, programming, machine vision, and urban science
                  principles, they strive to drive transformation in these
                  domains.
                </p>

                <p>
                  In line with these passions, Ari is both a scholar and
                  Teaching Assistant in{" "}
                  <b>
                    <a href="https://impactclimate.mit.edu/get-involved/student-opportunities/climate-sustainability-scholars-program/">
                      <u>
                        MIT's Climate and Sustainability Consortium (MCSC)
                        Scholars Program
                      </u>
                    </a>
                  </b>
                  , where they support a community of like-minded students
                  committed to environmental justice and sustainable
                  development. Through the program, they have engaged deeply
                  with coursework and research projects that address pressing
                  climate and sustainability issues, while mentoring fellow
                  scholars in navigating academic and professional pathways
                  related to climate impact.
                </p>

                <p>
                  Ari's undergraduate research in computer vision for
                  biodiversity monitoring under the guidance of{" "}
                  <a href="https://beerys.github.io/#:~:text=David%20Fang%20(Alumni)-,Ari%20Pero%20(Alumni),-Avi%20Sundaresan%20(Caltech">
                    <b>
                      <u>Dr. Sara Beery</u>
                    </b>
                  </a>{" "}
                  underscores their dedication to leveraging technology for
                  environmental conservation. Their work explores the use of
                  machine learning and visual AI to detect and analyze species
                  across diverse ecosystems, contributing to the preservation of
                  global biodiversity and advancing computational approaches to
                  ecological monitoring.
                </p>

                <p>
                  This past summer, Ari interned at{" "}
                  <a href="https://www.aboutamazon.com/what-we-do/devices-services/project-kuiper">
                    <b>
                      <u>Amazon Project Kuiper</u>
                    </b>
                  </a>
                  . There, they designed a satellite CLI that reduced codebase
                  size by ~25% and boosted developer productivity by ~20%, as
                  well as developed Rust-based features to address security
                  vulnerabilities in bootloader verification. This experience
                  sharpened their technical abilities in embedded systems design
                  and bolstered their commitment to creating scalable, efficient
                  solutions with tangible impact.
                </p>

                <p>
                  Originally from South Side, Chicago, IL, and now based in
                  Miami, FL, Ari has spent the past three years anchoring their
                  experiences at MIT in their desire to empower others: as an
                  Active Community Engagement FPOP Coordinator, they introduce
                  first-years to campus life through meticulously developed
                  social justice workshops and service placements with local
                  nonprofits. Ari also serves as a Teaching Assistant for the{" "}
                  <a href="https://mites.mit.edu/discover-mites/mites-summer/">
                    <b>
                      <u>MITES Summer program</u>
                    </b>
                  </a>
                  , providing educational support and resources to fellow
                  students to foster a diverse and inclusive learning
                  environment. Additionally, as a dedicated{" "}
                  <a href="https://pleasure.mit.edu/educators/ari-pero/">
                    <b>
                      <u>PLEASURE Educator</u>
                    </b>
                  </a>
                  , Ari contributes to eradicating sexual violence at MIT by
                  leading educational presentations on topics like contraception
                  and healthy relationships for athletes and FSILGs.
                </p>

                <p>
                  Their commitment to public service has been recognized through
                  accolades including selection as the{" "}
                  <a href="https://ome.mit.edu/about/student-awards/distinguished-peers/ari-pero">
                    <b>
                      <u>
                        OME's 2022-2023 Distinguished Peer in Public Service
                      </u>
                    </b>
                  </a>
                  . They are also recognized as a Miami Ortega Foundation
                  Scholar and Point Foundation Flagship Scholar and Spokesperson
                  since 2021.
                </p>

                <p>
                  In Fall 2022, Ari assumed the presidency of G@MIT, MIT's
                  LGBTQ+ cultural and activist organization. Through this
                  office, they work to establish dedicated spaces for students
                  with intersectional identities, foster constructive dialogue
                  between queer students and MIT administration, and organize
                  inclusive events for affirming LGBTQ+ experiences on campus.
                </p>

                <p>
                  Ari has also been deeply involved in raising awareness of the
                  countless injustices experienced by transgender individuals
                  via their artistic pursuits. Their recent video installations
                  and live performances explore the ongoing impact of their
                  community's history on present-day dynamics (shared fears and
                  behaviors). These pieces capture Ari's own emotions as a
                  trans, Afro-Indigenous activist navigating complex systems of
                  power and oppression, while shedding light on many of the less
                  “palatable” and often overlooked challenges faced by black
                  transgender women. This narrative extends into the context of
                  NYC ballroom culture and the 80s AIDS crisis. Ari intends to
                  leverage these projects as a conduit for enlightening allies
                  on the trans experience.
                </p>

                <p>
                  Before embarking on double majors in Urban Science & Planning
                  with Computer Science and Music at MIT, Ari's foundation was
                  classical vocal performance at their magnet arts high school.
                  Their participation in the MIT Concert Choir, Chamber Chorus,
                  Vocal Jazz Ensemble, FaMLE (MIT Laptop Ensemble), Rambax
                  Senegalese Drum Ensemble, and Emerson Harris Scholars Program
                  for Jazz and Classical Voice is a testament to their passion
                  for music and artistic expression.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="sm:ml-auto w-[400px] h-full lg:w-[500px] h-[625px] z-100"
              // className='relative w-[400px] h-[500px]'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative w-full h-full z-100">
                <Image
                  src="/headshot.JPG"
                  alt="presentation"
                  width={500}
                  height={625}
                  className="object-cover rounded-lg z-100"
                  priority
                />
              </div>
              <div className="bg-black bg-opacity-40 mt-6 p-6 rounded-lg">
                {/* <h2 className="text-2xl font-bold mb-4">Resume</h2> */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Coursework</h2>
                  <Link href="/docs/Ari_Pero_Resume.pdf" className="hover:opacity-80 transition-opacity">
                    <h2 className="text-2xl font-regular italic">View Resume</h2>
                  </Link>
                </div>
                <div className="space-y-4 text-sm max-h-[400px] overflow-y-auto pr-4">
                  {coursework.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {category.courses.map((course, courseIndex) => (
                          <li key={courseIndex}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default App;
