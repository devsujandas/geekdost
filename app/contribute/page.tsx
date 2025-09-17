"use client"

import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { InteractiveButton } from "@/components/interactive-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useRouter } from "next/navigation"
import { FaGithub, FaPlusCircle, FaFileAlt } from "react-icons/fa"

export default function ContributePage() {
  const router = useRouter()

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

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-28 px-4 text-center relative overflow-hidden">
        <ScrollReveal>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-foreground mb-6"
          >
            Contribute to{" "}
            <span className="relative text-primary underline decoration-primary/60 decoration-4 underline-offset-8">
              GeekDost
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Help grow our developer community! Share your knowledge, code snippets, tutorials, or suggest new topics. Every contribution helps someone learn faster.
          </motion.p>
          <InteractiveButton
            size="lg"
            className="hover:scale-105 transition-transform"
            onClick={() => router.push("/topics")}
          >
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <GlassmorphismCard className="p-8 text-center hover:-translate-y-3 hover:shadow-xl transition-transform duration-300 relative">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-background font-bold flex items-center justify-center text-lg shadow-md">
                    {idx + 1}
                  </div>
                  <step.icon className="text-primary h-12 w-12 mx-auto mb-4 mt-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </GlassmorphismCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gamification / Contribution Hint Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <GlassmorphismCard className="py-12 px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Earn Recognition & Badges
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Every contribution you make can earn badges and recognition on our platform. Motivate yourself and others to create a thriving developer community!
            </motion.p>
            <InteractiveButton
              size="lg"
              variant="primary"
              onClick={() =>
                window.open("https://github.com/YourRepoLink", "_blank")
              }
              className="hover:scale-105 transition-transform"
            >
              Contribute on GitHub
            </InteractiveButton>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center relative">
        <ScrollReveal>
          <GlassmorphismCard className="py-12 px-6 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Ready to Make an Impact?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Join our open-source community. Every snippet, note, and guide you contribute empowers thousands of developers around the world.
            </motion.p>
            <div className="flex justify-center gap-4 flex-wrap">
              <InteractiveButton
                size="lg"
                variant="primary"
                onClick={() =>
                  window.open("https://github.com/YourRepoLink", "_blank")
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
