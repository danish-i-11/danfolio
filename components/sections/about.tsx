"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Code, Briefcase, GraduationCap, MapPin } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const quickFacts = [
    {
      icon: <Code className="h-5 w-5 text-teal-400" />,
      title: "Full-Stack Developer",
      description: "Specialized in MERN stack development",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-teal-400" />,
      title: "Professional Experience",
      description: "Working with international clients",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-teal-400" />,
      title: "B.Tech in Computer Science",
      description: "AKTU Affiliated, 2019-2023",
    },
    {
      icon: <MapPin className="h-5 w-5 text-teal-400" />,
      title: "Siwan, India",
      description: "Available for work",
    },
  ]

  return (
    <section id="about" className="py-20 relative scroll-mt-16">
      <SectionHeading title="About Me" subtitle="Get to know me better" />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div
          className={cn(
            "relative opacity-0 transform -translate-x-8 transition-all duration-1000",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-teal-300/20 rounded-2xl -rotate-6 transform scale-95"></div>
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800/50"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dccmpc9ue/image/upload/v1745934942/dan_gjs9sn.png"
                alt="Danish Iqbal"
                width={400}
                height={400}
                className="object-cover h-full w-full"
                priority
              />
              {/* <div className="absolute inset-0 flex items-center justify-center text-6xl">DI</div> */}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "space-y-6 opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50 shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Full-Stack Developer with expertise in the MERN stack, currently working with Peace
              Keepers, a blockchain dispute resolution platform. I specialize in building responsive user interfaces and
              scalable backend systems.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              With experience in both frontend and backend development, I enjoy creating clean, efficient code and
              delivering seamless user experiences. I'm also skilled in UI/UX design using Figma and have knowledge of
              cybersecurity practices.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              I'm constantly expanding my skills and staying updated with the latest technologies to deliver innovative
              solutions for complex problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.15)]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{fact.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-200">{fact.title}</h3>
                    <p className="text-sm text-gray-400">{fact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
