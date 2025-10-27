import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

export default function WhatsNewPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              What's <span className="text-primary text-glow-orange">New</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Stay updated with the latest news, updates, and upcoming events from MicroBiz Zimbabwe
            </p>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Latest <span className="text-secondary">Updates</span>
          </h2>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground">October 15, 2025</span>
                    <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">New</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Increased Funding Limits for All Starter Packs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We're excited to announce that we've increased the maximum funding amounts across all MicroBiz
                    Starter Packs by 25%. This means more capital to help you grow your business faster!
                  </p>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground">October 1, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">New Mobile App Coming Soon</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Manage your MicroBiz account on the go! Our new mobile app will allow you to track repayments,
                    access business resources, and connect with mentors—all from your smartphone.
                  </p>
                  <Button variant="link" className="text-secondary p-0 h-auto">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground">September 20, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Partnership with Zimbabwe Chamber of Commerce
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MicroBiz has partnered with the Zimbabwe Chamber of Commerce to provide additional business support
                    and networking opportunities for our clients.
                  </p>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Upcoming <span className="text-secondary">Events</span>
          </h2>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-primary flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-bold">25</span>
                    <span className="text-xs">NOV</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">MicroBiz Launch Event - Harare</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Rainbow Towers Hotel, Harare</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Join us for the official launch of MicroBiz Zimbabwe! Meet our team, learn about our products,
                    network with fellow entrepreneurs, and enjoy special launch-day offers.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Register Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-transparent border-secondary/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-secondary flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-bold">10</span>
                    <span className="text-xs">DEC</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Business Skills Workshop - Bulawayo</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">10:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Bulawayo Business Hub</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Free workshop covering essential business skills including financial management, marketing
                    strategies, and customer service. Open to all MicroBiz clients and applicants.
                  </p>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                  >
                    Register Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-primary flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-bold">15</span>
                    <span className="text-xs">JAN</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Women in Business Summit</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Meikles Hotel, Harare</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Celebrating and empowering women entrepreneurs. Featuring keynote speakers, panel discussions, and
                    networking opportunities with successful businesswomen.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Register Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
