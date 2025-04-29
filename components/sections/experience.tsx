"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

export default function Experience() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Peace Keepers",
      location: "Delaware, USA (Remote)",
      period: "Jan 2024 — Present",
      website: "https://peace-keepers.io/",
      description: [
        "Designed and developed high-performance user interfaces using React.js, Tailwind CSS, JavaScript, TypeScript, MUI, and Bootstrap, crafting pixel-perfect components and dynamic front-end flows with a focus on responsive and accessible design.",
        "Built and maintained RESTful APIs, middleware, and server-side controllers using Node.js and Express.js to enable scalable, secure, and high-performance backend operations.",
        "Integrated third-party libraries, dependencies, and frontend state managers to ensure cross-platform compatibility, optimized performance, and smooth user experience across devices.",
        "Collaborated closely with UI/UX teams using Figma for designing, prototyping, and refining user interfaces aligned with product goals and client expectations.",
        "Led product strategy, defined feature roadmaps, and managed cross-functional coordination between developers, designers, and business teams to deliver robust solutions.",
        "Oversaw agile workflows, including sprint planning, task prioritization, and release cycles, maintaining a strong balance between technical excellence and strategic business growth for Peace Keepers' cybersecurity platform.",
      ],
      companyDescription:
        "Peace Keepers is a conflict resolution system for blockchain disputes. It is an unbiased and decentralized system that promotes fair and appropriate resolutions no matter how complex the dispute is.",
    },
    {
      title: "Full Stack Developer",
      company: "Enkaare",
      location: "Baltimore, USA (Remote)",
      period: "April 2023 — Jan 2024",
      website: "https://www.enkaare.com/",
      description: [
        "Engineered responsive user interfaces using React.js, JavaScript, Tailwind CSS, MUI, and Bootstrap, focusing on building clean, reusable components and delivering smooth front-end experiences across modern browsers and devices.",
        "Developed and deployed backend APIs using Node.js and Express.js, handling routes, middleware, and business logic to support secure and scalable application functionality.",
        "Integrated UI components with backend services and implemented effective state management to ensure seamless data flow, dynamic rendering, and high performance across the entire stack.",
        "Collaborated on UI/UX design workflows using Figma, translating wireframes and mock-ups into functional interfaces while maintaining brand consistency and usability standards.",
        "Delivered full-stack features from concept to deployment, coordinating with product teams to meet deadlines and maintain code quality in a fast-paced, agile environment.",
      ],
      companyDescription:
        "Enkaare is a global consulting platform that connects businesses with top-tier talent across the world. It streamlines the hiring process by offering a transparent, location-agnostic recruitment experience for both companies and professionals.",
    },
    {
      title: "Ethical Hacker (Internship)",
      company: "RBT Security",
      location: "Toronto, Ontario, Canada (Remote)",
      period: "Internship",
      website: "https://www.rbtsec.com/",
      description: [
        "Conducted thorough penetration testing and real-world vulnerability assessments on client systems.",
        "Got shadowed in red and blue team cybersecurity simulations to detect and resolve security gaps.",
        "Specialized in Web Application Penetration Testing, identifying and exploiting vulnerabilities such as SQL Injection (SQLi), Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), Insecure Direct Object References (IDOR), and Business Logic Flaws.",
        "Utilized tools like Burp Suite, OWASP ZAP, and custom manual techniques for in-depth vulnerability analysis.",
        "Authored detailed vulnerability reports and recommended actionable remediation steps for development teams to strengthen application security.",
      ],
      companyDescription:
        "RBT Security specializes in cybersecurity services including penetration testing, vulnerability assessments, and security consulting.",
    },
  ]

  return (
    <section id="experience" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Experience" subtitle="My professional journey" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={cn(
              "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 md:p-8 opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 200}ms` : "0ms",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-200">{exp.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <a href={exp.website} target="_blank" className="text-teal-400 font-medium">{exp.company}</a>
                  {exp.website && (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                      aria-label={`Visit ${exp.company} website`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-1 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-teal-400" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-teal-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              {exp.companyDescription && (
                <div className="mt-4 pt-4 border-t border-gray-800/50">
                  <p className="text-gray-400 italic">{exp.companyDescription}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
