"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shivraj-yadav/", title: "Shivraj Yadav on LinkedIn" },
    { label: "GitHub", href: "https://github.com/shivraj-yadav", title: "Shivraj Yadav on GitHub" },
    { label: "LeetCode", href: "https://leetcode.com/u/shivraj_yadav/", title: "Shivraj Yadav on LeetCode" },
    { label: "Codeforces", href: "https://codeforces.com/profile/shivraj-yadav", title: "Shivraj Yadav on Codeforces" },
    { label: "Twitter/X", href: "https://x.com/shivraj_yadav1", title: "Shivraj Yadav on Twitter" },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-border/50 bg-card/30 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center md:text-left space-y-2">
            <p className="text-foreground font-semibold text-base">Shivraj Yadav</p>
            <p className="text-muted-foreground text-xs">
              Computer Engineering Student & Full Stack Developer · © {new Date().getFullYear()} Shivraj Yadav. All rights reserved.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 text-xs">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title={link.title}
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(103, 232, 249, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="backdrop-blur-md bg-card/40 border border-border/50 p-3 rounded-full hover:bg-card/80 transition-all"
            title="Scroll to top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 text-primary" />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
