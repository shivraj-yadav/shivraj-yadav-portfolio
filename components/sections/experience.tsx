"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "TechnoWings International IT Solutions",
      location: "Solapur, Maharashtra",
      duration: "Jul 2023 – Aug 2023",
      achievements: [
        "Built REST APIs in Node.js and Express.js for auth workflows — login, registration, and forgot-password — reducing support queries by 30%.",
        "Developed 3+ React.js UI components with form validation and resolved 15+ bugs during Agile sprint reviews via Git-based peer code reviews.",
        "Integrated Cloudinary API for media uploads, handling 500+ assets with 40% faster load time."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Git", "Postman"]
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
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
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Professional Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Achievements</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="backdrop-blur-md bg-card/40 border border-border/50 rounded-2xl p-8 border-l-2 border-primary/50 hover:border-primary/100 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <p className="text-muted-foreground text-sm mt-2 md:mt-0">{exp.duration}</p>
              </div>
              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
