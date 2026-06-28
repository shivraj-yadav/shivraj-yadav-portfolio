"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

interface Experience {
  image?: string
  icon?: string
  iconBg?: string
  role: string
  company: string
  type: string
  location: string
  duration: string
  current: boolean
  description: string
  techStack: string[]
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      image: "/nexa-solution.jpg",
      role: "Software Engineer Intern",
      company: "Nexa Solutions LLC",
      type: "Internship",
      location: "Remote",
      duration: "Jun 2026 – Present",
      current: true,
      description:
        "Deployed Django-CRM on AWS EC2 with PostgreSQL, Redis, Celery, and Svelte frontend managed via PM2. Analyzed Frappe and MicroPyramid CRM repos, validated all core modules, and researched Meta Webhook + WhatsApp Ads integration for automated lead ingestion.",
      techStack: ["Django", "PostgreSQL", "SvelteKit", "AWS EC2", "PM2", "Celery", "Redis"],
    },
    {
      icon: "TW",
      iconBg: "from-violet-500 to-purple-600",
      role: "Software Engineer Intern",
      company: "TechnoWings International IT Solutions",
      type: "Internship",
      location: "Solapur, MH",
      duration: "Jul 2023 – Aug 2023",
      current: false,
      description:
        "Built Node.js/Express REST APIs for auth workflows (login, registration, password reset), developed React.js components with form validation, and integrated Cloudinary for media uploads — cutting asset load time by 40%.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="experience"
      className="section bg-gradient-to-b from-transparent via-accent/5 to-transparent"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">
            Professional Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Achievements
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 6 }}
              className="backdrop-blur-md bg-card/40 border border-border/50 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start gap-4">

                {/* Icon / Logo */}
                {exp.image ? (
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-border/40 shrink-0 bg-card/60">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.iconBg} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                  >
                    {exp.icon}
                  </div>
                )}

                {/* Title block */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold text-sm">{exp.company}</p>
                    </div>

                    {/* Meta: date + location + current badge */}
                    <div className="flex flex-wrap items-center gap-2 mt-1 sm:mt-0">
                      {exp.current && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full border border-primary text-primary font-semibold">
                          Current
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/30 px-2.5 py-1 rounded-full border border-border/40">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/30 px-2.5 py-1 rounded-full border border-border/40">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Type badge */}
                  <span className="inline-block mt-2 text-xs px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20 font-medium">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3 mt-4">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-primary font-medium hover:text-accent transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience