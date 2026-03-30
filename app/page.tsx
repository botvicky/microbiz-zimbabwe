"use client"

import Link from "next/link"
import Image from "next/image"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"

function AnimatedText() {
  const words = ["Ngwavha", "Spina", "Hustle"]
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block relative h-[1.2em] min-w-[200px] align-middle">
      {words.map((word, index) => (
        <span
          key={word}
          className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
            index === currentIndex
              ? "translate-y-0 opacity-100"
              : index < currentIndex
              ? "-translate-y-full opacity-0"
              : "translate-y-full opacity-0"
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Image-Oriented Split Design */}
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl glow-blue" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:pr-8">


              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Start your business today!{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary text-glow-blue">
                Be your own boss.
              </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Microbiz Zimbabwe is the fastest growing revolution that is transforming the lives of ordinary people to become supercharged business people on a micro level to individuals and giving expansion to existing business. The program is guaranteed to tackle unemployment and/or supplement incomes, for those who consider themselves insufficiently remunerated.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 shadow-lg">
                <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              </div>

              <div className="pt-8 border-t border-border/50">
                <p className="text-muted-foreground italic leading-relaxed">
                  "It is the place where dreams and aspirations are given a breath of life. For several years Microbiz has helped countless number of previously marginalized individuals to find their footing and start earning a decent income. We are eradicating poverty one micro business at a time, shifting people’s mindsets from being mere consumers (of goods and services) to producers in one form or the other."
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4 pt-8 border-t border-border/50">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">TikTok</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Image Grid */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main featured image */}
              <div className="absolute top-0 right-0 w-[70%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30 glow-orange group">
                <Image
                  src="/hustles/food-truck.png"
                  alt="Food Truck Business"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Mobile Food Services</p>
                  <p className="text-white/80 text-sm">Turn your passion into profit</p>
                </div>
              </div>

              {/* Secondary image - bottom left */}
              <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/30 glow-blue group">
                <Image
                  src="/hustles/hair-barbering.png"
                  alt="Hair Barbering"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">Hair & Beauty</p>
                  <p className="text-white/80 text-sm">Style meets success</p>
                </div>
              </div>

              {/* Small accent image - middle right */}
              <div className="absolute top-[45%] right-[5%] w-[35%] h-[30%] rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 group z-20">
                <Image
                  src="/hustles/tomato-farming.png"
                  alt="Farming"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white font-semibold text-sm">Agriculture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIM Section */}
      <section className="py-20 px-4 bg-card/30 backdrop-blur-sm border-y border-border/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-secondary text-glow-blue">AIM</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The goal of Microbiz is to create small business owners through a comprehensive support system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Business Equipment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Giving Business Equipment and/or raw materials offered through starter kits to get you started immediately.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 border-border/50 hover:border-secondary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Practical Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Two-prong entrepreneurship training by mentors and business financial literacy certified by Chinhoyi University of Technology.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Access to Credit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Options of zero deposit fully funded and deposit paid (partially funded) credit to suit your financial situation.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 border-border/50 hover:border-secondary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Monitoring & Evaluation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                After-sales service with monthly site visits for the first 3 months to ensure business continuity and longevity.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What's New Concept Section */}
      <section className="py-20 px-4 overflow-hidden relative">
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                What's New About <br />
                <span className="text-primary text-glow-orange">The Concept</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The concept is refreshingly innovative and gives individual personalized service. It has a 3-tier approach combining to form a robust business plan because of the following reasons.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">1</div>
                  <p className="text-muted-foreground"><span className="text-foreground font-semibold">Equipment suppliers</span> simply supply goods and leave the client to figure out the process by themselves.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">2</div>
                  <p className="text-muted-foreground"><span className="text-foreground font-semibold">Business consultancy</span> simply to entrepreneurship and leave the client to figure out the process by themselves.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">3</div>
                  <p className="text-muted-foreground"><span className="text-foreground font-semibold">Banks and microfinanciers</span> simply lend money and leave the client to figure out the process by themselves.</p>
                </div>
                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 mt-8">
                  <p className="text-xl font-bold text-foreground">
                    <span className="text-primary">Microbiz</span> is a pioneer in the industry by combining all the three to become <span className="text-glow-orange">1-stop shop!</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <Image 
                src="/adala.png" 
                alt="Microbiz 1-Stop Shop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-bold mb-2">The 1-Stop Shop Revolution</p>
                <p className="opacity-80">Empowering you with everything you need to succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ngwavha like others - Hustles Showcase */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <AnimatedText /> <span className="text-primary ml-4">like others!!!</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real businesses, real success stories. See what&apos;s possible when you partner with MicroBiz
            </p>
          </div>

          {/* Scrolling Hustles */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex gap-6 animate-scroll-right">
              {[
                {
                  title: "Hair Barbering",
                  description: "Professional hair cutting and styling services for the community.",
                  image: "/hustles/hair-barbering.png",
                  tag: "Service",
                },
                {
                  title: "Car Wash",
                  description: "Mobile and stationary car cleaning services.",
                  image: "/hustles/car-wash.png",
                  tag: "Service",
                },
                {
                  title: "Tomato Farming",
                  description: "Fresh tomato production for local markets.",
                  image: "/hustles/tomato-farming.png",
                  tag: "Agriculture",
                },
                {
                  title: "Cabbage Farming",
                  description: "Quality cabbage cultivation for retail and wholesale.",
                  image: "/hustles/cabbage-farming.png",
                  tag: "Agriculture",
                },
                {
                  title: "Chicken Rearing",
                  description: "Poultry farming for eggs and meat production.",
                  image: "/hustles/chicken-rearing.png",
                  tag: "Agriculture",
                },
                {
                  title: "Construction",
                  description: "Building and renovation services.",
                  image: "/hustles/construction.png",
                  tag: "Construction",
                },
                {
                  title: "Food Truck",
                  description: "Mobile food services and catering.",
                  image: "/hustles/food-truck.png",
                  tag: "Food & Beverage",
                },
              ]
                .concat([
                  {
                    title: "Hair Barbering",
                    description: "Professional hair cutting and styling services for the community.",
                    image: "/hustles/hair-barbering.png",
                    tag: "Service",
                  },
                  {
                    title: "Car Wash",
                    description: "Mobile and stationary car cleaning services.",
                    image: "/hustles/car-wash.png",
                    tag: "Service",
                  },
                  {
                    title: "Tomato Farming",
                    description: "Fresh tomato production for local markets.",
                    image: "/hustles/tomato-farming.png",
                    tag: "Agriculture",
                  },
                  {
                    title: "Cabbage Farming",
                    description: "Quality cabbage cultivation for retail and wholesale.",
                    image: "/hustles/cabbage-farming.png",
                    tag: "Agriculture",
                  },
                  {
                    title: "Chicken Rearing",
                    description: "Poultry farming for eggs and meat production.",
                    image: "/hustles/chicken-rearing.png",
                    tag: "Agriculture",
                  },
                  {
                    title: "Construction",
                    description: "Building and renovation services.",
                    image: "/hustles/construction.png",
                    tag: "Construction",
                  },
                  {
                    title: "Food Truck",
                    description: "Mobile food services and catering.",
                    image: "/hustles/food-truck.png",
                    tag: "Food & Beverage",
                  },
                ])
                .map((hustle, index) => (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-[320px] bg-card backdrop-blur border-border/50 shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-56 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                      <Image
                        src={hustle.image}
                        alt={hustle.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Tag badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary/90 backdrop-blur-sm text-white text-xs font-medium">
                        {hustle.tag}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {hustle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{hustle.description}</p>
                      <div className="flex items-center text-secondary text-sm font-medium">
                        Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

{/* Stats Section */}
  <section className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-transparent">
    <div className="container mx-auto">
      <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Our <span className="text-primary">Impact</span>
    </h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Real numbers that showcase our commitment to empowering entrepreneurs
    </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    <Card className="p-8 text-center bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 group">
      <div className="mb-4 flex justify-center">
        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
      <Users className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
        {409 + Math.floor((new Date().getTime() - new Date('2025-11-06').getTime()) / (1000 * 60 * 60 * 24)) * 17}
      </div>
      <p className="text-muted-foreground font-medium">Website Visitors</p>
    </Card>

    <Card className="p-8 text-center bg-card/50 backdrop-blur border-border/50 hover:border-secondary/50 transition-all duration-300 group">
      <div className="mb-4 flex justify-center">
        <div className="p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
      <TrendingUp className="w-8 h-8 text-secondary" />
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">92%</div>
      <p className="text-muted-foreground font-medium">Success Rate</p>
    </Card>

    <Card className="p-8 text-center bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 group">
      <div className="mb-4 flex justify-center">
        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
      <Rocket className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">17+</div>
      <p className="text-muted-foreground font-medium">Funded Clients</p>
    </Card>
      </div>
    </div>
  </section>

  {/* How to Get Started */}
      {/*<section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              How to <span className="text-primary">Get Started</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Starting your journey with MicroBiz is simple and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Browse Our Products",
                description: "Explore our range of microfinancing solutions tailored for different business needs.",
              },
              {
                step: "02",
                title: "Submit Your Application",
                description: "Fill out a simple application form on our partner portal with your business details.",
              },
              {
                step: "03",
                title: "Get Funded & Grow",
                description: "Once approved, receive your funding and start building your dream business.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-secondary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-secondary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>*/}
    </div>
  )
}
