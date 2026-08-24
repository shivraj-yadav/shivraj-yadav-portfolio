import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://shivraj-yadav.vercel.app"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shivraj Yadav | Full Stack Developer & Computer Engineering Student",
    template: "%s | Shivraj Yadav",
  },
  description:
    "Official portfolio of Shivraj Yadav – Full Stack MERN Developer & Computer Engineering Student specializing in React.js, Next.js, Node.js, Express, MongoDB, Python, AI integration, and Competitive Programming.",
  keywords: [
    "Shivraj Yadav",
    "Shivraj Yadav Portfolio",
    "Shivraj Yadav Developer",
    "Shivraj Yadav Computer Engineering",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "Python Developer",
    "AI/ML Engineer",
    "Software Engineer Intern",
    "Competitive Programming",
    "LeetCode Specialist",
    "Codeforces Specialist",
    "Shivraj Yadav Resume",
    "India Software Engineer",
  ],
  authors: [{ name: "Shivraj Yadav", url: siteUrl }],
  creator: "Shivraj Yadav",
  publisher: "Shivraj Yadav",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Shivraj Yadav | Full Stack Developer & Computer Engineering Student",
    description:
      "Explore Shivraj Yadav's portfolio — Full Stack Developer specializing in React.js, Next.js, Node.js, Python, AI solutions, and real-time collaborative web applications.",
    url: siteUrl,
    siteName: "Shivraj Yadav Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/shivraj.jpeg`,
        width: 1200,
        height: 630,
        alt: "Shivraj Yadav - Full Stack Developer & Computer Engineering Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivraj Yadav | Full Stack Developer & Computer Engineering Student",
    description:
      "Explore Shivraj Yadav's portfolio — Full Stack Developer specializing in React.js, Next.js, Node.js, Python, AI solutions, and real-time systems.",
    creator: "@shivraj_yadav1",
    site: "@shivraj_yadav1",
    images: [`${siteUrl}/shivraj.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Shivraj Yadav",
      givenName: "Shivraj",
      familyName: "Yadav",
      alternateName: ["Shivraj", "Shivraj Yadav Portfolio", "Shivraj Yadav Developer"],
      url: siteUrl,
      image: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#personImage`,
        url: `${siteUrl}/shivraj.jpeg`,
        caption: "Shivraj Yadav - Full Stack Developer & Computer Engineering Student",
      },
      jobTitle: "Full Stack Developer & Computer Engineering Student",
      description:
        "Shivraj Yadav is a Computer Engineering Student and Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, Python, AI/ML integrations, and Data Structures & Algorithms.",
      email: "mailto:shivrajyadav320@gmail.com",
      sameAs: [
        "https://github.com/shivraj-yadav",
        "https://www.linkedin.com/in/shivraj-yadav/",
        "https://leetcode.com/u/shivraj_yadav/",
        "https://codeforces.com/profile/shivraj-yadav",
        "https://x.com/shivraj_yadav1",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Government College of Engineering, Jalgaon",
          url: "https://www.gcoej.ac.in/",
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
        "Full Stack Development",
        "MERN Stack",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "TypeScript",
        "Python",
        "Artificial Intelligence",
        "Machine Learning",
        "Socket.io",
        "REST APIs",
        "Software Engineering",
        "Competitive Programming",
        "Data Structures & Algorithms",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Shivraj Yadav Portfolio",
      description:
        "Official Portfolio of Shivraj Yadav - Full Stack Developer & Computer Engineering Student",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Shivraj Yadav | Full Stack Developer & Computer Engineering Student",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
      description:
        "Official portfolio of Shivraj Yadav showcasing full-stack projects, software engineering intern experience, AI comparison tools, real-time collaboration platforms, and technical skills.",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projectsList`,
      name: "Featured Projects by Shivraj Yadav",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "LiveLogic",
            description:
              "Real-time collaborative coding and interview platform featuring multi-user code editing with Socket.io and Judge0 API.",
            url: "https://github.com/shivraj-yadav/LiveLogic",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: "AI Model Comparison Dashboard",
            description:
              "Interactive LLM comparison dashboard providing side-by-side responses, token count analysis, latency tracking, and cost estimations.",
            url: "https://github.com/shivraj-yadav/ai-model-comparison-tool",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareApplication",
            name: "Audio Transcription Evaluator",
            description:
              "ASR transcription evaluation application utilizing Whisper AI, FFmpeg, and Word Error Rate (WER) scoring.",
            url: "https://github.com/shivraj-yadav/asr-evaluator",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web",
          },
        },
      ],
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}