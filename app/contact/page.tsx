"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { InteractiveButton } from "@/components/interactive-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaShareAlt,
} from "react-icons/fa"

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])
  if (!isClient) return null

  // Replace with your real details
  const email = "hello@geekdost.dev"
  const phone = "+91-XXXXXXXXXX"
  const github = "https://github.com/devsujandas/geekdost"
  const linkedin = "https://www.linkedin.com/in/devsujandas"
  const twitter = "https://twitter.com/devsujandas"

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-28 px-4 text-center relative overflow-hidden">
        <ScrollReveal>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold text-foreground mb-6"
          >
            Let’s <span className="text-primary">Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Whether you have a question, suggestion, or want to collaborate —
            we’d love to hear from you.
          </motion.p>
        </ScrollReveal>
      </section>

      {/* Contact grid */}
    <section className="py-20 px-4 bg-background/40 border-t border-border">
  <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Email */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex"
    >
      <GlassmorphismCard className="p-10 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 rounded-2xl flex flex-col justify-between w-full h-full">
        <div>
          <FaEnvelope className="w-12 h-12 mx-auto mb-5 text-primary" />
          <h3 className="text-2xl font-bold mb-3">Email</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Best for detailed queries
          </p>
        </div>
        <a
          href={`mailto:${email}`}
          className="inline-block mt-auto bg-primary text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition"
        >
          Send Email
        </a>
      </GlassmorphismCard>
    </motion.div>

    {/* GitHub */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex"
    >
      <GlassmorphismCard className="p-10 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 rounded-2xl flex flex-col justify-between w-full h-full">
        <div>
          <FaGithub className="w-12 h-12 mx-auto mb-5 text-primary" />
          <h3 className="text-2xl font-bold mb-3">GitHub</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Report issues & contribute
          </p>
        </div>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-auto bg-primary text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition"
        >
          Visit GitHub
        </a>
      </GlassmorphismCard>
    </motion.div>

    {/* Social */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex"
    >
      <GlassmorphismCard className="p-10 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 rounded-2xl flex flex-col justify-between w-full h-full">
        <div>
          <FaShareAlt className="w-12 h-12 mx-auto mb-5 text-primary" />
          <h3 className="text-2xl font-bold mb-3">Social</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Connect with us online
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-auto">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition"
          >
            <FaLinkedin className="w-6 h-6 text-primary" />
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noreferrer"
            className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition"
          >
            <FaTwitter className="w-6 h-6 text-primary" />
          </a>
        </div>
      </GlassmorphismCard>
    </motion.div>
  </div>
</section>

 

      {/* Footer CTA */}
      <section className="py-24 px-4 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-3xl" />
        <div className="relative max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Let’s Build Something Great Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-10"
          >
            Drop a message, open a PR, or connect on social media. Collaboration
            starts with hello.
          </motion.p>
          <InteractiveButton
            size="lg"
            variant="primary"
            onClick={() => window.open(github, "_blank")}
          >
            Contribute on GitHub
          </InteractiveButton>
        </div>
      </section>
    </PageLayout>
  )
}
