import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Award, Shield, Truck, Factory, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-textile.jpg";
import cottonFabric from "@/assets/cotton-fabric.jpg";
import compactingMachine from "@/assets/compacting-machine.jpg";
const highlights = [{
  icon: Award,
  title: "Premium Quality",
  description: "Industry-leading cotton compacting that meets the highest international standards."
}, {
  icon: Shield,
  title: "Trusted Expertise",
  description: "Decades of experience in textile processing with a proven track record."
}, {
  icon: Truck,
  title: "Timely Delivery",
  description: "Reliable turnaround times to keep your production on schedule."
}, {
  icon: Factory,
  title: "Modern Facility",
  description: "State-of-the-art machinery in our Tirupur production facility."
}];
const stats = [{
  value: "20+",
  label: "Years Experience"
}, {
  value: "500+",
  label: "Happy Clients"
}, {
  value: "10M+",
  label: "Meters Processed"
}, {
  value: "99%",
  label: "Quality Rating"
}];
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="Textile manufacturing facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Tirupur, Tamil Nadu — India's Textile Hub
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">Sri Raajamurugan

Cotton Compacting<span className="block text-secondary">Cotton Compacting</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-2xl">
              Transform your cotton fabrics with precision compacting that delivers 
              superior quality, dimensional stability, and the perfect finish your 
              clients expect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/process">Learn Our Process</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card border-b border-border py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                About Our Company
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Your Trusted Partner in Cotton Finishing</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
            </p>
              <p className="leading-relaxed mb-8 text-black mx-[2px] my-[2px] px-[2px] py-[2px] font-serif text-left font-medium">Our company is located in Boyambalayam, Tiruppur, a hub for the textile industry. Owned by Mr. K. Narayanaswamy and Mrs. Pongodi, the company is built on more than 20 years of experience in the field of cotton compacting and knit finishing.  
With strong industry knowledge and hands-on expertise, we are committed to delivering high-quality compacting services with consistency and reliability. We operate with a dedicated workforce of 50+ skilled employees, supported by well-maintained infrastructure and modern machinery. Our facility is equipped with three compacting (featherweight) machines, two weighing machines, and a boiler system to ensure smooth and efficient operations.   
We focus on timely delivery, strict quality control, and meeting customer expectations at every stage. We provide accommodation facilities for both bachelor workers and families, along with hygienic food prepared by an in-house chef at a minimal cost.</p>
              <ul className="space-y-3 mb-8">
                {["ISO-certified quality processes", "Eco-friendly compacting solutions", "Custom finishing options available", "Competitive pricing with no compromise on quality"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="default" size="lg">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                <img src={cottonFabric} alt="Premium cotton fabric rolls" className="w-full h-auto object-cover aspect-[4/3]" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                <div className="font-display text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Why Work With Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              The TextileCraft Advantage
            </h2>
            <p className="text-muted-foreground">
              We deliver excellence at every step — from fabric intake to final delivery. 
              Here's what sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((item, index) => <div key={index} className="bg-card p-6 lg:p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img src={compactingMachine} alt="Modern compacting machinery" className="w-full h-auto object-cover aspect-[4/3]" />
              </div>
            </div>
            <div>
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Precision Cotton Compacting
              </h2>
              <p className="leading-relaxed mb-6 text-black font-serif text-lg">Cotton compacting is a specialized finishing process that reduces the thickness of cotton fabric, enhances its smoothness, and improves its overall quality. This process involves using heat and pressure to compact the cotton fibers, resulting in a denser, more durable fabric.</p>
              <ul className="space-y-4 mb-8">
                {[{
                title: "Reduced Shrinkage",
                desc: "Up to 3-5% less shrinkage after washing"
              }, {
                title: "Enhanced Stability",
                desc: "Better dimensional control and consistency"
              }, {
                title: "Improved Hand Feel",
                desc: "Softer, more luxurious fabric texture"
              }].map((item, index) => <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">{item.title}</span>
                      <span className="text-muted-foreground"> — {item.desc}</span>
                    </div>
                  </li>)}
              </ul>
              <Button asChild variant="default" size="lg">
                <Link to="/process">
                  View Full Process
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Elevate Your Fabric Quality?
          </h2>
          <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto mb-8">
            Partner with TextileCraft for cotton compacting services that deliver 
            exceptional results. Get in touch today for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/why-choose-us">Why Choose Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;