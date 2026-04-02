import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/20 backdrop-blur border-t border-secondary/30 mt-20 shadow-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center justify-center mb-4 group">
              <div className="relative w-64 h-20 flex items-center justify-center">
                <Image
                  src="/microbiz-logo.png"
                  alt="MicroBiz Zimbabwe"
                  width={256}
                  height={80}
                  className="object-contain brightness-[1.3] contrast-[1.1] transition-all duration-300 group-hover:brightness-[1.5] group-hover:contrast-[1.2]"
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              Empowering Zimbabwean entrepreneurs through innovative microfinancing solutions.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100064190430321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium group-hover:text-primary transition-colors">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Mission & Values
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Business Boaster Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/whats-new"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  What's New
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Details
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/263773988988?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+2632427448840" className="text-sm text-muted-foreground hover:text-foreground">
                  (0242) 744 840
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@bancozim.co.zw" className="text-sm text-muted-foreground hover:text-foreground">
                  info@bancozim.co.zw
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  5th Floor Pockets Building, 50 Jason Moyo Street, P.O Box CY 2222, Harare
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
