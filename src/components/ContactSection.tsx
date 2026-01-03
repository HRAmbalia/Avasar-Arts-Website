import * as React from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98240 77411",
    href: "tel:+91 98240 77411",
  },
  {
    icon: Mail,
    label: "Email",
    value: "avasararts@gmail.com",
    href: "mailto:avasararts@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jamnagar, Gujarat, India",
    href: "https://www.google.com/maps/place/Avasar+Arts/@22.4619009,70.0459374,17z/data=!3m1!4b1!4m6!3m5!1s0x395715ff708f1bb3:0xdbe543b0efedd224!8m2!3d22.4619009!4d70.0459374!16s%2Fg%2F11xm8l6718?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9AM - 7PM",
    href: null,
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/avasar_arts?igsh=ZWc1YmZzZ3gwbTZy", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@avasararts5779", label: "YouTube" },
];

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const service = (formData.get("service") as string) || "General Inquiry";
    const message = (formData.get("message") as string) || "";

    const subject = `[Website] ${service} - ${name}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      "",
      message,
    ];
    const body = bodyLines.join("\n");

    const mailto = `mailto:avasararts@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Let's Create <span className="text-primary italic">Together</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Ready to capture your special moments? We'd love to hear from you. 
            Reach out to discuss your photography needs and let's create 
            something beautiful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div>
            <h3 className="font-display text-2xl text-foreground mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-foreground hover:text-primary transition-colors"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-card">
            <h3 className="font-display text-2xl text-foreground mb-6">
              Send a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="prewedding">Pre-Wedding Shoot</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="event">Event Coverage</option>
                  <option value="corporate">Corporate Photography</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your event or photography needs..."
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
