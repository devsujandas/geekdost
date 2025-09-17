"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { InteractiveButton } from "@/components/interactive-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useRouter } from "next/navigation"
import { FaHandsHelping, FaRocket, FaLightbulb } from "react-icons/fa"

export default function ContributePage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const features = [
    {
      icon: FaHandsHelping,
      title: "Join the Community",
      description:
        "Collaborate with developers worldwide, share your expertise, and grow together.",
      color: "bg-primary/20 text-primary",
    },
    {
      icon: FaRocket,
      title: "Launch Your Contribution",
      description:
        "Add topics, snippets, or tutorials. Every contribution helps someone learn faster.",
      color: "bg-green-200 text-green-700",
    },
    {
      icon: FaLightbulb,
      title: "Inspire & Learn",
      description:
        "Discover new ideas, solve challenges, and get feedback from peers in real time.",
      color: "bg-yellow-200 text-yellow-700",
    },
  ]

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
            Make Your Mark on <span className="text-primary">GeekDost</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Contribute, collaborate, and create impact. Every snippet, tutorial, or topic
            you add empowers thousands of developers around the world.
          </motion.p>
          <InteractiveButton size="lg" onClick={() => router.push("/topics")}>
            Explore Topics
          </InteractiveButton>
        </ScrollReveal>
      </section>

      {/* Features / Contribution Playground */}
      <section className="py-24 px-4 bg-background/30 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Your Contribution Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <GlassmorphismCard className="p-10 hover:scale-105 transition-transform duration-300 relative">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 ${feature.color}`}
                  >
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <motion.div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-primary rounded-full"
                    whileHover={{ scaleX: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </GlassmorphismCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational / CTA Section */}
      <section className="py-24 px-4 text-center">
        <ScrollReveal>
          <GlassmorphismCard className="py-12 px-6 max-w-3xl mx-auto">
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
              Join our open-source community and start contributing today!
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
