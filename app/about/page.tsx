import { Card } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"

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

      {/* About BancoZim */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              About <span className="text-primary">BancoZim Holdings</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                BancoZim Holdings is a leading microfinancing company in Zimbabwe, dedicated to providing accessible
                financial solutions to small and micro businesses across the nation.
              </p>
              <p>
                Founded with the vision of democratizing access to capital, BancoZim has helped thousands of
                entrepreneurs turn their business dreams into reality. Our MicroBiz program is specifically designed to
                support small business owners who need funding to start or expand their operations.
              </p>
              <p>
                We believe that every entrepreneur deserves a chance to succeed, regardless of their background or
                current financial situation. Through flexible financing options, competitive rates, and comprehensive
                business support, we're building a stronger, more prosperous Zimbabwe—one business at a time.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-transparent border-secondary/30">
              <Target className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower Zimbabwean entrepreneurs with accessible microfinancing solutions and strategic support that
                enables them to build sustainable, thriving businesses that contribute to economic growth and community
                development.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Zimbabwe's most trusted microfinancing partner, recognized for transforming lives through
                innovative financial solutions and creating a nation of successful, self-reliant entrepreneurs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-secondary">Leadership Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals guiding MicroBiz Zimbabwe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Mr Alex Chitamba",
                role: "Chief Executive Officer",
                bio: "5+ years in microfinance and economic development",
              },
              {
                name: "Miss Geraldine",
                role: "Chief Financial Officer",
                bio: "Expert in financial strategy and risk management",
              },
              {
                name: "Mr Makomborero",
                role: "Head of Stores Operations",
                bio: "Specialist in business process optimization",
              },
              {
                name: "Miss Lindsey",
                role: "Office Administrator and HR Manager",
                bio: "Passionate about entrepreneur empowerment",
              },
              {
                name: "Miss Victoria C Mahuni",
                role: "Systems Administrator",
                bio: "Driving digital innovation in microfinance",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
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
