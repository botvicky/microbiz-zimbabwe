import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Tv, Lamp, Sun, Sofa, Shield, ArrowRight } from "lucide-react"

export default function HomewarePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Premium <br />
                <span className="text-primary text-glow-orange font-serif">Homeware & Electronics</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Elevate your living space with our curated selection of modern furniture, state-of-the-art electronics, and sustainable solar solutions.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  View Catalog <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                  Enquire Now
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 glow-orange group">
              <Image
                src="/homeware/furniture.png"
                alt="Modern Luxury Furniture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-2xl font-bold">Modern Comfort</p>
                <p className="text-white/80">Tailored for elegant living</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="px-4 py-20 bg-secondary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 underline decoration-primary/50 underline-offset-8">Our Specialties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Electronics */}
            <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/homeware/electronics.png"
                  alt="Modern Electronics"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Tv className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wider text-sm">Electronics</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Smart Living Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the latest in home entertainment and smart appliances.
                </p>
              </div>
            </Card>

            {/* Furniture */}
            <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/homeware/furniture.png"
                  alt="Modern Furniture"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Sofa className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wider text-sm">Furniture</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Artisan Furniture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quality craftsmanship designed to provide comfort and style for years to come.
                </p>
              </div>
            </Card>

            {/* Solar */}
            <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/homeware/solar.png"
                  alt="Solar Energy"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Sun className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold uppercase tracking-wider text-sm">Solar Solutions</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Clean Energy for Home</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reliable solar power installations for uninterrupted domestic and business needs.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality You Can Trust</h2>
              <p className="text-xl text-muted-foreground italic leading-relaxed mb-8">
                "We don't just sell products; we provide lifestyle solutions. Every piece in our collection is selected for its durability, design, and ability to transform a house into a home."
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">Verified</div>
                  <div className="text-sm text-muted-foreground">Quality Brands</div>
                </div>
                <div className="text-center border-l border-r border-border px-8">
                  <div className="text-2xl font-bold text-foreground">Guaranteed</div>
                  <div className="text-sm text-muted-foreground">Manufacturer Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">Expert</div>
                  <div className="text-sm text-muted-foreground">Installation Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
