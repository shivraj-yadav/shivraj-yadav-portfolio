"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Target } from "lucide-react"

const About = () => {
  const stats = [
    
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "10+" },
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
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Crafting Solutions with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Purpose</span>
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed max-w-3xl font-light"
        >
          I build scalable and accessible web applications using modern technologies, with a strong focus on clean code, performance, and user experience.
        </motion.p>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="backdrop-blur-md bg-card/40 border border-border/50 rounded-2xl p-8 text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

       
      </motion.div>
    </section>
  )
}

export default About
