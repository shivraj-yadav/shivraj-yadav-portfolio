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
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1i916P2nql-JiOdVAyL3CnrG7RK134Eee/view?usp=sharing",
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
  className="relative min-h-[25vh] flex items-center justify-center section pb-16 overflow-hidden"
>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full"
      >
        {/* Left: Text Content */}
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.p
              variants={itemVariants}
              className="text-primary text-lg font-semibold tracking-wider uppercase"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white"
            >
              Hello, I am{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400">
                Shivraj Yadav
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 font-light tracking-tight"
            >
              Full Stack Engineer (MERN) | AI-Driven Web Applications
            </motion.p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-md"
          >
            I develop scalable and high-performance web applications with a focus on clean architecture, usability, and long-term maintainability. I enjoy solving real-world problems by building reliable systems and enhancing them with intelligent features.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            {/* Get In Touch */}
            <motion.button
              onClick={handleContactScroll}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(103, 232, 249, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium bg-primary text-primary-foreground flex items-center justify-center gap-2 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Get In Touch
            </motion.button>

            {/* Download Resume */}
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium bg-secondary text-foreground border border-primary/30 flex items-center justify-center gap-2 hover:bg-secondary/30 hover:border-primary/50"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image with Glow */}
<motion.div variants={itemVariants} className="relative flex items-center justify-center">
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="relative w-72 h-72 md:w-96 md:h-96"
  >
    {/* Outer rotating glow */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 p-[2px]"
    >
      <div className="w-full h-full rounded-full bg-slate-900" />
    </motion.div>

    {/* Profile Image */}
    <div className="absolute inset-2 rounded-full overflow-hidden">
      <Image
        src="/shivv.jpeg"
        alt="Shivraj Yadav profile photo"
        fill
        priority
        className="object-cover"
      />
    </div>

    {/* Inner glow pulse */}
    <motion.div
      animate={{ opacity: [0.4, 0.9, 0.4] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      className="absolute inset-0 rounded-full glow-effect"
    />
  </motion.div>
</motion.div>

      </motion.div>
    </section>
  )
}

export default Hero
