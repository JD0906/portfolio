"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show loading state while mounting
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="rounded-full glass-card bg-transparent" disabled>
        <div className="h-5 w-5 animate-pulse bg-primary/20 rounded-full" />
      </Button>
    )
  }

  const toggleTheme = () => {
    // Aplicar el cambio de tema sin transiciones
    document.documentElement.classList.add("disable-transitions")
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    // Permitir transiciones nuevamente después de un breve retraso
    setTimeout(() => {
      document.documentElement.classList.remove("disable-transitions")
    }, 100)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      className="rounded-full glass-card hover:bg-primary/10 transition-all duration-200 border-primary/30 bg-transparent"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-primary transition-transform duration-200 hover:rotate-12" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-transform duration-200 hover:-rotate-12" />
      )}
    </Button>
  )
}
