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
      date: "2023",
      techStack: ["React.js", "Node.js", "Web3", "Figma", "UI/UX Design"],
      demoUrl: "https://www.blackpanthertkn.info/",
      imageSrc: "/placeholder.svg?height=225&width=400",
    },
    {
      title: "Daily Doze of DSA",
      description:
      "Made a one-month freelance project as a UI/UX Designer, delivering an intuitive and engaging platform for Data Structures and Algorithms learners using Figma for the full product design.",
      date: "2023",
      techStack: ["Figma", "UI/UX Design", "Product Design"],
      demoUrl: "https://www.blackpanthertkn.info/",
      // demoUrl: null,
      imageSrc: "/placeholder.svg?height=225&width=400",
    },
    {
      title: "Football Loverz App",
      description:
        "A React JSX-based personal project showcasing my passion for football, along with dynamic components and player insights.",
      date: "2023",
      techStack: ["React", "JSX", "CSS", "JavaScript"],
      demoUrl: "https://footballloverz.netlify.app/",
      imageSrc: "/placeholder.svg?height=225&width=400",
    },
    {
      title: "Danfolio",
      description:
        "A personal web portfolio created using React, documenting my early learning phase with project showcases, simple clones, and design practices.",
      date: "2022",
      techStack: ["React", "CSS", "JavaScript", "Responsive Design"],
      demoUrl: "https://danfolio1.netlify.app/",
      imageSrc: "/placeholder.svg?height=225&width=400",
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
              date={project.date}
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
