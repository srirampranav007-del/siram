import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
export function Footer() {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">RM</span>
              </div>
              <div>
                <span className="font-display font-semibold text-lg">Raajamurugan </span>
                <span className="block text-xs text-primary-foreground/70 -mt-1">Cotton Compacting</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium cotton compacting and finishing services from the heart of India's textile hub. 
              Delivering quality that speaks for itself.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[{
              name: "About Us",
              path: "/about"
            }, {
              name: "Our Process",
              path: "/process"
            }, {
              name: "Why Choose Us",
              path: "/why-choose-us"
            }, {
              name: "Contact Us",
              path: "/contact"
            }].map(link => <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Poyambalayam, Tirupur,<br />Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 7092115337</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">raajamurugantup@gmail.com
              </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Monday - Saturday</p>
                  <p>9:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} TextileCraft. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Crafted with precision in Tirupur, India
            </p>
          </div>
        </div>
      </div>
    </footer>;
}