"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pt-16" id="hero">
      {/* Animated background glow */}
      <div
        className={cn(
          "absolute w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] opacity-0 transition-opacity duration-1000",
          mounted && "opacity-30",
        )}
      ></div>

      <div
        className={cn(
          "text-center space-y-6 max-w-4xl px-4 opacity-0 transform translate-y-8 transition-all duration-1000",
          mounted && "opacity-100 translate-y-0",
        )}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
            Danish Iqbal
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light">Full-Stack Developer</p>

        <div className="flex justify-center space-x-4 pt-2">
          <a
            href="https://www.linkedin.com/in/danish-iqbal-30143925a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/danish-i-11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:diqbal885@gmail.com"
            className="text-gray-400 hover:text-teal-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+917070064300"
            className="text-gray-400 hover:text-teal-400 transition-colors"
            aria-label="Phone"
          >
            <Phone size={24} />
          </a>
        </div>

        <div className="pt-4 flex flex-wrap gap-4 justify-center">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-400 text-gray-900 font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
          >
            View Projects
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-800/50 text-teal-400 border border-teal-500/30 font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          aria-label="Scroll to About section"
          onClick={(e) => {
            e.preventDefault()
            const aboutSection = document.querySelector("#about")
            if (aboutSection) {
              window.scrollTo({
                top: aboutSection.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "smooth",
              })
            }
          }}
        >
          <ArrowDown className="text-teal-400 h-8 w-8" />
        </a>
      </div>
    </section>
  )
}
