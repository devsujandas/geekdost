import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "GeekDost - Roadmaps & Snippets for Developers",
  description: "Your ultimate developer hub for programming roadmaps, code snippets, and learning resources",
  generator: "GeekDost",
  keywords: ["programming", "developer", "roadmaps", "code snippets", "tutorials", "web development"],
  authors: [{ name: "GeekDost Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "GeekDost - Roadmaps & Snippets for Developers",
    description: "Your ultimate developer hub for programming roadmaps, code snippets, and learning resources",
    url: "https://geekdost.dev",
    siteName: "GeekDost",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GeekDost - Developer Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeekDost - Roadmaps & Snippets for Developers",
    description: "Your ultimate developer hub for programming roadmaps, code snippets, and learning resources",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-black`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
