"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import GlassmorphismCard from "@/components/glassmorphism-card"
import InteractiveButton from "@/components/interactive-button"
import ScrollReveal from "@/components/scroll-reveal"
import { useRouter } from "next/navigation"
import { FaGithub, FaPlusCircle, FaFileAlt, FaRegCopy } from "react-icons/fa"

export default function ContributePage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const steps = [
    {
      icon: FaGithub,
      title: "Fork & Clone Repository",
      description:
        "Start by forking our GitHub repository and cloning it locally to your machine.",
    },
    {
      icon: FaPlusCircle,
      title: "Add Your Content",
      description:
        "Create new topics, add code snippets, or suggest resources following our guidelines.",
    },
    {
      icon: FaFileAlt,
      title: "Submit a Pull Request",
      description:
        "Once your changes are ready, submit a PR. Our team will review and merge it.",
    },
  ]

  const gitCommands = `# Clone the repository
git clone https://github.com/devsujandas/geekdost.git

# Create a new branch
git checkout -b feature/my-new-topic

# Make your changes (add topics, snippets)
git add .
git commit -m "Add new topic or snippet"

# Push to your fork
git push origin feature/my-new-topic

# Open a Pull Request on GitHub`

  const handleCopy = () => {
    navigator.clipboard.writeText(gitCommands)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isClient) return null

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-28 px-4 text-center relative overflow-hidden">
        <ScrollReveal>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-foreground mb-6"
          >
            Contribute to <span className="text-primary">GeekDost</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Help grow our developer community! Share your knowledge, code snippets,
            tutorials, or suggest new topics. Every contribution helps someone learn faster.
          </motion.p>
          <InteractiveButton size="lg" onClick={() => router.push("/topics")}>
            Explore Existing Topics
          </InteractiveButton>
        </ScrollReveal>
      </section>

      {/* Contribution Steps */}
      <section className="py-24 px-4 bg-background/40 border-t border-border">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            How to Contribute
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <GlassmorphismCard className="p-8 text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                  <step.icon className="text-primary h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </GlassmorphismCard>
              </motion.div>
            ))}
          </div>

          {/* Git Workflow IDE Card */}
          <div className="max-w-3xl mx-auto">
            <GlassmorphismCard className="relative p-6 bg-background/50 border border-border shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Git Workflow Example
              </h3>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 flex items-center gap-2 bg-background/70 hover:bg-background/80 text-foreground text-sm px-3 py-1 rounded-lg transition"
              >
                <FaRegCopy /> {copied ? "Copied!" : "Copy"}
              </button>

              {/* Code Block with Line Numbers */}
              <pre className="bg-background/20 p-4 rounded-lg overflow-x-auto text-sm font-mono text-foreground mt-4">
                {gitCommands.split("\n").map((line, idx) => (
                  <div key={idx} className="flex">
                    <span className="text-muted-foreground w-6 text-right mr-4 select-none">
                      {idx + 1}
                    </span>
                    <code>{line}</code>
                  </div>
                ))}
              </pre>
            </GlassmorphismCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 text-center relative">
        <ScrollReveal>
          <GlassmorphismCard className="py-12 px-6 max-w-3xl mx-auto shadow-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Ready to Make an Impact?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Join our open-source community. Every snippet, note, and guide you contribute
              empowers thousands of developers around the world.
            </motion.p>
            <div className="flex justify-center gap-4 flex-wrap">
              <InteractiveButton
                size="lg"
                variant="primary"
                onClick={() =>
                  window.open("https://github.com/devsujandas/geekdost", "_blank")
                }
              >
                Contribute on GitHub
              </InteractiveButton>
              <InteractiveButton
                size="lg"
                variant="outline"
                onClick={() => router.push("/topics")}
              >
                Explore Topics
              </InteractiveButton>
            </div>
          </GlassmorphismCard>
        </ScrollReveal>
      </section>
    </PageLayout>
  )
}
