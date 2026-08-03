"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Mail, Phone, MapPin, Send, FileText } from "lucide-react"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import { SiLeetcode, SiCodeforces } from "react-icons/si"

const Contact = () => {
  // ---------------- STATE ----------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "success" | "error" | "validation">("idle")
  const [loading, setLoading] = useState(false)

  // ---------------- DATA ----------------
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shivrajyadav320@gmail.com",
      href: "mailto:shivrajyadav320@gmail.com",
      anchorText: "Email Shivraj Yadav",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8999127575",
      href: "tel:+918999127575",
      anchorText: "Call Shivraj Yadav",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jalgaon, Maharashtra, India",
      href: "#",
      anchorText: "Shivraj Yadav Location: Jalgaon, India",
    },
  ]

  const socials = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/shivraj-yadav/",
      label: "LinkedIn",
      anchorText: "Shivraj Yadav on LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/shivraj-yadav",
      label: "GitHub",
      anchorText: "Shivraj Yadav on GitHub",
    },
    {
      icon: SiLeetcode,
      href: "https://leetcode.com/u/shivraj_yadav/",
      label: "LeetCode",
      anchorText: "Shivraj Yadav on LeetCode",
    },
    {
      icon: SiCodeforces,
      href: "https://codeforces.com/profile/shivraj-yadav",
      label: "Codeforces",
      anchorText: "Shivraj Yadav on Codeforces",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/shivraj_yadav1",
      label: "Twitter",
      anchorText: "Shivraj Yadav on Twitter/X",
    },
    {
      icon: FileText,
      href: "https://drive.google.com/file/d/1E0DYHSYOS4HUb6S1Pr3vzY2uRKbMbo9w/view?usp=sharing",
      label: "Resume",
      anchorText: "Download Shivraj Yadav's Resume",
    },
  ]

  // ---------------- ANIMATIONS ----------------
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("validation")
      return
    }

    setLoading(true)
    setStatus("idle")

    try {
      await emailjs.send(
        "service_3dtx2np",
        "template_5bk42k5",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "w5l-m36eL3fZ4zcaj"
      )

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error(error)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  // ---------------- JSX ----------------
  return (
    <section id="contact" className="section bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto space-y-12"
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Get In Touch with Shivraj Yadav</p>
          <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or interested in hiring a Full Stack Engineer? Reach out to Shivraj Yadav.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div variants={containerVariants} className="space-y-8">
            <address className="not-italic space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ x: 4 }}>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs font-bold uppercase text-muted-foreground">{info.label}</p>
                  </div>
                  <a
                    href={info.href}
                    className="ml-11 text-lg font-semibold hover:text-primary transition-colors"
                    title={info.anchorText}
                  >
                    {info.value}
                  </a>
                </motion.div>
              ))}
            </address>

            <motion.div variants={itemVariants} className="pt-8 border-t border-border/50">
              <h3 className="text-xl font-bold mb-2 text-foreground">Find Shivraj Yadav Online</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Connect across verified public profiles and technical coding platforms:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 2 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-card/40 hover:border-primary/50 hover:bg-card/80 transition-all duration-200"
                    title={social.anchorText}
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <social.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {social.anchorText}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-bold">Send me a message</h3>

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border resize-none"
            />

            <motion.button
              type="submit"
              disabled={loading}
              className="btn-premium bg-primary text-white w-full py-3 flex justify-center items-center gap-2 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </motion.button>

            {/* STATUS MESSAGES */}
            {status === "validation" && (
              <p className="text-yellow-500 font-semibold">⚠️ Please fill in all fields.</p>
            )}
            {status === "success" && (
              <p className="text-green-500 font-semibold">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 font-semibold">❌ Failed to send message.</p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
