import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, ArrowRight, Briefcase, GraduationCap, CreditCard, BarChart3, HandHeart } from "lucide-react"

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Small Business <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              We help people become small business owners through starter packs and five key enablers
            </p>
          </div>

          {/* Five Key Enablers */}
          <div className="space-y-8">
            {/* Enabler 1 */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    <span className="text-primary">1.</span> Business Tools
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Equipment, machinery, raw materials, or stock to kickstart your business journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Enabler 2 */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    <span className="text-secondary">2.</span> Training & Education
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Hands-on Learning:</span> Practical lessons from seasoned business owners (our MicroBiz Legends)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Enterprise Training:</span> Business and entrepreneurship training with C.U.T (Chinhoyi University of Technology)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enabler 3 */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    <span className="text-primary">3.</span> Zero-Deposit Credit
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Flexible payment terms (6-36 months) available for:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">SSB civil servants</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">All government pensioners</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Direct deduction employees</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">ZB Bank account holders</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enabler 4 */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    <span className="text-secondary">4.</span> Monitoring & Evaluation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We track your progress and help fix early challenges to ensure your business stays on the right path when you assign relatives to the tasks.
                  </p>
                </div>
              </div>
            </div>

            {/* Enabler 5 */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HandHeart className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    <span className="text-primary">5.</span> Ongoing Support
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't just start you off — we will link you to business loans for your future working capital requirements to those who will start a banking record.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our AIM Section */}
      <section className="py-20 px-4 bg-card/30 backdrop-blur-sm border-t border-border/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-secondary text-glow-blue">AIM</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The goal of Microbiz is to firstly and foremost create small business owners through the provision of the following:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Business Equipment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Giving Business Equipment and/or raw materials offered through starter kits to get you started immediately.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 border-border/50 hover:border-secondary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Practical Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Two-prong entrepreneurship training, firstly by mentors already running similar businesses and secondly by business financial literacy certified by Chinhoyi University of Technology School of Business and Entrepreneurship department.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Access to Credit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Options of zero deposit fully funded and deposit paid (partially funded credit) to suit your financial situation.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 border-border/50 hover:border-secondary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Monitoring & Evaluation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                After-sales service program where we conduct monthly site visits for the first 3 months to ensure teething problems are resolved early, ensuring business continuity and longevity.
              </p>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8">
              <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
