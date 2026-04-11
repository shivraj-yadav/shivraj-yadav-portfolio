"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: "Civic Issue Reporting System",
      description:
        "A smart web platform that allows citizens to report civic issues like potholes, garbage, and water leaks with real-time tracking and automated assignment to the nearest municipal worker using GPS-based logic.",
      category: "FULL STACK / SMART CITY",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Leaflet", "Cloudinary"],
      github: "https://github.com/himanshu-firke/smart-civic-reporting",
      demo: "#",
      status: "Completed",
      date: "2026",
      featured: true,
      complexity: "Advanced",
      image: "/civic-issue.png",
    }
    , {
      title: "Scalable AI Model Comparison Platform",
      description:
        "A full-stack web application to compare responses from multiple AI models using a unified API, focusing on performance, scalability, and clean UI.",
      category: "WEB APP'S",
      tech: ["React.js", "TypeScript", "Node.js", "REST APIs", "AI APIs"],
      github: "https://github.com/shivraj-yadav/ai-model-comparison-tool",
      demo: "#",
      status: "Completed",
      date: "2025",
      featured: true,
      complexity: "Intermediate",
      image: "/model-comparison.png",
    },
    {
      title: "LiveLogic",
      description:
        "A real-time collaborative code interview platform featuring shared code execution, Monaco editor integration, and a question bank.",
      category: "WEB APP'S",
      tech: ["React.js", "Node.js", "WebSocket", "Monaco Editor"],
      github: "https://github.com/shivraj-yadav/LiveLogic",
      demo: "#",
      status: "Completed",
      date: "2025",
      featured: true,
      complexity: "Intermediate",
      image: "/live-logic.png",
    },
    {
      title: "ChugLi – Real-Time Nearby Chat Web App",
      description:
        "A real-time MERN + Socket.io web application that allows users to create nearby, short-lived chat rooms with anonymous authentication, live presence tracking, and ephemeral messaging.",
      category: "WEB APP'S",
      tech: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Tailwind CSS"
      ],
      github: "https://github.com/shivraj-yadav/ChugLi",
      demo: "https://chugli-chat.vercel.app/",
      status: "Completed",
      date: "2025",
      featured: true,
      complexity: "Intermediate",
      image: "/chugli.png",
    },
    {
      title: "Audio Text Evaluator",
      description:
        "An application where users upload audio, type what they hear, and receive instant scoring with highlighted mistakes using speech recognition.",
      category: "AI / WEB APP'S",
      tech: ["React.js", "Node.js", "Python", "Whisper", "MongoDB"],
      github: "https://github.com/shivraj-yadav/audio-text-evaluator",
      demo: "#",
      status: "Completed",
      date: "2025",
      featured: true,
      complexity: "Intermediate",
      image: "/Audio-text.png",
    },
    {
      title: "CyberShield App",
      description:
        "An Android application that improves cybersecurity by detecting spam files, unsafe websites, and insecure WiFi networks.",
      category: "ANDROID APP",
      tech: ["Java", "Flask", "Cyber Security"],
      github: "https://github.com/shivraj-yadav/CyberShield-App",
      demo: "#",
      status: "Completed",
      date: "2024",
      featured: false,
      complexity: "Intermediate",
      image: "/cyberShield-app.png",
    },
    {
      title: "AI Finger Counter",
      description:
        "A real-time computer vision system that detects and counts fingers using hand landmarks for gesture recognition.",
      category: "AI / COMPUTER VISION",
      tech: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com/shivraj-yadav/AI-Finger-Counter",
      demo: "#",
      status: "Completed",
      date: "2024",
      featured: false,
      complexity: "Beginner",
      image: "/ai-finger.png",
    },
    {
      title: "TechProjectify",
      description:
        "A modern full-stack React application with an Express backend featuring a contact form and email notifications using Nodemailer.",
      category: "WEB APP'S",
      tech: ["React.js", "Node.js", "Express.js", "Nodemailer"],
      github: "https://github.com/shivraj-yadav/TechProjectify",
      demo: "#",
      status: "Completed",
      date: "2024",
      featured: false,
      complexity: "Beginner",
      image: "/TechProjectify.png",
    },
    {
      title: "SVIT College Website",
      description:
        "A responsive college website developed as a diploma final-year project to showcase departments, events, and admissions.",
      category: "WEB APP'S",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://svitsolapur.ac.in/",
      demo: "https://svitsolapur.ac.in/",
      status: "Completed",
      date: "2023",
      featured: false,
      complexity: "Beginner",
      image: "/svit.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "Completed":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
      default:
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
    }
  }

  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="section bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-white">
            All Projects
          </h2>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(103, 232, 249, 0.1)" }}
                className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-primary/30"
              >
                {/* Project Image */}
                <div className="relative w-full h-52 sm:h-56 flex-shrink-0 group overflow-hidden bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-white flex-1">{project.title}</h3>
                      <span className={`badge-status ${getStatusColor(project.status)} whitespace-nowrap`}>
                        {project.status === "In Development" && "⚡"}
                        {project.status === "Completed" && "✓"}
                        {" "}{project.status}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>
                  </div>

                  <div className="space-y-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tag, tagIdx) => (
                        <motion.span
                          key={tagIdx}
                          whileHover={{ scale: 1.05 }}
                          className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/25 hover:bg-primary/25 transition-all"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-2">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        Code
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Button */}
        {projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center pt-4"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium bg-transparent text-primary border border-primary/30 hover:bg-primary/10 flex items-center gap-2"
            >
              {showAll ? (
                <>
                  View Less Projects
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View More Projects
                  <ChevronDown className="w-4 h-4" />
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
