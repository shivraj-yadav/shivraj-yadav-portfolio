"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-border/50 bg-card/30 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">© 2025 Shivraj Yadav. All rights reserved.</p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(103, 232, 249, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="backdrop-blur-md bg-card/40 border border-border/50 p-3 rounded-full hover:bg-card/80 transition-all"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-primary" />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
