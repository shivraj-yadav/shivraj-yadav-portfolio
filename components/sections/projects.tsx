"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
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
    },
  ];



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

  const getStatusColor = (status) => {
    switch (status) {
      case "In Development":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "Completed":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
      default:
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
    }
  }

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
            All Projects <span className="text-primary"> projects</span>
          </h2>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(103, 232, 249, 0.1)" }}
              className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 flex flex-col justify-between transition-all hover:border-primary/30"
            >
              <div className="space-y-4 mb-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white flex-1">{project.title}</h3>
                  <span className={`badge-status ${getStatusColor(project.status)} whitespace-nowrap`}>
                    {project.status === "In Development" && "⚡"}
                    {project.status === "Completed" && "✓"}
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>
              </div>

              <div className="space-y-4">
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
