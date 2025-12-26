"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const Experience = () => {
  const experiences = [
  {
    role: "Trainee Engineer",
    company: "TechnoWings International IT Solutions",
    location: "Solapur, Maharashtra",
    duration: "Jul 2023 – Aug 2023",
    achievements: [
      "Worked on basic features using React.js and Node.js.",
      "Created simple REST API endpoints and tested them using Postman.",
      "Made small improvements to SQL queries under team guidance.",
      "Built responsive UI pages following given design guidelines."
    ],
    techStack: ["React.js", "Node.js", "Express", "SQL", "Postman"]
  },
  {
    role: "Founder & Full Stack Engineer",
    company: "Tech Projectify",
    location: "Remote",
    duration: "2023 – Present",
    achievements: [
          "Designed and developed a full-stack platform delivering academic and MVP-level projects for engineering students and early-stage startups.",
          "Built and deployed scalable web applications using the MERN stack with a focus on performance, accessibility, and clean architecture.",

    "Delivered ready-to-customize web, Android, and AI/ML projects with complete documentation, code walkthroughs, and deployment support.",

          "Integrated project request workflows, service listings, and student-focused dashboards to streamline project delivery.",

    ],
    techStack: ["React.js", "Node.js", "MongoDB", "JWT"]
  },
  {
    role: "AI / ML Intern",
    company: "Pantech.ai",
    location: "Remote",
    duration: "Internship Program",
    achievements: [
      "Learned basics of Machine Learning and Deep Learning.",
      "Worked on beginner-level projects like price prediction and image classification.",
      "Used Python libraries for data handling and model training.",
      "Understood how AI models are trained and evaluated."
    ],
    techStack: ["Python", "Pandas", "NumPy", "TensorFlow"]
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
  className="section py-16 md:py-20 bg-gradient-to-b from-transparent via-accent/5 to-transparent"
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
