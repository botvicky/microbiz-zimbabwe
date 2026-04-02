import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Tv, Lamp, Sun, Sofa, Shield, ArrowRight, CheckCheck, Award, Wrench } from "lucide-react"

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
      <section className="px-4 py-24 relative">
        <div className="container mx-auto">
          <div className="bg-card/40 backdrop-blur-2xl border border-primary/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)] group">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-50">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-500">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Quality You <span className="text-primary">Can Trust</span>
              </h2>
              
              <div className="relative px-8 py-10 mb-12 rounded-2xl bg-primary/5 border border-primary/10">
                <span className="absolute top-4 left-6 text-6xl text-primary/20 font-serif leading-none">"</span>
                <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed font-serif relative z-10">
                  We don&apos;t just sell products; we provide lifestyle solutions. Every piece in our collection is selected for its durability, design, and ability to transform a house into a home.
                </p>
                <span className="absolute bottom-4 right-6 text-6xl text-primary/20 font-serif leading-none">"</span>
              </div>

              <div className="grid md:grid-cols-3 gap-12 pt-8">
                <div className="flex flex-col items-center group/item">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover/item:scale-110 group-hover/item:bg-secondary/20 transition-all">
                    <CheckCheck className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="text-xl font-bold text-foreground mb-1">Verified</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Quality Brands</div>
                </div>

                <div className="flex flex-col items-center group/item border-y md:border-y-0 md:border-x border-border/50 py-8 md:py-0 px-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover/item:scale-110 group-hover/item:bg-primary/20 transition-all">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-xl font-bold text-foreground mb-1">Guaranteed</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Manufacturer Warranty</div>
                </div>

                <div className="flex flex-col items-center group/item">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover/item:scale-110 group-hover/item:bg-secondary/20 transition-all">
                    <Wrench className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="text-xl font-bold text-foreground mb-1">Expert</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Installation Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
