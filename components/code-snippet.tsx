"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaCopy, FaCheck, FaExpand, FaCompress } from "react-icons/fa"
import { GlassmorphismCard } from "./glassmorphism-card"
import { Button } from "@/components/ui/button"

interface CodeSnippetProps {
  title: string
  description: string
  language: string
  code: string
  delay?: number
}

const highlightCode = (code: string, language: string) => {
  // Simple regex-based highlighting for common languages
  let highlighted = code

  // Keywords for different languages
  const keywords = {
    javascript: [
      "const",
      "let",
      "var",
      "function",
      "return",
      "if",
      "else",
      "for",
      "while",
      "class",
      "import",
      "export",
      "from",
      "async",
      "await",
    ],
    python: [
      "def",
      "class",
      "import",
      "from",
      "return",
      "if",
      "else",
      "elif",
      "for",
      "while",
      "try",
      "except",
      "with",
      "as",
      "lambda",
    ],
    java: [
      "public",
      "private",
      "protected",
      "class",
      "interface",
      "extends",
      "implements",
      "return",
      "if",
      "else",
      "for",
      "while",
      "try",
      "catch",
    ],
    css: [
      "color",
      "background",
      "margin",
      "padding",
      "border",
      "width",
      "height",
      "display",
      "position",
      "flex",
      "grid",
    ],
    html: ["div", "span", "p", "h1", "h2", "h3", "body", "head", "title", "script", "style", "link"],
  }

  const langKeywords = keywords[language as keyof typeof keywords] || []

  // Highlight strings
  highlighted = highlighted.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="text-green-400">$1$2$1</span>')

  // Highlight comments
  highlighted = highlighted.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/|#.*$)/gm, '<span class="text-gray-500">$1</span>')

  // Highlight keywords
  langKeywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, "g")
    highlighted = highlighted.replace(regex, `<span class="text-blue-400">${keyword}</span>`)
  })

  // Highlight numbers
  highlighted = highlighted.replace(/\b\d+\.?\d*\b/g, '<span class="text-orange-400">$&</span>')

  return highlighted
}

export function CodeSnippet({ title, description, language, code, delay = 0 }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      // Show toast notification
      if ((window as any).showToast) {
        ;(window as any).showToast({
          type: "success",
          message: "Code copied to clipboard!",
          duration: 3000,
        })
      }
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy code:", error)
      // Show error toast
      if ((window as any).showToast) {
        ;(window as any).showToast({
          type: "error",
          message: "Failed to copy code. Please try again.",
          duration: 3000,
        })
      }
    }
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const shouldShowExpandButton = code.split("\n").length > 10
  const codeLines = code.split("\n")
  const shouldShowLineNumbers = codeLines.length > 5

  return (
    <GlassmorphismCard delay={delay} hover={false} className="overflow-hidden">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          {shouldShowExpandButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleExpanded}
              className="hover:bg-accent/20"
              aria-label={isExpanded ? "Collapse code" : "Expand code"}
            >
              <motion.div
                key={isExpanded ? "compress" : "expand"}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {isExpanded ? <FaCompress className="h-4 w-4" /> : <FaExpand className="h-4 w-4" />}
              </motion.div>
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="hover:bg-accent/20"
            aria-label="Copy code to clipboard"
          >
            <motion.div
              key={copied ? "check" : "copy"}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {copied ? <FaCheck className="h-4 w-4 text-green-400" /> : <FaCopy className="h-4 w-4" />}
            </motion.div>
          </Button>
        </div>
      </div>

      <div className="relative">
        <motion.div
          initial={false}
          animate={{ height: isExpanded || !shouldShowExpandButton ? "auto" : "300px" }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="relative rounded-lg bg-slate-900/80 p-4 text-sm font-mono overflow-x-auto">
            <div className="flex">
              {shouldShowLineNumbers && (
                <div className="flex flex-col text-gray-500 text-right pr-4 select-none">
                  {codeLines.map((_, index) => (
                    <span key={index} className="leading-6">
                      {index + 1}
                    </span>
                  ))}
                </div>
              )}
              <pre className="flex-1 text-gray-100 leading-6 whitespace-pre-wrap">
                <code
                  dangerouslySetInnerHTML={{
                    __html: highlightCode(code, language),
                  }}
                />
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Fade overlay for collapsed state */}
        {!isExpanded && shouldShowExpandButton && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none" />
        )}
      </div>
    </GlassmorphismCard>
  )
}
