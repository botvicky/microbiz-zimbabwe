"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "Small Business Projects" },
    { href: "/homeware", label: "Homeware & Electronics" },
    { href: "/products", label: "Business Booster Packages" },
    { href: "/contact", label: "Contact Details" },
  ]

  const aboutLinks = [
    { href: "/whats-new", label: "Whats New" },
    { href: "/about", label: "Mission & Values" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQs" },
  ]

  const isActive = (path: string) => pathname === path

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
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[13px] font-medium transition-colors relative py-1 whitespace-nowrap",
                  isActive(link.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-in fade-in duration-300" />
                )}
              </Link>
            ))}

            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "flex items-center gap-1 text-[13px] font-medium transition-colors outline-none whitespace-nowrap",
                aboutLinks.some(link => isActive(link.href)) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}>
                About Us <ChevronDown className="w-4 h-4" />
                {aboutLinks.some(link => isActive(link.href)) && (
                   <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-card/95 backdrop-blur-md border-border/50">
                {aboutLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "w-full cursor-pointer transition-colors",
                        isActive(link.href) ? "text-primary font-semibold" : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <a href="https://wa.me/263773988988?text=Hi" target="_blank" rel="noopener noreferrer">
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
          <div className="md:hidden py-4 space-y-4 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block text-sm font-medium transition-colors p-2 rounded-md",
                  isActive(link.href) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/10"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-border/50">
              <p className="px-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">About Us</p>
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block text-sm font-medium transition-colors p-2 rounded-md ml-2",
                    isActive(link.href) ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
              <a href="https://wa.me/263773988988?text=Hi" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
