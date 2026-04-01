import { Card } from "@/components/ui/card"
import { Target, Award, Globe, Users, Briefcase, Heart, TrendingUp, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      
      {/* Mission & Vision - Stacked Vertically */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl space-y-8">
          {/* Our Mission */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border border-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-10 h-10 text-secondary" />
              <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower aspiring and existing entrepreneurs in Zimbabwe by providing access to resources, mentorship and innovative credit solutions so as to foster economic growth.
            </p>
          </div>

          {/* Our Vision */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-10 h-10 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become a leading force in unlocking human potential in the entrepreneurship ecosystem and create sustainable employment and enduring prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values - R.I.G.H.T displayed vertically */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-center">Our Values</h2>
          <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto text-lg">
            In pursuit of our vision and mission, our professional code of conduct is anchored on the R.I.G.H.T values.
          </p>
          
          {/* Vertical R.I.G.H.T Layout */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* R - Reliability */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                R
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">Reliability</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To strive for the highest levels of reliability in all facets of our business by delivering what we promise on time.
                </p>
              </div>
            </div>

            {/* I - Integrity */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">Integrity</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To render integrity as the hallmark of our business conduct by doing what we say we will do.
                </p>
              </div>
            </div>

            {/* G - Genuineness */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                G
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">Genuineness</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To discharge our mandate with genuineness in all our dealings by executing tasks with competence.
                </p>
              </div>
            </div>

            {/* H - Honesty */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                H
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">Honesty</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To handle the affairs of the business with honesty at all times by acting in a responsible and accountable manner.
                </p>
              </div>
            </div>

            {/* T - Tenacity */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                T
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">Tenacity</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To pursue every set goal with tenacity by completing set objectives with speed and aggression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          {/* Approach */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border border-primary/20 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground text-center">Our Approach</h3>
            <p className="text-muted-foreground leading-relaxed text-center mb-4">
              Our approach is holistic: we promote a mindset shift and strong financial literacy. We help people
              become producers of in-demand goods or services — <span className="font-semibold text-foreground">"Zviri kuitisa mari"</span> / <span className="font-semibold text-foreground">"Iziku yenzesa mali"</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Over the years, MicroBiz has helped many previously marginalized people start and grow sustainable
              incomes — all under one roof.
            </p>
          </div>

          {/* Who We Support */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-secondary text-center">Who We Support</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Income Growth</h4>
                    <p className="text-sm text-muted-foreground">Employees who want to grow their income.</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Side Hustlers</h4>
                    <p className="text-sm text-muted-foreground">Anyone starting a side hustle with full support.</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Family Support</h4>
                    <p className="text-sm text-muted-foreground">People supporting a spouse, child, or dependent to run a small business.</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pre-Retirees</h4>
                    <p className="text-sm text-muted-foreground">Those nearing retirement who want purpose and a post-retirement vocation.</p>
                  </div>
                </div>
              </div>

              <div className="group md:col-span-2">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Financial Freedom Seekers</h4>
                    <p className="text-sm text-muted-foreground">Anyone seeking financial freedom and peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
