"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Award, GraduationCap, ExternalLink } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

export default function Education() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "M.G. Institute of Management and Technology (AKTU Affiliated)",
      location: "Lucknow, India",
      period: "2019 — 2023",
      grade: "CGPA: 7.4",
    },
    {
      degree: "Higher Secondary (CBSE)",
      institution: "Iqra Public School",
      location: "Bihar, India",
      period: "2017 — 2019",
      grade: "CGPA: 5.4",
    },
    {
      degree: "Secondary School (CBSE)",
      institution: "B.J.M. Carmel Academy School",
      location: "Maharashtra, India",
      period: "2016 — 2017",
      grade: "CGPA: 9.8",
    },
  ]

  const certifications = [
    {
      title: "Responsive Web Design Developer",
      issuer: "freeCodeCamp",
      date: "Dec 2023",
      url: "https://www.freecodecamp.org/certification/Danish_Iqbal/responsive-web-design",
    },
  ]

  return (
    <section id="education" className="py-20 relative scroll-mt-16">
      <SectionHeading
        title="Education & Certifications"
        subtitle="My academic background and professional development"
      />

      <div className="grid md:grid-cols-2 gap-8">
        <div
          className={cn(
            "opacity-0 transform -translate-x-8 transition-all duration-700",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-teal-400" />
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300"
              >
                <h4 className="text-lg font-medium text-gray-200">{edu.degree}</h4>
                <p className="text-teal-400">{edu.institution}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-teal-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-teal-400" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.grade && (
                    <div className="flex items-center gap-1">
                      <Award size={14} className="text-teal-400" />
                      <span>{edu.grade}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "opacity-0 transform translate-x-8 transition-all duration-700 delay-300",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-teal-400" />
            Certifications
          </h3>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300"
              >
                <h4 className="text-lg font-medium text-gray-200">{cert.title}</h4>
                <p className="text-teal-400">{cert.issuer}</p>
                <div className="flex items-center gap-1 mt-2 text-sm text-gray-400">
                  <Calendar size={14} className="text-teal-400" />
                  <span>{cert.date}</span>
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-sm text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>View Certificate</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
