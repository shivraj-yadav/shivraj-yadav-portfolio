"use client"

import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiRedis,
  SiGit, SiGithub, SiVercel, SiNetlify, SiPython,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Server, Wrench, Brain } from "lucide-react"

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
  Icon: React.ComponentType<{ size?: number; className?: string }>
  iconBg: string
  iconColor: string
  barColor: string
  skills: Skill[]
}

// ── Data ───────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Building responsive and interactive user interfaces",
    Icon: Code2,
    iconBg: "rgba(56,189,248,0.15)",
    iconColor: "#38BDF8",
    barColor: "#38BDF8",
    skills: [
      { name: "React.js", proficiency: 85, icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", proficiency: 90, icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", proficiency: 82, icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", proficiency: 95, icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", proficiency: 75, icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", proficiency: 78, icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "Server-side development and database management",
    Icon: Server,
    iconBg: "rgba(52,211,153,0.15)",
    iconColor: "#34D399",
    barColor: "#34D399",
    skills: [
      { name: "Node.js", proficiency: 90, icon: SiNodedotjs, color: "#6FCF3E" },
      { name: "Express.js", proficiency: 88, icon: SiExpress, color: "#DDDDDD" },
      { name: "Python", proficiency: 78, icon: SiPython, color: "#FFD23F" },
      { name: "MongoDB", proficiency: 80, icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", proficiency: 85, icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", proficiency: 75, icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis", proficiency: 68, icon: SiRedis, color: "#FF4438" },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML & Tools",
    subtitle: "Machine learning and intelligent systems",
    Icon: Brain,
    iconBg: "rgba(167,139,250,0.15)",
    iconColor: "#A78BFA",
    barColor: "#A78BFA",
    skills: [
      { name: "Python", proficiency: 78, icon: SiPython, color: "#FFD23F" },
      { name: "YOLOv8", proficiency: 80, icon: Brain, color: "#A78BFA" },
      { name: "OpenCV", proficiency: 75, icon: Brain, color: "#5C8DFF" },
      { name: "RAG / LLMs", proficiency: 65, icon: Brain, color: "#C084FC" },
    ],
  },
  {
    id: "devtools",
    title: "Dev Tools & Platforms",
    subtitle: "Version control and deployment platforms",
    Icon: Wrench,
    iconBg: "rgba(251,146,60,0.15)",
    iconColor: "#FB923C",
    barColor: "#FB923C",
    skills: [
      { name: "Git", proficiency: 90, icon: SiGit, color: "#F05032" },
      { name: "GitHub", proficiency: 93, icon: SiGithub, color: "#DDDDDD" },
      { name: "VS Code", proficiency: 95, icon: VscVscode, color: "#007ACC" },
      { name: "Vercel", proficiency: 85, icon: SiVercel, color: "#DDDDDD" },
      { name: "Netlify", proficiency: 80, icon: SiNetlify, color: "#00C7B7" },
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
  <div className="flex-1 h-[5px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
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
  const delay = 0.25 + index * 0.06

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className="flex items-center gap-3 group"
    >
      {/* Icon box */}
      <div
        className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-110"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <skill.icon className="w-4 h-4" style={{ color: skill.color }} />
      </div>

      {/* Name */}
      <span className="text-[13px] font-medium text-slate-300 w-24 shrink-0 group-hover:text-white transition-colors">
        {skill.name}
      </span>

      {/* Bar */}
      <Bar pct={skill.proficiency} color={barColor} delay={delay + 0.05} inView={inView} />

      {/* Percent */}
      <span className="text-[12px] font-bold tabular-nums w-8 text-right shrink-0" style={{ color: barColor }}>
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
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="rounded-2xl p-6 flex flex-col gap-5"
      style={{
        background: "rgba(17,24,39,0.85)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
          style={{ background: cat.iconBg }}
        >
          <cat.Icon size={18} className="" style={{ color: cat.iconColor } as React.CSSProperties} />
        </div>
        <div>
          <h3 className="text-[15px] font-bold text-white leading-tight">{cat.title}</h3>
          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{cat.subtitle}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

      {/* Skills */}
      <div className="flex flex-col gap-3.5">
        {cat.skills.map((skill, i) => (
          <SkillRow
            key={skill.name}
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
      className="relative py-24 px-4 sm:px-8"
      style={{ background: "#080c14" }}
    >
      {/* Background noise/depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto space-y-14">
        {/* ── Header ── */}
        <div ref={headerRef} className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-400"
          >
            ✦ Expertise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Skills &amp;{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg,#38BDF8,#818CF8,#A78BFA)" }}
            >
              Technologies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-slate-400 text-[14px] max-w-lg mx-auto leading-relaxed"
          >
            A comprehensive toolkit of modern technologies mastered through hands-on
            experience and continuous learning.
          </motion.p>
        </div>

        {/* ── Grid — 3 top, 2 bottom (matching reference) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Row 1: Frontend, Backend, AI/ML */}
          <Card cat={categories[0]} delay={0.05} />
          <Card cat={categories[1]} delay={0.12} />
          <Card cat={categories[2]} delay={0.19} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-2xl">
          {/* Row 2: DevTools — left aligned, matching reference layout */}
          <Card cat={categories[3]} delay={0.26} />
        </div>
      </div>
    </section>
  )
}

export default Skills