import { Camera, Instagram, Facebook, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Wedding Photography", href: "#gallery" },
      { label: "Portrait Sessions", href: "#gallery" },
      { label: "Event Coverage", href: "#gallery" },
      { label: "Pre-Wedding Shoots", href: "#gallery" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Portfolio", href: "#gallery" },
      { label: "Video Gallery", href: "#videos" },
      { label: "Contact", href: "#contact" },
    ],
    social: [
      { icon: Instagram, href: "https://www.instagram.com/avasar_arts?igsh=ZWc1YmZzZ3gwbTZy", label: "Instagram" },
      { icon: Youtube, href: "https://www.youtube.com/@avasararts5779", label: "YouTube" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-display text-2xl font-semibold text-foreground hover:text-primary transition-colors mb-4"
            >
              <Camera className="w-8 h-8 text-primary" />
              <span>
                Avasar <span className="text-primary">Arts</span>
              </span>
            </a>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mt-4">
              Capturing life's precious moments with artistry and passion. 
              Your story, our lens, timeless memories.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick Info */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:+91 9824077411"
                  className="hover:text-primary transition-colors"
                >
                  +91 98240 77411
                </a>
              </li>
              <li>
                <a
                  href="mailto:avasararts@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  avasararts@gmail.com
                </a>
              </li>
              <li>Jamnagar, Gujarat, India</li>
              <li>Mon - Sat: 9AM - 7PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-muted-foreground">
              © {currentYear} Avasar Arts. All rights reserved.
            </p>
            <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary" /> for capturing memories
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
