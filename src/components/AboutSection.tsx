import { Camera, Award, Heart, Users } from "lucide-react";
import photographerPortrait from "@/assets/photographer-portrait.jpg";

const stats = [
  { icon: Camera, value: "400+", label: "Photo Sessions" },
  { icon: Award, value: "20+", label: "Years Experience" },
  { icon: Heart, value: "250+", label: "Happy Couples" },
  { icon: Users, value: "1000+", label: "Clients Served" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-card">
              <img
                src={photographerPortrait}
                alt="Professional photographer from Avasar Arts holding a DSLR camera"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-primary uppercase tracking-[0.2em] text-sm mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              The Story Behind <span className="text-primary italic">Avasar Arts</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Welcome to Avasar Arts, where every photograph tells a story. 
                Founded with a passion for capturing life's most precious moments, 
                we have grown into a trusted name in professional photography.
              </p>
              <p>
                The word "Avasar" means "opportunity" or "occasion" in Hindi, 
                and that's exactly what we celebrate through our lens – every 
                special occasion, every fleeting moment, every beautiful opportunity 
                to create lasting memories.
              </p>
              <p>
                With over a decade of experience in wedding, portrait, event, 
                and commercial photography, our team brings creativity, technical 
                expertise, and an eye for detail to every project. We believe 
                that great photography is not just about equipment – it's about 
                understanding people, emotions, and the art of visual storytelling.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
