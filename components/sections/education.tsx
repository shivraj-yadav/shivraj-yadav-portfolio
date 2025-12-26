"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const Education = () => {
  const education = [
    {
      degree: "B.Tech Computer Engineering",
      school: "Government College of Engineering, Jalgaon",
      year: "2024 -present",
      achievements: ["Focused on core computer engineering subjects including Data Structures, Algorithms, Software Engineering, Databases, and Modern Web Development. Actively working on full-stack and AI-based projects."],
    },
    {
      degree: "Diploma in Information Technology",
      school: "SVERI’s College of Engineering, Pandharpur",
      year: "2021 – 2024",
      achievements: ["Built a strong foundation in programming, web technologies, databases, and computer fundamentals. Completed multiple academic and real-world projects during diploma."],
    },
    {
      degree: "10th Grade (SSC)",
      school: "Sulakhe English Medium School",
      year: "2020 - 2021",
      achievements: ["Developed a strong base in mathematics, science, and logical problem-solving, supporting further studies in engineering."],
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
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Education 
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="backdrop-blur-md bg-card/40 border border-border/50 rounded-2xl p-8 border-l-4 border-accent/50 hover:border-accent transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-muted-foreground font-medium">{edu.school}</p>
                  <p className="text-accent text-sm mt-1">{edu.year}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-6 ml-10">
                {edu.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {achievement}
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

export default Education
