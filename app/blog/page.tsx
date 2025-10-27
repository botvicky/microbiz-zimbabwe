import { Card } from "@/components/ui/card"
import { Quote, Calendar, Users } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Stories & <span className="text-secondary text-glow-blue">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Success stories, testimonials, and insights from the MicroBiz community
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Client <span className="text-primary">Testimonials</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Thandiwe Ncube",
                business: "Thandie's Fashion Boutique",
                quote:
                  "MicroBiz gave me the capital I needed to turn my passion for fashion into a thriving business. Within 6 months, I've expanded to two locations!",
              },
              {
                name: "Simba Mutasa",
                business: "Simba's Transport Services",
                quote:
                  "The flexible repayment terms made it possible for me to invest in my first delivery van. Now I'm running a fleet of three vehicles!",
              },
              {
                name: "Grace Moyo",
                business: "Grace's Catering",
                quote:
                  "Not only did MicroBiz provide funding, but the business mentorship helped me develop a solid marketing strategy. My client base has tripled!",
              },
              {
                name: "Tafadzwa Chikwanha",
                business: "Tech Solutions ZW",
                quote:
                  "As a tech entrepreneur, I needed equipment and software. MicroBiz understood my needs and provided exactly what I needed to launch my consultancy.",
              },
              {
                name: "Rudo Sibanda",
                business: "Rudo's Beauty Salon",
                quote:
                  "The application process was so simple and fast. Within a week, I had the funds to open my dream salon. Thank you, MicroBiz!",
              },
              {
                name: "Farai Ndlovu",
                business: "Farai's Grocery Store",
                quote:
                  "MicroBiz believed in me when banks wouldn't. Now my store is the go-to place in my community. I'm forever grateful!",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all"
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Past <span className="text-secondary">Events</span>
          </h2>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-border">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">September 15, 2025</div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    Entrepreneur Networking Mixer - Harare
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Over 200 entrepreneurs gathered for an evening of networking, knowledge sharing, and celebration.
                    Featured panel discussions on scaling small businesses and navigating Zimbabwe's business landscape.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      200+ Attendees
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                      Networking
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 rounded-lg bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">August 10, 2025</div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    Financial Literacy Workshop - Bulawayo
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A full-day workshop focused on financial management for small businesses. Topics included budgeting,
                    cash flow management, and understanding financial statements. Participants received free resources
                    and one-on-one consultations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      150+ Attendees
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                      Workshop
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">July 5, 2025</div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Youth Entrepreneurship Summit</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Inspiring the next generation of Zimbabwean entrepreneurs. Young business owners shared their
                    success stories, and industry experts provided guidance on starting and growing businesses in
                    today's digital age.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      300+ Attendees
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                      Summit
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Why Partner with <span className="text-primary">MicroBiz?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Proven Track Record</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We've helped over 500 entrepreneurs launch and grow successful businesses across Zimbabwe.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Comprehensive Support</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Beyond funding, we provide mentorship, training, and ongoing business advisory services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Community Network</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Join a thriving community of entrepreneurs who support and learn from each other.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Local Understanding</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We understand the unique challenges and opportunities of doing business in Zimbabwe.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
