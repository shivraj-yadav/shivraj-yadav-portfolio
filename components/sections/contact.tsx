"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react"

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
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8999127575",
      href: "tel:+918999127575",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jalgaon, Maharashtra, India",
      href: "#",
    },
  ]

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/shivraj-yadav/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/shivraj-yadav", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/shivraj_yadav1", label: "Twitter" },
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
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div variants={containerVariants} className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ x: 4 }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs font-bold uppercase text-muted-foreground">{info.label}</p>
                </div>
                <a href={info.href} className="ml-11 text-lg font-semibold hover:text-primary">
                  {info.value}
                </a>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="pt-8 border-t border-border/50">
              <h3 className="text-lg font-bold mb-6">Connect with me</h3>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.15 }}
                    className="w-12 h-12 rounded-lg border border-primary/40 flex items-center justify-center hover:bg-primary/20"
                  >
                    <social.icon className="w-6 h-6 text-primary" />
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
