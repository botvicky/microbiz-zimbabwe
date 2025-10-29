import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Glowing orb effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/30 rounded-full blur-3xl glow-blue" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium mb-4">
              Empowering Zimbabwean Entrepreneurs
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Unlock Infinite Possibilities for <span className="text-secondary text-glow-blue">Your Business</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              We help your business go beyond limits by providing innovative microfinancing solutions, futuristic
              strategies, and measurable results that make you shine among the stars.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
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
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:glow-blue transition-all">
                <Rocket className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Futuristic Strategies</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We craft smart, innovative strategies designed to keep your business ahead of the curve.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:glow-orange transition-all">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Trusted Expertise</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                With years of experience, we've partnered with 150+ businesses to deliver impactful results.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:glow-blue transition-all">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Creative Excellence</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From branding to user experience, we deliver creative solutions that captivate your audience.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:glow-orange transition-all">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Scalable Growth</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We help your business scale rapidly while maintaining sustainable growth in competitive markets.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 px-4">
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
      </section>
    </div>
  )
}
