"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, ChevronDown, ChevronUp, Code2, Zap } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: "Talent IQ – Collaborative Coding Interview Platform",
      description:
        "A full-stack collaborative coding interview platform that enables real-time coding sessions, video calls, live chat, and technical interview management. Features interactive code editing, multi-language support, and seamless interviewer-candidate collaboration.",
      category: "WEB APP",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Clerk",
        "Monaco Editor",
        "Stream Video SDK",
        "React Query",
        "Tailwind CSS",
        "DaisyUI",
      ],
      github: "https://github.com/your-username/talent-iq",
      demo: "https://your-demo-link.com",
      status: "Completed",
      date: "2025",
      complexity: "Advanced",
      image: "/talent-iq.jpeg",
      accent: "#67e8f9",
    },
    {
      title: "Civic Issue Reporting System",
      description:
        "A smart web platform that allows citizens to report civic issues like potholes, garbage, and water leaks with real-time tracking and automated assignment to the nearest municipal worker using GPS-based logic.",
      category: "FULL STACK",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Leaflet", "Cloudinary"],
      github: "https://github.com/himanshu-firke/smart-civic-reporting",
      demo: "#",
      status: "Completed",
      date: "2026",
      complexity: "Advanced",
      image: "/civic-issue.png",
      accent: "#67e8f9",
    },
    {
      title: "Scalable AI Model Comparison Platform",
      description:
        "A full-stack web application to compare responses from multiple AI models using a unified API, focusing on performance, scalability, and clean UI.",
      category: "AI / WEB APP",
      tech: ["React.js", "TypeScript", "Node.js", "REST APIs", "AI APIs"],
      github: "https://github.com/shivraj-yadav/ai-model-comparison-tool",
      demo: "#",
      status: "Completed",
      date: "2025",
      complexity: "Intermediate",
      image: "/model-comparison.png",
      accent: "#a78bfa",
    },
    {
      title: "LiveLogic",
      description:
        "A real-time collaborative code interview platform featuring shared code execution, Monaco editor integration, and a question bank for streamlined technical assessments.",
      category: "WEB APP",
      tech: ["React.js", "Node.js", "WebSocket", "Monaco Editor"],
      github: "https://github.com/shivraj-yadav/LiveLogic",
      demo: "#",
      status: "Completed",
      date: "2025",
      complexity: "Intermediate",
      image: "/live-logic.png",
      accent: "#34d399",
    },
    {
      title: "ChugLi – Real-Time Nearby Chat Web App",
      description:
        "A real-time MERN + Socket.io web application that allows users to create nearby, short-lived chat rooms with anonymous authentication, live presence tracking, and ephemeral messaging.",
      category: "WEB APP",
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
      github: "https://github.com/shivraj-yadav/ChugLi",
      demo: "https://chugli-chat.vercel.app/",
      status: "Completed",
      date: "2025",
      complexity: "Intermediate",
      image: "/chugli.png",
      accent: "#f472b6",
    },
    {
      title: "Audio Text Evaluator",
      description:
        "An application where users upload audio, type what they hear, and receive instant scoring with highlighted mistakes using AI-powered speech recognition.",
      category: "AI / WEB APP",
      tech: ["React.js", "Node.js", "Python", "Whisper", "MongoDB"],
      github: "https://github.com/shivraj-yadav/audio-text-evaluator",
      demo: "#",
      status: "Completed",
      date: "2025",
      complexity: "Intermediate",
      image: "/Audio-text.png",
      accent: "#fb923c",
    },
    {
      title: "CyberShield App",
      description:
        "An Android application that improves cybersecurity by detecting spam files, unsafe websites, and insecure WiFi networks using ML-backed analysis.",
      category: "ANDROID APP",
      tech: ["Java", "Flask", "Cyber Security"],
      github: "https://github.com/shivraj-yadav/CyberShield-App",
      demo: "#",
      status: "Completed",
      date: "2024",
      complexity: "Intermediate",
      image: "/cyberShield-app.png",
      accent: "#67e8f9",
    },
    {
      title: "AI Finger Counter",
      description:
        "A real-time computer vision system that detects and counts fingers using hand landmarks for gesture recognition with high FPS accuracy.",
      category: "COMPUTER VISION",
      tech: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com/shivraj-yadav/AI-Finger-Counter",
      demo: "#",
      status: "Completed",
      date: "2024",
      complexity: "Beginner",
      image: "/ai-finger.png",
      accent: "#a78bfa",
    },
    {
      title: "TechProjectify",
      description:
        "A modern full-stack React application with an Express backend featuring a contact form and email notifications using Nodemailer.",
      category: "WEB APP",
      tech: ["React.js", "Node.js", "Express.js", "Nodemailer"],
      github: "https://github.com/shivraj-yadav/TechProjectify",
      demo: "#",
      status: "Completed",
      date: "2024",
      complexity: "Beginner",
      image: "/TechProjectify.png",
      accent: "#34d399",
    },
    {
      title: "SVIT College Website",
      description:
        "A responsive college website developed as a diploma final-year project to showcase departments, events, and admissions info.",
      category: "WEB APP",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://svitsolapur.ac.in/",
      demo: "https://svitsolapur.ac.in/",
      status: "Completed",
      date: "2023",
      complexity: "Beginner",
      image: "/svit.png",
      accent: "#f472b6",
    },
  ]

  const complexityBadge: Record<string, string> = {
    Advanced: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30",
    Intermediate: "bg-violet-500/15 text-violet-300 border border-violet-500/30",
    Beginner: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const visibleProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(103,232,249,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto space-y-14"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400/60" />
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
              Portfolio
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            All{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            A collection of things I've built — from real-time platforms to AI-powered tools.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.article
                layout
                key={project.title}
                variants={itemVariants}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.38, delay: idx * 0.04 }}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900/60 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(103,232,249,0.18)]"
              >
                {/* Image Area */}
                <div className="relative w-full overflow-hidden bg-slate-800/80" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    onError={(e) => {
                      // Fallback: show a gradient placeholder if image fails
                      const target = e.currentTarget as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                  {/* Category badge floating on image */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-900/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Complexity badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${complexityBadge[project.complexity]}`}>
                      {project.complexity}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  {/* Title + status */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-white font-semibold text-base leading-snug flex-1 group-hover:text-cyan-300 transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors duration-150"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-500 border border-slate-700/60">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Footer: date + links */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                    <span className="text-slate-500 text-xs font-mono">{project.date}</span>

                    <div className="flex items-center gap-3">
                      {project.demo && project.demo !== "#" && (
                        <motion.a
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.94 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors text-xs font-medium"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live
                        </motion.a>
                      )}
                      <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-medium"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Hover glow border effect */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(103,232,249,0.06), transparent 60%)`,
                  }}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / Less */}
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-2.5 px-7 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/15 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                  View All {projects.length} Projects
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default Projects