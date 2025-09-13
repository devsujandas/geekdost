"use client"

import { motion } from "framer-motion"
import { FaCode, FaUsers, FaRocket, FaHeart, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
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
            src="/developer-avatar-1.jpg" // replace with your image
            alt="Sujan Das"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary/30 shadow-lg object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-foreground mb-2">Sujan Das</h3>
          <p className="text-primary text-lg font-medium mb-4">
            UI/UX Designer & Developer
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            I’m passionate about crafting intuitive, beautiful, and functional 
            digital experiences. From design to development, every part of this 
            platform has been built with love and attention to detail.
          </p>

          {/* Social Buttons (optional) */}
  <div className="flex justify-center md:justify-start gap-4 mt-6">
  {/* GitHub */}
  <a
    href="https://github.com/devsujandas"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
  >
    {/* GitHub Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.865 10.936c.576.106.785-.25.785-.555 0-.274-.01-1.002-.015-1.966-3.2.695-3.876-1.543-3.876-1.543-.524-1.333-1.28-1.688-1.28-1.688-1.046-.715.08-.7.08-.7 1.157.082 1.767 1.19 1.767 1.19 1.028 1.762 2.696 1.252 3.354.957.104-.744.402-1.252.73-1.54-2.553-.29-5.238-1.277-5.238-5.682 0-1.256.45-2.283 1.188-3.087-.12-.29-.515-1.457.112-3.037 0 0 .967-.31 3.17 1.18a11.043 11.043 0 0 1 2.886-.388c.98.005 1.968.132 2.886.388 2.202-1.49 3.167-1.18 3.167-1.18.63 1.58.235 2.747.116 3.037.74.804 1.186 1.831 1.186 3.087 0 4.415-2.688 5.388-5.253 5.672.414.36.785 1.096.785 2.212 0 1.598-.014 2.89-.014 3.283 0 .307.206.666.79.552A11.5 11.5 0 0 0 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z" clipRule="evenodd"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://in.linkedin.com/in/devsujandas "
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
  >
    {/* LinkedIn Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5A2.5 2.5 0 0 1 0 3.5C0 2.12 1.12 1 2.49 1A2.5 2.5 0 0 1 4.98 3.5ZM.24 8.98h4.5V24h-4.5V8.98ZM8.62 8.98h4.32v2.05h.06c.6-1.14 2.07-2.34 4.27-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.6c0-1.81-.03-4.14-2.53-4.14-2.53 0-2.92 1.97-2.92 4v7.74h-4.5V8.98Z"/>
    </svg>
  </a>

  {/* Portfolio (Globe Icon) */}
  <a
    href="https://www.sujandas.info/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
  >
    {/* Globe Icon */}
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
  <path d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 
           2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 
           2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm0 
           4h4V4h-4v2z"/>
</svg>
  </a>
    {/* Instagram */}
  <a
    href="https://instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 
           0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 
           0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 
           0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 
           3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 
           6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-.001 
           2.501A1.25 1.25 0 0116.5 8.25z"/>
</svg>

  </a>
</div>

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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-accent/10 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <FaGithub className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-accent/10 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <FaTwitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-accent/10 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <FaLinkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </GlassmorphismCard>
        </motion.section>
      </div>
    </PageLayout>
  )
}
