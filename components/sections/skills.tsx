"use client"

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si"

import { motion } from "framer-motion"
import { Code2, Server, BarChart3 } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code2,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React.js", proficiency: 85, icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", proficiency: 90, icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML5", proficiency: 95, icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", proficiency: 75, icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind CSS", proficiency: 70, icon: SiTailwindcss, color: "#38BDF8" },
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      color: "from-emerald-400 to-teal-500",
      skills: [
        { name: "Node.js", proficiency: 90, icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", proficiency: 90, icon: SiExpress, color: "#FFFFFF" },
        { name: "MongoDB", proficiency: 80, icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", proficiency: 90, icon: SiMysql, color: "#4479A1" },
      ],
    },
    {
      category: "Development Tools & Platforms",
      icon: BarChart3,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Git", proficiency: 90, icon: SiGit, color: "#F05032" },
        { name: "GitHub", proficiency: 93, icon: SiGithub, color: "#FFFFFF" },
        { name: "Vercel", proficiency: 85, icon: SiVercel, color: "#FFFFFF" },
        { name: "Netlify", proficiency: 80, icon: SiNetlify, color: "#00C7B7" },
      ],
    },
  ]

  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Technologies
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 space-y-6 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon
                          className="w-4 h-4"
                          style={{ color: skill.color }}
                        />
                        <p className="text-sm font-medium text-gray-200">
                          {skill.name}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-primary">
                        {skill.proficiency}%
                      </span>
                    </div>

                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color}`}
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
