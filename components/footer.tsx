"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa"
import { GlassmorphismCard } from "./glassmorphism-card"

const socialLinks = [
  { href: "https://github.com", icon: FaGithub, label: "GitHub" },
  { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
]

const footerLinks = [
  {
    title: "Resources",
    links: [
      { href: "/topics", label: "All Topics" },
      { href: "/search", label: "Search" },
      { href: "/topics", label: "Roadmaps" },
      { href: "/test", label: "Test" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/contribute", label: "Contribute" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/license", label: "License" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="py-16 px-4 mt-20">
      <div className="container mx-auto max-w-6xl">
        <GlassmorphismCard hover={false} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img 
                src="/geekdost.png" 
                alt="GeekDost Logo" 
                className="h-6 mb-4"
                />
                
                <p className="text-muted-foreground text-sm mb-6 text-pretty">
                  Your ultimate developer hub for programming roadmaps, code snippets, and learning resources.
                  Empowering developers to level up their skills.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-accent/10 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                      >
                        <IconComponent className="h-5 w-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between"
          >
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">© 2024 GeekDost. All rights reserved.</p>
            <div className="flex items-center text-muted-foreground text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                className="mx-1"
              >
                <FaHeart className="h-4 w-4 text-purple- !text-purple-500" />

</motion.div>
<span>
  by{" "}
  <span className="text-primary transition-colors duration-200 hover:text-primary/80">
    Developers
  </span>
  , for developers
</span>
</div>
</motion.div>


        </GlassmorphismCard>
      </div>
    </footer>
  )
}
