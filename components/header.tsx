"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Electrical-wire palette: earth green, live red, neutral blue, warm bulb amber.
const THEME_COLORS = ["#00b050", "#e63946", "#0ea5e9", "#f5a623"]
const THEME_STORAGE_KEY = "sp-electrical-theme-color"

function applyThemeColor(color: string) {
  const root = document.documentElement
  root.style.setProperty("--primary", color)
  root.style.setProperty("--accent", color)
  root.style.setProperty("--ring", color)
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFlashing, setIsFlashing] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY)
      if (saved && THEME_COLORS.includes(saved)) {
        applyThemeColor(saved)
      }
    } catch {
      // Browser storage unavailable — the default theme color still applies.
    }
  }, [])

  const handleLogoClick = () => {
    const current = document.documentElement.style.getPropertyValue("--primary").trim() || THEME_COLORS[0]
    const next = THEME_COLORS[(THEME_COLORS.indexOf(current) + 1) % THEME_COLORS.length]
    applyThemeColor(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Per-viewer convenience only — fine if it can't be remembered.
    }
    setIsFlashing(true)
    window.setTimeout(() => setIsFlashing(false), 500)
  }

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800 energized-trim">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo — click it to cycle the site's accent color through an electrical-wire palette */}
        <a
          href="#home"
          onClick={handleLogoClick}
          className="flex items-center gap-3 flex-shrink-0"
          aria-label="SP Electrical Services home — click the logo to change the site's accent color"
        >
          <Image
            src="/globe-favicon-512.png"
            alt="SP Electrical Services logo"
            width={64}
            height={64}
            priority
            className={`h-14 w-14 rounded bg-black object-contain ${isFlashing ? "bulb-flash" : ""}`}
          />
          <div>
            <div className="text-2xl font-bold text-white leading-none">
              SP <span className="text-primary">Electrical</span> Services
            </div>
            <p className="text-xs text-gray-400">Professional Electricians</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-primary font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-green-700 text-black font-bold glow-pulse">Get Quote</Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-primary font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-green-700 text-black font-bold mt-4 glow-pulse">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
