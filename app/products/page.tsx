import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      name: "Retail Starter Pack",
      image: "/placeholder.jpg",
    },
    {
      name: "Animal Husbandry Pack",
      image: "/placeholder.jpg",
    },
    {
      name: "Tech & Services Pack",
      image: "/placeholder.jpg",
    },
    {
      name: "Food & Catering Pack",
      image: "/placeholder.jpg",
    },
    {
      name: "Beauty & Salon Pack",
      image: "/placeholder.jpg",
    },
    {
      name: "Construction & Building Pack",
      image: "/placeholder.jpg",
    },
    {
      name: "Transport & Logistics Pack",
      image: "/placeholder.jpg",
    },
    {
      name: "Fashion & Apparel Pack",
      image: "/placeholder.jpg",
    },
    {
      name: "Homeware Furniture & Electronics Pack",
      image: "/placeholder.jpg",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Business <span className="text-secondary text-glow-blue">Booster Packages</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Choose the perfect financing package for your business type. Each pack is tailored to provide exactly what
              you need to launch and grow successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-2xl"
              >
                {/* Image Section - Full width */}
                <div className="relative h-80 w-full bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Product name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Buttons */}
                <div className="p-6 space-y-3">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                    <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                      Apply on credit now <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full text-lg py-6">
                    <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                      Buy with cash now <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

