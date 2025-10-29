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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              What <span className="text-primary">We Do</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
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
                        <span className="font-semibold text-foreground">Academic Training:</span> Business and entrepreneurship training with C.U.T (Chinhoyi University of Technology)
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
                    Flexible payment terms (3, 6, or 9 months) available for:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">SSB-paid civil servants</span>
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
                    We track your progress and help fix early challenges to ensure your business stays on the right path.
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
                    We don't just start you off — we follow through so your dreams get the chance to live and thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/20 to-transparent blur-2xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-blue mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Let's Launch Your Business <span className="text-secondary text-glow-blue">Into a New Orbit</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Partner with us to build futuristic strategies, unlock growth, and take your business light-years ahead of
              the competition.
            </p>

            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 mt-6">
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
