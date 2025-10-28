"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/whats-new", label: "What's New" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/20 backdrop-blur-lg border-b border-secondary/30 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-32 sm:w-40 h-10 sm:h-12 flex items-center justify-center">
              <Image
                src="/microbiz-logo.png"
                alt="MicroBiz Zimbabwe"
                width={160}
                height={48}
                className="object-contain brightness-[1.3] contrast-[1.1] transition-all duration-300 group-hover:brightness-[1.5] group-hover:contrast-[1.2]"
                priority={true}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
              <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
