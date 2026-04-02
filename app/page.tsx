"use client"

import Link from "next/link"
import Image from "next/image"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, TrendingUp, Users, Zap, ArrowRight, Landmark, Briefcase, ShoppingCart } from "lucide-react"

function AnimatedText() {
  const words = ["Ngwavha", "Spana", "Hustle"]
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
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-6 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl glow-blue" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:pr-8">


              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
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
                <a href="https://wa.me/263773988988?text=Hi" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
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
                  href="https://www.facebook.com/profile.php?id=100064190430321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Follow us on Facebook</span>
                </a>
              </div>
            </div>
            
            {/* Right Image Grid */}
            <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] mt-12 lg:mt-0">
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

      {/* What's New Concept Section */}
      <section className="py-20 px-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              What's New About <br />
              <span className="text-primary text-glow-orange font-serif">The Concept</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The concept is refreshingly innovative and gives individual personalized service. It has a 3-tier approach combining to form a robust business plan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Equipment Suppliers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Traditional suppliers simply provide goods and leave you to figure out the business process alone.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Business Consultancy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Typical consultancies offer advice on entrepreneurship but often lack the resources to get you started.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Landmark className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Banks & Microfinanciers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Standard lenders provide capital but rarely offer the training or tools needed for business success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ngwavha like others - Hustles Showcase */}
      <section className="py-20 px-6 relative overflow-hidden">
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

    </div>
  )
}
