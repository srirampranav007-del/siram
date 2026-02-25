import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Factory, 
  Users, 
  ShieldCheck, 
  Truck, 
  MapPin, 
  Cog,
  Award,
  HeartHandshake
} from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "Modern Machinery",
    description: "Our facility houses state-of-the-art compacting equipment from leading manufacturers. Regular maintenance and upgrades ensure optimal performance and consistent results.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Our team includes experienced textile professionals who understand the nuances of fabric finishing. Continuous training keeps our operators at the cutting edge of industry practices.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Quality Control",
    description: "Every batch undergoes comprehensive testing at multiple stages. We maintain detailed quality records and provide test reports with each delivery.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "We understand that production schedules are critical. Our efficient processes and logistics partnerships ensure your fabrics are delivered on time, every time.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Located in Tirupur — India's textile hub — we offer convenient access for manufacturers across the region. Our proximity reduces transit times and logistics costs.",
  },
  {
    icon: Cog,
    title: "Flexible Processing",
    description: "Whether you need standard compacting or custom finishing parameters, we adapt our processes to meet your specific requirements and fabric types.",
  },
];

const additionalBenefits = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Years of successful partnerships with leading textile manufacturers and exporters speak to our reliability and expertise.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centric Approach",
    description: "We believe in building long-term relationships. Our team is always available to address concerns and explore solutions together.",
  },
];

const WhyChooseUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              The TextileCraft Difference
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When it comes to cotton compacting, the right partner makes all the 
              difference. Here's why leading textile manufacturers choose TextileCraft.
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 lg:p-8 rounded-xl hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-5">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                Location Advantage
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                At the Heart of India's Textile Hub
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tirupur is renowned globally as the "Knitwear Capital of India," 
                contributing significantly to the country's textile exports. Our 
                facility in Poyambalayam puts us right at the center of this 
                vibrant textile ecosystem.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This strategic location offers numerous advantages:
              </p>
              <ul className="space-y-3">
                {[
                  "Easy access for manufacturers across Tirupur and Coimbatore",
                  "Reduced transportation costs and faster turnaround",
                  "Strong network of textile industry suppliers and services",
                  "Access to skilled labor pool with textile expertise",
                  "Well-connected to major ports for export shipments",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Strategically positioned for your convenience
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <span className="text-sm font-medium text-foreground">Address</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Poyambalayam, Tirupur<br />
                    Tamil Nadu, India
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <span className="text-sm font-medium text-foreground">Nearby</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    30 mins from Tirupur city center<br />
                    1 hour from Coimbatore airport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-hero text-primary-foreground p-8 rounded-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-5">
                  <benefit.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Experience the TextileCraft Advantage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied clients who trust TextileCraft for their 
            cotton compacting needs. Let's discuss how we can support your business.
          </p>
          <Button asChild variant="default" size="xl">
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
