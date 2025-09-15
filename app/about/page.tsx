"use client"

import { motion } from "framer-motion"
import { FaCode, FaUsers, FaRocket, FaHeart, FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa"
import { PageLayout } from "@/components/page-layout"
import { GlassmorphismCard } from "@/components/glassmorphism-card"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Full Stack Developer",
    bio: "Passionate about creating developer tools and educational content.",
    avatar: "/developer-avatar-1.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    bio: "Focused on creating intuitive and beautiful user experiences.",
    avatar: "/developer-avatar-2.jpg",
  },
  {
    name: "Mike Rodriguez",
    role: "DevOps Engineer",
    bio: "Ensures our platform runs smoothly and scales efficiently.",
    avatar: "/developer-avatar-3.jpg",
  },
]

const stats = [
  { icon: FaCode, value: "12+", label: "Programming Topics" },
  { icon: FaUsers, value: "10K+", label: "Developers Helped" },
  { icon: FaRocket, value: "50+", label: "Code Examples" },
  { icon: FaHeart, value: "100%", label: "Open Source" },
]

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About GeekDost</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            We're on a mission to make programming education accessible, practical, and enjoyable for developers
            worldwide. GeekDost provides curated roadmaps, code snippets, and learning resources to help you master the
            skills that matter.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <GlassmorphismCard>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed">
                In a rapidly evolving tech landscape, developers need reliable, up-to-date resources to stay competitive
                and continue growing. GeekDost bridges the gap between theoretical knowledge and practical application
                by providing structured learning paths, real-world code examples, and actionable insights that
                developers can immediately apply to their projects.
              </p>
            </div>
          </GlassmorphismCard>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <GlassmorphismCard key={index} delay={0.5 + index * 0.1} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </GlassmorphismCard>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassmorphismCard delay={0.7}>
              <div className="text-center">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <FaCode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
                <p className="text-muted-foreground text-pretty">
                  Every roadmap, code snippet, and resource is carefully curated and tested to ensure accuracy and
                  relevance.
                </p>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard delay={0.8}>
              <div className="text-center">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <FaUsers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community Driven</h3>
                <p className="text-muted-foreground text-pretty">
                  Built by developers, for developers. We listen to our community and continuously improve based on
                  feedback.
                </p>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard delay={0.9}>
              <div className="text-center">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <FaRocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Practical Focus</h3>
                <p className="text-muted-foreground text-pretty">
                  We prioritize practical, actionable content that you can immediately apply to real-world projects and
                  challenges.
                </p>
              </div>
            </GlassmorphismCard>
          </div>
        </motion.section>

        {/* Team Section */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="mb-20"
>
  <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
    Meet the Creator
  </h2>

  <div className="flex justify-center">
    <GlassmorphismCard delay={1.0} className="w-full max-w-3xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8">
        
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src="/developer-avatar-1.png" // replace with your image
            alt="Sujan Das"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary/30 shadow-lg object-cover"
          />
        </div>

        {/* Info Section */}
<div className="text-center md:text-left">
  <h3 className="text-3xl font-bold text-foreground mb-2">Sujan Das</h3>

 
  <p className="text-primary text-lg font-medium mb-4">
    Data Science Engineer & Digital Experience Architect
  </p>

 <p className="text-muted-foreground leading-relaxed max-w-xl">
  Passionate about designing and developing intuitive, beautiful, and functional
  digital experiences, I’m a Data Science Engineer with Python at my core —
  enthusiastic about AI/ML and creating smart, seamless user experiences.
</p>


</div>

      </div>
    </GlassmorphismCard>
  </div>
</motion.section>


        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <GlassmorphismCard className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Have questions, suggestions, or want to contribute? We'd love to hear from you! Connect with us on social
              media or reach out directly.
            </p>
            <div className="flex justify-center space-x-6">
  <motion.a
    href="https://github.com/devsujandas"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-lg bg-accent/10 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
  >
    <FaGithub className="h-6 w-6" />
  </motion.a>

  <motion.a
    href="https://instagram.com/devsujandas"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-lg bg-accent/10 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
  >
    <FaInstagram className="h-6 w-6" />
  </motion.a>

  <motion.a
    href="https://in.linkedin.com/in/devsujandas"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-lg bg-accent/10 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
  >
    <FaLinkedin className="h-6 w-6" />
  </motion.a>

  <motion.a
    href="https://www.sujandas.info/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-lg bg-accent/10 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
  >
    <FaGlobe className="h-6 w-6" />
  </motion.a>
</div>

          </GlassmorphismCard>
        </motion.section>
      </div>
    </PageLayout>
  )
}
