"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1E0DYHSYOS4HUb6S1Pr3vzY2uRKbMbo9w/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    )
  }

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative flex items-center justify-center px-6 lg:px-16 overflow-hidden pt-20 min-h-[calc(100vh-80px)]"
    >
      {/* Subtle background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl w-full"
      >
        {/* ── Left: Text Content ── */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">

          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-cyan-400 before:content-[''] before:block before:w-6 before:h-px before:bg-cyan-400">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400">
                Shivraj Yadav
              </span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 font-medium tracking-tight border-l-2 border-cyan-500/50 pl-4"
          >
            Computer Engineering Student & Full Stack Developer (MERN)&nbsp;&nbsp;·&nbsp;&nbsp;AI & Software Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg"
          >
            I build end-to-end web applications that are scalable, efficient, and production-ready —
            focusing on clean architectures, AI integrations, and seamless user experiences using Next.js, React.js, and Node.js.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <motion.button
              onClick={handleContactScroll}
              whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(34,211,238,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm tracking-wide transition-colors duration-200 group"
              aria-label="Contact Shivraj Yadav"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>

            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/10 hover:border-cyan-500/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm tracking-wide transition-all duration-200"
              aria-label="Download Shivraj Yadav Resume"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ── Right: Profile Image ── */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96"
          >
            {/* Outer rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #22d3ee, #818cf8, #a78bfa, #22d3ee)",
                padding: "2px",
              }}
            >
              <div className="w-full h-full rounded-full bg-slate-950" />
            </motion.div>

            {/* Static inner ring for depth */}
            <div className="absolute inset-[3px] rounded-full border border-white/5" />

            {/* Profile Image */}
            <div className="absolute inset-[6px] rounded-full overflow-hidden ring-1 ring-white/10">
              <Image
                src="/shivraj.jpeg"
                alt="Shivraj Yadav - Computer Engineering Student & Full Stack Developer"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Ambient glow under the circle */}
            <div className="absolute inset-8 rounded-full bg-cyan-400/10 blur-2xl -z-10" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
