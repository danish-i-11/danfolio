"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import ProjectCard from "@/components/ui/project-card"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      title: "Black Panther",
      description:
        "Contributed to the Frontend, Backend, UI/UX Design and product flow for Black Panther, a Web3 platform offering African-focused digital financial tools including stablecoins, charity-based tokens, Web3 apps, and secure wallets.",
      techStack: ["React.js", "Node.js", "Web3", "Figma", "UI/UX Design"],
      demoUrl: "https://www.blackpanthertkn.info/",
      imageSrc: "https://res.cloudinary.com/dccmpc9ue/image/upload/v1745934941/blkPnthr_ln6nff.png",
    },
    {
      title: "Daily Doze of DSA",
      description:
      "Made a one-month freelance project as a UI/UX Designer, delivering an intuitive and engaging platform for Data Structures and Algorithms learners using Figma for the full product design.",
      techStack: ["Figma", "UI/UX Design", "Product Design"],
      demoUrl: "https://www.figma.com/design/cm6iCG8D6z1BBYCw38kLmU/DDD-C?node-id=0-1&t=iYMuWKTOI90LEVGR-1",
      imageSrc: "https://res.cloudinary.com/dccmpc9ue/image/upload/v1745934940/ddd_rp34cz.png",
    },
    {
      title: "Football Loverz App",
      description:
        "A React JSX-based personal project showcasing my passion for football, along with dynamic components and player insights.",
      techStack: ["React", "JSX", "CSS", "JavaScript"],
      demoUrl: "https://footballloverz.netlify.app/",
      imageSrc: "https://res.cloudinary.com/dccmpc9ue/image/upload/v1745934941/footballLoverz_n8ul5f.png",
    },
    {
      title: "Danfolio",
      description:
        "A personal web portfolio created using React, documenting my early learning phase with project showcases, simple clones, and design practices.",
      techStack: ["React", "CSS", "JavaScript", "Responsive Design"],
      demoUrl: "https://danfolio1.netlify.app/",
      imageSrc: "https://res.cloudinary.com/dccmpc9ue/image/upload/v1745934942/danfolio_vfnpcz.png",
    },
  ]

  return (
    <section id="projects" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Some of my recent work" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 200}ms` : "0ms",
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              imageSrc={project.imageSrc}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
