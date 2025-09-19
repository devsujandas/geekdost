"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaBookOpen, FaCode, FaUsers, FaAward } from "react-icons/fa"
import { topicsData } from "@/lib/topics-utils" 
import { TopicCard } from "@/components/topic-card"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { PageLayout } from "@/components/page-layout"   
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { FloatingElements } from "@/components/floating-elements"
import { InteractiveButton } from "@/components/interactive-button"
import { StaggeredList } from "@/components/staggered-list"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [view, setView] = useState<"default" | "image">("default")
  const router = useRouter()

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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground font-bold mb-4"
            >
              Roadmaps & Snippets for Developers
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              Your ultimate developer hub for programming roadmaps, code
              snippets, and learning resources. Master the skills that matter
              with curated content and practical examples.
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
            >
              <GlassmorphismCard delay={0.7} className="text-center">
                <FaBookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={12} suffix="+" />
                </h3>
                <p className="text-muted-foreground text-sm">
                  Programming Topics
                </p>
              </GlassmorphismCard>

              <GlassmorphismCard delay={0.8} className="text-center">
                <FaCode className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={50} suffix="+" />
                </h3>
                <p className="text-muted-foreground text-sm">Code Snippets</p>
              </GlassmorphismCard>

              <GlassmorphismCard delay={0.9} className="text-center">
                <FaUsers className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={100} suffix="+" />
                </h3>
                <p className="text-muted-foreground text-sm">
                  Learning Resources
                </p>
              </GlassmorphismCard>

              <GlassmorphismCard delay={1.0} className="text-center">
                <FaAward className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={20} suffix="+" />
                </h3>
                <p className="text-muted-foreground text-sm">
                  Subjects with Tests & Certificates
                </p>
              </GlassmorphismCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid Section */}
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Programming Topics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Choose from our curated collection of programming topics, each with
            detailed roadmaps, practical notes, and ready-to-use code snippets.
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4">
            <InteractiveButton
              size="sm"
              variant={view === "default" ? "primary" : "outline"}
              onClick={() => setView("default")}
            >
              Default View
            </InteractiveButton>
            <InteractiveButton
              size="sm"
              variant={view === "image" ? "primary" : "outline"}
              onClick={() => setView("image")}
            >
              Image View
            </InteractiveButton>
          </div>
        </div>

        {/* Topics Grid */}
        {view === "default" ? (
          <StaggeredList stagger={0.05}>
            {topicsData.map((topic) => (
              <div
                key={topic.id}
                className="mb-6 cursor-pointer"
                onClick={() => router.push(`/topics/${topic.id}`)} // ✅ use id
              >
                <TopicCard topic={topic} />
              </div>
            ))}
          </StaggeredList>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topicsData.map((topic) => (
              <motion.div
                key={topic.id}
                className="group rounded-2xl overflow-hidden shadow-md bg-background/40 backdrop-blur-lg border border-border hover:shadow-lg transition cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => router.push(`/topics/${topic.id}`)} // ✅ use id
              >
                <div className="h-full flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={(topic as any).image ?? "/images/default-topic.jpg"}
                      alt={topic.id}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-grow">
                      {topic.desc} {/* ✅ fixed: was topic.slug */}
                    </p>
                    <button className="mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                      Explore
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Level Up Your Skills?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of developers who are accelerating their
                  learning journey with our roadmaps, snippets and tests. Start
                  exploring today.
                </p>
                <InteractiveButton
                  size="lg"
                  onClick={() => router.push("/topics")}
                >
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
