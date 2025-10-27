import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Get in <span className="text-primary text-glow-orange">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Have questions? We're here to help you start your entrepreneurial journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Phone</h3>
              <p className="text-muted-foreground text-sm mb-2">Call us during business hours</p>
              <a href="tel:+2632427448840" className="text-primary hover:underline">
                (0242) 744 840
              </a>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
              <p className="text-muted-foreground text-sm mb-2">Send us an email anytime</p>
              <a href="mailto:info@bancozim.co.zw" className="text-secondary hover:underline">
                info@bancozim.co.zw
              </a>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Location</h3>
              <p className="text-muted-foreground text-sm mb-2">Visit our office</p>
              <p className="text-primary text-sm">
                5th Floor Pockets Building
                <br />
                50 Jason Moyo Street
                <br />
                P.O Box CY 2222, Harare
              </p>
            </Card>
          </div>

          {/* Office Hours */}
          <Card className="p-8 bg-card/50 backdrop-blur border-border mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
              Office <span className="text-secondary">Hours</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="font-semibold text-foreground">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-semibold text-foreground">8:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-semibold text-foreground">Closed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Public Holidays</span>
                <span className="font-semibold text-foreground">Closed</span>
              </div>
            </div>
          </Card>

          {/* Social Media */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Follow Us on <span className="text-primary">Social Media</span>
            </h2>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  TikTok
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                asChild
              >
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 mr-2" />
                  YouTube
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Start Your <span className="text-primary">Business Journey?</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Don't wait any longer. Apply for a MicroBiz Starter Pack today and turn your entrepreneurial dreams into
              reality.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
              <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}
