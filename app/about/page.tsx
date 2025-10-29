import { Card } from "@/components/ui/card"
import { Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              About <span className="text-primary text-glow-orange">MicroBiz Zimbabwe</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Empowering Zimbabwean entrepreneurs through innovative microfinancing solutions and strategic business
              support.
            </p>
          </div>
        </div>
      </section>

      {/* About Us (restored container card) */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <h2 className="text-3xl font-bold mb-6 text-primary">About Us</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                MicroBiz Zimbabwe is a fast-growing self-employment program helping people build micro and small
                businesses. We exist to fight unemployment and give a real alternative to traditional salaried work.
                The program helps ordinary men, women, and youth become confident entrepreneurs who are well equipped,
                well resourced, and well trained.
              </p>

              <h3 className="text-xl font-semibold text-secondary">Who We Support</h3>
              <ul className="list-disc pl-6 space-y-2 marker:text-secondary">
                <li>Employees who want to grow their income.</li>
                <li>Anyone starting a side hustle with full support.</li>
                <li>People supporting a spouse, child, or dependent to run a small business.</li>
                <li>Those nearing retirement who want purpose and a post-retirement vocation.</li>
                <li>Anyone seeking financial freedom and peace of mind.</li>
              </ul>

              <p>
                Our approach is holistic: we promote a mindset shift and strong financial literacy. We help people
                become producers of in-demand goods or services — “Zviri kuitisa mari” / “Iziku yenzesa mali”.
              </p>

              <p>
                Over the years, MicroBiz has helped many previously marginalised people start and grow sustainable
                incomes — all under one roof.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Mission & Vision (no container cards) */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Unlocking entrepreneurial potential by delivering accessible resources, expert mentorship, and
                cutting-edge financing solutions, driving business growth and economic prosperity.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be destiny transmutation architects and enablers of legacy building in the micro entrepreneurship
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - no container card, two lines; animations controlled by parent section */}
      <section className="px-4 py-12 values-anim">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-primary text-center">Our Values</h2>
          <p className="text-muted-foreground mb-6 text-center max-w-3xl mx-auto">
            In pursuit of our vision and mission, our professional code of conduct is anchored on the R.I.G.H.T values.
          </p>
          <div className="space-y-6">
            {/* Row 1: R, I, G */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3 value-item" data-dir="left" style={{ ['--delay' as any]: '0s' }}>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold">R</div>
                <div>
                  <h4 className="font-semibold text-foreground">Reliability</h4>
                  <p className="text-sm text-muted-foreground">To strive for the highest levels of reliability in all facets of our business by delivering what we promise on time.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 value-item" data-dir="right" style={{ ['--delay' as any]: '.8s' }}>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold">I</div>
                <div>
                  <h4 className="font-semibold text-foreground">Integrity</h4>
                  <p className="text-sm text-muted-foreground">To render integrity as the hallmark of our business conduct by doing what we say we will do.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 value-item" data-dir="left" style={{ ['--delay' as any]: '1.6s' }}>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold">G</div>
                <div>
                  <h4 className="font-semibold text-foreground">Genuineness</h4>
                  <p className="text-sm text-muted-foreground">To discharge our mandate with genuineness in all our dealings by executing tasks with competence.</p>
                </div>
              </div>
            </div>

            {/* Row 2: H, T */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3 value-item" data-dir="right" style={{ ['--delay' as any]: '2.4s' }}>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold">H</div>
                <div>
                  <h4 className="font-semibold text-foreground">Honesty</h4>
                  <p className="text-sm text-muted-foreground">To handle the affairs of the business with honesty at all times by acting in a responsible and accountable manner.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 value-item" data-dir="left" style={{ ['--delay' as any]: '3.2s' }}>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold">T</div>
                <div>
                  <h4 className="font-semibold text-foreground">Tenacity</h4>
                  <p className="text-sm text-muted-foreground">To pursue every set goal with tenacity by completing set objectives with speed and aggression.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Partners */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Working together to create opportunities for Zimbabwean civil servants entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Salary Services Bureau of Zimbabwe",
              "Zb Financial Holdings",
              "Small Enterprise Development Corporation",
              "National Building Society Bank of Zimbabwe",
            ].map((partner, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all flex items-center justify-center text-center"
              >
                <div>
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{partner}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
