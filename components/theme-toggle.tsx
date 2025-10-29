"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="fixed top-20 right-4 md:top-20 md:right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg transition-all duration-300">
        <Sun className="h-5 w-5 text-white" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-20 right-4 md:top-20 md:right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-blue hover:glow-orange shadow-lg transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-white transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-white transition-all" />
      )}
    </button>
  )
}
