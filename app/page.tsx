"use client"

import { motion } from "framer-motion"
import { FaCode, FaRocket, FaUsers } from "react-icons/fa"
import { topicsData } from "@/lib/topics-data"
import { TopicCard } from "@/components/topic-card"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { PageLayout } from "@/components/page-layout"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { FloatingElements } from "@/components/floating-elements"
import { InteractiveButton } from "@/components/interactive-button"
import { StaggeredList } from "@/components/staggered-list"

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <FloatingElements />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance"
            >
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] bg-clip-text text-transparent [&:not(:hover)]:text-foreground hover:text-transparent"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--primary)), #3b82f6, hsl(var(--primary)))",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                GeekDost
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto"
            >
              Roadmaps & Snippets for Developers
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto"
            >
              Your ultimate developer hub for programming roadmaps, code snippets, and learning resources. Master the
              skills that matter with curated content and practical examples.
            </motion.p>

            {/* Stats Cards with Animated Counters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
            >
              <GlassmorphismCard delay={0.9} className="text-center">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <FaCode className="h-8 w-8 text-primary mx-auto mb-3" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={12} suffix="+" />
                </h3>
                <p className="text-muted-foreground">Programming Topics</p>
              </GlassmorphismCard>

              <GlassmorphismCard delay={1.0} className="text-center">
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <FaRocket className="h-8 w-8 text-primary mx-auto mb-3" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={50} suffix="+" />
                </h3>
                <p className="text-muted-foreground">Code Snippets</p>
              </GlassmorphismCard>

              <GlassmorphismCard delay={1.1} className="text-center">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <FaUsers className="h-8 w-8 text-primary mx-auto mb-3" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={100} suffix="+" />
                </h3>
                <p className="text-muted-foreground">Learning Resources</p>
              </GlassmorphismCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid Section */}
      <ScrollReveal>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Explore Programming Topics
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Choose from our curated collection of programming topics, each with detailed roadmaps, practical notes,
                and ready-to-use code snippets.
              </p>
            </div>

            {/* Topics Grid with Staggered Animation */}
            <StaggeredList stagger={0.05}>
              {topicsData.map((topic) => (
                <div key={topic.id} className="mb-6">
                  <TopicCard topic={topic} />
                </div>
              ))}
            </StaggeredList>
          </div>
        </section>
      </ScrollReveal>

      {/* Call to Action Section */}
      <ScrollReveal>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <GlassmorphismCard className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Ready to Level Up Your Skills?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  Join thousands of developers who are accelerating their learning journey with GeekDost. Start
                  exploring our comprehensive roadmaps and practical code examples today.
                </p>
                <InteractiveButton size="lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Start Learning Now
                </InteractiveButton>
              </motion.div>
            </GlassmorphismCard>
          </div>
        </section>
      </ScrollReveal>
    </PageLayout>
  )
}
