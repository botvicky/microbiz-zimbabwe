import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { AIChatButton } from "@/components/ai-chat-button"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MicroBiz Zimbabwe - Empowering Small Businesses",
  description:
    "MicroBiz Zimbabwe helps small business owners start and expand their businesses through microfinancing solutions from BancoZim Holdings.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <CookieBanner />
        <AIChatButton />
        <Analytics />
      </body>
    </html>
  )
}
