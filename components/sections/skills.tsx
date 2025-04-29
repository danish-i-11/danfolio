"use client"

import { useState, useEffect } from "react"
import { Code, Server, Palette, Brain, Cloud, Shield, Workflow, Zap } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend",
      skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML/CSS", "Tailwind CSS", "Bootstrap", "Material UI"],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Middleware", "Authentication"],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure DevOps", "Docker", "CI/CD", "Deployment Pipelines"],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity",
      skills: ["Ethical Hacking", "Penetration Testing", "Red & Blue Team", "Web App Security"],
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "WordPress", "Responsive Design", "Wireframing"],
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Collaboration",
      skills: ["Jira", "Slack", "Linear", "Microsoft Teams", "Azure Boards", "Agile/Scrum"],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI & Automation",
      skills: ["ChatGPT", "Google Gemini", "DeepSeek", "Grok", "AI-Enhanced Development"],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Soft Skills",
      skills: ["Communication", "Project Management", "Problem Solving", "Teamwork", "Time Management"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Skills" subtitle="Technologies and abilities I've acquired" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={cn(
              "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-500 opacity-0 transform translate-y-8",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 100}ms` : "0ms",
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-800/50 rounded-lg text-teal-400">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-200">{category.title}</h3>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="bg-gray-800/30 px-4 py-2 rounded-lg border border-gray-700/50 hover:border-teal-500/30 hover:shadow-[0_0_10px_rgba(45,212,191,0.15)] transition-all duration-300"
                    >
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
