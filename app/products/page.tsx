import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Store, Truck, Laptop, Utensils, Scissors, ShoppingBag, ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      icon: Store,
      name: "Retail Starter Pack",
      amount: "$500 - $2,000",
      description:
        "Perfect for starting a small retail shop or convenience store. Includes inventory funding and business setup support.",
      features: [
        "Initial inventory funding",
        "Shop setup assistance",
        "Supplier connections",
        "Basic business training",
      ],
    },
    {
      icon: Truck,
      name: "Animal Husbandry Pack",
      amount: "$800 - $3,500",
      description:
        "For livestock farming including chicken rearing, cattle farming, rabbit breeding, and goat farming. Complete support for animal-based businesses.",
      features: [
        "Livestock purchase funding",
        "Feed & nutrition supplies",
        "Housing & shelter setup",
        "Veterinary care support",
      ],
    },
    {
      icon: Laptop,
      name: "Tech & Services Pack",
      amount: "$600 - $2,500",
      description: "For tech entrepreneurs, consultants, and service providers. Get equipment and marketing funding.",
      features: [
        "Computer & software",
        "Website development",
        "Marketing budget",
        "Co-working space access",
      ],
    },
    {
      icon: Utensils,
      name: "Food & Catering Pack",
      amount: "$300 - $1,500",
      description: "Ideal for food vendors, caterers, and restaurant startups. Get equipment and ingredient funding.",
      features: [
        "Kitchen equipment funding",
        "Initial ingredient stock",
        "Food safety certification",
        "Marketing support",
      ],
    },
    {
      icon: Scissors,
      name: "Beauty & Salon Pack",
      amount: "$400 - $1,800",
      description: "Launch your beauty salon, barbershop, or mobile beauty service with professional equipment.",
      features: ["Professional equipment", "Product inventory", "Location setup support", "Client management tools"],
    },
    {
      icon: Truck,
      name: "Construction & Building Pack",
      amount: "$1,200 - $6,000",
      description: "For construction businesses including pool installation, tiling, plumbing, and general contracting. Get tools and equipment funding.",
      features: ["Professional tools & equipment", "Material purchase funding", "Vehicle/transport support", "Insurance assistance"],
    },
    {
      icon: Truck,
      name: "Transport & Logistics Pack",
      amount: "$1,000 - $5,000",
      description: "Start or expand your transport business with vehicle down payments and operational capital.",
      features: ["Vehicle down payment", "Fuel & maintenance fund", "Route planning support", "Insurance assistance"],
    },
    {
      icon: ShoppingBag,
      name: "Fashion & Apparel Pack",
      amount: "$500 - $2,200",
      description: "Launch your clothing line, boutique, or tailoring business with inventory and equipment funding.",
      features: ["Fabric & materials", "Sewing equipment", "Display fixtures", "Brand development"],
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
              MicroBiz <span className="text-secondary text-glow-blue">Starter Packs</span>
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
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all duration-300 group flex flex-col"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:glow-blue transition-all">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-foreground">{product.name}</h3>
                  <p className="text-primary font-semibold text-lg mb-3">{product.amount}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>

                  <div className="space-y-2 mb-6 flex-1">
                    <p className="text-sm font-semibold text-foreground">What's Included:</p>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Why Choose <span className="text-primary">MicroBiz Starter Packs?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Flexible Repayment</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Repayment terms designed to match your business cash flow, with grace periods available.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Fast Approval</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Get approved in 3-5 business days and receive your funding within 48 hours.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Business Support</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Access to mentorship, training, and ongoing business advisory services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">No Hidden Fees</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Transparent pricing with no surprise charges or hidden costs.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
