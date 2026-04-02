"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, GraduationCap, Building2, LayoutPanelLeft, Phone, Info } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home", icon: LayoutPanelLeft },
    { href: "/what-we-do", label: "Small Business Projects", icon: Building2 },
    { href: "/homeware", label: "Homeware & Electronics", icon: GraduationCap },
    { href: "/products", label: "Business Booster Packages", icon: Building2 },
    { href: "/contact", label: "Contact Details", icon: Phone },
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

            <Button asChild className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
              <a href="https://wa.me/263773988988?text=Hi" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>

          {/* Mobile Navigation with Sheet */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-card/95 backdrop-blur-xl border-l border-border/50 p-0">
                <SheetHeader className="p-6 border-b border-border/50 bg-secondary/10">
                  <SheetTitle className="text-left flex items-center gap-2">
                    <Image src="/microbiz-logo.png" alt="Logo" width={100} height={30} className="object-contain brightness-110" />
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto p-4">
                  <div className="space-y-1 mb-6">
                    <p className="px-3 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">Main Menu</p>
                    {navLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                            isActive(link.href) 
                              ? "bg-primary text-white shadow-lg shadow-primary/30 scale-[1.02]" 
                              : "text-muted-foreground hover:bg-secondary/20 hover:text-foreground"
                          )}
                        >
                          <Icon className={cn("w-5 h-5", isActive(link.href) ? "text-white" : "text-primary")} />
                          {link.label}
                        </Link>
                      )
                    })}
                  </div>

                  <div className="space-y-1 mb-6">
                    <p className="px-3 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">About MicroBiz</p>
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                          isActive(link.href) 
                            ? "text-primary bg-primary/5 font-bold" 
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/10"
                        )}
                      >
                        <div className={cn("w-1.5 h-1.5 rounded-full", isActive(link.href) ? "bg-primary" : "bg-border")} />
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto p-2">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 text-base font-bold shadow-xl shadow-primary/20">
                      <a href="https://wa.me/263773988988?text=Hi" target="_blank" rel="noopener noreferrer">
                        Apply for a Project
                      </a>
                    </Button>
                    <p className="text-center text-[10px] text-muted-foreground mt-4 italic">
                      Empowering Zimbabwe entrepreneurs
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
