import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://shivraj-yadav.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shivraj Yadav | Computer Engineering Student & Full Stack Developer",
  description:
    "Shivraj Yadav is a Computer Engineering Student and Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, Python, AI/ML, and Software Developer.",
  keywords: [
    "Shivraj Yadav",
    "Computer Engineering Student",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "AI/ML",
    "Software Developer",
    "MERN Stack Engineer",
    "Competitive Programming",
    "LeetCode Specialist",
  ],
  authors: [{ name: "Shivraj Yadav", url: siteUrl }],
  creator: "Shivraj Yadav",
  publisher: "Shivraj Yadav",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shivraj Yadav | Computer Engineering Student & Full Stack Developer",
    description:
      "Official portfolio of Shivraj Yadav - Full Stack Developer and Computer Engineering Student specializing in React.js, Next.js, Node.js, Python, and AI/ML development.",
    url: siteUrl,
    siteName: "Shivraj Yadav Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/shivraj.jpeg",
        width: 800,
        height: 800,
        alt: "Shivraj Yadav - Computer Engineering Student & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivraj Yadav | Computer Engineering Student & Full Stack Developer",
    description:
      "Official portfolio of Shivraj Yadav - Full Stack Developer and Computer Engineering Student specializing in React.js, Next.js, Node.js, Python, and AI/ML.",
    creator: "@shivraj_yadav1",
    images: ["/shivraj.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "VNcMKsfyccaRGP9UhjY5jwQipPWtHElymiOx4WPCnW8",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
      {
        url: "/icon.jpg",
        type: "image/jpeg",
      },
    ],
    apple: "/apple-icon.png",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivraj Yadav",
  alternateName: "Shivraj",
  url: siteUrl,
  image: `${siteUrl}/shivraj.jpeg`,
  jobTitle: "Computer Engineering Student & Full Stack Developer",
  description:
    "Shivraj Yadav is a Computer Engineering student and Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, Python, AI/ML, and Software Development.",
  email: "mailto:shivrajyadav320@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/shivraj-yadav/",
    "https://github.com/shivraj-yadav",
    "https://leetcode.com/u/shivraj_yadav/",
    "https://codeforces.com/profile/shivraj-yadav",
    "https://x.com/shivraj_yadav1",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Government College of Engineering, Jalgaon",
    },
    {
      "@type": "EducationalOrganization",
      name: "SVERI’s College of Engineering, Pandharpur",
    },
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Nexa Solutions LLC",
      jobTitle: "Software Engineer Intern",
    },
  ],
  knowsAbout: [
    "Computer Engineering",
    "Full Stack Development",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineering",
    "Competitive Programming",
    "Data Structures & Algorithms",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}