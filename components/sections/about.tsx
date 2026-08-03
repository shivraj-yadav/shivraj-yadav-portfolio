"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Target } from "lucide-react"

const About = () => {
  const stats = [
    { label: "DSA Problems Solved", value: "400+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Core Technologies", value: "12+" },
    { label: "Academic CGPA", value: "8.45" },
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

  return (
    <section id="about" className="section pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">About Shivraj Yadav</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Building Scalable Web Applications &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligent Software</span>
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4 max-w-4xl text-muted-foreground text-base md:text-lg leading-relaxed font-light">
          <p>
            Hello! I'm <strong className="text-foreground font-semibold">Shivraj Yadav</strong>, a Computer Engineering student at Government College of Engineering, Jalgaon, and a passionate Full Stack Developer. I specialize in building modern, performant web applications using <strong className="text-foreground font-semibold">React.js, Next.js, Node.js, Express.js, and MongoDB</strong>.
          </p>
          <p>
            My engineering focus spans <strong className="text-foreground font-semibold">full-stack web architecture, AI/ML integrations, and real-time backend systems</strong>. From developing collaborative coding interview platforms to engineering smart civic issue reporting tools and speech evaluation systems with Python & Whisper AI, I enjoy crafting software solutions that deliver immediate real-world impact.
          </p>
          <p>
            Beyond full stack development, I am an active competitive programmer with over <strong className="text-foreground font-semibold">400+ problems solved across LeetCode and Codeforces</strong>, holding a Specialist rank on Codeforces.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="backdrop-blur-md bg-card/40 border border-border/50 rounded-2xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-xs md:text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
