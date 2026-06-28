"use client"

import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiRedis,
  SiGit, SiGithub, SiVercel, SiPython, SiDocker, SiPostman,
  SiSocketdotio, SiCplusplus, SiAwsamplify,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { TbBrandNextjs } from "react-icons/tb"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Server, Database, Wrench, Brain } from "lucide-react"

// ── Types ──────────────────────────────────────────────────────────────────────

interface Skill {
  name: string
  proficiency: number
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
}

interface Category {
  id: string
  title: string
  subtitle: string
  Icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>
  iconBg: string
  iconColor: string
  barColor: string
  skills: Skill[]
}

// ── Data ───────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    id: "languages",
    title: "Languages",
    subtitle: "Core programming languages",
    Icon: Code2,
    iconBg: "rgba(56,189,248,0.15)",
    iconColor: "#38BDF8",
    barColor: "#38BDF8",
    skills: [
      { name: "JavaScript", proficiency: 90, icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", proficiency: 82, icon: SiTypescript, color: "#3178C6" },
      { name: "Python", proficiency: 78, icon: SiPython, color: "#FFD23F" },
      { name: "C++", proficiency: 72, icon: SiCplusplus, color: "#00599C" },
      { name: "SQL", proficiency: 80, icon: Database, color: "#38BDF8" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Building responsive user interfaces",
    Icon: Code2,
    iconBg: "rgba(99,102,241,0.15)",
    iconColor: "#818CF8",
    barColor: "#818CF8",
    skills: [
      { name: "React.js", proficiency: 88, icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", proficiency: 80, icon: TbBrandNextjs, color: "#DDDDDD" },
      { name: "HTML5", proficiency: 95, icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", proficiency: 85, icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", proficiency: 82, icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Server-side development & APIs",
    Icon: Server,
    iconBg: "rgba(52,211,153,0.15)",
    iconColor: "#34D399",
    barColor: "#34D399",
    skills: [
      { name: "Node.js", proficiency: 88, icon: SiNodedotjs, color: "#6FCF3E" },
      { name: "Express.js", proficiency: 86, icon: SiExpress, color: "#DDDDDD" },
      { name: "REST APIs", proficiency: 90, icon: Server, color: "#34D399" },
      { name: "Socket.IO", proficiency: 75, icon: SiSocketdotio, color: "#DDDDDD" },
      { name: "JWT", proficiency: 82, icon: Wrench, color: "#FB923C" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Caching",
    subtitle: "Data storage and performance layer",
    Icon: Database,
    iconBg: "rgba(251,146,60,0.15)",
    iconColor: "#FB923C",
    barColor: "#FB923C",
    skills: [
      { name: "PostgreSQL", proficiency: 78, icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", proficiency: 82, icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", proficiency: 80, icon: SiMysql, color: "#4479A1" },
      { name: "Redis", proficiency: 68, icon: SiRedis, color: "#FF4438" },
    ],
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    subtitle: "Deployment, tooling & version control",
    Icon: Wrench,
    iconBg: "rgba(167,139,250,0.15)",
    iconColor: "#A78BFA",
    barColor: "#A78BFA",
    skills: [
      { name: "AWS EC2", proficiency: 72, icon: SiAwsamplify, color: "#FF9900" },
      { name: "Docker", proficiency: 68, icon: SiDocker, color: "#2496ED" },
      { name: "Git", proficiency: 92, icon: SiGit, color: "#F05032" },
      { name: "GitHub", proficiency: 93, icon: SiGithub, color: "#DDDDDD" },
      { name: "Postman", proficiency: 88, icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", proficiency: 85, icon: SiVercel, color: "#DDDDDD" },
    ],
  },
]

// ── Animated Bar ───────────────────────────────────────────────────────────────

const Bar = ({
  pct,
  color,
  delay,
  inView,
}: {
  pct: number
  color: string
  delay: number
  inView: boolean
}) => (
  <div
    className="flex-1 h-[5px] rounded-full overflow-hidden"
    style={{ background: "rgba(255,255,255,0.07)" }}
  >
    <motion.div
      className="h-full rounded-full"
      style={{ background: color }}
      initial={{ width: 0 }}
      animate={inView ? { width: `${pct}%` } : { width: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  </div>
)

// ── Skill Row ──────────────────────────────────────────────────────────────────

const SkillRow = ({
  skill,
  barColor,
  index,
  inView,
}: {
  skill: Skill
  barColor: string
  index: number
  inView: boolean
}) => {
  const delay = 0.2 + index * 0.06

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className="flex items-center gap-3 group"
    >
      {/* Icon box — matches reference: dark bg, subtle border */}
      <div
        className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-110"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.09)",
        }}
      >
        <skill.icon className="w-[18px] h-[18px]" style={{ color: skill.color }} />
      </div>

      {/* Name — bold, matches reference */}
      <span className="text-[13.5px] font-bold text-foreground w-28 shrink-0 group-hover:text-primary transition-colors">
        {skill.name}
      </span>

      {/* Progress bar */}
      <Bar pct={skill.proficiency} color={barColor} delay={delay + 0.05} inView={inView} />

      {/* Percentage */}
      <span
        className="text-[12px] font-bold tabular-nums w-8 text-right shrink-0"
        style={{ color: barColor }}
      >
        {skill.proficiency}%
      </span>
    </motion.div>
  )
}

// ── Card ───────────────────────────────────────────────────────────────────────

const Card = ({ cat, delay = 0 }: { cat: Category; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="backdrop-blur-md bg-card/40 border border-border/50 rounded-2xl p-6 flex flex-col gap-5 hover:border-primary/40 transition-colors duration-300"
    >
      {/* Card header */}
      <div className="flex items-start gap-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
          style={{ background: cat.iconBg }}
        >
          <cat.Icon size={18} style={{ color: cat.iconColor }} />
        </div>
        <div>
          <h3 className="text-[15px] font-bold text-foreground leading-tight">{cat.title}</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{cat.subtitle}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border/40" />

      {/* Skill rows */}
      <div className="flex flex-col gap-3.5">
        {cat.skills.map((skill, i) => (
          <SkillRow
            key={skill.name + i}
            skill={skill}
            barColor={cat.barColor}
            index={i}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  )
}

// ── Main ───────────────────────────────────────────────────────────────────────

const Skills = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section
      id="skills"
      className="section bg-gradient-to-b from-transparent via-accent/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header — matches Experience.tsx style exactly */}
        <div ref={headerRef} className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-primary text-sm font-semibold uppercase tracking-wider"
          >
            Technical Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Technologies
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-muted-foreground text-sm max-w-lg"
          >
            A toolkit built through real projects, internships, and continuous learning.
          </motion.p>
        </div>

        {/* Row 1: Languages · Frontend · Backend */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card cat={categories[0]} delay={0.05} />
          <Card cat={categories[1]} delay={0.12} />
          <Card cat={categories[2]} delay={0.19} />
        </div>

        {/* Row 2: Databases · Cloud & DevOps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card cat={categories[3]} delay={0.26} />
          <Card cat={categories[4]} delay={0.33} />
        </div>
      </div>
    </section>
  )
}

export default Skills